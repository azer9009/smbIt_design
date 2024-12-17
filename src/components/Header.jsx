import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import TopBar from './TopBar';
import Logo from '../img/smb_logo.png';
import AmericanFlag from '../img/american_flag.png';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false); // State to toggle the menu on mobile

  // Scroll event listener to toggle isScrolled
  window.onscroll = () => {
    if (window.scrollY > 50) {
      setIsScrolled(true);
    } else {
      setIsScrolled(false);
    }
  };

  return (
    <nav className="relative w-full overflow-x-hidden">
     
      {!isScrolled && <TopBar />}

   
      <div
        className={`flex items-center justify-between w-full px-4 max-md:pr-[150px] max-md:pl-[70px] md:px-12 lg:px-[220px] ${
          isScrolled ? 'fixed top-0 bg-white shadow-md py-4' : 'relative py-6'
        } z-50 duration-500 ease-in-out`}
      >
      
        <img
          src={Logo}
          className="w-[100px] h-[50px] md:w-[130px] md:h-[60px] transition-all duration-500"
          alt="Logo"
        />

       
        <button
          className="block lg:hidden text-[#0EA5E9] focus:outline-none"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <i className="fa-solid fa-bars text-2xl"></i>
        </button>

       
        <div
          className={`${
            menuOpen ? 'block' : 'hidden'
          } absolute top-full left-0 w-full bg-white lg:relative lg:w-auto lg:bg-transparent lg:block`}
        >
          <ul className="flex flex-col lg:flex-row gap-6 lg:gap-[50px] text-center lg:text-left text-[#666666] text-[15px]">
            <li className="cursor-pointer hover:text-[#0EA5E9] duration-300">
              <Link to="/">ANA SƏHİFƏ</Link>
            </li>
            <li className="cursor-pointer hover:text-[#0EA5E9] duration-300">
              <Link to="/services">XİDMƏTLƏRİMİZ</Link>
            </li>
            <li className="cursor-pointer hover:text-[#0EA5E9] duration-300">
              <Link to="/aboutUs">HAQQIMIZDA</Link>
            </li>
            <li className="cursor-pointer hover:text-[#0EA5E9] duration-300">
              <Link to="/contact">ƏLAQƏ</Link>
            </li>
          </ul>
        </div>

       
        <div className="hidden lg:flex items-center gap-2">
          <button className="w-[32px] h-[32px] bg-[#0EA5E9] rounded-full hover:bg-[#0284C7] duration-300 flex items-center justify-center">
            <i className="fa-solid fa-magnifying-glass text-white"></i>
          </button>
          <button className="w-[32px] h-[32px] bg-[#0EA5E9] rounded-full hover:bg-[#0284C7] duration-300">
            <img src={AmericanFlag} alt="Flag" />
          </button>
          <button className="w-[32px] h-[32px] bg-[#0EA5E9] rounded-full hover:bg-[#0284C7] duration-300 flex items-center justify-center">
            <i className="fa-solid fa-bag-shopping text-white"></i>
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Header;
