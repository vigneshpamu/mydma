'use client'
import React from 'react'
import { motion } from 'framer-motion'
import HeroSect from '../HeroSect'
import LeftSideSticky from '@/app/components/common/LeftSideSticky'
import RightSideSticky from '@/app/components/common/RightSideSticky'
import StickyNav from '@/app/components/common/StickyNav'
import VisionSect from '../VisionSect'
import MagazineSect from '../MagazineSect'
import InfoSect from '../InfoSect'
import NewsMediaSect from '../NewsMediaSect'
import EventsSect from '../EventsSect'
import FeedbackSect from '../FeedbackSect'
import GovtEntities from '@/app/components/common/GovtEntities'
import Footer from '@/app/components/common/Footer'
import { usePathname } from 'next/navigation'
import { getDictionary } from '@/getDictionary'
import { useRouter } from 'next/router'
const AllHome = async () => {
  const pathname = usePathname()
  console.log(pathname[1] + pathname[2], 'From Home')
  const path = pathname[1] + pathname[2]
  console.log(typeof path)

  const lang = await getDictionary(path)
  console.log(lang)

  const router = useRouter()

  const handleClick = () => {
    // Change the language to Arabic
    const currentPath = router.asPath
    const newPath = currentPath.replace('/en/', '/ar/')

    // Navigate to the new path
    router.push(newPath)
  }
  return (
    <>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1, transition: { duration: 1.25 } }}
        exit={{ opacity: 0, transition: { duration: 1.25 } }}
        className="relative max-w-8xl m-auto overflow-hidden"
      >
        <HeroSect lang={lang} />
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
    </>
  )
}

export default AllHome
