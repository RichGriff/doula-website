import { Separator } from "@/components/ui/separator";
import About from "@/components/website/about";
import ContactForm from "@/components/website/contact";
import { Hero } from "@/components/website/hero-section";
import Process from "@/components/website/process";
import { Quote } from "@/components/website/quote";
import Services from "@/components/website/services";
import Testimonials from "@/components/website/testimonials";

export default function Home() {
  return (
    <>
      <Hero />
      <Services />
      <About />
      <Process />
      <Quote quote="Birth is the sudden opening of a window, through which you look out upon a stupendous prospect. For what has happened? A miracle. You have exchanged nothing for the possibility of everything." author="William MacNeile Dixon" />
      <Testimonials />
      <Separator className="w-2/3 mx-auto bg-[#F4ECE4]"/>
      <ContactForm />
    </>
  );
}
