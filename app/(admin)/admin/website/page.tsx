import { createContentTypes } from '@/actions/seed'
import { redirect } from 'next/navigation'

const PagesPage = async () => {

  // await createContentTypes()

  redirect('/admin/website/homepage')
  // return (
  //   <Suspense>
  //     <div className='flex justify-start items-start w-full'>
  //       <WebsiteMenu />
  //       <div className='w-3/4'>
  //         <PageDetail />
  //       </div>
  //     </div>
  //   </Suspense>
  // )
  return null
}

export default PagesPage
