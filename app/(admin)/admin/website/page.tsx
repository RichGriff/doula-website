import { Separator } from '@/components/ui/separator'
import { contentTypes } from '@/config'
import React, { Suspense } from 'react'
import WebsiteMenu from './_components/WebsiteMenu'
import PageDetail from './_components/PageDetail'

const PagesPage = () => {
  return (
    <Suspense>
      <div className='flex justify-start items-start w-full'>
        <WebsiteMenu />
        
        <div className='w-3/4'>
          <PageDetail />
        </div>
      </div>
    </Suspense>
  )
}

export default PagesPage
