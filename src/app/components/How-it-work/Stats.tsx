import React from 'react'

interface StatsProps {  
    FirstHeading: string;
    SecondHeading: string;
}

const Stats = ({FirstHeading,SecondHeading}:StatsProps) => {
  return (
    <div className='w-full sm:w-1/2 md:w-1/4 h-full flex justify-center items-center flex-col py-4 sm:py-0 gap-y-4'>
      <h1 className='font-Barlow text-3xl sm:text-4xl md:text-5xl font-bold text-center'>{FirstHeading}</h1>
      <h1 className='font-medium w-[200px] text-base sm:text-lg md:text-xl text-center'>{SecondHeading}</h1>
    </div>
  )
}

export default Stats