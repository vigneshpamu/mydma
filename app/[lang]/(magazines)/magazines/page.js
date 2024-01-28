'use client'
import React from 'react'
import { motion } from 'framer-motion'
import CommonNav from '@/app/components/common/CommonNav'
import StickyNav from '@/app/components/common/StickyNav'
import Footer from '@/app/components/common/Footer'
import LeftSideSticky from '@/app/components/common/LeftSideSticky'
import RightSideSticky from '@/app/components/common/RightSideSticky'
import Link from 'next/link'
import HeroSect from '@/app/components/pages/magazines/HeroSect'

const page = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { duration: 1.25 } }}
      exit={{ opacity: 0, transition: { duration: 1.25 } }}
      className="relative max-w-8xl m-auto overflow-hidden"
    >
      <LeftSideSticky />
      <RightSideSticky />
      <HeroSect />
      <Footer />
    </motion.div>
  )
}

export default page
