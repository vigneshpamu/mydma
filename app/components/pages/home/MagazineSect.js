/* eslint-disable @next/next/no-img-element */
import Link from 'next/link'
import { usePathname, useRouter } from 'next/navigation'
import React, { useEffect, useState } from 'react'

const MagazineSect = () => {
  const magazineCard = [
    {
      id: 1,
      title: 'DMA Magazine 23',
      desc: '02 Dec 23',
      img: '/images/home/magazine/1.png',
      link: '/',
    },
    // {
    //   id: 2,
    //   title: 'DMA Magazine 22',
    //   desc: '02 Dec 22',
    //   img: '/images/home/magazine/2.png',
    //   link: '/',
    // },
    // {
    //   id: 3,
    //   title: 'DMA Magazine 21',
    //   desc: '02 Dec 21',
    //   img: '/images/home/magazine/3.png',
    //   link: '/',
    // },
    // {
    //   id: 4,
    //   title: 'DMA Magazine 20',
    //   desc: '02 Dec 20',
    //   img: '/images/home/magazine/4.png',
    //   link: '/',
    // },
    // {
    //   id: 5,
    //   title: 'DMA Magazine 20',
    //   desc: '02 Dec 20',
    //   img: '/images/home/magazine/5.png',
    //   link: '/',
    // },
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
      <div className=" p-5 bg-gray-50 ">
        <div className=" flex flex-col gap-20  max-w-[1100px] mx-auto">
          <div className=" flex flex-col  xsm:items-center xsm:justify-center gap-2 ">
            <div className="flex flex-col gap-4">
              <div className="flex flex-row gap-6 items-center xsm:justify-center">
                <p className="text-xl font-semibold">Magazine</p>
                <div className="w-[120px] bg-amber-600 h-[5px] rounded-lg"></div>
              </div>
              <div className="flex flex-row items-center">
                <h4 className="text-xl font-semibold lg:text-3xl xsm:text-2xl xsm:text-center">
                  An Extraordinary Year,<br></br> An Extraordinary Journey
                </h4>
                {/* <p className="text-xl font-semibold w-[430px] text-center sm:text-left xsm:text-center xsm:text-sm xsm:font-medium 2xsm:px-10">
                  Sed ut perspiciatis unde omnis iste natus error sit voluptatem
                  accusantium doloremque laudantium, nesciunt.
                </p> */}
              </div>
            </div>
            <div className="flex w-full items-center justify-center ">
              <div className="grid grid-cols-1 sm:grid-cols- 2 lg:grid-cols -3 gap-5 mt-10 ">
                {magazineCard.map((item) => {
                  return (
                    <div
                      key={item.id}
                      className="flex flex-col gap-4 shadow-lg rounded-2xl p-2 h-full transform hover:scale-105 transition-transform duration-300 cursor-pointer"
                    >
                      <Link href={`${par}/magazines/info?name=${item.title}`}>
                        <div>
                          <img src={item.img} className="w-[350px]" alt="" />
                        </div>
                        <div className="flex flex-col gap-4 px-2">
                          <div>
                            <p className="text-xl font-semibold">
                              {item.title}
                            </p>
                            <p className="text-gray-400">
                              Published on: {item.desc}
                            </p>
                          </div>
                          <div className="flex flex-row justify-between">
                            <p className="text-customColor">View now</p>
                            <img
                              src="/images/home/elements/rarrow.png"
                              alt=""
                            />
                          </div>
                        </div>
                      </Link>
                    </div>
                  )
                })}
              </div>
            </div>
            <Link href={`${par}/magazines/`}>
              <div className="transition-all mt-5 hover:bg-customColor hover:text-white flex w-[160px] m-auto flex-row justify-between rounded-2xl px-3 items-center shadow-xl p-2 border-2 border-customColor">
                <p className="font-semibold">View All</p>
                <img src="/images/home/elements/rarrow.png" alt="" />
              </div>
            </Link>
          </div>
        </div>
      </div>
    </>
  )
}

export default MagazineSect
