import { Skeleton } from '@/components/ui/skeleton'
import Link from 'next/link'
import React from 'react'

const InfoSect = ({ dataArr, paramsData }) => {
  console.log(dataArr[0])
  return (
    <>
      <div className="relative max-w-[1100px] mx-auto">
        <div className="flex px-4 lg:flex-row flex-col-reverse items-start justify-between gap-5 mx-auto py-8  m-auto ">
          {dataArr[0]?.information?.municipalityData ? (
            <div className="py-4  flex flex-col mr-5 gap-10">
              <p className="text-4xl font-bold w-[100%] leading-tight xl:text-3xl	sm:text-2xl">
                About {dataArr[0]?.title}
              </p>
              <p className="text-xl tracking-wide	xl:text-lg">
                {dataArr[0]?.information?.municipalityData}
              </p>
            </div>
          ) : (
            <div>
              <div className="py-4  flex flex-col mr-5 gap-10">
                <p className="text-4xl font-bold w-[100%] leading-tight xl:text-3xl	sm:text-2xl">
                  About {dataArr[0]?.title}
                </p>
                <Skeleton className="h-full w-full p-5">
                  <p className="text-xl tracking-wide	xl:text-lg">
                    Data is Awaited Data is Awaited Data is Awaited Data is
                    Awaited Data is Awaited Data is Awaited Data is Awaited Data
                    is Awaited Data is Awaited Data is Awaited Data is Awaited
                    Data is Awaited Data is Awaited Data is Awaited Data is
                    Awaited Data is Awaited Data is Awaited Data is Awaited
                  </p>
                </Skeleton>
                <Skeleton className="h-full w-full p-5">
                  <p className="text-xl tracking-wide	xl:text-lg">
                    Data is Awaited Data is Awaited Data is Awaited Data is
                    Awaited Data is Awaited Data is Awaited Data is Awaited Data
                    is Awaited Data is Awaited Data is Awaited Data is Awaited
                    Data is Awaited Data is Awaited Data is Awaited Data is
                    Awaited Data is Awaited Data is Awaited Data is Awaited
                  </p>
                </Skeleton>
              </div>
            </div>
          )}
          <div className=" bg-gray-50 md:min-w-[400px] w-full p-4 mt-[-100px] z-20 right-0 rounded-lg  flex flex-col gap-6">
            <Link href={`${dataArr[0]?.website}`}>
              <div className="flex flex-row gap-3 border-2 cursor-pointer hover:bg-gray-100 transition-all">
                <div className="border-2 rounded-md w-[130px] h-[130px]">
                  <img
                    src={dataArr[0]?.logo}
                    alt=""
                    className="rounded-md w-full h-full object-cover"
                  />
                </div>
                <div className="h-[130px] flex flex-col justify-between py-2">
                  <p className="font-bold w-[60%]">{paramsData}</p>
                  <div className="flex flex-row w-full justify-between">
                    <p className="text-customColor text-lg">Visit Website</p>
                    {/* <img src="/images/home/elements/b-rarrow.png" alt="" /> */}
                  </div>
                </div>
              </div>
            </Link>
            <div className="w-full h-[4px] bg-gray-200"></div>
            <div className="flex flex-col gap-2">
              <p className="font-semibold">Location</p>
              <iframe
                src={dataArr[0]?.map}
                allowFullScreen=""
                loading="lazy"
                referrerpolicy="no-referrer-when-downgrade"
                className="lg:w-full lg:min-h-[350px]"
              ></iframe>
            </div>

            <Link href={`tel:${dataArr[0]?.number}`}>
              <button className="flex w-[200px] justify-between items-center m-auto z-20 border-2 border-customColor shadow-md p-3 px-4 transition-all hover:text-white hover:bg-customColor rounded-3xl">
                <p className="font-bold">Call now</p>
                <img src="//images/home/elements/b-rarrow.png" alt="" />
              </button>
            </Link>
            <div className="flex flex-row items-center justify-center gap-5">
              {dataArr[0]?.socials.map((item, index) => {
                return (
                  <Link key={index} href={item.link}>
                    <div>
                      <img src={item.icon} alt="" />
                    </div>
                  </Link>
                )
              })}
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default InfoSect
