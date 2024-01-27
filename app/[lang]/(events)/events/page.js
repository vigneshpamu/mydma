'use client'
import { Calendar } from '@/components/ui/calendar'
import React, { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import StickyNav from '@/app/components/common/StickyNav'
import LeftSideSticky from '@/app/components/common/LeftSideSticky'
import RightSideSticky from '@/app/components/common/RightSideSticky'
import Footer from '@/app/components/common/Footer'

const page = () => {
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
      className="relative max-w-8xl m-auto"
    >
      <StickyNav start={0} end={0} />
      <LeftSideSticky />
      <RightSideSticky />
      <div className="relative h-[700px] mt-[220px]">
        <div className="flex flex-row items-center justify-between absolute w-[1347px] left-1/2 transform -translate-x-1/2 m-auto ">
          <div className="w-[700px]">
            <Calendar
              mode="single"
              selected={date}
              onSelect={setDate}
              className="rounded-md "
            />
          </div>
          {event?.event ? (
            <div className="relative  hover:scale-105 transition-all  rounded-lg">
              <img
                src={event.img}
                className="w-[600px] rounded-lg h-[523px] object-cover"
                alt=""
              />
              <div className="flex flex-col items-center justify-center bg-white p-3 px-6 rounded-lg absolute top-1 left-1">
                <p className="text-5xl font-bold text-customColor">
                  {event.date}
                </p>
                <p className="text-2xl text-customColor">{event.month}</p>
              </div>
              <div className="absolute bottom-24 left-4 px-5">
                <p className="text-3xl font-semibold text-white">
                  {event.event}
                </p>
              </div>
              <div className="absolute bottom-7 right-4 px-4">
                <p className="text-xl font-semibold text-white">Know More</p>
              </div>
            </div>
          ) : (
            <div className="border-2 w-[600px] rounded-lg h-[523px] flex items-center justify-center">
              <p className="text-5xl font-bold">No Event</p>
            </div>
          )}
          {/* <iframe
        allowFullScreen="allowfullscreen"
        scrolling="no"
        className="fp-iframe"
        style={{
          border: '1px solid lightgray',
          width: '100%',
          height: '324px',
        }}
        src="https://heyzine.com/flip-book/43f8efa983.html#page/2"
      /> */}
        </div>
      </div>
      <div>
        <Footer />
      </div>
    </motion.div>
  )
}

export default page
