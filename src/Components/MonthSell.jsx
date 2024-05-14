import React, { useState } from "react";
import { IoEyeOutline } from "react-icons/io5";
import { CiHeart } from "react-icons/ci";
import star from "./Images/Five star.png";

const MonthSell = () => {
  const [product, setProduct] = useState([
    {
      url: "https://i.ibb.co/5kpRrzF/Frame-605.png",
      name: "The North Coat",
      price: 120,
    },
    {
      url: "https://i.ibb.co/VBsPn61/547953-9-C2-ST-8746-001-082-0000-Light-Gucci-Savoy-medium-duffle-bag-1.png",
      name: "Gucci Deffl Bag",
      price: 120,
    },
    {
      url: "https://i.ibb.co/yd2Zr4N/Frame-610.png",
      name: "RGB Liquid CPU Cooler",
      off: "-35%",
      seller: "Watch Ltd Siyana",
      price: 25,
    },
    {
      url: "https://i.ibb.co/h2s0ZK1/sam-moghadam-khamseh-L-7-MQs-Hl-a-U-unsplash-1.png ",
      name: "Small Book Shelf",
      off: "-30%",
      seller: "Delhi Laptops",
      price: 50,
    },
  ]);
  return (
    <>
      <div className="pl-[7rem]">
        <div className="flex pt-11">
          <div className="styling-box w-6 h-11 bg-blue-700 rounded-md"></div>
          <p className="text-lg pl-4 pt-2 text-blue-700 font-bold">
            This Month
          </p>
        </div>
        <div className="flex pt-8">
          <p className="text-4xl font-bold">Best Selling Products</p>
          <button className="text-lg bg-black rounded px-11 py-2 text-white ml-[55rem]">
            View All
          </button>
        </div>
       
      </div>
      <div className="flex pt-11 pl-[4rem]">
          {product.map((item, id) => {
            return (
              <div>
                <div className="box w-[19rem] h-[17rem] rounded bg-[#F5F5F5] ml-[3rem]">
                  <div className="flex flex-col pt-4 pl-[16rem]">
                    <div className="w-7 h-7 rounded-full bg-white">
                      <CiHeart className="text-2xl mt-[2.1px] ml-[1.22px]" />
                    </div>

                    <div className="w-8 h-8 rounded-full bg-white mt-3">
                      <IoEyeOutline className="text-2xl mt-[4.1px] ml-[4.22px]" />
                    </div>
                  </div>
                  <img className="pl-[4rem]" src={item.url} alt="" />
                </div>
                
                <div className="pl-[3.33rem] pt-7 mb-11">
                <p className="text-lg font-semibold">{item.name}</p>
                <div className="flex">
                  <p className="text-[#000AFF] font-medium">
                    ${item.price}
                  </p>{" "}
                  <span className="pl-5 line-through">$400</span>
                </div>

                <div className="flex">
                  <img src={star} alt="" />
                  <p className="pl-2">(89)</p>
                </div>
              </div>
              </div>
            );
          })}
        </div>
    </>
  );
};

export default MonthSell;
