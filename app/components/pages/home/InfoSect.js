/* eslint-disable @next/next/no-img-element */
import React, { useRef, useState } from 'react'
import { Navigation, Pagination, Scrollbar, A11y, Autoplay } from 'swiper'
import { Swiper, SwiperSlide, useSwiper } from 'swiper/react'

const InfoSect = () => {
  const aboveSwiper = [
    // {
    //   id: 1,
    //   img: '/images/home/about/b1.png',
    //   topic: 'History',
    //   title: 'History of Sharjah - Emirates Culture, Religion, Way of Life',
    //   desc: 'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. ',
    // },
    {
      id: 2,
      img: '/images/home/about/b2.png',
      topic: 'History Bio',
      title: 'History of Sharjah - Emirates Culture, Religion, Way of Life',
      desc: 'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. ',
    },
  ]
  const [dIndex, setDIndex] = useState(0)

  const swiperRef = useRef(null)

  const goToSlide = (index) => {
    let ind = index % aboveSwiper.length
    console.log(ind)
    if (ind < 0) ind = 0
    if (swiperRef.current) {
      swiperRef.current.swiper.slideTo(ind)
    }
    setDIndex(ind)
  }
  let swiper = null
  const onSlideChange = () => {
    if (swiper) {
      console.log('Current Slide Index:', swiper.activeIndex)
      setDIndex(swiper.activeIndex)
    }
  }

  return (
    <>
      <div className="relative pb-5 h-[900px] lg:h-[700px] sm:h-[800px]  my-main">
        <Swiper
          modules={[Autoplay, Navigation, Pagination, Scrollbar, A11y]}
          slidesPerView={1}
          spaceBetween={0}
          onSwiper={(swiperInstance) => {
            swiper = swiperInstance
          }}
          onSlideChange={onSlideChange}
          ref={swiperRef}
          breakpoints={
            {
              // 300: {
              //   slidesPerView: 1,
              //   spaceBetween: 0,
              // },
              // 430: {
              //   slidesPerView: 1,
              //   spaceBetween: 0,
              // },
              // 610: {
              //   slidesPerView: 1,
              //   spaceBetween: 0,
              // },
              // 800: {
              //   slidesPerView: 1,
              //   spaceBetween: 0,
              // },
              // 1000: {
              //   slidesPerView: 1,
              //   spaceBetween: 0,
              // },
            }
          }
          className=""
        >
          {aboveSwiper.length > 0 &&
            aboveSwiper.map((item, index) => (
              <SwiperSlide key={item.id} className="">
                <img
                  src={item.img}
                  alt=""
                  className="h-[900px] lg:h-[700px] sm:h-[800px] w-full  object-cover"
                />
              </SwiperSlide>
            ))}
        </Swiper>
        <div className="flex flex-col gap-12 absolute top-36 left-1/2 transform -translate-x-1/2  w-[1347px] 2xl:w-[1200px] xl:w-[1000px] lg:w-[800px] 2md:top-14 sm:top-24 2md:w-[600px] sm:w-[90%] sm:left-[320px] lg:left-[45%] 2md:left-[50%] xsm:left-[55%] m-auto z-10">
          <div className="flex flex-row items-center gap-5">
            <p className="text-2xl text-white ">{aboveSwiper[dIndex].topic}</p>
            <div className="w-[110px] h-[4px] bg-gray-100 rounded-sm"></div>
          </div>
          <p className="text-6xl text-white font-semibold w-[1000px] leading-tight lg:text-3xl lg:w-[60%] xsm:w-[90%] xsm:text-2xl">
            {aboveSwiper[dIndex].title}
          </p>
          <p className="text-white w-[900px] text-2xl tracking-wide lg:text-lg lg:w-[600px] sm:text-sm sm:w-[80%]">
            {/* {aboveSwiper[dIndex].desc} */}
            Data is Awaited
          </p>
        </div>
        {/* <div className="absolute bottom-20 right-28 flex flex-row gap-2 z-10">
          Previous
          <button
            className="border-2 p-6 px-3 bg-white hover:opacity-90 active:scale-95 transition-all 2md:p-4 rounded-lg shadow-lg"
            onClick={() => goToSlide(dIndex - 1)}
          >
            <img
              src="/images/home/elements/b-larrow.png"
              className="2md:w-[80%] object-cover"
              alt=""
            />
          </button>
          Next
          <button
            className="border-2 p-6 px-3 bg-white hover:opacity-90 active:scale-95 transition-all 2md:p-4  rounded-lg shadow-lg"
            onClick={() => goToSlide(dIndex + 1)}
          >
            <img
              src="/images/home/elements/b-rarrow.png"
              className="2md:w-[80%] object-cover"
              alt=""
            />
          </button>
        </div> */}
      </div>
    </>
  )
}

export default InfoSect
