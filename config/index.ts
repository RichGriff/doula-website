import { Services } from "@/types"
import { GlobeAltIcon } from "@heroicons/react/24/outline"
import { Calendar, LayoutGrid, Mails, User, Users } from "lucide-react"

export const heroSectionData = {
  siteTitle: 'Birth & Postpartum Doula',
  siteTag: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut et massa mi. Aliquam in hendrerit urna.',
  ctaText: 'Book a discovery call',
  heroImage: {
    url: '/images/hero.png',
    alt: 'Bridie and baby'
  }
}

export const aboutSectionData = {
  title: '',
  image: {
    url: '/images/about-me.jpg',
    alt: 'Mother with baby'
  },
  content: `<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut et massa mi. Aliquam in hendrerit urna. Pellentesque sit amet sapien fringilla, mattis ligula consectetur, ultrices mauris. Maecenas vitae mattis tellus. Nullam quis imperdiet augue. Vestibulum auctor ornare leo, non suscipit magna interdum eu. Curabitur pellentesque nibh nibh.</p><p>at maximus ante fermentum sit amet. Pellentesque commodo lacus at sodales sodales. Quisque sagittis orci ut diam condimentum, vel euismod erat placerat.</p>`,
  linkText: 'Find out more'
}

export const processSteps = [
  {
    id: crypto.randomUUID(),
    step: 1,
    title: 'Get to know each other',
    details: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut et massa mi. Aliquam in hendrerit urna. Pellentesque sit amet sapien fringilla, mattis ligula consectetur, ultrices mauris. Maecenas vitae mattis tellus. Nullam quis imperdiet augue. Vestibulum auctor ornare leo, non suscipit magna interdum eu. Curabitur pellentesque nibh nibh'
  },
  {
    id: crypto.randomUUID(),
    step: 2,
    title: 'Let\’s design your new journey',
    details: '<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut et massa mi. Aliquam in hendrerit urna. Pellentesque sit amet sapien fringilla, mattis ligula consectetur, ultrices mauris. Maecenas vitae mattis tellus. Nullam quis imperdiet augue. Vestibulum auctor ornare leo, non suscipit magna interdum eu. Curabitur pellentesque nibh nibh</p><p>at maximus ante fermentum sit amet. Pellentesque commodo lacus at sodales sodales. Quisque sagittis orci ut diam condimentum, vel euismod erat placerat.</p>'
  },
  {
    id: crypto.randomUUID(),
    step: 3,
    title: 'Gentle support and guidance',
    details: '<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut et massa mi. Aliquam in hendrerit urna. Pellentesque sit amet sapien fringilla, mattis ligula consectetur, ultrices mauris. Maecenas vitae mattis tellus. Nullam quis imperdiet augue. Vestibulum auctor ornare leo, non suscipit magna interdum eu. Curabitur pellentesque nibh nibh</p><p>at maximus ante fermentum sit amet. Pellentesque commodo lacus at sodales sodales. Quisque sagittis orci ut diam condimentum, vel euismod erat placerat.</p>'
  },
]

export const quotes = {
  homepage: {
    content: 'Birth is the sudden opening of a window, through which you look out upon a stupendous prospect. For what has happened? A miracle. You have exchanged nothing for the possibility of everything.',
    author: 'William MacNeile Dixon'
  },
  about: {
    content: 'Every child begins the world anew, filling it with infinite possibilities, pure wonder, and hope for a better tomorrow. In their tiny hands lies the promise of our boundless dreams.'
  }
}

