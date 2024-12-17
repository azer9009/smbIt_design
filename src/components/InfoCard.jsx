import React from 'react';
import BlueBtn from './BlueBtn';

const InfoCard = ({ title, main, desc, ImgSrc, className }) => {
  return (
    <div className={`flex items-center ${className} max-md:flex-col-reverse`}>
      <div className="flex flex-col gap-[50px] max-md:gap-[30px]">
        <p className="text-[#f5cb0a] text-[18px] max-md:text-[16px]">{title}</p>
        <p className="text-[46px] text-[#11111] max-w-[550px] max-md:text-[24px] max-md:text-center">{main}</p>
        <p className="text-[16px] text-[#a1b9c2] max-w-[540px] max-md:text-[14px]">{desc}</p>
        <BlueBtn className="max-md:w-full">Ətraflı</BlueBtn>
      </div>
      <img className="w-[510px] h-[353px] max-md:w-full max-md:h-auto" src={ImgSrc} alt="Building" />
    </div>
  );
}

export default InfoCard;
