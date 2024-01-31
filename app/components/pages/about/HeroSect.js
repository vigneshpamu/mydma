/* eslint-disable @next/next/no-img-element */
import React, { useState } from 'react'
import SideMenu from '../../common/SideMenu'
import Link from 'next/link'
import UpperNav from '../../common/UpperNav'
import Image from 'next/image'
import { Navigation, Pagination, Scrollbar, A11y, Autoplay } from 'swiper'
import { Swiper, SwiperSlide, useSwiper } from 'swiper/react'
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
  const heroSwiper = [
    { id: 3, img: '/images/home/hero/jp5.jpg' },
    { id: 1, img: '/images/home/hero/h1.png' },
    { id: 4, img: '/images/home/hero/jp6.jpg' },
    { id: 4, img: '/images/home/hero/jp7.jpg' },
    { id: 5, img: '' },
    { id: 6, img: '' },
    // { id: 7, img: '' },
    // { id: 7, img: '' },
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
      <div className="relative h-full z-10 w-[100%] m-auto ">
        <SideMenu visible={visible} setVisible={setVisible} />
        <Swiper
          modules={[Autoplay, Navigation, Pagination, Scrollbar, A11y]}
          slidesPerView={1}
          spaceBetween={0}
          loop={true}
          effect={'fade'}
          autoplay={{
            delay: 6000,
            disableOnInteraction: false,
          }}
          pagination
          breakpoints={{}}
          className=""
        >
          {heroSwiper.length > 0 &&
            heroSwiper.map((item, index) => (
              <SwiperSlide key={item.id} className="">
                <div className="w-full  h-[750px] 2md:h-[500px] md:h-[400px] object-cover pointer-events-none">
                  <Image
                    src={item.img}
                    alt="hero"
                    layout="fill"
                    objectFit="cover"
                    className="pointer-events-none"
                  />
                  {item.img.length < 1 && (
                    <p className="text-5xl w-full h-full flex items-center justify-center mx-auto mt-[-100px]">
                      Image is Awaited
                    </p>
                  )}
                </div>
              </SwiperSlide>
            ))}
        </Swiper>
        {/* <div className="relative">
          <img
            src="/images/about/hero/hero.jpg"
            className="w-full  h-[750px] 2md:h-[500px] md:h-[400px] object-cover pointer-events-none"
            alt="hero"
          />
          <div className="w-full  h-[750px] 2md:h-[500px] md:h-[400px] object-cover pointer-events-none">
            <Image
              src="/images/about/hero/hero.jpg"
              alt="hero"
              layout="fill"
              objectFit="cover"
              className="pointer-events-none"
            />
            <div className="absolute w-full h-full !bg-gradient-to-t !from-slate-900 !to-transparent opacity-85"></div>
          </div>
        </div> */}

        <UpperNav setVisible={setVisible} />
        <div className="absolute bottom-[70px] z-10 left-1/2 transform -translate-x-1/2 w-[1327px] 1xl:w-[90%]  1xl:top-[50%] 2md:top-[35%]  m-auto flex flex-row justify-between ">
          <div className="flex justify-between flex-col gap-4">
            <div className="flex flex-col gap-5">
              <div>
                <p className="text-white text-2xl font-semibold 2md:text-lg md:text-sm">
                  About DMA
                </p>
                <p className="text-white text-7xl font-semibold w-[850px] leading-tight tracking-wide	1xl:text-6xl 	xl:text-5xl xl:w-[60%] lg:text-3xl lg:w-[50%] md:text-2xl sm:w-full sm:text-3xl ">
                  Meeting the needs of Present and Future Generations.{' '}
                </p>
              </div>
            </div>
            <div className="flex items-center gap-3">
              {/* <img
                src="/images/home/elements/5.png"
                alt=""
                className="w-[2%] mt-[6px]"
              />
              <p className="text-white text-2xl tracking-wider 2md:text-xl">
                Scroll
              </p> */}
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default HeroSect
