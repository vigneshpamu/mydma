import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useRouter } from 'next/navigation'
import React, { useEffect, useState } from 'react'
import { FaArrowRightLong } from 'react-icons/fa6'

import StickyNav from '../../common/StickyNav'

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
      link: '/councils/info',
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
  }, [])
  return (
    <>
      <div className="relative h-[2076px] 2lg:h-[2500px] 2md:h-[2300px] sm:h-[4000px] xsm:h-[3800px] md:h-[2100px] w-[100%] m-auto">
        {/* <CommonNav /> */}
        <StickyNav start={0} end={0} />
        <img
          src="/images/magazine/hero/hero.png"
          className="w-full h-[750px] md:h-[650px] xsm:h-[450px] object-cover pointer-events-none"
          alt="hero"
        />
        <div className="flex flex-col gap-3 items-center justify-center w-[1347px] 1xl:w-[90%] absolute top-[350px] md:top-[15%] sm:top-[5%] xsm:top-[4%] left-1/2 transform -translate-x-1/2 m-auto">
          <p className="text-2xl font-bold">News & Media</p>
          <p className="text-5xl font-bold text-center w-[50%] 1xl:w-[70%] xsm:text-2xl mxsm:w-[90%] md:text-3xl md:w-[80%]">
            Know More About <br /> DMA Sharjah
          </p>
        </div>
        <div className="flex flex-col items-center justify-center w-[1347px] 1xl:w-[90%] absolute top-[600px] md:top-[25%] sm:top-[10%] xsm:top-[8%]  left-1/2 transform -translate-x-1/2 m-auto">
          <div className="grid grid-cols-3 2lg:grid-cols-2 sm:grid-cols-1 sm:gap-y-5 gap-5 gap-y-12 mt-10 ">
            {mainData.map((item) => {
              return (
                <Link
                  key={item.id}
                  href={`/${par}${item.link}?name=${item.title}`}
                >
                  <div className="flex bg-white flex-col gap-4  rounded-2xl h-full transform hover:scale-105 transition-transform duration-300 cursor-pointer">
                    <div>
                      <img
                        src={item.img}
                        className="rounded-lg sm:h-[300px] w-full"
                        alt=""
                      />
                    </div>
                    <div className="flex flex-col gap-3">
                      <p className="text-2xl 1xl:text-xl font-bold text-[#036C73] w-[90%">
                        {item.title}
                      </p>
                      <div className="flex flex-row gap-3 items-center ">
                        <p className="text-[#036C73]">Read More</p>
                        <p className="mt-1 text-xl text-[#036C73]">
                          <FaArrowRightLong />
                        </p>
                      </div>
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
