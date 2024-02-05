import React from 'react'
import GlobalPrac from './components/GlobalPrac'

const AllDataComponents = ({ dataArr }) => {
  console.log(dataArr)
  return (
    <div className="max-w-[1100px] px-5 mx-auto">
      {dataArr?.information?.globalPracticesArray?.length > 0 && (
        <GlobalPrac dataArr={dataArr} />
      )}
      {dataArr?.information?.vision?.length > 0 && (
        <div className="flex flex-col gap-3 py-5  ">
          <p className="text-4xl font-semibold">Vision</p>
          <p className="text-lg">{dataArr?.information?.vision}</p>
        </div>
      )}

      {dataArr?.information?.message?.length > 0 && (
        <div className="flex flex-col gap-3 py-5 ">
          <p className="text-4xl font-semibold">Message</p>
          <p className="text-lg">{dataArr?.information?.message}</p>
        </div>
      )}
      {dataArr?.information?.objectives?.length > 0 && (
        <div className="flex flex-col gap-5 py-5 ">
          <p className="text-4xl font-semibold">Objectives</p>
          {dataArr?.information?.objectives?.map((item, index) => {
            return (
              <div key={item} className="flex flex-row gap-3 items-center">
                <p className="text-3xl font-bold  text-customColor">
                  {index < 9 ? '0' : ''}
                  {index + 1}
                </p>
                <p className="text-xl">{item}</p>
              </div>
            )
          })}
        </div>
      )}
    </div>
  )
}

export default AllDataComponents
