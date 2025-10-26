import Button from './ui/Button';

export default function NavBar() {
  return (
    <div className="flex py-8 px-30 gap-52 items-center">
      <h2 className="text-black">Logo</h2>
      <div>
        <ol
          className="flex gap-16
        "
        >
          <li className="text-black">Home</li>
          <li className="text-black">Explore</li>
          <li className="text-black">Rooms</li>
          <li className="text-black">About</li>
          <li className="text-black">Contact</li>
        </ol>
      </div>
      <Button />
    </div>
  );
}
