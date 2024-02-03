'use client'
import { Calendar } from '@/components/ui/calendar'
import React, { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import StickyNav from '@/app/components/common/StickyNav'
import LeftSideSticky from '@/app/components/common/LeftSideSticky'
import RightSideSticky from '@/app/components/common/RightSideSticky'
import Footer from '@/app/components/common/Footer'
import { Skeleton } from '@/components/ui/skeleton'

const MainSect = () => {
  const eventData = [
    {
      date: '03',
      month: 'FEB',
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
      <div className="flex items-center justify-center  px-3 py-20 mt-[50px] sm:mt-[100px] ">
        <div className="flex flex-col items-center  gap-5 sm:gap-0 justify-between sm:flex-row ">
          <Calendar
            mode="single"
            selected={date}
            onSelect={setDate}
            className="rounded-md "
          />
          <div className=" px-3">
            {event?.event ? (
              <div className="relative max-w-[350px] h-[350px] hover:scale-105 transition-all  rounded-lg">
                <img
                  src={event.img}
                  className=" rounded-lg h-full  object-cover"
                  alt=""
                />
                <div className="flex flex-col items-center justify-center bg-white   p-3 px-6 rounded-lg absolute top-1 left-1">
                  <p className="text-3xl font-bold text-customColor lg:text-3xl">
                    {event.date}
                  </p>
                  <p className="text-xl text-customColor lg:text-xl">
                    {event.month}
                  </p>
                </div>
                <div className="absolute bottom-16 left-0 px-5 2md:left-2">
                  <Skeleton className="h-full w-full p-5">
                    <p className="text-xl font-semibold text-black 2lg:text-2xl 2md:text-xl">
                      {/* {event.event} */}
                      Data is Awaited
                    </p>
                  </Skeleton>
                </div>
                <div className="absolute bottom-5 right-4 px-4">
                  <p className="text-xl font-semibold text-white 2md:text-sm">
                    Know More
                  </p>
                </div>
              </div>
            ) : (
              <div className="border-2 w-full  rounded-lg flex items-center justify-center">
                <Skeleton className="h-full w-full p-5">
                  <p className="text-5xl font-bold">No Event</p>
                </Skeleton>
              </div>
            )}
          </div>
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
