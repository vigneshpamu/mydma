import { Skeleton } from '@/components/ui/skeleton'
import React from 'react'
import { MdWhatsapp } from 'react-icons/md'

const MainSect = () => {
  const recentData = [
    {
      title: 'Quis autem vel eum iure reprehenderit.',
      img: '/images/events/info/blog/dm1.png',
      desc: 'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem....',
    },
    {
      title: 'Quis autem vel eum iure reprehenderit.',
      img: '/images/events/info/blog/dm2.png',
      desc: 'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem....',
    },
  ]
  return (
    <>
      <div className="max-w-[1100px] mx-auto mt-5 flex items-center justify-center">
        <div className="flex flex-col   gap-10 pb-20">
          <div className="flex flex-col gap-8   p-7 bg-[#036C73]">
            <div className="flex flex-row sm:flex-row gap-5 sm:gap-4">
              <div className="bg-white p-2 px-2 min-w-[80px] rounded-lg flex flex-col items-center justify-center ">
                <p className="text-xl font-semibold text-customColor  md:text-2xl">
                  03
                </p>
                <p className="text-xl text-customColor md:text-sm">JAN</p>
              </div>
              <Skeleton className="h-full w-full p-5">
                <p className="text-xl sm:text-3xl lg:text-4xl font-semibold text-black  md:text-2xl">
                  Data is Awaited
                </p>
              </Skeleton>
            </div>

            <div className="flex flex-col sm:flex-row  md:flex-wrap text-white justify-between">
              <p>
                Author: <span className="font-bold">DMCWebAdmin</span>
              </p>
              <p>
                Published on: <span className="font-bold">12-01-2024</span>
              </p>
              <div className="flex flex-row gap-2 items-start">
                <p>Share: </p>
                <div>
                  <p className="mt-1">
                    <MdWhatsapp />
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="flex px-4 flex-row 2md:flex-col gap-24 xl:gap-10">
            <div className="flex flex-col gap-5">
              <Skeleton className="w-full p-5">
                <p className="text-2xl sm:text-3xl lg:text-4xl font-bold w-[90%] 2md:text-3xl xsm:w-[100%] ">
                  Data is Awaited
                </p>
              </Skeleton>
              <Skeleton className="w-full p-5">
                <p className="leading-normal tracking-wide text-sm sm:text-lg lg:text-xl">
                  Data is Awaited Data is Awaited Data is Awaited Data is
                  Awaited Data is Awaited Data is Awaited Data is Awaited Data
                  is Awaited Data is Awaited Data is Awaited Data is Awaited
                  Data is Awaited Data is Awaited Data is Awaited Data is
                  Awaited Data is Awaited Data is Awaited Data is Awaited Data
                  is Awaited Data is Awaited Data is Awaited Data is Awaited
                  Data is Awaited Data is Awaited Data is Awaited Data is
                  Awaited Data is Awaited Data is Awaited Data is Awaited Data
                  is Awaited Data is Awaited Data is Awaited Data is Awaited
                  Data is Awaited Data is Awaited Data is Awaited Data is
                  Awaited Data is Awaited Data is Awaited Data is Awaited Data
                  is Awaited
                </p>
              </Skeleton>
              <img src="/images/events/info/blog/demo.png" alt="" />
              <Skeleton className="w-full p-5">
                <p className="leading-normal tracking-wide text-sm sm:text-lg lg:text-xl">
                  Data is Awaited Data is Awaited Data is Awaited Data is
                  Awaited Data is Awaited Data is Awaited Data is Awaited Data
                  is Awaited Data is Awaited Data is Awaited Data is Awaited
                  Data is Awaited Data is Awaited Data is Awaited Data is
                  Awaited Data is Awaited Data is Awaited Data is Awaited Data
                  is Awaited Data is Awaited Data is Awaited Data is Awaited
                  Data is Awaited Data is Awaited Data is Awaited Data is
                  Awaited Data is Awaited Data is Awaited Data is Awaited Data
                  is Awaited Data is Awaited Data is Awaited Data is Awaited
                  Data is Awaited Data is Awaited Data is Awaited Data is
                  Awaited Data is Awaited Data is Awaited Data is Awaited Data
                  is Awaited
                </p>
              </Skeleton>
              <div className="flex flex-row justify-between mt-5">
                <button className="active:scale-95 transition-all">
                  <img src="/images/events/info/blog/icon/left.png" alt="" />
                  <p className="text-[11px]">PREV</p>
                </button>
                <button className="active:scale-95 max-w-[170px] transition-all">
                  <img
                    src="/images/events/info/blog/icon/share.png"
                    className="w-full"
                    alt=""
                  />
                </button>
                <button className="active:scale-95 transition-all">
                  <img src="/images/events/info/blog/icon/right.png" alt="" />
                  <p className="text-[11px]">NEXT</p>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default MainSect
