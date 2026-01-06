import React from "react";
import { servicesCardsData as serviceCardsData } from "@/src/data/services";
import { ServiceCard } from "@/src/components/card/ServiceCard";
const ServiceCardGrid = () => {
  return (
    <>
      {/* Use ServiceCard component here */}
      <div className="grid md:grid-cols-3 gap-6 max-w-7xl mx-auto px-4">
        {serviceCardsData.map((service, index) => (
          <ServiceCard key={index} service={service} />
        ))}
      </div>
    </>
  );
};

export default ServiceCardGrid;
