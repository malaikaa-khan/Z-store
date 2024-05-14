import React from 'react'
import img from './Images/Frame 694.png'
const Music = () => {
  return (
    <>
    <div className='flex w-[87rem] h-[30rem] bg-black ml-[7rem] text-white mb-8 mt-6'>
       <div className="text-side w-full pt-[5rem] pl-[6rem]">
        <p className='text-lg font-semibold text-[#00FF66]'>Categories</p>
        <h1 className='text-6xl font-semibold pt-7 flex flex-col'>Enhance Your <span className='pt-4 pb-6'>Music Experience</span></h1>
        <div className="circle-section flex gap-7">
        <div className='w-[3.43rem] h-[3.43rem] rounded-full bg-white text-black flex flex-col justify-center items-center '>
            <p className='text-[17px] font-bold'>23</p>
            <p className='text-[10px]'>Hours</p>
        </div>
        <div className='w-[3.43rem] h-[3.43rem] rounded-full bg-white text-black flex flex-col justify-center items-center'>
        <p className='text-[17px] font-bold'>5</p>
            <p className='text-[10px]'>Days</p>
        </div>
        <div className='w-[3.43rem] h-[3.43rem] rounded-full bg-white text-black flex flex-col justify-center items-center'>
        <p className='text-[17px] font-bold'>59</p>
            <p className='text-[10px]'>Minutes</p>
        </div>
        <div className='w-[3.43rem] h-[3.43rem] rounded-full bg-white text-black flex flex-col justify-center items-center'>
        <p className='text-[17px] font-bold'>35</p>
            <p className='text-[10px]'>Seconds</p>
        </div>
        </div>
      <button className='bg-[#00FF66] text-lg px-9 py-2 rounded mt-8'>Buy Now</button>
       </div>
       <div className="img-side w-full pt-11">
         <img src={img} alt=""/>
       </div>
    </div>
    </>
  )
}

export default Music
