import React from 'react';
import InfoCard from './InfoCard';
import Building from '../img/building.png';

const AboutUsSect = () => {
  return (
    <div className="w-full px-[200px] flex justify-center items-center flex-col gap-[150px] py-[70px] max-md:px-8 max-md:py-[40px]">
      <InfoCard 
        ImgSrc={Building}  
        title="Peşəkar IT Xidməti" 
        main="IP kamera IP domofon və IT xidməti" 
        desc="SMB IT 2020-ci ildə təsis edilmiştir və 2021-ci ildən İKT bazarında fəaliyyət göstərir..."
      />
      <div className="w-full md:w-1/2 mt-8 md:mt-0 mr-[100px] max-md:w-full max-md:mr-0">
        <iframe
          title="Nur Plaza"
          className="w-full h-96 rounded max-md:h-56"
          src="https://www.google.com/maps/embed?pb=..."
          allowFullScreen=""
          loading="lazy"
        />
      </div>
    </div>
  );
}

export default AboutUsSect;
