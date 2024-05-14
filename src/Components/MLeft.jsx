import React from 'react'
import { BsChevronRight } from "react-icons/bs";
const MLeft = () => {
  return (
    <>
        <div className='flex flex-col pl-[7rem] pt-[2rem] w-[24rem] h-[37.1rem] text-xl'>
      <a href="/" className='pt-[1.99rem] flex'>Women's Fashion <BsChevronRight className='mt-[5px] ml-11 text-lg'/></a>
      <a href="/" className='pt-[1.88rem] flex'>Man's Fashion <BsChevronRight className='mt-[5px] ml-[4.5rem] text-lg'/></a>
      <a href="/" className='pt-[1.88rem]'>Electronics</a>
      <a href="/" className='pt-[1.88rem]'>Home & Lifestyle</a>
      <a href="/" className='pt-[1.88rem]'>Medicine</a>
      <a href="/" className='pt-[1.88rem]'>Sports & Outdoors</a>
      <a href="/" className='pt-[1.88rem]'>Baby's & Toys</a>
      <a href="/" className='pt-[1.88rem]'>Grociers & Pets</a>
      <a href="/" className='pt-[1.88rem]'>Health & Beauty</a>
    </div>
    <div className="verticle-line w-[1.5px] h-[586px] bg-gray-200">

    </div>
    </>

    

  )
}

export default MLeft
