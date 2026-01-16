import HowItWorksPage from "@/src/components/Pages/HowItWorks/HowItWorks";
import React from "react";
import { pageMetadata, siteMetadata } from "@/src/config/metadata";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: `${pageMetadata.howitworks.title} ${siteMetadata.titleSuffix}`,
  description: `${pageMetadata.howitworks.description}`,
};

const page = () => {
  return <HowItWorksPage />;
};

export default page;
