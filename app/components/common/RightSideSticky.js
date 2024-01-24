import Link from 'next/link'
import React from 'react'

const RightSideSticky = () => {
  const socialData = [
    {
      id: 1,
      icon: '/images/home/elements/social_icon/fb.png',
      link: '/',
    },
    {
      id: 2,
      icon: '/images/home/elements/social_icon/tw.png',
      link: '/',
    },
    {
      id: 3,
      icon: '/images/home/elements/social_icon/ld.png',
      link: '/',
    },
    {
      id: 4,
      icon: '/images/home/elements/social_icon/ins.png',
      link: '/',
    },
    {
      id: 5,
      icon: '/images/home/elements/social_icon/yt.png',
      link: '/',
    },
  ]
  return (
    <>
      <div className="fixed top-60 right-6 flex flex-col gap-2 !z-10">
        {socialData.map((item) => {
          return (
            <Link href={item.link} key={item.id}>
              <img className="shadow-lg rounded-full" src={item.icon} alt="" />
            </Link>
          )
        })}
      </div>
    </>
  )
}

export default RightSideSticky
