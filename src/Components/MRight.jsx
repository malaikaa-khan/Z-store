import React from 'react'
import img from './Images/Apple.png'
import img1 from './Images/iphone.png'
import { GoArrowRight } from "react-icons/go";
const MRight = () => {
  return (
    <div className='w-[78rem] h-[37.1rem]'>
      <div className="main-box w-[65rem] h-[27rem] bg-black ml-11 mt-[5rem] flex">
        <div className="text-side text-white w-[33rem]  pt-[5rem] pl-[5rem]">
          <div className="up-text flex">
          <img src={img} alt="" />
          <p className='text-xl pt-3 pl-5'>iPhone 14 Series</p>
          </div>
           <h1 className='text-6xl pt-8 pb-5'>Up to 10%</h1>
           <h1  className='text-6xl'>off Voucher</h1>
           <button className='pt-10 pl-2 flex underline underline-offset-8'><a href="/">Shop Now</a>
           <GoArrowRight className='pl-2 text-3xl'/>
           </button>

        </div>
        <div className="image-side w-[32rem] pt-[4rem]">
        <img src={img1} alt="" />
        </div>
      </div>
    </div>
  )
}

export default MRight
