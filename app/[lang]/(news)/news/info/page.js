'use client'
import React from 'react'
import { motion } from 'framer-motion'
import HeroSect from '@/app/components/pages/news/info/HeroSect'
import MainSect from '@/app/components/pages/news/info/MainSect'
import Footer from '@/app/components/common/Footer'
import StickyNav from '@/app/components/common/StickyNav'
const page = () => {
  return (
    <motion.div
      // initial={{ opacity: 0 }}
      // animate={{ opacity: 1, transition: { duration: 1.25 } }}
      // exit={{ opacity: 0, transition: { duration: 1.25 } }}
      className="relative max-w-8xl m-auto overflow-hidden"
    >
      <StickyNav start={0} end={0} />
      <HeroSect />
      <MainSect />
      <Footer />
    </motion.div>
  )
}

export default page
