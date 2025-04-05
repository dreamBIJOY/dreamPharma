
import React, { useEffect, useState } from "react";
import { CiFilter } from "react-icons/ci";
import { IoCloseOutline } from "react-icons/io5";
import { Link } from "react-router-dom";

function NewArrivalProducts() {

    const [products, setProducts] = useState([])
    useEffect(() => {
        fetch('/products.json')
        .then(res => res.json())
        .then(data => setProducts(data))
    },[])

    const [categories, setCategories] = useState([])
    useEffect(()=>{
      fetch('/categories.json')
      .then(res => res.json())
      .then(data => setCategories(data)
      )
    },[])

    const [isOpenCaterories, setIsOpenCategories] = useState(false)

    const toggleMenu = () => {
      setIsOpenCategories(!isOpenCaterories)
    }

    const [categoriesName, setCategoriesName] = useState(null)
    const categorieName = (data) => {
      setCategoriesName(data.categorie);
      
    }

    const newArrivalProducts = products.filter(product => {
      const isNew = product.featured === "New";
      const inCategory = categoriesName && categoriesName !='All' ? product.category === categoriesName : true;
      return isNew && inCategory;
    });
    

  return (
    <div>
      <div className="w-10/12 mx-auto">
        <div>
          <h1 className="text-xl md:text-2xl font-bold text-green-700 text-center">
            Shop
          </h1>
          <hr className="text-gray-300 mt-2" />
        </div>

         <div className="flex items-center justify-between mt-10">
                    <Link to="/"><h1 className="text-md md:text-2xl font-semibold text-green-700">
                      New Arrival <span className="text-gray-700">Products</span>
                    </h1></Link>
                   <div className="relative">
                   {isOpenCaterories ? (<IoCloseOutline onClick={toggleMenu} className="text-md md:text-4xl font-semibold text-gray-700 cursor-pointer" />) : (<CiFilter onClick={toggleMenu} className="text-md md:text-4xl font-semibold text-gray-700 cursor-pointer"/>) }
                   </div>
                  </div>

                 <div className={`${isOpenCaterories ? "absolute right-40 z-10 top-[887px]" : "hidden"}`}>
                 <div className="w-[250px] h-[720px] bg-base-200 p-6 shadow-2xl border-2 border-gray-300">
                    {categories.map((categorie, index) => (
                      <div key={index} className="mb-4">
                        <div onClick={()=> categorieName(categorie)} className={` flex items-center gap-2 cursor-pointer ${
                          categoriesName === categorie.categorie ? " bg-green-200" : ""
                        }`}>
                          <img className="w-[18%]" src={categorie.icon} alt="" />
                          <h1 className="text-lg ">{categorie.categorie}</h1>
                        </div>
                      </div>
                    ))}
                  </div>
                 </div>
                  
               <div className="grid grid-cols-1 ml-9 md:ml-0 md:grid-cols-4 mt-8 gap-4 transition-all duration-500 ease-in-out">
                   {newArrivalProducts.map((product, index) => (
                     <div className="mb-4" key={index}>
                   
                       <div className="group cursor-pointer w-[250px] h-[420px] md:w-[345px] md:h-[500px] p-6 rounded-lg bg-base-100 shadow-sm border border-gray-200 border-b-10 border-b-green-700">
                         <div className="flex justify-center place-items-center relative">
                           {product.featured && (
                             <p className="w-[100px] h-[30px] bg-green-700 text-center rounded-md text-white absolute top-0 left-28 md:left-52">
                               {product.featured}
                             </p>
                           )}
                           <img
                             className="w-full h-[200px] md:h-[250px] object-contain"
                             src={product.image}
                             alt={product.name}
                           />
                         </div>
                         <div className="md:flex md:justify-between mt-6">
                           <h1 className="text-[18px] md:text-xl font-semibold truncate">
                             {product.name}
                           </h1>
                           <p className="text-[14px]">
                             {"⭐".repeat(Math.round(product.rating))}
                           </p>
                         </div>
                         <h2 className="text-gray-600 text-[12px] md:text-[16px] md:mt-3 truncate">
                           {product.description}
                         </h2>
                         <h1 className="text-lg md:text-xl font-bold mt-5 text-[#008236]">
                           ৳{product.price}
                         </h1>
                         <div className="flex justify-center gap-4 mt-5">
                           <Link to={`/product/${product.id}`}>
                             <button className="btn w-[100px] h-[25px] md:w-[150px] md:h-[50px] text-[10px] md:text-lg rounded-lg border-none bg-[#008236] text-white md:opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                               View Details
                             </button>
                           </Link>
       
                          
       
                           <button className="btn w-[100px] h-[25px] md:w-[150px] md:h-[50px] text-[10px] md:text-lg rounded-lg border-none bg-[#008236] text-white md:opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                             Add To Cart
                           </button>
                         </div>
                       </div>
                     </div>
                   ))}
                 </div>
      </div>
    </div>
  );
}

export default NewArrivalProducts;
