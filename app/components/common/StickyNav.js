/* eslint-disable @next/next/no-img-element */
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useRouter } from 'next/navigation'
import React, { useEffect, useState } from 'react'

import { motion, useViewportScroll, useTransform } from 'framer-motion'
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
  const router = useRouter()
  const pathname = usePathname()
  const [par, setPar] = useState('')
  const handleClick = () => {
    const path = pathname[1] + pathname[2]
    // const path = pathname[1] + pathname[2]
    const currentPath = '/' + path + '/'
    let newStr = pathname.substring(3)
    if (path === 'ar') {
      const newPath = currentPath.replace(`/ar`, `/en${newStr}`)
      router.push(newPath)
    } else {
      const newPath = currentPath.replace(`/en`, `/ar${newStr}`)
      router.push(newPath)
    }

    // Change the language to Arabic
    // console.log(currentPath, 'This is currentPath')

    // Navigate to the new path
  }
  useEffect(() => {
    const path = pathname[1] + pathname[2]
    console.log('This is Path', path)
    setPar(path)
  }, [])
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
          isSticky ? 'sticky block sec-main ' : 'hidden'
        }`}
      >
        {/* Your navigation content goes here */}
        <div className="h-full z-230  border-red-500 bg-white m-auto flex flex-col justify-between p-4  lg:w-[800px] 2md:w-[100%]">
          <div className="flex items-center justify-between align-middle w-[1347px] 2xl:w-[1200px] xl:w-[1000px] lg:w-[800px] 2md:w-[100%] m-auto">
            <div className="flex items-center align-middle justify-center gap-20 2md:gap-7">
              {navData2.map((item, index) => {
                return index === 0 ? (
                  <img
                    key={index}
                    className="w-[20px] h-[20px] object-cover cursor-pointer"
                    src={item.icon}
                    onClick={() => setVisible(true)}
                    alt=""
                  />
                ) : index === 3 ? (
                  // Add your condition for index === 4 here
                  // For example, you can add a specific class or modify the behavior
                  <div
                    key={index}
                    className="flex cursor-pointer flex-row items-center justify-center gap-2"
                    onClick={handleClick}
                  >
                    <img
                      className="w-[20px] h-[20px] object-cover cursor-pointer special-class"
                      src={item.icon}
                      alt=""
                    />
                    <div className="px-2 rounded-lg bg-customColor">
                      <p className="text-sm text-white">
                        {par === 'ar' ? 'EN' : 'AR'}
                      </p>
                    </div>
                  </div>
                ) : // <img
                //   key={index}
                //   className="w-[20px] h-[20px] object-cover cursor-pointer"
                //   src={item.icon}
                //   alt=""
                // />
                null
              })}
            </div>
            <div className="sm:w-[250px] flex items-center justify-end xsm:w-[35%]">
              <img
                src="/images/home/vision/logo.png"
                className="sm:w-[80%] xsm:w-full"
                alt=""
              />
            </div>
          </div>
          <div className="w-[1347px] m-auto h-[2px] bg-gray-300 mt-0 mb-4 lg:w-[100%] 2md:hidden"></div>
          <div className="flex items-center justify-center gap-16 2md:hidden">
            {linkData.map((item) => {
              return (
                <Link href={`/${par}${item.link}`} key={item.id}>
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
