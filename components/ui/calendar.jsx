'use client'
import * as React from 'react'
import { ChevronLeft, ChevronRight } from 'lucide-react'
import { DayPicker } from 'react-day-picker'

import { cn } from '@/lib/utils'
import { buttonVariants } from '@/components/ui/button'

function Calendar({ className, classNames, showOutsideDays = true, ...props }) {
  return (
    <DayPicker
      disableNavigation
      formatWeekDay={(nameOfDay) => nameOfDay.substr(0, 3).toUpperCase()}
      showOutsideDays={showOutsideDays}
      className={cn('p-3', className)}
      classNames={{
        months:
          'flex flex-col  sm:flex-row space-y-4 sm:space-x-4 sm:space-y-0',
        month: 'space-y-1',
        caption:
          'flex justify-center  relative items-center p-3 bg-customColor',
        caption_label: ' font-medium text-3xl text-white ',
        nav: 'space-x-1 flex items-center  ',
        nav_button: cn(
          buttonVariants({ variant: 'outline' }),
          'h-7  w-7 bg-transparent p-0 opacity-50 hover:opacity-100'
        ),
        nav_button_previous: 'absolute left-1',
        nav_button_next: 'absolute right-1',
        table: 'space-y-1  flex items-center justify-center flex-col w-full',
        head_row: 'flex w-[670px] bg-gray-200 justify-between  p-2 px-6',
        head_cell:
          'text-black  rounded-md w-9 font-normal dark:text-black-400  text-2xl ',
        row: 'flex ',
        cell: 'h-[96px] w-[96px] text-center text-sm p-0 relative [&:has([aria-selected].day-range-end)]:rounded-r-md [&:has([aria-selected].day-outside)]:bg-slate-100/50 [&:has([aria-selected])]:bg-slate-100 first:[&:has([aria-selected])]:rounded-l-md last:[&:has([aria-selected])]:rounded-r-md focus-within:relative focus-within:z-20 dark:[&:has([aria-selected].day-outside)]:bg-slate-800/50 dark:[&:has([aria-selected])]:bg-slate-800',
        day: cn(
          buttonVariants({ variant: 'ghost' }),
          'h-[96px] w-[96px] p-0 font-normal aria-selected:opacity-1000 text-4xl  border-2 border-[#D3B9A1] !rounded-sm'
        ),
        day_range_end: 'day-range-end',
        day_selected:
          'bg-[#D3B9A1] !text-white hover:opacity-95 focus:bg-[#D3B9A1]  dark:bg-slate-50 dark:text-slate-900 dark:hover:bg-slate-50 dark:hover:text-slate-900 dark:focus:bg-slate-50 dark:focus:text-slate-900',
        day_today:
          'bg-gray-100 dark:bg-slate-800 dark:text-slate-50 text-[#D3B9A1]',
        day_outside:
          'day-outside text-slate-500 opacity-50 aria-selected:bg-slate-100/50 aria-selected:text-slate-500 aria-selected:opacity-30 dark:text-slate-400 dark:aria-selected:bg-slate-800/50 dark:aria-selected:text-slate-400 text-white',
        day_disabled: 'text-slate-500 opacity-50 dark:text-slate-400',
        day_range_middle:
          'aria-selected:bg-slate-100 aria-selected:text-slate-900 dark:aria-selected:bg-slate-800 dark:aria-selected:text-slate-50',
        day_hidden: 'invisible',
        ...classNames,
      }}
      components={{
        IconLeft: ({ ...props }) => <ChevronLeft className="h-4 w-4" />,
        IconRight: ({ ...props }) => <ChevronRight className="h-4 w-4" />,
      }}
      {...props}
    />
  )
}
Calendar.displayName = 'Calendar'

export { Calendar }
