import React from "react";

const MonthSell = () => {
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
            <button className="text-lg bg-black rounded px-11 py-2 text-white ml-[55rem]">View All</button>
        </div>
        <div className="h-[25rem] border border-red-400 mb-8"></div>
      </div>
    </>
  );
};

export default MonthSell;
