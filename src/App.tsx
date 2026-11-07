import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link, useLocation } from 'react-router-dom';
import { ShoppingCart, Calendar, MapPin, Phone, Mail, ChevronDown, Clock, User } from 'lucide-react';
import { FaFacebook, FaInstagram, FaTwitter } from 'react-icons/fa';

// --- KOMPONEN LAYOUT (NAVBAR & FOOTER) ---
function Layout({ children }: { children: React.ReactNode; }) {
  const location = useLocation();

  const isActive = (path: string) => location.pathname === path;

  return (
    <div className="min-h-screen flex flex-col font-sans">
      {/* Navbar */}
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

      {/* Main Content */}
      <main className="flex-grow">
        {children}
      </main>

      {/* Footer */}
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
              <li><Link to="/konsultasi" className="hover:text-teal-400">Konsultasi Online</Link></li>
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
    </div>
  );
}

// --- HALAMAN HOME ---
const HomePage = () => {
  return (
    <div className="space-y-24">
      {/* Hero Section */}
      <section className="relative container mx-auto px-6 pt-12 hero-bg-blob min-h-[600px] flex flex-col lg:flex-row items-center">
        {/* Left Text & Form */}
        <div className="lg:w-1/2 z-10 space-y-8">
          <h1 className="text-5xl lg:text-6xl font-bold text-gray-800 leading-tight">
            Perawatan Terbaik untuk <br /> Sahabat Berbulu Anda
          </h1>
          <p className="text-lg text-gray-600 max-w-lg">
            Klinik, grooming, dan penitipan hewan terpercaya dengan staf profesional yang menyayangi hewan Anda seperti keluarga sendiri.
          </p>

          {/* Booking Card */}
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
        </div>

        {/* Right Image */}
        <div className="lg:w-1/2 mt-12 lg:mt-0 relative flex justify-center lg:justify-end">
          {/* Ganti div ini dengan tag img menggunakan aset anjing & kucing Anda */}
          <div className="w-[500px] h-[500px] bg-gradient-to-tr from-orange-200 to-teal-100 rounded-full flex items-center justify-center text-gray-500 shadow-inner">
             [Ilustrasi Anjing & Kucing]
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="container mx-auto px-6">
        {/* Tabs style header */}
        <div className="flex flex-wrap justify-center gap-4 mb-12 border-b border-gray-200 pb-4">
           <button className="bg-teal-200 text-teal-900 px-6 py-2 rounded-full font-semibold flex items-center gap-2"><span className="text-xl">🏥</span> Klinik</button>
           <button className="text-gray-500 hover:text-gray-800 px-6 py-2 font-medium flex items-center gap-2"><span className="text-xl">✂️</span> Grooming</button>
           <button className="text-gray-500 hover:text-gray-800 px-6 py-2 font-medium flex items-center gap-2"><span className="text-xl">🏨</span> Pet Hotel</button>
           <button className="text-gray-500 hover:text-gray-800 px-6 py-2 font-medium flex items-center gap-2"><span className="text-xl">🛍️</span> Pet Store</button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Card 1 */}
          <div className="bg-teal-50/50 border border-teal-100 rounded-3xl p-6 text-center shadow-sm hover:shadow-md transition-shadow flex flex-col h-full">
            <div className="bg-white rounded-2xl h-40 mb-6 flex items-center justify-center text-4xl shadow-sm">👩‍⚕️🐕</div>
            <h3 className="text-xl font-bold text-gray-800 mb-3">Klinik & Dokter</h3>
            <p className="text-sm text-gray-600 mb-8 flex-grow">Pemeriksaan medis, vaksinasi, dan penanganan darurat 24/7.</p>
            <button className="w-full bg-orange-400 hover:bg-orange-500 text-white font-semibold py-3 rounded-xl transition-colors">Konsultasi</button>
          </div>

          {/* Card 2 */}
          <div className="bg-white border border-gray-100 rounded-3xl p-6 text-center shadow-sm hover:shadow-md transition-shadow flex flex-col h-full">
            <div className="bg-teal-50 rounded-2xl h-40 mb-6 flex items-center justify-center text-4xl shadow-sm">🛁🐩</div>
            <h3 className="text-xl font-bold text-gray-800 mb-3">Grooming & Spa</h3>
            <p className="text-sm text-gray-600 mb-8 flex-grow">Mandi, potong bulu, potong kuku, dan treatment bulu yang profesional.</p>
            <button className="w-full bg-teal-400 hover:bg-teal-500 text-white font-semibold py-3 rounded-xl transition-colors">Pesan Grooming</button>
          </div>

          {/* Card 3 */}
          <div className="bg-white border border-gray-100 rounded-3xl p-6 text-center shadow-sm hover:shadow-md transition-shadow flex flex-col h-full">
            <div className="bg-orange-50 rounded-2xl h-40 mb-6 flex items-center justify-center text-4xl shadow-sm">🛋️🐈</div>
            <h3 className="text-xl font-bold text-gray-800 mb-3">Hotel & Penitipan</h3>
            <p className="text-sm text-gray-600 mb-8 flex-grow">Penginapan aman, nyaman, dan luas dengan pengawasan penuh 24 jam.</p>
            <button className="w-full bg-orange-400 hover:bg-orange-500 text-white font-semibold py-3 rounded-xl transition-colors">Reservasi</button>
          </div>

          {/* Card 4 */}
          <div className="bg-white border border-gray-100 rounded-3xl p-6 text-center shadow-sm hover:shadow-md transition-shadow flex flex-col h-full">
            <div className="bg-teal-50 rounded-2xl h-40 mb-6 flex items-center justify-center text-4xl shadow-sm">🥫🦴</div>
            <h3 className="text-xl font-bold text-gray-800 mb-3">Pet Store & Apotek</h3>
            <p className="text-sm text-gray-600 mb-8 flex-grow">Menjual makanan berkualitas, vitamin, dan kebutuhan harian hewan.</p>
            <button className="w-full bg-teal-400 hover:bg-teal-500 text-white font-semibold py-3 rounded-xl transition-colors">Beli Sekarang</button>
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="container mx-auto px-6">
        <div className="bg-orange-100 rounded-[3rem] p-12 text-center relative overflow-hidden">
           <div className="relative z-10 max-w-2xl mx-auto space-y-6">
             <h2 className="text-2xl md:text-3xl font-bold text-gray-900">Ingin promo & tips menarik seputar hewan?</h2>
             <p className="text-gray-700">Dapatkan info terbaru seputar kesehatan dan penawaran spesial langsung ke email Anda.</p>
             <div className="flex flex-col sm:flex-row gap-4 justify-center mt-6">
               <input 
                 type="email" 
                 placeholder="Masukkan email Anda..." 
                 className="px-6 py-4 rounded-full w-full sm:w-96 focus:outline-none focus:ring-2 focus:ring-orange-400"
               />
               <button className="bg-orange-400 hover:bg-orange-500 text-white px-8 py-4 rounded-full font-semibold flex items-center justify-center gap-2 transition-colors whitespace-nowrap">
                 Berlangganan →
               </button>
             </div>
           </div>
           {/* Abstract decorative shapes */}
           <div className="absolute top-0 left-0 w-32 h-32 bg-orange-200 rounded-full -translate-x-1/2 -translate-y-1/2 opacity-50"></div>
           <div className="absolute bottom-0 right-0 w-64 h-64 bg-orange-200 rounded-full translate-x-1/4 translate-y-1/4 opacity-50"></div>
        </div>
      </section>
    </div>
  );
};

// --- HALAMAN LAYANAN (Placeholder untuk Multi-Page) ---
const LayananPage = () => (
  <div className="container mx-auto px-6 py-24 text-center">
    <h1 className="text-4xl font-bold text-gray-800">Daftar Layanan Kami</h1>
    <p className="text-gray-600 mt-4">Halaman ini adalah bagian dari struktur multi-page aplikasi Anda.</p>
  </div>
);

// --- APP ROUTER ---
function App() {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/layanan" element={<LayananPage />} />
          {/* Tambahkan route halaman lain seperti /tentang, /hubungi sesuai kebutuhan */}
        </Routes>
      </Layout>
    </Router>
  );
}

export default App;