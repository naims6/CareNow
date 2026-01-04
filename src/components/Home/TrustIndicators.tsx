// components/sections/trust-indicators.tsx
"use client";

import { motion } from "framer-motion";
import { Shield, Award, CheckCircle, Users, Clock, Star } from "lucide-react";

export function TrustIndicators() {
  // Trust badges data
  const trustBadges = [
    {
      icon: Shield,
      title: "Verified Caregivers",
      description: "Background checked & trained",
      color: "text-blue-600",
      bgColor: "bg-blue-100",
    },
    {
      icon: Award,
      title: "Quality Certified",
      description: "ISO 9001:2015 Standards",
      color: "text-green-600",
      bgColor: "bg-green-100",
    },
    {
      icon: CheckCircle,
      title: "100% Secure",
      description: "Safe & insured services",
      color: "text-purple-600",
      bgColor: "bg-purple-100",
    },
    {
      icon: Users,
      title: "1,200+ Families",
      description: "Trust us nationwide",
      color: "text-orange-600",
      bgColor: "bg-orange-100",
    },
    {
      icon: Clock,
      title: "24/7 Support",
      description: "Always here to help",
      color: "text-indigo-600",
      bgColor: "bg-indigo-100",
    },
    {
      icon: Star,
      title: "98% Satisfaction",
      description: "Highest rating in care",
      color: "text-yellow-600",
      bgColor: "bg-yellow-100",
    },
  ];

  // City coverage data
  const cities = [
    { name: "Dhaka", users: "500+" },
    { name: "Chittagong", users: "300+" },
    { name: "Sylhet", users: "200+" },
    { name: "Rajshahi", users: "150+" },
    { name: "Khulna", users: "180+" },
    { name: "Barishal", users: "120+" },
    { name: "Rangpur", users: "100+" },
    { name: "Mymensingh", users: "90+" },
  ];

  return (
    <section className="">
      <div className="max-w-7xl mx-auto">
        {/* Heading */}
        <div className="text-center mb-12">
          <h3 className="text-2xl font-semibold mb-8">
            Trusted by Families Across Bangladesh
          </h3>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Join thousands of families who trust Care.IO for their loved
            ones&apos; care
          </p>
        </div>

        {/* Trust Badges Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 mb-16">
          {trustBadges.map((badge, index) => {
            const Icon = badge.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="text-center"
              >
                <div
                  className={`${badge.bgColor} w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-4`}
                >
                  <Icon className={`h-8 w-8 ${badge.color}`} />
                </div>
                <h3 className="font-semibold text-sm mb-1">{badge.title}</h3>
                <p className="text-xs text-muted-foreground">
                  {badge.description}
                </p>
              </motion.div>
            );
          })}
        </div>

        {/* City Coverage with Marquee Effect */}
        <div className="mb-16">
          <h3 className="text-center text-xl font-semibold mb-8">
            Serving Families in Every Division
          </h3>
          <div className="relative overflow-hidden">
            {/* Gradient overlays */}
            <div className="absolute left-0 top-0 bottom-0 w-20 bg-linear-to-r from-background to-transparent z-10" />
            <div className="absolute right-0 top-0 bottom-0 w-20 bg-linear-to-l from-background to-transparent z-10" />

            <motion.div
              className="flex gap-8"
              animate={{
                x: ["0%", "-100%"],
              }}
              transition={{
                x: {
                  duration: 30,
                  repeat: Infinity,
                  ease: "linear",
                },
              }}
            >
              {/* First set */}
              {cities.map((city, index) => (
                <div
                  key={index}
                  className="flex flex-col items-center min-w-30"
                >
                  <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mb-3">
                    <span className="text-xl font-bold text-primary">
                      {city.users}
                    </span>
                  </div>
                  <span className="font-medium">{city.name}</span>
                  <span className="text-sm text-muted-foreground">
                    Families
                  </span>
                </div>
              ))}

              {/* Duplicate set for continuos loop */}
              {cities.map((city, index) => (
                <div
                  key={`dup-${index}`}
                  className="flex flex-col items-center min-w-30"
                >
                  <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mb-3">
                    <span className="text-xl font-bold text-primary">
                      {city.users}
                    </span>
                  </div>
                  <span className="font-medium">{city.name}</span>
                  <span className="text-sm text-muted-foreground">
                    Families
                  </span>
                </div>
              ))}
            </motion.div>
          </div>
        </div>

        {/* Partner Logos Marquee */}
        <div className="relative">
          <h3 className="text-center text-xl font-semibold mb-8">
            Recommended By
          </h3>

          <div className="relative overflow-hidden">
            <div className="absolute left-0 top-0 bottom-0 w-20 bg-linear-to-r from-background to-transparent z-10" />
            <div className="absolute right-0 top-0 bottom-0 w-20 bg-linear-to-l from-background to-transparent z-10" />

            <motion.div
              className="flex items-center gap-12"
              animate={{
                x: ["0%", "-100%"],
              }}
              transition={{
                x: {
                  duration: 40,
                  repeat: Infinity,
                  ease: "linear",
                },
              }}
            >
              {/* Partner logos */}
              {[
                {
                  name: "Bangladesh Medical",
                  text: "🏥 Bangladesh Medical Association",
                },
                { name: "Child Care BD", text: "👶 Child Care Bangladesh" },
                { name: "Senior Care", text: "👵 Senior Care Network" },
                {
                  name: "Quality Healthcare",
                  text: "⭐ Quality Healthcare BD",
                },
                { name: "Safe Families", text: "🛡️ Safe Families Trust" },
                { name: "Care Professional", text: "💼 Care Professionals BD" },
              ].map((partner, index) => (
                <div key={index} className="flex items-center gap-3 min-w-50">
                  <div className="text-2xl">{partner.text.split(" ")[0]}</div>
                  <div className="text-sm font-medium">
                    {partner.text.split(" ").slice(1).join(" ")}
                  </div>
                </div>
              ))}

              {/* Duplicate set */}
              {[
                {
                  name: "Bangladesh Medical",
                  text: "🏥 Bangladesh Medical Association",
                },
                { name: "Child Care BD", text: "👶 Child Care Bangladesh" },
                { name: "Senior Care", text: "👵 Senior Care Network" },
                {
                  name: "Quality Healthcare",
                  text: "⭐ Quality Healthcare BD",
                },
                { name: "Safe Families", text: "🛡️ Safe Families Trust" },
                { name: "Care Professional", text: "💼 Care Professionals BD" },
              ].map((partner, index) => (
                <div
                  key={`dup-${index}`}
                  className="flex items-center gap-3 min-w-50"
                >
                  <div className="text-2xl">{partner.text.split(" ")[0]}</div>
                  <div className="text-sm font-medium">
                    {partner.text.split(" ").slice(1).join(" ")}
                  </div>
                </div>
              ))}
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
