'use client'
import React from 'react'
import { motion } from 'framer-motion'
import UpperNav from '@/app/components/common/UpperNav'
import StickyNav from '@/app/components/common/StickyNav'
import { MdWhatsapp } from 'react-icons/md'
import Footer from '@/app/components/common/Footer'
import TitleSect from '@/app/components/pages/magazines/info/TitleSect'
import PDFSect from '@/app/components/pages/magazines/info/PDFSect'
import RightSideSticky from '@/app/components/common/RightSideSticky'
import LeftSideSticky from '@/app/components/common/LeftSideSticky'

const page = () => {
  return (
    <motion.div
      // initial={{ opacity: 0 }}
      // animate={{ opacity: 1, transition: { duration: 1.25 } }}
      // exit={{ opacity: 0, transition: { duration: 1.25 } }}
      className="relative max-w-8xl m-auto overflow-hidden"
    >
      <LeftSideSticky />
      <RightSideSticky />
      <TitleSect />
      <PDFSect />
      {/* <div className="h-[150px] sm:h-[100px] w-full bg-white"></div> */}
      <Footer />
    </motion.div>
  )
}

export default page
