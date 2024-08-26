import React, { useState } from 'react'; // Import useState here
import LOGO from '../assets/LOGO.png';

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className="w-full h-full absolute">
      <header className="flex justify-between items-center text-black py-6 px-8 md:px-32 bg-white drop-shadow-md">
        <a href="#">
          <img src={LOGO} alt="" className="w-52 hover:scale-105 transition-all" />
        </a>

        <ul className="hidden xl:flex items-center gap-12 font-semibold text-base">
          <li className="p-3 hover:bg-sky-400 hover:text-white rounded-md transition-x-all cursor-pointer">Inicio</li>
          <li className="p-3 hover:bg-sky-400 hover:text-white rounded-md transition-x-all cursor-pointer">Registro</li>
          <li className="p-3 hover:bg-sky-400 hover:text-white rounded-md transition-x-all cursor-pointer">Sobre Nosotros</li>
          <li className="p-3 hover:bg-sky-400 hover:text-white rounded-md transition-x-all cursor-pointer">Contacto</li>
        </ul>

        <i className="bx bx-menu xl:hidden block text-5x1 cursor-pointer" onClick={() => setIsMenuOpen(!isMenuOpen)}></i>

        <div className={`absolute xl:hidden top-24 left-0 first:w-full bg-white flex flex-col items-center gap-6 font-semibold text-lg transform transition-transform ${isMenuOpen ? 'opacity-100' : 'opacity-0'}`} style={{ transition: 'transform 0.3s ease, opacity 0.3s ease' }}>
          
        </div>
      </header>
    </div>
  );
}


export default Header;

  