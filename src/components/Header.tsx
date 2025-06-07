import { useState } from "react";
import logo from "../assets/user.png";

const Header = () => {

  const scrollToSection = (id : string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({behavior : 'smooth'});
    }
  };

  const [isMenuOpen, setIsMenuOpen] = useState(false);
  return (
    <header className=' fixed flex w-full justify-between items-center bg-white text-black py-2 px-20 '>
        <a href="#">
          <h1 className='font-bold text-lg hover:scale-105 transition-all'>KTU Result Analyser</h1>
        </a>
        <ul className='hidden xl:flex items-center font-semibold gap-12'>
          <li className='p-3 cursor-pointer transition-all duration-200 hover:underline hover:underline-offset-4 ' onClick={() => scrollToSection('home')}>Home</li>
          <li className='p-3 cursor-pointer transition-all duration-200 hover:underline hover:underline-offset-4 ' onClick={() => scrollToSection('about')}>About</li>
          <li className='p-3 cursor-pointer transition-all duration-200 hover:underline hover:underline-offset-4 ' onClick={() => scrollToSection('team')}>Team</li>
          <li className="w-8 h-8 rounded-full object-cover cursor-pointer"><img src={logo} /></li>
        </ul>

        <div className="block xl:hidden">
          <i className="bx bx-menu text-5xl cursor-pointer" onClick={() => setIsMenuOpen(!isMenuOpen)}></i>
        </div>

        <div className={`absolute xl:hidden top-24 left-0 w-full bg-gray-300 flex flex-col items-center gap-1 font-semibold text-lg transform transition-transform ${isMenuOpen ? 'opacity-100':'opacity-0'}`}>
            <li className="list-none w-full text-center p-4 hover:bg-gray-400 hover:text-black transition-all cursor-pointer" onClick={() => {scrollToSection('home');setIsMenuOpen(!isMenuOpen)}}>Home</li>
            <li className="list-none w-full text-center p-4 hover:bg-gray-400 hover:text-black transition-all cursor-pointer" onClick={() => {scrollToSection('about');setIsMenuOpen(!isMenuOpen)}}>About</li>
            <li className="list-none w-full text-center p-4 hover:bg-gray-400 hover:text-black transition-all cursor-pointer" onClick={() => {scrollToSection('team');setIsMenuOpen(!isMenuOpen)}}>Team</li>
        </div>
      </header>
  )
}

export default Header;