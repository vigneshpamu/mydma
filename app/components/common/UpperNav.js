'use client'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useRouter } from 'next/navigation'
import React, { useEffect, useState } from 'react'

const UpperNav = ({ setVisible }) => {
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
  const [show, setShow] = useState(false)
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
  }

  const showFull = () => {}
  useEffect(() => {
    const path = pathname[1] + pathname[2]
    setPar(path)
  }, [])
  return (
    <>
      <div className="max-w-[1100px] mx-auto">
        <div className="absolute top-0 left-1/2 transform w-[90%] lg:max-w-[1100px] -translate-x-1/2 m-auto bg-transparent mx-auto  z-10">
          <div className="flex items-center justify-between align-middle mx-auto  ">
            <div className="flex items-center align-middle justify-center gap-5  ">
              {/* <button onClick={() => setVisible(true)}>hi</button> */}
              {navData.map((item, index) => {
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
                    {/* <img
                    className="w-[20px] h-[20px] object-cover cursor-pointer special-class"
                    src={item.icon}
                    alt=""
                  /> */}
                    <div className="px-2 rounded-lg bg-white">
                      <p className="text-sm">{par === 'ar' ? 'EN' : 'AR'}</p>
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
            <div className="flex items-center justify-end ">
              <img
                src="/images/home/nav/logo/logo1.png"
                className="w-[175px]"
                alt=""
              />
            </div>
          </div>
          <div className="md:block h-[2px] bg-gray-100 mt-0 mb-6 hidden"></div>
          <div className="md:flex items-center justify-center gap-8 z-10 hidden">
            {linkData.map((item) => {
              return (
                <Link href={`/${par}${item.link}`} key={item.id}>
                  <p className="text-white hover:text-gray-100">{item.name}</p>
                </Link>
              )
            })}
          </div>
        </div>
      </div>
    </>
  )
}

export default UpperNav
