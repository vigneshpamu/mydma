'use client'
import React, { useState } from 'react'
import { motion } from 'framer-motion'
import LeftSideSticky from '@/app/components/common/LeftSideSticky'
import RightSideSticky from '@/app/components/common/RightSideSticky'
import Footer from '@/app/components/common/Footer'
import CommonHero from '@/app/components/common/CommonHero'
import CommonCard from '@/app/components/common/CommonCard'
import StickyNav from '@/app/components/common/StickyNav'
import HeroSectNews from '@/app/components/pages/news/HeroSectNews'
import UpperNav from '@/app/components/common/UpperNav'
const page = () => {
  const mainData = [
    {
      img: '/images/municipalities/main/im1.png',
      title: 'Quis autem vel eum iure reprehenderit qui in ea voluptate.',
      link: '/councils/info',
    },
    {
      img: '/images/municipalities/main/im2.png',
      title: 'Quis autem vel eum iure reprehenderit qui in ea voluptate.',
      link: '/news/info',
    },
    {
      img: '/images/municipalities/main/im3.png',
      title: 'Quis autem vel eum iure reprehenderit qui in ea voluptate.',
      link: '/news/info',
    },
    {
      img: '/images/municipalities/main/im4.png',
      title: 'Quis autem vel eum iure reprehenderit qui in ea voluptate.',
      link: '/news/info',
    },
    {
      img: '/images/municipalities/main/im5.png',
      title: 'Quis autem vel eum iure reprehenderit qui in ea voluptate.',
      link: '/news/info',
    },
    {
      img: '/images/municipalities/main/im6.png',
      title: 'Quis autem vel eum iure reprehenderit qui in ea voluptate.',
      link: '/news/info',
    },
    {
      img: '/images/municipalities/main/im7.png',
      title: 'Quis autem vel eum iure reprehenderit qui in ea voluptate.',
      link: '/news/info',
    },
    {
      img: '/images/municipalities/main/im8.png',
      title: 'Quis autem vel eum iure reprehenderit qui in ea voluptate.',
      link: '/news/info',
    },
  ]
  return (
    <motion.div
      // initial={{ opacity: 0 }}
      // animate={{ opacity: 1, transition: { duration: 1.25 } }}
      // exit={{ opacity: 0, transition: { duration: 1.25 } }}
      className="relative"
    >
      <LeftSideSticky />
      <RightSideSticky />
      {/* <UpperNav /> */}
      {/* <CommonHero
        hero={'/images/news/hero/hero.png'}
        page={'News & Media'}
        desc={`Leadership which Embrace the change`}
      /> */}
      {/* <StickyNav start={700} end={900} /> */}
      <HeroSectNews />
      {/* <CommonCard data={mainData} /> */}
      <Footer />
    </motion.div>
  )
}

export default page
