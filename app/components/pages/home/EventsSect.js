/* eslint-disable @next/next/no-img-element */
import React from 'react'
import { Navigation, Pagination, Scrollbar, A11y, Autoplay } from 'swiper'
import { Swiper, SwiperSlide, useSwiper } from 'swiper/react'
const EventsSect = () => {
  const eventsData = [
    {
      id: 1,
      img: '/images/home/events/img1.png',
      date: '03',
      month: 'OCT',
      title: 'Quis autem vel eum iure reprehenderit qui in ea voluptate....',
    },
    {
      id: 2,
      img: '/images/home/events/img2.png',
      date: '25',
      month: 'MAR',
      title: 'Quis autem vel eum iure reprehenderit qui in ea voluptate....',
    },
    {
      id: 3,
      img: '/images/home/events/img3.png',
      date: '03',
      month: 'FEB',
      title: 'Quis autem vel eum iure reprehenderit qui in ea voluptate....',
    },
  ]

  return (
    <>
      <div className="relative h-[1000px] xl:h-[900px] lg:h-[730px]">
        <img
          src="/images/home/events/background.png"
          className="w-full h-full"
          alt=""
        />
        <div className="flex flex-col text-white gap-20 absolute top-36 left-1/2 transform -translate-x-1/2  w-[1347px] 2xl:w-[1200px] xl:w-[1000px] lg:w-[800px] 2md:w-[600px] sm:w-[90%] xl:top-12 m-auto">
          <div className="flex flex-col gap-6">
            <p className="text-5xl sm:text-3xl">Activities & Events</p>
            <div className="flex flex-row justify-between items-center">
              <p className="w-[600px] text-xl sm:text-sm sm:w-[60%]">
                Sed ut perspiciatis unde omnis iste natus error sit voluptatem
                accusantium doloremque laudantium, totam rem aperiam.
              </p>
              <div className="flex flex-row gap-2">
                {/* Previous */}
                <button
                  className="border-2 p-4 px-3 bg-white hover:opacity-90 active:scale-95 transition-all rounded-lg shadow-lg"
                  // onClick={() => goToSlide(dIndex - 1)}
                >
                  <img
                    src="/images/home/elements/b-larrow.png"
                    className="w-[21px] h-[9px] object-cover"
                    alt=""
                  />
                </button>
                {/* Next */}
                <button
                  className="border-2 p-4 px-3 bg-white hover:opacity-90 active:scale-95 transition-all rounded-lg shadow-lg"
                  // onClick={() => goToSlide(dIndex + 1)}
                >
                  <img
                    src="/images/home/elements/b-rarrow.png"
                    className="w-[21px] h-[9px] object-cover"
                    alt=""
                  />
                </button>
              </div>
            </div>
          </div>
          <Swiper
            modules={[Autoplay, Navigation, Pagination, Scrollbar, A11y]}
            slidesPerView={3}
            spaceBetween={20}
            navigation
            // ref={swiperRef}
            breakpoints={{
              // 300: {
              //   slidesPerView: 1,
              //   spaceBetween: 0,
              // },
              430: {
                slidesPerView: 2,
                spaceBetween: 20,
              },
              610: {
                slidesPerView: 2,
                spaceBetween: 20,
              },
              1000: {
                slidesPerView: 3,
                spaceBetween: 10,
              },
              1300: {
                slidesPerView: 3,
                spaceBetween: 20,
              },
            }}
            className="w-[1200px] 2xl:w-[1000px] lg:w-[800px] 2md:w-[600px] sm:w-[90%]"
          >
            {eventsData.map((item) => {
              return (
                <SwiperSlide key={item.id} className="">
                  <div className="relative cursor-pointer ">
                    <div className=" ">
                      <img
                        src={item.img}
                        alt="Your Image"
                        className="w-[360px] h-auto shadow-md object-cover rounded-xl"
                      />
                      {/* <div
                          style={{
                            background:
                              'linear-gradient(to bottom, rgba(0, 0, 0, 0.12) 50%, rgba(0, 0, 0, 0.5) 100%)',
                          }}
                          className="absolute inset-0 rounded-xl object-cover"
                        ></div> */}
                    </div>
                    <div className="absolute left-7 bottom-7 flex flex-row items-end gap-16 xl:left-5 xl:bottom-10">
                      <p className="text-3xl text-white font-semibold  2xl:text-2xl xl:text-xl xl:w-[70%] lg:text-sm">
                        Quis autem vel eum iure reprehenderit qui in ea
                        voluptate....
                      </p>
                    </div>
                    <div className="flex flex-col px-4 py-2 items-center justify-center absolute top-2 left-2 rounded-md bg-white">
                      <p className="text-customColor text-4xl font-semibold">
                        {item.date}
                      </p>
                      <p className="text-customColor mt-[-5px]">{item.month}</p>
                    </div>
                  </div>
                </SwiperSlide>
              )
            })}
          </Swiper>
          <button className="border-2 text-black border-customColor w-[190px] rounded-lg bg-white p-2 m-auto">
            View All
          </button>
        </div>
      </div>
    </>
  )
}

export default EventsSect
