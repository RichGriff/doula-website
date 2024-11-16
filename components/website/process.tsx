import Image from 'next/image'
import React from 'react'

const processSteps = [
  {
    id: crypto.randomUUID(),
    step: 1,
    title: 'Get to know each other',
    details: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut et massa mi. Aliquam in hendrerit urna. Pellentesque sit amet sapien fringilla, mattis ligula consectetur, ultrices mauris. Maecenas vitae mattis tellus. Nullam quis imperdiet augue. Vestibulum auctor ornare leo, non suscipit magna interdum eu. Curabitur pellentesque nibh nibh'
  },
  {
    id: crypto.randomUUID(),
    step: 2,
    title: 'Let\’s design your new journey',
    details: '<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut et massa mi. Aliquam in hendrerit urna. Pellentesque sit amet sapien fringilla, mattis ligula consectetur, ultrices mauris. Maecenas vitae mattis tellus. Nullam quis imperdiet augue. Vestibulum auctor ornare leo, non suscipit magna interdum eu. Curabitur pellentesque nibh nibh</p><p>at maximus ante fermentum sit amet. Pellentesque commodo lacus at sodales sodales. Quisque sagittis orci ut diam condimentum, vel euismod erat placerat.</p>'
  },
  {
    id: crypto.randomUUID(),
    step: 3,
    title: 'Gentle support and guidance',
    details: '<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut et massa mi. Aliquam in hendrerit urna. Pellentesque sit amet sapien fringilla, mattis ligula consectetur, ultrices mauris. Maecenas vitae mattis tellus. Nullam quis imperdiet augue. Vestibulum auctor ornare leo, non suscipit magna interdum eu. Curabitur pellentesque nibh nibh</p><p>at maximus ante fermentum sit amet. Pellentesque commodo lacus at sodales sodales. Quisque sagittis orci ut diam condimentum, vel euismod erat placerat.</p>'
  },
]

const Process = () => {
  return (
    <div className="bg-[#FFFDFB] py-24 sm:py-32 relative">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className='flex flex-col justify-center items-center'>
          <span className='uppercase text-sm text-[#5E55AE] font-medium'>The process</span>
          <h3 className="text-3xl font-heading">How it all works</h3>
        </div>
        <div className='py-16'>
          {processSteps.map((step: any) => (
            <div key={step.id} className='grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-0 mb-10'>
              <div>
                <span className='uppercase text-sm text-[#5E55AE] font-medium'>Step {step.step}:</span>
                <h3 className="text-2xl text-pretty font-heading">{step.title}</h3>
              </div>
              <div>
                <div className="prose prose-gray max-w-none text-pretty" dangerouslySetInnerHTML={{ __html: step.details }} />
              </div>
            </div>
          ))}
        </div>
      </div>
      <Image src={'/images/process-accent.svg'} alt='' width={350} height={170} className='hidden lg:block absolute bottom-0 left-0' />
    </div>
  )
}

export default Process
