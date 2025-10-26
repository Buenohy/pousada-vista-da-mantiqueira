import CarrouselImages from '@/components/CarrouselImages';
import Footer from '@/components/Footer';
import HomePage from '@/components/Home/HomePage';
import Maps from '@/components/Maps';
import NavBar from '@/components/NavBar';

export default function Home() {
  return (
    <div className="px-30">
      <NavBar />
      <HomePage />
      <CarrouselImages />
      <Maps />
      <Footer />
    </div>
  );
}
