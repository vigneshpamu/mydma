'use client'
import React, { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import LeftSideSticky from '@/app/components/common/LeftSideSticky'
import RightSideSticky from '@/app/components/common/RightSideSticky'
import StickyNav from '@/app/components/common/StickyNav'
import Footer from '@/app/components/common/Footer'
import SideMenu from '@/app/components/common/SideMenu'
import CommonNav from '@/app/components/common/CommonNav'

const page = () => {
  const [visible, setVisible] = useState(false)
  const mainData = [
    {
      img: 'images/municipalities/main/im1.png',
      title: 'Hamriyah City Municipality',
      link: '/councils/info',
      logo: '/images/municipalities/logo/logo1.jpg',
    },
    {
      slug: 'Mleiha City',
      img: 'images/municipalities/main/im2.png',
      title: 'Mleiha City Municipality',
      link: '/councils/info',
      logo: '/images/municipalities/logo/logo2.jpg',
    },
    {
      slug: 'Khorfakkan City',
      img: 'images/municipalities/main/im3.png',
      title: 'Khorfakkan City Municipality',
      link: '/councils/info',
      logo: '/images/municipalities/logo/logo3.jpg',
    },
    {
      slug: 'Al-Bataeh City',
      img: 'images/municipalities/main/im4.png',
      title: ' Al-Bataeh City Municipality',
      link: '/councils/info',
      logo: '/images/municipalities/logo/logo4.jpg',
    },
    {
      slug: 'Al Madam City',
      img: 'images/municipalities/main/im5.png',
      title: 'Al Madam City Municipality',
      link: '/councils/info',
      logo: '/images/municipalities/logo/logo5.jpg',
    },
    {
      slug: 'Dibba Al Hisn City Municipality',
      img: 'images/municipalities/main/im6.png',
      title: 'Dibba Al Hisn City Municipality',
      link: '/councils/info',
      logo: '/images/municipalities/logo/logo6.jpg',
    },
    {
      slug: 'Al Dhaid City Municipality',
      img: 'images/municipalities/main/im7.png',
      title: 'Al Dhaid City Municipality',
      link: '/councils/info',
      logo: '/images/municipalities/logo/logo7.jpg',
    },
    {
      slug: 'Kalba City Municipality',
      img: 'images/municipalities/main/im8.png',
      title: 'Kalba City Municipality',
      link: '/councils/info',
      logo: '/images/municipalities/logo/logo8.jpg',
    },
  ]
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { duration: 1.25 } }}
      exit={{ opacity: 0, transition: { duration: 1.25 } }}
      className="relative max-w-8xl m-auto"
    >
      <LeftSideSticky />
      <RightSideSticky />
      <StickyNav start={700} end={1000} />
      <div className="relative  border-2 border-red-400 h-[980px] w-[100%] m-auto">
        <SideMenu visible={visible} setVisible={setVisible} />
        <img
          src="/images/councils/info/hero/hero.png"
          className="w-full h-[750px] object-cover pointer-events-none"
          alt="hero"
        />
        <CommonNav />
        <div className="absolute bottom-[0px] left-1/2 transform -translate-x-1/2 w-[1312px] m-auto ">
          <div className="relative">
            <img src="/images/councils/info/hero/mask.png" alt="" />
            <div className="absolute top-0 py-10 h-[100%] flex flex-col items-center justify-between">
              <p className="text-6xl font-semibold text-white text-center">
                Khorfakkan <br /> Municipality Council
              </p>
              <p className="text-white text-xl	text-center px-20">
                The Executive Council of the Emirate of Sharjah, the supreme
                executive authority of the emirate, was established in October
                1999 with the aim of assisting the ruler in performing his
                duties and exercising his powers, drawing the general policy of
                the emirate, and implementing development plans to raise the
                social and economic standard in the emirat
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* <Footer /> */}
    </motion.div>
  )
}

export default page
