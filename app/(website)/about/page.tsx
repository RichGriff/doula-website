import ContactForm from "@/components/website/contact"
import { PageHeader } from "@/components/website/page-header"
import { Quote } from "@/components/website/quote"
import { aboutData, quotes } from "@/config"
import Image from "next/image"
import parse, { DOMNode } from 'html-react-parser';
import { cn } from "@/lib/utils"

const AboutPage = () => {
  const { about } = quotes
  const { title, tagline, image, sections } = aboutData

  const contentHTML: string = sections[2].content;
  const normalizedHTML: string = contentHTML.trim().replace(/\s+/g, ' ');

  // Convert the string into an array of paragraphs
  const paragraphs = normalizedHTML
  .match(/<p\b[^>]*>.*?<\/p>/g) // Matches <p> with or without attributes
  ?.map((paragraph) => parse(paragraph)) || [];

  // Split paragraphs into two columns
  const firstColumn = paragraphs.slice(0, 3);
  const secondColumn = paragraphs.slice(3);

  return (
    <div>
      <PageHeader 
        heading={title} 
        subHeading={tagline}
        image={image}
      />

      {/* Secion 1 */}
      <div className="bg-[#FFFDFB] py-10 mb-20 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="">
            <h3 className="text-3xl font-heading">{sections[0].title}</h3>
            <div className="w-16 h-1 bg-[#5E55AE] my-4 rounded-full" />

            <div className="flex flex-col text-pretty w-full lg:w-11/12 gap-4 leading-relaxed pt-6 text-gray-700" dangerouslySetInnerHTML={{__html: sections[0].content}}>
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
              src={sections[1].images[0].url} 
              alt={sections[1].images[0].alt}
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
              src={sections[1].images[0].url} 
              alt={sections[1].images[0].alt}
              fill
              className="object-cover rounded-md"
              style={{
                objectPosition: 'center 30%',
              }}
            />
          </div>
          <div className="hidden md:flex" />
          
          {/* Text Content */}
          <div className="">
            <h3 className="text-3xl font-heading">{sections[1].title}</h3>
            <div className="w-16 h-1 bg-[#5E55AE] my-4 rounded-full" />
            <div className="flex flex-col gap-4 leading-relaxed pt-6 text-gray-700">
              <div className="prose" dangerouslySetInnerHTML={{__html: sections[1].content}}></div>
            </div>
          </div>
        </div>

        <Image src={'/images/hero-accent-1.png'} alt='' width={300} height={200} className='hidden lg:block absolute top-0 right-24' />
      </div>

      {/* Section 3 */}
      <div className="bg-[#FFFDFB] py-10 mb-20 sm:py-32 relative">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="pb-28 lg:pb-0">
            <h3 className="text-3xl font-heading">{sections[2].title}</h3>
            <div className="w-16 h-1 bg-[#5E55AE] my-4 rounded-full" />

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-12">
              <div className="flex flex-col justify-start items-start gap-6">
                {firstColumn.map((content, index) => (
                  <div key={index}>{content}</div>
                ))}
              </div>
              <div className="flex flex-col justify-start items-start gap-6">
                {secondColumn.map((content, index) => (
                  <div key={index}>{content}</div>
                ))}
              </div>
            </div>

            <div className="flex justify-start items-center absolute bottom-0 lg:bottom-6 right-6 lg:right-0 gap-1">
              {sections[2].images.map((image, index) => (
                <div className="w-28 h-28 lg:w-44 lg:h-44 relative">
                  <Image src={image.url} alt={image.alt} fill className={cn(`object-cover`, index == 0 ? 'rounded-tl-[112px]' : index == 1 ? null : 'rounded-br-[112px]')} />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <Quote quote={about.content} />
      
      <ContactForm />
    </div>
  )
}

export default AboutPage
