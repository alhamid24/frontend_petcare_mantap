import { useParams } from 'react-router-dom';
import PagePlaceholder from '../components/shared/PagePlaceholder';

const serviceTitles: Record<string, string> = {
  klinik: 'Klinik & Dokter Hewan',
  spa: 'Spa & Grooming',
  hotel: 'Hotel & Penitipan',
  store: 'Pet Store & Apotek',
  konsultasi: 'Konsultasi Online',
};

export default function ServiceDetail() {
  const { slug } = useParams<{ slug: string }>();
  const title = slug ? serviceTitles[slug] ?? 'Layanan' : 'Layanan';

  return (
    <PagePlaceholder
      title={title}
      description="Halaman detail layanan ini sedang dalam pengembangan. Silakan hubungi kami untuk informasi lebih lanjut."
    />
  );
}
