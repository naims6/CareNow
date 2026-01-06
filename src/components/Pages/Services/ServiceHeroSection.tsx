import React from 'react';
import { motion } from "framer-motion";
import { Badge } from "@/src/components/ui/badge";
import { Button } from '../../ui/button';
import Link from 'next/link';
const ServiceHeroSection = () => {
    return (
        <motion.section
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="pt-24 pb-10 md:pt-32 md:pb-20 relative overflow-hidden"
      >
        <div className="absolute inset-0 bg-linear-to-br from-primary/5 via-transparent to-transparent" />
        <div className="mx-auto max-w-7xl relative px-6">
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
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" asChild>
                <Link href="#services">Explore Services</Link>
              </Button>
              <Button size="lg" variant="outline" asChild>
                <Link href="/book">Book Now</Link>
              </Button>
            </div>
          </div>
        </div>
      </motion.section>
    );
};

export default ServiceHeroSection;