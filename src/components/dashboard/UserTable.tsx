import {
  CalendarDays,
  ChevronLeft,
  ChevronRight,
  Eye,
  Mail,
  PawPrint,
  Pencil,
  Phone,
  Trash2,
} from 'lucide-react';
import type { ReactNode } from 'react';
import type { RoleFilter, User, UserRole } from '../../data/users';
import { roleLabels } from '../../data/users';

type UserTableProps = {
  users: User[];
  total: number;
  page: number;
  totalPages: number;
  rowsPerPage: number;
  role: RoleFilter;
  onRoleChange: (role: RoleFilter) => void;
  onPageChange: (page: number) => void;
  onRowsPerPageChange: (rows: number) => void;
  onView: (user: User) => void;
  onEdit: (user: User) => void;
  onDelete: (user: User) => void;
};

const roleStyles: Record<UserRole, string> = {
  Customer: 'bg-teal-50 text-teal-700 ring-teal-600/10',
  Vet: 'bg-orange-50 text-orange-700 ring-orange-600/10',
  Admin: 'bg-gray-100 text-gray-700 ring-gray-600/10',
  user: '',
  admin: ''
};

const avatarStyles: Record<UserRole, string> = {
  Customer: 'from-teal-300 to-teal-500',
  Vet: 'from-orange-300 to-orange-500',
  Admin: 'from-gray-400 to-gray-600',
  user: '',
  admin: ''
};

const roleOptions: RoleFilter[] = ['Semua', 'Customer', 'Vet', 'Admin'];

const getInitials = (name: string) =>
  name
    .split(' ')
    .filter(Boolean)
    .slice(0, 2)
    .map((part) => part[0])
    .join('')
    .toUpperCase();

const formatDate = (value: string) =>
  new Date(value).toLocaleDateString('id-ID', {
    day: '2-digit',
    month: 'short',
    year: 'numeric',
  });

type PageItem = number | 'ellipsis';

function getPageNumbers(current: number, total: number): PageItem[] {
  if (total <= 5) {
    return Array.from({ length: total }, (_, index) => index + 1);
  }

  const pages: PageItem[] = [1];
  if (current > 3) pages.push('ellipsis');

  for (let page = Math.max(2, current - 1); page <= Math.min(total - 1, current + 1); page += 1) {
    pages.push(page);
  }

  if (current < total - 2) pages.push('ellipsis');
  pages.push(total);

  return pages;
}

function ActionButton({
  label,
  onClick,
  className,
  children,
}: {
  label: string;
  onClick: () => void;
  className: string;
  children: ReactNode;
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      aria-label={label}
      title={label}
      className={`rounded-lg p-2 transition-colors ${className}`}
    >
      {children}
    </button>
  );
}

