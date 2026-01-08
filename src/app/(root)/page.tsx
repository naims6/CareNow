import { About } from "@/src/components/Pages/Home/About";
import { ServicesSection } from "@/src/components/Pages/Home/ServiceSection";
import HeroSection from "@/src/components/Pages/Home/HeroSection";
import Testimonial from "@/src/components/Pages/Home/Testimonial";
import { HowItWorks } from "@/src/components/Pages/Home/HowItWorks";
import { EmergencyCare } from "@/src/components/Pages/Home/EmergencyCare";
import { FAQ } from "@/src/components/Pages/Home/Faq";
import { CaregiverPreview } from "@/src/components/Pages/Home/CareGiversProfile";

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
    </div>
  );
}
