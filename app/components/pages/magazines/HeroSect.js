import StickyNav from '../../common/StickyNav'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useRouter } from 'next/navigation'
import React, { useEffect, useState } from 'react'

const HeroSect = () => {
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
      <div className="relative h-[1476px] sm:h-[1750px] w-[100%] m-auto">
        {/* <CommonNav /> */}
        <StickyNav start={0} end={0} />
        <img
          src="/images/magazine/hero/hero.png"
          className="w-full h-[750px] md:h-[650px] object-cover pointer-events-none"
          alt="hero"
        />
        <div className="flex flex-col gap-3 items-center justify-center w-[1347px] 1xl:w-[90%] absolute top-[400px] md:top-[15%] sm:top-[11%] xsm:top-[8%] left-1/2 transform -translate-x-1/2 m-auto">
          <p className="text-2xl font-bold">Magazine</p>
          <p className="text-5xl font-bold text-center w-[50%] 1xl:w-[70%] xsm:text-2xl mxsm:w-[90%] md:text-3xl md:w-[80%]">
            Check out our magazines, Know Sharjah more...
          </p>
        </div>
        <div className="flex flex-col items-center justify-center w-[1347px] absolute top-[600px] md:top-[25%] sm:top-[20%] xsm:top-[14%]  left-1/2 transform -translate-x-1/2 m-auto">
          <div className="grid grid-cols-4 2lg:grid-cols-2 sm:grid-cols-1 gap-5 mt-10 xl:grid-cols-4">
            {magazineCard.map((item) => {
              return (
                <Link
                  key={item.id}
                  href={`/${par}${item.link}?name=${item.title}`}
                >
                  <div className="flex w-full bg-white flex-col gap-4 shadow-lg rounded-2xl p-2 h-full transform hover:scale-105 transition-transform duration-300 cursor-pointer">
                    <div>
                      <img src={item.img} alt="" />
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
                </Link>
              )
            })}
          </div>
        </div>
      </div>
    </>
  )
}

export default HeroSect
