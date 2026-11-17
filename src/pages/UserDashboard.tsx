import { useMemo, useState } from 'react';
import DashboardSidebar from '../components/dashboard/DashboardSidebar';
import DashboardTopbar from '../components/dashboard/DashboardTopbar';
import StatCards from '../components/dashboard/StatCards';
import UserDetailModal from '../components/dashboard/UserDetailModal';
import UserFormModal from '../components/dashboard/UserFormModal';
import UserTable from '../components/dashboard/UserTable';
import { initialUsers } from '../data/users';
import type { RoleFilter, User } from '../data/users';
import type { UserFormValues } from '../components/dashboard/UserFormModal';

type FormModalState = {
  mode: 'add' | 'edit';
  user?: User;
};

const NEW_USER_THRESHOLD = Date.now() - 30 * 24 * 60 * 60 * 1000;

export default function UserDashboard() {
  const [users, setUsers] = useState<User[]>(initialUsers);
  const [search, setSearch] = useState('');
  const [roleFilter, setRoleFilter] = useState<RoleFilter>('Semua');
  const [page, setPage] = useState(1);
  const [rowsPerPage, setRowsPerPage] = useState(5);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [formModal, setFormModal] = useState<FormModalState | null>(null);
  const [detailUser, setDetailUser] = useState<User | null>(null);

  const filteredUsers = useMemo(() => {
    const query = search.trim().toLowerCase();

    return users.filter((user) => {
      const matchesRole = roleFilter === 'Semua' || user.role === roleFilter;
      const searchableValues = [
        user.name,
        user.email,
        user.phone,
        user.petName ?? '',
        user.petType ?? '',
      ];
      const matchesSearch =
        query.length === 0 ||
        searchableValues.some((value) => value.toLowerCase().includes(query));

      return matchesRole && matchesSearch;
    });
  }, [users, search, roleFilter]);

  const totalPages = Math.max(1, Math.ceil(filteredUsers.length / rowsPerPage));
  const currentPage = Math.min(page, totalPages);
  const startIndex = (currentPage - 1) * rowsPerPage;
  const paginatedUsers = filteredUsers.slice(startIndex, startIndex + rowsPerPage);

  const customerCount = users.filter((user) => user.role === 'Customer').length;
  const staffCount = users.length - customerCount;
  const newUserCount = users.filter(
    (user) => new Date(user.joinedAt).getTime() >= NEW_USER_THRESHOLD,
  ).length;

  const handleSearchChange = (value: string) => {
    setSearch(value);
    setPage(1);
  };

  const handleRoleChange = (value: RoleFilter) => {
    setRoleFilter(value);
    setPage(1);
  };

  const handleRowsPerPageChange = (value: number) => {
    setRowsPerPage(value);
    setPage(1);
  };

  const handleDelete = (user: User) => {
    const confirmed = window.confirm(
      `Hapus data ${user.name}? Tindakan ini tidak dapat dibatalkan.`,
    );
    if (confirmed) {
      setUsers((previous) => previous.filter((item) => item.id !== user.id));
    }
  };

  const handleSubmit = (values: UserFormValues) => {
    if (formModal?.mode === 'edit' && formModal.user) {
      const targetId = formModal.user.id;
      setUsers((previous) =>
        previous.map((item) => (item.id === targetId ? { ...item, ...values } : item)),
      );
    } else {
      const nextId = users.reduce((max, item) => Math.max(max, item.id), 0) + 1;
      const newUser: User = {
        id: nextId,
        joinedAt: new Date().toISOString().slice(0, 10),
        ...values,
      };
      setUsers((previous) => [newUser, ...previous]);
      setPage(1);
    }

    setFormModal(null);
  };

  const handleEditFromDetail = (user: User) => {
    setDetailUser(null);
    setFormModal({ mode: 'edit', user });
  };

  return (
    <div className="min-h-screen bg-[#fafaf9] lg:flex">
      <DashboardSidebar isOpen={isSidebarOpen} onClose={() => setIsSidebarOpen(false)} />

      <div className="flex min-w-0 flex-1 flex-col">
        <DashboardTopbar
          search={search}
          onSearchChange={handleSearchChange}
          onMenuClick={() => setIsSidebarOpen(true)}
          onAddUser={() => setFormModal({ mode: 'add' })}
        />

        <main className="flex-1 space-y-6 p-4 sm:p-6">
          <StatCards
            total={users.length}
            customers={customerCount}
            staff={staffCount}
            newUsers={newUserCount}
          />

          <UserTable
            users={paginatedUsers}
            total={filteredUsers.length}
            page={currentPage}
            totalPages={totalPages}
            rowsPerPage={rowsPerPage}
            role={roleFilter}
            onRoleChange={handleRoleChange}
            onPageChange={setPage}
            onRowsPerPageChange={handleRowsPerPageChange}
            onView={setDetailUser}
            onEdit={(user) => setFormModal({ mode: 'edit', user })}
            onDelete={handleDelete}
          />
        </main>
      </div>

      {formModal && (
        <UserFormModal
          key={`${formModal.mode}-${formModal.user?.id ?? 'new'}`}
          mode={formModal.mode}
          user={formModal.user}
          onClose={() => setFormModal(null)}
          onSubmit={handleSubmit}
        />
      )}

      {detailUser && (
        <UserDetailModal
          user={detailUser}
          onClose={() => setDetailUser(null)}
          onEdit={handleEditFromDetail}
        />
      )}
    </div>
  );
}
