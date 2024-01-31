import Image from 'next/image'
import React from 'react'
import { Navigation, Pagination, Scrollbar, A11y, Autoplay } from 'swiper'
import { Swiper, SwiperSlide, useSwiper } from 'swiper/react'
const NeedSect = () => {
  const needData = [
    {
      id: 1,
      img: '/images/about/need/hero.png',
    },
    {
      id: 2,
      img: '/images/about/need/hero2.png',
    },
  ]
  return (
    <>
      <div className="relative h-[1013px] sm:h-[700px] m-auto">
        <img
          src="/images/about/need/background.png"
          className="w-full h-[814px] sm:h-[500px] object-cover"
          alt=""
        />
        <div className="flex flex-col items-center gap-16 overflow-hidden pt-4 w-[1347px] top-10 absolute left-1/2 transform -translate-x-1/2 m-auto bg-transparent">
          <p className="text-5xl font-bold text-center	2md:text-4xl sm:text-2xl 2xsm:text-lg">
            Meeting the needs of <br /> Present and Future Generations.
          </p>
        </div>
        <div className="w-[1347px] 1xl:w-[90%] m-auto absolute left-1/2 transform -translate-x-1/2 bottom-5">
          <div className="relative">
            <Swiper
              modules={[Autoplay, Navigation, Pagination, Scrollbar, A11y]}
              slidesPerView={1}
              spaceBetween={0}
              pagination
              // navigation
              breakpoints={{}}
              className=""
            >
              {needData.length > 0 &&
                needData.map((item, index) => (
                  <SwiperSlide key={item.id} className="">
                    <img
                      src={item.img}
                      className="w-[1347px] h-[777px] sm:h-[500px] object-cover"
                      alt="hero"
                    />
                    {/* <div className="w-[1347px] h-[777px] sm:h-[500px] object-cover">
                      <Image
                        src={item.img}
                        alt="meeting-img"
                        width={1347}
                        height={777}
                        objectFit="cover"
                        className="pointer-events-none  object-cover"
                      />
                    </div> */}
                  </SwiperSlide>
                ))}
            </Swiper>
            {/* <div className="flex flex-row gap-2 absolute left-1/2 transform -translate-x-1/2 bottom-16 z-10">
              <button className="px-4 py-6 rounded-md bg-white active:scale-95 hover:opacity-95">
                <img src="/images/home/elements/b-larrow.png" alt="" />
              </button>

              <button className="px-4 py-6 rounded-md bg-white active:scale-95 hover:opacity-95">
                <img src="/images/home/elements/b-rarrow.png" alt="" />
              </button>
            </div> */}
          </div>
        </div>
      </div>
    </>
  )
}

export default NeedSect
