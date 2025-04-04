import React, { useEffect, useState } from "react";

function Categories() {
  const [categories, setCategories] = useState([]);
  useEffect(() => {
    fetch("/categories.json")
      .then((res) => res.json())
      .then((data) => setCategories(data));
  }, []);

  
  return (
<div>
    
<div className="block md:hidden">
  <div className="">
  <h1 className="text-[20px] font-bold text-center py-3 px-2 text-gray-800">Categories by Products</h1>
  <hr className="text-gray-300" />
  </div>
    <div className="grid grid-cols-3 gap-5 mt-5">
        {categories.map((category, index) => (
          <div key={index} className="justify-center place-items-center cursor-pointer">
            <img
              className="w-[70px]"
              src={category.icon}
              alt={category.categorie}
            />
            <h1 className="text-[12px] ">
              {category.categorie}
            </h1>
          </div>
        ))}
        </div>
    </div> 

<div className="bg-base-200 w-[300px] ">
      <div className="bg-green-700 rounded-t-box hidden md:block">
        <h1 className="text-[20px] font-bold text-center py-3 px-2 text-white">Categories by Products</h1>
      </div>
      <div className="hidden md:block">
        <div className="flex flex-col gap-6 mt-4 p-5">
          {categories.map((categorie, index) => (
            <div key={index}>
              <div className="flex items-center gap-2 cursor-pointer">
                <img className="w-[50px]" src={categorie.icon} alt="" />
                <h1 className="text-xl font-semibold">{categorie.categorie}</h1>
              </div>
            </div>
          ))}
        </div>
      </div>

    
    </div>
</div>
  );
}

export default Categories;
