/* eslint-disable @next/next/no-img-element */
import Image from 'next/image'
import React from 'react'
import { FaArrowRightLong } from 'react-icons/fa6'

const VisionSect = () => {
  return (
    <>
      <div className="w-full">
        {/* <img
          src="/images/hero.png"
          className="w-full h-full  object-cover absolute z-[-10]"
          alt=""
        /> */}
        {/* <Image
          src="/images/home/news/background.png"
          alt="hero"
          height={100}
          width={500}
          // layout="fill"
          objectFit="cover"
          className="w-full h-[550px]   object-cover absolute z-[-10]"
        /> */}
        <div className="relative h-full max-w-[1100px] mx-auto p-3">
          {/* src="/images/home/vision/background.png" */}
          {/* className="w-full h-[150px] sm:h-[250px] md:h-[150px]  object-cover" */}
          <div className="  mt-16 sm:mt-32 md:mt-10 flex items-center justify-center  mx-auto flex-col gap-10 ">
            <div className="px-3">
              <div className="flex flex-row gap-3 items-center ">
                <p className="text-lg font-semibold">Vision</p>
                <div className="w-[120px] bg-amber-600 h-[5px] rounded-lg"></div>
              </div>
              <h4 className="text-sm font-semibold sm:text-xl md:text-2xl lg:max-w-[85%]">
                Achieving sustainable development by increasing efficiency and
                productivity in municipal work.
              </h4>
            </div>
          </div>
          <div className="flex mt-5 flex-col max-w-[1100px] mx-auto  md:flex-row items-center w-full h-full justify-center pl-4 pb-10 gap-8">
            {/* <img
              src="/images/about/message/chairman.jpg"
              className=" ml-[-10px] w-[300px] md:w-[400px] md:max-h-[320px] max-h-[300px] rounded-xl object-cover"
              alt=""
            /> */}
            <Image
              src="/images/about/message/chairman.jpg"
              alt="hero"
              height={320}
              width={300}
              objectFit="cover"
              className=" ml-[-10px] w-[300px] md:w-[400px] md:max-h-[320px] max-h-[300px] rounded-xl object-cover"
            />
            <div className="flex flex-col justify-between w-full gap-16 ">
              <div className="text-md md:text-[12px] w-full  track ing-wide font-light lg:text-[15px]">
                The Department of Municipal Affairs in Sharjah is one of the
                most important government agencies in the emirate. It is the
                department responsible and concerned with developing the
                municipal sector throughout the emirate. The department is keen
                to advance municipal work in all its fields, relying on its
                qualified human cadres, and applying the best standards of
                institutional excellence to achieve To the global level and keep
                pace with technological developments in all services provided to
                the public, in order to achieve the visions and aspirations of
                His Highness Sheikh Dr. Sultan bin Muhammad Al Qasimi, Member of
                the Supreme Council and Ruler of Sharjah - may God protect him -
                and the follow-up of His Highness Sheikh Sultan bin Muhammad bin
                Sultan Al Qasimi, Crown Prince, Deputy Ruler of Sharjah,
                Chairman of the Executive Council - May God protect him - aiming
                to achieve comprehensive development and provide a decent
                quality of life for all Residents of the emirate. <br /> <br />{' '}
                Today, the Department is witnessing a remarkable development in
                highlighting its role and providing its services and upgrading
                them to the highest smart standards, as the Department of
                Municipal Affairs website was launched today in its new look to
                complement the achievement of the aspirations and goals of the
                Department, to be an important window in embodying communication
                and constructive institutional interaction with the external
                public, thus achieving the most important The elements of
                partnership and success, thank you With you we rise to the best
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default VisionSect
