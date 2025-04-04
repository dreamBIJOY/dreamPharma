import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

function Design() {
  const { id } = useParams();
  const [product, setProduct] = useState(null);

  useEffect(() => {
    fetch("/products.json")
      .then((res) => res.json())
      .then((items) => {
        const foundProduct = items.find((item) => item.id === Number(id));
        setProduct(foundProduct);
      });
  }, [id]);

  if (!product) {
    return (
      <div className="flex justify-center items-center">
        <p>No product found for this ID.</p>
      </div>
    );
  }

  return (
    <div className="w-10/12 mx-auto mt-10">
      <div className="flex items-center gap-40">
        <div className="w-[600px] h-[500px] flex justify-center border border-gray-400 rounded-2xl">
          <img className="w-[500px] object-cover" src={product.image} alt="" />
        </div>

        <div>
          <h1 className="text-4xl font-bold">{product.name}</h1>
          <p className="text-xl mt-4">
            {"⭐".repeat(Math.round(product.rating))} (
            {Math.round(product.rating)})
          </p>
          <h5 className="text-2xl text-gray-700 mt-3">{product.description}</h5>
          <button className="btn w-[220px] h-[50px] px-5 py-3 border-none bg-gray-200 rounded-lg text-xl mt-10 hover:bg-green-700 hover:text-white">Add To Cart</button>
        </div>
      </div>
    </div>
  );
}

export default Design;
