import React from 'react'
import Image from 'next/image'
import Logo from "../../public/Logo.png"
import user from "../../public/User.png"
import Menu from "../../public/Menu.svg"
const navList = [
    {name:"Features"},
    {name:"Pricing"},
    {name:"Enterprice"},
    {name:"Careers"},

];

const Navbar = () => {
  return (
    <div className='flex w-full items-center justify-between px-[20px] py-[14px] lg:container lg:mx-auto lg:px-20'>
       <div className="flex items-center">
        <img src='/Logo.png' alt='logo'/>
        <div className='hidden lg:flex pl-[74px] gap-x-[56px]'>
            {navList.map((item,index) =>{
                return <p className='text-[#36485C] font-medium' key={index}>{item.name}</p>

})}

        </div>
       </div>
       <div className='flex gap-5'>
        <p className='hidden lg:block font-medium text-[#36485C] pr-[56px]'>Open an Account</p>
        <div className='flex items-center gap-x-2'>
            <img src="user.png" alt="user profile" />
            <span className='hidden font-medium text-[#36485C] lg:block'>Sign up</span>
        </div>
        <img src="Menu.svg" alt="menu.icon" className='lg:hidden'/>
       </div>
    </div>
  )
}

export default Navbar;