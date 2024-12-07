import React from 'react'

const Footer = () => {
  return (
    <div className='pt-[80px] pb-[40px]'>
        <div className='flex items-center justify-center gap-x-[12px] '>
            <img src="Logo.png" alt="" />
            <p className='font-bold text-[17px]'>YOUR SITE</p>

        </div>
       <ul className='flex flex-col items-center gap-y-[42px] pt-[56px] text-[#36485C] sm:flex-row sm:justify-center sm:gap-x-5 sm:pt-5'>
        <li>Features</li>
        <li>Pricing</li>
        <li>Enterprise</li>
        <li>Careers</li>

       </ul>
       <p className='pt-[56px] text-center text-[14px] font-medium text-[#5F7896] sm:pt-5'>© Copyright 2024. Your Site. All rights reserved.</p>
       <div className='flex items-center justify-center gap-x-[56px] pt-[40px]  '>
        <img src="exe.png" alt="" />
        <img src="Facebook.png" alt="" />
        <img src="wifi.png" alt="" />

       </div>
    </div>
  )
}

export default Footer;