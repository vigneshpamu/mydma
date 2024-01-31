import React from 'react'

const GlobalPrac = ({ dataArr }) => {
  return (
    <div className="flex flex-col gap-8 py-10 w-[1347px] mx-auto">
      <p className="text-4xl font-semibold">Global Practices</p>
      <div className="flex flex-col gap-2">
        {dataArr?.information?.globalPracticesArray?.map((item, index) => {
          return (
            <div key={index} className="text-lg">
              {index + 1}. {item}
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default GlobalPrac
