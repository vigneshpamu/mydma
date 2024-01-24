/* eslint-disable @next/next/no-img-element */
import React from 'react'

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
  return (
    <>
      <div className="relative h-[100vh]">
        <img
          src="/images/home/news/background.png"
          className="h-full w-full"
          alt=""
        />
        <div className="flex flex-col gap-20 absolute top-36 left-1/2 transform -translate-x-1/2  w-[1347px] 2xl:w-[1200px] xl:w-[1000px]  m-auto">
          <div className="flex flex-col gap-6">
            <p className="text-5xl">Latest News & Media</p>
            <div className="flex flex-row justify-between items-center">
              <p className="w-[800px] text-xl">
                We offer a wide range of e-Services designed to meet your needs,
                in a simple, smarter and more convenient way.
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
          <div className="flex flex-row justify-between gap-8">
            <div className="relative">
              <div className="w-[600px] 2xl:w-[500px] xl:w-[400px] rounded-lg border-2 border-customColor">
                <img
                  src="/images/home/news/img1.png"
                  alt="Your Image"
                  className="w-[600px] h-[430px] 2xl:w-[500px] xl:w-[400px] shadow-md rounded-xl object-cover"
                />
                <div
                  style={{
                    background:
                      'linear-gradient(to bottom, rgba(0, 0, 0, 0.12) 0%, rgba(0, 0, 0, 0.5) 100%)',
                  }}
                  className="absolute w-[600px] 2xl:w-[500px] xl:w-[400px] xl:h-[435px] rounded-xl inset-0"
                ></div>
              </div>
              <div className="absolute left-10 bottom-10 xl:left-7 flex flex-row items-end gap-16">
                <p className="text-3xl text-white font-semibold w-[400px] xl:w-[350px]">
                  Quis autem vel eum iure reprehenderit qui in ea voluptate....
                </p>
                <div>
                  <img src="/images/home/elements/rarrow.png" alt="" />
                </div>
              </div>
            </div>
            <div className="grid grid-cols-2 w-full gap-8">
              {newsData.map((item) => {
                return (
                  <div
                    key={item.id}
                    className="bg-white rounded-xl border-2 border-customColor"
                  >
                    <img src={item.img} alt="" className="w-full h-[190px]" />
                    <div className="p-3 flex flex-col gap-3">
                      <p className="text-2xl font-semibold xl:text-xl text-customColor">
                        {item.title}
                      </p>
                      <p className="text-xl xl:text-lg">{item.desc}</p>
                    </div>
                  </div>
                )
              })}
            </div>
          </div>
          <button className="border-2 border-customColor w-[190px] rounded-lg bg-white p-2 m-auto">
            View All
          </button>
        </div>
      </div>
    </>
  )
}

export default NewsMediaSect
