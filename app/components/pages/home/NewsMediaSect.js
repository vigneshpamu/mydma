/* eslint-disable @next/next/no-img-element */
import Link from 'next/link'
import React, { useEffect, useState } from 'react'
import { Navigation, Pagination, Scrollbar, A11y, Autoplay } from 'swiper'
import { Swiper, SwiperSlide, useSwiper } from 'swiper/react'
import { usePathname } from 'next/navigation'
import { useRouter } from 'next/navigation'
import { Skeleton } from '@/components/ui/skeleton'
import Image from 'next/image'
const NewsMediaSect = () => {
  const newsData = [
    {
      id: 0,
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
    {
      id: 1,
      img: '/images/home/news/img1.png',
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
      <div className="p-5  py-10 w-fu ll  min-h-full">
        {/* <img
          src="/images/home/news/background.png"
          className="h-full w-full"
          alt=""
        /> */}
        <div className="flex flex-col  max-w-[1100px]   gap-10 mx-auto !z-10">
          <div className="flex flex-row gap-3 items-center ">
            <p className="text-lg  font-semibold px-2">Latest News & Media</p>
            <div className="w-[100px] bg-amber-600 h-[5px] rounded-lg"></div>
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
            slidesPerView={3}
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
              400: {
                slidesPerView: 1.35,
                spaceBetween: 20,
              },
              500: {
                slidesPerView: 2,
                spaceBetween: 20,
              },
              658: {
                slidesPerView: 2.15,
                spaceBetween: 10,
              },
              // 768: {
              //   slidesPerView: 2.8,
              //   spaceBetween: 20,
              // },
              968: {
                slidesPerView: 3,
                spaceBetween: 20,
              },
            }}
            // className="max-w-[330px] sm:w-[600px]  md:w-[700px] lg:min-w-[1100px]"
            className="w-full"
          >
            {/* <SwiperSlide className="relative">
              <Link
                href={`${par}/news/info?=name=Quis autem vel eum iure reprehenderit qui in ea
                    voluptate`}
              >
                <div className=" rounded-lg border-2 border-customColor">
                  <img
                    src="/images/home/news/img1.png"
                    alt="Your Image"
                    className="w-full h-[350px] shadow-md rounded-xl object-cover"
                  />
                  
                  <div
                    style={{
                      background:
                        'linear-gradient(to bottom, rgba(0, 0, 0, 0.12) 0%, rgba(0, 0, 0, 0.5) 100%)',
                    }}
                    className="absolute rounded-xl inset-0"
                  ></div>
                </div>
                <div className="absolute left-5 bottom-10 xl:left-7 flex flex-row  items-end gap-16">
                  <Skeleton className="w-full px-3 h-full rounded-lg">
                    <p className="text-xl text-customColor font-semibold sm:text-xl">
                      Quis autem vel eum iure reprehenderit qui in ea
                    voluptate....
                      Data is Awaited
                    </p>
                  </Skeleton>
                  <div>
                    <img
                      src="/images/home/elements/rarrow.png"
                      className="2md:hidden"
                      alt=""
                    />
                  </div>
                </div>
              </Link>
            </SwiperSlide> */}
            <div className="">
              {newsData.map((item) => {
                return (
                  <SwiperSlide key={item.id} className="">
                    <Link href={`${par}/news/info?=name=${item.title}`}>
                      <div className="bg-white h-[350px] rounded-xl border-2 border-customColor">
                        {/* <img
                          src={item.img}
                          alt=""
                          className="w-full h-[190px]"
                        /> */}
                        <Image
                          src={item.img}
                          alt="hero"
                          height={100}
                          width={500}
                          // layout="fill"
                          objectFit="cover"
                          className="w-full h-[190px] object-cover"
                        />
                        <div className="p-3 flex flex-col gap-3">
                          <Skeleton className="w-full px-3 h-full rounded-lg">
                            <p className="text-2xl font-semibold xl:text-xl  text-customColor">
                              {/* {item.title} */}
                              Data is Awaited
                            </p>
                          </Skeleton>
                          {/* <p className="text-xl xl:text-lg xsm:text-sm">
                            {item.desc}
                          </p> */}
                          <Skeleton className="w-full px-3 h-full rounded-lg">
                            <p className="h-[80px]">Data is Awaited</p>
                          </Skeleton>
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
