import React from 'react'
import { adress, email, number1, number2, number3 } from '../conf/constants'
import { FaLocationDot } from "react-icons/fa6";

const ContactSect = () => {
  return (
    <div className='flex flex-col py-[100px] px-[30px] gap-[60px] justify-center'>
      <p className='text-[46px] text-center text-[#161616f]'>Əlaqə</p>

      <div className='flex flex-col md:flex-row justify-between'>
        {/* Map Section */}
        <div className="w-full md:w-1/2 mb-8 md:mb-0 md:mr-[100px]">
          <iframe
            title="Nur Plaza"
            className="w-full h-96 rounded"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2933.612083548732!2d49.8607933!3d40.4115853!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40307d1f0a4379c9%3A0x1c9fd545aa7d801e!2sNur+Plaza!5e0!3m2!1sen!2saz!4v1708987634535!5m2!1sen!2saz"
            allowFullScreen=""
            loading="lazy"
          />
        </div>

        {/* Contact Info Section */}
        <div className='bg-transparent border p-[25px] rounded-md flex flex-col gap-[30px] w-full md:w-1/2'>
          <p className='text-[24px] text-gray text-center'>Bizimlə əlaqəyə keç</p>
          <div className='flex flex-col gap-[20px]'>
            {/* Phone Numbers */}
            <div className='flex flex-col gap-[15px]'>
              <a href={`tel:${number1}`} className='flex items-center text-[#000000] duration-500'>
                <svg className="h-4 w-4 text-[#B2BDFF] mr-2" stroke="currentColor" fill="#000000" strokeWidth="2" viewBox="0 0 24 24" strokeLinecap="round" strokeLinejoin="round">
                  <polyline points="23 7 23 1 17 1"></polyline>
                  <line x1="16" y1="8" x2="23" y2="1"></line>
                  <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
                </svg>
                {number1}
              </a>
              <a href={`tel:${number2}`} className='flex items-center text-[#000000] duration-500'>
                <svg className="h-4 w-4 text-[#B2BDFF] mr-2" stroke="currentColor" fill="#000000" strokeWidth="2" viewBox="0 0 24 24" strokeLinecap="round" strokeLinejoin="round">
                  <polyline points="23 7 23 1 17 1"></polyline>
                  <line x1="16" y1="8" x2="23" y2="1"></line>
                  <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
                </svg>
                {number2}
              </a>
              <a href={`tel:${number3}`} className='flex items-center text-[#000000] duration-500'>
                <svg className="h-4 w-4 text-[#B2BDFF] mr-2" stroke="currentColor" fill="#000000" strokeWidth="2" viewBox="0 0 24 24" strokeLinecap="round" strokeLinejoin="round">
                  <polyline points="23 7 23 1 17 1"></polyline>
                  <line x1="16" y1="8" x2="23" y2="1"></line>
                  <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
                </svg>
                {number3}
              </a>
            </div>

            {/* Other Contact Info */}
            <div className='flex flex-col gap-[15px]'>
              <a href={`mailto:${email}`} className='flex items-center text-[#000000] duration-500'>
                <svg className="h-4 w-4 text-[#B2BDFF] mr-2" stroke="#FFFFFF" fill="#000000" strokeWidth="2" viewBox="0 0 24 24" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
                  <polyline points="22,6 12,13 2,6"></polyline>
                </svg>
                {email}
              </a>

              <a href={`https://www.google.com/maps?q=${adress}`} className='flex items-center text-[#000000]'>
                <FaLocationDot color='#000000' className="mr-2" />
                {adress}
              </a>

              <a href="tel:+1234567890" className='flex items-center text-[#000000]'>
                <i className="fa-solid fa-clock"></i> 09:00 / 18:00
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ContactSect
