/* eslint-disable @next/next/no-img-element */
import React from 'react'
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

const LeftSideSticky = () => {
  return (
    <>
      <div className="fixed bottom-20 flex flex-col gap-2 !z-10">
        <div>
          <Dialog>
            <DialogTrigger>
              <img
                src="/images/home/side/1.png"
                className="transition-all	 hover:opacity-90 cursor-pointer"
                alt=""
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
              <img
                src="/images/home/side/2.png"
                className="transition-all	 hover:opacity-90 cursor-pointer"
                alt=""
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
                  <div className="p-3 hover:bg-gray-50 transition-all cursor-pointer">
                    <img src="/images/home/elements/sad.png" alt="" />
                  </div>
                  <div className="p-3 hover:bg-gray-50 transition-all cursor-pointer">
                    <img src="/images/home/elements/mod.png" alt="" />
                  </div>
                  <div className="p-3 hover:bg-gray-50 transition-all cursor-pointer">
                    <img src="/images/home/elements/happy.png" alt="" />
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
