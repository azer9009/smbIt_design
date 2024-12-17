import React from 'react'
import BgImage from '../img/Bg-main.png'
import BlueBtn from './BlueBtn'
const HeroSect = () => {
  return (
    <section className='w-full p-[100px] max-md:py-[180px] flex justify-end h-screen  bg-no-repeat bg-contain ] ' style={{
        backgroundImage: `url(${BgImage})`
    }} >
      <div className='flex flex-col mt-[120px] gap-[20px]  ' >
        <p className='text-[54px] ' >SMB IT</p>
        <p className='text-[27px] text-[#dcb916]' >Peşəkar IT təhlükəsizlik və Ip kamera xidməti</p>
        <p className='text-[20px]' >SMB IT Peşəkar IT komandası ilə 2020 ci ildən bu günə Kamera quraşdırılması, <br /> IT servisi və printer servisi ilə sizin xidmətinizdədir.</p>
        <BlueBtn>Bizimlə Əlaqəyə keç</BlueBtn>
      </div>
    </section>
  )
}

export default HeroSect
