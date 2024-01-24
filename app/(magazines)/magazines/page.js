'use client'
import React from 'react'
import { motion } from 'framer-motion'
import CommonNav from '@/app/components/common/CommonNav'
import StickyNav from '@/app/components/common/StickyNav'
import Footer from '@/app/components/common/Footer'
import LeftSideSticky from '@/app/components/common/LeftSideSticky'
import RightSideSticky from '@/app/components/common/RightSideSticky'

const page = () => {
  const magazineCard = [
    {
      id: 1,
      title: 'DMA Magazine 23',
      desc: '02 Dec 23',
      img: '/images/home/magazine/1.png',
      link: '/',
    },
    {
      id: 2,
      title: 'DMA Magazine 22',
      desc: '02 Dec 22',
      img: '/images/home/magazine/2.png',
      link: '/',
    },
    {
      id: 3,
      title: 'DMA Magazine 21',
      desc: '02 Dec 21',
      img: '/images/home/magazine/3.png',
      link: '/',
    },
    {
      id: 4,
      title: 'DMA Magazine 20',
      desc: '02 Dec 20',
      img: '/images/home/magazine/4.png',
      link: '/',
    },
    {
      id: 5,
      title: 'DMA Magazine 20',
      desc: '02 Dec 20',
      img: '/images/home/magazine/5.png',
      link: '/',
    },
  ]

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { duration: 1.25 } }}
      exit={{ opacity: 0, transition: { duration: 1.25 } }}
      className="relative max-w-8xl m-auto "
    >
      <LeftSideSticky />
      <RightSideSticky />
      <div className="relative h-[1476px] w-[100%] m-auto">
        {/* <CommonNav /> */}
        <StickyNav start={0} end={0} />
        <img
          src="/images/magazine/hero/hero.png"
          className="w-full h-[750px] object-cover pointer-events-none"
          alt="hero"
        />
        <div className="flex flex-col gap-3 items-center justify-center w-[1347px] absolute top-[400px] left-1/2 transform -translate-x-1/2 m-auto">
          <p className="text-2xl font-bold">Magazine</p>
          <p className="text-5xl font-bold text-center w-[50%]">
            Check out our magazines, Know Sharjah more...
          </p>
        </div>
        <div className="flex flex-col items-center justify-center w-[1347px] absolute top-[600px] left-1/2 transform -translate-x-1/2 m-auto">
          <div className="grid grid-cols-4 gap-5 mt-10 xl:grid-cols-4">
            {magazineCard.map((item) => {
              return (
                <div
                  key={item.id}
                  className="flex flex-col gap-4 shadow-lg rounded-2xl p-2 h-full transform hover:scale-105 transition-transform duration-300 cursor-pointer"
                >
                  <div>
                    <img src={item.img} alt="" />
                  </div>
                  <div className="flex flex-col gap-4 px-2">
                    <div>
                      <p className="text-xl font-semibold">{item.title}</p>
                      <p className="text-gray-400">Published on: {item.desc}</p>
                    </div>
                    <div className="flex flex-row justify-between">
                      <p className="text-customColor">View now</p>
                      <img src="/images/home/elements/rarrow.png" alt="" />
                    </div>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </div>
      <Footer />
    </motion.div>
  )
}

export default page
