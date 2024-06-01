'use client'

import { contentTypes } from '@/config'
import { usePathname } from 'next/navigation'
import React from 'react'

const Nav = () => {
  const path = usePathname()
  const section = path.split('/')[3]

  return (
    <nav className="flex overflow-x-auto py-4">
      <ul
        role="list"
        className="flex min-w-full flex-none gap-x-6 px-4 text-sm font-semibold leading-6 text-foreground sm:px-6 lg:px-8"
      >
        {contentTypes.pages.map((item) => (
          <li key={item.key}>
            <a href={`/admin/website/${item.key}`} className={section === item.key ? 'text-indigo-500' : ''}>
              {item.title}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  )
}

export default Nav
