import React from 'react'
import {CgProfile} from 'react-icons/cg'
import {FcSettings} from 'react-icons/fc'
import {IoMdLogOut} from 'react-icons/io'


export const ProfileDropdown = () => {
  return (
    <div className='bg-gray-200 shadow-md w-[180px] absolute   right-2 md:right-[20px] top-[60px]'>
        <ul>
            <li className='flex justify-start items-center gap-2 p-2 border-b border-b-gray-600 hover:cursor-pointer hover:bg-primary'><CgProfile/><h1>Profile</h1></li>
            <li className='flex justify-start items-center gap-2 p-2 border-b border-b-gray-600 hover:cursor-pointer hover:bg-primary'><FcSettings/><h1>Settings</h1></li>
            <li className='flex justify-start items-center gap-2 p-2 border-b border-b-gray-600 hover:cursor-pointer hover:bg-primary'><IoMdLogOut/><h1>Logout</h1></li>
        </ul>
    </div>
  )
}
export default ProfileDropdown;
