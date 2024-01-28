/* eslint-disable @next/next/no-img-element */
import React, { useState } from 'react'
import Link from 'next/link'
import SideMenu from './SideMenu'
import CommonNav from './CommonNav'
import UpperNav from './UpperNav'

const CommonHero = ({ hero, page, desc }) => {
  const [visible, setVisible] = useState(false)
  return (
    <>
      <div className="relative h-full w-[100%] m-auto">
        <SideMenu visible={visible} setVisible={setVisible} />
        <img
          src={hero}
          className="w-full h-[750px] 2md:h-[600px] 2xsm:h-[450px] object-cover pointer-events-none"
          alt="hero"
        />
        {/* <CommonNav /> */}
        <UpperNav setVisible={setVisible} />
        <div className="absolute top-[290px] 2md:top-[200px] 2xsm:top-[150px] left-1/2 transform -translate-x-1/2 w-[1327px] 1xl:w-[95%] m-auto flex flex-col items-center justify-center  z-10">
          <p className="text-white text-2xl font-semibold 2xsm:text-xl">
            {page}
          </p>
          <p className="text-white text-7xl 1xl:text-6xl 2md:text-5xl md:text-4xl sm:text-2xl font-semibold leading-tight tracking-wide	text-center">
            {desc}
          </p>
        </div>
      </div>
    </>
  )
}

export default CommonHero
