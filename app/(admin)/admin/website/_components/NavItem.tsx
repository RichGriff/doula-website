'use client'

import React from 'react'
import { usePathname } from 'next/navigation'

type NavItemProps = {
  item: {
    title: string,
    key: string
  }
}

const NavItem = ({ item } : NavItemProps) => {
  const path = usePathname()
  const section = path.split('/')[3]

  return (
  <li key={item.key}>
    <a href={`/admin/website/${item.key}`} className={section === item.key ? 'text-indigo-500' : ''}>
      {item.title}
    </a>
  </li>
  )
}

export default NavItem
