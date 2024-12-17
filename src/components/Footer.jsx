import React from 'react';
import CoustomIcon from './CoustomIcon';
import logo from '../img/logo-2.png'
const Footer = () => {
  return (
    <footer className="w-full bg-[#0F172A] p-6 py-[90px] ">
      <div className="flex justify-center gap-[20px] flex-col justify-center items-center gap-[70px] ">
        <img src={logo} alt="" className='w-[100px]' />
        <CoustomIcon />
      </div>
    </footer>
  );
};

export default Footer;
