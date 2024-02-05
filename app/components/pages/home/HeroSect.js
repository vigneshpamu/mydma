/* eslint-disable @next/next/no-img-element */
import React, { Suspense, useState } from 'react'
import { Navigation, Pagination, Scrollbar, A11y, Autoplay } from 'swiper'
import { Swiper, SwiperSlide, useSwiper } from 'swiper/react'
import Link from 'next/link'
import SideMenu from '../../common/SideMenu'
import { usePathname, useRouter } from 'next/navigation'
import UpperNav from '../../common/UpperNav'
import Image from 'next/image'
import { motion } from 'framer-motion'
const HeroSect = ({ lang }) => {
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
    { id: 3, img: '/images/home/hero/jp5.jpg' },
    { id: 1, img: '/images/home/hero/h1.png' },
    { id: 4, img: '/images/home/hero/jp6.jpg' },
    { id: 5, img: '/images/home/hero/jp7.jpg' },
    // { id: 5, img: '' },
    // { id: 6, img: '' },
    // { id: 7, img: '' },
    // { id: 7, img: '' },
  ]
  const quickFindData = [
    {
      id: 1,
      name: 'Municipalities',
      icon: 'images/home/elements/1.png',
      link: '/municipalities',
    },
    {
      id: 2,
      name: 'Councils',
      icon: 'images/home/elements/2.png',
      link: '/councils',
    },
    {
      id: 3,
      name: 'Magazines',
      icon: 'images/home/elements/3.png',
      link: '/magazines',
    },
    {
      id: 4,
      name: 'News',
      icon: 'images/home/elements/4.png',
      link: '/news',
    },
  ]
  const [visible, setVisible] = useState(false)
  const router = useRouter()
  const pathname = usePathname()
  const path = pathname[1] + pathname[2]

  const handleClick = () => {
    const path = pathname[1] + pathname[2]
    const currentPath = '/' + path + '/'
    console.log(currentPath)
    if (path === 'ar') {
      const newPath = currentPath.replace('/ar/', '/en/')
      router.push(newPath)
    } else {
      const newPath = currentPath.replace('/en/', '/ar/')
      router.push(newPath)
    }
    // Change the language to Arabic
    // console.log(currentPath, 'This is currentPath')

    // Navigate to the new path
  }
  return (
    <>
      <SideMenu visible={visible} setVisible={setVisible} />
      <div>
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
                <div className="w-full h-[650px]  object-cover pointer-events-none md:h-[600px]">
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
                </div>
              </SwiperSlide>
            ))}
        </Swiper>
      </div>
      <UpperNav setVisible={setVisible} />
      <div className="max-w-[1100px] mx-auto">
        <div className="absolute  flex flex-col items-center justify-between gap-10 p-4 w-full lg:max-w-[1100px] lg:px-10 top-36 md:flex-row md:items-start md:top-56 z-10">
          <div className="flex flex-col sm:items-center justify-center md:items-start gap-4">
            <div>
              <p
                dir={lang && lang?.isArabic ? 'rtl' : ''}
                className="text-white sm:text-center md:text-left   text-xl   font-medium "
              >
                {lang && lang?.home?.hero?.heroWel}
              </p>
              <p
                dir={lang && lang?.isArabic ? 'rtl' : ''}
                className=" text-white sm:text-center lg:text-5xl   lg:max-w-[600px]   sm:text-5xl md:text-left md:text-4xl md:max-w-[450px]  font-medium 	"
              >
                {lang && lang?.home?.hero?.heroDepartment}
              </p>
            </div>
            <div dir={lang && lang?.isArabic ? 'rtl' : ''}>
              <p className="text-white sm:tex t-center    max-w-[400px]">
                {lang && lang?.home?.hero?.heroDesc}
              </p>
            </div>
          </div>

          <div className="flex flex-col gap-7    ">
            <div className="flex flex-row items-center gap-5">
              <p className="text-white text-lg font-semibold 2md:ml-16">
                Quick Find
              </p>
              <div className="w-[100px] h-[3px] bg-gray-100 rounded-sm"></div>
            </div>
            <div className="grid grid-cols-2 gap-4 w-full m">
              {quickFindData.map((item, index) => {
                return (
                  <Link key={index} href={`/${path}${item.link}`}>
                    <div className="flex gap-2 items-center justify-center flex-col p-8 md:p-6  bg-white rounded-xl  shadow-lg  hover:bg-gray-5 cursor-pointer">
                      <div className="w-[50px] h-[50px] ">
                        <Image
                          src={`/${item.icon}`}
                          alt="hero"
                          height={80}
                          width={80}
                          objectFit="cover"
                          className="pointer-events-none"
                        />
                      </div>
                      <p className="font-semibold text-[9px] ">{item.name}</p>
                    </div>
                  </Link>
                )
              })}
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default HeroSect
