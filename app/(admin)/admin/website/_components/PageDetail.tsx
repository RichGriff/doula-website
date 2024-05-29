'use client'

import { Button } from '@/components/ui/button'
import { Separator } from '@/components/ui/separator'
import { notFound, useSearchParams } from 'next/navigation'
import React, { Suspense, useEffect, useState } from 'react'
import HomepageForm from './HomepageForm'
import { contentTypes } from '@/config'
import AboutMeForm from './AboutMeForm'
import ServicesForm from './ServicesForm'
import ArticlesForm from './ArticlesForm'

const PageDetail = () => {
  const searchParams = useSearchParams()
  const selectedPage = searchParams.get('page')

  const [pageData, setPageData] = useState<any>()

  useEffect(() => {
    // fetch data
    const result = contentTypes.pages.filter(page => page.key === selectedPage)[0]
    if(result) {
      setPageData(result.data)
    } else {
      notFound()
    }
  }, [])
  
  return (
    <Suspense>
      <div className='p-4 flex justify-between items-center'>
        <div className='flex flex-col justify-start items-start gap-2'>
          <h3 className='text-lg font-semibold capitalize'>{selectedPage?.replaceAll('-', ' ')}</h3>
          <p className='text-sm text-muted-foreground'>This information is displayed on the website for this page.</p>
        </div>
        {/* <div className='flex justify-start items-center gap-2'>
          <Button className='bg-violet-700 hover:bg-violet-800'>Save</Button>
        </div> */}
      </div>
      <Separator />
      <div className='p-4'>
        {(pageData && selectedPage === 'homepage' && <HomepageForm data={pageData} /> )}
        {(pageData && selectedPage === 'about-me' && <AboutMeForm /> )}
        {(pageData && selectedPage === 'services' && <ServicesForm /> )}
        {(pageData && selectedPage === 'articles' && <ArticlesForm /> )}
      </div>
    </Suspense>
  )
}

export default PageDetail
