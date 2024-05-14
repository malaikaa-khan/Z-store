import React from 'react'

const UpText = () => {
  return (
    <div>
       <div className="pl-[7rem]">
      <div className="flex pt-11">
        <div className="styling-box w-6 h-11 bg-blue-700 rounded-md"></div>
        <p className="text-lg pl-4 pt-2 text-blue-700 font-bold">Today's</p>
      </div>
      <div className="flex pt-9">
        <h1 className="text-4xl font-bold">Flash Sales</h1>
        <div className="flex pl-16 ">
          <div className="pl-11">
            <p className="text-lg font-medium">Days</p>
            <h2 className="text-4xl font-bold">03</h2>
          </div>
          <div className="circle-div pl-6 pt-9">
            <div>
              <div className="circle w-2 h-2 rounded-full bg-red-400"></div>
            </div>
            <div className="pt-2">
              <div className="circle w-2 h-2 rounded-full bg-red-400"></div>
            </div>
          </div>

          <div className="pl-8">
            <p className="text-lg font-medium">Hours</p>
            <h2 className="text-4xl font-bold">23</h2>
          </div>
          <div className="circle-div pl-6 pt-9">
        <div>
        <div className="circle w-2 h-2 rounded-full bg-red-400"></div>
        </div>
        <div className='pt-2'>
        <div className="circle w-2 h-2 rounded-full bg-red-400"></div>
        </div>
        </div>
          <div className="pl-8">
            <p className="text-lg font-medium">Minutes</p>
            <h2 className="text-4xl font-bold">19</h2>
          </div>
          <div className="circle-div pl-6 pt-9">
        <div>
        <div className="circle w-2 h-2 rounded-full bg-red-400"></div>
        </div>
        <div className='pt-2'>
        <div className="circle w-2 h-2 rounded-full bg-red-400"></div>
        </div>
        </div>
          <div className="pl-8">
            <p className="text-lg font-medium">Seconds</p>
            <h2 className="text-4xl font-bold">56</h2>
          </div>
          
        </div>
      </div>
    </div>
    </div>
  )
}

export default UpText
