/* eslint-disable @next/next/no-img-element */
/* eslint-disable react-hooks/rules-of-hooks */
'use client'
import React, { useState } from 'react'
import { motion } from 'framer-motion'
import LeftSideSticky from '@/app/components/common/LeftSideSticky'
import RightSideSticky from '@/app/components/common/RightSideSticky'
import Footer from '@/app/components/common/Footer'
import CommonHero from '@/app/components/common/CommonHero'
import CommonCard from '@/app/components/common/CommonCard'
import StickyNav from '@/app/components/common/StickyNav'
import { usePathname } from 'next/navigation'
const page = () => {
  const mainData = [
    {
      img: '/images/municipalities/main/im1.png',
      title: 'Hamriyah City Municipality',
      link: '/en/municipalities/info',
      logo: '/images/municipalities/logo/logo1.jpg',
    },
    {
      slug: 'Mleiha City',
      img: '/images/municipalities/main/im2.png',
      title: 'Mleiha City Municipality',
      link: '/en/municipalities/info',
      logo: '/images/municipalities/logo/logo2.jpg',
    },
    {
      slug: 'Khorfakkan City',
      img: '/images/municipalities/main/im3.png',
      title: 'Khorfakkan City Municipality',
      link: '/en/municipalities/info',
      logo: '/images/municipalities/logo/logo3.jpg',
    },
    {
      slug: 'Al-Bataeh City',
      img: '/images/municipalities/main/im4.png',
      title: ' Al-Bataeh City Municipality',
      link: '/en/municipalities/info',
      logo: '/images/municipalities/logo/logo4.jpg',
    },
    {
      slug: 'Al Madam City',
      img: '/images/municipalities/main/im5.png',
      title: 'Al Madam City Municipality',
      link: '/en/municipalities/info',
      logo: '/images/municipalities/logo/logo5.jpg',
    },
    {
      slug: 'Dibba Al Hisn City Municipality',
      img: '/images/municipalities/main/im6.png',
      title: 'Dibba Al Hisn City Municipality',
      link: '/en/municipalities/info',
      logo: '/images/municipalities/logo/logo6.jpg',
    },
    {
      slug: 'Al Dhaid City Municipality',
      img: '/images/municipalities/main/im7.png',
      title: 'Al Dhaid City Municipality',
      link: '/en/municipalities/info',
      logo: '/images/municipalities/logo/logo7.jpg',
    },
    {
      slug: 'Kalba City Municipality',
      img: '/images/municipalities/main/im8.png',
      title: 'Kalba City Municipality',
      link: '/en/municipalities/info',
      logo: '/images/municipalities/logo/logo8.jpg',
    },
  ]
  const pathname = usePathname()
  console.log(pathname[1] + pathname[2], 'From Home')
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
        hero={'/images/municipalities/hero/hero.png'}
        page={'Municipalities'}
        desc={`Embrace change, for it brings growth and endless possibilities ahead.`}
      />
      <StickyNav start={700} end={900} />
      <CommonCard data={mainData} />
      <Footer />
    </motion.div>
  )
}

export default page
