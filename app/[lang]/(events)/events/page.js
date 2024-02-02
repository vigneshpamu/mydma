'use client'
import { Calendar } from '@/components/ui/calendar'
import React, { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import StickyNav from '@/app/components/common/StickyNav'
import LeftSideSticky from '@/app/components/common/LeftSideSticky'
import RightSideSticky from '@/app/components/common/RightSideSticky'
import Footer from '@/app/components/common/Footer'
import MainSect from '@/app/components/pages/events/MainSect'

const Page = () => {
  const eventData = [
    {
      date: '03',
      month: 'JAN',
      event: 'Quis autem vel eum iure reprehenderit qui in ea voluptate',
      img: '/images/home/about/b2.png',
    },
    {
      date: '27',
      month: 'JAN',
      event: 'Quis autem vel eum iure reprehenderit qui in ea voluptate',
      img: '/images/home/about/b1.png',
    },
    {
      date: '10',
      month: 'JAN',
      event: 'Quis autem vel eum iure reprehenderit qui in ea voluptate',
      img: '/images/home/events/img1.png',
    },

    {
      date: '20',
      month: 'JAN',
      event: 'Quis autem vel eum iure reprehenderit qui in ea voluptate',
      img: '/images/home/events/img2.png',
    },
  ]
  function formatDate(dateString) {
    const date = new Date(dateString)
    return date
      .toLocaleDateString('en-GB', { day: '2-digit', month: 'short' })
      .toUpperCase()
  }

  function getEventByDate(date) {
    return eventData.find((event) => event.date + ' ' + event.month === date)
  }

  const [date, setDate] = useState(new Date())
  const [event, setEvent] = useState()
  console.log(date)

  useEffect(() => {
    const FormattedDate = formatDate(date)
    setEvent(getEventByDate(FormattedDate))
  }, [date])
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { duration: 1.25 } }}
      exit={{ opacity: 0, transition: { duration: 1.25 } }}
      className="relative max-w-8xl m-auto overflow-hidden"
    >
      <StickyNav start={0} end={0} />
      {/* <LeftSideSticky />
      <RightSideSticky /> */}
      <MainSect />
      <Footer />
    </motion.div>
  )
}

export default Page
