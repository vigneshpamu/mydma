/* eslint-disable @next/next/no-img-element */
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useRouter } from 'next/navigation'
import React, { useEffect, useState } from 'react'

const CommonCard = ({ data }) => {
  console.log(data)
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

    // Change the language to Arabic
    // console.log(currentPath, 'This is currentPath')

    // Navigate to the new path
  }
  useEffect(() => {
    const path = pathname[1] + pathname[2]
    console.log('This is Path', path)
    setPar(path)
  }, [])
  return (
    <>
      <div className="relative h-[1780px] lg:h-[1400px] 2md:h-[1100px] md:h-[900px] sm:h-[2900px] mxsm:h-[2600px] xsm:h-[2300px] 2xsm:h-[2100px]">
        <div className="grid grid-cols-2 sm:grid-cols-1 absolute top-[-100px] pb-20 left-1/2 transform -translate-x-1/2 gap-y-10 sm:gap-y-3 gap-6 w-[1347px] 1xl:w-[95%] m-auto">
          {data?.map((item, index) => {
            return (
              <Link key={index} href={`/${par}${item.link}?name=${item.title}`}>
                <div className="w-full relative transition-all hover:scale-105">
                  <img src={item.img} className="w-full object-cover" alt="" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                  <div className="absolute left-5 bottom-5 flex flex-col justify-between h-[80px] lg:h-[60px]">
                    <p className="text-white text-3xl font-semibold lg:text-xl md:text-lg">
                      {item.title}
                    </p>
                    <p className="text-white text-xl md:text-sm">Know</p>
                  </div>
                </div>
              </Link>
            )
          })}
        </div>
      </div>
    </>
  )
}

export default CommonCard
