/* eslint-disable @next/next/no-img-element */
import React from 'react'

const LeftSideSticky = () => {
  return (
    <>
      <div className="fixed bottom-20 flex flex-col gap-2 !z-10">
        <div>
          <img
            src="/images/home/side/1.png"
            className="transition-all	 hover:opacity-90 cursor-pointer"
            alt=""
          />
        </div>
        <div>
          <img
            src="/images/home/side/2.png"
            className="transition-all	 hover:opacity-90 cursor-pointer"
            alt=""
          />
        </div>
      </div>
    </>
  )
}

export default LeftSideSticky
