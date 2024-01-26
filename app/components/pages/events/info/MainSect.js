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
      <div className="relative h-[1250px]">
        <div className="flex flex-col gap-5 absolute w-[1047px] left-1/2 transform -translate-x-1/2 ">
          <p className="text-4xl font-bold w-[90%]">
            Sed ut perspiciatis unde omnis iste natus error sit voluptatem.
          </p>
          <p className="leading-normal tracking-wide text-lg">
            Sed ut perspiciatis unde omnis iste natus error sit voluptatem
            accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
            quae ab illo inventore veritatis et quasi architecto beatae vitae
            dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit
            aspernatur aut odit aut fugit, sed quia consequuntur magni dolores
            eos qui ratione voluptatem sequi nesciunt. Sed ut perspiciatis unde
            omnis iste natus error sit voluptatem accusantium doloremque
            laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore
            veritatis et quasi architecto beatae vitae dicta sunt explicabo.
            Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut
            fugit, sed quia consequuntur magni dolores eos qui ratione
            voluptatem sequi nesciunt.
          </p>
          <img src="/images/events/info/blog/demo.png" alt="" />
          <p className="leading-normal tracking-wide text-lg">
            Sed ut perspiciatis unde omnis iste natus error sit voluptatem
            accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
            quae ab illo inventore veritatis et quasi architecto beatae vitae
            dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit
            aspernatur aut odit aut fugit, sed quia consequuntur magni dolores
            eos qui ratione voluptatem sequi nesciunt. Sed ut perspiciatis unde
            omnis iste natus error sit voluptatem accusantium doloremque
            laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore
            veritatis et quasi architecto beatae vitae dicta sunt explicabo.
            Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut
            fugit, sed quia consequuntur magni dolores eos qui ratione
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
      </div>
    </>
  )
}

export default MainSect
