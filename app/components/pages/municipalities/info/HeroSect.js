import CommonNav from '@/app/components/common/CommonNav'
import SideMenu from '@/app/components/common/SideMenu'
import React, { useState } from 'react'

const HeroSect = ({ paramsData }) => {
  const [visible, setVisible] = useState(false)
  return (
    <>
      <div className="relative h-full w-[100%] m-auto">
        <SideMenu visible={visible} setVisible={setVisible} />
        <img
          src="/images/municipalities/hero/hero.png"
          className="w-full h-[750px] object-cover pointer-events-none"
          alt="hero"
        />
        <CommonNav />
        <div className="absolute top-[290px] h-[350px] flex flex-col justify-between left-1/2 transform -translate-x-1/2 w-[1327px] m-auto z-10">
          <div>
            <p className="text-white text-2xl font-semibold">Municipalities</p>
            <p className="text-white text-7xl w-[50%] font-semibold leading-tight tracking-wide">
              {paramsData}
            </p>
          </div>
          <div className="flex items-center gap-3">
            <img src="/images/home/elements/5.png" alt="" className="" />
            <p className="text-white text-2xl tracking-wider">Scroll</p>
          </div>
        </div>
      </div>
    </>
  )
}

export default HeroSect
