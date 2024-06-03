import { contentTypes } from '@/config'
import React from 'react'
import HomepageForm from '../_components/HomepageForm'
import AboutMeForm from '../_components/AboutMeForm'
import ServicesForm from '../_components/ServicesForm'

const GetPageData = async (slug: string) => {
  const result = contentTypes.pages.filter(page => page.key === slug)[0]
    if(result) {
      return result.data
    }
    return null
}

const ContentTypePage = async ({ params } : { params: { slug : string }}) => {
  const pageData = await GetPageData(params.slug)

  return (
    <>
      <div className='py-4 px-4 md:px-8 flex justify-between items-center'>
        <div className='flex flex-col justify-start items-start gap-2'>
          <h3 className='text-lg font-semibold capitalize'>{params.slug?.replaceAll('-', ' ')}</h3>
          <p className='text-sm text-muted-foreground'>This information is displayed on the website for this page.</p>
        </div>
      </div>

      <div className='py-4 px-4 md:px-8'>
        {pageData && params.slug === 'homepage' && <HomepageForm data={pageData} />}
        {pageData && params.slug === 'about-me' && <AboutMeForm data={pageData} />}
        {pageData && params.slug === 'services' && <ServicesForm data={pageData} />}
      </div>
    </>
  )
}

export default ContentTypePage
