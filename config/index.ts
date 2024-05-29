import { GlobeAltIcon } from "@heroicons/react/24/outline"
import { BookOpen, FolderIcon, LayoutGrid, Mails, ServerIcon, Settings2, SignalIcon, Users, WalletCards } from "lucide-react"

export const navigation = [
  { name: 'Dashboard', href: '/admin', icon: LayoutGrid, current: false },
  { name: 'Customers', href: '/admin/customers', icon: Users, current: false },
  { name: 'Messages', href: '/admin/messages', icon: Mails, current: false },
  { name: 'Website', href: '/admin/website?page=homepage', icon: GlobeAltIcon, current: false },
  { name: 'Payments', href: '/admin/payments', icon: WalletCards, current: false },
  { name: 'Settings', href: '/admin/settings', icon: Settings2, current: false },
]
export const teams = [
  { id: 1, name: 'Planetaria', href: '#', initial: 'P', current: false },
  { id: 2, name: 'Protocol', href: '#', initial: 'P', current: false },
  { id: 3, name: 'Tailwind Labs', href: '#', initial: 'T', current: false },
]
export const statuses = {
  offline: 'text-gray-500 bg-gray-100/10',
  online: 'text-green-400 bg-green-400/10',
  error: 'text-rose-400 bg-rose-400/10',
}
export const environments = {
  Preview: 'text-gray-400 bg-gray-400/10 ring-gray-400/20',
  Production: 'text-indigo-400 bg-indigo-400/10 ring-indigo-400/30',
}
export const deployments = [
  {
    id: 1,
    href: '#',
    projectName: 'ios-app',
    teamName: 'Planetaria',
    status: 'offline',
    statusText: 'Initiated 1m 32s ago',
    description: 'Deploys from GitHub',
    environment: 'Preview',
  },
  // More deployments...
]
export const activityItems = [
  {
    user: {
      name: 'Michael Foster',
      imageUrl:
        'https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
    },
    projectName: 'ios-app',
    commit: '2d89f0c8',
    branch: 'main',
    date: '1h',
    dateTime: '2023-01-23T11:00',
  },
  // More items...
]

export const contentTypes = {
  pages: [
    {
      title: 'Homepage',
      key: 'homepage',
      active: true
    },
    {
      title: 'About Me',
      key: 'about-me',
      active: false
    },
    {
      title: 'Services',
      key: 'services',
      active: false
    },
    {
      title: 'Articles',
      key: 'articles',
      active: false
    }
  ],
  config: [
    {
      title: 'Email',
      key: 'email',
      active: false
    },
    {
      title: 'Socials',
      key: 'socials',
      active: false
    },
  ]
}