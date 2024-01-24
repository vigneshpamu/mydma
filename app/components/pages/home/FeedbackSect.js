/* eslint-disable @next/next/no-img-element */
import React from 'react'

const FeedbackSect = () => {
  return (
    <>
      <div className="flex items-center py-20 justify-center h-full">
        <div className="w-[1347px] relative flex items-center  2xl:w-[1200px] xl:w-[1000px] justify-center">
          <img src="images/home/feedback/main.png" alt="" />
          <button className="absolute rounded-md top-[47%] left-[6.1%]  2xl:left-[5%] bg-white items-center gap-4  active:scale-95 flex p-2 border-2 border-customColor px-4">
            <p className="font-semibold">Feedback</p>
            <img src="/images/home/elements/b-rarrow.png" alt="" />
          </button>
          <button className="absolute rounded-md bottom-[15%] right-[30%] 2xl:right-[28%] xl:right-[25.5%] bg-white items-center gap-4 active:scale-95  flex p-2 border-2 border-customColor px-4">
            <p className="font-semibold">Complaint</p>
            <img src="/images/home/elements/b-rarrow.png" alt="" />
          </button>
        </div>
      </div>
    </>
  )
}

export default FeedbackSect
