import React, { useState } from 'react'
import SideMenu from '../../common/SideMenu'

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
          src="/images/contact/hero/hero.png"
          className="w-full h-[750px] object-cover pointer-events-none"
          alt="hero"
        />
        <div className="absolute top-0 left-1/2 transform -translate-x-1/2 m-auto bg-transparent z-10">
          <div className="flex items-center justify-between align-middle w-[1347px] m-auto z-10">
            <div className="flex items-center align-middle justify-center gap-20 z-10">
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
          <div className="flex items-center justify-center gap-16 z-10">
            {linkData.map((item) => {
              return (
                <Link href={item.link} key={item.id}>
                  <p className="text-white hover:text-gray-100">{item.name}</p>
                </Link>
              )
            })}
          </div>
        </div>
        <div className="absolute bottom-[40px] left-1/2 transform -translate-x-1/2 w-[1327px] m-auto flex flex-row justify-between z-10">
          <div className="flex justify-between h-[420px] flex-col gap-4">
            <div className="flex flex-col gap-5">
              <div>
                <p className="text-white text-2xl font-semibold">Contact us</p>
                <p className="text-white text-7xl font-semibold w-[850px] leading-tight tracking-wide	">
                  Connect with us, Be a part in development
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
