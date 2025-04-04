import React, { useEffect, useState } from "react";
import { TiThSmall } from "react-icons/ti";
import { Link } from "react-router-dom";

function Categories() {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    fetch("/categories.json")
      .then((res) => res.json())
      .then((items) => setCategories(items));
  }, []);



  return (
    <div className="py-6 md:py-8">
      <div className="w-10/12 mx-auto">
        <div className="flex items-center justify-between">
                   <Link to="/"><h1 className="text-md md:text-2xl font-semibold text-green-700">
                     Categories By <span className="text-gray-700">Products</span>
                   </h1></Link>
                   <Link to="/shop"><h1 className="text-md md:text-4xl font-semibold text-gray-700">
                   <TiThSmall />
                   </h1></Link>
                 </div>

        <div className="grid grid-cols-6 mt-8">
        {categories.map((categorie, index) => (
         <div key={index} className="flex justify-center mb-5">
          <div className="w-[230px] h-[100px] bg-white p-4 rounded-b-2xl border-b-3 border-green-700 cursor-pointer">
         <Link to={`/categorie-by-product/${categorie.id}`}> <div className="flex items-center gap-3">
          <img className="w-[60px] h-[80px] object-contain" src={categorie.icon} alt={categorie.categorie} />
          <h1 className="text-xl font-semibold">{categorie.categorie}</h1>
          </div></Link>
          </div>

         </div>
        ))}
        </div>
      </div>
    </div>
  );
}

export default Categories;
