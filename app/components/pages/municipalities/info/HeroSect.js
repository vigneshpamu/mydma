import CommonNav from '@/app/components/common/CommonNav'
import SideMenu from '@/app/components/common/SideMenu'
import UpperNav from '@/app/components/common/UpperNav'
import React, { useState } from 'react'

const HeroSect = ({ dataArr }) => {
  const [visible, setVisible] = useState(false)
  return (
    <>
      <div className="relative h-full m-auto">
        <SideMenu visible={visible} setVisible={setVisible} />
        <div className="relative">
          <div className="absolute w-full h-full !bg-gradient-to-t !from-slate-900 !to-transparent opacity-85"></div>
          <img
            src={`${dataArr[0]?.img}`}
            className="w-full h-[400px] md:h-[600px]  object-cover pointer-events-none"
            alt="hero"
          />
        </div>

        {/* <CommonNav /> */}
        <UpperNav setVisible={setVisible} />
        <div className="max-w-[1100px] mx-auto">
          <div className="absolute flex flex-col top-36 md:top-60 ml-[20px] justify-between l eft-1/2 tran  sform -tr anslate-x-1/2 m-auto z-0">
            <div>
              <p className="text-white text-lg md:text-2xl font-semibold">
                Municipalities
              </p>
              <p className="text-white text-4xl md:text-7xl font-semibold leading-tight tracking-wide">
                {dataArr[0]?.title}
              </p>
            </div>
            {/* <div className="flex items-center gap-3">
            <img src="/images/home/elements/5.png" alt="" className="" />
            <p className="text-white text-2xl tracking-wider">Scroll</p>
          </div> */}
          </div>
        </div>
      </div>
    </>
  )
}

export default HeroSect
