import { About } from "@/src/components/Home/About";
import { ServicesSection } from "@/src/components/Home/ServiceSection";
import HeroSection from "@/src/components/Home/HeroSection";
import Testimonial from "@/src/components/Home/Testimonial";
import { HowItWorks } from "@/src/components/Home/HowItWorks";

export default function Home() {
  return (
    <div className="lg:pt-16">
      <HeroSection />
      <ServicesSection />
      <HowItWorks />
      <About />
      <Testimonial />
    </div>
  );
}
