import Button from '../ui/Button';

export default function HomePage() {
  return (
    <div
      className="flex gap-48
    "
    >
      <div className="text-black">
        <h2 className="text-primary mb-7">Paradise View</h2>
        <h2 className="text-black font-bold text-5xl text-balance mb-7">
          Hotel for every moment rich in emotion
        </h2>
        <h3 className="text-black font-medium text-base mb-7">
          Every moment feels like the first time in paradise view
        </h3>
        <Button />
      </div>
      <div className="text-black">Image</div>
    </div>
  );
}
