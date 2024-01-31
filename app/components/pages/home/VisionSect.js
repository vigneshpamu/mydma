/* eslint-disable @next/next/no-img-element */
import React from 'react'
import { FaArrowRightLong } from 'react-icons/fa6'

const VisionSect = () => {
  return (
    <>
      <div className="relative h-[1000px] lg:h-[900px] 2md:h-[1450px] sm:h-[1800px] 2xsm:h-[1700px] my-main">
        <img
          src="images/home/vision/background.png"
          className=" w-full h-full lg:h-[700px]  object-cover"
          alt=""
        />
        <div className="absolute flex flex-col gap-20 top-24 left-1/2 transform lg:w-[800px] 2md:w-[600px] sm:w-[90%] -translate-x-1/2 2md:top-72 xsm:top-60 2xsm:top-48">
          <div className="w-[1347px] 2xl:w-[1200px] xl:w-[1000px] lg:w-[800px] flex flex-col gap-5">
            <div className="flex flex-row gap-3 items-center">
              <p className="text-2xl font-semibold">Vision</p>
              <div className="w-[120px] bg-amber-600 h-[5px] rounded-lg"></div>
            </div>
            <h4 className="text-5xl font-semibold xl:text-4xl lg:text-3xl  lg:w-[100%] 2md:w-[80%] sm:text-2xl sm:w-[50%] 2xsm:w-[320px] 2xsm:text-xl">
              Achieving sustainable development by increasing efficiency and
              productivity in municipal work.
            </h4>
          </div>
          <div className="flex flex-row items-center xl:items-start gap-16 2md:flex-col">
            <img
              src="/images/about/message/chairman.jpg"
              className="w-[530px] h-[550px] lg:w-[full] rounded-xl lg:h-[405px] sm:w-full sm:h-auto object-cover"
              alt=""
            />
            <div className="w-[700px] 2md:w-[600px] flex flex-col justify-between gap-16 sm:w-full">
              <p className="text-lg xl:text-[15px] lg:text-sm  ">
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
                quality of life for all Residents of the emirate.
                <br />
                <br />
                Today, the Department is witnessing a remarkable development in
                highlighting its role and providing its services and upgrading
                them to the highest smart standards, as the Department of
                Municipal Affairs website was launched today in its new look to
                complement the achievement of the aspirations and goals of the
                Department, to be an important window in embodying communication
                and constructive institutional interaction with the external
                public, thus achieving the most important The elements of
                partnership and success, thank you With you we rise to the best
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default VisionSect
