import { Link, useLocation } from 'react-router-dom';
import { ShoppingCart, Calendar } from 'lucide-react';

export default function Navbar() {
  const location = useLocation();

  const isActive = (path: string) => location.pathname === path;

  return (
    <nav className="bg-[#fafaf9] sticky top-0 z-50">
      <div className="container mx-auto px-6 py-4 flex justify-between items-center">
        {/* Logo */}
        <Link to="/" className="flex items-center gap-2">
          <div className="text-teal-400 text-3xl">🐾</div>
          <div className="font-bold text-xl leading-none text-gray-800">
            PAWFECT <br /> CARE
          </div>
        </Link>

        {/* Nav Links */}
        <div className="hidden md:flex items-center gap-8 font-medium text-gray-700">
          <Link to="/" className={`px-4 py-1.5 rounded-full ${isActive('/') ? 'bg-teal-100 text-teal-800' : 'hover:text-teal-600'}`}>Beranda</Link>
          <Link to="/layanan" className={`hover:text-teal-600 ${isActive('/layanan') ? 'text-teal-600' : ''}`}>Layanan</Link>
          <Link to="/tentang" className={`hover:text-teal-600 ${isActive('/tentang') ? 'text-teal-600' : ''}`}>Tentang Kami</Link>
          <Link to="/hubungi" className={`hover:text-teal-600 ${isActive('/hubungi') ? 'text-teal-600' : ''}`}>Hubungi Kami</Link>
        </div>

        {/* Actions */}
        <div className="flex items-center gap-6">
          <button className="text-orange-400 hover:text-orange-500 relative">
            <ShoppingCart size={24} />
          </button>
          <button className="bg-orange-400 hover:bg-orange-500 text-white px-6 py-2.5 rounded-full font-semibold flex items-center gap-2 shadow-md transition-transform hover:scale-105">
            Booking Sekarang <Calendar size={18} />
          </button>
        </div>
      </div>
    </nav>
  );
}
