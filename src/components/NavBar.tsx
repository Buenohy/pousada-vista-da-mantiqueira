import Image from 'next/image';
import Button from './ui/Button';
import Logo from '../../public/images/logo-pousada-vista-da-mantiqueira.png';

export default function NavBar() {
  return (
    <div className="flex py-8 justify-between items-center">
      <Image src={Logo} alt="Logo Nav Bar" width={100} height={100} />
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
