'use client'
import React from 'react'
import { motion } from 'framer-motion'
import StickyNav from '@/app/components/common/StickyNav'
import { MdWhatsapp } from 'react-icons/md'
import Footer from '@/app/components/common/Footer'
import HeroSect from '@/app/components/pages/events/info/HeroSect'
import MainSect from '@/app/components/pages/events/info/MainSect'

const page = () => {
  const recentData = [
    {
      title: 'Quis autem vel eum iure reprehenderit.',
      img: '/images/events/info/blog/dm1.png',
      desc: 'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem....',
    },
    {
      title: 'Quis autem vel eum iure reprehenderit.',
      img: '/images/events/info/blog/dm2.png',
      desc: 'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem....',
    },
  ]
  return (
    <>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1, transition: { duration: 1.25 } }}
        exit={{ opacity: 0, transition: { duration: 1.25 } }}
        className="relative max-w-8xl m-auto"
      >
        <StickyNav start={0} end={0} />
        <HeroSect />
        <MainSect />
        <Footer />
      </motion.div>
    </>
  )
}

export default page
