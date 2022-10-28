import React from 'react'
import Home from '../components/sections/Home'
import TopNavBar from '../components/nav/TopNavBar'
import Services from '../components/sections/Services'
import Products from '../components/sections/Products'

function LandingPage() {
  return (
    <div className="">
      <TopNavBar/>
      <div className='mt-[70px]'>

      <Home/>
      <Services/>
      <Products/>
      </div>
    </div>
  )
}

export default LandingPage