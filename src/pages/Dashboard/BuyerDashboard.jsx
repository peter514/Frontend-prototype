import React from 'react'
import { Outlet } from 'react-router-dom'
import Home from './Home'

function BuyerDashboard() {
  return (
    <div className='flex  h-[100vh] '>
      {/* Nav bar here */}

      {/*  navbar starts here */}
      <div className=' '>
        side bar
      </div>


      {/* main content area */}
      <div>        
        <Outlet/>
      </div>

    </div>

  )
}

export default BuyerDashboard