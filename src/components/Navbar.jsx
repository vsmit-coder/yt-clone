import React from 'react'
import { AiOutlineMenu } from 'react-icons/ai'
import { CiSearch } from "react-icons/ci";
import { IoMdMic } from "react-icons/io";
import { RiVideoAddLine } from "react-icons/ri";
import { AiOutlineBell } from "react-icons/ai";
import Avatar from "@mui/material/Avatar";



import logo from '../assets/download.png'
import profile from '../assets/profile.jpg'


function Navbar() {
  return (
    <div className='flex fixed top-0 w-[100%]  justify-between px-6 py-2 bg-white'>
      <div className='flex items-center space-x-4 '>
        <AiOutlineMenu className='text-xl cursor-pointer' />
        <img src={logo} alt="" className='w-28 cursor-pointer' />

      </div>
      <div className='flex w-[35%] items-center'>
        <div className='w-[100%] px-3 py-2 border border-gray-200 rounded-l-full'>
          <input type="text" placeholder='Search' className='outline-none ' />
        </div>
        <button className='bg-gray-100 hover:bg-gray-200 px-4 py-2 border border-gray-200 rounded-r-full'>
          <CiSearch size={"24px"}/>
        </button>
        <IoMdMic size={"42px"} className='ml-3 border border-gray-200 rounded-full p-2 cursor-pointer hover:bg-gray-200 duration-200' />
      </div>
      <div className='flex space-x-5 items-center '>
          <RiVideoAddLine className='text-2xl' />
          <AiOutlineBell className='text-2xl' />
          <Avatar src={profile}/>
      </div>
    </div>
  )
}

export default Navbar
