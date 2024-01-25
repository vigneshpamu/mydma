'use client'
/* eslint-disable @next/next/no-img-element */
import React, { useEffect, useRef, useState } from 'react'

import HeroSect from '@/app/components/pages/home/HeroSect'
import LeftSideSticky from '@/app/components/common/LeftSideSticky'
import StickyNav from '@/app/components/common/StickyNav'
import VisionSect from '@/app/components/pages/home/VisionSect'
import MagazineSect from '@/app/components/pages/home/MagazineSect'
import InfoSect from '@/app/components/pages/home/InfoSect'
import NewsMediaSect from '@/app/components/pages/home/NewsMediaSect'
import EventsSect from '@/app/components/pages/home/EventsSect'
import FeedbackSect from '@/app/components/pages/home/FeedbackSect'
import GovtEntities from '@/app/components/common/GovtEntities'
import Link from 'next/link'
import Footer from '@/app/components/common/Footer'
import { motion } from 'framer-motion'
import RightSideSticky from '@/app/components/common/RightSideSticky'

const Home_1 = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { duration: 1.25 } }}
      exit={{ opacity: 0, transition: { duration: 1.25 } }}
      className="relative max-w-8xl m-auto overflow-hidden"
    >
      <HeroSect />
      <LeftSideSticky />
      <RightSideSticky />
      <StickyNav start={910} end={1200} />
      <VisionSect />
      <MagazineSect />
      <InfoSect />
      <NewsMediaSect />
      <EventsSect />
      <FeedbackSect />
      <GovtEntities />
      <Footer />
    </motion.div>
  )
}

export default Home_1
