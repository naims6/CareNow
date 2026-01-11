import React from "react";
import { servicesCardsData as serviceCardsData } from "@/src/data/services";
import { ServiceCard } from "@/src/components/card/ServiceCard";
const ServiceCardGrid = () => {
  return (
    <>
      {/* Use ServiceCard component here */}
      <div className="grid md:grid-cols-3 gap-6 lg:gap-8 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {serviceCardsData.map((service, index) => (
          <ServiceCard key={index} service={service} />
        ))}
      </div>
    </>
  );
};

export default ServiceCardGrid;
