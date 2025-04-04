import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function Products({categorie}) {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    fetch("/products.json")
      .then((res) => res.json())
      .then((items) => setProducts(items));
  }, []);

  const categorieByProducts = categorie ?  products.filter(product => product.category === categorie) : products;
  return (
    <div className="w-8/10 hidden md:block">
      <div className="grid grid-cols-3 gap-5">
        {categorieByProducts.map((product, index) => (
          <div key={index} className="mb-3">
           <div className="group cursor-pointer w-[250px] h-[380px] md:w-[345px] md:h-[500px] p-6 rounded-lg bg-base-100 shadow-sm border border-gray-200 border-b-10 border-b-green-700">
  <div className="flex justify-center place-items-center relative">
    {product.featured && (
      <p className="w-[100px] h-[30px] bg-green-700 text-center rounded-md text-white absolute top-0 left-52">
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
    <p className="text-[14px]">{'⭐'.repeat(Math.round(product.rating))}</p>
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
  );
}

export default Products;
