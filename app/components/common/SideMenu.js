/* eslint-disable @next/next/no-img-element */
'use client'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useRouter } from 'next/navigation'
import React, { useEffect, useState } from 'react'
import { FaBars, FaTimes } from 'react-icons/fa'

const SideMenu = ({ visible, setVisible }) => {
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
  useEffect(() => {
    const path = pathname[1] + pathname[2]
    setPar(path)
  }, [])
  return (
    <>
      <div
        className={`common-nav common-nav-black ${visible ? 'visible' : ''}`}
        onClick={() => setVisible(false)}
      >
        <div
          className={`common-nav common-nav-white  ${visible ? 'visible' : ''}`}
        >
          <img
            src="/images/home/nav/pattern2.png"
            className="absolute bottom-0"
            alt=""
          />
          <img
            className="absolute right-3 top-4"
            src="/images/home/nav/logo/slogo.png"
            alt=""
          />
          <button
            className=" border-0 bg-transparent cursor-pointer text-xl nav-close-btn"
            onClick={() => setVisible(false)}
          >
            <FaTimes />
          </button>
          <ul className="absolute top-1/3  left-20 flex flex-col gap-8 nav-list">
            {linkData.map((item) => {
              return (
                <Link href={`/${par}${item.link}`} key={item.id}>
                  <p className="font-bold text-2xl">{item.name}</p>
                </Link>
              )
            })}
          </ul>
        </div>
      </div>
    </>
  )
}

export default SideMenu
