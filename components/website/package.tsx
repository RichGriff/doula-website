import { cn } from '@/lib/utils'
import { Service } from '@/types'
import Image from 'next/image'
import React from 'react'

interface PackageProps {
  service: Service
}

export const Package = ({ service } : PackageProps) => {
  return (
    <div className={cn('py-24 lg:py-32 relative', service.background === 'LIGHT' ? 'bg-[#FFFDFB]' : 'bg-[#F4ECE4]')}>
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="">
          <img src={service.icon} alt={service.title} className="mb-6"/>

          <div className='grid grid-cols-1 md:grid-cols-2 gap-20'>
            <div>
              <h3 className="text-3xl font-heading">{service.title}</h3>
              <div className="w-16 h-1 bg-[#5E55AE] my-4 rounded-full mb-6" />
              <p className='leading-loose'>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut et massa mi. Aliquam in hendrerit urna. Pellentesque sit amet sapien fringilla, mattis ligula consectetur, ultrices mauris. Maecenas vitae mattis tellus. Nullam quis imperdiet augue. Vestibulum auctor ornare leo, non suscipit magna interdum eu. Curabitur pellentesque nibh nibh.
              </p>
            </div>

            <div className='px-0 lg:px-8'>
              <p className="text-3xl font-heading mb-8">£{service.price.toFixed(2)}<span className='ml-2 text-sm font-medium'>{service.rate}</span></p>
              <p className='font-medium text-sm mb-4'>Whats included:</p>
              <ul>
                {service.included.map((feature, index) => (
                  <li key={index} className="flex justify-start items-center gap-3 mb-4">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-5 text-[#69BC85]">
                      <path fillRule="evenodd" d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12Zm13.36-1.814a.75.75 0 1 0-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 0 0-1.06 1.06l2.25 2.25a.75.75 0 0 0 1.14-.094l3.75-5.25Z" clipRule="evenodd" />
                    </svg>

                    {/* <CheckCircleIcon className="size-4 text-[#69BC85]" /> */}
                    <p className="font-heading text-lg text-[#2C384A]">{feature}</p>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
      {service.accent &&
        service.accentLocation == 'TOP' ? (
          <Image src={'/images/hero-accent-1.png'} alt='' width={300} height={150} className='hidden lg:block absolute top-0 -left-28' />
        ) : service.accentLocation == 'BOTTOM' ? (
          <Image src={'/images/quote-accent.svg'} alt='' width={150} height={60} className='hidden lg:block absolute bottom-0 right-0' />
        ) : null
      }
    </div>
  )
}