export const testimonials = [
  {
    body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut et massa mi. Aliquam in hendrerit urna. Pellentesque sit amet sapien fringilla, mattis ligula consectetur, ultrices mauris. Maecenas vitae mattis tellus.",
    author: {
      name: "Frida Carla",
      handle: "Birthing Mother",
      imageUrl:
        "https://images.unsplash.com/photo-1656137955203-c0f86a4a8be3?ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
    },
  },
  {
    body: "Curabitur pellentesque nibh nibh. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut et massa mi. Aliquam in hendrerit urna. Pellentesque sit amet sapien fringilla.",
    author: {
      name: "John Doe",
      handle: "Satisfied Client",
      imageUrl:
        "https://images.unsplash.com/photo-1527980965255-d3b416303d12?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
    },
  },
  {
    body: "Vestibulum auctor ornare leo, non suscipit magna interdum eu. Maecenas vitae mattis tellus. Nullam quis imperdiet augue.",
    author: {
      name: "Jane Smith",
      handle: "Happy Customer",
      imageUrl:
        "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
    },
  },
];

export const websiteNavigation = [
  { name: 'Services', href: 'services' },
  { name: 'About Me', href: 'about' },
  { name: 'Blog', href: '#' }
]

export const services: Services = [
  {
    id: 1, 
    icon: '/images/service1.svg',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut et massa mi. Aliquam in hendrerit urna. Pellentesque sit amet sapien fringilla, mattis ligula consectetur, ultrices mauris. Maecenas vitae mattis tellus. Nullam quis imperdiet augue. Vestibulum auctor ornare leo, non suscipit magna interdum eu. Curabitur pellentesque nibh nibh.',
    title: 'Parental Support',
    price: 19.99,
    rate: 'per day',
    included: [ 'Personalized birth plan creation', 'Childbirth education classes', 'Pregnancy wellness guidance' ],
    background: 'LIGHT'
  },
  {
    id: 2, 
    icon: '/images/service2.svg',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut et massa mi. Aliquam in hendrerit urna. Pellentesque sit amet sapien fringilla, mattis ligula consectetur, ultrices mauris. Maecenas vitae mattis tellus. Nullam quis imperdiet augue. Vestibulum auctor ornare leo, non suscipit magna interdum eu. Curabitur pellentesque nibh nibh.',
    title: 'Birthing Guidance',
    price: 125.00,
    rate: 'based on 4 weeks',
    included: [ 'Continious labour support', 'Pain management techniques', 'Partner support coaching' ],
    background: 'DARK',
    accent: true,
    accentLocation: "TOP"
  },
  {
    id: 3, 
    icon: '/images/service3.svg',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut et massa mi. Aliquam in hendrerit urna. Pellentesque sit amet sapien fringilla, mattis ligula consectetur, ultrices mauris. Maecenas vitae mattis tellus. Nullam quis imperdiet augue. Vestibulum auctor ornare leo, non suscipit magna interdum eu. Curabitur pellentesque nibh nibh.',
    title: 'Postpartum Care',
    price: 20.00,
    rate: 'per day',
    included: [ 'Breastfeeding support', 'Newborn care education', 'Emotional support for new parents' ],
    background: 'LIGHT',
    accent: true,
    accentLocation: "BOTTOM"
  }
]

export const navigation = [
  { name: 'Dashboard', href: '/admin', icon: LayoutGrid, current: false },
  { name: 'Messages', href: '/admin/messages', icon: Mails, current: false },
  { name: 'Customers', href: '/admin/customers', icon: Users, current: false },
  { name: 'Bookings', href: '/admin/bookings', icon: Calendar, current: false },
  { name: 'Website', href: '/admin/website', icon: GlobeAltIcon, current: false },
  { name: 'Users', href: '/admin/users', icon: User, current: false },
]

