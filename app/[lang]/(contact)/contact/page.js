'use client'
import React, { useState } from 'react'
import { motion } from 'framer-motion'
import LeftSideSticky from '@/app/components/common/LeftSideSticky'
import RightSideSticky from '@/app/components/common/RightSideSticky'
import HeroSect from '@/app/components/pages/contact/HeroSect'
import SideMenu from '@/app/components/common/SideMenu'
import Link from 'next/link'
import Footer from '@/app/components/common/Footer'
import UpperNav from '@/app/components/common/UpperNav'
import MainSect from '@/app/components/pages/contact/MainSect'
const Page = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { duration: 1.25 } }}
      exit={{ opacity: 0, transition: { duration: 1.25 } }}
      className="relative max-w-8xl m-auto border-2 overflow-hidden"
    >
      {/* <LeftSideSticky />
      <RightSideSticky /> */}
      <HeroSect />
      <MainSect />
      <Footer />
    </motion.div>
  )
}

export default Page
