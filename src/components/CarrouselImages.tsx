import Image from 'next/image';
import ImageHome from '../../public/images/home.jpg';
export default function CarrouselImages() {
  return (
    <div className="flex gap-10 py-16">
      <Image
        src={ImageHome}
        alt=""
        width={250}
        height={250}
        className="rounded-2xl"
      />
      <Image
        src={ImageHome}
        alt=""
        width={250}
        height={250}
        className="rounded-2xl"
      />
      <Image
        src={ImageHome}
        alt=""
        width={250}
        height={250}
        className="rounded-2xl"
      />
      <Image
        src={ImageHome}
        alt=""
        width={250}
        height={250}
        className="rounded-2xl"
      />
    </div>
  );
}
