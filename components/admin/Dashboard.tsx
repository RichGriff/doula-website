'use client'
/*
  This example requires some changes to your config:
  
  ```
  // tailwind.config.js
  module.exports = {
    // ...
    plugins: [
      // ...
      require('@tailwindcss/forms'),
    ],
  }
  ```
*/
import { Fragment, ReactNode, useState } from 'react'
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
import {
  ChartBarSquareIcon,
  Cog6ToothIcon,
  FolderIcon,
  GlobeAltIcon,
  ServerIcon,
  SignalIcon,
  XMarkIcon,
} from '@heroicons/react/24/outline'
import { Bars3Icon, ChevronRightIcon, ChevronUpDownIcon, MagnifyingGlassIcon } from '@heroicons/react/20/solid'
import Sidebar from './Sidebar'
import { activityItems, deployments, environments, statuses } from '@/config'
import Header from './Header'
import ActivityFeed from './ActivityFeed'

function classNames(...classes: any) {
  return classes.filter(Boolean).join(' ')
}

export default function Dashboard({ children } : { children: ReactNode }) {
  const [sidebarOpen, setSidebarOpen] = useState(false)

  return (
    <>
      <div>
        <Sidebar sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />

        <div className="xl:pl-72">
          <Header setSidebarOpen={setSidebarOpen} />

          {/* <main className="lg:pr-96">
            <header className="flex items-center justify-between border-b border-white/5 px-4 py-4 sm:px-6 sm:py-6 lg:px-8">
              <h1 className="text-base font-semibold leading-7 text-white">Deployments</h1>

              <Menu as="div" className="relative">
                <MenuButton className="flex items-center gap-x-1 text-sm font-medium leading-6 text-white">
                  Sort by
                  <ChevronUpDownIcon className="h-5 w-5 text-gray-500" aria-hidden="true" />
                </MenuButton>
                <Transition
                  enter="transition ease-out duration-100"
                  enterFrom="transform opacity-0 scale-95"
                  enterTo="transform opacity-100 scale-100"
                  leave="transition ease-in duration-75"
                  leaveFrom="transform opacity-100 scale-100"
                  leaveTo="transform opacity-0 scale-95"
                >
                  <MenuItems className="absolute right-0 z-10 mt-2.5 w-40 origin-top-right rounded-md bg-white py-2 shadow-lg ring-1 ring-gray-900/5 focus:outline-none">
                    <MenuItem>
                      {({ focus }) => (
                        <a
                          href="#"
                          className={classNames(
                            focus ? 'bg-gray-50' : '',
                            'block px-3 py-1 text-sm leading-6 text-gray-900'
                          )}
                        >
                          Name
                        </a>
                      )}
                    </MenuItem>
                    <MenuItem>
                      {({ focus }) => (
                        <a
                          href="#"
                          className={classNames(
                            focus ? 'bg-gray-50' : '',
                            'block px-3 py-1 text-sm leading-6 text-gray-900'
                          )}
                        >
                          Date updated
                        </a>
                      )}
                    </MenuItem>
                    <MenuItem>
                      {({ focus }) => (
                        <a
                          href="#"
                          className={classNames(
                            focus ? 'bg-gray-50' : '',
                            'block px-3 py-1 text-sm leading-6 text-gray-900'
                          )}
                        >
                          Environment
                        </a>
                      )}
                    </MenuItem>
                  </MenuItems>
                </Transition>
              </Menu>
            </header>

            <ul role="list" className="divide-y divide-white/5">
              {deployments.map((deployment) => (
                <li key={deployment.id} className="relative flex items-center space-x-4 px-4 py-4 sm:px-6 lg:px-8">
                  <div className="min-w-0 flex-auto">
                    <div className="flex items-center gap-x-3">
                      <div className={classNames(statuses[deployment.status], 'flex-none rounded-full p-1')}>
                        <div className="h-2 w-2 rounded-full bg-current" />
                      </div>
                      <h2 className="min-w-0 text-sm font-semibold leading-6 text-white">
                        <a href={deployment.href} className="flex gap-x-2">
                          <span className="truncate">{deployment.teamName}</span>
                          <span className="text-gray-400">/</span>
                          <span className="whitespace-nowrap">{deployment.projectName}</span>
                          <span className="absolute inset-0" />
                        </a>
                      </h2>
                    </div>
                    <div className="mt-3 flex items-center gap-x-2.5 text-xs leading-5 text-gray-400">
                      <p className="truncate">{deployment.description}</p>
                      <svg viewBox="0 0 2 2" className="h-0.5 w-0.5 flex-none fill-gray-300">
                        <circle cx={1} cy={1} r={1} />
                      </svg>
                      <p className="whitespace-nowrap">{deployment.statusText}</p>
                    </div>
                  </div>
                  <div
                    className={classNames(
                      //@ts-ignore
                      environments[deployment.environment],
                      'rounded-full flex-none py-1 px-2 text-xs font-medium ring-1 ring-inset'
                    )}
                  >
                    {deployment.environment}
                  </div>
                  <ChevronRightIcon className="h-5 w-5 flex-none text-gray-400" aria-hidden="true" />
                </li>
              ))}
            </ul>
          </main> */}
          {/* <div className='py-4 px-6'> */}
            {children}
          {/* </div> */}

          {/* <ActivityFeed /> */}
        </div>
      </div>
    </>
  )
}
