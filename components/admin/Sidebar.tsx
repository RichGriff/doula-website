'use client'

import React, {  Dispatch, Fragment, SetStateAction, useState } from 'react'
import {
  Dialog,
  DialogPanel,
  Menu,
  MenuButton,
  MenuItem,
  MenuItems,
  Transition,
  TransitionChild,
} from '@headlessui/react'
import { BabyIcon, X } from 'lucide-react'
import { navigation, teams } from '@/config'
import { cn } from '@/lib/utils'
import { usePathname } from 'next/navigation'

type SidebarProps = {
  sidebarOpen: boolean
  setSidebarOpen: Dispatch<SetStateAction<boolean>>
}

const Sidebar = ({ sidebarOpen, setSidebarOpen } : SidebarProps) => {
  const pathname = usePathname()

  return (
    <>
      <Transition show={sidebarOpen}>
          <Dialog className="relative z-50 xl:hidden" onClose={setSidebarOpen}>
            <TransitionChild
              enter="transition-opacity ease-linear duration-300"
              enterFrom="opacity-0"
              enterTo="opacity-100"
              leave="transition-opacity ease-linear duration-300"
              leaveFrom="opacity-100"
              leaveTo="opacity-0"
            >
              <div className="fixed inset-0 bg-gray-900/80" />
            </TransitionChild>

            <div className="fixed inset-0 flex">
              <TransitionChild
                enter="transition ease-in-out duration-300 transform"
                enterFrom="-translate-x-full"
                enterTo="translate-x-0"
                leave="transition ease-in-out duration-300 transform"
                leaveFrom="translate-x-0"
                leaveTo="-translate-x-full"
              >
                <DialogPanel className="relative mr-16 flex w-full max-w-xs flex-1">
                  <TransitionChild
                    enter="ease-in-out duration-300"
                    enterFrom="opacity-0"
                    enterTo="opacity-100"
                    leave="ease-in-out duration-300"
                    leaveFrom="opacity-100"
                    leaveTo="opacity-0"
                  >
                    <div className="absolute left-full top-0 flex w-16 justify-center pt-5">
                      <button type="button" className="-m-2.5 p-2.5" onClick={() => setSidebarOpen(false)}>
                        <span className="sr-only">Close sidebar</span>
                        <X className="h-6 w-6 text-white" aria-hidden="true" />
                      </button>
                    </div>
                  </TransitionChild>
                  {/* Sidebar component, swap this element with another sidebar if you like */}
                  <div className="flex grow flex-col gap-y-5 overflow-y-auto bg-violet-950 px-6 ring-1 ring-white/10">
                    <div className="flex h-16 shrink-0 items-center">
                      {/* <img
                        className="h-8 w-auto"
                        src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=500"
                        alt="Your Company"
                      /> */}
                      <div className='flex justify-start items-center gap-2'>
                        <BabyIcon className='w-8 h-8 text-white' />
                        <span className='text-white font-semibold text-lg'>Doula.</span>
                      </div>
                    </div>
                    <nav className="flex flex-1 flex-col">
                      <ul role="list" className="flex flex-1 flex-col gap-y-7">
                        <li>
                          <ul role="list" className="-mx-2 space-y-2">
                          {navigation.map((item) => (
                          <li key={item.name}>
                            <a
                              href={item.href}
                              className={cn(
                                pathname.split('/')[2] == item.name.toLocaleLowerCase()
                                  ? 'bg-violet-800 text-white'
                                  : 'text-white hover:bg-violet-700',
                                'group flex gap-x-3 rounded-md p-2 text-sm leading-6 font-semibold text-white'
                              )}
                            >
                              <item.icon className="h-6 w-6 shrink-0" aria-hidden="true" />
                              {item.name}
                            </a>
                          </li>
                        ))}
                          </ul>
                        </li>
                        <li className="-mx-6 mt-auto">
                          <a
                            href="#"
                            className="flex items-center gap-x-4 px-6 py-3 text-sm font-semibold leading-6 text-white hover:bg-violet-700"
                          >
                            <img
                              className="h-8 w-8 rounded-full bg-gray-800 object-cover"
                              src="https://res.cloudinary.com/dfs5xyvsv/image/upload/v1716973250/DSC_0144_qinqhe.jpg"
                              alt=""
                            />
                            <span className="sr-only">Your profile</span>
                            <span aria-hidden="true">Bridie Solman</span>
                          </a>
                        </li>
                      </ul>
                    </nav>
                  </div>
                </DialogPanel>
              </TransitionChild>
            </div>
          </Dialog>
        </Transition>

        {/* Static sidebar for desktop */}
        <div className="hidden xl:fixed xl:inset-y-0 xl:z-50 xl:flex xl:w-72 xl:flex-col">
          {/* Sidebar component, swap this element with another sidebar if you like */}
          <div className="flex grow flex-col gap-y-5 overflow-y-auto bg-violet-950 px-6 ring-1 ring-white/5">
            <div className="flex h-16 shrink-0 items-center">
              {/* <img
                className="h-8 w-auto"
                src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=500"
                alt="Your Company"
              /> */}
              <div className='flex justify-start items-center gap-2 mt-3'>
                <BabyIcon className='w-8 h-8 text-white' />
                <span className='text-white font-semibold text-lg'>Doula.</span>
              </div>
            </div>
            <nav className="flex flex-1 flex-col">
              <ul role="list" className="flex flex-1 flex-col gap-y-7">
                <li>
                  <ul role="list" className="-mx-2 space-y-2">
                    {navigation.map((item) => (
                      <li key={item.name}>
                        <a
                          href={item.href}
                          className={cn(
                            pathname.split('/')[2] == item.name.toLocaleLowerCase()
                              ? 'bg-violet-800 text-white'
                              : 'text-white hover:bg-violet-700',
                            'group flex gap-x-3 rounded-md p-2 text-sm leading-6 font-semibold'
                          )}
                        >
                          <item.icon className="h-6 w-6 shrink-0" aria-hidden="true" />
                          {item.name}
                        </a>
                      </li>
                    ))}
                  </ul>
                </li>
                <li className="-mx-6 mt-auto">
                  <a
                    href="#"
                    className="flex items-center gap-x-4 px-6 py-3 text-sm font-semibold leading-6 text-white hover:bg-violet-700"
                  >
                    <img
                      className="h-8 w-8 rounded-full bg-gray-800 object-cover"
                      src="https://res.cloudinary.com/dfs5xyvsv/image/upload/v1716973250/DSC_0144_qinqhe.jpg"
                      alt=""
                    />
                    <span className="sr-only">Your profile</span>
                    <span aria-hidden="true">Bridie Solman</span>
                  </a>
                </li>
              </ul>
            </nav>
          </div>
        </div>
    </>
  )
}

export default Sidebar
