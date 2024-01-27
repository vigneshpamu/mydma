import React from 'react'

const MembersSect = ({ dataArr }) => {
  console.log(dataArr, 'DataArr')
  return (
    <>
      <div className="relative h-[1882px] mt-10">
        <div className="flex flex-col gap-16 py-4 absolute w-[1347px] left-1/2 transform -translate-x-1/2 m-auto ">
          <p className="text-center font-bold text-5xl w-[30%] m-auto">
            Members of Executive Council
          </p>
          <div className="flex flex-row justify-between">
            <div className="relative w-[646px] h-[550px]">
              <img
                src="/images/councils/info/members/bg.png"
                className="w-[646px] h-[313px] object-cover absolute bottom-0"
                alt=""
              />
              <img
                src={dataArr?.councilMembers?.chairman?.img}
                className="w-[312px] h-[380px] absolute bottom-40 left-1/2 transform -translate-x-1/2 m-auto object-cover"
                alt=""
              />
              <div className="absolute bottom-10 w-full flex flex-col gap-7 items-center justify-center">
                <p className="text-xl font-bold text-white">
                  {dataArr?.councilMembers?.chairman?.name}
                </p>
                <p className="text-white">
                  {dataArr?.councilMembers?.chairman?.role}
                </p>
              </div>
            </div>
            <div className="relative w-[538px] h-[550px]">
              <img
                src="/images/councils/info/members/bg.png"
                className="w-[538px] h-[240px] object-cover absolute bottom-0"
                alt=""
              />
              <img
                src={dataArr?.councilMembers?.vicePresident?.img}
                className="w-[260px] h-[293px] absolute bottom-40 left-1/2 transform -translate-x-1/2  object-cover"
                alt=""
              />
              <div className="absolute bottom-10 w-full flex flex-col gap-7 items-center justify-center">
                <p className="text-xl font-bold text-white">
                  {dataArr?.councilMembers?.vicePresident?.name}
                </p>
                <p className="text-white">
                  {dataArr?.councilMembers?.vicePresident?.role}
                </p>
              </div>
            </div>
          </div>
          <div className="grid grid-cols-3 items-center	justify-items-center gap-24 gap-x-32 w-[1200px] px-10 m-auto">
            {dataArr?.councilMembers?.otherMembers?.map((item) => {
              return (
                <div
                  key={item.id}
                  className="relative h-[471px] w-full flex flex-col justify-between"
                >
                  <div className="w-[300px] h-[300px] px-2">
                    <img
                      src={item.img}
                      className="w-full h-full object-cover"
                      alt=""
                    />
                  </div>
                  <p className="text-center font-bold text-xl">{item.name}</p>
                  <p className="text-center">{item.role}</p>
                  <button className="bg-[#036C73] rounded-md hover:opacity-95 text-white py-2">
                    Know More
                  </button>
                </div>
              )
            })}
          </div>
        </div>
      </div>
    </>
  )
}

export default MembersSect