export default function UserTable({
  users,
  total,
  page,
  totalPages,
  rowsPerPage,
  role,
  onRoleChange,
  onPageChange,
  onRowsPerPageChange,
  onView,
  onEdit,
  onDelete,
}: UserTableProps) {
  const startItem = total === 0 ? 0 : (page - 1) * rowsPerPage + 1;
  const endItem = Math.min(page * rowsPerPage, total);

  return (
    <section className="overflow-hidden rounded-3xl border border-gray-100 bg-white shadow-sm">
      <div className="flex flex-col gap-3 border-b border-gray-100 p-4 sm:flex-row sm:items-center sm:justify-between sm:p-5">
        <div>
          <h2 className="text-base font-bold text-gray-800">Daftar Pelanggan</h2>
          <p className="mt-0.5 text-xs text-gray-500">
            {total} pengguna ditemukan{role !== 'Semua' ? ` · filter ${roleLabels[role]}` : ''}
          </p>
        </div>

        <label className="flex items-center gap-2 text-sm text-gray-500">
          <span className="whitespace-nowrap">Filter peran</span>
          <select
            value={role}
            onChange={(event) => onRoleChange(event.target.value as RoleFilter)}
            className="rounded-xl border border-gray-200 bg-gray-50 px-3 py-2 text-sm font-medium text-gray-700 outline-none transition focus:border-teal-400 focus:bg-white focus:ring-2 focus:ring-teal-100"
          >
            {roleOptions.map((option) => (
              <option key={option} value={option}>
                {option === 'Semua' ? 'Semua Peran' : roleLabels[option]}
              </option>
            ))}
          </select>
        </label>
      </div>

      <div className="overflow-x-auto">
        <table className="w-full min-w-[880px] text-left text-sm">
          <thead>
            <tr className="border-b border-gray-100 bg-teal-50/40 text-xs uppercase tracking-wider text-gray-500">
              <th scope="col" className="w-16 px-5 py-3 font-semibold">
                No.
              </th>
              <th scope="col" className="px-5 py-3 font-semibold">
                Nama &amp; Peran
              </th>
              <th scope="col" className="px-5 py-3 font-semibold">
                Email / Kontak
              </th>
              <th scope="col" className="px-5 py-3 font-semibold">
                Tanggal Bergabung
              </th>
              <th scope="col" className="px-5 py-3 text-right font-semibold">
                Aksi
              </th>
            </tr>
          </thead>
          <tbody>
            {users.map((user, index) => {
              const userRole = user.role ?? 'Customer';
              const avatarClass = avatarStyles[userRole] ?? 'from-teal-300 to-teal-500';
              const roleClass = roleStyles[userRole] ?? 'bg-teal-50 text-teal-700 ring-teal-600/10';
              const roleLabel = roleLabels[userRole] ?? 'Customer';

              return (
                <tr
                  key={user.id}
                  className="border-b border-gray-100 transition-colors last:border-0 hover:bg-teal-50/30"
                >
                  <td className="px-5 py-4 font-medium text-gray-400">
                    {(page - 1) * rowsPerPage + index + 1}
                  </td>

                  <td className="px-5 py-4">
                    <div className="flex items-center gap-3">
                      <div
                        className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-gradient-to-br ${avatarClass} text-xs font-bold text-white shadow-sm`}
                      >
                        {getInitials(user.name)}
                      </div>
                      <div className="min-w-0">
                        <p className="truncate font-semibold text-gray-800">{user.name}</p>
                        <div className="mt-1 flex flex-wrap items-center gap-2">
                          <span
                            className={`inline-flex rounded-full px-2 py-0.5 text-[11px] font-semibold ring-1 ring-inset ${roleClass}`}
                          >
                            {roleLabel}
                          </span>
                          {user.petName ? (
                            <span className="inline-flex items-center gap-1 text-xs text-gray-500">
                              <PawPrint size={12} className="text-teal-500" />
                              {user.petName}
                              {user.petType ? ` · ${user.petType}` : ''}
                            </span>
                          ) : (
                            <span className="text-xs text-gray-400">Tim Pawfect Care</span>
                          )}
                        </div>
                      </div>
                    </div>
                  </td>

                <td className="px-5 py-4">
                  <div className="flex items-center gap-2 text-gray-700">
                    <Mail size={14} className="shrink-0 text-gray-400" />
                    <span className="truncate">{user.email}</span>
                  </div>
                  <div className="mt-1 flex items-center gap-2 text-xs text-gray-400">
                    <Phone size={12} className="shrink-0" />
                    {user.phone}
                  </div>
                </td>

                <td className="px-5 py-4">
                  <div className="flex items-center gap-2 text-gray-600">
                    <CalendarDays size={14} className="shrink-0 text-gray-400" />
                    {formatDate(user.createdAt || '')} 
                  </div>
                </td>

                <td className="px-5 py-4">
                  <div className="flex items-center justify-end gap-1">
                    <ActionButton
                      label="Lihat detail"
                      onClick={() => onView(user)}
                      className="text-teal-600 hover:bg-teal-50"
                    >
                      <Eye size={16} />
                    </ActionButton>
                    <ActionButton
                      label="Edit pengguna"
                      onClick={() => onEdit(user)}
                      className="text-orange-500 hover:bg-orange-50"
                    >
                      <Pencil size={16} />
                    </ActionButton>
                    <ActionButton
                      label="Hapus pengguna"
                      onClick={() => onDelete(user)}
                      className="text-rose-600 hover:bg-rose-50"
                    >
                      <Trash2 size={16} />
                    </ActionButton>
                  </div>
                </td>
                </tr>
              );
            })}

            {users.length === 0 && (
              <tr>
                <td colSpan={5} className="px-5 py-16 text-center">
                  <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-teal-50 text-teal-400">
                    <PawPrint size={26} />
                  </div>
                  <p className="mt-4 font-semibold text-gray-700">Pengguna tidak ditemukan</p>
                  <p className="mt-1 text-sm text-gray-500">
                    Coba ubah kata kunci pencarian atau filter peran.
                  </p>
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>

      <div className="flex flex-col gap-4 border-t border-gray-100 p-4 sm:flex-row sm:items-center sm:justify-between sm:p-5">
        <p className="text-sm text-gray-500">
          Menampilkan{' '}
          <span className="font-semibold text-gray-700">
            {startItem}–{endItem}
          </span>{' '}
          dari <span className="font-semibold text-gray-700">{total}</span> pengguna
        </p>

        <div className="flex flex-wrap items-center gap-4">
          <label className="flex items-center gap-2 text-sm text-gray-500">
            Baris
            <select
              value={rowsPerPage}
              onChange={(event) => onRowsPerPageChange(Number(event.target.value))}
              className="rounded-lg border border-gray-200 bg-white px-2 py-1.5 text-sm font-medium text-gray-700 outline-none transition focus:border-teal-400 focus:ring-2 focus:ring-teal-100"
            >
              {[5, 10, 25, 50].map((size) => (
                <option key={size} value={size}>
                  {size}
                </option>
              ))}
            </select>
          </label>

          <div className="flex items-center gap-1">
            <button
              type="button"
              onClick={() => onPageChange(page - 1)}
              disabled={page <= 1}
              aria-label="Halaman sebelumnya"
              className="rounded-lg border border-gray-200 p-2 text-gray-500 transition-colors hover:bg-teal-50/60 disabled:cursor-not-allowed disabled:opacity-40"
            >
              <ChevronLeft size={16} />
            </button>

            {getPageNumbers(page, totalPages).map((item, index) =>
              item === 'ellipsis' ? (
                <span key={`ellipsis-${index}`} className="px-1 text-sm text-gray-400">
                  …
                </span>
              ) : (
                <button
                  key={item}
                  type="button"
                  onClick={() => onPageChange(item)}
                  aria-current={item === page ? 'page' : undefined}
                  className={`min-w-9 rounded-lg px-2.5 py-2 text-sm font-semibold transition-colors ${
                    item === page
                      ? 'bg-teal-400 text-white shadow-sm shadow-teal-200'
                      : 'border border-gray-200 text-gray-600 hover:bg-teal-50/60'
                  }`}
                >
                  {item}
                </button>
              ),
            )}

            <button
              type="button"
              onClick={() => onPageChange(page + 1)}
              disabled={page >= totalPages}
              aria-label="Halaman berikutnya"
              className="rounded-lg border border-gray-200 p-2 text-gray-500 transition-colors hover:bg-teal-50/60 disabled:cursor-not-allowed disabled:opacity-40"
            >
              <ChevronRight size={16} />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
