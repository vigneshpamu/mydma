import React from 'react'
import { MdWhatsapp } from 'react-icons/md'

const MainSect = () => {
  const recentData = [
    {
      title: 'Quis autem vel eum iure reprehenderit.',
      img: '/images/events/info/blog/dm1.png',
      desc: 'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem....',
    },
    {
      title: 'Quis autem vel eum iure reprehenderit.',
      img: '/images/events/info/blog/dm2.png',
      desc: 'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem....',
    },
  ]
  return (
    <>
      <div className=" mt-5 flex items-center justify-center">
        <div className="flex flex-col  w-[1347px] 1xl:w-[90%]   gap-10 pb-20">
          <div className="flex flex-col gap-10   p-7 bg-[#036C73]">
            <div>
              <p className="text-4xl font-semibold text-white w-[70%] lg:w-[90%] 2md:text-3xl md:text-2xl ">
                Quis autem vel eum iure reprehenderit qui in ea voluptate.
              </p>
            </div>
            <div className="flex flex-row w-[100%] md:flex-wrap text-white justify-between">
              <div className="flex flex-row  md:flex-wrap gap-10">
                <p>
                  Author: <span className="font-bold">DMCWebAdmin</span>
                </p>
                <p>
                  Published on: <span className="font-bold">12-01-2024</span>
                </p>
              </div>
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
          <div className="flex flex-row 2md:flex-col gap-24 xl:gap-10">
            <div className="flex flex-col gap-5">
              <p className="text-4xl font-bold w-[90%] 2md:text-3xl xsm:w-[100%] ">
                Sed ut perspiciatis unde omnis iste natus error sit voluptatem.
              </p>
              <p className="leading-normal tracking-wide text-lg xsm:text-sm">
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
              </p>
              <img src="/images/events/info/blog/demo.png" alt="" />
              <p className="leading-normal tracking-wide text-lg xsm:text-sm">
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
              </p>
              <div className="flex flex-row justify-between mt-5">
                <button className="active:scale-95 transition-all">
                  <img src="/images/events/info/blog/icon/left.png" alt="" />
                  <p>PREV</p>
                </button>
                <button className="active:scale-95 transition-all">
                  <img src="/images/events/info/blog/icon/share.png" alt="" />
                </button>
                <button className="active:scale-95 transition-all">
                  <img src="/images/events/info/blog/icon/right.png" alt="" />
                  <p>NEXT</p>
                </button>
              </div>
            </div>
            <div className="min-w-[420px] mxsm:min-w-[350px] 2xsm:min-w-[300px] h-full bg-gray-100 p-4 py-7 flex flex-col gap-4">
              <div className="flex flex-row justify-between items-center">
                <p className="text-3xl font-bold 2xsm:text-xl">Recent Items</p>
                <div className="w-[100px] h-[4px] bg-customColor"></div>
              </div>
              <div className="flex flex-col gap-5">
                {recentData.map((item, index) => {
                  return (
                    <div
                      className="w-full border-2 border-customColor rounded-xl"
                      key={index}
                    >
                      <img
                        src={item.img}
                        className="w-full h-[450px] sm:h-[300px] object-cover"
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
