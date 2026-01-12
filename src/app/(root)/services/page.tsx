import { Metadata } from "next";
import ServiceHeroSection from "@/src/components/Pages/Services/ServiceHeroSection";
import { FAQ } from "@/src/components/Pages/Home/Faq";
import ServicePage from "@/src/components/Pages/Services/ServicePage";

export const metadata: Metadata = {
  title: "Our Care Services | Baby Care, Elderly Care & Special Care",
  description:
    "Explore our professional care services: baby sitting, elderly care, and special needs care. Certified caregivers, flexible scheduling, and 24/7 support.",
};

export default function ServicesPage() {
  return (
    <div className="min-h-screen bg-linear-to-b from-background to-muted/20">
      <ServiceHeroSection />
      <ServicePage />
      <FAQ />
    </div>
  );
}
