import React from 'react'
import { MdWhatsapp } from 'react-icons/md'

const HeroSect = () => {
  return (
    <>
      {/* <div className="relative h-[1000px]">
        <div className="absolute w-[1347px] top-48 left-1/2 transform -translate-x-1/2 m-auto">
          <img
            src="/images/events/info/hero/hero.png"
            className="w-[1347px] object-cover"
            alt=""
          />
        </div>
        <div className="absolute w-[1147px] flex flex-col gap-10 left-1/2 transform -translate-x-1/2  p-7 bottom-7 bg-[#036C73]">
          <div className="flex flex-row gap-10">
            <div className="bg-white p-2 px-6 rounded-lg flex flex-col items-center justify-center ">
              <p className="text-4xl font-semibold text-customColor">03</p>
              <p className="text-xl text-customColor">JAN</p>
            </div>
            <p className="text-4xl font-semibold text-white w-[70%]">
              Quis autem vel eum iure reprehenderit qui in ea voluptate.
            </p>
          </div>
          <div className="flex flex-row w-[70%] text-white justify-between">
            <div className="flex flex-row gap-10">
              <p>
                Author: <span className="font-bold">DMCWebAdmin</span>
              </p>
              <p>
                Published on: <span className="font-bold">12-01-2024</span>
              </p>
            </div>
            <div className="flex flex-row gap-2 items-center justify-center">
              <p>Share: </p>
              <div>
                <p className="mt-1">
                  <MdWhatsapp />
                </p>
              </div>
            </div>
          </div>
        </div>
      </div> */}
      <div className="mt-24 max-w-[1100px] mx-auto flex items-center justify-center ">
        <div className="  ">
          <img
            src="/images/events/info/hero/hero.png"
            className="w-full  object-cover"
            alt=""
          />
        </div>
      </div>
    </>
  )
}

export default HeroSect
