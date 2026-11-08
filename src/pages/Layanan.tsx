import { Link } from 'react-router-dom';

const services = [
  { slug: 'klinik', icon: '🏥', title: 'Klinik & Dokter Hewan', description: 'Pemeriksaan medis, vaksinasi, dan penanganan darurat 24/7.' },
  { slug: 'spa', icon: '✂️', title: 'Spa & Grooming', description: 'Mandi, potong bulu, potong kuku, dan treatment bulu profesional.' },
  { slug: 'hotel', icon: '🏨', title: 'Hotel & Penitipan', description: 'Penginapan aman dan nyaman dengan pengawasan penuh 24 jam.' },
  { slug: 'store', icon: '🛍️', title: 'Pet Store & Apotek', description: 'Makanan berkualitas, vitamin, dan kebutuhan harian hewan.' },
  { slug: 'konsultasi', icon: '💬', title: 'Konsultasi Online', description: 'Tanya jawab dengan dokter hewan tanpa harus datang ke klinik.' },
];

export default function Layanan() {
  return (
    <section className="container mx-auto px-6 py-24">
      <div className="text-center max-w-2xl mx-auto mb-12">
        <h1 className="text-4xl font-bold text-gray-800">Daftar Layanan Kami</h1>
        <p className="text-gray-600 mt-4">Pilih layanan yang sesuai dengan kebutuhan sahabat berbulu Anda.</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {services.map((service) => (
          <Link
            key={service.slug}
            to={`/layanan/${service.slug}`}
            className="bg-white border border-gray-100 rounded-3xl p-8 text-center shadow-sm hover:shadow-md transition-shadow flex flex-col h-full"
          >
            <div className="bg-teal-50 rounded-2xl h-32 mb-6 flex items-center justify-center text-4xl shadow-sm">
              {service.icon}
            </div>
            <h3 className="text-xl font-bold text-gray-800 mb-3">{service.title}</h3>
            <p className="text-sm text-gray-600 flex-grow">{service.description}</p>
          </Link>
        ))}
      </div>
    </section>
  );
}
