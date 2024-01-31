/* eslint-disable @next/next/no-img-element */
import React from 'react'

const MissionSect = () => {
  return (
    <>
      <div className="relative h-[700px] lg:h-[600px] 2md:h-[450px]  md:h-[400px] sm:h-[350px] xsm:h-[400px] z-10 max-w-[1547px] m-auto">
        <div className="w-[1347px] 1xl:w-[95%] py-16 2md:py-8 absolute left-1/2 transform -translate-x-1/2 m-auto bg-transparent">
          <div className="flex flex-col gap-5">
            <div className="bg-gray-100 w-[65%] 1xl:w-[62%] lg:w-[57%] xsm:w-[63%] 3xsm:w-[58%] 3xsm:p-3 p-10 2md:p-4 flex flex-col gap-3">
              <div className="flex flex-row gap-4 items-center">
                <p className="text-lg font-semibold">Mission</p>
                <div className="w-[120px] h-[4px] rounded-lg bg-customColor 3xsm:w-[60px]"></div>
              </div>
              <p className="text-3xl font-bold lg:text-xl 2md:text-sm md:text-[11px] 3xsm:text-[9px]">
                Continuous development of all municipal processes and procedures
                and improvement of community services to achieve customer
                satisfaction.
              </p>
            </div>
            <div className="bg-gray-100 w-[65%] 1xl:w-[62%] lg:w-[57%] xsm:w-[63%] 3xsm:w-[58%] 3xsm:p-3 p-10 2md:p-4 flex flex-col gap-3">
              <div className="flex flex-row gap-4 items-center">
                <p className="text-lg font-semibold">Vision</p>
                <div className="w-[120px] h-[4px] rounded-lg bg-customColor 3xsm:w-[60px]"></div>
              </div>
              <p className="text-3xl font-bold lg:text-xl 2md:text-sm md:text-[11px] 3xsm:text-[9px]">
                Achieving sustainable development by increasing efficiency and
                productivity in municipal work.
              </p>
            </div>
          </div>
          <div className="absolute top-[-470px] 2md:top-[-270px] md:top-[-200px] sm:top-[-150px] xsm:top-[-40px] right-0">
            <img
              className="xl:w-[95%] h-[970px] xl:h-[911px] 2md:h-[700px] md:h-[550px] sm:h-[480px] xsm:h-[420px]  xsm:w-[130px] rounded-xl object-cover"
              src="/images/about/mission/info2.png"
              alt=""
            />
            <div className="absolute top-[6%]  flex flex-col h-[90%] justify-between left-[10%] ">
              <div>
                <p className="text-7xl xl:text-6xl 2md:text-4xl md:text-3xl sm:text-2xl xsm:text-lg font-bold text-white">
                  8
                </p>
                <p className="text-xl xl:text-lg 2md:text-sm 2md:w-[80%] md:text-[12px] xsm:text-[8px] font-bold text-white">
                  Major cities of Sharjah
                </p>
              </div>
              <div>
                <p className="text-7xl xl:text-6xl 2md:text-4xl md:text-3xl sm:text-2xl xsm:text-lg font-bold text-white">
                  8
                </p>
                <p className="text-xl xl:text-lg 2md:text-sm 2md:w-[80%] md:text-[12px] xsm:text-[8px] font-bold text-white">
                  Muncipalities
                </p>
              </div>
              <div>
                <p className="text-7xl xl:text-6xl 2md:text-4xl md:text-3xl sm:text-2xl xsm:text-lg font-bold text-white">
                  54
                </p>
                <p className="text-xl xl:text-lg 2md:text-sm 2md:w-[80%] md:text-[12px] xsm:text-[8px] font-bold text-white">
                  Tourist destinations
                </p>
              </div>

              <div>
                <p className="text-7xl xl:text-6xl 2md:text-4xl md:text-3xl sm:text-2xl xsm:text-lg font-bold text-white">
                  2590<span className="text-xl 2md:text-sm"> km2</span>
                </p>
                <p className="text-xl xl:text-lg 2md:text-sm 2md:w-[80%] md:text-[12px] xsm:text-[8px] font-bold text-white">
                  Area of the Emirates of Sharjah
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default MissionSect
