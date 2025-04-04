import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function Categories({categorieName}) {
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
        <h1 className="text-sm md:text-2xl font-semibold">
          Shop by Category
        </h1>

       <Link to='/shop'> <h1 className="text-sm md:text-2xl font-semibold">See all</h1></Link>
        </div>

        <div className="grid grid-cols-3 md:grid-cols-8 gap-5 md:gap-10 mt-14">
        {categories.map((category, index) => (
          <div onClick={()=> categorieName(category)}  key={index} className="justify-center place-items-center cursor-pointer">
            <img
              className="w-[70px] md:w-[100px]"
              src={category.icon}
              alt={category.categorie}
            />
            <h1 className="text-[12px] md:text-[19px]">
              {category.categorie}
            </h1>
          </div>
        ))}
        </div>
      </div>
    </div>
  );
}

export default Categories;
