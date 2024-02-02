import React from 'react'

const MembersSect = ({ dataArr }) => {
  console.log(dataArr, 'DataArr')
  return (
    <>
      <div className="relative max-w-[1100px] pb-20 mx-auto mt-10">
        <div className="flex flex-col gap-8 sm:gap-12  m-auto ">
          <p className="text-center font-bold text-xl   md:text-3xl m-auto">
            Members of Executive Council
          </p>
          <div className="flex flex-col sm:flex-row sm:px-2 sm:gap-4 lg:gap-20  sm:items-end sm:justify-center items-center justify-between gap-10">
            <div className="relative w-[350px]   h-[400px]">
              <img
                src="/images/councils/info/members/bg.png"
                className="w-full  h-[200px] z-0 absolute bottom-0"
                alt=""
              />
              <img
                src={dataArr?.councilMembers?.chairman?.img}
                className="w-[200px] h-[240px] border-2 border-customColor rounded-lg z-10 absolute top-0 left-1/2 transform -translate-x-1/2   m-auto object-cover"
                alt=""
              />
              <div className="absolute bottom-7 w-full flex flex-col gap-2 text-center 2lg:gap-3 lg:bottom-5 items-center justify-center">
                <p className="text-mde font-bold text-white  w-[85%] ">
                  {dataArr?.councilMembers?.chairman?.name}
                </p>
                <p className="text-sm text-white text-center w-[70%] ">
                  {dataArr?.councilMembers?.chairman?.role}
                </p>
              </div>
            </div>
            {dataArr?.councilMembers?.vicePresident?.img.length > 0 && (
              <div className="relative w-[350px]  h-[350px]">
                <img
                  src="/images/councils/info/members/bg.png"
                  className="w-full h-[160px]  object-cover absolute bottom-0"
                  alt=""
                />
                <img
                  src={dataArr?.councilMembers?.vicePresident?.img}
                  className="w-[200px] h-[240px] border-2 border-customColor rounded-lg z-10 absolute top-0 left-1/2 transform -translate-x-1/2   m-auto object-cover"
                  alt=""
                />
                <div className="absolute bottom-5 w-full flex flex-col gap-2 text-center 2lg:gap-3 lg:bottom-5 items-center justify-center">
                  <p className="text-mde font-bold text-white w-[85%] ">
                    {dataArr?.councilMembers?.vicePresident?.name}
                  </p>
                  <p className="text-sm text-white text-center w-[70%] ">
                    {dataArr?.councilMembers?.vicePresident?.role}
                  </p>
                </div>
              </div>
            )}
          </div>
          <div className="grid max-w-[1100px] justify-items-center place-items-center grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 sm:gap-x-5 lg:gap-x-10	 gap-y-8  px-10 m-auto">
            {dataArr?.councilMembers?.otherMembers?.map((item) => {
              return (
                <div
                  key={item.id}
                  className="relative w-full flex flex-col gap-3 items-center justify-between "
                >
                  <div className="w-[250px] h-[270px] rounded-lg border-2 border-customColor px-2">
                    <img
                      src={item.img}
                      className="w-full h-full rounded-lg object-cover"
                      alt=""
                    />
                  </div>
                  <p className="text-center font-semibold text-md max-w-[250px]    ">
                    {item.name}
                  </p>
                  {/* <p className="text-center xsm:text-[12px]">{item.role}</p> */}
                  {/* <button className="bg-[#036C73] w-full rounded-md hover:opacity-95 text-white py-2">
                    Know More
                  </button> */}
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
