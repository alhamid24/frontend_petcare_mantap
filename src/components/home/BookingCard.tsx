import { ChevronDown, Clock, User } from 'lucide-react';

export default function BookingCard() {
  return (
    <div className="bg-white rounded-3xl p-8 shadow-xl max-w-md border border-teal-50">
      <h3 className="text-2xl font-bold text-gray-800 mb-6">Booking Jadwal</h3>
      <div className="space-y-4">
        <div className="relative">
          <select className="w-full bg-teal-50/50 text-gray-700 rounded-xl px-4 py-3 appearance-none border border-teal-100 outline-none focus:border-teal-400">
            <option>Pilih Layanan</option>
            <option>Klinik & Dokter</option>
            <option>Grooming</option>
          </select>
          <ChevronDown className="absolute right-4 top-3.5 text-gray-400" size={20} />
        </div>

        <div className="grid grid-cols-2 gap-4">
          <div className="relative">
            <Clock className="absolute left-4 top-3.5 text-teal-500" size={18} />
            <select className="w-full bg-teal-50/50 text-gray-700 rounded-xl pl-10 pr-4 py-3 appearance-none border border-teal-100 outline-none focus:border-teal-400">
              <option>Waktu</option>
            </select>
          </div>
          <div className="relative">
            <input type="date" className="w-full bg-teal-50/50 text-gray-700 rounded-xl px-4 py-3 border border-teal-100 outline-none focus:border-teal-400" />
          </div>
        </div>

        <div className="relative">
          <User className="absolute left-4 top-3.5 text-teal-500" size={18} />
          <select className="w-full bg-teal-50/50 text-gray-700 rounded-xl pl-10 pr-4 py-3 appearance-none border border-teal-100 outline-none focus:border-teal-400">
            <option>Jenis Hewan</option>
            <option>Anjing</option>
            <option>Kucing</option>
          </select>
          <ChevronDown className="absolute right-4 top-3.5 text-gray-400" size={20} />
        </div>

        <button className="w-full bg-orange-400 hover:bg-orange-500 text-white font-bold text-lg py-4 rounded-xl flex items-center justify-center gap-2 mt-2 transition-colors">
          Cari Jadwal <span className="text-xl">→</span>
        </button>
      </div>
    </div>
  );
}
