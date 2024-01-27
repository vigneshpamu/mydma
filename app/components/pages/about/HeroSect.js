/* eslint-disable @next/next/no-img-element */
import React, { useState } from 'react'
import SideMenu from '../../common/SideMenu'
import Link from 'next/link'
import UpperNav from '../../common/UpperNav'

const HeroSect = () => {
  const navData = [
    {
      id: 1,
      icon: '/images/home/nav/icon/1.png',
    },
    {
      id: 2,
      icon: '/images/home/nav/icon/2.png',
    },
    {
      id: 3,
      icon: '/images/home/nav/icon/3.png',
    },
    {
      id: 4,
      icon: '/images/home/nav/icon/4.png',
    },
  ]
  const linkData = [
    {
      id: 1,
      link: '/',
      name: 'Home',
    },
    {
      id: 2,
      link: '/about',
      name: 'About',
    },
    {
      id: 3,
      link: '/municipalities',
      name: 'Municipalities',
    },
    {
      id: 4,
      link: '/councils',
      name: 'Councils',
    },
    {
      id: 5,
      link: '/news',
      name: 'News & Media',
    },
    {
      id: 6,
      link: '/contact',
      name: 'Contact us',
    },
  ]

  const [visible, setVisible] = useState(false)
  return (
    <>
      <div className="relative h-full w-[100%] m-auto">
        <SideMenu visible={visible} setVisible={setVisible} />
        <img
          src="/images/about/hero/b1.png"
          className="w-full h-[750px] object-cover pointer-events-none"
          alt="hero"
        />
        <UpperNav setVisible={setVisible} />
        <div className="absolute bottom-[70px] left-1/2 transform -translate-x-1/2 w-[1327px] m-auto flex flex-row justify-between z-10">
          <div className="flex justify-between flex-col gap-4">
            <div className="flex flex-col gap-5">
              <div>
                <p className="text-white text-2xl font-semibold">About DMA</p>
                <p className="text-white text-7xl font-semibold w-[850px] leading-tight tracking-wide	">
                  Meeting the needs of Present and Future Generations.{' '}
                </p>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <img src="images/home/elements/5.png" alt="" className="" />
              <p className="text-white text-2xl tracking-wider">Scroll</p>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default HeroSect
