import React from 'react'
import { FiSearch } from "react-icons/fi";
import { CiHeart } from "react-icons/ci";
import { IoCartOutline } from "react-icons/io5";
const NavBar = () => {
  return (
    <>
    <div className="nav-bar flex h-[6rem] items-center gap-[6rem] pl-[8rem]">
    <div className="logo">
        <h1 className='text-2xl font-bold'>Z-Store</h1>
    </div>
    <div className="links flex ml-[11rem] gap-9 text-lg font-medium">
        <a href="/">Home</a>
        <a href="/">Contact</a>
        <a href="/">About</a>
        <a href="/">Sign Up</a>
    </div>
    <div className="icons flex relative ml-[12rem] h-[5rem] items-center">
        <input type="text" placeholder='What are you looking for?' className='w-[16rem] h-[3rem] rounded px-3 py-3 border'/> <FiSearch className='absolute top-7 right-[6rem] text-2xl'/>
        <div className="side flex pl-4">
        <CiHeart className='pl-2 text-4xl'/>
        <IoCartOutline className='pl-3 text-4xl'/>
        </div>
      

    </div>
    </div>
        <hr/>
    </>
  )
}

export default NavBar
