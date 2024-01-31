/* eslint-disable @next/next/no-img-element */
import Link from 'next/link'
import React, { useEffect, useState } from 'react'
import { Navigation, Pagination, Scrollbar, A11y, Autoplay } from 'swiper'
import { Swiper, SwiperSlide, useSwiper } from 'swiper/react'
import { usePathname } from 'next/navigation'
import { useRouter } from 'next/navigation'
const NewsMediaSect = () => {
  const newsData = [
    {
      id: 1,
      img: '/images/home/news/img1.png',
      title: 'Quis autem vel eum iure reprehenderit.',
      desc: 'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem....',
    },
    {
      id: 2,
      img: '/images/home/news/img2.png',
      title: 'Quis autem vel eum iure reprehenderit.',
      desc: 'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem....',
    },
  ]
  const router = useRouter()
  const pathname = usePathname()
  const [par, setPar] = useState('')

  useEffect(() => {
    const path = pathname[1] + pathname[2]
    setPar(path)
  }, [])
  return (
    <>
      <div className="relative h-[1000px] lg:h-[900px] 2md:h-[850px]">
        <img
          src="/images/home/news/background.png"
          className="h-full w-full"
          alt=""
        />
        <div className="flex flex-col gap-20 absolute top-36 left-1/2 transform -translate-x-1/2  w-[1347px] 2xl:w-[1200px] xl:w-[1000px] lg:w-[800px] 2md:w-[600px] sm:w-[90%] lg:top-10  m-auto">
          <div className="flex flex-col gap-6">
            <p className="text-5xl sm:text-3xl">Latest News & Media</p>
            {/* <div className="flex flex-row justify-between items-center">
              <p className="w-[800px] text-xl 2md:text-lg 2md:w-[400px] sm:text-sm ">
                We offer a wide range of e-Services designed to meet your needs,
                in a simple, smarter and more convenient way.
              </p>
              <div className="flex flex-row gap-2">
                Previous
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
                Next
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
            </div> */}
          </div>
          <Swiper
            modules={[Autoplay, Navigation, Pagination, Scrollbar, A11y]}
            slidesPerView={2.8}
            spaceBetween={20}
            navigation
            // ref={swiperRef}
            breakpoints={{
              // 300: {
              //   slidesPerView: 1,
              //   spaceBetween: 0,
              // },
              330: {
                slidesPerView: 1,
                spaceBetween: 10,
              },
              420: {
                slidesPerView: 1.25,
                spaceBetween: 20,
              },
              640: {
                slidesPerView: 1.9,
                spaceBetween: 20,
              },
              1000: {
                slidesPerView: 2.5,
                spaceBetween: 10,
              },
              1300: {
                slidesPerView: 2.8,
                spaceBetween: 20,
              },
            }}
            className="w-[1100px] 2xl:w-[1000px] lg:w-[800px] 2md:w-[600px] sm:w-[90%]"
          >
            <SwiperSlide className="relative">
              <Link
                href={`${par}/news/info?=name=Quis autem vel eum iure reprehenderit qui in ea
                    voluptate`}
              >
                <div className=" rounded-lg border-2 border-customColor">
                  <img
                    src="/images/home/news/img1.png"
                    alt="Your Image"
                    className="w-full h-[400px] shadow-md rounded-xl object-cover"
                  />
                  <div
                    style={{
                      background:
                        'linear-gradient(to bottom, rgba(0, 0, 0, 0.12) 0%, rgba(0, 0, 0, 0.5) 100%)',
                    }}
                    className="absolute rounded-xl inset-0"
                  ></div>
                </div>
                <div className="absolute left-5 bottom-10 xl:left-7 flex flex-row sm:left-6  items-end gap-16 2md:left-3">
                  <p className="text-2xl text-white font-semibold 2xl:text-2xl 2md:text-xl sm:text-xl">
                    {/* Quis autem vel eum iure reprehenderit qui in ea
                    voluptate.... */}
                    Data is Awaited
                  </p>
                  <div>
                    <img
                      src="/images/home/elements/rarrow.png"
                      className="2md:hidden"
                      alt=""
                    />
                  </div>
                </div>
              </Link>
            </SwiperSlide>
            <div className="">
              {newsData.map((item) => {
                return (
                  <SwiperSlide key={item.id} className="">
                    <Link href={`${par}/news/info?=name=${item.title}`}>
                      <div className="bg-white h-[400px] max-w-[370px] rounded-xl border-2 border-customColor">
                        <img
                          src={item.img}
                          alt=""
                          className="w-full h-[190px]"
                        />
                        <div className="p-3 flex flex-col gap-3">
                          <p className="text-2xl font-semibold xl:text-xl  text-customColor">
                            {/* {item.title} */}
                            Data is Awaited
                          </p>
                          {/* <p className="text-xl xl:text-lg xsm:text-sm">
                            {item.desc}
                          </p> */}
                          <p>Data is Awaited</p>
                        </div>
                      </div>
                    </Link>
                  </SwiperSlide>
                )
              })}
            </div>
          </Swiper>
          <Link href={`/${par}/news`}>
            <div className="border-2 text-center border-customColor w-[190px] rounded-lg bg-white p-2 m-auto">
              View All
            </div>
          </Link>
        </div>
      </div>
    </>
  )
}

export default NewsMediaSect
