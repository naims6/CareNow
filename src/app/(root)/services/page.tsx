import { Metadata } from "next";
import ServiceHeroSection from "@/src/components/Pages/Services/ServiceHeroSection";
import { FAQ } from "@/src/components/Pages/Home/Faq";
import ServicePage from "@/src/components/Pages/Services/ServicePage";
import { pageMetadata, siteMetadata } from "@/src/config/metadata";

export const metadata: Metadata = {
  title: `${pageMetadata.services.title} ${siteMetadata.titleSuffix}`,
  description: `${pageMetadata.services.description}`,
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
