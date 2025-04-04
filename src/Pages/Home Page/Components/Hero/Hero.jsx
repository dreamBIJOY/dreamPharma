import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination } from 'swiper/modules';
import HeroImageOne from '../Image/1.webp'
import HeroImageTwo from '../Image/2.webp'
import HeroImageThree from '../Image/3.webp'
import HeroImageFour from '../Image/4.webp'
import 'swiper/css';  
import 'swiper/css/pagination';


function Hero() {
  return (
    <div>
        <div className='w-10/12 mx-auto'>
            <div>
            <Swiper
        spaceBetween={30}
        pagination={{
          clickable: true,
        }}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
      
        modules={[Pagination, Autoplay]}
        className="mySwiper"
      >
        <SwiperSlide><img className='rounded-2xl' src={HeroImageOne} alt="" /></SwiperSlide>
        <SwiperSlide><img className='rounded-2xl' src={HeroImageTwo} alt="" /></SwiperSlide>
        <SwiperSlide><img className='rounded-2xl' src={HeroImageThree} alt="" /></SwiperSlide>
        <SwiperSlide><img className='rounded-2xl' src={HeroImageFour} alt="" /></SwiperSlide>
       
      </Swiper>
            </div>
        </div>
    </div>
  )
}

export default Hero