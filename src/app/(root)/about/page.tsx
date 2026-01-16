import AboutPage from "@/src/components/Pages/about/About";
import { Metadata } from "next";

import { pageMetadata, siteMetadata } from "@/src/config/metadata";

export const metadata: Metadata = {
  title: `${pageMetadata.about.title} ${siteMetadata.titleSuffix}`,
  description: `${pageMetadata.about.description}`,
};

const page = () => {
  return <AboutPage />;
};

export default page;
