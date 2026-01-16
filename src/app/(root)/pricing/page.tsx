import PricingPage from "@/src/components/Pages/pricing/PricingPage";
import { pageMetadata, siteMetadata } from "@/src/config/metadata";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: `${pageMetadata.pricing.title} ${siteMetadata.titleSuffix}`,
  description: `${pageMetadata.pricing.description}`,
};

const page = () => {
  return <PricingPage />;
};

export default page;
