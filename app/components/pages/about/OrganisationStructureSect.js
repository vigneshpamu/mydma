import Image from 'next/image'
import React from 'react'

const OrganisationStructureSect = () => {
  return (
    <>
      <div className="relative h-[1756px] xl:h-[1400px] 2md:h-[1200px] md:h-[1000px] sm:h-[800px] m-auto">
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
        <div className="flex flex-col gap-10 pt-4 md:pt-0 w-[1347px] 1xl:w-[90%] top-0 absolute left-1/2 transform -translate-x-1/2 m-auto bg-transparent">
          <div className="py-20 flex items-center justify-center">
            <p className="text-6xl font-bold 2md:text-4xl sm:text-2xl">
              Organizational Structure.
            </p>
          </div>
          <img src="/images\about\org-str\structure.png" alt="" />
        </div>
      </div>
    </>
  )
}

export default OrganisationStructureSect
