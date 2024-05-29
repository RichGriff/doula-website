'use client'

import { Separator } from '@/components/ui/separator'
import { contentTypes } from '@/config'
import { useSearchParams } from 'next/navigation'
import React from 'react'

const WebsiteMenu = () => {
  const searchParams = useSearchParams()
  const selectedPage = searchParams.get('page')

  return (
    <div className="bg-gray-100 w-1/4 min-h-screen">
      <div className='mb-2'>
        <span className='text-xs flex uppercase font-semibold py-4 px-6 text-muted-foreground'>Pages</span>
        <ul className='w-full mb-6' >
        {contentTypes.pages.length > 0 && contentTypes.pages.map((item: any) => (
          <li  key={item.key}className=''>
            <a className={`flex items-center justify-between text-[#32324d] px-6 py-2 ${selectedPage === item.key ? 'bg-violet-100 border-r-2 border-violet-600' : null }`} href={`/admin/website?page=${item.key}`}>
              <div className='flex items-center'>
                <svg xmlns="http://www.w3.org/2000/svg" width="1rem" height="1rem" fill="none" viewBox="0 0 4 4" className="w-[0.75rem] h-[0.25rem]"><rect width="4" height="4" fill={`${selectedPage === item.key ? "#7c3aed" : "#A5A5BA"}`} rx="2"></rect></svg>
                <div className="pl-2">
                  <span className={`text-[0.875rem] ${selectedPage === item.key ? 'text-violet-600 font-bold' : 'text-[#32324d]'} `}>{item.title}</span>
                </div>
              </div>
            </a>
          </li>
        ))}
        </ul>
        
      </div>
      <Separator />
      <div className='mt-2'>
        <span className='text-xs flex uppercase font-semibold py-4 px-6 text-muted-foreground'>Configuration</span>
        <ul className='w-full mb-6' >
        {contentTypes.config.length > 0 && contentTypes.config.map((item: any) => (
          <li  key={item.key}className=''>
            <a className={`flex items-center justify-between text-[#32324d] px-6 py-2 ${selectedPage === item.key ? 'bg-violet-100 border-r-2 border-violet-600' : null }`} href={`/admin/website?page=${item.key}`}>
              <div className='flex items-center'>
                <svg xmlns="http://www.w3.org/2000/svg" width="1rem" height="1rem" fill="none" viewBox="0 0 4 4" className="w-[0.75rem] h-[0.25rem]"><rect width="4" height="4" fill={`${selectedPage === item.key ? "#7c3aed" : "#A5A5BA"}`} rx="2"></rect></svg>
                <div className="pl-2">
                  <span className={`text-[0.875rem] ${selectedPage === item.key ? 'text-violet-600 font-bold' : 'text-[#32324d]'} `}>{item.title}</span>
                </div>
              </div>
            </a>
          </li>
        ))}
        </ul>
      </div>
    </div>
  )
}

export default WebsiteMenu
