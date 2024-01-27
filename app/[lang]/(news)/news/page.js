'use client'
import React, { useState } from 'react'
import { motion } from 'framer-motion'
import LeftSideSticky from '@/app/components/common/LeftSideSticky'
import RightSideSticky from '@/app/components/common/RightSideSticky'
import Footer from '@/app/components/common/Footer'
import CommonHero from '@/app/components/common/CommonHero'
import CommonCard from '@/app/components/common/CommonCard'
import StickyNav from '@/app/components/common/StickyNav'
const page = () => {
  const mainData = [
    {
      img: '/images/municipalities/main/im1.png',
      title: 'Hamriyah City Municipality',
      link: '/councils/info',
    },
    {
      img: '/images/municipalities/main/im2.png',
      title: 'Municipality of Mleiha City',
      link: '/news/info',
    },
    {
      img: '/images/municipalities/main/im3.png',
      title: 'Municipality of Khorfakkan City',
      link: '/news/info',
    },
    {
      img: '/images/municipalities/main/im4.png',
      title: 'Municipality of Al-Bataeh City',
      link: '/news/info',
    },
    {
      img: '/images/municipalities/main/im5.png',
      title: 'Municipality of Al Madam City',
      link: '/news/info',
    },
    {
      img: '/images/municipalities/main/im6.png',
      title: 'Dibba Al Hisn City Municipality',
      link: '/news/info',
    },
    {
      img: '/images/municipalities/main/im7.png',
      title: 'Al Dhaid City Municipality',
      link: '/news/info',
    },
    {
      img: '/images/municipalities/main/im8.png',
      title: 'Kalba City Municipality',
      link: '/news/info',
    },
  ]
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { duration: 1.25 } }}
      exit={{ opacity: 0, transition: { duration: 1.25 } }}
      className="relative max-w-8xl m-auto border-2"
    >
      <LeftSideSticky />
      <RightSideSticky />
      <CommonHero
        hero={'/images/news/hero/hero.png'}
        page={'News & Media'}
        desc={`Leadership which Embrace the change`}
      />
      <StickyNav start={700} end={900} />
      <CommonCard data={mainData} />
      <Footer />
    </motion.div>
  )
}

export default page
