import React from 'react'
import { HiOutlineMail } from "react-icons/hi";
import { FiPhone } from "react-icons/fi";
import { CgBorderStyleSolid } from "react-icons/cg";
import { FaFacebookF } from "react-icons/fa";
import { IoLogoWhatsapp } from "react-icons/io5";
import { FaXTwitter } from "react-icons/fa6";

function TopSection() {
  return (
    <div className='bg-[#F1F0E9] py-2'>
        <div className='hidden md:block'>
        <div className='w-10/12 mx-auto flex items-center justify-between'>
            <div className='flex items-center gap-1'>
            <HiOutlineMail size={22} className='text-gray-600' />
            <h1 className='text-md text-gray-600'>dreampharmainfo@gmail.com</h1>
            
            <CgBorderStyleSolid size={30} className='rotate-90 text-gray-400'/>
            
            <FiPhone size={22} className='text-gray-600' />
            <h1 className='text-md text-gray-600'>(+880) 1784-439097</h1>
            </div>

            <div className='flex items-center gap-4'>
            <FaFacebookF size={22} className='text-gray-600' />
            <IoLogoWhatsapp size={23} className='text-gray-600' />
            <FaXTwitter size={22} className='text-gray-600' />
            </div>
        </div>
        </div>

        {/* Responsive */}
        <div className='block md:hidden'>
        <div className='w-10/12 mx-auto flex items-center justify-between'>
            <div className=''>
            <div className='flex items-center gap-1'>
            <HiOutlineMail size={16} className='text-gray-600' />
            <h1 className='text-[12px] text-gray-600'>dreampharmainfo@gmail.com</h1>
            </div>
            
            
            <div className='flex items-center gap-1 mt-1'>
            <FiPhone size={16} className='text-gray-600' />
            <h1 className='text-[12px] text-gray-600'>(+880) 1784-439097</h1>
            </div>
            </div>

            <div className='flex items-center gap-4'>
            <FaFacebookF size={16} className='text-gray-600' />
            <IoLogoWhatsapp size={16} className='text-gray-600' />
            <FaXTwitter size={16} className='text-gray-600' />
            </div>
        </div>
        </div>
    </div>
  )
}

export default TopSection