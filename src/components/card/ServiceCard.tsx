import { useInView } from "framer-motion";
import React, { useRef } from "react";
import { motion } from "framer-motion";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "../ui/card";
import { Badge } from "../ui/badge";
import { Button } from "../ui/button";
import Link from "next/link";
import { ArrowRight, LucideIcon } from "lucide-react";

interface ServiceCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
  features: string[];
  price: string;
  badge: string;
  color: string;
  iconColor: string;
  delay: number;
}

export function ServiceCard({ service }: { service: ServiceCardProps }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });
  const Icon = service.icon;

  return (
    <motion.div
      ref={ref}
      variants={{
        hidden: {
          opacity: 0,
          y: 50,
          scale: 0.95,
          rotateX: 10,
        },
        visible: {
          opacity: 1,
          y: 0,
          scale: 1,
          rotateX: 0,
        },
      }}
      transition={{
        duration: 0.7,
        delay: service.delay,
        type: "spring",
        stiffness: 80,
        damping: 15,
      }}
      whileHover={{
        y: -10,
        scale: 1.02,
        transition: {
          type: "spring",
          stiffness: 300,
          damping: 20,
        },
      }}
      className="h-full"
    >
      <Card className="group hover:shadow-2xl transition-all duration-300 border hover:border-primary/30 relative overflow-hidden h-full">
        {/* Animated Background Gradient on Hover */}
        <div className="absolute inset-0 bg-linear-to-br from-transparent via-transparent to-primary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

        {/* Shine Effect on Hover */}
        <div className="absolute inset-0 bg-linear-to-r from-transparent via-white/10 to-transparent translate-x-full group-hover:translate-x-full transition-transform duration-1000" />

        <CardHeader className="relative z-10">
          <div className="flex items-start justify-between mb-4">
            <motion.div
              initial={{ rotate: -15, scale: 0.8 }}
              animate={
                isInView ? { rotate: 0, scale: 1 } : { rotate: -15, scale: 0.8 }
              }
              transition={{ delay: service.delay + 0.2, type: "spring" }}
              whileHover={{ rotate: 360, scale: 1.1 }}
              className={`p-3 rounded-lg ${service.color} transition-all duration-300 group-hover:scale-110`}
            >
              <Icon className={`h-8 w-8 ${service.iconColor}`} />
            </motion.div>
            {service.badge && (
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={
                  isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 20 }
                }
                transition={{ delay: service.delay + 0.3 }}
              >
                <Badge
                  variant="secondary"
                  className="ml-auto group-hover:bg-primary/20"
                >
                  {service.badge}
                </Badge>
              </motion.div>
            )}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 10 }}
            transition={{ delay: service.delay + 0.4 }}
          >
            <CardTitle className="text-2xl group-hover:text-primary transition-colors">
              {service.title}
            </CardTitle>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 10 }}
            transition={{ delay: service.delay + 0.5 }}
          >
            <CardDescription className="text-base mt-2">
              {service.description}
            </CardDescription>
          </motion.div>
        </CardHeader>

        <CardContent className="relative z-10">
          {/* Features List with Stagger Animation */}
          <motion.ul
            className="space-y-3 mb-6"
            variants={{
              hidden: { opacity: 0 },
              visible: {
                opacity: 1,
                transition: {
                  staggerChildren: 0.1,
                  delayChildren: service.delay + 0.6,
                },
              },
            }}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
          >
            {service.features.map((feature: string, idx: number) => (
              <motion.li
                key={idx}
                variants={{
                  hidden: { opacity: 0, x: -10 },
                  visible: { opacity: 1, x: 0 },
                }}
                className="flex items-center gap-2 group/item"
              >
                <motion.div
                  className="w-1.5 h-1.5 rounded-full bg-primary group-hover/item:scale-150 transition-transform"
                  whileHover={{ scale: 1.5 }}
                />
                <span className="text-sm group-hover/item:text-foreground transition-colors">
                  {feature}
                </span>
              </motion.li>
            ))}
          </motion.ul>

          {/* Price with Animation */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : { opacity: 0 }}
            transition={{ delay: service.delay + 0.9 }}
            className="mb-6"
          >
            <div className="text-lg font-semibold text-foreground group-hover:text-primary transition-colors">
              {service.price}
            </div>
            <p className="text-sm text-muted-foreground">
              Flexible hours available
            </p>
          </motion.div>

          {/* CTA Button with Arrow Animation */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 10 }}
            transition={{ delay: service.delay + 1 }}
            whileHover={{ scale: 1.02 }}
          >
            <Button
              asChild
              className="w-full group-hover:bg-primary group-hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl"
            >
              <Link
                href={`/services/${service.title
                  .toLowerCase()
                  .replace(" ", "-")}`}
                className="relative overflow-hidden"
              >
                <span className="relative z-10">Book Now</span>
                <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-2 transition-transform duration-300" />

                {/* Button Hover Effect */}
                <span className="absolute inset-0 bg-linear-to-r from-primary/0 via-primary/10 to-primary/0 translate-x-full group-hover:translate-x-full transition-transform duration-700" />
              </Link>
            </Button>
          </motion.div>
        </CardContent>
      </Card>
    </motion.div>
  );
}
