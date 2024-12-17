import React from 'react';
import { FaLocationDot } from "react-icons/fa6";
import { adress, email, number1, number2 } from '../conf/constants';

const TopBar = () => {
  return (
    <div className="w-full bg-gradient-to-r from-sky-500 to-blue-700 py-3 px-4 md:px-12 lg:px-[220px] max-md:flex-row max-md:justify-center max-md:mr-[50px] flex flex-col md:flex-row justify-between items-center text-sm text-white gap-3">
     
      <div className="flex gap-6">
        <a href="#" className="flex items-center gap-2 hover:text-[#B2BDFF] duration-500">
          <svg
            stroke="currentColor"
            fill="#B2BDFF"
            strokeWidth="2"
            viewBox="0 0 24 24"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="h-4 w-4"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
          </svg>
          {number1}
        </a>
        <a href="#" className="flex items-center gap-2 hover:text-[#B2BDFF] duration-500">
          <FaLocationDot color="#B2BDFF" />
          {adress}
        </a>
      </div>

      
      <div>
        <a href="#" className="flex items-center gap-2 hover:text-[#B2BDFF] duration-500">
          <svg
            stroke="currentColor"
            fill="#B2BDFF"
            strokeWidth="2"
            viewBox="0 0 24 24"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="h-4 w-4"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
            <polyline points="22,6 12,13 2,6" />
          </svg>
          {email}
        </a>
      </div>
    </div>
  );
};

export default TopBar;
