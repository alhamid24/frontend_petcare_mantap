import { useState, useEffect } from 'react';
import UserTable from './UserTable';
import UserDetailModal from './UserDetailModal';
import type { RoleFilter, User } from '../../data/users';

export default function UserManagement() {
  const [users, setUsers] = useState<User[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  
  // State untuk paginasi dan filter
  const [page, setPage] = useState<number>(1); // Mulai dari halaman 1
  const [rowsPerPage, setRowsPerPage] = useState<number>(5);
  const [total, setTotal] = useState<number>(0);
  const [totalPages, setTotalPages] = useState<number>(1);
  const [role, setRole] = useState<RoleFilter>('Semua');

  // State untuk mengontrol Modal Detail
  const [selectedUser, setSelectedUser] = useState<User | null>(null);

  // Fungsi untuk mengambil data dari backend
  const fetchUsers = async (currentPage: number, currentLimit: number) => {
    setLoading(true);
    try {
      // Pastikan URL API backend Anda sesuai. Gunakan default ke localhost jika env kosong.
      const baseUrl = import.meta.env.VITE_API_BASE_URL || 'http://localhost:3000/api/v1'; 
      const url = `${baseUrl}/users?page=${currentPage}&limit=${currentLimit}`;
      
      const response = await fetch(url);
      const result = await response.json();

      if (result.success) {
        // Melakukan mapping data dari backend ke struktur User frontend
        const mappedUsers: User[] = result.data.map((item: any) => ({
          id: item.id,
          name: item.name,
          email: item.email,
          role: item.role || 'Customer', 
          phone: item.phone || '-',      
          createdAt: item.createdAt, // Pastikan ini sesuai dengan tipe User di file users.ts Anda
          joinedAt: item.createdAt,  // Fallback jika UserTable masih membaca joinedAt
          petName: item.petName,
          petType: item.petType,
        }));

        setUsers(mappedUsers);
        setTotal(result.pagination.totalItems);
        setTotalPages(result.pagination.totalPages);
      }
    } catch (error) {
      console.error('Gagal terhubung ke backend:', error);
    } finally {
      setLoading(false);
    }
  };

  // Jalankan fetch data setiap kali nilai page atau rowsPerPage berubah
  useEffect(() => {
    fetchUsers(page, rowsPerPage);
  }, [page, rowsPerPage]);

  return (
    <div className="w-full">
      {/* Tampilan Loading yang lebih rapi menyesuaikan bentuk tabel */}
      {loading ? (
        <div className="flex h-80 items-center justify-center rounded-3xl border border-gray-100 bg-white shadow-sm">
          <div className="flex flex-col items-center gap-2">
            <div className="h-8 w-8 animate-spin rounded-full border-4 border-teal-100 border-t-teal-500"></div>
            <p className="text-sm font-medium text-gray-500">Memuat data pengguna...</p>
          </div>
        </div>
      ) : (
        <UserTable
          users={users}
          total={total}
          page={page}
          totalPages={totalPages}
          rowsPerPage={rowsPerPage}
          role={role}
          onRoleChange={(newRole) => {
            setRole(newRole);
            setPage(1); // Reset ke halaman 1 saat filter diubah
          }}
          onPageChange={(newPage) => setPage(newPage)}
          onRowsPerPageChange={(newRows) => {
            setRowsPerPage(newRows);
            setPage(1); // Reset ke halaman 1 saat baris per halaman diubah
          }}
          // Membuka modal dan mengirim data user yang diklik
          onView={(user) => setSelectedUser(user)} 
          onEdit={(user) => console.log('Edit user:', user)}
          onDelete={(user) => console.log('Hapus user:', user)}
        />
      )}

      {/* Render komponen Modal jika selectedUser tidak null */}
      {selectedUser && (
        <UserDetailModal />
      )}
    </div>
  );
}