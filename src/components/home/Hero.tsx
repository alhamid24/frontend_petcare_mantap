import heroImage from '../../assets/potobranda.jpg';
import BookingCard from './BookingCard';

export default function Hero() {
  return (
    <section className="relative container mx-auto px-6 pt-12 hero-bg-blob min-h-[600px] flex flex-col lg:flex-row items-center">
      {/* Left Text & Form */}
      <div className="lg:w-1/2 z-10 space-y-8">
        <h1 className="text-5xl lg:text-6xl font-bold text-gray-800 leading-tight">
          Perawatan Terbaik untuk <br /> Sahabat Berbulu Anda
        </h1>
        <p className="text-lg text-gray-600 max-w-lg">
          Klinik, grooming, dan penitipan hewan terpercaya dengan staf profesional yang menyayangi hewan Anda seperti keluarga sendiri.
        </p>

        <BookingCard />
      </div>

      {/* Right Image */}
      <div className="lg:w-1/2 mt-12 lg:mt-0 relative flex justify-center lg:justify-end">
        <img
          src={heroImage}
          alt="Ilustrasi anjing dan kucing"
          className="w-[500px] h-[500px] object-cover rounded-full shadow-xl"
        />
      </div>
    </section>
  );
}
