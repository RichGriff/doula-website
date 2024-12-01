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
        image={{ url: 'https://images.unsplash.com/photo-1524102128837-5667674b60d6?q=80&w=2265&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D', alt: '' }}
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
