import React, { useState } from 'react'
import Logo from '../../../public/Image/Logo.png'
import { Link } from 'react-router-dom'
import { FiShoppingBag } from "react-icons/fi";
import { RiMenuUnfold3Line } from "react-icons/ri";
import { CiMenuKebab } from "react-icons/ci";
import { IoCloseOutline } from "react-icons/io5";



function Navbar() {
    const [menuName, setMenuName] = useState(false)
    const handelMenuName = () => {
        setMenuName(!menuName)
    }
    
    const [openUser, setOpenUser] = useState(false)
    const user = () => {
        setOpenUser(!openUser)
    }
  return (
    <div className='py-4'>
        <div className='w-10/12 mx-auto flex items-center justify-between'>

        <div className='block md:hidden relative'>
        {menuName ? (<IoCloseOutline onClick={handelMenuName} size={30} className="cursor-pointer" />) :
        (<RiMenuUnfold3Line onClick={handelMenuName} size={30} className="cursor-pointer" />)}
        </div>

        <div>
        <ul className={`${menuName ? "text-md text-gray-600 grid grid-cols-1 gap-4 bg-base-200 w-[160px] h-[300px] px-6 py-4 rounded-lg absolute top-[110px] left-6" : "hidden"}`}>
                    <Link to="/">Home</Link>
                    <Link to="/shop">Shop</Link>
                    <Link to="/doctors">Doctors</Link>
                    <Link to="/appointment">Appoinment</Link>
                    <Link to="/blog">Blog</Link>
                    <Link to="/aboutus">About Us</Link>
                    <Link to="/contactus">Contact Us</Link>
                </ul>
        </div>
           
           <Link to="/"><div className='md:-translate-x-16'>
                <img className='w-[140px] md:w-[240px]' src={Logo} alt="Logo" />
            </div></Link>
            
            <div className='hidden md:block'>
                <ul className='text-xl text-gray-600 flex gap-6 '>
                    <Link to="/">Home</Link>
                    <Link to="/shop">Shop</Link>
                    <Link to="/doctors">Doctors</Link>
                    <Link to="/appointment">Appoinment</Link>
                    <Link to="/blog">Blog</Link>
                    <Link to="/aboutus">About Us</Link>
                    <Link to="/contactus">Contact Us</Link>
                </ul>
            </div>

           <Link to="/cart"> 
           <div className='relative '>
                <p className='w-[35px] h-[35px] md:w-[45px] md:h-[45px] rounded-full border border-gray-300 bg-[#EFF3EA] flex justify-center place-items-center '><FiShoppingBag className='text-[25px] md:text-[30px]' /></p>
                <p className='w-[25px] h-[25px] md:w-[30px] md:h-[30px] rounded-full border border-gray-300 bg-[#EFF3EA] absolute -top-3 -right-3 text-center place-items-center text-sm md:text-xl '>0</p>
            </div>
           </Link>

            <div className='block md:hidden relative'>
            {openUser ? (<IoCloseOutline onClick={user} size={30} className='cursor-pointer'/>) :  (<CiMenuKebab onClick={user} size={30} className="cursor-pointer" />)}
            </div>

            <div className={`${openUser ? "flex flex-col gap-4 w-[130px] h-[120px] bg-base-200 rounded-lg px-5 py-4 absolute right-6 top-[110px]" : "hidden"}`}>
                <Link to="/login"><h1 className='text-lg'>Log In</h1></Link>
                <Link to="/signup"><h1 className='text-lg'>Sign Up</h1></Link>
            </div>

         

            <div className='hidden md:block'>
            <div className='flex items-center gap-2'>
                <Link to="/login"> <button className='btn text-xl w-[120px] h-[45px] border-none bg-white shadow-md rounded-md text-gray-700'>Log In</button></Link>
                 <p className='text-lg'>or</p>
                <Link to="/signup"><button className='btn text-xl w-[120px] h-[45px] border-none bg-[#EFF3EA] shadow-md rounded-md text-gray-700'>Sign Up</button></Link>
            </div>
            </div>
        </div>
    </div>
  )
}

export default Navbar