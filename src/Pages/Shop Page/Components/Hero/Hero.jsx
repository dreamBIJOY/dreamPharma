import React from "react";
import HeroImage from "../../../../../public/Image/Shop/hero image.jpg";

function Hero() {
  return (
    <div className="shadow-lg">
      <div className="relative">
        <img className=" w-full h-[400px]" src={HeroImage} alt="" />
        <div className="">
          <h1 className="text-4xl text-white font-semibold absolute top-0 left-[600px] mt-16">
            Looking for a specific Products?
          </h1>
          <input className="absolute top-[130px] left-[600px]  w-[550px] h-[60px] px-6 text-xl outline-none bg-white rounded-md" type="text" placeholder="Search a Product................" />
        </div>
      </div>
    </div>
  );
}

export default Hero;
