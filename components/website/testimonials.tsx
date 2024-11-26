'use client'

import { useState } from "react";
import { ChevronLeftIcon, ChevronRightIcon } from "lucide-react";
import { Button } from "../ui/button";
import Image from "next/image";
import { testimonials } from "@/config";

export default function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isFading, setIsFading] = useState(false);

  const handleNext = () => {
    if (isFading) return;
    setIsFading(true);
    setTimeout(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
      setIsFading(false);
    }, 500);
  };

  const handlePrevious = () => {
    if (isFading) return;
    setIsFading(true);
    setTimeout(() => {
      setCurrentIndex((prevIndex) =>
        (prevIndex - 1 + testimonials.length) % testimonials.length
      );
      setIsFading(false);
    }, 500);
  };

  const { body, author } = testimonials[currentIndex];

  return (
    <div className="bg-[#FFFDFB] py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="flex flex-col justify-center items-center">
          <span className="uppercase text-sm text-[#5E55AE] font-medium">
            Testimonials
          </span>
          <h3 className="text-3xl font-heading">Kind Words</h3>
        </div>

        <div className="flex justify-center items-center mt-16 relative">
          {/* Testimonial Content with fade-in/out transition */}
          <div
            className={`flex flex-col justify-center items-center gap-6 transition-opacity duration-500 ease-in-out h-auto lg:h-[190px] ${
              isFading ? "opacity-0" : "opacity-100"
            }`}
            // style={{ height: "190px" }}
          >
            <div className="flex-1 px-3 lg:px-32 mb-4 text-center text-pretty h-36 overflow-hidden">
              {body}
            </div>

            <div className="flex justify-center items-center gap-4 h-20">
              <Image
                src={author.imageUrl}
                alt={author.name}
                width={63}
                height={63}
                className="rounded-tl-full rounded-tr-full rounded-br-full"
              />
              <div className="flex flex-col justify-center items-start">
                <h4 className="text-xl font-heading">{author.name}</h4>
                <span className="text-sm text-muted-foreground">
                  {author.handle}
                </span>
              </div>
            </div>
          </div>

          {/* Navigation buttons */}
          <div className="absolute -bottom-12 left-8 lg:top-8 lg:left-0 group">
            <Button
              size={"icon"}
              onClick={handlePrevious}
              className="flex w-8 h-8 rounded-full bg-[#F9F4EF] group-hover:bg-[#F4ECE4]"
            >
              <ChevronLeftIcon className="size-3 text-[#D0C9C3] group-hover:text-black" />
            </Button>
          </div>
          <div className="absolute -bottom-12 right-8 lg:top-8 lg:right-0 group">
            <Button
              size={"icon"}
              onClick={handleNext}
              className="flex w-8 h-8 rounded-full bg-[#F9F4EF] group-hover:bg-[#F4ECE4]"
            >
              <ChevronRightIcon className="size-3 text-[#D0C9C3] group-hover:text-black" />
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}