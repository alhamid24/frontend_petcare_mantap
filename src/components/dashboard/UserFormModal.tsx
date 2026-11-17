import { useEffect, useState } from 'react';
import type { FormEvent } from 'react';
import { PawPrint, X } from 'lucide-react';
import type { User, UserRole } from '../../data/users';
import { roleLabels } from '../../data/users';

export type UserFormValues = {
  name: string;
  email: string;
  phone: string;
  role: UserRole;
  petName: string;
  petType: string;
};

type UserFormModalProps = {
  mode: 'add' | 'edit';
  user?: User;
  onClose: () => void;
  onSubmit: (values: UserFormValues) => void;
};

const inputClass =
  'w-full rounded-xl border border-gray-200 bg-gray-50 px-3.5 py-2.5 text-sm text-gray-800 outline-none transition placeholder:text-gray-400 focus:border-teal-400 focus:bg-white focus:ring-2 focus:ring-teal-100';

const labelClass = 'mb-1.5 block text-sm font-medium text-gray-700';

const roleOptions: UserRole[] = ['Customer', 'Vet', 'Admin'];

export default function UserFormModal({ mode, user, onClose, onSubmit }: UserFormModalProps) {
  const [form, setForm] = useState<UserFormValues>(() => ({
    name: user?.name ?? '',
    email: user?.email ?? '',
    phone: user?.phone ?? '',
    role: user?.role ?? 'Customer',
    petName: user?.petName ?? '',
    petType: user?.petType ?? '',
  }));

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [onClose]);

  const isStaff = form.role === 'Vet' || form.role === 'Admin';

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    onSubmit(isStaff ? { ...form, petName: '', petType: '' } : form);
  };

  return (
    <div
      className="fixed inset-0 z-[60] flex items-center justify-center bg-gray-900/40 p-4 backdrop-blur-sm"
      onClick={onClose}
      role="presentation"
    >
      <div
        role="dialog"
        aria-modal="true"
        aria-labelledby="user-form-title"
        onClick={(event) => event.stopPropagation()}
        className="max-h-full w-full max-w-lg overflow-y-auto rounded-3xl bg-white shadow-xl"
      >
        <div className="flex items-start justify-between gap-4 border-b border-gray-100 p-5">
          <div className="flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-teal-50 text-teal-600">
              <PawPrint size={20} />
            </div>
            <div>
              <h2 id="user-form-title" className="text-base font-bold text-gray-800">
                {mode === 'add' ? 'Tambah Pelanggan Baru' : 'Edit Data Pengguna'}
              </h2>
              <p className="text-xs text-gray-500">
                {mode === 'add'
                  ? 'Lengkapi data pemilik dan hewan peliharaannya.'
                  : 'Perbarui informasi pengguna yang dipilih.'}
              </p>
            </div>
          </div>
          <button
            type="button"
            onClick={onClose}
            aria-label="Tutup form"
            className="rounded-lg p-2 text-gray-400 transition-colors hover:bg-gray-100 hover:text-gray-600"
          >
            <X size={18} />
          </button>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4 p-5">
          <div>
            <label htmlFor="user-name" className={labelClass}>
              Nama Lengkap
            </label>
            <input
              id="user-name"
              type="text"
              required
              autoFocus
              value={form.name}
              onChange={(event) => setForm({ ...form, name: event.target.value })}
              placeholder="Contoh: Aisyah Putri"
              className={inputClass}
            />
          </div>

          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
            <div>
              <label htmlFor="user-email" className={labelClass}>
                Email
              </label>
              <input
                id="user-email"
                type="email"
                required
                value={form.email}
                onChange={(event) => setForm({ ...form, email: event.target.value })}
                placeholder="nama@email.com"
                className={inputClass}
              />
            </div>
            <div>
              <label htmlFor="user-phone" className={labelClass}>
                Nomor Telepon
              </label>
              <input
                id="user-phone"
                type="tel"
                required
                value={form.phone}
                onChange={(event) => setForm({ ...form, phone: event.target.value })}
                placeholder="+62 812-3456-7890"
                className={inputClass}
              />
            </div>
          </div>

          <div>
            <label htmlFor="user-role" className={labelClass}>
              Peran
            </label>
            <select
              id="user-role"
              value={form.role}
              onChange={(event) => setForm({ ...form, role: event.target.value as UserRole })}
              className={inputClass}
            >
              {roleOptions.map((option) => (
                <option key={option} value={option}>
                  {roleLabels[option]}
                </option>
              ))}
            </select>
          </div>

          {isStaff ? (
            <div className="rounded-xl border border-dashed border-teal-200 bg-teal-50/60 p-4 text-sm text-teal-700">
              Data hewan peliharaan tidak diperlukan untuk dokter atau staff internal.
            </div>
          ) : (
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
              <div>
                <label htmlFor="pet-name" className={labelClass}>
                  Nama Hewan
                </label>
                <input
                  id="pet-name"
                  type="text"
                  value={form.petName}
                  onChange={(event) => setForm({ ...form, petName: event.target.value })}
                  placeholder="Contoh: Mochi"
                  className={inputClass}
                />
              </div>
              <div>
                <label htmlFor="pet-type" className={labelClass}>
                  Jenis Hewan
                </label>
                <input
                  id="pet-type"
                  type="text"
                  value={form.petType}
                  onChange={(event) => setForm({ ...form, petType: event.target.value })}
                  placeholder="Contoh: Kucing Persia"
                  className={inputClass}
                />
              </div>
            </div>
          )}

          <div className="flex flex-col-reverse gap-3 pt-2 sm:flex-row sm:justify-end">
            <button
              type="button"
              onClick={onClose}
              className="rounded-xl border border-gray-200 px-5 py-2.5 text-sm font-semibold text-gray-600 transition-colors hover:bg-gray-50"
            >
              Batal
            </button>
            <button
              type="submit"
              className="rounded-xl bg-orange-400 px-5 py-2.5 text-sm font-semibold text-white shadow-sm shadow-orange-200 transition-colors hover:bg-orange-500"
            >
              {mode === 'add' ? 'Tambah Pelanggan' : 'Simpan Perubahan'}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
