/* eslint-disable @next/next/no-img-element */
import React, { useState } from 'react'
import Link from 'next/link'
import SideMenu from './SideMenu'
import CommonNav from './CommonNav'
import UpperNav from './UpperNav'
import Image from 'next/image'

const CommonHero = ({ hero, page, desc }) => {
  const [visible, setVisible] = useState(false)
  return (
    <>
      <SideMenu visible={visible} setVisible={setVisible} />
      <div className="relative">
        {/* <img
            src={hero}
            className="w-full h-[750px] 2md:h-[600px] 2xsm:h-[450px] object-cover pointer-events-none"
            alt="hero"
          /> */}
        <div className="w-full h-[450px] md:h-[550px] object-cover pointer-events-none">
          <Image
            src={hero}
            alt="meeting-img"
            layout="fill"
            objectFit="cover"
            className="pointer-events-none  object-cover"
          />
          <div className="absolute w-full h-full !bg-gradient-to-t !from-slate-900 !to-transparent opacity-85"></div>
        </div>
        <div className="relative h-full max-w-[1100px] m-auto"></div>
        {/* <CommonNav /> */}
        <UpperNav setVisible={setVisible} />
        <div className="absolute w-[100%] px-4 top-[170px] lg:max-w-[900px] md:top-[200px] left-1/2 transform -translate-x-1/2  m-auto flex flex-col items-center justify-center  z-10">
          <p className="text-white text-xl md:text-2xl font-semibold 2xsm:text-xl">
            {page}
          </p>
          <p className="text-white text-2xl md:text-4xl w-full font-semibold leading-tight tracking-wide	text-center">
            {desc}
          </p>
        </div>
      </div>
    </>
  )
}

export default CommonHero
