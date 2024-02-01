/* eslint-disable @next/next/no-img-element */
import React from 'react'
import { Navigation, Pagination, Scrollbar, A11y, Autoplay } from 'swiper'
import { Swiper, SwiperSlide, useSwiper } from 'swiper/react'
const GovtEntities = () => {
  const entitiesData = [
    {
      id: 1,
      img: '/images/home/govt-entities/img1.png',
    },
    {
      id: 2,
      img: '/images/home/govt-entities/img2.png',
    },
    {
      id: 3,
      img: '/images/home/govt-entities/img3.png',
    },
    {
      id: 4,
      img: '/images/home/govt-entities/img4.png',
    },
    {
      id: 5,
      img: '/images/home/govt-entities/img5.png',
    },
    {
      id: 6,
      img: '/images/home/govt-entities/img6.png',
    },
    {
      id: 7,
      img: '/images/home/govt-entities/img1.png',
    },
    {
      id: 8,
      img: '/images/home/govt-entities/img2.png',
    },
  ]
  return (
    <>
      <div className="relativ e p-5 max-w-[1100px] mx-auto ">
        <div className="flex flex-col text-black gap-5  m-auto">
          <div className="flex flex-col gap-6">
            <p className="text-xl font-bold sm:text-3xl">
              Other Government Entities.
            </p>
            <div className="flex flex-row justify-between items-center">
              {/* <p className="w-[600px] text-xl">
                We offer a wide range of e-Services designed to meet your needs,
                in a simple, smarter and more convenient way.
              </p> */}
              {/* <div className="flex flex-row gap-2">
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
              </div> */}
            </div>
          </div>
          <div>
            <Swiper
              modules={[Autoplay, Navigation, Pagination, Scrollbar, A11y]}
              slidesPerView={6}
              spaceBetween={20}
              // ref={swiperRef}
              breakpoints={{
                300: {
                  slidesPerView: 3,
                  spaceBetween: 10,
                },
                430: {
                  slidesPerView: 3.5,
                  spaceBetween: 10,
                },
                610: {
                  slidesPerView: 4,
                  spaceBetween: 10,
                },
                1000: {
                  slidesPerView: 4,
                  spaceBetween: 10,
                },
                1300: {
                  slidesPerView: 6,
                  spaceBetween: 20,
                },
              }}
              className=""
            >
              {entitiesData.length > 0 &&
                entitiesData.map((item, index) => (
                  <SwiperSlide key={item.id} className="">
                    <img
                      src={item.img}
                      alt=""
                      className="w-[350px] object-cover"
                    />
                  </SwiperSlide>
                ))}
            </Swiper>
          </div>
        </div>
      </div>
    </>
  )
}

export default GovtEntities
