import Hero from '../components/home/Hero';
import Services from '../components/home/Services';
import Newsletter from '../components/home/Newsletter';

export default function Home() {
  return (
    <div className="space-y-24">
      <Hero />
      <Services />
      <Newsletter />
    </div>
  );
}
