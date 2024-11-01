import { GlobeAltIcon } from "@heroicons/react/24/outline"
import { BookOpen, Calendar, FolderIcon, LayoutGrid, Mails, ServerIcon, Settings2, SignalIcon, User, Users, WalletCards } from "lucide-react"

export const navigation = [
  { name: 'Dashboard', href: '/admin', icon: LayoutGrid, current: false },
  { name: 'Messages', href: '/admin/messages', icon: Mails, current: false },
  { name: 'Customers', href: '/admin/customers', icon: Users, current: false },
  { name: 'Bookings', href: '/admin/bookings', icon: Calendar, current: false },
  { name: 'Website', href: '/admin/website', icon: GlobeAltIcon, current: false },
  { name: 'Users', href: '/admin/users', icon: User, current: false },
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
      data: {
        headline: 'Testing',
        tagline: 'Test',
        primaryText: 'Button',
        primaryUrl: '/',
        secondaryText: 'Button',
        secondaryUrl: '/',
        images: ['https://images.unsplash.com/photo-1542644384-49f9febd8443?q=80&w=2976&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D','https://images.unsplash.com/photo-1538678867871-8a43e7487746?q=80&w=3088&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D', 'https://images.unsplash.com/photo-1524102128837-5667674b60d6?q=80&w=3165&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D']
      }
    },
    {
      title: 'About Me',
      key: 'about-me',
      data: {
        featuredImage: 'https://images.unsplash.com/photo-1542644384-49f9febd8443?q=80&w=2976&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        intro: '',
        experience: '',
        buttonText: 'Button',
        buttonUrl: '/'
      }
    },
    {
      title: 'Services',
      key: 'services',
      data: {
        services: [
          { name: 'Birthing', description: 'Attending and support you through your birthing journey', image: 'https://images.unsplash.com/photo-1542644384-49f9febd8443?q=80&w=2976&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' }
        ]
      }
    },
    {
      title: 'Articles',
      key: 'articles',
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

export const heroData = {
  headline: 'Congratulations on your new journey!',
  subHeadline: 'Expert support for pregnancy, birth and beyond. Bringing beauty into motherhood.',
  callToAction: {
    variant: 'primary',
    text: 'Get in touch'
  },
  secondaryCallToAction: {
    variant: 'link',
    text: 'Find out more'
  },
}
