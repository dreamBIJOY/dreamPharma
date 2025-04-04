import React from "react";
import HeroImage from "../../../../../public/Image/Product Details/Hero Image.jpg";
import { Link } from "react-router-dom";

function Hero() {
  return (
    <div>
      <div>
        <img
          className="w-full h-[400px] object-cover blur-[3px]"
          src={HeroImage}
          alt=""
        />
      </div>
      <Link to="/shop">
        <div className="w-full h-[50px] bg-green-700 flex justify-center place-items-center">
          <h1 className="bg-green-700 text-xl font-semibold text-white">Beck To Shop</h1>
        </div>
      </Link>
    </div>
  );
}

export default Hero;
