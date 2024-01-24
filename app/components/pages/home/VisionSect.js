/* eslint-disable @next/next/no-img-element */
import React from 'react'
import { FaArrowRightLong } from 'react-icons/fa6'

const VisionSect = () => {
  return (
    <>
      <div className="relative h-[100vh] my-main">
        <img
          src="images/home/vision/background.png"
          className=" w-full h-full"
          alt=""
        />
        <div className="absolute flex flex-col gap-20 top-24 left-1/2 transform -translate-x-1/2">
          <div className="w-[1347px] 2xl:w-[1200px] xl:w-[1000px] flex flex-col gap-5">
            <div className="flex flex-row gap-3 items-center">
              <p className="text-2xl font-semibold">Vision</p>
              <div className="w-[120px] bg-amber-600 h-[5px] rounded-lg"></div>
            </div>
            <h4 className="text-6xl font-semibold">
              Meeting the needs of Present and Future Generations.
            </h4>
          </div>
          <div className="flex flex-row items-center gap-16">
            <img
              src="images/home/vision/1.png"
              className="w-[530px] h-[550px]"
              alt=""
            />
            <div className="w-[550px] flex flex-col justify-between gap-16">
              <p className="text-xl xl:text-lg">
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
