import { Link } from 'react-router-dom';

type PagePlaceholderProps = {
  title: string;
  description: string;
};

export default function PagePlaceholder({ title, description }: PagePlaceholderProps) {
  return (
    <section className="container mx-auto px-6 py-24 text-center">
      <h1 className="text-4xl font-bold text-gray-800">{title}</h1>
      <p className="text-gray-600 mt-4 max-w-xl mx-auto">{description}</p>
      <Link
        to="/"
        className="inline-block mt-8 bg-orange-400 hover:bg-orange-500 text-white font-semibold px-6 py-3 rounded-xl transition-colors"
      >
        Kembali ke Beranda
      </Link>
    </section>
  );
}
