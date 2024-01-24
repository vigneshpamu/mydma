import Link from 'next/link'
import React from 'react'

const CommonNav = () => {
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
  return (
    <>
      <div className="absolute top-0 left-1/2 transform -translate-x-1/2 m-auto bg-transparent z-10">
        <div className="flex items-center justify-between align-middle w-[1347px] m-auto">
          <div className="flex items-center align-middle justify-center gap-20">
            {/* <button onClick={() => setVisible(true)}>hi</button> */}
            {navData.map((item, index) => {
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
            <img src="/images/home/nav/logo/logo.png" alt="" />
          </div>
        </div>
        <div className="max-w-[1347px] h-[2px] bg-gray-100 mt-0 mb-6"></div>
        <div className="flex items-center justify-center gap-16">
          {linkData.map((item) => {
            return (
              <Link href={item.link} key={item.id}>
                <p className="text-white hover:text-gray-100">{item.name}</p>
              </Link>
            )
          })}
        </div>
      </div>
    </>
  )
}

export default CommonNav
