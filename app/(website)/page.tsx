import About from "@/components/website/about";
import Contact from "@/components/website/contact";
import Footer from "@/components/website/footer";
import Hero from "@/components/website/Hero";
import Hero2 from "@/components/website/hero2";
import Services from "@/components/website/services";
import Testimonials from "@/components/website/testimonials";

export default function Home() {
  return (
    <>
      <Hero />
      <About />
      <Services />
      <Testimonials />
      <Contact />
      <Footer />
    </>
  );
}
