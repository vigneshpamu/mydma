/* eslint-disable @next/next/no-img-element */
import React from 'react'

const MissionSect = () => {
  return (
    <>
      <div className="relative h-full max-w-[1100px] py-3  z-10  m-auto">
        <div className="flex flex-row items-center justify-center gap-3 px-2 m-auto bg-transparent">
          <div className="flex flex-col gap-5 ">
            <div className="bg-gray-100  p-2 flex flex-col gap-3">
              <div className="flex flex-row gap-4 items-center">
                <p className="text-lg font-semibold">Mission</p>
                <div className="w-[120px] h-[4px] rounded-lg bg-customColor 3xsm:w-[60px]"></div>
              </div>
              <p className="text-sm md:text-[16px]">
                Continuous development of all municipal processes and procedures
                and improvement of community services to achieve customer
                satisfaction.
              </p>
            </div>
            <div className="bg-gray-100   p-2 flex flex-col gap-3">
              <div className="flex flex-row gap-4 items-center">
                <p className="text-lg font-semibold">Vision</p>
                <div className="w-[120px] h-[4px] rounded-lg bg-customColor 3xsm:w-[60px]"></div>
              </div>
              <p className="text-sm md:text-[16px]">
                Achieving sustainable development by increasing efficiency and
                productivity in municipal work.
              </p>
            </div>
          </div>
          <div className="relative   mt-[-150px]   right-1">
            <img
              className="min-w-[150px] sm:min-w-[180px] h-[400px] rounded-xl object-cover"
              src="/images/about/mission/info2.png"
              alt=""
            />
            <div className="absolute top-[2%]  flex flex-col h-[90%] justify-between left-[10%] ">
              <div>
                <p className="text-3xl sm:text-4xl 2md:text-4xl md:text-3xl xsm:text-lg font-bold text-white">
                  8
                </p>
                <p className="text-[13px] text-white w-[90%]">
                  Major cities of Sharjah
                </p>
              </div>
              <div>
                <p className="text-3xl sm:text-4xl 2md:text-4xl md:text-3xl xsm:text-lg font-bold text-white">
                  8
                </p>
                <p className="text-[13px] text-white w-[90%]">Muncipalities</p>
              </div>
              <div>
                <p className="text-3xl sm:text-4xl 2md:text-4xl md:text-3xl xsm:text-lg font-bold text-white">
                  54
                </p>
                <p className="text-[13px] text-white w-[90%]">
                  Tourist destinations
                </p>
              </div>

              <div>
                <p className="text-3xl sm:text-4xl 2md:text-4xl md:text-3xl xsm:text-lg font-bold text-white">
                  2590<span className="text-xl 2md:text-sm"> km2</span>
                </p>
                <p className="text-[13px] text-white w-[90%]">
                  Area of the Emirates of Sharjah
                </p>
              </div>
            </div>
          </div>
          {/* <div className="hidden mt-[-50px] sm:block relative">
            <img
              className="w-[150px] min-h-[400px] sm:w-[200px] sm:h-[200px] rounded-xl object-cover"
              src="/images/about/mission/info2.png"
              alt=""
            />
            <div className="absolute top-[6%]  flex flex-col h-[90%] justify-between left-[10%] ">
              <div>
                <p className="text-3xl sm:text-4xl 2md:text-4xl md:text-3xl xsm:text-lg font-bold text-white">
                  8
                </p>
                <p className="text-[13px] text-white w-[90%]">
                  Major cities of Sharjah
                </p>
              </div>
              <div>
                <p className="text-3xl sm:text-4xl 2md:text-4xl md:text-3xl xsm:text-lg font-bold text-white">
                  8
                </p>
                <p className="text-[13px] text-white w-[90%]">Muncipalities</p>
              </div>
              <div>
                <p className="text-3xl sm:text-4xl 2md:text-4xl md:text-3xl xsm:text-lg font-bold text-white">
                  54
                </p>
                <p className="text-[13px] text-white w-[90%]">
                  Tourist destinations
                </p>
              </div>

              <div>
                <p className="text-3xl sm:text-4xl 2md:text-4xl md:text-3xl xsm:text-lg font-bold text-white">
                  2590<span className="text-xl 2md:text-sm"> km2</span>
                </p>
                <p className="text-[13px] text-white w-[90%]">
                  Area of the Emirates of Sharjah
                </p>
              </div>
            </div>
          </div> */}
        </div>
      </div>
    </>
  )
}

export default MissionSect
