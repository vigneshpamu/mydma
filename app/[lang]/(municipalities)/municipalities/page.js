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
      img: '/images/municipalities/main/new/img1.jpg',
      title: 'Hamriyah City Municipality',
      link: '/municipalities/info',
      logo: '/images/municipalities/logo/logo1.jpg',
    },
    {
      slug: 'Mleiha City',
      img: '/images/municipalities/main/new/img2.jpg',
      title: 'Mleiha City Municipality',
      link: '/municipalities/info',
      logo: '/images/municipalities/logo/logo2.jpg',
    },
    {
      slug: 'Khorfakkan City',
      img: '/images/municipalities/main/new/img3.jpg',
      title: 'Khorfakkan City Municipality',
      link: '/municipalities/info',
      logo: '/images/municipalities/logo/logo3.jpg',
    },
    {
      slug: 'Al-Bataeh City',
      img: '/images/municipalities/main/new/img4.jpg',
      title: ' Al-Bataeh City Municipality',
      link: '/municipalities/info',
      logo: '/images/municipalities/logo/logo4.jpg',
    },
    {
      slug: 'Al Madam City',
      img: '/images/municipalities/main/new/img5.jpg',
      title: 'Al Madam City Municipality',
      link: '/municipalities/info',
      logo: '/images/municipalities/logo/logo5.jpg',
    },
    {
      slug: 'Dibba Al Hisn City Municipality',
      img: '/images/municipalities/main/new/img6.jpg',
      title: 'Dibba Al Hisn City Municipality',
      link: '/municipalities/info',
      logo: '/images/municipalities/logo/logo6.jpg',
    },
    {
      slug: 'Al Dhaid City Municipality',
      img: '/images/municipalities/main/new/img7.jpg',
      title: 'Al Dhaid City Municipality',
      link: '/municipalities/info',
      logo: '/images/municipalities/logo/logo7.jpg',
    },
    {
      slug: 'Kalba City Municipality',
      img: '/images/municipalities/main/new/img8.jpg',
      title: 'Kalba City Municipality',
      link: '/municipalities/info',
      logo: '/images/municipalities/logo/logo8.jpg',
    },
  ]
  const pathname = usePathname()
  return (
    <motion.div
      // initial={{ opacity: 0 }}
      // animate={{ opacity: 1, transition: { duration: 1.25 } }}
      // exit={{ opacity: 0, transition: { duration: 1.25 } }}
      className="relative max-w-8xl m-auto border-2"
    >
      <LeftSideSticky />
      <RightSideSticky />
      <CommonHero
        hero={'/images/municipalities/hero/hero2.jpg'}
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
