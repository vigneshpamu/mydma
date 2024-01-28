/* eslint-disable @next/next/no-img-element */
'use client'
import React, { useState } from 'react'
import HeroSect from '@/app/components/pages/about/HeroSect'
import MissionSect from '@/app/components/pages/about/MissionSect'
import { motion } from 'framer-motion'
import LeftSideSticky from '@/app/components/common/LeftSideSticky'
import StickyNav from '@/app/components/common/StickyNav'
import RightSideSticky from '@/app/components/common/RightSideSticky'
import ObjectiveSect from '@/app/components/pages/about/ObjectiveSect'
import ChairManMessageSect from '@/app/components/pages/about/ChairManMessageSect'
import OrganisationStructureSect from '@/app/components/pages/about/OrganisationStructureSect'
import { Navigation, Pagination, Scrollbar, A11y, Autoplay } from 'swiper'
import { Swiper, SwiperSlide, useSwiper } from 'swiper/react'
import GovtEntities from '@/app/components/common/GovtEntities'
import Footer from '@/app/components/common/Footer'
import NeedSect from '@/app/components/pages/about/NeedSect'
const page = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { duration: 1.25 } }}
      exit={{ opacity: 0, transition: { duration: 1.25 } }}
      className="relative max-w-8xl m-auto border-2 overflow-hidden"
    >
      <LeftSideSticky />
      <RightSideSticky />
      <HeroSect />
      <MissionSect />
      <StickyNav start={700} end={900} />
      <ObjectiveSect />
      <ChairManMessageSect />
      <OrganisationStructureSect />
      <NeedSect />
      <GovtEntities />
      <Footer />
    </motion.div>
  )
}

export default page
