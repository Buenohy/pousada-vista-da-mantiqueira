import Image from 'next/image';
import Button from '../ui/Button';
import ImageHome from '../../../public/images/home.jpg';

export default function HomePage() {
  return (
    <div
      className="flex gap-48
    "
    >
      <div className="text-black">
        <h2 className="text-primary mb-7 text-4xl font-semibold">
          Paradise View
        </h2>
        <h2 className="text-black font-bold text-5xl text-balance mb-7">
          Hotel for every <br /> moment rich <br /> in emotion
        </h2>
        <h3 className="text-black font-medium text-base mb-7">
          Every moment feels like the first time in paradise view
        </h3>
        <Button />
      </div>
      <Image
        src={ImageHome}
        alt="Home Page Image"
        width={600}
        height={600}
        className="rounded-2xl"
      />
    </div>
  );
}
