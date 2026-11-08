import { Link } from 'react-router-dom';
import { MapPin, Phone, Mail } from 'lucide-react';
import { FaFacebook, FaInstagram, FaTwitter } from 'react-icons/fa';

export default function Footer() {
  return (
    <footer className="bg-[#1b2b27] text-white pt-16 pb-8 rounded-t-[3rem] mt-16">
      <div className="container mx-auto px-8 grid grid-cols-1 md:grid-cols-4 gap-12">
        {/* Col 1 */}
        <div className="space-y-4">
          <div className="flex items-center gap-2 mb-6">
            <div className="text-white text-3xl">🐾</div>
            <div className="font-bold text-xl leading-none">PAWFECT <br /> CARE</div>
          </div>
          <p className="text-sm text-gray-300">
            Mitra terpercaya untuk kesehatan, kebahagiaan, dan segala kebutuhan sahabat berbulu Anda dalam satu tempat.
          </p>
          <div className="flex gap-4 pt-4">
            <div className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center hover:bg-teal-500 cursor-pointer"><Phone size={16} /></div>
            <div className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center hover:bg-teal-500 cursor-pointer"><FaInstagram size={16} /></div>
            <div className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center hover:bg-teal-500 cursor-pointer"><FaTwitter size={16} /></div>
            <div className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center hover:bg-teal-500 cursor-pointer"><FaFacebook size={16} /></div>
          </div>
        </div>

        {/* Col 2 */}
        <div>
          <h4 className="text-lg font-semibold mb-6">Layanan Kami</h4>
          <ul className="text-sm text-gray-300 space-y-3">
            <li><Link to="/layanan/klinik" className="hover:text-teal-400">Klinik & Dokter Hewan</Link></li>
            <li><Link to="/layanan/spa" className="hover:text-teal-400">Spa & Grooming</Link></li>
            <li><Link to="/layanan/hotel" className="hover:text-teal-400">Hotel & Penitipan</Link></li>
            <li><Link to="/layanan/store" className="hover:text-teal-400">Pet Store & Apotek</Link></li>
            <li><Link to="/layanan/konsultasi" className="hover:text-teal-400">Konsultasi Online</Link></li>
          </ul>
        </div>

        {/* Col 3 */}
        <div>
          <h4 className="text-lg font-semibold mb-6">Tautan Penting</h4>
          <ul className="text-sm text-gray-300 space-y-3">
            <li><Link to="/tentang" className="hover:text-teal-400">Tentang Kami</Link></li>
            <li><Link to="/cari-dokter" className="hover:text-teal-400">Cari Jadwal Dokter</Link></li>
            <li><Link to="/hubungi" className="hover:text-teal-400">Hubungi Kami</Link></li>
            <li><Link to="/faq" className="hover:text-teal-400">FAQ (Tanya Jawab)</Link></li>
            <li><Link to="/karir" className="hover:text-teal-400">Karir</Link></li>
          </ul>
        </div>

        {/* Col 4 */}
        <div>
          <h4 className="text-lg font-semibold mb-6">Hubungi Kami</h4>
          <ul className="text-sm text-gray-300 space-y-4">
            <li className="flex items-start gap-3">
              <Phone className="text-teal-400 shrink-0 mt-0.5" size={18} />
              <span>UGD 24/7: +62 811-1234-5678</span>
            </li>
            <li className="flex items-start gap-3">
              <MapPin className="text-teal-400 shrink-0 mt-0.5" size={18} />
              <span>Jl. Satwa Sehat No. 123, Jakarta</span>
            </li>
            <li className="flex items-start gap-3">
              <Mail className="text-teal-400 shrink-0 mt-0.5" size={18} />
              <span>hubungi@pawfectcare.com</span>
            </li>
            <li className="mt-4 pt-4 border-t border-gray-700">
              <p className="text-teal-400 font-medium mb-1">Operational Hours:</p>
              <p>Klinik: Buka 24 Jam</p>
              <p>Store & Grooming: 08:00 - 20:00 WIB</p>
            </li>
          </ul>
        </div>
      </div>

      <div className="container mx-auto px-8 mt-12 pt-6 border-t border-gray-700 flex flex-col md:flex-row justify-between items-center text-xs text-gray-400">
        <p>© 2026 Pawfect Care. Hak Cipta Dilindungi Undang-Undang.</p>
        <div className="flex gap-4 mt-4 md:mt-0">
          <Link to="/privacy" className="hover:text-white">Kebijakan Privasi</Link>
          <span>&</span>
          <Link to="/terms" className="hover:text-white">Syarat & Ketentuan</Link>
        </div>
      </div>
    </footer>
  );
}
