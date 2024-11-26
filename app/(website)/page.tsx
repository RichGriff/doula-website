import { Separator } from "@/components/ui/separator";
import About from "@/components/website/about";
import ContactForm from "@/components/website/contact";
import { Hero } from "@/components/website/hero-section";
import Process from "@/components/website/process";
import { Quote } from "@/components/website/quote";
import Services from "@/components/website/services";
import Testimonials from "@/components/website/testimonials";
import { quotes } from "@/config";

export default function Home() {
  const { homepage } = quotes
  
  return (
    <>
      <Hero />
      <Services />
      <About />
      <Process />
      <Quote quote={homepage.content} author={homepage.author} />
      <Testimonials />
      <Separator className="w-2/3 mx-auto bg-[#F4ECE4]"/>
      <ContactForm />
    </>
  );
}
