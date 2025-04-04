import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function Products() {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    fetch("/products.json")
      .then((res) => res.json())
      .then((items) => setProducts(items));
  }, []);

  const slugify = (text) =>
    text
      .toLowerCase()
      .replace(/\s+/g, "-")
      .replace(/[^\w-]+/g, "");

  return (
    <div className="w-8/10 hidden md:block">
      <div className="grid grid-cols-3 gap-5">
        {products.map((product, index) => (
          <div key={index} className="mb-3">
            <div className="group cursor-pointer w-[250px] h-[380px] md:w-[345px] md:h-[510px] p-8 rounded-lg bg-base-100 shadow-sm">
              <div className="flex justify-center relative">
                {product.featured && (
                  <p className="w-[60px] h-[25px] bg-green-700 text-center rounded-md text-white absolute top-0 left-60">
                    {product.featured}
                  </p>
                )}
                <img
                  className="w-full h-[135px]  md:w-full md:h-[230px] sm:object-cover"
                  src={product.image}
                  alt=""
                />
              </div>

              <div className="md:flex  md:justify-between mt-6">
                <h1 className="text-[18px] md:text-xl font-semibold">
                  {product.name}
                </h1>
                <p className="">{"⭐".repeat(Math.round(product.rating))}</p>
              </div>
              <h2 className="text-gray-600 text-[12px] md:text-[16px] md:mt-3">
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
