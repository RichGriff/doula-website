'use client'

import { Bars3Icon, MagnifyingGlassIcon } from '@heroicons/react/24/outline'
import { usePathname } from 'next/navigation'
import React, { Dispatch, SetStateAction } from 'react'

type HeaderProps = {
  setSidebarOpen: Dispatch<SetStateAction<boolean>>
}

const Header = ({ setSidebarOpen } : HeaderProps) => {
  const pathname = usePathname();
  const pageName = pathname === '/admin' ? 'Dashboard' : pathname.split('/')[2]

  return (
    <div className="sticky top-0 z-40 flex h-16 shrink-0 items-center gap-x-6 border-b border-white/5 bg-gray-50 px-4 sm:px-6 lg:px-8">
      <div className='flex justify-start items-center gap-4'>
        <button type="button" className="-m-2.5 p-2.5 text-foreground xl:hidden" onClick={() => setSidebarOpen(true)}>
          <span className="sr-only">Open sidebar</span>
          <Bars3Icon className="h-5 w-5" aria-hidden="true" />
        </button>

        <h2 className='font-semibold capitalize'>{pageName}</h2>
      </div>
    </div>
  )
}

export default Header
