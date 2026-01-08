import React from 'react';
import { motion } from "framer-motion";
import { Badge } from "@/src/components/ui/badge";
const ServiceHeroSection = () => {
    return (
        <motion.section
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="pt-24 pb-8 md:pt-32 md:pb-5 relative overflow-hidden"
      >
        <div className="absolute inset-0 bg-linear-to-br from-primary/5 via-transparent to-transparent" />
        <div className="mx-auto max-w-7xl relative px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <Badge variant="outline" className="mb-6">
              Our Services
            </Badge>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-6">
              Professional Care Services
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground mb-8">
              Choose from our range of trusted care services, each designed to
              provide safety, comfort, and professional support for your loved
              ones.
            </p>
          </div>
        </div>
      </motion.section>
    );
};

export default ServiceHeroSection;