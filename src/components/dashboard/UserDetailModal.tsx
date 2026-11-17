import { useState, useEffect } from 'react';
import type { User } from '../../data/users';

export default function UsersList() {
  const [users, setUsers] = useState<User[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const response = await fetch('http://localhost:3000/api/v1/users?page=1&limit=10');
        const result = await response.json();
        
        if (result.success) {
          // Masukkan data dari backend ke dalam state
          setUsers(result.data);
        }
      } catch (error) {
        console.error('Gagal mengambil data user:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchUsers();
  }, []);

  if (loading) return <p>Loading data...</p>;

  return (
    <div>
       {/* Map data users di sini */}
       {users.map(user => (
          <div key={user.id}>{user.name}</div>
       ))}
    </div>
  );
}