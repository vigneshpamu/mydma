/* eslint-disable @next/next/no-img-element */
import React, { useState } from 'react'
import { Navigation, Pagination, Scrollbar, A11y, Autoplay } from 'swiper'
import { Swiper, SwiperSlide, useSwiper } from 'swiper/react'
import Link from 'next/link'
import SideMenu from '../../common/SideMenu'
import { usePathname, useRouter } from 'next/navigation'
import UpperNav from '../../common/UpperNav'
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
      name: 'News & Media',
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
      <Swiper
        modules={[Autoplay, Navigation, Pagination, Scrollbar, A11y]}
        slidesPerView={1}
        spaceBetween={0}
        loop={true}
        effect={'fade'}
        autoplay={{
          delay: 5000,
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
                className="w-full   h-[920px] object-cover pointer-events-none 2md:h-[750px] xsm:h-[650px]"
                alt="hero"
              />
            </SwiperSlide>
          ))}
      </Swiper>
      <UpperNav setVisible={setVisible} />
      <div className="absolute top-[400px] left-1/2 transform -translate-x-1/2 w-[1327px] 2xl:w-[1200px] xl:w-[1000px] lg:w-[90%] 2md:flex-col 2md:gap-10 2md:top-[200px] xsm:top-[150px]  m-auto flex flex-row justify-between z-10">
        <div className="flex justify-between flex-col gap-4 ">
          <div className="flex flex-col gap-5">
            <div>
              <p
                dir={lang && lang?.isArabic ? 'rtl' : ''}
                className=" font-alexandria text-white text-2xl font-semibold xsm:text-xl"
              >
                {lang && lang?.home?.hero?.heroWel}
              </p>
              <p
                dir={lang && lang?.isArabic ? 'rtl' : ''}
                className="font-alexandria text-white text-7xl font-semibold w-[850px] 2xl:text-6xl xl:text-5xl 2xl:w-[700px] xl:w-[500px]  sm:w-[80%] xsm:text-4xl xsm:w-[90%] leading-tight tracking-wide	"
              >
                {lang && lang?.home?.hero?.heroDepartment}
              </p>
            </div>
            <div dir={lang && lang?.isArabic ? 'rtl' : ''}>
              <p className=" font-alexandria text-white text-xl w-[541px] xl:text-lg sm:w-[80%] xsm:text-sm xsm:w-[80%]">
                {lang && lang?.home?.hero?.heroDesc}
              </p>
            </div>
          </div>
          <div className="flex items-center gap-3 2md:hidden">
            <img src="images/home/elements/5.png" alt="" className="" />
            <p className="text-white text-2xl tracking-wider">Scroll</p>
          </div>
        </div>
        <div className="flex flex-col gap-7 2md:absolute 2md:top-[400px] 2md:left-1/2 2md:transform 2md:w-[500px] items-start justify-start xsm:top-[300px] 2md:-translate-x-1/2 2xsm:max-w-[350px]">
          <div className="flex flex-row items-center gap-5">
            <p className="text-white text-lg font-semibold 2md:ml-16">
              Quick Find
            </p>
            <div className="w-[100px] h-[3px] bg-gray-100 rounded-sm"></div>
          </div>
          <div className="grid grid-cols-2 gap-4 max-w-[400px] m-auto">
            {quickFindData.map((item, index) => {
              return (
                <Link key={index} href={`/${path}${item.link}`}>
                  <div className="flex gap-2 items-center justify-center flex-col p-10 bg-white rounded-xl 2md:shadow-lg  hover:bg-gray-50 xsm:p-7 cursor-pointer">
                    <img
                      src={item.icon}
                      alt=""
                      className="w-[80px] h-[80px] object-cover xl:w-[50px] xl:h-[45px]"
                    />
                    <p className="font-semibold  2xsm:text-sm">{item.name}</p>
                  </div>
                </Link>
              )
            })}
          </div>
        </div>
      </div>
    </>
  )
}

export default HeroSect
