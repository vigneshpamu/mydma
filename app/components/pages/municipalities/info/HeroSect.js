import CommonNav from '@/app/components/common/CommonNav'
import SideMenu from '@/app/components/common/SideMenu'
import UpperNav from '@/app/components/common/UpperNav'
import React, { useState } from 'react'

const HeroSect = ({ dataArr }) => {
  const [visible, setVisible] = useState(false)
  return (
    <>
      <div className="relative h-full w-[100%] m-auto">
        <SideMenu visible={visible} setVisible={setVisible} />
        <div className="relative">
          <div className="absolute w-full h-full !bg-gradient-to-t !from-slate-900 !to-transparent opacity-85"></div>
          <img
            src={`/${dataArr[0]?.img}`}
            className="w-full h-[750px] lg:h-[650px] xsm:h-[450px] object-cover pointer-events-none"
            alt="hero"
          />
        </div>

        {/* <CommonNav /> */}
        <UpperNav setVisible={setVisible} />
        <div className="absolute top-[290px] h-[350px] lg:h-[280px] xsm:h-[180px] xsm:top-[140px] lg:top-[200px] flex flex-col justify-between left-1/2 transform -translate-x-1/2 w-[1327px] 1xl:w-[90%] m-auto z-0">
          <div>
            <p className="text-white text-2xl font-semibold xsm:text-lg">
              Municipalities
            </p>
            <p className="text-white text-7xl xl:text-6xl sm:text-5xl xsm:text-4xl w-[50%] xl:w-[90%] font-semibold leading-tight tracking-wide">
              {dataArr[0]?.title}
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
