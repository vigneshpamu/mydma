import CommonNav from '@/app/components/common/CommonNav'
import SideMenu from '@/app/components/common/SideMenu'
import React, { useState } from 'react'

const HeroSect = () => {
  const [visible, setVisible] = useState(false)
  return (
    <>
      <div className="relative  h-[980px] w-[100%] m-auto">
        <SideMenu visible={visible} setVisible={setVisible} />
        <img
          src="/images/councils/info/hero/hero.png"
          className="w-full h-[750px] object-cover pointer-events-none"
          alt="hero"
        />
        <CommonNav setVisible={setVisible} />
        <div className="absolute bottom-[0px] left-1/2 transform -translate-x-1/2 w-[1312px] m-auto ">
          <div className="relative">
            <img src="/images/councils/info/hero/mask.png" alt="" />
            <div className="absolute top-0 py-10 h-[100%] flex flex-col items-center justify-between">
              <p className="text-6xl font-semibold text-white text-center">
                Khorfakkan <br /> Municipality Council
              </p>
              <p className="text-white text-xl	text-center px-20">
                The Executive Council of the Emirate of Sharjah, the supreme
                executive authority of the emirate, was established in October
                1999 with the aim of assisting the ruler in performing his
                duties and exercising his powers, drawing the general policy of
                the emirate, and implementing development plans to raise the
                social and economic standard in the emirat
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default HeroSect
