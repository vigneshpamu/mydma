/* eslint-disable @next/next/no-img-element */
import Image from 'next/image'
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
      link: 'https://www.facebook.com/SharjahDma',
    },
    {
      id: 2,
      icon: '/images/home/elements/social_icon/tw.png',
      link: 'https://twitter.com/sharjahdma',
    },

    {
      id: 4,
      icon: '/images/home/elements/social_icon/ins.png',
      link: 'https://www.instagram.com/sharjahdma/',
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
      {/* <img
          src="/images/home/footer/background.png"
          className="w-full h-full"
          alt=""
        /> */}
      <div className="relative  h-full ">
        <div className="h-[1100px] md:h-[800px] lg:h-[650px]">
          <Image
            src="/images/home/footer/background.png"
            alt="meeting-img"
            layout="fill"
            objectFit="cover"
            className="pointer-events-none  object-cover"
          />
        </div>
        <div className="max-w-[1100px] flex items-center justify-center mx-auto">
          <div className="flex ml-5 flex-col gap-2 absolute text-white top-4   transform -tran slate-x-1/2   m-auto">
            <div className="flex w-full justify-end items-end">
              {/* <img src="/images/home/nav/logo/logo.png" alt="" /> */}
              <Image
                src="/images/home/nav/logo/logo.png"
                alt="hero"
                height={0}
                width={270}
                // layout="fill"
                objectFit="cover"
                className="  object-cover"
              />
            </div>
            <div className="flex mt-10 sm:ml-10 flex-col gap-12">
              <div className="flex flex-col lg:flex-row justify-between lg:gap-32 max-w-[1100px]">
                <div className="flex flex-col gap-7">
                  <div className="flex flex-row items-center gap-5">
                    <p className="text-xl lg:text-xl">Contact.</p>
                    <div className="w-[120px] h-[4px] rounded-lg bg-white"></div>
                  </div>
                  <p className="text-xl font-semibold w-[100%] leading-tight lg:text-2xl tracking-wide">
                    Connect with the DHA Sharjah.
                  </p>
                </div>
                <div className="flex flex-col gap-8 md:flex-row md:justify-between">
                  <div className="flex flex-col gap-7">
                    <p className="text-xl lg:text-xl">Connect with us</p>
                    <div className="flex flex-col gap-7">
                      {connectData.map((item) => {
                        return (
                          <div
                            key={item.id}
                            className="flex items-center flex-row gap-4"
                          >
                            {/* <img
                              src={item.img}
                              alt=""
                              className="lg:w-[30px] lg:h-[30px]"
                            /> */}
                            <Image
                              src={item.img}
                              alt="hero"
                              height={30}
                              width={30}
                              // layout="fill"
                              objectFit="cover"
                              className="  object-cover"
                            />
                            <p className="text-lg lg:text-sm">{item.info}</p>
                          </div>
                        )
                      })}
                    </div>
                  </div>
                  <div className="flex flex-col gap-7">
                    <p className="text-xl lg:text-xl">Connect with us</p>
                    <p className="w-[70%] text-lg lg:text-sm">
                      The departments official social media channels.
                    </p>
                    <div className="flex flex-row gap-3">
                      {socialData.map((item) => {
                        return (
                          <Link href={item.link} key={item.id}>
                            <div>
                              <Image
                                src={item.icon}
                                alt="hero"
                                height={30}
                                width={30}
                                // layout="fill"
                                objectFit="cover"
                                className="  object-cover"
                              />
                            </div>
                          </Link>
                        )
                      })}
                    </div>
                  </div>
                </div>
              </div>
              {/* <div className="w-full h-[3px] bg-gray-400"></div> */}
              <div className="flex flex-row flex-wrap gap-3 sm:gap-3 sm:flex-wrap">
                {linkData.map((item) => {
                  return (
                    <Link href={item.link} key={item.id}>
                      <p className="sm:text-sm">{item.name}</p>
                    </Link>
                  )
                })}
              </div>
              <div className="flex flex-col gap-10 justify-between sm:flex-col md:flex-row md:justify-start">
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
                      Department of Municipalities Affairs.
                    </span>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Footer
