import { useState } from 'react';
import {Link, useNavigate} from 'react-router-dom'
import DropdownComponent from "./DropdownComponent";
//importin nav links
import { navItems } from "./NavbarItems";
//icons
import {IoMdArrowDropdown} from 'react-icons/io'
import {GiHamburgerMenu} from 'react-icons/gi'
import {MdClose} from 'react-icons/md'
 
 function NavbarComponent(){
    const Navigate= useNavigate();
    const [dropdown, setDropdown]=useState(false)
    const[mobilemenu, setmobilemenu]=useState(false)
    const[mobiledropdown, setMobiledropdown]=useState(false)
    return(
        <div className='fixed top-0 left-0 right-0  z-10'>
        <div  className="bg-gray-100 shadow-md text-gray-900  h-[60px] px-6 flex  justify-between items-center"> 
        <div className="">
            <h1 className='font-bold text-2xl text-primary'>DevOps</h1>
        </div>
        {/* medium and large  devices nav links */}
        <div className=''>
            {/* medium devices links */}
            <ul className='hidden md:flex  md:flex-row md:justify-center Md:items-center   gap-8 mx-4'>
                {
                    navItems.map(item=>{
                        // positioning the dropdeon menu
                        if(item.title==='Dropdown'){
                            return(
                                <li key={item.id}
                                className="hover:bg-primary  hover:cursor-pointer hover:ease-out duration-300 p-1 rounded-sm"
                                onMouseEnter={()=>{setDropdown(!dropdown)}} onMouseLeave={()=>{setDropdown(!dropdown)}}
                                >
                                    <div className='flex flex-row gap-1 justify-between items-center'>
                                        <h1>{item.title}</h1>
                                        <span className='pt-2'><IoMdArrowDropdown size={27} /></span>
                                    </div>
                                    
                                   {dropdown && <DropdownComponent/>}

                                </li>
                            )
                        }


                        return(
                            
                            <li key={item.id}
                            className='hover:bg-primary hover:cursor-pointer hover:ease-out duration-300 h-full p-2 rounded-sm'
                            onClick={()=>{Navigate(item.path)}}
                            >
                                {item.title}
                            </li>
                            
                        )
                    })
                }
                <button className="bg-primary px-3 py-0 flex items-center rounded-md hover:bg-slate-400 hover:text-white hover:scale-110 hover:ease-out duration-150">sign up</button>
                
            </ul>


             {/* mobile devices nav */}
        <div className='block  md:hidden '>
            <div>
                <span onClick={()=>{setmobilemenu(!mobilemenu)}}>{!mobilemenu ? <GiHamburgerMenu size={30}/> : <MdClose size={30}/>}</span>
            </div>

            <div className={mobilemenu? 'fixed left-0 m-0 top-0 w-[65%] h-full z-10 bg-gray-300 ease-in-out duration-500' : '  fixed left-[-100%]' }>
                    <h1 className='font-bold px-2 text-2xl text-green-600'>DevOps</h1>
                    <ul className=' gap-10 '>
                {
                    navItems.map(item=>{
                        // positioning the dropdeon menu
                        if(item.title==='Dropdown'){
                            return(
                                <li key={item.id}
                                className=" h-full hover:cursor-pointer hover:ease-out duration-300 p-2 rounded-sm"
                                
                                >
                                    <div className='flex flex-row gap-1 justify-between items-center hover:bg-primary'
                                    onClick={()=>{setMobiledropdown(!mobiledropdown)}}
                                    >
                                        <h1 >{item.title}</h1>
                                        <span className='pt-2'><IoMdArrowDropdown size={27} /></span>
                                    </div>
                                    <div className={mobiledropdown? 'block m-0' : 'hidden'}>
                                    <ul className='bg-gray-200 p-2 flex flex-col '>
                                        <li  className='hover:bg-primary p-1 '>Drop item 1</li>
                                        <li className='hover:bg-primary p-1 '>Drop item 2</li>
                                        <li className='hover:bg-primary p-1 '>Drop item 3</li>
                                    </ul>

                                    </div>

                                    
                                  

                                </li>
                            )
                        }


                        return(
                            <li key={item.id}
                            className='hover:bg-primary hover:cursor-pointer hover:ease-out duration-300 h-full p-2 rounded-sm'
                            >
                                <Link to={item.path}>{item.title}</Link>
                            </li>
                        )
                    })
                }
                <h1 className="bg-primary px-3 py-1 m-5 text-center w-[50%]   rounded-md hover:bg-slate-400 hover:text-white hover:scale-110 hover:ease-out duration-150">sign up</h1>
                
            </ul>

                </div>
            
                
 
 
        </div>
        </div>

                                
        </div>
          
        </div>
    )
}
export default NavbarComponent;
