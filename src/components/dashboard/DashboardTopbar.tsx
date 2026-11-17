import { Bell, ChevronDown, Menu, Plus, Search, X } from 'lucide-react';

type DashboardTopbarProps = {
  search: string;
  onSearchChange: (value: string) => void;
  onMenuClick: () => void;
  onAddUser: () => void;
};

function SearchInput({
  value,
  onChange,
  className = '',
}: {
  value: string;
  onChange: (value: string) => void;
  className?: string;
}) {
  return (
    <div className={`relative ${className}`}>
      <Search
        size={18}
        className="pointer-events-none absolute left-3.5 top-1/2 -translate-y-1/2 text-gray-400"
      />
      <input
        type="search"
        value={value}
        onChange={(event) => onChange(event.target.value)}
        placeholder="Cari nama, email, atau hewan..."
        aria-label="Cari pengguna"
        className="w-full rounded-xl border border-gray-200 bg-gray-50 py-2.5 pl-10 pr-9 text-sm text-gray-700 outline-none transition focus:border-teal-400 focus:bg-white focus:ring-2 focus:ring-teal-100 [&::-webkit-search-cancel-button]:hidden"
      />
      {value && (
        <button
          type="button"
          onClick={() => onChange('')}
          aria-label="Hapus pencarian"
          className="absolute right-2.5 top-1/2 -translate-y-1/2 rounded-md p-1 text-gray-400 transition-colors hover:bg-gray-200 hover:text-gray-600"
        >
          <X size={14} />
        </button>
      )}
    </div>
  );
}

export default function DashboardTopbar({
  search,
  onSearchChange,
  onMenuClick,
  onAddUser,
}: DashboardTopbarProps) {
  return (
    <header className="sticky top-0 z-30 border-b border-gray-100 bg-white/80 backdrop-blur-md">
      <div className="flex flex-wrap items-center gap-3 px-4 py-3 sm:px-6">
        <button
          type="button"
          onClick={onMenuClick}
          className="rounded-xl border border-gray-200 p-2.5 text-gray-600 transition-colors hover:bg-teal-50/60 lg:hidden"
          aria-label="Buka menu sidebar"
        >
          <Menu size={18} />
        </button>

        <div className="mr-auto min-w-0">
          <h1 className="truncate text-lg font-bold text-gray-800 sm:text-xl">
            Manajemen Pengguna
          </h1>
          <p className="hidden truncate text-xs text-gray-500 sm:block">
            Kelola data pelanggan dan hewan peliharaan Pawfect Care.
          </p>
        </div>

        <SearchInput
          value={search}
          onChange={onSearchChange}
          className="hidden w-64 md:block xl:w-80"
        />

        <button
          type="button"
          onClick={onAddUser}
          className="inline-flex items-center gap-2 rounded-xl bg-orange-400 px-3 py-2.5 text-sm font-semibold text-white shadow-sm shadow-orange-200 transition-colors hover:bg-orange-500"
        >
          <Plus size={18} />
          <span className="hidden sm:inline">Tambah Pelanggan</span>
        </button>

        <button
          type="button"
          className="relative rounded-xl border border-gray-200 p-2.5 text-gray-600 transition-colors hover:bg-teal-50/60"
          aria-label="Notifikasi"
        >
          <Bell size={18} />
          <span className="absolute right-2 top-2 h-2 w-2 rounded-full bg-orange-500 ring-2 ring-white" />
        </button>

        <button
          type="button"
          className="flex items-center gap-2.5 rounded-xl border border-gray-200 bg-white py-1.5 pl-1.5 pr-2.5 text-left transition-colors hover:bg-gray-50"
        >
          <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-gradient-to-br from-teal-300 to-teal-500 text-xs font-bold text-white">
            AD
          </span>
          <span className="hidden leading-tight lg:block">
            <span className="block text-sm font-semibold text-gray-800">Admin PetCare</span>
            <span className="block text-[11px] text-gray-500">Super Admin</span>
          </span>
          <ChevronDown size={16} className="hidden text-gray-400 sm:block" />
        </button>
      </div>

      <div className="px-4 pb-3 md:hidden">
        <SearchInput value={search} onChange={onSearchChange} />
      </div>
    </header>
  );
}
