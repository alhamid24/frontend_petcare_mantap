import { Link, useLocation } from 'react-router-dom';
import {
  CalendarDays,
  ChartNoAxesCombined,
  Hotel,
  LayoutDashboard,
  LogOut,
  MessageCircle,
  PawPrint,
  ReceiptText,
  Settings,
  Stethoscope,
  Users,
  X,
} from 'lucide-react';
import type { LucideIcon } from 'lucide-react';

type NavItem = {
  label: string;
  icon: LucideIcon;
  to?: string;
  badge?: string;
};

type NavGroup = {
  title: string;
  items: NavItem[];
};

const navGroups: NavGroup[] = [
  {
    title: 'Dashboards',
    items: [
      { label: 'Overview', icon: LayoutDashboard },
      { label: 'Analytics', icon: ChartNoAxesCombined },
    ],
  },
  {
    title: 'Management',
    items: [
      { label: 'Pelanggan', icon: Users, to: '/dashboard/users' },
      { label: 'Data Hewan', icon: PawPrint },
      { label: 'Staff & Dokter', icon: Stethoscope },
    ],
  },
  {
    title: 'Layanan',
    items: [
      { label: 'Jadwal Temu', icon: CalendarDays, badge: '3' },
      { label: 'Konsultasi', icon: MessageCircle, badge: '5' },
      { label: 'Pet Hotel', icon: Hotel },
      { label: 'Invoice', icon: ReceiptText },
    ],
  },
];

type DashboardSidebarProps = {
  isOpen: boolean;
  onClose: () => void;
};

export default function DashboardSidebar({ isOpen, onClose }: DashboardSidebarProps) {
  const location = useLocation();

  return (
    <>
      {isOpen && (
        <div
          className="fixed inset-0 z-40 bg-gray-900/40 backdrop-blur-sm lg:hidden"
          onClick={onClose}
          aria-hidden="true"
        />
      )}

      <aside
        className={`fixed inset-y-0 left-0 z-50 flex w-72 shrink-0 flex-col border-r border-gray-100 bg-white transition-transform duration-300 lg:sticky lg:top-0 lg:z-0 lg:h-screen lg:translate-x-0 ${
          isOpen ? 'translate-x-0' : '-translate-x-full'
        }`}
        aria-label="Navigasi dashboard"
      >
        <div className="flex items-center justify-between gap-3 px-5 py-5">
          <Link to="/" className="flex items-center gap-3" onClick={onClose}>
            <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-gradient-to-br from-teal-300 to-teal-500 text-white shadow-md shadow-teal-200/70">
              <PawPrint size={22} />
            </div>
            <div className="leading-tight">
              <p className="text-base font-bold text-gray-800">Pawfect Care</p>
              <p className="text-[11px] font-medium uppercase tracking-wider text-teal-600">
                Clinic &amp; Pet Hotel
              </p>
            </div>
          </Link>
          <button
            type="button"
            onClick={onClose}
            className="rounded-lg p-2 text-gray-400 transition-colors hover:bg-gray-100 hover:text-gray-600 lg:hidden"
            aria-label="Tutup sidebar"
          >
            <X size={18} />
          </button>
        </div>

        <nav className="flex-1 space-y-6 overflow-y-auto px-3 pb-4">
          {navGroups.map((group) => (
            <div key={group.title}>
              <p className="px-3 pb-2 text-[11px] font-semibold uppercase tracking-wider text-gray-400">
                {group.title}
              </p>
              <div className="space-y-1">
                {group.items.map((item) => {
                  const Icon = item.icon;
                  const isActive = item.to ? location.pathname === item.to : false;
                  const className = `group flex w-full items-center gap-3 rounded-xl px-3 py-2.5 text-sm font-medium transition-colors ${
                    isActive
                      ? 'bg-teal-200/70 text-teal-900'
                      : 'text-gray-600 hover:bg-teal-50/60 hover:text-gray-900'
                  }`;

                  const content = (
                    <>
                      <Icon
                        size={18}
                        className={
                          isActive ? 'text-teal-700' : 'text-gray-400 group-hover:text-teal-600'
                        }
                      />
                      <span className="flex-1 text-left">{item.label}</span>
                      {item.badge && (
                        <span className="rounded-full bg-orange-100 px-2 py-0.5 text-[11px] font-semibold text-orange-600">
                          {item.badge}
                        </span>
                      )}
                    </>
                  );

                  return item.to ? (
                    <Link key={item.label} to={item.to} onClick={onClose} className={className}>
                      {content}
                    </Link>
                  ) : (
                    <button key={item.label} type="button" onClick={onClose} className={className}>
                      {content}
                    </button>
                  );
                })}
              </div>
            </div>
          ))}
        </nav>

        <div className="space-y-3 border-t border-gray-100 p-3">
          <div className="rounded-2xl border border-teal-100 bg-teal-50 p-4">
            <div className="flex items-center gap-3">
              <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-white text-teal-500 shadow-sm">
                <MessageCircle size={18} />
              </div>
              <div>
                <p className="text-sm font-semibold text-gray-800">Butuh bantuan?</p>
                <p className="text-[11px] text-gray-500">Tim support siap membantu.</p>
              </div>
            </div>
            <button
              type="button"
              className="mt-3 w-full rounded-lg bg-orange-400 py-2 text-xs font-semibold text-white transition-colors hover:bg-orange-500"
            >
              Hubungi Support
            </button>
          </div>

          <button
            type="button"
            className="flex w-full items-center gap-3 rounded-xl px-3 py-2.5 text-sm font-medium text-gray-600 transition-colors hover:bg-gray-50 hover:text-gray-900"
          >
            <Settings size={18} className="text-gray-400" />
            Pengaturan
          </button>
          <button
            type="button"
            className="flex w-full items-center gap-3 rounded-xl px-3 py-2.5 text-sm font-medium text-rose-600 transition-colors hover:bg-rose-50"
          >
            <LogOut size={18} />
            Keluar
          </button>
        </div>
      </aside>
    </>
  );
}
