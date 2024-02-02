import React from 'react'
import GlobalPrac from './components/GlobalPrac'

const AllDataComponents = ({ dataArr }) => {
  console.log(dataArr)
  return (
    <div className="max-w-[1100px] mx-auto">
      {dataArr?.information?.globalPracticesArray?.length > 0 && (
        <GlobalPrac dataArr={dataArr} />
      )}
      <div className="flex flex-col gap-3 py-8 w-[1347px] mx-auto">
        <p className="text-4xl font-semibold">Vision</p>
        <p className="text-lg">{dataArr?.information?.vision}</p>
      </div>
      <div className="flex flex-col gap-3 py-8 w-[1347px] mx-auto">
        <p className="text-4xl font-semibold">Message</p>
        <p className="text-lg">{dataArr?.information?.message}</p>
      </div>
      <div className="flex flex-col gap-3 py-8 w-[1347px] mx-auto">
        <p className="text-4xl font-semibold">Message</p>
        <div></div>
      </div>
    </div>
  )
}

export default AllDataComponents
