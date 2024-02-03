import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useRouter } from 'next/navigation'
import React, { useEffect, useState } from 'react'
import { FaArrowRightLong } from 'react-icons/fa6'

import StickyNav from '../../common/StickyNav'
import Image from 'next/image'
import UpperNav from '../../common/UpperNav'
import { Skeleton } from '@/components/ui/skeleton'

const HeroSectNews = () => {
  const magazineCard = [
    {
      id: 1,
      title: 'DMA Magazine 23',
      desc: '02 Dec 23',
      img: '/images/home/magazine/1.png',
      link: '/magazines/info',
    },
    {
      id: 2,
      title: 'DMA Magazine 22',
      desc: '02 Dec 22',
      img: '/images/home/magazine/2.png',
      link: '/magazines/info',
    },
    {
      id: 3,
      title: 'DMA Magazine 21',
      desc: '02 Dec 21',
      img: '/images/home/magazine/3.png',
      link: '/magazines/info',
    },
    {
      id: 4,
      title: 'DMA Magazine 20',
      desc: '02 Dec 20',
      img: '/images/home/magazine/4.png',
      link: '/magazines/info',
    },
  ]
  const mainData = [
    {
      img: '/images/municipalities/main/im1.png',
      title: 'Quis autem vel eum iure reprehenderit qui in ea voluptate.',
      link: '/news/info',
    },
    {
      img: '/images/municipalities/main/im2.png',
      title: 'Quis autem vel eum iure reprehenderit qui in ea voluptate.',
      link: '/news/info',
    },
    {
      img: '/images/municipalities/main/im3.png',
      title: 'Quis autem vel eum iure reprehenderit qui in ea voluptate.',
      link: '/news/info',
    },
    {
      img: '/images/municipalities/main/im4.png',
      title: 'Quis autem vel eum iure reprehenderit qui in ea voluptate.',
      link: '/news/info',
    },
    {
      img: '/images/municipalities/main/im5.png',
      title: 'Quis autem vel eum iure reprehenderit qui in ea voluptate.',
      link: '/news/info',
    },
    {
      img: '/images/municipalities/main/im6.png',
      title: 'Quis autem vel eum iure reprehenderit qui in ea voluptate.',
      link: '/news/info',
    },
    {
      img: '/images/municipalities/main/im7.png',
      title: 'Quis autem vel eum iure reprehenderit qui in ea voluptate.',
      link: '/news/info',
    },
    {
      img: '/images/municipalities/main/im8.png',
      title: 'Quis autem vel eum iure reprehenderit qui in ea voluptate.',
      link: '/news/info',
    },
  ]
  const router = useRouter()
  const pathname = usePathname()
  const [par, setPar] = useState('')
  const handleClick = () => {
    const path = pathname[1] + pathname[2]
    // const path = pathname[1] + pathname[2]
    const currentPath = '/' + path + '/'
    let newStr = pathname.substring(3)
    if (path === 'ar') {
      const newPath = currentPath.replace(`/ar`, `/en${newStr}`)
      router.push(newPath)
    } else {
      const newPath = currentPath.replace(`/en`, `/ar${newStr}`)
      router.push(newPath)
    }
  }
  useEffect(() => {
    const path = pathname[1] + pathname[2]
    setPar(path)
  }, [pathname])

  return (
    <>
      {/* <CommonNav /> */}
      <StickyNav start={0} end={0} />

      <img
        src="/images/magazine/hero/hero.png"
        className="w-full h-[400px] object-cover pointer-events-none"
        alt="hero"
      />
      <div className="mt-[-270px] sm:mt-[-190px] px-5 pb-10">
        <div className="flex text-4xl font-bold items-center justify-center w-full">
          News & Media
          {/* <p className="text-6xl sm:text-2xl font-bold">News & Media</p> */}
          {/* <p className="text-5xl font-bold text-center w-[50%] 1xl:w-[70%] xsm:text-2xl mxsm:w-[90%] md:text-3xl md:w-[80%]">
            Know More About <br /> DMA Sharjah
          </p> */}
        </div>
        <div className="flex items-center max-w-[1100px] mx-auto justify-center ">
          <div className=" grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mt-10 gap-10">
            {mainData.map((item) => {
              return (
                <Link
                  key={item.id}
                  href={`/${par}${item.link}?name=${item.title}`}
                >
                  <div className="flex bg-white flex-col gap-4 sm:gap-4 sm:mb-6  rounded-2xl h-full transform hover:scale-105 transition-transform duration-300 cursor-pointer">
                    {/* <img
                        src={item.img}
                        className="rounded-lg sm:h-[300px] w-full"
                        alt=""
                      /> */}
                    <div className="sm:h-[300px] w-full">
                      {/* <Image
                        src={item.img}
                        alt="news-img"
                        height={750}
                        width={450}
                        // layout="fill"
                        objectFit="cover"
                        className="pointer-events-none sm:h-[100%]  object-cover"
                      /> */}
                      <Skeleton className="h-[300px] flex items-center justify-center text-3xl w-[350px] px-2 rounded-sm">
                        Image Awaited
                      </Skeleton>
                    </div>
                    <div className="flex flex-col gap-3">
                      <Skeleton className="w-full h-full px-2 rounded-sm">
                        <p className="text-2xl 1xl:text-xl font-bold text-[#036C73] w-[90%">
                          Data is Awaited
                        </p>
                      </Skeleton>

                      {/* <div className="flex flex-row gap-3 items-center ">
                        <p className="text-[#036C73]">Read More</p>
                        <p className="mt-1 text-xl text-[#036C73]">
                          <FaArrowRightLong />
                        </p>
                      </div> */}
                    </div>
                  </div>
                </Link>
              )
            })}
          </div>
        </div>
      </div>
    </>
  )
}

export default HeroSectNews
