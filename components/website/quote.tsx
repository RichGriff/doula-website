import { MinusIcon, QuoteIcon } from 'lucide-react'
import Image from 'next/image'
import React from 'react'

interface QuoteProps {
  quote: string
  author?: string
  accent?: boolean
}

export const Quote = ({ quote, author, accent = true } : QuoteProps) => {
  return (
    <div className="bg-[#F4ECE4] py-16 relative">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className='max-w-4xl mx-auto flex flex-col justify-center items-center gap-3'>
          <h3 className='font-heading text-xl text-pretty'>{quote}</h3>
          {author && <span className='w-full flex justify-end items-center'><MinusIcon className='size-4 mr-2'/>{author}</span>}
        </div>
      </div>
      {accent && <Image src={'/images/quote-accent.svg'} alt='' width={150} height={60} className='hidden lg:block absolute bottom-0 right-0' />}
    </div>
  )
}
