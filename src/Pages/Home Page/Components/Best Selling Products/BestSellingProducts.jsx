import React from "react";

function BestSellingProducts() {
  return (
    <div className="py-10">
        <div className="w-10/12 mx-auto">
      <div className="">
        <h1 className="text-xl md:text-2xl font-bold text-green-700 text-center">
          Shop
        </h1>
      </div>
      <hr className="text-gray-300 mt-2" />

      <div className="mt-3 md:mt-6">
        <div className="flex items-center justify-between">
          <h1 className="text-md md:text-2xl font-semibold text-green-700">
            Best Selling <span className="text-gray-700">Products</span>
          </h1>
          {/* <h1 className='text-md md:text-4xl font-semibold text-gray-700'><CiFilter /></h1> */}
        </div>
      </div>
    </div>
    </div>
  );
}

export default BestSellingProducts;
