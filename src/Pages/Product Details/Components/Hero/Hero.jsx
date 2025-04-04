import React from 'react'
import HeroImage from '../../../../../public/Image/Product Details/Hero Image.jpg'
import { Link } from 'react-router-dom'

function Hero() {
  return (
    <div className='shadow-lg'>
        <div className='relative'>
        <img className='w-full h-[400px] object-cover blur-[3px]' src={HeroImage} alt="" />
        <div className=''>
            <Link to="/shop"><button className='btn absolute top-40 left-[810px] text-xl py-8 px-6 hover:bg-green-700 border-none hover:text-white transition-all duration-500'>Back to Shop</button></Link>
        </div>
        </div>
    </div>
  )
}

export default Hero