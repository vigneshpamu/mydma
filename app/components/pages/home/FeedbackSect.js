/* eslint-disable @next/next/no-img-element */
import React from 'react'

const FeedbackSect = () => {
  return (
    <>
      <div className="flex items-center py-20 justify-center h-full sm:py-10">
        <div className="w-[1347px] relative flex items-center  2xl:w-[1200px] xl:w-[1000px] lg:w-[800px] 2md:[600px] justify-center">
          <img
            src="images/home/feedback/main.png"
            className="2md:w-[700px] sm:w-[90%]"
            alt=""
          />
          <button className="absolute rounded-md top-[47%] left-[6.1%]  2xl:left-[5%] 2md:left-[10%] bg-white items-center gap-4  active:scale-95 flex p-2 sm:px-2 sm:p-1 border-2 border-customColor px-4">
            <p className="font-semibold sm:text-sm">Feedback</p>
            <img
              src="/images/home/elements/b-rarrow.png"
              className="sm:w-[15px] sm:h-auto object-cover"
              alt=""
            />
          </button>
          <button className="absolute rounded-md bottom-[15%] right-[30%] 2xl:right-[28%] xl:right-[25.5%]  lg:right-[22%] lg:bottom-[10%]  bg-white items-center gap-4 active:scale-95 sm:px-2 sm:p-1  flex p-2 border-2 border-customColor px-4">
            <p className="font-semibold sm:text-sm">Complaint</p>
            <img
              src="/images/home/elements/b-rarrow.png"
              className="sm:w-[15px] sm:h-auto object-cover"
              alt=""
            />
          </button>
        </div>
      </div>
    </>
  )
}

export default FeedbackSect
