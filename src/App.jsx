import { useState } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import reactLogo from './assets/react.svg'
import BuyerDashboard from './pages/Dashboard/BuyerDashboard'
import Home from './pages/Dashboard/Home'
import Supplier from './pages/Dashboard/Supplier'
import LandingPage from './pages/LandingPage'
import LoginPage from './pages/LoginPage'
import RegisterBuyer from './pages/RegisterBuyer'
import RegisterPage from './pages/RegisterPage'
import RegisterSeller from './pages/RegisterSeller'


function App() {
  

  return (
    // routes 
    <div >
      <Router>
      <Routes>
        <Route  
        path="/"
        element={<LandingPage/>}
        />
        <Route  
        path="login-page"
        element={<LoginPage/>}
        />
        <Route  
        path="register-page"
        element={<RegisterPage/>}
        />
         <Route  
        path="register-buyer"
        element={<RegisterBuyer/>}
        />
         <Route  
        path="register-seller"
        element={<RegisterSeller/>}
        />

        {/* dashboard Routes */}
        <Route path="dashboard" element={<BuyerDashboard/>} >
          <Route
          path="home"
          index element ={<Home/>}
          />
           <Route  
        path="suppliers"
        element={<Supplier/>}
        />

        </Route>



      </Routes>


      </Router>

      
    </div>
  )
}

export default App
