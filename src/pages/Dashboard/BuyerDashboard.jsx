import React from 'react'
import { Outlet, Link } from 'react-router-dom'
import Logo from '../../assets/logob.png'
import avatar1 from '../../assets/avatar1.jpg'
import { FaBars } from 'react-icons/fa'
import { FiLogOut } from 'react-icons/fi'

import { MdClose } from 'react-icons/md'
import { useState } from 'react'

function BuyerDashboard() {
  const [professionalServices, setProfessionalServices] = useState(false)
  return (
    <div className=" h-[100vh] ">
      {/* Nav bar here */}
      <div className=" flex flex-row p-2 justify-between shadow-md  ">
        <div className="flex justify-center items-center">
          <div className="mx-3 md: ">
            <FaBars size={30} />
          </div>
          <img src={Logo} alt="logo" className="h-[80px] w-[120px]" />
        </div>
        <div className="flex justify-center items-center pr-8  gap-4">
          <h1>
            {' '}
            <img
              src={avatar1}
              alt="avatar"
              className=" h-[50px] w-[60px] "
            />{' '}
          </h1>
          <h1>
            <FiLogOut size={30} />
          </h1>
        </div>
      </div>
      {/*  navbar ends here */}
      {/* dashboard starts here */}
      <div className=" flex ">
        <div className="flex flex-col gap-1 bg-primary text-white text-[30px] h-[100vh] w-[350px] ">
          <Link to="/dashboard/home" className="p-2 hover:bg-tertiary">
            Home
          </Link>

          <Link
            to="design-services"
            className="p-2 hover:bg-tertiary"
            onClick={() => {
              setProfessionalServices(!professionalServices)
            }}
          >
            Professional Service
          </Link>
          <ul
            className={
              professionalServices ? 'flex flex-col text-[25px]' : 'hidden'
            }
          >
            <li className="pl-7 hover:bg-tertiary">Project Managers</li>
            <li className="pl-7 hover:bg-tertiary">Engineering</li>
            <li className="pl-7 hover:bg-tertiary">Quantity Survayers</li>
            <li className="pl-7 hover:bg-tertiary">Building Contractors</li>
            <li className="pl-7 hover:bg-tertiary">SubContractors</li>
          </ul>
          <Link to="/dashboard/suppliers" className="p-2 hover:bg-tertiary">
            Supplier
          </Link>
          <Link to="post-job" className="p-2 hover:bg-tertiary">
            Post Job/ Requirement
          </Link>
          <Link to="hardware" className="p-2 hover:bg-tertiary">
            Hardware
          </Link>
        </div>

        {/* main content area */}
        <div>
          <Outlet />
        </div>
      </div>
    </div>
  )
}

export default BuyerDashboard
