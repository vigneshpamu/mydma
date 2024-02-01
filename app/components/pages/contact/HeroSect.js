import React, { useState } from 'react'
import SideMenu from '../../common/SideMenu'
import Link from 'next/link'
import UpperNav from '../../common/UpperNav'
import Image from 'next/image'

const HeroSect = () => {
  const [visible, setVisible] = useState(false)
  return (
    <>
      <div className="relative h-full  m-auto">
        <SideMenu visible={visible} setVisible={setVisible} />

        <div className="w-full h-[400px]  object-cover pointer-events-none">
          <Image
            src="/images/contact/hero/hero.png"
            alt="contact-img"
            // height={750}
            // width={2500}
            layout="fill"
            objectFit="cover"
            className="pointer-events-none  object-cover"
          />
          <div className="absolute w-full h-full !bg-gradient-to-t !from-slate-900 !to-transparent opacity-85"></div>
        </div>
        <UpperNav setVisible={setVisible} />
        <div className="max-w-[1100px] mx-auto">
          <div className=" absolute top-36 md:top-48  ml-8 mx-auto m-auto flex flex-row justify-between ">
            <div className="flex justify-between h-[420px] 2md:h-[300px]  sm:h-[200px] flex-col gap-4">
              <div className="flex flex-col gap-5">
                <div>
                  <p className="text-white text-xl sm:text-lg  font-semibold">
                    Contact us
                  </p>
                  <p className="text-white text-2xl md:text-3xl lg:text-4xl font-semibold w-[85%] leading-tight tracking-wide	">
                    Connect with us, Be a part in development
                  </p>
                </div>
              </div>
              {/* <div className="flex items-center gap-3">
              <img src="/images/home/elements/5.png" alt="" className="" />
              <p className="text-white text-2xl tracking-wider sm:text-lg">
              Scroll
              </p>
            </div> */}
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default HeroSect
