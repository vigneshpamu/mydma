/* eslint-disable @next/next/no-img-element */
import React from 'react'
import { FaArrowRightLong } from 'react-icons/fa6'

const VisionSect = () => {
  return (
    <>
      <div className="relative h-[1000px] lg:h-[800px] 2md:h-[1350px] sm:h-[1500px] 2xsm:h-[1300px] my-main">
        <img
          src="images/home/vision/background.png"
          className=" w-full h-full"
          alt=""
        />
        <div className="absolute flex flex-col gap-20 top-24 left-1/2 transform lg:w-[800px] 2md:w-[600px] sm:w-[90%] -translate-x-1/2 2md:top-72 xsm:top-60 2xsm:top-48">
          <div className="w-[1347px] 2xl:w-[1200px] xl:w-[1000px] lg:w-[800px] flex flex-col gap-5">
            <div className="flex flex-row gap-3 items-center">
              <p className="text-2xl font-semibold">Vision</p>
              <div className="w-[120px] bg-amber-600 h-[5px] rounded-lg"></div>
            </div>
            <h4 className="text-6xl font-semibold lg:text-3xl lg:w-[65%] sm:text-2xl sm:w-[50%] 2xsm:w-[320px] 2xsm:text-xl">
              Meeting the needs of Present and Future Generations.
            </h4>
          </div>
          <div className="flex flex-row items-center gap-16 2md:flex-col">
            <img
              src="images/home/vision/1.png"
              className="w-[530px] h-[550px] lg:w-[400px] lg:h-[405px] sm:w-full sm:h-auto object-cover"
              alt=""
            />
            <div className="w-[550px] flex flex-col justify-between gap-16 sm:w-full">
              <p className="text-xl xl:text-lg lg:text-sm  ">
                Sed ut perspiciatis unde omnis iste natus error sit voluptatem
                accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
                quae ab illo inventore veritatis et quasi architecto beatae
                vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia
                voluptas sit aspernatur aut odit aut fugit, sed quia
                consequuntur magni dolores eos qui ratione voluptatem sequi
                nesciunt. Sed ut perspiciatis unde omnis iste natus error sit
                voluptatem accusantium doloremque laudantium, totam rem aperiam,
                eaque ipsa quae ab illo inventore veritatis et quasi architecto
                beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem
                quia voluptas sit aspernatur aut odit aut fugit, sed quia
                consequuntur magni dolores eos qui ratione voluptatem sequi
                nesciunt.
              </p>
              <button className="flex flex-row items-center px-3 hover:text-white justify-between border-2 border-customColor shadow-md rounded-2xl py-2 w-[170px] cursor-pointer z-10 transition-all hover:bg-customColor">
                {/* <p> Know More</p> */}
                <div className="flex flex-row items-center justify-between w-full hover:">
                  <p className="font-semibold">Know More</p>
                  <p>
                    <FaArrowRightLong className="text-customColor" />
                  </p>
                </div>
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default VisionSect
