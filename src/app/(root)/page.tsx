import { About } from "@/src/components/Home/About";
import HeroSection from "@/src/components/Home/HeroSection";

export default function Home() {
  return (
    <div className="lg:pt-16">
      <HeroSection />
      <About />
    </div>
  );
}
