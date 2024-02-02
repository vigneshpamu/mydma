'use client'
import React, { useEffect, useState } from 'react'

const LandmarkSect = ({ data }) => {
  const [landmarkHeight, setLandmarkHeight] = useState(
    'relative py-20 h-[2500px] lg:h-[2300px] 2md:h-[2250px] sm:h-[4550px] xsm:h-[4350px] 2xsm:h-[4150px]'
  )

  const [galleryHeight, setGalleryHeight] = useState('')
  useEffect(() => {
    if (data?.landmarks?.length === 0) {
      const height = 'mt-10 h-[100px]'
      setLandmarkHeight(height)
    }
  }, [data])
  return (
    <>
      <div className="h-full max-w-[1100px] py-5 mx-auto px-5">
        <div className="  ">
          <div className=" flex flex-col gap-7">
            <div className="flex flex-col gap-4">
              <p className="font-bold text-2xl sm:text-[25px]">
                Landmarks of {data?.title}
              </p>
              <p>These are the main landmarks of our municipality</p>
            </div>
            <div className="max-w-[900px] grid grid-cols-1 md:grid-cols-2 gap-x-5 gap-y-10">
              {data?.landmarks?.length > 0 &&
                data?.landmarks?.map((item, index) => {
                  return (
                    <div
                      key={index}
                      className="flex flex-col items-center gap-3"
                    >
                      <div>
                        <img src={item.img} alt="" />
                      </div>
                      <p className="text-lg font-bold">{item.title}</p>
                      <p className="text-center w-[90%]">{item.desc}</p>
                    </div>
                  )
                })}
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default LandmarkSect
