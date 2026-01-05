import { About } from "@/src/components/Home/About";
import { ServicesSection } from "@/src/components/Home/ServiceSection";
import HeroSection from "@/src/components/Home/HeroSection";
import Testimonial from "@/src/components/Home/Testimonial";
import { HowItWorks } from "@/src/components/Home/HowItWorks";
import { EmergencyCare } from "@/src/components/Home/EmergencyCare";
import { FAQ } from "@/src/components/Home/Faq";
import { CaregiverPreview } from "@/src/components/Home/CareGiversProfile";
import { BlogPreview } from "@/src/components/Home/BlogPreview";

export default function Home() {
  return (
    <div className="lg:pt-16">
      <HeroSection />
      <ServicesSection />
      <HowItWorks />
      <CaregiverPreview />
      <About />
      <Testimonial />
      <EmergencyCare />
      <FAQ />
      <BlogPreview />
    </div>
  );
}
