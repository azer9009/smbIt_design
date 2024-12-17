import React from 'react'
import InfoCard from './InfoCard'
import Building from '../img/building.png'
import Printer from '../img/printer.png'

const InfoCards = () => {
  return (
    <div className=' w-full h-screen   flex flex-col justify-center gap-[200px] items-center max-md:mt-[300px] ' >
      <InfoCard className='mt-[200px]' ImgSrc={Building}  title='Peşəkar IT Xidməti' main='IP kamera IP domofon və  IT xidməti' desc='SMB IT 2020-ci ildə təsis edilmiştir və 2021 ci ildən İKT bazarında fəaliyyət göstərir. Müassisəmizin əsas istiqaməti miqyasından asılı olmayaraq müəssisə və təşkilatlar üçün istənilən kompleksli telekomunikasiya layihələrin işlənilib hazirlanması və həyata keçməsidir.' />
      <InfoCard className='py-[50px]' ImgSrc={Printer}  title='Printer  Xidməti' main='Katric dolumu baraban dəyişimi' desc='SMB IT şirkəti sizə printer temir servisi və katric dolumu servisi göstərir. Peşəkar printer servisi yalnız SMB IT də' />
    </div>
  )
}

export default InfoCards
