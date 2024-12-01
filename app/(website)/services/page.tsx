import ContactForm from '@/components/website/contact'
import { Package } from '@/components/website/package'
import { PageHeader } from '@/components/website/page-header'
import { Quote } from '@/components/website/quote'
import { services } from '@/config'
import React from 'react'

const PricingPage = () => {
  return (
    <div>
      <PageHeader 
        heading="Services & Pricing" 
        subHeading="All my services can be built around your journey"
        image={{ url: '/images/bridie_izee.jpg', alt: '' }}
      />
      {services.map((service) => (
        <Package key={service.id} service={service} />
      ))}
      <Quote quote="If you decide that you'd like multiple services we can discuss some discount options based on the services you are interested in." accent={false} />
      <ContactForm />
    </div>
  )
}

export default PricingPage
