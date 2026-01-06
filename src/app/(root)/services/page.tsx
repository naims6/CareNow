"use client";
// import { Metadata } from "next";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
  CardFooter,
} from "@/src/components/ui/card";
import { Button } from "@/src/components/ui/button";
import { Badge } from "@/src/components/ui/badge";
import { Separator } from "@/src/components/ui/separator";
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/src/components/ui/tabs";
import {
  Baby,
  User,
  HeartPulse,
  Check,
  Clock,
  Shield,
  Users,
  Phone,
  MapPin,
  ArrowRight,
} from "lucide-react";
import { servicesCardsData as serviceCardsData } from "@/src/data/services";
import Link from "next/link";
import { ServiceCard } from "@/src/components/card/ServiceCard";
import { services } from "@/src/data/services";

// export const metadata: Metadata = {
//   title: "Our Care Services | Baby Care, Elderly Care & Special Care",
//   description:
//     "Explore our professional care services: baby sitting, elderly care, and special needs care. Certified caregivers, flexible scheduling, and 24/7 support.",
// };

export default function ServicesPage() {
  const faqs = [
    {
      question: "How quickly can I get a caregiver?",
      answer:
        "For standard bookings: Within 24 hours. For emergency/same-day service: Within 2-4 hours in metro areas. We have caregivers available 24/7 for urgent needs.",
    },
    {
      question: "What's included in the hourly rate?",
      answer:
        "Caregiver's time, background-verified service, insurance coverage, 24/7 support access, regular check-ins, and emergency response. Additional medical supplies or transportation may have extra charges.",
    },
    {
      question: "Can I meet the caregiver before booking?",
      answer:
        "Yes! We offer free 30-minute video consultations with potential caregivers. You can view profiles, certifications, and reviews before making a decision.",
    },
  ];

  return (
    <div className="min-h-screen bg-linear-to-b from-background to-muted/20">
      {/* Hero Section */}
      <section className="pt-24 pb-10 md:pt-32 md:pb-20 relative overflow-hidden">
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
      </section>

      {/* Services Tabs */}
      <section id="services" className="py-16 md:pt-14 pb-16">
        <div className="mx-auto max-w-7xl px-6">
          <Tabs defaultValue="baby-care" className="w-full">
            <div className="flex justify-center mb-12">
              <TabsList className="grid w-full max-w-2xl grid-cols-3">
                <TabsTrigger
                  value="baby-care"
                  className="flex items-center gap-2"
                >
                  <Baby className="h-4 w-4" />
                  Baby Care
                </TabsTrigger>
                <TabsTrigger
                  value="elderly-care"
                  className="flex items-center gap-2"
                >
                  <User className="h-4 w-4" />
                  Elderly Care
                </TabsTrigger>
                <TabsTrigger
                  value="special-care"
                  className="flex items-center gap-2"
                >
                  <HeartPulse className="h-4 w-4" />
                  Special Care
                </TabsTrigger>
              </TabsList>
            </div>

            {services.map((service) => {
              const Icon = service.icon;
              return (
                <TabsContent
                  key={service.id}
                  value={service.id}
                  className="space-y-8"
                >
                  {/* Service Header */}
                  <div className="grid lg:grid-cols-2 gap-8 items-start">
                    <div>
                      <div className="flex items-center gap-4 mb-6">
                        <div
                          className={`p-4 rounded-xl ${service.color
                            .replace("bg-", "bg-linear-to-br from-")
                            .replace("/20", "/40")} shadow-lg`}
                        >
                          <Icon className="h-8 w-8 text-white" />
                        </div>
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
                                <div
                                  key={idx}
                                  className="flex items-center gap-2"
                                >
                                  <HighlightIcon
                                    className={`h-4 w-4 ${highlight.color}`}
                                  />
                                  <span className="text-sm">
                                    {highlight.text}
                                  </span>
                                </div>
                              );
                            })}
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Pricing Card */}
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
                          <div className="flex items-center gap-2">
                            <Check className="h-4 w-4 text-green-600" />
                            <span>Minimum 4 hours booking</span>
                          </div>
                          <div className="flex items-center gap-2">
                            <Check className="h-4 w-4 text-green-600" />
                            <span>Free consultation included</span>
                          </div>
                          <div className="flex items-center gap-2">
                            <Check className="h-4 w-4 text-green-600" />
                            <span>Insurance coverage up to ৳5 lakh</span>
                          </div>
                        </div>
                      </CardContent>
                      <CardFooter>
                        <Button className="w-full" size="lg" asChild>
                          <Link href={`/book?service=${service.id}`}>
                            Book {service.title}
                            <ArrowRight className="ml-2 h-4 w-4" />
                          </Link>
                        </Button>
                      </CardFooter>
                    </Card>
                  </div>

                  {/* Features & Ideal For */}
                  <div className="grid md:grid-cols-2 gap-8">
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
                            <li key={idx} className="flex items-start gap-3">
                              <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2 shrink-0" />
                              <span>{feature}</span>
                            </li>
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
                            <li key={idx} className="flex items-start gap-3">
                              <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2 shrink-0" />
                              <span>{item}</span>
                            </li>
                          ))}
                        </ul>
                      </CardContent>
                    </Card>
                  </div>
                </TabsContent>
              );
            })}
          </Tabs>
        </div>
      </section>

      <Separator className="my-8" />

      {/* All Services Grid using ServiceCard component */}
      <section className="py-16 md:py-24">
        <div className="mx-auto max-w-7xl px-6">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Compare All Services
            </h2>
            <p className="text-lg text-muted-foreground">
              Find the perfect care service for your specific needs
            </p>
          </div>

          {/* Use ServiceCard component here */}
          <div className="grid md:grid-cols-3 gap-6">
            {serviceCardsData.map((service, index) => (
              <ServiceCard key={index} service={service} />
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 md:py-24 bg-muted/30">
        <div className="mx-auto max-w-7xl px-6">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Common Questions
            </h2>
            <p className="text-lg text-muted-foreground">
              Everything you need to know about our services
            </p>
          </div>

          <div className="max-w-3xl mx-auto">
            {faqs.map((faq, index) => (
              <Card key={index} className="mb-4">
                <CardContent className="p-6">
                  <h3 className="text-lg font-semibold mb-3">{faq.question}</h3>
                  <p className="text-muted-foreground">{faq.answer}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
