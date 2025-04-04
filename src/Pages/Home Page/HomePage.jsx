import Hero from "./Components/Hero/Hero";
import Categories from "./Components/Categories/Categories";
import BestSellingProducts from "./Components/Best Selling Products/BestSellingProducts";
import Products from "./Components/Products/Products";

import NewArrivalProducts from "./Components/New Arrival Products/NewArrivalProducts";

function HomePage() {

  

  return (
    <>
      <div className="bg-[#f5f7f8]">
        <Hero />
        <NewArrivalProducts/>
        <BestSellingProducts />
        <Categories  />
        {/* <Products categorie={categorie} /> */}
      </div>
    </>
  );
}

export default HomePage;
