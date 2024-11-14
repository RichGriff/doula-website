import { CheckCircleIcon, MoveRightIcon } from "lucide-react"
import Image from "next/image"
import { Button } from "../ui/button"

const services = [
  {
    id: 1, 
    title: 'Parental Support',
    icon: '/images/service1.svg',
    features: [
      { id: crypto.randomUUID, title: 'Personalized birth plan creation' },
      { id: crypto.randomUUID, title: 'Childbirth education classes' },
      { id: crypto.randomUUID, title: 'Pregnancy wellness guidance' }
    ]
  },
  {
    id: 2, 
    title: 'Birthing Guidance',
    icon: '/images/service2.svg',
    features: [
      { id: crypto.randomUUID, title: 'Continious labour support' },
      { id: crypto.randomUUID, title: 'Pain management techniques' },
      { id: crypto.randomUUID, title: 'Partner support coaching' }
    ]
  },
  {
    id: 3, 
    title: 'Postpartum Care',
    icon: '/images/service3.svg',
    features: [
      { id: crypto.randomUUID, title: 'Breastfeeding support' },
      { id: crypto.randomUUID, title: 'Newborn care education' },
      { id: crypto.randomUUID, title: 'Emotional support for new parents' }
    ]
  }
] as any[]

const Services = () => {
  return (
    <div className="bg-[#FFFDFB] py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        {services.length === 0 && (
          <div className="flex justify-center items-center text-muted-foreground">
            No services found.
          </div>
        )} 
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service: any) => (
            <div key={service.id} className="p-6">
              <div className="flex flex-col justify-start items-start gap-y-4">
                <img src={service.icon} alt={service.title} />
                <h2 className="text-3xl font-heading font-medium my-2 text-[#2C384A]">{service.title}</h2>
                <ul>
                  {service.features.map((feature : any) => (
                    <li key={feature.id} className="flex justify-start items-center gap-3 mb-4">
                      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-5 text-[#69BC85]">
                        <path fillRule="evenodd" d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12Zm13.36-1.814a.75.75 0 1 0-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 0 0-1.06 1.06l2.25 2.25a.75.75 0 0 0 1.14-.094l3.75-5.25Z" clipRule="evenodd" />
                      </svg>

                      {/* <CheckCircleIcon className="size-4 text-[#69BC85]" /> */}
                      <p className="font-heading text-lg text-[#2C384A]">{feature.title}</p>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
        <div className="flex justify-center items-center my-6">
          <Button className='uppercase text-xs py-6 px-8 bg-[#5E55AE] hover:bg-[#554d9e] text-white'>See all prices <MoveRightIcon className="ml-2 size-4" /></Button>
        </div>
      </div>
    </div>
  )
}

export default Services
