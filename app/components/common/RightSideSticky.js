import Link from 'next/link'
import React from 'react'

const RightSideSticky = () => {
  const socialData = [
    {
      id: 1,
      icon: '/images/home/elements/social_icon/fb.png',
      link: 'https://www.facebook.com/SharjahDma',
    },
    {
      id: 2,
      icon: '/images/home/elements/social_icon/x.png',
      link: 'https://twitter.com/sharjahdma',
    },

    {
      id: 4,
      icon: '/images/home/elements/social_icon/ins.png',
      link: 'https://www.instagram.com/sharjahdma/',
    },
  ]
  return (
    <>
      <div className="fixed top-60 right-3 flex-col gap-2 !z-50 hidden md:flex">
        {socialData.map((item) => {
          return (
            <Link href={item.link} target="_blank" key={item.id}>
              <img
                className="shadow-lg rounded-full w-[60%]"
                src={item.icon}
                alt=""
              />
            </Link>
          )
        })}
      </div>
    </>
  )
}

export default RightSideSticky
