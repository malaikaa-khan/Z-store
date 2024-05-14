import React, { useState } from "react";
import { IoEyeOutline } from "react-icons/io5";
import { CiHeart } from "react-icons/ci";
import star from './Images/Five star.png'
const Carts = () => {
  const [product, setProduct] = useState([
    {
      url: "https://i.ibb.co/jV1bx8s/g92-2-500x500-1.png",
      name: "HAVIT HV-G92 GamepadoffShoes",
      off: "-40%",
      seller: "AMZ Seller Ghz",
      price: 120,
    },
    {
      url: "https://i.ibb.co/HnXKFcQ/ak-900-01-500x500-1.png%22",
      name: "AK-900 Wired Keyboard",
      off: "-35%",
      seller: "Watch Ltd Siyana",
      price: 25,
    },
    {
      url: 'https://i.ibb.co/jwXKFmp/g27cq4-500x500-1.png" ',
      name: "IPS LCD Gaming Monitor",
      off: "-30%",
      seller: "Delhi Laptops",
      price: 50,
    },

    {
      url: "https://i.ibb.co/gDD30yM/sam-moghadam-khamseh-kvmds-Tr-GOBM-unsplash-1.png",
      name: "S-Series Comfort Chair ",
      off: "-25%",
      seller: "Camron LTD",
      price: 40,
    },
    /* 
    {
      url: 'https://i.ibb.co/gDD30yM/sam-moghadam-khamseh-kvmds-Tr-GOBM-unsplash-1.png',
      name: 'Watch Pink',
      off: '30%',
      seller: 'Watch Ltd',
      price: 2000
    },
    {
      url: 'https://i.ibb.co/jV1bx8s/g92-2-500x500-1.png',
      name: 'Cup red Color',
      off: '-40%',
      seller: 'ABS Ltd',
      price: 100
    },*/
  ]);

  return (
    <>
       <div className="flex pl-[4rem] pt-11">
      {product.map((productItem, productIndex) => {
        return (
          <div>
            <div className="box w-[20rem] h-[17rem] rounded bg-[#F5F5F5] ml-11">
              <div className="flex justify-between pt-5">
                <div className="off w-[4rem] h-7 bg-[#000AFF] text-white text-lg ml-3 rounded text-center">
                  {productItem.off}
                </div>
                <div className="flex flex-col pr-5">
                  <div className="w-7 h-7 rounded-full bg-white">
                    <CiHeart className="text-2xl mt-[2.1px] ml-[1.22px]" />
                  </div>

                  <div className="w-8 h-8 rounded-full bg-white mt-4">
                    <IoEyeOutline className="text-2xl mt-[4.1px] ml-[4.22px]" />
                  </div>
                </div>
              </div>

              <img src={productItem.url} alt="" className="pl-[4.6rem]" />
            </div>
            <div className="pl-[3.33rem] pt-7">
            <p className="text-lg font-semibold">{productItem.name}</p>
            <div className="flex">
            <p className="text-[#000AFF] font-medium">${productItem.price}</p> <span className="pl-5 line-through">$400</span>
            </div>
           
             <div className="flex">
             <img src={star} alt=""/>
             <p className="pl-2">(89)</p>
             
             </div>
            
            </div>
            
          </div>
        );
      })}
     
    </div>
        <button className="text-xl rounded bg-black text-white px-[5rem] py-4 text-center mt-9 ml-[40rem] mb-9">View All Products</button>
        <hr/>
    </>
      );
};

export default Carts;
