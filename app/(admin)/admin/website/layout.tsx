import React, { ReactNode } from 'react'
import Nav from './_components/Nav'
import { Separator } from '@/components/ui/separator'

const WebsiteLayout = ({ children } : { children: ReactNode }) => {
  return (
    <>
      <div className=''>
        <Nav />
        <Separator />
      </div>
      <div>
        {children}
      </div>
    </>
  )
}

export default WebsiteLayout
