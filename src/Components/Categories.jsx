import React from "react";
import { CiMobile4 } from "react-icons/ci";
import { HiOutlineComputerDesktop } from "react-icons/hi2";
import { BsSmartwatch } from "react-icons/bs";
import { CiCamera } from "react-icons/ci";
import { CiHeadphones } from "react-icons/ci";
import { MdOutlineVideogameAsset } from "react-icons/md";
import { FaArrowLeft } from "react-icons/fa";
import { FaArrowRight } from "react-icons/fa";
const Categories = () => {
  return (
    <>
      <div className="pl-[8rem] pt-11 mb-11">
        <div className="flex pt-11">
          <div className="styling-box w-6 h-11 bg-black rounded-md"></div>
          <p className="text-lg pl-4 pt-2 text-black font-bold">Cateogries</p>
        </div>
        <div className="flex">
          <h1 className="text-4xl font-bold pt-4">Browse By Cateogry</h1>
          <div className="flex pt-4 gap-3 ml-[58rem]">
            <div className="w-11 h-11 rounded-full bg-slate-400 flex justify-center items-center">
              <FaArrowLeft />
            </div>
            <div className="w-11 h-11 rounded-full bg-slate-400 flex justify-center items-center">
              <FaArrowRight />
            </div>
          </div>
        </div>

        <div className="flex mb-8 mt-[4rem] gap-[3rem]">
          <div className="w-[12rem] h-[11rem] roundes border border-gray-300 flex flex-col justify-center items-center">
            <CiMobile4 className="text-6xl" />
            <p className="text-2xl font-mediumbold pt-4">Phones</p>
          </div>

          <div className="w-[12rem] h-[11rem] roundes border border-gray-300 flex flex-col justify-center items-center">
            <HiOutlineComputerDesktop className="text-6xl" />
            <p className="text-2xl font-mediumbold pt-4">Computer</p>
          </div>

          <div className="w-[12rem] h-[11rem] roundes border border-gray-300  flex flex-col justify-center items-center">
            <BsSmartwatch className="text-6xl" />
            <p className="text-2xl font-mediumbold pt-4">SmartWatch</p>
          </div>

          <div className="w-[12rem] h-[11rem] roundes border border-black bg-black text-white flex flex-col justify-center items-center">
            <CiCamera className="text-6xl" />
            <p className="text-2xl font-mediumbold pt-4">Camera</p>
          </div>
          <div className="w-[12rem] h-[11rem] roundes border border-gray-300 flex flex-col justify-center items-center">
            <CiHeadphones className="text-6xl" />
            <p className="text-2xl font-mediumbold pt-4">HeadPhones</p>
          </div>
          <div className="w-[12rem] h-[11rem] roundes border border-gray-300 flex flex-col justify-center items-center">
            <MdOutlineVideogameAsset className="text-6xl" />
            <p className="text-2xl font-mediumbold pt-4">Gaming</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Categories;
