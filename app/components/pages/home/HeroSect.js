/* eslint-disable @next/next/no-img-element */
import React, { useState } from 'react'
import { Navigation, Pagination, Scrollbar, A11y, Autoplay } from 'swiper'
import { Swiper, SwiperSlide, useSwiper } from 'swiper/react'
import Link from 'next/link'
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
  const heroSwiper = [
    { id: 1, img: '/images/home/hero/h1.png' },
    { id: 2, img: '/images/home/hero/h2.png' },
    // { id: 3, img: '/images/home/hero/h3.png' },
    // { id: 4, img: '/images/home/hero/h4.png' },
  ]
  const quickFindData = [
    {
      id: 1,
      name: 'Municipalities',
      icon: 'images/home/elements/1.png',
    },
    {
      id: 2,
      name: 'Councils',
      icon: 'images/home/elements/2.png',
    },
    {
      id: 3,
      name: 'Magazines',
      icon: 'images/home/elements/3.png',
    },
    {
      id: 4,
      name: 'News & Media',
      icon: 'images/home/elements/4.png',
    },
  ]
  const [visible, setVisible] = useState(false)

  return (
    <>
      <SideMenu visible={visible} setVisible={setVisible} />
      <Swiper
        modules={[Autoplay, Navigation, Pagination, Scrollbar, A11y]}
        slidesPerView={1}
        spaceBetween={0}
        loop={true}
        effect={'fade'}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination
        breakpoints={{}}
        className=""
      >
        {heroSwiper.length > 0 &&
          heroSwiper.map((item, index) => (
            <SwiperSlide key={item.id} className="">
              <img
                src={item.img}
                className="w-full   h-[920px] object-cover pointer-events-none 2md:h-[750px]"
                alt="hero"
              />
            </SwiperSlide>
          ))}
      </Swiper>
      <div className="absolute top-0 left-1/2 transform -translate-x-1/2 m-auto bg-transparent lg:w-[800px] 2md:w-[600px] sm:w-[90%]  z-10">
        <div className="flex items-center justify-between align-middle w-[1347px] 2xl:w-[1200px] xl:w-[1000px] lg:w-full m-auto z-10">
          <div className="flex items-center align-middle justify-center gap-20 2md:gap-7  z-10">
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
          <div className="sm:w-[250px] flex items-center justify-end">
            <img
              src="/images/home/nav/logo/logo1.png"
              className="sm:w-[80%]"
              alt=""
            />
          </div>
        </div>
        <div className="max-w-[1347px] h-[2px] bg-gray-100 mt-0 mb-6 2md:hidden"></div>
        <div className="flex items-center justify-center gap-16 z-10 2md:hidden">
          {linkData.map((item) => {
            return (
              <Link href={item.link} key={item.id}>
                <p className="text-white hover:text-gray-100">{item.name}</p>
              </Link>
            )
          })}
        </div>
      </div>
      <div className="absolute top-[400px] left-1/2 transform -translate-x-1/2 w-[1327px] 2xl:w-[1200px] xl:w-[1000px] lg:w-[90%] 2md:flex-col 2md:gap-10 2md:top-[200px]  m-auto flex flex-row justify-between z-10">
        <div className="flex justify-between flex-col gap-4 ">
          <div className="flex flex-col gap-5">
            <div>
              <p className="text-white text-2xl font-semibold">Welcome to</p>
              <p className="text-white text-7xl font-semibold w-[850px] 2xl:text-6xl xl:text-5xl 2xl:w-[700px] xl:w-[500px]  sm:w-[80%] leading-tight tracking-wide	">
                Department of Municipalities Affairs.
              </p>
            </div>
            <div>
              <p className="text-white text-xl w-[541px] xl:text-lg sm:w-[80%]">
                Committing to transparency, providing mutual trust and
                strengthening the relationship with partners and the community.
              </p>
            </div>
          </div>
          <div className="flex items-center gap-3 2md:hidden">
            <img src="images/home/elements/5.png" alt="" className="" />
            <p className="text-white text-2xl tracking-wider">Scroll</p>
          </div>
        </div>
        <div className="flex flex-col gap-7 2md:absolute 2md:top-[400px] 2md:left-1/2 2md:transform 2md:w-[500px] 2md:-translate-x-1/2 ">
          <div className="flex flex-row items-center gap-5">
            <p className="text-white text-lg font-semibold ml-10">Quick Find</p>
            <div className="w-[100px] h-[3px] bg-gray-100 rounded-sm"></div>
          </div>
          <div className="grid grid-cols-2 gap-4 max-w-[400px] m-auto">
            {quickFindData.map((item) => {
              return (
                <div
                  className="flex gap-2 items-center justify-center flex-col p-10 bg-white rounded-xl 2md:shadow-lg  hover:bg-gray-50 cursor-pointer"
                  key={item.id}
                >
                  <img
                    src={item.icon}
                    alt=""
                    className="w-[80px] h-[80px] object-cover xl:w-[50px] xl:h-[45px]"
                  />
                  <p className="font-semibold">{item.name}</p>
                </div>
              )
            })}
          </div>
        </div>
      </div>
    </>
  )
}

export default HeroSect
