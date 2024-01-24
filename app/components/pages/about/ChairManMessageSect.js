import React from 'react'

const ChairManMessageSect = () => {
  return (
    <>
      <div className="relative h-[850px] m-auto">
        <div className="flex flex-col gap-10 pt-4 w-[1347px] absolute left-1/2 transform -translate-x-1/2 m-auto bg-transparent">
          <div className="flex flex-row items-center gap-6">
            <p className="text-2xl font-semibold">Chairman Message</p>
            <div className="w-[120px] h-[5px] rounded-lg bg-customColor"></div>
          </div>
          <div className="flex flex-row justify-between gap-10">
            <img
              src="images/about/message/chairman.jpg"
              className="w-[530px] h-[600px] object-cover"
              alt=""
            />
            <div className="flex flex-col gap-6">
              <p className="text-4xl font-bold leading-tight">
                Sed ut perspiciatis unde omnis iste natus error sit voluptatem.
              </p>
              <p className="text-md w-[80%] leading-relaxed	">
                The Department of Municipal Affairs in Sharjah is one of the
                most important government agencies in the emirate. It is the
                department responsible and concerned with developing the
                municipal sector throughout the emirate. The department is keen
                to advance municipal work in all its fields, relying on its
                qualified human cadres, and applying the best standards of
                institutional excellence to achieve To the global level and keep
                pace with technological developments in all services provided to
                the public, in order to achieve the visions and aspirations of
                His Highness Sheikh Dr. Sultan bin Muhammad Al Qasimi, Member of
                the Supreme Council and Ruler of Sharjah - may God protect him -
                and the follow-up of His Highness Sheikh Sultan bin Muhammad bin
                Sultan Al Qasimi, Crown Prince, Deputy Ruler of Sharjah,
                Chairman of the Executive Council - May God protect him - aiming
                to achieve comprehensive development and provide a decent
                quality of life for all Residents of the emirate.
                <br />
                <br />
                Today, the Department is witnessing a remarkable development in
                highlighting its role and providing its services and upgrading
                them to the highest smart standards, as the Department of
                Municipal Affairs website was launched today in its new look to
                complement the achievement of the aspirations and goals of the
                Department, to be an important window in embodying communication
                and constructive institutional interaction with the external
                public, thus achieving the most important The elements of
                partnership and success, thank you With you we rise to the best
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default ChairManMessageSect
