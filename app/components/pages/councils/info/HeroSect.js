import CommonNav from '@/app/components/common/CommonNav'
import SideMenu from '@/app/components/common/SideMenu'
import UpperNav from '@/app/components/common/UpperNav'
import Image from 'next/image'
import React, { useState } from 'react'

const HeroSect = ({ dataArr }) => {
  const [visible, setVisible] = useState(false)
  return (
    <>
      <div className="relative h-full m-auto">
        <SideMenu visible={visible} setVisible={setVisible} />

        <Image
          src="/images/councils/info/hero/hero.png"
          className="w-full h-[350px]  object-cover pointer-events-none"
          alt=""
          height={40}
          width={1100}
          // layout="fill"
          objectFit="cover"
        />
        {/* <CommonNav setVisible={setVisible} /> */}
        <UpperNav setVisible={setVisible} />
        <div className="max-w-[1100px] mt-[-60px] m-auto ">
          <div className="relative">
            {/* <img
              src="/images/councils/info/hero/mask.png"
              className="h-[150px] sm:h-[180px] w-full object-cover"
              alt=""
            /> */}
            <Image
              src="/images/councils/info/hero/mask.png"
              className="h-[150px] sm:h-[180px] w-full object-cover"
              alt=""
              height={40}
              width={1100}
              // layout="fill"
              objectFit="cover"
            />
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full flex items-center justify-center">
              <p className="text-2xl md:text-4xl font-semibold text-white text-center">
                {dataArr?.slug} Council
              </p>
              {/* <p className="text-white text-xl	text-center px-20">
                The Executive Council of the Emirate of Sharjah, the supreme
                executive authority of the emirate, was established in October
                1999 with the aim of assisting the ruler in performing his
                duties and exercising his powers, drawing the general policy of
                the emirate, and implementing development plans to raise the
                social and economic standard in the emirat
              </p> */}
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default HeroSect
