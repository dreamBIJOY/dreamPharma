import React from 'react'
import TopSection from './Components/TopSection'
import Navbar from './Components/Navbar'

function Header() {
  return (
    <>
    <TopSection/>
    <div className='sticky top-0 z-10 bg-white'>
    <Navbar/>
    </div>
    </>
  )
}

export default Header