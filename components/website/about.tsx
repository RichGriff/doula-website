import Image from "next/image";
import { Button } from "../ui/button";
import { MoveRightIcon } from "lucide-react";

export default function About() {
  return (
    <div className="bg-[#F4ECE4] py-24 relative">
      {/* Image Container */}
      <div className="relative flex justify-end">
        <div className="absolute left-[-150px] top-[0] w-[800px] h-[560px] rounded-tr-full rounded-br-full">
          <Image 
            src={'/images/about-me.jpg'} 
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
        <div></div>
        
        {/* Text Content */}
        <div className="">
          <h3 className="text-3xl font-heading">A little about me</h3>
          <div className="w-20 h-1 bg-[#5E55AE] my-4 rounded-full" />
          <div className="flex flex-col gap-4 leading-relaxed pt-6 text-gray-700">
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut et massa mi. Aliquam in hendrerit urna. Pellentesque sit amet sapien fringilla, mattis ligula consectetur, ultrices mauris. Maecenas vitae mattis tellus. Nullam quis imperdiet augue. Vestibulum auctor ornare leo, non suscipit magna interdum eu. Curabitur pellentesque nibh nibh.
            </p>
            <p>
              at maximus ante fermentum sit amet. Pellentesque commodo lacus at sodales sodales. Quisque sagittis orci ut diam condimentum, vel euismod erat placerat.
            </p>
          </div>
          <Button variant="link" className="mt-8 px-0 text-[#5E55AE] hover:text-[#4e469e]">
          Find out more <MoveRightIcon className="ml-2 size-4" />
          </Button>
        </div>
      </div>

      <Image src={'/images/hero-accent-1.png'} alt='' width={400} height={200} className='absolute top-0 -right-36' />
    </div>
  );
}
