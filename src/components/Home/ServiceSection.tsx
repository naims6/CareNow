"use client"

import { Badge } from "@/src/components/ui/badge";
import {
  Baby,
  User,
  HeartPulse,
  Clock,
  Shield,
  Star,

} from "lucide-react";
import { motion } from "framer-motion";

import { ServiceCard } from "../card/ServiceCard";
import { TrustCard } from "../card/TrustCard";

export function ServicesSection() {
  const services = [
    {
      icon: Baby,
      title: "Baby Care",
      description:
        "Professional babysitting services with certified caregivers for newborns, infants, and toddlers.",
      features: ["Newborn Care", "Overnight Sitting", "Emergency Care"],
      price: "Starting from ৳300/hour",
      badge: "Most Popular",
      color: "bg-pink-50 dark:bg-pink-950/20",
      iconColor: "text-pink-600",
      delay: 0.1
    },
    {
      icon: User,
      title: "Elderly Care",
      description:
        "Compassionate care for senior citizens including companionship, medication management, and daily assistance.",
      features: ["24/7 Companion", "Medication Help", "Mobility Support"],
      price: "Starting from ৳350/hour",
      badge: "24/7 Available",
      color: "bg-blue-50 dark:bg-blue-950/20",
      iconColor: "text-blue-600",
      delay: 0.2
    },
    {
      icon: HeartPulse,
      title: "Special Care",
      description:
        "Specialized care for post-surgery patients, chronic conditions, and individuals with special needs.",
      features: ["Post-Surgery Care", "Chronic Conditions", "Special Needs"],
      price: "Starting from ৳400/hour",
      badge: "Medical Trained",
      color: "bg-green-50 dark:bg-green-950/20",
      iconColor: "text-green-600",
      delay: 0.3
    },
  ];

  return (
    <section className="py-16 md:py-24 border-b border-accent">
      <div className="max-w-7xl mx-auto">
        {/* Section Header with Animation */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-12"
        >
          <Badge variant="outline" className="mb-4">
            Our Services
          </Badge>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Professional Care Services
          </h2>
          <p className="text-lg text-muted-foreground">
            Choose from our range of trusted care services, each designed to
            provide safety, comfort, and professional support for your loved
            ones.
          </p>
        </motion.div>

        {/* Services Grid with Stagger Animation */}
        <motion.div 
          className="grid md:grid-cols-3 gap-6"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={{
            hidden: { opacity: 0 },
            visible: {
              opacity: 1,
              transition: {
                staggerChildren: 0.15,
                delayChildren: 0.1
              }
            }
          }}
        >
          {services.map((service, index) => {
            return (
              <ServiceCard key={index} service={service} />
            );
          })}
        </motion.div>

        {/* Additional Info with Animation */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-16 grid md:grid-cols-3 gap-6"
        >
          <TrustCard
            icon={Shield}
            title="Verified Caregivers"
            description="All caregivers undergo strict background checks and training"
          />
          <TrustCard 
            icon={Clock}
            title="Flexible Scheduling"
            description="Book for hours, days, or weeks with easy rescheduling"
          />
          <TrustCard 
            icon={Star}
            title="98% Satisfaction"
            description="Rated excellent by families across Bangladesh"
          />
        </motion.div>
      </div>
    </section>
  );
}

