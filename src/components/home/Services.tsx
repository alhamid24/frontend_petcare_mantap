export default function Services() {
  return (
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
  );
}
