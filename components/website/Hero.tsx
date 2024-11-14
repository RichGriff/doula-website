import React from 'react'
import { Button } from '../ui/button'
import Image from 'next/image'

const Hero = () => {
  return (
    <div className='bg-[#F4ECE4] relative'>
      <div className='mx-auto flex max-w-7xl items-center justify-between p-8 lg:px-8'>
        <div className='grid grid-cols-2 items-center pt-8 pb-5'>
          <div className='flex flex-col justify-start items-start'>
            <h1 className='text-7xl text-pretty font-medium mb-6 font-heading text-[#2C384A]'>Birth & Postpartum Doula</h1>
            <p className='text-lg mb-10 text-[#2C384A]'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut et massa mi. Aliquam in hendrerit urna.</p>
            <Button className='uppercase text-xs py-6 px-8 bg-[#5E55AE] hover:bg-[#554d9e] text-white'>Book a discovery call</Button>
          </div>
          <div className='flex justify-center items-center'>
            <Image
              src={'/images/hero.png'}
              alt='Bridie and baby'
              width={380}
              height={120}
              className='rounded-tl-full rounded-tr-full -mb-24 z-10'
            />
          </div>
        </div>
        <Image src={'/images/hero-accent-1.png'} alt='' width={400} height={150} className='absolute -top-24 left-96' />
        <Image src={'/images/hero-accent-2.png'} alt='' width={450} height={170} className='absolute bottom-0 right-16' />
      </div>
    </div>
  )
}

export default Hero
