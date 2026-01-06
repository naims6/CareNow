"use client";

import { Card, CardContent } from "@/src/components/ui/card";
import { Button } from "@/src/components/ui/button";
import { Badge } from "@/src/components/ui/badge";
import { Separator } from "@/src/components/ui/separator";
import { CheckCircle } from "lucide-react";
import { stats } from "@/src/data/stats";
import { TrustIndicators } from "./TrustIndicators";
import { motion } from "framer-motion";

export function About() {
  const features = [
    "Background Verified Caregivers",
    "24/7 Emergency Support",
    "Flexible Booking Options",
    "Regular Quality Checks",
    "Insurance Coverage",
    "Same-Day Service Available",
  ];

  return (
    <section id="about" className="py-16 md:py-20 border-b border-accent">
      <div className="mx-auto max-w-7xl px-4">
        {/* Main Content with Stagger Animation */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
          className="grid lg:grid-cols-2 gap-12 items-center"
        >
          {/* Left Column */}
          <div>
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <Badge variant="secondary" className="mb-4">
                Why Choose CareNow.
              </Badge>
            </motion.div>

            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-4xl md:text-5xl font-bold tracking-tight mb-6"
            >
              Trusted Care for Your{" "}
              <span className="text-primary">Loved Ones</span>
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-lg text-muted-foreground mb-8"
            >
              At CareNow, we understand that entrusting someone with your
              family&apos;s care is a big decision. That&apos;s why we go above
              and beyond to ensure every caregiver is thoroughly vetted,
              trained, and matched to your specific needs.
            </motion.p>

            {/* Features List with Stagger */}
            <motion.div
              className="space-y-4 mb-8"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={{
                hidden: { opacity: 0 },
                visible: {
                  opacity: 1,
                  transition: {
                    staggerChildren: 0.1,
                    delayChildren: 0.3,
                  },
                },
              }}
            >
              {features.map((feature, index) => (
                <motion.div
                  key={index}
                  variants={{
                    hidden: { opacity: 0, x: -10 },
                    visible: { opacity: 1, x: 0 },
                  }}
                  className="flex items-center gap-3"
                >
                  <CheckCircle className="h-5 w-5 text-green-600 shrink-0" />
                  <span>{feature}</span>
                </motion.div>
              ))}
            </motion.div>

            {/* Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.6 }}
              className="flex flex-wrap gap-4"
            >
              <Button>Book a Caregiver</Button>
              <Button variant="outline">Learn More</Button>
            </motion.div>
          </div>

          {/* Right Column - Stats */}
          <div className="grid grid-cols-2 gap-6">
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, scale: 0.8, y: 30 }}
                whileInView={{ opacity: 1, scale: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.5,
                  delay: index * 0.1,
                  type: "spring",
                  stiffness: 100,
                }}
                whileHover={{
                  y: -5,
                  transition: { duration: 0.2 },
                }}
              >
                <Card className="text-center bg-card/50 border border-accent/50 hover:shadow-lg transition-all duration-300">
                  <CardContent className="p-6">
                    <motion.div
                      initial={{ rotate: -10, scale: 0.8 }}
                      whileInView={{ rotate: 0, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.1 + 0.2, type: "spring" }}
                    >
                      <stat.icon className="h-8 w-8 text-primary mx-auto mb-4" />
                    </motion.div>
                    <div className="text-3xl font-bold">{stat.value}</div>
                    <div className="text-sm text-muted-foreground">
                      {stat.label}
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Separator with Animation */}
        <motion.div
          initial={{ width: 0 }}
          whileInView={{ width: "100%" }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="my-10"
        >
          <Separator />
        </motion.div>

        {/* Trust Indicators with Fade In */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <TrustIndicators />
        </motion.div>
      </div>
    </section>
  );
}
