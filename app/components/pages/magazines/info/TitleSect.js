import StickyNav from '@/app/components/common/StickyNav'
import React from 'react'
import { MdWhatsapp } from 'react-icons/md'

const TitleSect = () => {
  return (
    <>
      <div className="relative h-[506px] 2md:h-[450px] md:h-[380px] xsm:h-[320px]   w-[100%] m-auto">
        {/* <CommonNav /> */}
        <StickyNav start={0} end={0} />
        {/* <img
          src="/images/magazine/hero/hero.png"
          className="w-full h-[750px] md:h-[650px] object-cover pointer-events-none"
          alt="hero"
        /> */}
        <div className="flex flex-col gap-3 items-center justify-center w-[1347px] 1xl:w-[90%] absolute top-[280px] 2md:top-[45%] md:top-[50%] xsm:top-[40%] left-1/2 transform -translate-x-1/2 m-auto">
          <p className="text-2xl font-bold">Magazines</p>
          <p className="text-5xl font-bold text-center w-[50%] 1xl:w-[70%] xsm:text-2xl mxsm:w-[90%] md:text-3xl md:w-[80%]">
            DMA Magazine 23
          </p>
          <div className="flex flex-row  mxsm:flex-wrap mxsm:justify-center mxsm:gap-5  items-center justify-between w-[500px] sm:w-[100%]  text-black ">
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
          </div>
        </div>
      </div>
    </>
  )
}

export default TitleSect
