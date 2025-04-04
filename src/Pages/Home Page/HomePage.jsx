import Hero from "./Components/Hero/Hero";
import Categories from "./Components/Categories/Categories";
import BestSellingProducts from "./Components/Best Selling Products/BestSellingProducts";
import Products from "./Components/Products/Products";
import { useState } from "react";

function HomePage() {

  const [categorie, setCategorie] = useState(null)
  const categorieName = (name) => {
    setCategorie(name.categorie);
    
  }
  return (
    <>
      <div className="bg-[#f5f7f8]">
        <Hero />
        <BestSellingProducts />
        <Categories categorieName={categorieName} />
        <Products categorie={categorie} />
      </div>
    </>
  );
}

export default HomePage;
