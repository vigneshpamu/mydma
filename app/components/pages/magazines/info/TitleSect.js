import StickyNav from '@/app/components/common/StickyNav'
import React from 'react'
import { MdWhatsapp } from 'react-icons/md'

const TitleSect = () => {
  return (
    <>
      <StickyNav start={0} end={0} />
      <div className="relative max-w-[1100px] h-full pb-10  m-auto">
        {/* <CommonNav /> */}
        <img
          src="/images/magazine/hero/hero.png"
          className="w-full h-[450px] sm:h-[500px]  object-cover pointer-events-none"
          alt="hero"
        />
        <div className="flex flex-col gap-3 items-center justify-center mt-[-300px]">
          <p className="text-xl sm:text-3xl font-bold">Magazines</p>
          <p className="text-2xl  sm:text-5xl font-bold text-center  ">
            DMA Magazine 23
          </p>
          {/* <div className="flex flex-row  mxsm:flex-wrap mxsm:justify-center mxsm:gap-5  items-center justify-between w-[500px] sm:w-[100%]  text-black ">
            <p>
              Author: <span className="font-bold">DMCWebAdmin</span>
            </p>
            <p>
              Published on: <span className="font-bold">12-01-2024</span>
            </p>
            <div className="flex flex-row gap-2 items-center justify-center">
              <p>Share: </p>
              <div>
                <p className="mt-1">
                  <MdWhatsapp />
                </p>
              </div>
            </div>
          </div> */}
        </div>
      </div>
    </>
  )
}

export default TitleSect
