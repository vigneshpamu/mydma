import Link from 'next/link'
import React from 'react'

const InfoSect = ({ dataArr, paramsData }) => {
  console.log(dataArr[0]?.website)
  return (
    <>
      <div className="relative h-[550px] 1xl:h-[650px] lg:h-[1350px]  xsm:h-[1470px] 3xsm:h-[1570px]">
        <div className="absolute h-[350px]  lg:flex-col left-1/2 transform -translate-x-1/2 w-[1327px] 1xl:w-[90%] m-auto ">
          <div className="w-[55%] lg:w-[100%] lg:mt-[730px]  xl:w-[52%] py-4 flex flex-col mr-5 gap-10">
            <p className="text-4xl font-bold w-[100%] leading-tight xl:text-3xl	sm:text-2xl">
              Sed ut perspiciatis unde omnis iste natus error sit voluptatem.
            </p>
            <p className="text-xl tracking-wide	xl:text-lg">
              (Awaiting Data for all Municipalities)
              <br /> Sed ut perspiciatis unde omnis iste natus error sit
              voluptatem accusantium doloremque laudantium, totam rem aperiam,
              eaque ipsa quae ab illo inventore veritatis et quasi architecto
              beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia
              voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur
              magni dolores eos qui ratione voluptatem sequi nesciunt. Sed ut
              perspiciatis unde omnis iste natus error sit voluptatem
              accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
              quae ab illo inventore veritatis et quasi architecto beatae vitae
              dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit
              aspernatur aut odit aut fugit, sed quia consequuntur magni dolores
              eos qui ratione voluptatem sequi nesciunt.
            </p>
          </div>
          <div className="absolute bg-gray-50 p-4 w-[424px] lg:w-[100%] z-20 right-0 top-[-475px] lg:top-[-40px] rounded-lg h-[750px] flex flex-col gap-6">
            <Link href={`${dataArr[0]?.website}`}>
              <div className="flex flex-row gap-3 border-2 cursor-pointer hover:bg-gray-100 transition-all">
                <div className="border-2 rounded-md w-[130px] h-[130px]">
                  <img
                    src={dataArr[0]?.logo}
                    alt=""
                    className="rounded-md object-cover"
                  />
                </div>
                <div className="h-[130px] flex flex-col justify-between py-2">
                  <p className="font-bold w-[60%]">{paramsData}</p>
                  <div className="flex flex-row w-full justify-between">
                    <p className="text-customColor text-lg">Visit Website</p>
                    {/* <img src="/images/home/elements/b-rarrow.png" alt="" /> */}
                  </div>
                </div>
              </div>
            </Link>
            <div className="w-full h-[4px] bg-gray-200"></div>
            <div className="flex flex-col gap-2">
              <p className="font-semibold">Location</p>
              <iframe
                src={dataArr[0]?.map}
                width="400"
                height="300"
                allowFullScreen=""
                loading="lazy"
                referrerpolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>

            <Link href={`tel:${dataArr[0]?.number}`}>
              <button className="flex w-[200px] justify-between items-center m-auto z-20 border-2 border-customColor shadow-md p-3 px-4 transition-all hover:text-white hover:bg-customColor rounded-3xl">
                <p className="font-bold">Call now</p>
                <img src="//images/home/elements/b-rarrow.png" alt="" />
              </button>
            </Link>
            <div className="flex flex-row items-center justify-center gap-5">
              {dataArr[0]?.socials.map((item, index) => {
                return (
                  <Link key={index} href={item.link}>
                    <div>
                      <img src={item.icon} alt="" />
                    </div>
                  </Link>
                )
              })}
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default InfoSect
