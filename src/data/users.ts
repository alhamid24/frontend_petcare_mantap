export type UserRole = 'Customer' | 'Vet' | 'Admin' | 'user' | 'admin'; // Tambahkan huruf kecil jika backend mereturn huruf kecil

export type RoleFilter = 'Semua' | UserRole;

export type User = {
  id: string | number; // Ubah ini agar bisa menerima UUID (string) dari backend
  name: string;
  email: string;
  createdAt?: string;  // Tambahkan ini dari backend
  joinedAt?: string;   // Buat opsional (digunakan oleh data lama)
  
  // Buat properti di bawah ini opsional (?) karena backend belum mengirimkannya
  phone?: string;
  role?: UserRole;
  petName?: string;
  petType?: string;
};

// Sesuaikan label agar bisa membaca kapital atau huruf kecil
export const roleLabels: Record<string, string> = {
  Customer: 'Customer',
  Vet: 'Dokter Hewan',
  Admin: 'Admin',
  user: 'Customer', // Fallback jika backend mengirim 'user'
  admin: 'Admin',   // Fallback jika backend mengirim 'admin'
};

const daysAgo = (days: number) => {
  const date = new Date();
  date.setDate(date.getDate() - days);
  return date.toISOString().slice(0, 10);
};

// Data mock (sementara) tetap bisa digunakan selama Anda belum sepenuhnya memanggil API
export const initialUsers: User[] = [
  {
    id: 1,
    name: 'Aisyah Putri',
    email: 'aisyah.putri@email.com',
    phone: '+62 812-3456-7890',
    role: 'Customer',
    petName: 'Mochi',
    petType: 'Kucing Persia',
    joinedAt: daysAgo(2),
    createdAt: daysAgo(2), // Anda bisa samakan
  },
  // ... (data lainnya biarkan sama seperti sebelumnya)
];