import Image from 'next/image'
import React from 'react'

const OrganisationStructureSect = () => {
  return (
    <>
      <div className="relative  py-20 m-auto">
        {/* <img
          src="/images\about\org-str\background.png"
          className="w-full h-full object-cover"
          alt=""
        /> */}
        <div className="w-full h-full object-cover">
          <Image
            src="/images\about\org-str\background.png"
            alt="hero"
            layout="fill"
            objectFit="cover"
            className="pointer-events-none"
          />
          {/* <div className="absolute w-full h-full !bg-gradient-to-t !from-slate-900 !to-transparent opacity-85"></div> */}
        </div>
        <div className="flex flex-col gap-10 px-4 z-10 max-w-[1100px] m-auto bg-transparent">
          <div className=" flex items-center justify-center">
            <p className="text-xl z-10 font-bold 2md:text-4xl sm:text-2xl">
              Organizational Structure.
            </p>
          </div>
          <img
            src="/images\about\org-str\structure.png"
            className="max-w-[1000px] z-10"
            alt=""
          />
        </div>
      </div>
    </>
  )
}

export default OrganisationStructureSect
