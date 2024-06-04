import { contentTypes } from '@/config'
import React from 'react'
import NavItem from './NavItem'
import prisma from '@/lib/prisma'

const Nav = async () => {
  const contentTypes = await (await prisma.contentTypes.findMany({
    orderBy: [
      {
        title: 'asc',
      }
    ]
  }))

  return (
    <nav className="flex overflow-x-auto py-4">
      <ul
        role="list"
        className="flex min-w-full flex-none gap-x-6 px-4 text-sm font-semibold leading-6 text-foreground sm:px-6 lg:px-8"
      >
        {contentTypes.map((item) => (
          <NavItem key={item.key} item={item} />
        ))}
      </ul>
    </nav>
  )
}

export default Nav
