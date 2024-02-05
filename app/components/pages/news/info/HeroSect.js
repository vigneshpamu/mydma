import Image from 'next/image'
import React from 'react'
import { MdWhatsapp } from 'react-icons/md'

const HeroSect = () => {
  return (
    <>
      <div className="mt-28 max-w-[1100px] mx-auto flex items-center justify-center ">
        <div className=" ">
          {/* <img
            src="/images/events/info/hero/hero.png"
            className="w-full object-cover"
            alt=""
          /> */}
          <Image
            src="/images/events/info/hero/hero.png"
            height={0}
            width={1100}
            className="w-full object-cover"
            alt="hero"
          />
        </div>
      </div>
    </>
  )
}

export default HeroSect
