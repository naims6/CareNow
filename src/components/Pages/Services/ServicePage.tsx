"use client";

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
  CardFooter,
} from "@/src/components/ui/card";
import { Button } from "@/src/components/ui/button";
import { Separator } from "@/src/components/ui/separator";
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/src/components/ui/tabs";
import { Baby, User, HeartPulse, Check, Users, ArrowRight } from "lucide-react";

import Link from "next/link";
import { services } from "@/src/data/services";
import { motion } from "framer-motion";
import ServiceCardGrid from "@/src/components/Pages/Services/ServiceCardGrid";

const ServicePage = () => {
  return (
    <>
     {/* Services Tabs */}
      <section id="services" className="py-16 md:pt-10 pb-16">
        <div className="mx-auto max-w-7xl px-6">
          <Tabs defaultValue="baby-care" className="w-full">
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="flex justify-center mb-12"
            >
              <TabsList className="grid w-full max-w-2xl grid-cols-3">
                <TabsTrigger
                  value="baby-care"
                  className="flex items-center gap-2 cursor-pointer"
                >
                  <Baby className="h-4 w-4" />
                  Baby Care
                </TabsTrigger>
                <TabsTrigger
                  value="elderly-care"
                  className="flex items-center gap-2 cursor-pointer"
                >
                  <User className="h-4 w-4" />
                  Elderly Care
                </TabsTrigger>
                <TabsTrigger
                  value="special-care"
                  className="flex items-center gap-2 cursor-pointer"
                >
                  <HeartPulse className="h-4 w-4" />
                  Special Care
                </TabsTrigger>
              </TabsList>
            </motion.div>

            {services.map((service, tabIndex) => {
              const Icon = service.icon;
              return (
                <TabsContent
                  key={service.id}
                  value={service.id}
                  className="space-y-8"
                >
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: tabIndex * 0.1 }}
                    className="grid lg:grid-cols-2 gap-8 items-start"
                  >
                    {/* Service Header */}
                    <div>
                      <div className="flex items-center gap-4 mb-6">
                        <motion.div
                          initial={{ scale: 0.8 }}
                          whileInView={{ scale: 1 }}
                          viewport={{ once: true }}
                          transition={{ duration: 0.4 }}
                          className={`p-4 rounded-xl ${service.color
                            .replace("bg-", "bg-linear-to-br from-")
                            .replace("/20", "/40")} shadow-lg`}
                        >
                          <Icon className="h-8 w-8 text-white" />
                        </motion.div>
                        <div>
                          <h2 className="text-3xl md:text-4xl font-bold">
                            {service.title}
                          </h2>
                          <p className="text-muted-foreground">
                            {service.subtitle}
                          </p>
                        </div>
                      </div>

                      <p className="text-lg mb-8">{service.description}</p>

                      <div className="space-y-4">
                        <div>
                          <h3 className="text-xl font-semibold mb-2">
                            Service Highlights
                          </h3>
                          <div className="flex flex-wrap gap-4">
                            {service.highlights.map((highlight, idx) => {
                              const HighlightIcon = highlight.icon;
                              return (
                                <motion.div
                                  key={idx}
                                  initial={{ opacity: 0, x: -10 }}
                                  whileInView={{ opacity: 1, x: 0 }}
                                  viewport={{ once: true }}
                                  transition={{
                                    duration: 0.4,
                                    delay: idx * 0.1,
                                  }}
                                  className="flex items-center gap-2"
                                >
                                  <HighlightIcon
                                    className={`h-4 w-4 ${highlight.color}`}
                                  />
                                  <span className="text-sm">
                                    {highlight.text}
                                  </span>
                                </motion.div>
                              );
                            })}
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Pricing Card */}
                    <motion.div
                      initial={{ opacity: 0, scale: 0.95 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.5, delay: 0.2 }}
                      whileHover={{ y: -5 }}
                    >
                      <Card className="border-primary/20 shadow-lg">
                        <CardHeader>
                          <CardTitle className="text-2xl">
                            Pricing & Details
                          </CardTitle>
                          <CardDescription>
                            Flexible plans for your needs
                          </CardDescription>
                        </CardHeader>
                        <CardContent className="space-y-6">
                          <div>
                            <div className="text-3xl font-bold text-primary">
                              {service.price}
                            </div>
                            <p className="text-sm text-muted-foreground">
                              Custom packages available for long-term care
                            </p>
                          </div>

                          <div className="space-y-3">
                            {[
                              "Minimum 4 hours booking",
                              "Free consultation included",
                              "Insurance coverage up to ৳5 lakh",
                            ].map((item, idx) => (
                              <motion.div
                                key={idx}
                                initial={{ opacity: 0, x: -10 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{
                                  duration: 0.3,
                                  delay: 0.3 + idx * 0.1,
                                }}
                                className="flex items-center gap-2"
                              >
                                <Check className="h-4 w-4 text-green-600" />
                                <span>{item}</span>
                              </motion.div>
                            ))}
                          </div>
                        </CardContent>
                        <CardFooter>
                          <motion.div
                            whileHover={{ scale: 1.02 }}
                            transition={{ duration: 0.2 }}
                          >
                            <Button className="w-full" size="lg" asChild>
                              <Link href={`/services/${service.id}`}>
                                View Details
                                <ArrowRight className="ml-2 h-4 w-4" />
                              </Link>
                            </Button>
                          </motion.div>
                        </CardFooter>
                      </Card>
                    </motion.div>
                  </motion.div>

                  {/* Features & Ideal For */}
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.3 }}
                    className="grid md:grid-cols-2 gap-8"
                  >
                    <Card>
                      <CardHeader>
                        <CardTitle className="flex items-center gap-2">
                          <Check className="h-5 w-5 text-primary" />
                          What&apos;s Included
                        </CardTitle>
                      </CardHeader>
                      <CardContent>
                        <ul className="space-y-3">
                          {service.features.map((feature, idx) => (
                            <motion.li
                              key={idx}
                              initial={{ opacity: 0, x: -10 }}
                              whileInView={{ opacity: 1, x: 0 }}
                              viewport={{ once: true }}
                              transition={{ duration: 0.3, delay: idx * 0.05 }}
                              className="flex items-start gap-3"
                            >
                              <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2 shrink-0" />
                              <span>{feature}</span>
                            </motion.li>
                          ))}
                        </ul>
                      </CardContent>
                    </Card>

                    <Card>
                      <CardHeader>
                        <CardTitle className="flex items-center gap-2">
                          <Users className="h-5 w-5 text-primary" />
                          Ideal For
                        </CardTitle>
                      </CardHeader>
                      <CardContent>
                        <ul className="space-y-3">
                          {service.idealFor.map((item, idx) => (
                            <motion.li
                              key={idx}
                              initial={{ opacity: 0, x: -10 }}
                              whileInView={{ opacity: 1, x: 0 }}
                              viewport={{ once: true }}
                              transition={{ duration: 0.3, delay: idx * 0.05 }}
                              className="flex items-start gap-3"
                            >
                              <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2 shrink-0" />
                              <span>{item}</span>
                            </motion.li>
                          ))}
                        </ul>
                      </CardContent>
                    </Card>
                  </motion.div>
                </TabsContent>
              );
            })}
          </Tabs>
        </div>
      </section>

      <Separator className="my-8" />

      {/* All Services Grid using ServiceCard component */}
      <motion.section
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="py-16 md:py-24"
      >
        <div className="mx-auto max-w-7xl px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center max-w-3xl mx-auto mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Compare All Services
            </h2>
            <p className="text-lg text-muted-foreground">
              Find the perfect care service for your specific needs
            </p>
          </motion.div>

          <ServiceCardGrid />
        </div>
      </motion.section>
    </>
  )
}

export default ServicePage