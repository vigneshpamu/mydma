import React from 'react'
import { Navigation, Pagination, Scrollbar, A11y, Autoplay } from 'swiper'
import { Swiper, SwiperSlide, useSwiper } from 'swiper/react'
const AwardsSect = ({ data }) => {
  return (
    <>
      <div className="relative h-[400px] bg-customColor">
        <div className="flex flex-col gap-3 absolute py-12 left-1/2 transform -translate-x-1/2 w-[1347px] m-auto">
          <p className="text-3xl font-semibold text-white">
            Awards & Recognition
          </p>
          <div className="flex flex-row justify-between items-center">
            {/* <p className="text-xl text-white">
              Khorfakkan municipality won some awards and reorganization in the
              past
            </p> */}
            <div className="flex flex-row gap-3">
              <button className="p-3 py-5 bg-white rounded-md">
                <img src="/images/home/elements/b-larrow.png" alt="" />
              </button>
              <button className="p-3 py-5 bg-white rounded-md">
                <img src="/images/home/elements/b-rarrow.png" alt="" />
              </button>
            </div>
          </div>
          <div className="w-[900px] mt-5">
            <Swiper
              modules={[Autoplay, Navigation, Pagination, Scrollbar, A11y]}
              slidesPerView={3}
              spaceBetween={10}
              pagination
              // navigation
              breakpoints={{}}
              className=""
            >
              {data?.awards.map((item, index) => (
                <SwiperSlide key={index} className="">
                  <img src={item.img} className=" object-cover" alt="hero" />
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>
      </div>
    </>
  )
}

export default AwardsSect
