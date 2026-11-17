import { PawPrint, Stethoscope, UserPlus, Users } from 'lucide-react';
import type { LucideIcon } from 'lucide-react';

type StatCardsProps = {
  total: number;
  customers: number;
  staff: number;
  newUsers: number;
};

type StatItem = {
  label: string;
  value: number;
  note: string;
  icon: LucideIcon;
  iconClass: string;
};

export default function StatCards({ total, customers, staff, newUsers }: StatCardsProps) {
  const stats: StatItem[] = [
    {
      label: 'Total Pengguna',
      value: total,
      note: 'Seluruh akun terdaftar',
      icon: Users,
      iconClass: 'bg-teal-50 text-teal-600',
    },
    {
      label: 'Pelanggan',
      value: customers,
      note: 'Pemilik hewan peliharaan',
      icon: PawPrint,
      iconClass: 'bg-orange-50 text-orange-500',
    },
    {
      label: 'Dokter & Staff',
      value: staff,
      note: 'Tim internal Pawfect Care',
      icon: Stethoscope,
      iconClass: 'bg-teal-100 text-teal-700',
    },
    {
      label: 'Pelanggan Baru',
      value: newUsers,
      note: 'Bergabung 30 hari terakhir',
      icon: UserPlus,
      iconClass: 'bg-orange-100 text-orange-600',
    },
  ];

  return (
    <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-4">
      {stats.map((stat) => {
        const Icon = stat.icon;
        return (
          <div
            key={stat.label}
            className="rounded-3xl border border-gray-100 bg-white p-5 shadow-sm transition-shadow hover:shadow-md"
          >
            <div className="flex items-start justify-between gap-4">
              <div>
                <p className="text-sm font-medium text-gray-500">{stat.label}</p>
                <p className="mt-2 text-3xl font-bold text-gray-900">{stat.value}</p>
              </div>
              <div className={`rounded-xl p-3 ${stat.iconClass}`}>
                <Icon size={22} />
              </div>
            </div>
            <p className="mt-3 text-xs text-gray-400">{stat.note}</p>
          </div>
        );
      })}
    </div>
  );
}
