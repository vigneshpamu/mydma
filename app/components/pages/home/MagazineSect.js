/* eslint-disable @next/next/no-img-element */
import React from 'react'

const MagazineSect = () => {
  const magazineCard = [
    {
      id: 1,
      title: 'DMA Magazine 23',
      desc: '02 Dec 23',
      img: '/images/home/magazine/1.png',
      link: '/',
    },
    {
      id: 2,
      title: 'DMA Magazine 22',
      desc: '02 Dec 22',
      img: '/images/home/magazine/2.png',
      link: '/',
    },
    {
      id: 3,
      title: 'DMA Magazine 21',
      desc: '02 Dec 21',
      img: '/images/home/magazine/3.png',
      link: '/',
    },
    {
      id: 4,
      title: 'DMA Magazine 20',
      desc: '02 Dec 20',
      img: '/images/home/magazine/4.png',
      link: '/',
    },
    {
      id: 5,
      title: 'DMA Magazine 20',
      desc: '02 Dec 20',
      img: '/images/home/magazine/5.png',
      link: '/',
    },
  ]

  return (
    <>
      <div className="relative pb-5 bg-gray-50 h-[950px] xl:h-[1200px] 2md:h-[1600px] sm:h-[2900px]  my-main">
        <div className="absolute flex flex-col gap-20 top-24 left-1/2 transform -translate-x-1/2 ">
          <div className="w-[1347px] 2xl:w-[1200px] xl:w-[1000px] lg:w-[800px] 2md:w-[600px] sm:w-[100%]  flex flex-col gap-24 lg:gap-7">
            <div className="flex flex-col gap-8 sm:items-center sm:justify-center">
              <div className="flex flex-row gap-6 items-center">
                <p className="text-2xl font-semibold">Magazine</p>
                <div className="w-[120px] bg-amber-600 h-[5px] rounded-lg"></div>
              </div>
              <div className="flex flex-row items-center xl:flex-col xl:items-start xl:gap-2 justify-between sm:items-center sm:justify-center">
                <h4 className="text-6xl font-semibold lg:text-3xl">
                  An Extraordinary Year,<br></br> An Extraordinary Journey
                </h4>
                <p className="text-xl font-semibold w-[430px] text-center">
                  Sed ut perspiciatis unde omnis iste natus error sit voluptatem
                  accusantium doloremque laudantium, nesciunt.
                </p>
              </div>
            </div>
            <div className="grid grid-cols-5 gap-5 mt-10 xl:grid-cols-4 lg:grid-cols-3 2md:grid-cols-2 sm:grid-cols-1">
              {magazineCard.map((item) => {
                return (
                  <div
                    key={item.id}
                    className="flex flex-col gap-4 shadow-lg rounded-2xl p-2 h-full transform hover:scale-105 transition-transform duration-300 cursor-pointer"
                  >
                    <div>
                      <img src={item.img} className="w-full" alt="" />
                    </div>
                    <div className="flex flex-col gap-4 px-2">
                      <div>
                        <p className="text-xl font-semibold">{item.title}</p>
                        <p className="text-gray-400">
                          Published on: {item.desc}
                        </p>
                      </div>
                      <div className="flex flex-row justify-between">
                        <p className="text-customColor">View now</p>
                        <img src="/images/home/elements/rarrow.png" alt="" />
                      </div>
                    </div>
                  </div>
                )
              })}
            </div>
            <button className="transition-all hover:bg-customColor hover:text-white flex w-[160px] m-auto flex-row justify-between rounded-2xl px-3 items-center shadow-xl p-2 border-2 border-customColor">
              <p className="font-semibold">View All</p>
              <img src="/images/home/elements/rarrow.png" alt="" />
            </button>
          </div>
        </div>
      </div>
    </>
  )
}

export default MagazineSect
