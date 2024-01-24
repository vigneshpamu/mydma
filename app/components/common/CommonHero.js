/* eslint-disable @next/next/no-img-element */
import React, { useState } from 'react'
import Link from 'next/link'
import SideMenu from './SideMenu'
import CommonNav from './CommonNav'

const CommonHero = ({ hero, page, desc }) => {
  const [visible, setVisible] = useState(false)
  return (
    <>
      <div className="relative h-full w-[100%] m-auto">
        <SideMenu visible={visible} setVisible={setVisible} />
        <img
          src={hero}
          className="w-full h-[750px] object-cover pointer-events-none"
          alt="hero"
        />
        <CommonNav />
        <div className="absolute top-[290px] left-1/2 transform -translate-x-1/2 w-[1327px] m-auto flex flex-col items-center justify-center  z-10">
          <p className="text-white text-2xl font-semibold">{page}</p>
          <p className="text-white text-7xl font-semibold leading-tight tracking-wide	text-center">
            {desc}
          </p>
        </div>
      </div>
    </>
  )
}

export default CommonHero
