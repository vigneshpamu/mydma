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
      <div className="flex items-center py-20 justify-center h-full sm:py-10">
        <div className="w-[1347px] relative flex items-center  2xl:w-[1200px] xl:w-[1000px] lg:w-[800px] 2md:[600px] justify-center">
          <img
            src="images/home/feedback/main.png"
            className="2md:w-[700px] sm:w-[90%]"
            alt=""
          />

          <Dialog>
            <DialogTrigger className="absolute rounded-md top-[47%] left-[6.1%]  2xl:left-[5%] 2md:left-[10%] bg-white items-center gap-4  active:scale-95 flex p-2 sm:px-2 sm:p-1 border-2 border-customColor px-4">
              <p className="font-semibold sm:text-sm">Feedback</p>
              <img
                src="/images/home/elements/b-rarrow.png"
                className="sm:w-[15px] sm:h-auto object-cover"
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
          <Dialog>
            <DialogTrigger className="absolute rounded-md bottom-[15%] right-[30%] 2xl:right-[28%] xl:right-[25.5%]  lg:right-[22%] lg:bottom-[10%]  bg-white items-center gap-4 active:scale-95 sm:px-2 sm:p-1  flex p-2 border-2 border-customColor px-4">
              <p className="font-semibold sm:text-sm">Complaint</p>
              <img
                src="/images/home/elements/b-rarrow.png"
                className="sm:w-[15px] sm:h-auto object-cover"
                alt=""
              />
            </DialogTrigger>
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
