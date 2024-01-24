'use client'
import React, { useState } from 'react'
import { motion } from 'framer-motion'
import LeftSideSticky from '@/app/components/common/LeftSideSticky'
import RightSideSticky from '@/app/components/common/RightSideSticky'
import HeroSect from '@/app/components/pages/about/HeroSect'
import SideMenu from '@/app/components/common/SideMenu'
import Link from 'next/link'
import Footer from '@/app/components/common/Footer'
const Page = () => {
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
  const connectData = [
    {
      id: 1,
      img: '/images/home/elements/map.png',
      info: 'Cultural Square, Al Ramla East – Sharjah',
    },
    {
      id: 2,
      img: '/images/home/elements/call.png',
      info: '06 566 2222',
    },
    {
      id: 3,
      img: '/images/home/elements/mail.png',
      info: 'info@dha.shj.ae',
    },
  ]
  const socialData = [
    {
      id: 1,
      icon: '/images/home/elements/social_icon/fb.png',
      link: '/',
    },
    {
      id: 2,
      icon: '/images/home/elements/social_icon/tw.png',
      link: '/',
    },
    {
      id: 3,
      icon: '/images/home/elements/social_icon/ld.png',
      link: '/',
    },
    {
      id: 4,
      icon: '/images/home/elements/social_icon/ins.png',
      link: '/',
    },
    {
      id: 5,
      icon: '/images/home/elements/social_icon/yt.png',
      link: '/',
    },
  ]
  const [visible, setVisible] = useState(false)
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { duration: 1.25 } }}
      exit={{ opacity: 0, transition: { duration: 1.25 } }}
      className="relative max-w-8xl m-auto border-2"
    >
      <LeftSideSticky />
      <RightSideSticky />
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
      <div className="relative h-[700px] max-w-[1547px] m-auto">
        <div className="w-[1347px] py-16 absolute left-1/2 transform -translate-x-1/2 m-auto bg-transparent">
          <div className="flex flex-col gap-10">
            <div className="w-[722px]flex flex-col gap-3">
              <p className="text-xl w-[722px]">
                Organizing and supervising the municipality’s activities in the
                city of Sharjah and providing an integrated innovative services
                system that exceeds the expectations of stakeholders, supported
                by cadres
              </p>
            </div>
            <div className="bg-[#036C73] w-[850px] p-10 flex flex-row justify-between">
              <div className="flex flex-col gap-7">
                <p className="text-2xl text-white">Connect with us</p>
                <div className="flex flex-col gap-7">
                  {connectData.map((item) => {
                    return (
                      <div
                        key={item.id}
                        className="flex items-center flex-row gap-4"
                      >
                        <img src={item.img} alt="" />
                        <p className=" text-white w-[60%] 2xl:w-[80%] text-lg">
                          {item.info}
                        </p>
                      </div>
                    )
                  })}
                </div>
              </div>
              <div className="flex flex-col gap-7">
                <p className="text-2xl text-white">Connect with us</p>
                <p className="w-[70%] text-lg text-white">
                  The departments official social media channels.
                </p>
                <div className="flex flex-row gap-3">
                  {socialData.map((item) => {
                    return (
                      <Link href={item.link} key={item.id}>
                        <div>
                          <img src={item.icon} alt="" />
                        </div>
                      </Link>
                    )
                  })}
                </div>
              </div>
            </div>
          </div>
          {/* <img
            className="absolute top-[-470px] right-2"
            src="/images/about/mission/info.png"
            alt=""
          /> */}
          <form className="absolute top-[-150px] right-0 flex flex-col gap-6 bg-gray-50 p-6">
            <div className="flex flex-row gap-6 items-center">
              <p className="text-xl font-semibold">Connect with us</p>
              <div className="w-[140px] h-[4px] bg-customColor rounded-lg"></div>
            </div>
            <p className="w-[400px]">
              Fill details with your queries or messages in the below form and
              submit to us, we will go through and take action
            </p>
            <div className="flex flex-col gap-6">
              <input
                className="border-2 border-customColor p-3 w-[420px] rounded-lg text-black active:outline-none placeholder-black	"
                type="text"
                placeholder="Name"
                value={''}
              />
              <input
                className="border-2 border-customColor p-3 w-[420px] rounded-lg text-black active:outline-none placeholder-black	"
                type="mail"
                placeholder="Email Address"
                value={''}
              />
              <input
                className="border-2 border-customColor p-3 w-[420px] rounded-lg text-black active:outline-none placeholder-black	"
                type="number"
                placeholder="Phone Number"
                value={''}
              />
              <input
                className="border-2 border-customColor p-3 w-[420px] rounded-lg text-black active:outline-none placeholder-black"
                type="text"
                placeholder="Subject"
                value={''}
              />
              <textarea
                class="h-32 w-full resize-none border-2 border-customColor rounded-lg p-3 placeholder-black"
                placeholder="Type your message.."
              ></textarea>
            </div>
            <button
              type="submit"
              className="flex flex-row items-center justify-evenly bg-customColor w-[250px] m-auto p-4 rounded-2xl"
            >
              <p className="font-semibold text-xl text-white">Submit</p>
              <img src="/images/home/elements/w-rarrow.png" alt="" />
            </button>
          </form>
        </div>
      </div>
      <Footer />
    </motion.div>
  )
}

export default Page
