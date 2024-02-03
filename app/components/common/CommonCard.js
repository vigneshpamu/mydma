/* eslint-disable @next/next/no-img-element */
import Image from 'next/image'
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
      <div className="max-w-[1100px] pb-20 mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-y-5 gap-x-3 mt-[-100px] p-2 m-auto">
          {data?.map((item, index) => {
            return (
              <Link
                className=" "
                key={index}
                href={`/${par}${item.link}?name=${item.title}`}
              >
                <div className="h-[350px]  rounded-xl relative transition-all hover:scale-105">
                  {/* <img
                    src={item.img}
                    className="w-[100%] h-[100%] rounded-xl object-cover"
                    alt=""
                  /> */}
                  <div className="  h-[100%] rounded-xl object-cover">
                    <Image
                      src={item.img}
                      alt="municipality-img"
                      // height={750}
                      // width={2500}
                      layout="fill"
                      objectFit="cover"
                      className="pointer-events-none rounded-xl object-cover"
                    />
                    <div className="absolute w-full rounded-lg h-full !bg-gradient-to-t !from-slate-900 !to-transparent opacity-85"></div>
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-t rounded-xl from-slate-900 opacity-70 to-transparent"></div>
                  <div className="absolute left-5 bottom-3 flex flex-col justify-between h-[100px] lg:h-[100px]">
                    <p className="text-white text-2xl font-semibold lg:text-2xl w-[80%]">
                      {item.title}
                    </p>
                    {/* <p className="text-white text-xl md:text-sm">Know</p> */}
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
