import ContactForm from "@/components/website/contact"
import { PageHeader } from "@/components/website/page-header"
import { Quote } from "@/components/website/quote"
import Image from "next/image"

const AboutPage = () => {
  return (
    <div>
      <PageHeader />

      {/* Secion 1 */}
      <div className="bg-[#FFFDFB] py-10 mb-20 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="">
            <h3 className="text-3xl font-heading">My Background</h3>
            <div className="w-16 h-1 bg-[#5E55AE] my-4 rounded-full" />

            <div className="flex flex-col text-pretty w-full lg:w-11/12 gap-4 leading-relaxed pt-6 text-gray-700">
              <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut et massa mi. Aliquam in hendrerit urna. Pellentesque sit amet sapien fringilla, mattis ligula consectetur, ultrices mauris. Maecenas vitae mattis tellus. Nullam quis imperdiet augue. Vestibulum auctor ornare leo, non suscipit magna interdum eu. Curabitur pellentesque nibh nibh.
              </p>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut et massa mi. Aliquam in hendrerit urna. Pellentesque sit amet sapien fringilla, mattis ligula consectetur, ultrices mauris. Maecenas vitae mattis tellus. Nullam quis imperdiet augue. Vestibulum auctor ornare leo, non suscipit magna interdum eu. Curabitur pellentesque nibh nibh,
              </p>
              <p>
                at maximus ante fermentum sit amet. Pellentesque commodo lacus at sodales sodales. Quisque sagittis orci ut diam condimentum, vel euismod erat placerat.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Section 2 */}
      <div className="bg-[#F4ECE4] py-24 relative">
        {/* Image Container */}
        <div className="relative flex justify-end">
          <div className="hidden lg:flex lg:absolute lg:left-[-300px] xl:left-[-150px] lg:-top-28 w-[800px] h-[560px] rounded-tr-full rounded-br-full">
            <Image
              src={'https://images.unsplash.com/photo-1520377091082-c30273049c2a?q=80&w=3087&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'} 
              alt="About me image" 
              layout="fill"
              className="object-cover rounded-tr-full rounded-br-full z-10"
              style={{
                objectPosition: 'center 30%', // Centers and shifts the image upward slightly
                transform: 'translateY(-5%)' // Additional fine-tuning for upward adjustment
              }}
            />
          </div>
        </div>

        <div className="mx-auto max-w-7xl px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-2 gap-8 relative z-10">
          <div className="flex lg:hidden w-full h-[260px] md:h-[320px] rounded-md relative">
            <Image
              src={'https://images.unsplash.com/photo-1520377091082-c30273049c2a?q=80&w=3087&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'}
              fill
              alt=''
              className="object-cover rounded-md"
              style={{
                objectPosition: 'center 30%',
              }}
            />
          </div>
          <div className="hidden md:flex" />
          
          {/* Text Content */}
          <div className="">
            <h3 className="text-3xl font-heading">
              Becoming a mother
            </h3>
            <div className="w-16 h-1 bg-[#5E55AE] my-4 rounded-full" />
            <div className="flex flex-col gap-4 leading-relaxed pt-6 text-gray-700">
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut et massa mi. Aliquam in hendrerit urna. Pellentesque sit amet sapien fringilla, mattis ligula consectetur, ultrices mauris. Maecenas vitae mattis tellus. Nullam quis imperdiet augue. Vestibulum auctor ornare leo, non suscipit magna interdum eu. Curabitur pellentesque nibh nibh,
              </p>
              <p>
                at maximus ante fermentum sit amet. Pellentesque commodo lacus at sodales sodales. Quisque sagittis orci ut diam condimentum, vel euismod erat placerat.
              </p>
              <p>
                at maximus ante fermentum sit amet. Pellentesque commodo lacus at sodales sodales. Quisque sagittis orci ut diam condimentum, vel euismod erat placerat.
              </p>
            </div>
          </div>
        </div>

        <Image src={'/images/hero-accent-1.png'} alt='' width={300} height={200} className='hidden lg:block absolute top-0 right-24' />
      </div>

      {/* Section 3 */}
      <div className="bg-[#FFFDFB] py-10 mb-20 sm:py-32 relative">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="pb-28 lg:pb-0">
            <h3 className="text-3xl font-heading">
              My Doula Journey
            </h3>
            <div className="w-16 h-1 bg-[#5E55AE] my-4 rounded-full" />

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-12">
              <div className="flex flex-col justify-start items-start gap-6">
                <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut et massa mi. Aliquam in hendrerit urna. Pellentesque sit amet sapien fringilla, mattis ligula consectetur, ultrices mauris. Maecenas vitae mattis tellus. Nullam quis imperdiet augue. Vestibulum auctor ornare leo, non suscipit magna interdum eu. Curabitur pellentesque nibh nibh,
                </p>
                <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut et massa mi. Aliquam in hendrerit urna. Pellentesque sit amet sapien fringilla, mattis ligula consectetur, ultrices mauris. Maecenas vitae mattis tellus. Nullam quis imperdiet augue. Vestibulum auctor ornare leo, non suscipit magna interdum eu. Curabitur pellentesque nibh nibh,
                </p>
                <p>
                at maximus ante fermentum sit amet. Pellentesque commodo lacus at sodales sodales. Quisque sagittis orci ut diam condimentum, vel euismod erat placerat.
                </p>
              </div>
              <div className="flex flex-col justify-start items-start gap-6">
                <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut et massa mi. Aliquam in hendrerit urna. Pellentesque sit amet sapien fringilla, mattis ligula consectetur, ultrices mauris. Maecenas vitae mattis tellus. Nullam quis imperdiet augue. Vestibulum auctor ornare leo, non suscipit magna interdum eu. Curabitur pellentesque nibh nibh,
                </p>
                <p>
                at maximus ante fermentum sit amet. Pellentesque commodo lacus at sodales sodales. Quisque sagittis orci ut diam condimentum, vel euismod erat placerat.
                </p>
              </div>
            </div>

            <div className="flex justify-start items-center absolute bottom-0 lg:bottom-6 right-6 lg:right-0 gap-1">
              <div className="w-28 h-28 lg:w-44 lg:h-44 relative">
                <Image src={'https://images.unsplash.com/photo-1542644425-bc949ec841a4?q=80&w=3087&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'} alt='' fill className='object-cover rounded-tl-[112px]' />
              </div>
              <div className="w-28 h-28 lg:w-44 lg:h-44 relative">
                <Image src={'https://images.unsplash.com/photo-1542385151-efd9000785a0?q=80&w=3089&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'} alt='' fill className='object-cover' />
              </div>
              <div className="w-28 h-28 lg:w-44 lg:h-44 relative">
                <Image src={'https://images.unsplash.com/photo-1542644384-49f9febd8443?q=80&w=2976&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'} alt='' fill className='object-cover rounded-br-[112px]' />
              </div>
            </div>
          </div>
        </div>
      </div>

      <Quote quote="Birth is the sudden opening of a window, through which you look out upon a stupendous prospect. For what has happened? A miracle. You have exchanged nothing for the possibility of everything." />
      
      <ContactForm />
    </div>
  )
}

export default AboutPage
