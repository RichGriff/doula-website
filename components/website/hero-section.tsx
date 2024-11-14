import React from 'react'
import { Button } from '../ui/button'
import Image from 'next/image'

export const Hero = () => {
  return (
    <div className='bg-[#F4ECE4] relative'>
      <div className='mx-auto flex max-w-7xl items-center justify-between p-8 lg:px-8'>
        <div className='flex flex-col-reverse lg:grid lg:grid-cols-2 items-center pt-8 pb-5'>
          <div className='flex flex-col justify-start items-start'>
            <h1 className='text-[40px] leading-tight lg:text-7xl text-pretty font-medium mb-6 font-heading text-[#2C384A]'>Birth & Postpartum Doula</h1>
            <p className='text-md lg:text-lg mb-10 text-[#2C384A]'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut et massa mi. Aliquam in hendrerit urna.</p>
            <Button className='uppercase text-xs py-6 px-8 bg-[#5E55AE] hover:bg-[#554d9e] text-white'>Book a discovery call</Button>
          </div>
          <div className='flex justify-center items-center'>
            <div className='relative w-96 h-[260px] lg:w-[404px] mb-8 lg:-mb-24 lg:h-[523px] rounded-lg lg:rounded-tl-full lg:rounded-tr-full'>
            <Image
              src={'/images/hero.png'}
              alt='Bridie and baby'
              // width={380}
              // height={120}
              fill
              className='rounded-md lg:rounded-tl-full lg:rounded-tr-full z-10 object-cover'
            />
            </div>
          </div>
        </div>
        <Image src={'/images/hero-accent-1.png'} alt='' width={400} height={150} className='hidden md:absolute -top-24 left-96' />
        <Image src={'/images/hero-accent-2.png'} alt='' width={450} height={170} className='hidden md:absolute bottom-0 right-16' />
      </div>
    </div>
  )
}
