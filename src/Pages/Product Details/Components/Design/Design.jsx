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

  return <div className="w-10/12 mx-auto">
    <div>
            <div>
                
            </div>
    </div>
  </div>;
}

export default Design;
