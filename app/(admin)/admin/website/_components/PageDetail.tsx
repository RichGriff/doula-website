'use client'

import { Button } from '@/components/ui/button'
import { Separator } from '@/components/ui/separator'
import { useSearchParams } from 'next/navigation'
import React, { Suspense, useEffect } from 'react'

const PageDetail = () => {
  const searchParams = useSearchParams()
  const selectedPage = searchParams.get('page')

  useEffect(() => {
    // fetch data
  }, [])
  
  return (
    <Suspense>
      <div className='p-4 flex justify-between items-center'>
        <div className='flex flex-col justify-start items-start gap-2'>
          <h3 className='text-lg font-semibold capitalize'>{selectedPage?.replaceAll('-', ' ')}</h3>
          <p className='text-sm text-muted-foreground'>This information is displayed on the website for this page.</p>
        </div>
        <div className='flex justify-start items-center gap-2'>
          <Button className='bg-violet-700 hover:bg-violet-800'>Save</Button>
        </div>
      </div>
      <Separator />
      <div className='p-4'>
        Form
      </div>
    </Suspense>
  )
}

export default PageDetail
