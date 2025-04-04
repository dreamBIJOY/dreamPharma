import React, { useEffect, useState } from "react";
import Bennar1 from "../../../../../public/Image/bennar 1.jpg"
import { Link } from "react-router-dom";



function Products({categorie}) {


  const [products, setProducts] = useState([]);
  useEffect(() => {
    fetch("/products.json")
      .then((res) => res.json())
      .then((items) => setProducts(items));
  }, []);

  const categorieByProducts = categorie ?  products.filter(product => product.category === categorie) : products;



  const visibleProducts = categorieByProducts.slice(0, 6);

 
  return (
    <div className="py-10">
      <div>
        <h1 className="text-2xl font-bold text-center"><span className="text-[#008236]">Products</span> List</h1>
      </div>
      <hr className="w-10/12 mx-auto text-gray-300 mt-3" />
      <div className="w-10/12 mx-auto flex gap-10 justify-between mt-16">

<div className="w-2/10 bg-white p-4 rounded-xl hidden md:block">
<div>
</div>
    <img className=" w-[600px] md:w-[300px] md:h-[500px]  shadow-lg" src={Bennar1} alt="" />
   
</div>

  <div className="w-8/10">
   <div className="">
  <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-[58px]">
  {
        categorieByProducts.map((product, index) =>(
            <div key={index} className="ml-10">
            <div className="group cursor-pointer w-[250px] h-[380px] md:w-[345px] md:h-[510px] p-8 rounded-lg bg-base-100 shadow-sm">
                <div className="flex justify-center">
                <img className="w-full h-[135px]  md:w-full md:h-[230px] sm:object-cover" src={product.image} alt="" />
                </div>

                <div className="md:flex  md:justify-between mt-6">
                    <h1 className="text-[18px] md:text-xl font-semibold">{product.name}</h1>
                    <p className="">{"⭐".repeat(Math.round(product.rating))}</p>
                </div>
                <h2 className="text-gray-600 text-[12px] md:text-[16px] md:mt-3">{product.description}</h2>
                <h1 className="text-lg md:text-xl font-bold mt-5 text-[#008236]">৳{product.price}</h1>
                
                <div className="flex justify-center gap-4 mt-5">
              <Link to={`/product/${product.id}`}>
              <button className="btn w-[100px] h-[25px] md:w-[150px] md:h-[50px] text-[10px] md:text-lg rounded-lg border-none bg-[#008236] text-white md:opacity-0 group-hover:opacity-100 transition-opacity duration-500">View Details</button></Link>

                <button className="btn w-[100px] h-[25px] md:w-[150px] md:h-[50px] text-[10px] md:text-lg rounded-lg border-none bg-[#008236] text-white md:opacity-0 group-hover:opacity-100 transition-opacity duration-500">Add To Cart</button>
                </div>
            </div>
            </div>
        ))
    }
  </div>
  <div>{

  <div className="flex justify-center">
    <button className="btn border-none text-xl bg-gray-300 hover:bg-[#008236] hover:text-white ">See More</button>
  </div>

    }


  </div>
  

   </div>
  </div>
</div>
    </div>
  );
}

export default Products;
