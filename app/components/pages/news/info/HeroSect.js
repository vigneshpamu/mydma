import React from 'react'
import { MdWhatsapp } from 'react-icons/md'

const HeroSect = () => {
  return (
    <>
      <div className="relative h-[1000px]">
        <div className="absolute w-[1347px] top-48 left-1/2 transform -translate-x-1/2 m-auto">
          <img
            src="/images/events/info/hero/hero.png"
            className="w-[1347px] object-cover"
            alt=""
          />
        </div>
        <div className="absolute w-[1147px] flex flex-col gap-10 left-1/2 transform -translate-x-1/2  p-7 bottom-7 bg-[#036C73]">
          <div>
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
      </div>
    </>
  )
}

export default HeroSect
