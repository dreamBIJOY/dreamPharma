import React, { useEffect, useState } from 'react'
import Categories from './Components/Categories/Categories'
import Products from './Components/Products/Products'
import Hero from './Components/Hero/Hero';

export default function ShopPage() {

  const [products, setProducts] = useState([]);
  useEffect(() => {
    fetch("/products.json")
    .then(res => res.json())
    .then(items => setProducts(items)
    )
  },[])



  const [categories, setCategories] = useState([])
  useEffect(() => {
    fetch("/categories.json")
    .then(res => res.json())
    .then(data => setCategories(data)
    )
  },[])

  return (
    <>
    <Hero/>
    <div className='w-10/12 mx-auto flex gap-12 py-10'>
    <Categories/>
    <Products/>
    </div>
    
    </>
  )
}
