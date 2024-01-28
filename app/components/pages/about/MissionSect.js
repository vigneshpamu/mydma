/* eslint-disable @next/next/no-img-element */
import React from 'react'

const MissionSect = () => {
  return (
    <>
      <div className="relative h-[700px] max-w-[1547px] m-auto">
        <div className="w-[1347px] 1xl:w-[95%] py-16 absolute left-1/2 transform -translate-x-1/2 m-auto bg-transparent">
          <div className="flex flex-col gap-5">
            <div className="bg-gray-100 w-[65%] 1xl:w-[60%] p-10 flex flex-col gap-3">
              <div className="flex flex-row gap-4 items-center">
                <p className="text-lg font-semibold">Mission</p>
                <div className="w-[120px] h-[4px] rounded-lg bg-customColor"></div>
              </div>
              <p className="text-3xl font-bold">
                Continuous development of all municipal processes and procedures
                and improvement of community services to achieve customer
                satisfaction.
              </p>
            </div>
            <div className="bg-gray-100 w-[65%] 1xl:w-[60%] p-10 flex flex-col gap-3">
              <div className="flex flex-row gap-4 items-center">
                <p className="text-lg font-semibold">Vision</p>
                <div className="w-[120px] h-[4px] rounded-lg bg-customColor"></div>
              </div>
              <p className="text-3xl font-bold">
                Achieving sustainable development by increasing efficiency and
                productivity in municipal work.
              </p>
            </div>
          </div>
          <div className="absolute top-[-470px] right-2">
            <img className="" src="/images/about/mission/info2.png" alt="" />
            <div className="absolute top-[6%] flex flex-col h-[90%] justify-between left-[10%] ">
              <div>
                <p className="text-8xl font-bold text-white">8</p>
                <p className="text-xl font-bold text-white">Muncipalities</p>
              </div>
              <div>
                <p className="text-8xl font-bold text-white">28</p>
                <p className="text-xl font-bold text-white">Industrial Areas</p>
              </div>
              <div>
                <p className="text-8xl font-bold text-white">6</p>
                <p className="text-xl font-bold text-white">Free Zones</p>
              </div>
              <div>
                <p className="text-8xl font-bold text-white">17</p>
                <p className="text-xl font-bold text-white">Museums</p>
              </div>
              <div>
                <p className="text-8xl font-bold text-white">
                  2590+<span className="text-2xl">km2</span>
                </p>
                <p className="text-xl font-bold text-white">
                  Area of the Emirates of Sharjah
                </p>
              </div>

              <div>
                <p className="text-8xl font-bold text-white">1400k+</p>
                <p className="text-xl font-bold text-white">Population</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default MissionSect
