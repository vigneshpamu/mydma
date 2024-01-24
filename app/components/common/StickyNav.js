/* eslint-disable @next/next/no-img-element */
import React, { useEffect, useState } from 'react'
import { motion, useViewportScroll, useTransform } from 'framer-motion'
import Link from 'next/link'
import SideMenu from './SideMenu'
const StickyNav = ({ start, end }) => {
  const navData2 = [
    {
      id: 1,
      icon: '/images/home/elements/1.1.png',
    },
    {
      id: 2,
      icon: '/images/home/elements/1.2.png',
    },
    {
      id: 3,
      icon: '/images/home/elements/1.3.png',
    },
    {
      id: 4,
      icon: '/images/home/elements/1.4.png',
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

  const { scrollY } = useViewportScroll()
  const y = useTransform(scrollY, [start, end], ['-100%', '0%'])
  //   const height = useTransform(scrollY, [700, 0], ['100%', '100px'])
  const [isSticky, setIsSticky] = useState(false)
  const [visible, setVisible] = useState(false)
  useEffect(() => {
    if (start === 0) {
      setIsSticky(true)
    }
    window.addEventListener('scroll', () => {
      if (start === 0) {
        setIsSticky(true)
      } else if (window.scrollY >= start) {
        setIsSticky(true)
        console.log('True')
      } else {
        setIsSticky(false)
      }
    })
  }, [])
  return (
    <>
      <SideMenu visible={visible} setVisible={setVisible} />
      <motion.div
        style={{ y }}
        className={` nav m-auto w-full bg-white shadow-md ${
          isSticky ? 'sticky block sec-main' : 'hidden'
        }`}
      >
        {/* Your navigation content goes here */}
        <div className="h-full  border-red-500 bg-white m-auto flex flex-col justify-between p-4">
          <div className="flex items-center justify-between align-middle w-[1347px] 2xl:w-[1200px] xl:w-[1000px] m-auto">
            <div className="flex items-center align-middle justify-center gap-20">
              {navData2.map((item, index) => {
                return index === 0 ? (
                  <img
                    key={item.id}
                    className="w-[20px] h-[20px] object-cover cursor-pointer"
                    src={item.icon}
                    onClick={() => setVisible(true)}
                    alt=""
                  />
                ) : (
                  <img
                    key={item.id}
                    className="w-[20px] h-[20px] object-cover cursor-pointer"
                    src={item.icon}
                    alt=""
                  />
                )
              })}
            </div>
            <div>
              <img src="/images/home/vision/logo.png" alt="" />
            </div>
          </div>
          <div className="w-[1347px] m-auto h-[2px] bg-gray-300 mt-0 mb-4"></div>
          <div className="flex items-center justify-center gap-16">
            {linkData.map((item) => {
              return (
                <Link href={item.link} key={item.id}>
                  <p className="text-black hover:text-gray-100 font-semibold">
                    {item.name}
                  </p>
                </Link>
              )
            })}
          </div>
        </div>
      </motion.div>
    </>
  )
}

export default StickyNav
