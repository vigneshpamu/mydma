import React from 'react'
import GlobalPrac from './components/GlobalPrac'

const AllDataComponents = ({ dataArr }) => {
  console.log(dataArr)
  return (
    <div className="">
      {dataArr?.information?.globalPracticesArray?.length > 0 && (
        <GlobalPrac dataArr={dataArr} />
      )}
    </div>
  )
}

export default AllDataComponents
