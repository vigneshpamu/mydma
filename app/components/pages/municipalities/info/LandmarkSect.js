import React from 'react'

const LandmarkSect = ({ data }) => {
  return (
    <>
      <div className="relative py-20 h-[2500px]">
        <div className="absolute left-1/2 transform -translate-x-1/2 w-[1347px] m-auto ">
          <div className="w-[900px] flex flex-col gap-7">
            <div className="flex flex-col gap-4">
              <p className="font-bold text-3xl">Landmarks of Khorfakkan</p>
              <p>These are the main landmarks of our municipality</p>
            </div>
            <div className="grid grid-cols-2 gap-y-10">
              {data?.landmarks.map((item) => {
                return (
                  <div
                    key={item.id}
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
