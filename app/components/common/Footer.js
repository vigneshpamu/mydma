/* eslint-disable @next/next/no-img-element */
import Link from 'next/link'
import React from 'react'

const Footer = () => {
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
      <div className="relative h-[750px] sm:h-[1150px]">
        <img
          src="/images/home/footer/background.png"
          className="w-full h-full"
          alt=""
        />
        <div className="flex flex-col text-white gap-20 absolute top-6 left-1/2 transform -translate-x-1/2  w-[1347px] 2xl:w-[1200px] xl:w-[1000px] lg:w-[800px] 2md:w-[600px] sm:gap-5 sm:w-[95%] m-auto">
          <div className="flex w-full justify-end items-end">
            <img src="/images/home/nav/logo/logo.png" alt="" />
          </div>
          <div className="flex mt-10 sm:ml-10 flex-col gap-12">
            <div className="flex flex-row justify-between gap-10 sm:flex-col">
              <div className="max-w-[550px] flex flex-col gap-7">
                <div className="flex flex-row items-center gap-5">
                  <p className="text-2xl lg:text-xl">Contact.</p>
                  <div className="w-[120px] h-[4px] rounded-lg bg-white"></div>
                </div>
                <p className="text-6xl font-semibold w-[100%] leading-tight tracking-wide	xl:text-5xl lg:text-3xl sm:text-2xl sm:w-[50%] xsm:w-[70%]">
                  Connect with the Dha Sharjah.
                </p>
              </div>
              <div className="flex flex-col gap-7">
                <p className="text-2xl lg:text-xl">Connect with us</p>
                <div className="flex flex-col gap-7">
                  {connectData.map((item) => {
                    return (
                      <div
                        key={item.id}
                        className="flex items-center flex-row gap-4"
                      >
                        <img
                          src={item.img}
                          alt=""
                          className="lg:w-[30px] lg:h-[30px]"
                        />
                        <p className="w-[60%] 2xl:w-[80%] text-lg lg:text-sm">
                          {item.info}
                        </p>
                      </div>
                    )
                  })}
                </div>
              </div>
              <div className="flex flex-col gap-7">
                <p className="text-2xl lg:text-xl">Connect with us</p>
                <p className="w-[70%] text-lg lg:text-sm">
                  The departments official social media channels.
                </p>
                <div className="flex flex-row gap-3">
                  {socialData.map((item) => {
                    return (
                      <Link href={item.link} key={item.id}>
                        <div>
                          <img
                            src={item.icon}
                            className="lg:w-[30px] lg:h-[30px]"
                            alt=""
                          />
                        </div>
                      </Link>
                    )
                  })}
                </div>
              </div>
            </div>
            <div className="w-full h-[3px] bg-gray-400"></div>
            <div className="flex flex-row gap-10 sm:gap-3 sm:flex-wrap">
              {linkData.map((item) => {
                return (
                  <Link href={item.link} key={item.id}>
                    <p className="sm:text-sm">{item.name}</p>
                  </Link>
                )
              })}
            </div>
            <div className="flex flex-row gap-10 justify-between sm:flex-col">
              <div className="flex flex-row gap-2">
                <Link href={'/'}>
                  <p>Privacy Policy</p>
                </Link>
                <p> | </p>
                <Link href={'/'}>
                  <p>Terms and Conditions</p>
                </Link>
              </div>
              <div>
                <p>
                  © 2023 All Rights Reserved -
                  <span className="font-bold">
                    {' '}
                    Department of Municipalities Affairs.
                  </span>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Footer
