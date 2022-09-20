import { useState } from 'react'

import { BrowserRouter as Router, Routes, Route  } from 'react-router-dom'
import Homepage from './Pages/HomePage'
import  Dashboard  from './Pages/Dashboard'
import Preview from './Pages/Preview'



function App() {
 

  return (
    <div className="">
      <Router>
        <Routes>
          <Route
          path='/'
          element ={<Homepage/>}
          />
          <Route
          path='dashboard'
          element ={<Dashboard/>}
          />
          <Route
          path='preview'
          element ={<Preview/>}
          />



        </Routes>
      </Router>
      
    </div>
  )
}

export default App
