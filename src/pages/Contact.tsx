import { MapPin, Phone, Mail } from 'lucide-react';

export default function Contact() {
  return (
    <section className="container mx-auto px-6 py-24">
      <div className="text-center max-w-2xl mx-auto mb-12">
        <h1 className="text-4xl font-bold text-gray-800">Hubungi Kami</h1>
        <p className="text-gray-600 mt-4">Kami siap membantu Anda dan sahabat berbulu. Hubungi kami melalui kontak di bawah ini.</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
        <div className="bg-white border border-gray-100 rounded-3xl p-8 text-center shadow-sm">
          <div className="w-12 h-12 mx-auto rounded-full bg-teal-50 flex items-center justify-center text-teal-500 mb-4">
            <Phone size={24} />
          </div>
          <h3 className="font-bold text-gray-800 mb-2">Telepon</h3>
          <p className="text-sm text-gray-600">UGD 24/7: +62 811-1234-5678</p>
        </div>

        <div className="bg-white border border-gray-100 rounded-3xl p-8 text-center shadow-sm">
          <div className="w-12 h-12 mx-auto rounded-full bg-teal-50 flex items-center justify-center text-teal-500 mb-4">
            <MapPin size={24} />
          </div>
          <h3 className="font-bold text-gray-800 mb-2">Alamat</h3>
          <p className="text-sm text-gray-600">Jl. Satwa Sehat No. 123, Jakarta</p>
        </div>

        <div className="bg-white border border-gray-100 rounded-3xl p-8 text-center shadow-sm">
          <div className="w-12 h-12 mx-auto rounded-full bg-teal-50 flex items-center justify-center text-teal-500 mb-4">
            <Mail size={24} />
          </div>
          <h3 className="font-bold text-gray-800 mb-2">Email</h3>
          <p className="text-sm text-gray-600">hubungi@pawfectcare.com</p>
        </div>
      </div>
    </section>
  );
}
