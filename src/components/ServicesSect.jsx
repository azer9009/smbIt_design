import React from 'react';
import ServiceCard from './ServiceCard';

const ServicesSect = () => {
  return (
    <div className="w-full h-screen mt-[300px] max-md:mt-[400px] px-[200px] max-md:px-[150px] max-md:mt-0  max-md:mb-[90px] flex flex-col justify-between mb-[100px] max-md:px-[50px] ">
      <div className="flex flex-col gap-[15px] max-md:mt-[200px] ">
        <p className="text-[#0f172a] text-[46px] text-center">Xidmətlərimiz</p>
        <p className="text-[#94a3b8] text-[16px] text-center">
          SMB IT ilə keyfiyyətli və sərfəli IP Kamera, IP Domofon və IT Xidmeti. Peşəkar personalları ilə IT xidmeti, kamera qosulmasi və IP domofon xidmətlərini evinizə və iş yerləriniza çattırır.
        </p>
      </div>
      <div className="flex justify-around max-md:flex-col max-md:gap-[20px]">
        <ServiceCard
          headTitle="Camera xidməti"
          service1="IP kamera qoşulması"
          service2="Analog kamera qoşulması"
          service3="Kamera xidmətləri"
          cardCn="border-b-[1px] border-b-[rgb(138,138,138)]"
          iconCn="bx bx-cctv"
        />
        <ServiceCard
          headTitle="Domofon xidməti"
          service1="IP Domofonların qoşulması"
          service2="Domofonların Satışı"
          service3="Domofonların texniki servisi"
          cardCn="border-b-[1px] border-b-[rgb(138,138,138)]"
          iconCn="fa-brands fa-intercom"
        />
        <ServiceCard
          headTitle="IT xidməti"
          service1="IT Audit hazırlanması"
          service2="IT Infrastrukturun qurulması"
          service3="Peşəkar IT dəstək xidməti"
          service4="Programların yazılması"
          service5="Şəbəkələrin qurulması"
          cardCn="border-b-[1px] border-b-[rgb(138,138,138)]"
          iconCn="fa-solid fa-server"
        />
      </div>
    </div>
  );
};

export default ServicesSect;
