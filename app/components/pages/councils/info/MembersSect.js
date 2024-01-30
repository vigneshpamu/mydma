import React from 'react'

const MembersSect = ({ dataArr }) => {
  console.log(dataArr, 'DataArr')
  return (
    <>
      <div className="relative h-[2000px] xsm:h-[1700px] mt-10">
        <div className="flex flex-col gap-16 lg:gap-4 py-4 absolute w-[1347px] 1xl:w-[90%] left-1/2 transform -translate-x-1/2 m-auto ">
          <p className="text-center font-bold text-5xl w-[80%] md:text-3xl m-auto">
            Members of Executive Council
          </p>
          <div className="flex flex-row justify-between gap-5">
            <div className="relative w-[646px] 1xl:w-[500px] 1xl:h-[450px] 2lg:h-[420px] sm:h-[400px] xsm:h-[350px] 2lg:w-[450px] lg:w-[375px] h-[550px] ">
              <img
                src="/images/councils/info/members/bg.png"
                className="w-full h-[313px] 1xl:h-[240px] 2lg:h-[200px] lg:h-[160px] object-cover absolute bottom-0"
                alt=""
              />
              <img
                src={dataArr?.councilMembers?.chairman?.img}
                className="w-[312px] h-[380px] 1xl:w-[240px] 1xl:h-[290px] lg:w-[200px] lg:h-auto xsm:w-[150px] absolute 2lg:bottom-36 bottom-40 left-1/2 transform -translate-x-1/2 m-auto object-cover"
                alt=""
              />
              <div className="absolute bottom-10 w-full flex flex-col gap-7 2lg:gap-3 lg:bottom-5 items-center justify-center">
                <p className="text-lg font-bold text-white sm:text-[15px] xsm:text-[13px]">
                  {dataArr?.councilMembers?.chairman?.name}
                </p>
                <p className="text-white text-center w-[80%] sm:text-[12px]">
                  {dataArr?.councilMembers?.chairman?.role}
                </p>
              </div>
            </div>
            <div className="relative w-[538px] 1xl:w-[470px] 1xl:h-[450px] sm:h-[400px] xsm:h-[350px] 2lg:h-[420px] lg:w-[330px]  h-[550px]">
              <img
                src="/images/councils/info/members/bg.png"
                className="w-full h-[240px] 1xl:h-[200px] 2lg:h-[150px]  object-cover absolute bottom-0"
                alt=""
              />
              <img
                src={dataArr?.councilMembers?.vicePresident?.img}
                className="w-[260px] h-[293px] 1xl:w-[200px] 1xl:h-[230px] lg:w-[160px] lg:h-auto xsm:w-[120px] 2lg:bottom-28 absolute bottom-40 left-1/2 transform -translate-x-1/2  object-cover"
                alt=""
              />
              <div className="absolute bottom-10 w-full flex flex-col 2lg:gap-3 md:gap-0 sm:gap-0 2lg:bottom-7 gap-7 items-center justify-center">
                <p className="text-lg font-bold text-white sm:text-[15px] xsm:text-[13px]">
                  {dataArr?.councilMembers?.vicePresident?.name}
                </p>
                <p className="text-white w-[80%] text-center sm:text-[12px]">
                  {dataArr?.councilMembers?.vicePresident?.role}
                </p>
              </div>
            </div>
          </div>
          <div className="grid grid-cols-3 place-items-center	 lg:mt-10 md:grid-cols-2 justify-center  items-center	justify-items-center lg:px-2 gap-24 gap-x-32 1xl:gap-x-4 max-w-[1200px] px-10 m-auto">
            {dataArr?.councilMembers?.otherMembers?.map((item) => {
              return (
                <div
                  key={item.id}
                  className="relative w-full flex flex-col gap-3 items-center justify-between"
                >
                  <div className="w-[300px] h-[300px] 1xl:w-[200px] 1xl:h-[200px] lg:w-[175px] lg:h-[175px] xsm:w-[150px] xsm:h-[150px] px-2">
                    <img
                      src={item.img}
                      className="w-full h-full object-cover"
                      alt=""
                    />
                  </div>
                  <p className="text-center font-bold text-xl lg:text-lg xsm:text-[13px]">
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
