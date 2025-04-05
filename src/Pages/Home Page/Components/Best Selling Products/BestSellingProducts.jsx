import React, { useEffect, useState, useRef } from "react";
import { CiFilter } from "react-icons/ci";
import { IoCloseOutline } from "react-icons/io5";
import { Link } from "react-router-dom";

function BestSellingProducts() {
  const [products, setProducts] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const intervalRef = useRef(null);
  const itemsPerPage = 4;

  useEffect(() => {
    fetch("/products.json")
      .then((res) => res.json())
      .then((items) => setProducts(items));
  }, []);

  const [categories, setCategories] = useState([]);
  useEffect(() => {
    fetch('/categories.json')
      .then(res => res.json())
      .then(data => setCategories(data));
  }, []);

  const [categoriesName, setCategoriesName] = useState(null);

  const handleCategorySelect = (data) => {
    setCategoriesName(data.categorie);
  };

  const bestSellingProducts = products.filter((product) => {
    const isBestSeller = product.featured === "Best Seller";
    const inCategory = categoriesName && categoriesName !="All" ?  product.category === categoriesName : true;
    return isBestSeller && inCategory;
  });

  const totalItems = bestSellingProducts.length;

  const startAutoSlide = () => {
    intervalRef.current = setInterval(() => {
      setCurrentIndex((prev) =>
        prev + 1 >= totalItems - itemsPerPage + 1 ? 0 : prev + 1
      );
    }, 3000);
  };

  const resetAutoSlide = () => {
    clearInterval(intervalRef.current);
    startAutoSlide();
  };

  useEffect(() => {
    if (totalItems > itemsPerPage) {
      startAutoSlide();
    }
    return () => clearInterval(intervalRef.current);
  }, [totalItems]);

  useEffect(() => {
    setCurrentIndex(0);
    resetAutoSlide();
  }, [categoriesName]);

  const handleNext = () => {
    setCurrentIndex((prev) =>
      prev + 1 >= totalItems - itemsPerPage + 1 ? 0 : prev + 1
    );
    resetAutoSlide();
  };

  const handlePrev = () => {
    setCurrentIndex((prev) =>
      prev - 1 < 0 ? totalItems - itemsPerPage : prev - 1
    );
    resetAutoSlide();
  };

  const visibleProducts = bestSellingProducts.slice(
    currentIndex,
    currentIndex + itemsPerPage
  );

  const [isOpenCaterories, setIsOpenCategories] = useState(false);

  const toggleMenu = () => {
    setIsOpenCategories(!isOpenCaterories);
  };

  return (
    <div className="py-10 relative">
      <div className="w-10/12 mx-auto">
        <div className="mt-3 md:mt-6">
          <div className="flex items-center justify-between">
            <Link to="/">
              <h1 className="text-md md:text-2xl font-semibold text-green-700">
                Best Selling <span className="text-gray-700">Products</span>
              </h1>
            </Link>
            <div className="relative">
              {isOpenCaterories ? (
                <IoCloseOutline
                  onClick={toggleMenu}
                  className="text-md md:text-4xl font-semibold text-gray-700 cursor-pointer"
                />
              ) : (
                <CiFilter
                  onClick={toggleMenu}
                  className="text-md md:text-4xl font-semibold text-gray-700 cursor-pointer"
                />
              )}
            </div>
          </div>

          <button
            className="absolute md:left-22 top-[60%] md:top-[65%] transform -translate-y-1/2 bg-[#008236] text-white px-3 py-2 cursor-pointer rounded-full"
            onClick={handlePrev}
          >
            ◀
          </button>
          <button
            className="absolute md:right-24 top-[60%] md:top-[65%] transform -translate-y-1/2 bg-[#008236] text-white px-3 py-2 cursor-pointer rounded-full"
            onClick={handleNext}
          >
            ▶
          </button>

          <div
            className={`${
              isOpenCaterories ? "absolute z-10 right-40 top-[132px]" : "hidden"
            }`}
          >
            <div className="w-[250px] h-[870px] bg-base-200 p-6 shadow-2xl border-2 border-gray-300">
              {categories.map((categorie, index) => (
                <div key={index} className="mb-4">
                  <div
                    onClick={() => handleCategorySelect(categorie)}
                    className={`flex items-center gap-2 cursor-pointer p-2 rounded-md ${
                      categoriesName === categorie.categorie
                        ? "bg-green-200"
                        : ""
                    }`}
                  >
                    <img className="w-[18%]" src={categorie.icon} alt="" />
                    <h1 className="text-lg">{categorie.categorie}</h1>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-1 ml-9 md:ml-0 md:grid-cols-4 mt-8 gap-4 transition-all duration-500 ease-in-out">
            {visibleProducts.map((product, index) => (
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
    </div>
  );
}

export default BestSellingProducts;
