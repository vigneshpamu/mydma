'use client'
import { Calendar } from '@/components/ui/calendar'
import React, { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import StickyNav from '@/app/components/common/StickyNav'
import LeftSideSticky from '@/app/components/common/LeftSideSticky'
import RightSideSticky from '@/app/components/common/RightSideSticky'
import Footer from '@/app/components/common/Footer'

const MainSect = () => {
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
    <>
      <div className="flex items-center justify-center py-20 mt-[150px] xsm:mt-[40px]">
        <div className="flex flex-row items-center 2md:flex-col 2md:gap-8 justify-between   w-[1347px] 1xl:w-[95%]  ">
          <div className="">
            <Calendar
              mode="single"
              selected={date}
              onSelect={setDate}
              className="rounded-md "
            />
          </div>
          {event?.event ? (
            <div className="relative  2md:max-w-[400px]  hover:scale-105 transition-all  rounded-lg">
              <img
                src={event.img}
                className=" rounded-lg h-[523px] 2lg:h-[450px] lg:h-[380px] object-cover"
                alt=""
              />
              <div className="flex flex-col items-center justify-center bg-white lg:p-2 lg:px-3 p-3 px-6 rounded-lg absolute top-1 left-1">
                <p className="text-5xl font-bold text-customColor lg:text-3xl">
                  {event.date}
                </p>
                <p className="text-2xl text-customColor lg:text-xl">
                  {event.month}
                </p>
              </div>
              <div className="absolute bottom-24 left-4 px-5 2md:left-2">
                <p className="text-3xl font-semibold text-white 2lg:text-2xl 2md:text-xl">
                  {event.event}
                </p>
              </div>
              <div className="absolute bottom-7 right-4 px-4">
                <p className="text-xl font-semibold text-white 2md:text-sm">
                  Know More
                </p>
              </div>
            </div>
          ) : (
            <div className="border-2 w-[600px] rounded-lg flex items-center justify-center">
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
    </>
  )
}

export default MainSect
