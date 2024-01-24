/* eslint-disable @next/next/no-img-element */
import React from 'react'

const MissionSect = () => {
  return (
    <>
      <div className="relative h-[72vh] max-w-[1547px] m-auto">
        <div className="w-[1347px] py-16 absolute left-1/2 transform -translate-x-1/2 m-auto bg-transparent">
          <div className="flex flex-col gap-5">
            <div className="bg-gray-100 w-[65%] p-10 flex flex-col gap-3">
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
            <div className="bg-gray-100 w-[65%] p-10 flex flex-col gap-3">
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
          <img
            className="absolute top-[-470px] right-2"
            src="/images/about/mission/info.png"
            alt=""
          />
        </div>
      </div>
    </>
  )
}

export default MissionSect
