import React, {  useState } from 'react'
import Categories from './Components/Categories/Categories'
import Products from './Components/Products/Products'
import Hero from './Components/Hero/Hero';

export default function ShopPage() {
  const [categorie, setCategorie] = useState(null)
  const categorieName = (data) => {
   setCategorie(data.categorie)
  }

  return (
    <>
    <Hero/>
    <div className='w-10/12 mx-auto flex gap-12 py-10'>
    <Categories categorieName={categorieName}/>
    <Products categorie={categorie} />
    </div>
    
    </>
  )
}