export const aboutData = {
  title: 'The Journey So Far: My Path and Purpose',
  tagline: 'Embracing Growth, Learning, and the Unexpected',
  image: {
    url: 'https://images.unsplash.com/photo-1526277015674-026cb84653ec?q=80&w=3087&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    alt: ''
  },
  sections: [
    { 
      id: 1,
      title: 'My Background',
      content: `<p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut et massa mi. Aliquam in hendrerit urna. Pellentesque sit amet sapien fringilla, mattis ligula consectetur, ultrices mauris. Maecenas vitae mattis tellus. Nullam quis imperdiet augue. Vestibulum auctor ornare leo, non suscipit magna interdum eu. Curabitur pellentesque nibh nibh.
              </p>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut et massa mi. Aliquam in hendrerit urna. Pellentesque sit amet sapien fringilla, mattis ligula consectetur, ultrices mauris. Maecenas vitae mattis tellus. Nullam quis imperdiet augue. Vestibulum auctor ornare leo, non suscipit magna interdum eu. Curabitur pellentesque nibh nibh,
              </p>
              <p>
                at maximus ante fermentum sit amet. Pellentesque commodo lacus at sodales sodales. Quisque sagittis orci ut diam condimentum, vel euismod erat placerat.
              </p>`,
      images: []
    },
    { 
      id: 2,
      title: 'Becoming a mother',
      content: `<p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut et massa mi. Aliquam in hendrerit urna. Pellentesque sit amet sapien fringilla, mattis ligula consectetur, ultrices mauris. Maecenas vitae mattis tellus. Nullam quis imperdiet augue. Vestibulum auctor ornare leo, non suscipit magna interdum eu. Curabitur pellentesque nibh nibh,
              </p>
              <p>
                at maximus ante fermentum sit amet. Pellentesque commodo lacus at sodales sodales. Quisque sagittis orci ut diam condimentum, vel euismod erat placerat.
              </p>
              <p>
                at maximus ante fermentum sit amet. Pellentesque commodo lacus at sodales sodales. Quisque sagittis orci ut diam condimentum, vel euismod erat placerat.
              </p>`,
      images: [
        { 
          url: 'https://images.unsplash.com/photo-1520377091082-c30273049c2a?q=80&w=3087&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D', 
          alt: '' 
        }
      ]
    },
    { 
      id: 3,
      title: 'My Doula Journey',
      content: `<p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut et massa mi. Aliquam in hendrerit urna. Pellentesque sit amet sapien fringilla, mattis ligula consectetur, ultrices mauris. Maecenas vitae mattis tellus. Nullam quis imperdiet augue. Vestibulum auctor ornare leo, non suscipit magna interdum eu. Curabitur pellentesque nibh nibh,
                </p>
                <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut et massa mi. Aliquam in hendrerit urna. Pellentesque sit amet sapien fringilla, mattis ligula consectetur, ultrices mauris. Maecenas vitae mattis tellus. Nullam quis imperdiet augue. Vestibulum auctor ornare leo, non suscipit magna interdum eu. Curabitur pellentesque nibh nibh,
                </p>
                <p>
                at maximus ante fermentum sit amet. Pellentesque commodo lacus at sodales sodales. Quisque sagittis orci ut diam condimentum, vel euismod erat placerat.
                </p><p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut et massa mi. Aliquam in hendrerit urna. Pellentesque sit amet sapien fringilla, mattis ligula consectetur, ultrices mauris. Maecenas vitae mattis tellus. Nullam quis imperdiet augue. Vestibulum auctor ornare leo, non suscipit magna interdum eu. Curabitur pellentesque nibh nibh,
                </p>
                <p>
                at maximus ante fermentum sit amet. Pellentesque commodo lacus at sodales sodales. Quisque sagittis orci ut diam condimentum, vel euismod erat placerat.
                </p>`,
      images: [
        { 
          id: 1,
          url: 'https://images.unsplash.com/photo-1542644425-bc949ec841a4?q=80&w=3087&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D', 
          alt: '' 
        },
        { 
          id: 2,
          url: 'https://images.unsplash.com/photo-1542385151-efd9000785a0?q=80&w=3089&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D', 
          alt: '' 
        },
        { 
          id: 3,
          url: 'https://images.unsplash.com/photo-1542644384-49f9febd8443?q=80&w=2976&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D', 
          alt: '' 
        }
      ]
    },
  ]
}


// Need to look at the below 

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
