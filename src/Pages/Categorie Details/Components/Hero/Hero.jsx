import React from 'react'
import HeroImage from '../Image/Hero Image.jpg'

function Hero() {

    
  return (
    <div>
            <div className='relative'>
            <img src={HeroImage} alt="" />
            <h1 className='text-4xl font-semibold absolute top-[180px] left-[700px]'>Categorie By Product</h1>
            <input className="absolute top-[250px] left-[620px]  w-[550px] h-[60px] px-6 text-xl outline-none bg-white rounded-md" type="text" placeholder="Search a Product................" />
            </div>
        <div className='w-10/12 mx-auto'>
        </div>
    </div>
  )
}

export default Hero