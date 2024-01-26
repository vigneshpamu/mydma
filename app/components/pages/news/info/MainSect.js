import React from 'react'

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
      <div className="relative mt-10 h-[1200px]">
        <div className="flex flex-row gap-24 absolute w-[1347px] left-1/2 transform -translate-x-1/2 ">
          <div className="flex flex-col gap-5">
            <p className="text-4xl font-bold w-[90%]">
              Sed ut perspiciatis unde omnis iste natus error sit voluptatem.
            </p>
            <p className="leading-normal tracking-wide text-lg">
              Sed ut perspiciatis unde omnis iste natus error sit voluptatem
              accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
              quae ab illo inventore veritatis et quasi architecto beatae vitae
              dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit
              aspernatur aut odit aut fugit, sed quia consequuntur magni dolores
              eos qui ratione voluptatem sequi nesciunt. Sed ut perspiciatis
              unde omnis iste natus error sit voluptatem accusantium doloremque
              laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore
              veritatis et quasi architecto beatae vitae dicta sunt explicabo.
              Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit
              aut fugit, sed quia consequuntur magni dolores eos qui ratione
              voluptatem sequi nesciunt.
            </p>
            <img src="/images/events/info/blog/demo.png" alt="" />
            <p className="leading-normal tracking-wide text-lg">
              Sed ut perspiciatis unde omnis iste natus error sit voluptatem
              accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
              quae ab illo inventore veritatis et quasi architecto beatae vitae
              dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit
              aspernatur aut odit aut fugit, sed quia consequuntur magni dolores
              eos qui ratione voluptatem sequi nesciunt. Sed ut perspiciatis
              unde omnis iste natus error sit voluptatem accusantium doloremque
              laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore
              veritatis et quasi architecto beatae vitae dicta sunt explicabo.
              Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit
              aut fugit, sed quia consequuntur magni dolores eos qui ratione
              voluptatem sequi nesciunt.
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
          <div className="min-w-[420px] h-full bg-gray-100 p-4 py-7 flex flex-col gap-4">
            <div className="flex flex-row justify-between items-center">
              <p className="text-3xl font-bold">Recent Items</p>
              <div className="w-[100px] h-[4px] bg-customColor"></div>
            </div>
            <div className="flex flex-col gap-5">
              {recentData.map((item, index) => {
                return (
                  <div
                    className="w-full border-2 border-customColor rounded-xl"
                    key={index}
                  >
                    <img src={item.img} alt="" />
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
    </>
  )
}

export default MainSect
