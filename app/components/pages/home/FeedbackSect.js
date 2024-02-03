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
const FeedbackSect = () => {
  return (
    <>
      <div className="flex items-center py-4 justify-center h-full sm:py-10">
        <div className="  relative flex items-center   justify-center">
          <img
            src="/images/home/feedback/main2.png"
            className="h-[950px] sm:h-[550px] object-cover"
            alt=""
          />

          <Dialog>
            <div className="flex flex-col gap-5 absolute  top-[10%] left-[5%] ">
              <div className="flex flex-row  items-center gap-5">
                <p className="text-2xl font-semibold text-white">Feedback</p>
                <div className="w-[100px] h-[4px] bg-white"></div>
              </div>
              <p className="text-3xl w-[80%] font-semibold text-white">
                Share your feedbacks and suggestions.
              </p>
              <DialogTrigger className="flex flex-row items-center rounded-lg border-2 border-customColor gap-3 bg-white p-3 max-w-[160px]">
                <p className="font-semibold sm:text-sm sm:font-normal">
                  Feedback
                </p>
                <img
                  src="/images/home/elements/b-rarrow.png"
                  className="sm:w-[15px] sm:h-auto object-cover"
                  alt=""
                />
              </DialogTrigger>
            </div>
            <DialogContent className="flex items-start flex-col  w-[350px] md:w-[400px]  rounded-lg">
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
          <Dialog>
            <div className="flex flex-col gap-5 absolute rounded-md bottom-[5%] left-[5%] sm:left-[50%]">
              <div className="flex flex-row  items-center gap-5">
                <p className="text-2xl font-semibold text-white">Complaints</p>
                <div className="w-[100px] h-[4px] bg-white"></div>
              </div>
              <p className="text-3xl w-[90%] font-semibold text-white">
                Where we should improve Share your points.
              </p>
              <DialogTrigger className="flex flex-row items-center gap-3 bg-white p-3 max-w-[160px] rounded-lg border-2 border-customColor">
                <p className="font-semibold sm:text-sm sm:font-normal">
                  Complaints
                </p>
                <img
                  src="/images/home/elements/b-rarrow.png"
                  className="sm:w-[15px] sm:h-auto object-cover"
                  alt=""
                />
              </DialogTrigger>
            </div>
            <DialogContent className="flex items-start flex-col  sm:w-[350px] md:w-[400px]  rounded-lg">
              <DialogHeader className="text-left flex flex-col gap-3">
                <DialogTitle className="flex flex-row items-center gap-20 md:gap-10 sm:gap-5">
                  <p>Complaint</p>
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
      </div>
    </>
  )
}

export default FeedbackSect
