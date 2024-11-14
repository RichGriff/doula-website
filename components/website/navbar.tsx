'use client'

import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline'
import { Button } from '../ui/button'
import { useState } from 'react'
import Image from 'next/image'

const navigation = [
  { name: 'Services', href: '#' },
  { name: 'About Me', href: '#' },
  { name: 'Blog', href: '#' }
]

const Navbar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <nav className="mx-auto flex max-w-7xl items-center justify-between p-6 lg:px-8" aria-label="Global">
      <div className="flex lg:flex-1">
        <a href="#" className="-m-1.5 p-1.5">
          <span className="sr-only">Doula Bridie</span>
          <Image
            src="/images/logo.svg"
            alt="doula bridie logo"
            width={190}
            height={50}
          />
        </a>
      </div>
      <div className="flex lg:hidden">
        <button
          type="button"
          className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
          onClick={() => setMobileMenuOpen(true)}
        >
          <span className="sr-only">Open main menu</span>
          <Bars3Icon className="h-6 w-6" aria-hidden="true" />
        </button>
      </div>
      <div className="hidden lg:flex items-center lg:gap-x-8">
        {navigation.map((item) => (
          <a key={item.name} href={item.href} className="text-xs font-semibold leading-6 text-gray-900 uppercase">
            {item.name}
          </a>
        ))}
        <Button className='ml-4 uppercase text-xs py-6 px-8 bg-[#5E55AE] hover:bg-[#554d9e] text-white'>Book a discovery call</Button>
      </div>
    </nav>
  )
}

export default Navbar
