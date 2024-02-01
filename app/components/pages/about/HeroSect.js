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
    { id: 3, img: '/images/home/hero/jp8.jpg' },
    { id: 1, img: '/images/home/hero/jp9.jpg' },
    { id: 4, img: '/images/home/hero/jp10.jpg' },
    { id: 4, img: '/images/about/hero/hero.jpg' },
    // { id: 5, img: '' },
    // { id: 6, img: '' },
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
              <div className="w-full  h-[450px]  object-cover pointer-events-none">
                <Image
                  src={item.img}
                  alt="hero"
                  layout="fill"
                  objectFit="cover"
                  className="pointer-events-none"
                />
                {item.img.length < 1 && (
                  <p className="text-xl w-full h-full flex items-center justify-center mx-auto mt-[-100px]">
                    Image is Awaited
                  </p>
                )}
                <div className="absolute w-full h-full !bg-gradient-to-t !from-slate-900 !to-transparent opacity-85"></div>
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
          </div>
        </div> */}

      <UpperNav setVisible={setVisible} />
      <div className="max-w-[1100px]  flex items-start mx-auto">
        <div className="w-full mt-[-300px] md:mt-[-250px] px-3 z-10">
          <p className="text-white text-xl font-semibold ">About DMA</p>
          <p className="text-white text-3xl font-semibold sm:max-w-[600px] sm:text-4xl lg:text-5xl   leading-tight tracking-wide	   ">
            Meeting the needs of Present and Future Generations.
          </p>
        </div>
      </div>
    </>
  )
}

export default HeroSect
