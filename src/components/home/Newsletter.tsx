export default function Newsletter() {
  return (
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
  );
}
