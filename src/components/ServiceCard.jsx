import React from 'react';
import BlueBtn from './BlueBtn';

const ServiceCard = ({ iconCn, headTitle, service1, service2, service3, service4, service5, cardCn }) => {
  return (
    <div className='bg-[#F8FAFC] p-[54px]  flex justify-between flex-col gap-[20px] shadow-lg'>
      <i className={`${iconCn} text-[#4EA6E0] text-[40px]`}></i>
      <p className='text-[#0F172A] text-[18px]  py-[5px]'>{headTitle}</p>
      <p className={`text-[#94a3b8] text-[15px] py-[5px] pr-[30px] pb-[30px] text-left ${cardCn}`}>{service1}</p>
      <p className={`text-[#94a3b8] text-[15px] py-[5px] pr-[30px] pb-[30px] text-left ${cardCn}`}>{service2}</p>
      <p className={`text-[#94a3b8] text-[15px] py-[5px] pb-[30px] pr-[30px] text-left ${cardCn}`}>{service3}</p>
      {service4 && <p className={`text-[#94a3b8] text-[15px] py-[5px] pb-[30px] pr-[30px] text-left ${cardCn}`}>{service4}</p>}
      {service5 && <p className={`text-[#94a3b8] text-[15px] py-[5px] pb-[30px] pr-[30px] text-left ${cardCn}`}>{service5}</p>}
      <BlueBtn className='mt-[40px]' >DAHA ÇOX</BlueBtn> 
    </div>
  );
};

export default ServiceCard;
