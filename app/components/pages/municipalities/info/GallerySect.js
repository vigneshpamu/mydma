import React, { useEffect, useState } from 'react'
import { Navigation, Pagination, Scrollbar, A11y, Autoplay } from 'swiper'
import { Swiper, SwiperSlide, useSwiper } from 'swiper/react'
const GallerySect = ({ data }) => {
  const [galleryHeight, setGalleryHeight] = useState('relative py-20 h-[800px]')

  useEffect(() => {
    if (data?.landmarks?.length === 0) {
      const height = 'mt-10 h-[200px]'
      setGalleryHeight(height)
    }
  }, [data])
  return (
    <>
      <div className={`${galleryHeight}`}>
        <div className="absolute left-1/2 transform -translate-x-1/2 w-[1347px] 1xl:w-[90%] m-auto ">
          <div className="w-[900px] lg:w-[95%] flex flex-col gap-7">
            <div className="flex flex-col gap-3">
              <p className="text-3xl font-semibold sm:text-[25px]">Gallery</p>
              <div className="flex flex-row justify-between">
                <p className="text-xl sm:text-sm sm:w-[80%]">
                  {data?.title} image gallery
                </p>
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
