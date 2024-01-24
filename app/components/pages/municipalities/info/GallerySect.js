import React from 'react'
import { Navigation, Pagination, Scrollbar, A11y, Autoplay } from 'swiper'
import { Swiper, SwiperSlide, useSwiper } from 'swiper/react'
const GallerySect = ({ data }) => {
  return (
    <>
      <div className="relative py-20 h-[800px]">
        <div className="absolute left-1/2 transform -translate-x-1/2 w-[1347px] m-auto ">
          <div className="w-[900px] flex flex-col gap-7">
            <div className="flex flex-col gap-3">
              <p className="text-3xl font-semibold">Gallery</p>
              <div className="flex flex-row justify-between">
                <p className="text-xl">{data?.title} image gallery</p>
                <div className="flex flex-row gap-3">
                  <button className="rounded-md p-2 py-3 active:scale-95 bg-customColor">
                    <img src="/images/home/elements/w-larrow1.png" alt="" />
                  </button>
                  <button className="rounded-md p-2  py-3 active:scale-95 bg-customColor">
                    <img src="/images/home/elements/w-rarrow2.png" alt="" />
                  </button>
                </div>
              </div>
            </div>
            <div>
              <Swiper
                modules={[Autoplay, Navigation, Pagination, Scrollbar, A11y]}
                slidesPerView={1}
                spaceBetween={10}
                pagination
                // navigation
                breakpoints={{}}
                className=""
              >
                {data?.landmarks.map((item, index) => (
                  <SwiperSlide key={index} className="">
                    <img
                      src={item.img}
                      className="w-[868px] h-[450px] object-cover"
                      alt="hero"
                    />
                  </SwiperSlide>
                ))}
              </Swiper>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default GallerySect
