'use client'
/* eslint-disable @next/next/no-img-element */
import React, { Suspense, useEffect, useState } from 'react'
import { Skeleton } from '@/components/ui/skeleton'
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
import { usePathname, useRouter } from 'next/navigation'
import { getDictionary } from '@/getDictionary'
import AllHome from '@/app/components/pages/home/home/AllHome'

const Home_1 = () => {
  const pathname = usePathname()
  const [langData, setLangData] = useState()
  console.log(pathname[1] + pathname[2], 'From Home')
  const path = pathname[1] + pathname[2]
  const router = useRouter()

  const handleClick = () => {
    // Change the language to Arabic
    const currentPath = router.asPath
    const newPath = currentPath.replace('/en/', '/ar/')

    // Navigate to the new path
    router.push(newPath)
  }
  useEffect(() => {
    const pathname = router.pathname
    console.log(pathname)
    // const path = pathname[1] + pathname[2]

    getDictionary(path).then((result) => {
      setLangData(result)
    })
  }, [pathname])
  console.log(langData)

  // console.log(params, 'From Home')
  return (
    <motion.div
      // initial={{ opacity: 0 }}
      // animate={{ opacity: 1, transition: { duration: 1.25 } }}
      // exit={{ opacity: 0, transition: { duration: 1.25 } }}
      className=""
    >
      <HeroSect lang={langData} />
      <LeftSideSticky />
      <RightSideSticky />
      <StickyNav start={600} end={800} />
      <VisionSect />

      <NewsMediaSect />
      {/* <EventsSect /> */}
      <MagazineSect />
      {/* <InfoSect /> */}
      <FeedbackSect />
      <GovtEntities />
      <Footer />
    </motion.div>
  )
}

export default Home_1
