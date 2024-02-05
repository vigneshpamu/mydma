/* eslint-disable @next/next/no-img-element */
import React, { useState } from 'react'
import { Button } from '@/components/ui/button'
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Textarea } from '@/components/ui/textarea'
import Image from 'next/image'

const LeftSideSticky = () => {
  const [sad, setSad] = useState(false)
  const [mod, setMod] = useState(false)
  const [happy, setHappy] = useState(false)

  const handleExp = (type) => {
    setSad(false)
    setMod(false)
    setHappy(false)
    if (type === 'sad') {
      setSad((prev) => !prev)
    } else if (type === 'mod') {
      setMod((prev) => !prev)
    } else {
      setHappy((prev) => !prev)
    }
  }
  return (
    <>
      <div className="fixed bottom-20 flex flex-col gap-2 !z-50">
        <div>
          <Dialog>
            <DialogTrigger>
              <Image
                src="/images/home/side/1.png"
                alt="hero"
                height={40}
                width={40}
                // layout="fill"
                objectFit="cover"
                className="transition-all hidden	md:block hover:opacity-90 cursor-pointer"
              />
              <Image
                src="/images/home/side/1.1.png"
                alt="hero"
                height={40}
                width={40}
                // layout="fill"
                objectFit="cover"
                className="transition-all  md:hidden hover:opacity-90 cursor-pointer"
              />
            </DialogTrigger>
            <DialogContent className="flex items-start flex-col  sm:w-[350px] md:w-[400px]  rounded-lg">
              <DialogHeader className="text-left flex flex-col gap-3">
                <DialogTitle className="flex flex-row items-center gap-20 md:gap-10 sm:gap-5">
                  <p>Feedback</p>
                  <div className="w-[100px] h-[4px] rounded-lg bg-customColor"></div>
                </DialogTitle>
                <DialogDescription className="">
                  Fill details with your queries or messages in the below form
                  and submit to us, we will go through and take action
                </DialogDescription>
              </DialogHeader>
              <div className="flex flex-col gap-4  w-full">
                <Input id="name" placeholder="Name" className="w-[100%]" />
                <div className="flex items-center gap-4">
                  <Input
                    id="username"
                    placeholder="Email Address"
                    className="w-[100%]"
                  />
                  <Input
                    id="username"
                    placeholder="Phone Number"
                    className="w-[100%]"
                  />
                </div>
                <Input id="name" placeholder="Feedback" className="w-[100%]" />
                <Textarea placeholder="Type your message here." />
              </div>
              <DialogFooter className="">
                <Button type="submit" className="bg-customColor">
                  Save changes
                </Button>
              </DialogFooter>
            </DialogContent>
          </Dialog>
        </div>
        <div>
          <Dialog>
            <DialogTrigger>
              <Image
                src="/images/home/side/2.png"
                alt="hero"
                height={40}
                width={40}
                // layout="fill"
                objectFit="cover"
                className="transition-all hidden	md:block hover:opacity-90 cursor-pointer"
              />
              <Image
                src="/images/home/side/2.1.png"
                alt="hero"
                height={40}
                width={40}
                // layout="fill"
                objectFit="cover"
                className="transition-all  md:hidden hover:opacity-90 cursor-pointer"
              />
            </DialogTrigger>
            <DialogContent className="flex items-start flex-col w-[600px] sm:w-[350px] md:w-[400px]  rounded-lg">
              <DialogHeader className="text-left flex flex-col gap-3">
                <DialogTitle className="flex flex-row items-center gap-20 md:gap-10 sm:gap-5">
                  <p>Happiness meter</p>
                  <div className="w-[100px] h-[4px] rounded-lg bg-customColor"></div>
                </DialogTitle>
                <DialogDescription className="">
                  Rate your experience with this website
                </DialogDescription>
              </DialogHeader>
              <div className="flex flex-col gap-4  w-full">
                {/* "/images/home/elements/cross.png" */}
                <div className="flex flex-row justify-between">
                  <div
                    onClick={() => handleExp('sad')}
                    className="p-3 hover:bg-gray-50 transition-all cursor-pointer"
                  >
                    <svg
                      width="128"
                      height="128"
                      viewBox="0 0 128 128"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                      className="md:w-[70px] md:h-[70px]"
                    >
                      <g clip-path="url(#clip0_320_6433)">
                        <path
                          d="M64 0C28.7103 0 0 28.7103 0 64C0 99.2897 28.7103 128 64 128C99.2897 128 128 99.2897 128 64C128 28.7103 99.2897 0 64 0ZM64 120.5C32.8457 120.5 7.5 95.1543 7.5 64C7.5 32.8457 32.8457 7.5 64 7.5C95.1543 7.5 120.5 32.8457 120.5 64C120.5 95.1543 95.1543 120.5 64 120.5Z"
                          fill={sad ? 'red' : '#B48348'}
                        />
                        <path
                          d="M64.0002 71.811C53.5152 71.811 43.6542 77.3985 38.2657 86.3928C37.2012 88.1693 37.7787 90.4725 39.5552 91.5368C41.3319 92.6018 43.6347 92.0238 44.6992 90.2473C48.7407 83.5018 56.1364 79.311 64.0002 79.311C71.8862 79.311 79.2927 83.5195 83.3292 90.2943C84.0309 91.4718 85.2762 92.1255 86.5542 92.1255C87.2069 92.1255 87.8684 91.9548 88.4699 91.5965C90.2492 90.5363 90.8319 88.2348 89.7719 86.4555C84.3902 77.4223 74.5149 71.811 64.0002 71.811Z"
                          fill={sad ? 'red' : '#B48348'}
                        />
                        <path
                          d="M55.8179 50.9284C56.4887 48.9691 55.4439 46.8369 53.4847 46.1661C51.5249 45.4954 49.393 46.5401 48.7222 48.4994C47.4939 52.0884 44.1197 54.4999 40.3259 54.4999C36.5297 54.4999 33.1544 52.0861 31.9274 48.4939C31.2579 46.5344 29.1269 45.4879 27.1667 46.1574C25.2067 46.8269 24.1609 48.9584 24.8302 50.9181C27.0942 57.5464 33.3214 61.9999 40.3259 61.9999C47.3254 61.9999 53.5512 57.5506 55.8179 50.9284Z"
                          fill={sad ? 'red' : '#B48348'}
                        />
                        <path
                          d="M100.856 46.1661C98.8978 45.4959 96.765 46.5401 96.0938 48.4994C94.865 52.0884 91.4908 54.4999 87.6973 54.4999C83.9008 54.4999 80.5255 52.0861 79.2985 48.4939C78.629 46.5344 76.4985 45.4879 74.5378 46.1574C72.5778 46.8269 71.532 48.9584 72.2013 50.9181C74.4653 57.5464 80.6928 61.9999 87.6973 61.9999C94.6965 61.9999 100.922 57.5509 103.19 50.9289C103.86 48.9691 102.816 46.8371 100.856 46.1661Z"
                          fill={sad ? 'red' : '#B48348'}
                        />
                      </g>
                      <defs>
                        <clipPath id="clip0_320_6433">
                          <rect width="128" height="128" fill="white" />
                        </clipPath>
                      </defs>
                    </svg>
                  </div>
                  <div
                    onClick={() => handleExp('mod')}
                    className="p-3 hover:bg-gray-50 transition-all cursor-pointer"
                  >
                    <svg
                      width="128"
                      height="128"
                      viewBox="0 0 128 128"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                      className="md:w-[70px] md:h-[70px]"
                    >
                      <g clip-path="url(#clip0_320_6439)">
                        <path
                          d="M109.255 18.745C97.1668 6.65732 81.095 0 64 0C46.905 0 30.8332 6.65732 18.745 18.745C6.65732 30.8332 0 46.905 0 64C0 81.095 6.65732 97.1668 18.745 109.255C30.8332 121.343 46.905 128 64 128C81.095 128 97.1668 121.343 109.255 109.255C121.343 97.1668 128 81.095 128 64C128 46.905 121.343 30.8332 109.255 18.745ZM64 120.082C33.076 120.082 7.91753 94.924 7.91753 64C7.91753 33.076 33.076 7.91753 64 7.91753C94.924 7.91753 120.082 33.076 120.082 64C120.082 94.924 94.924 120.082 64 120.082Z"
                          fill={mod ? 'gray' : '#B48348'}
                        />
                        <path
                          d="M84.0613 42.6191C78.968 42.6191 74.8242 46.7629 74.8242 51.8563C74.8242 56.9496 78.968 61.0934 84.0613 61.0934C89.1547 61.0934 93.2984 56.9496 93.2984 51.8563C93.2984 46.7629 89.1547 42.6191 84.0613 42.6191Z"
                          fill={mod ? 'gray' : '#B48348'}
                        />
                        <path
                          d="M53.1759 51.8563C53.1759 46.7629 49.0321 42.6191 43.9388 42.6191C38.8454 42.6191 34.7017 46.7629 34.7017 51.8563C34.7017 56.9496 38.8454 61.0934 43.9388 61.0934C49.0321 61.0934 53.1759 56.9496 53.1759 51.8563Z"
                          fill={mod ? 'gray' : '#B48348'}
                        />
                        <path
                          d="M89.0011 82.5386H38.999V90.4561H89.0011V82.5386Z"
                          fill={mod ? 'gray' : '#B48348'}
                        />
                      </g>
                      <defs>
                        <clipPath id="clip0_320_6439">
                          <rect width="128" height="128" fill="white" />
                        </clipPath>
                      </defs>
                    </svg>
                  </div>
                  <div
                    onClick={() => handleExp('happy')}
                    className="p-3 hover:bg-gray-50 transition-all cursor-pointer"
                  >
                    <svg
                      width="128"
                      height="128"
                      viewBox="0 0 128 128"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                      className="md:w-[70px] md:h-[70px]"
                    >
                      <path
                        d="M64 0C28.7104 0 0 28.7104 0 64C0 99.2896 28.7104 128 64 128C99.2896 128 128 99.2896 128 64C128 28.7104 99.29 0 64 0ZM64 121.081C48.3215 121.081 34.0999 114.726 23.7737 104.458C19.65 100.358 16.1494 95.632 13.4237 90.4384C9.27234 82.5295 6.91901 73.5348 6.91901 64C6.91901 32.5254 32.5254 6.91901 64 6.91901C78.9291 6.91901 92.5353 12.6826 102.717 22.0985C107.997 26.9798 112.356 32.842 115.5 39.3943C119.076 46.8491 121.081 55.1947 121.081 64C121.081 95.4746 95.4746 121.081 64 121.081Z"
                        fill={happy ? 'green' : '#B48348'}
                      />
                      <path
                        d="M43.0992 56.6486C46.9205 56.6486 50.0182 53.5508 50.0182 49.7296C50.0182 45.9083 46.9205 42.8105 43.0992 42.8105C39.2779 42.8105 36.1802 45.9083 36.1802 49.7296C36.1802 53.5508 39.2779 56.6486 43.0992 56.6486Z"
                        fill={happy ? 'green' : '#B48348'}
                      />
                      <path
                        d="M85.9107 56.6486C89.732 56.6486 92.8297 53.5508 92.8297 49.7296C92.8297 45.9083 89.732 42.8105 85.9107 42.8105C82.0894 42.8105 78.9917 45.9083 78.9917 49.7296C78.9917 53.5508 82.0894 56.6486 85.9107 56.6486Z"
                        fill={happy ? 'green' : '#B48348'}
                      />
                      <path
                        d="M63.8777 99.4588C77.2633 99.4588 90.0916 92.6133 97.4366 81.2475L91.6251 77.4922C84.8803 87.9291 72.5433 93.7536 60.1898 92.3283C50.5629 91.2182 41.6603 85.6718 36.3746 77.4922L30.5635 81.2475C36.9592 91.1456 47.7382 97.857 59.3967 99.2019C60.8934 99.3744 62.3879 99.4588 63.8777 99.4588Z"
                        fill={happy ? 'green' : '#B48348'}
                      />
                    </svg>
                  </div>
                </div>
                <Textarea placeholder="Type your message here." />
              </div>
              <DialogFooter className="">
                <Button type="submit" className="bg-customColor">
                  Submit
                </Button>
              </DialogFooter>
            </DialogContent>
          </Dialog>
        </div>
      </div>
      <div className="fixed bottom-20 flex flex-col gap-2 !z-10"></div>
    </>
  )
}

export default LeftSideSticky
