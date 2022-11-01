import ProfileDropdown from "../Components/NaviagtionBar/ProfileDropdown"
// icons imports
import {BsCart4} from 'react-icons/bs'
import {IoMdArrowDropdown} from 'react-icons/io'
import {RiWallet3Fill} from 'react-icons/ri'
import {FaProductHunt, FaMoneyCheck} from 'react-icons/fa'
import {MdOutlineMiscellaneousServices} from 'react-icons/md'
import {GiHamburgerMenu} from 'react-icons/gi'
import {AiOutlineHome} from 'react-icons/ai'
import { useState } from "react"
import profile from '../images/p3.jpeg';
function Dashboard() {
  const [sidenav,setSidenav]=useState(false)
   const[profiledropdown, setProfiledropdown] =useState(false);
  return <div>
    {/* dashboard nav */}
    <div >
        <div className='bg-gray-100 shadow-md text-gray-900  h-[60px] flex flex-row justify-between items-center py-4 px-6'>
            <div className='flex flex-row gap-4 justify-center items-center'>
              <GiHamburgerMenu size={35} onClick={()=>{setSidenav(!sidenav)}}/>
              <h1 className='font-bold text-2xl text-primary'>DevOps</h1>
            </div>
            <div className='flex flex-row gap-2 items-center  '  >
                <h1 className='hidden md:flex md:flex-row gap-1 h-full items-center hover:cursor-pointer' onMouseEnter={()=>{setProfiledropdown(!profiledropdown)}} onMouseLeave={()=>{setProfiledropdown(!profiledropdown)}}
                ><i>Peterkgachora1@gmail.com</i> <IoMdArrowDropdown/>  </h1>
                <img src={profile} alt=" profile pic" className='hover:cursor-pointer w-[50px] h-[50px] rounded-full'/>
                 { profiledropdown && <ProfileDropdown/>}
            </div>
        </div>
       

    </div>
    {/* end of nav bar */}
       
        {/* dashoard start */}
        <div className='flex ' >
            <div className={sidenav? ' md:basis-1/4 bg-gray-300 min-h-[500px] ease-out duration-500' : ' absolute left-[-100%]'} >
                <ul className='flex flex-col pl-px'>
       
                    <li className='flex justify-start gap-5 items-center text-2xl border-b hover:bg-primary hover:cursor-pointer  py-3'><AiOutlineHome size={30}/><h1>Home</h1></li>
                    <li className='flex justify-start gap-5 items-center text-2xl border-b hover:bg-primary hover:cursor-pointer  py-3'><FaProductHunt size={30}/><h1>Products</h1> </li>
                    <li className='flex justify-start gap-5 items-center text-2xl border-b hover:bg-primary hover:cursor-pointer  py-3'><FaMoneyCheck size={30}/><h1>Financing</h1></li>
                    <li className='flex justify-start gap-5 items-center text-2xl border-b hover:bg-primary hover:cursor-pointer  py-3'><MdOutlineMiscellaneousServices size={30}/><h1>services</h1></li>
                    <li className='flex justify-start gap-5 items-center text-2xl border-b hover:bg-primary hover:cursor-pointer  py-3'><BsCart4 size={30}/><h1>Orders</h1></li>
                    <li className='flex justify-start gap-5 items-center text-2xl border-b hover:bg-primary hover:cursor-pointer  py-3'><RiWallet3Fill size={30}/><h1>Wallet</h1></li>
                    
                </ul> 


       
            </div>
            <div className={sidenav? 'block md:basis-3/4 bg-whit' : 'w-full'}>

              Main content area
              
            </div>
        </div>
    </div>
}
export default Dashboard
