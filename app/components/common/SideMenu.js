/* eslint-disable @next/next/no-img-element */
'use client'
import Link from 'next/link'
import React, { useState } from 'react'
import { FaBars, FaTimes } from 'react-icons/fa'

const SideMenu = ({ visible, setVisible }) => {
  // const [visible, setVisible] = useState(false)
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
      link: '/events',
      name: 'Events',
    },
    {
      id: 7,
      link: '/contact',
      name: 'Contact us',
    },
  ]
  return (
    <>
      <div
        className={`netflix-nav netflix-nav-black ${visible ? 'visible' : ''}`}
        onClick={() => setVisible(false)}
      >
        <div
          className={`netflix-nav netflix-nav-white  ${
            visible ? 'visible' : ''
          }`}
        >
          <img
            src="/images/home/nav/pattern2.png"
            className="absolute bottom-0"
            alt=""
          />
          <img
            className="absolute right-3 top-4"
            src="images/home/nav/logo/slogo.png"
            alt=""
          />
          <button
            className="netflix-nav-btn netflix-close-btn"
            onClick={() => setVisible(false)}
          >
            <FaTimes />
          </button>
          <ul className="absolute top-1/3  left-20 flex flex-col gap-8 netflix-list">
            {linkData.map((item) => {
              return (
                <Link key={item.id} href={item.link}>
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
