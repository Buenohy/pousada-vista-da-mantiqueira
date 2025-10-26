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
          <li className="text-black">Sobre</li>
          <li className="text-black">Acomodações</li>
          <li className="text-black">Atividades</li>
          <li className="text-black">Contato</li>
        </ol>
      </div>
      <Button />
    </div>
  );
}
