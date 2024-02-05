import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const MainSect = () => {
  const connectData = [
    {
      id: 1,
      img: '/images/home/elements/map.png',
      info: 'Cultural Square, Al Ramla East – Sharjah.',
    },
    {
      id: 2,
      img: '/images/home/elements/call.png',
      info: '06 566 2222',
    },
    {
      id: 3,
      img: '/images/home/elements/mail.png',
      info: 'info@dha.shj.ae',
    },
  ]
  const socialData = [
    {
      id: 1,
      icon: '/images/home/elements/social_icon/fb.png',
      link: 'https://www.facebook.com/SharjahDma',
    },
    {
      id: 2,
      icon: '/images/home/elements/social_icon/tw.png',
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
      <div className="relative max-w-[1100px] px-3 pb-8 m-auto">
        <div className="flex flex-col-reverse sm:flex-row 2md:flex-col-reverse gap-7  m-auto bg-transparent">
          <div className="flex flex-col gap-10">
            <div className=" flex flex-col gap-3">
              <p className="text-lg pt-5">
                Organizing and supervising the municipality’s activities in the
                city of Sharjah and providing an integrated innovative services
                system that exceeds the expectations of stakeholders, supported
                by cadres.
              </p>
            </div>
            <div className="bg-[#036C73]   p-7 flex flex-col lg:flex-row gap-8  ">
              <div className="flex flex-col gap-7">
                <p className="text-xl text-white">Connect with us</p>
                <div className="flex flex-col gap-7">
                  {connectData.map((item) => {
                    return (
                      <div
                        key={item.id}
                        className="flex items-center flex-row gap-4"
                      >
                        {/* <img src={item.img} alt="" /> */}
                        <Image
                          src={item.img}
                          alt="contact-img"
                          height={40}
                          width={40}
                          // layout="fill"
                          objectFit="cover"
                          className="pointer-events-none  object-cover"
                        />
                        <p className=" text-white max-w-[250px]">{item.info}</p>
                      </div>
                    )
                  })}
                </div>
              </div>
              <div className="flex flex-col gap-7">
                <p className="text-xl text-white">Connect with us</p>
                <p className=" text-white">
                  The departments official social media channels.
                </p>
                <div className="flex flex-row gap-3">
                  {socialData.map((item) => {
                    return (
                      <Link href={item.link} target="_blank" key={item.id}>
                        <div>
                          <Image
                            src={item.icon}
                            alt="contact-img"
                            height={40}
                            width={40}
                            // layout="fill"
                            objectFit="cover"
                            className="pointer-events-none  object-cover"
                          />
                        </div>
                      </Link>
                    )
                  })}
                </div>
              </div>
            </div>
          </div>
          {/* <img
            className="absolute top-[-470px] right-2"
            src="/images/about/mission/info.png"
            alt=""
          /> */}
          <form className="mt-[-100px] sm:min-w-[350px] flex flex-col gap-6 bg-gray-50  p-6">
            <div className="flex flex-row gap-6 items-center">
              <p className="text-lg font-semibold">Connect with us</p>
              <div className="w-[110px] h-[4px] lg:w-[80px] bg-customColor rounded-lg"></div>
            </div>
            <p className="w-[90%]">
              Fill details with your queries or messages in the below form and
              submit to us, we will go through and take action.
            </p>
            <div className="flex flex-col gap-6">
              <input
                className="border-2 border-customColor p-3  rounded-lg text-black active:outline-none placeholder-black	"
                type="text"
                placeholder="Name"
              />
              <input
                className="border-2 border-customColor p-3  rounded-lg text-black active:outline-none placeholder-black	"
                type="mail"
                placeholder="Email Address"
              />
              <input
                className="border-2 border-customColor p-3  rounded-lg text-black active:outline-none placeholder-black	"
                type="number"
                placeholder="Phone Number"
              />
              <input
                className="border-2 border-customColor p-3  rounded-lg text-black active:outline-none placeholder-black"
                type="text"
                placeholder="Subject"
              />
              <textarea
                className="h-32 w-full resize-none border-2 border-customColor rounded-lg p-3 placeholder-black"
                placeholder="Type your message.."
              ></textarea>
            </div>
            <button
              type="submit"
              className="flex flex-row items-center justify-evenly bg-customColor w-[250px] m-auto p-4 sm:p-3 rounded-2xl"
            >
              <p className="font-semibold text-xl text-white">Submit</p>
              {/* <img src="/images/home/elements/w-rarrow.png" alt="" /> */}
              <Image
                src="/images/home/elements/w-rarrow.png"
                height={0}
                width={30}
                className=" object-cover"
                alt="hero"
              />
            </button>
          </form>
        </div>
      </div>
    </>
  )
}

export default MainSect
