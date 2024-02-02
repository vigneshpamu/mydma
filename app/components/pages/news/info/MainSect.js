import React from 'react'
import { MdWhatsapp } from 'react-icons/md'

const MainSect = () => {
  const recentData = [
    {
      title: 'Data is Awaited',
      img: '/images/events/info/blog/dm1.png',
      desc: 'Data is Awaited',
    },
    {
      title: 'Data is Awaited',
      img: '/images/events/info/blog/dm2.png',
      desc: 'Data is Awaited',
    },
  ]
  return (
    <>
      <div className="max-w-[1100px] h-full mx-auto mt-1 flex  ">
        <div className="flex flex-col    gap-10 pb-10">
          <div className="flex flex-col gap-5   p-7 bg-[#036C73]">
            <div>
              <p className="text-4xl font-semibold text-white  ">
                Data is Awaited
              </p>
            </div>
            <div className="flex flex-col items-start gap-3  text-white justify-between">
              <p>
                Author: <span className="font-bold">DMCWebAdmin</span>
              </p>
              <p>
                Published on: <span className="font-bold">12-01-2024</span>
              </p>
              <div className="flex flex-row gap-2 items-center justify-center">
                <p>Share: </p>
                <div>
                  <p className="mt-1">
                    <MdWhatsapp />
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="flex items-start justify-center flex-col md:flex-row md:gap-5 h-full gap-14 px-5">
            <div className="flex flex-col h-full gap-5">
              <p className="text-2xl font-bold  ">Data is Awaited</p>
              <p className="leading-normal tracking-wide text-sm">
                Data is Awaited. Data is Awaited.Data is Awaited. Data is
                Awaited. Data is Awaited. Data is Awaited. Data is Awaited. Data
                is Awaited. Data is Awaited. Data is Awaited. Data is Awaited.
                Data is Awaited. Data is Awaited. Data is Awaited.Data is
                Awaited. Data is Awaited. Data is Awaited. Data is Awaited. Data
                is Awaited. Data is Awaited. Data is Awaited. Data is Awaited.
                Data is Awaited. Data is Awaited
              </p>
              <img src="/images/events/info/blog/demo.png" alt="" />
              {/* <p className="leading-normal tracking-wide text-lg xsm:text-sm">
                Sed ut perspiciatis unde omnis iste natus error sit voluptatem
                accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
                quae ab illo inventore veritatis et quasi architecto beatae
                vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia
                voluptas sit aspernatur aut odit aut fugit, sed quia
                consequuntur magni dolores eos qui ratione voluptatem sequi
                nesciunt. Sed ut perspiciatis unde omnis iste natus error sit
                voluptatem accusantium doloremque laudantium, totam rem aperiam,
                eaque ipsa quae ab illo inventore veritatis et quasi architecto
                beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem
                quia voluptas sit aspernatur aut odit aut fugit, sed quia
                consequuntur magni dolores eos qui ratione voluptatem sequi
                nesciunt.
              </p> */}
              <div className="flex flex-row justify-between mt-5">
                <button className="active:scale-95 transition-all">
                  <img src="/images/events/info/blog/icon/left.png" alt="" />
                  <p className="text-[11px]">PREV</p>
                </button>
                <button className="active:scale-95 max-w-[170px] transition-all">
                  <img
                    src="/images/events/info/blog/icon/share.png"
                    className="w-full"
                    alt=""
                  />
                </button>
                <button className="active:scale-95 transition-all">
                  <img src="/images/events/info/blog/icon/right.png" alt="" />
                  <p className="text-[11px]">NEXT</p>
                </button>
              </div>
            </div>
            <div className="h-full w-full    bg-gray-100 p-4 py-7 flex flex-col gap-4">
              <div className="flex flex-row justify-between items-center">
                <p className="text-2xl font-semibold">Recent Items</p>
                <div className="w-[100px] h-[4px] bg-customColor"></div>
              </div>
              <div className="flex flex-col h-full sm:flex-row md:flex-col gap-5">
                {recentData.map((item, index) => {
                  return (
                    <div
                      className="w-full   sm:min-w-[300px]  border-2 border-customColor rounded-xl"
                      key={index}
                    >
                      <img
                        src={item.img}
                        className=" w-full  object-cover"
                        alt=""
                      />
                      <div className="bg-white  rounded-xl p-4 flex flex-col gap-3">
                        <p className="text-customColor font-semibold text-2xl">
                          {item.title}
                        </p>
                        <p>{item.desc}</p>
                      </div>
                    </div>
                  )
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default MainSect
