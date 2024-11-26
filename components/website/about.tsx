import Image from "next/image";
import { Button } from "../ui/button";
import { MoveRightIcon } from "lucide-react";
import Link from "next/link";
import { aboutSectionData } from "@/config";

export default function About() {
  const { title, linkText, content, image } = aboutSectionData
  return (
    <div className="bg-[#F4ECE4] py-24 relative">
      {/* Image Container */}
      <div className="relative flex justify-end">
        <div className="hidden lg:flex lg:absolute lg:left-[-300px] xl:left-[-150px] lg:top-[0] w-[800px] h-[560px] rounded-tr-full rounded-br-full">
          <Image 
            src={image.url} 
            alt={image.alt} 
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
            src={image.url} 
            alt={image.alt} 
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
          <h3 className="text-3xl font-heading">
            {title}
          </h3>
          <div className="w-20 h-1 bg-[#5E55AE] my-4 rounded-full" />
          <div className="flex flex-col gap-4 leading-relaxed pt-6 text-gray-700">
            <div className="prose" dangerouslySetInnerHTML={{__html: content}}></div>
          </div>
          <Button asChild variant="link" className="mt-8 px-0 text-[#5E55AE] hover:text-[#4e469e]">
            <Link href={'/about'}>{linkText}<MoveRightIcon className="ml-2 size-4" /></Link>
          </Button>
        </div>
      </div>

      <Image src={'/images/hero-accent-1.png'} alt='' width={300} height={200} className='hidden lg:block absolute top-0 right-24' />
    </div>
  );
}
