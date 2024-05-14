import React, { useState } from 'react'
import { FaArrowLeft } from "react-icons/fa";
import { FaArrowRight } from "react-icons/fa";
import { IoEyeOutline } from "react-icons/io5";
import { CiHeart } from "react-icons/ci";
import star from "./Images/Five star.png";
const Product = () => {
    const [product, setProduct] = useState([
        {
          url: "https://i.ibb.co/3zrcHMF/Frame-604.png",
          name: "Beddy Dog Dry Food",
          price:300,
        },
        {
          url: "https://i.ibb.co/pjs66vc/Frame-604-1.png",
          name: "Canon DSLR Camera",
          price:200,
        },
        {
          url: "https://i.ibb.co/F49jVTt/ideapad-gaming-3i-01-500x500-1.png",
          name: "ASUS FHD Gaming Laptop",
          price: 250,
        },
        {
          url: "https://i.ibb.co/Qd4JJPf/curology-j7p-KVQr-TUs-M-unsplash-1.png ",
          name: "Curology Product Sets",
          price: 500,
        },
      ]);
  return (
   <>
   <div className="pl-[7rem]">
   <div className="flex pt-11">
          <div className="styling-box w-6 h-11 bg-blue-700 rounded-md"></div>
          <p className="text-lg pl-4 pt-2 text-blue-700 font-bold">
            Our Products
          </p>
        </div>
        <div className="flex">
          <h1 className="text-4xl font-bold pt-4">Explore Our Products</h1>
          <div className="flex pt-4 gap-3 ml-[55rem]">
            <div className="w-11 h-11 rounded-full bg-slate-400 flex justify-center items-center">
              <FaArrowLeft />
            </div>
            <div className="w-11 h-11 rounded-full bg-slate-400 flex justify-center items-center">
              <FaArrowRight />
            </div>
          </div>
        </div>
   </div>


   <div className="flex pt-11 pl-[4rem]">
          {product.map((item, id) => {
            return (
              <div>
                <div className="box w-[19rem] h-[19rem] rounded bg-[#F5F5F5] ml-[3rem]">
                  <div className="flex flex-col pt-4 pl-[16rem]">
                    <div className="w-7 h-7 rounded-full bg-white">
                      <CiHeart className="text-2xl mt-[2.1px] ml-[1.22px]" />
                    </div>

                    <div className="w-8 h-8 rounded-full bg-white mt-3">
                      <IoEyeOutline className="text-2xl mt-[4.1px] ml-[4.22px]" />
                    </div>
                  </div>
                  <img className="pl-[3.55rem]" src={item.url} alt="" />
                </div>
                
                <div className="pl-[3.33rem] pt-7 mb-11">
                <p className="text-lg font-semibold">{item.name}</p>
                <div className="flex">
                  <p className="text-[#000AFF] font-medium">
                    ${item.price}
                  </p>{" "}
                  <div className="flex pl-3">
                  <img src={star} alt="" />
                  <p className="pl-2">(89)</p>
                </div>
                </div>

               
              </div>
              </div>
            );
          })}
        </div>
   </>
  )
}

export default Product
