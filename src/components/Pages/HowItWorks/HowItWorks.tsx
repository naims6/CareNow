"use client";

import { Card, CardContent } from "@/src/components/ui/card";
import { Badge } from "@/src/components/ui/badge";
import { Button } from "@/src/components/ui/button";
import {
  Search,
  UserCheck,
  Calendar,
  Shield,
  CheckCircle,
  Clock,
  Phone,
  Mail,
  ArrowRight,
  Users,
  Star,
  FileCheck,
  HeartHandshake,
  Award,
  Zap,
} from "lucide-react";
import { motion } from "framer-motion";
import { cn } from "@/src/lib/utils";
import Link from "next/link";

export function HowItWorksPage() {
  return (
    <div className="min-h-screen mt-8">
      {/* Hero Section */}
      <section className="relative py-14 md:py-16 lg:py-20 overflow-hidden">
        <div className="absolute inset-0 bg-linear-to-br from-primary/5 via-background to-secondary/5" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-4xl mx-auto">
            <Badge
              variant="outline"
              className="mb-6 px-4 py-2 border-primary/20 bg-primary/5 text-sm font-medium"
            >
              <Zap className="h-4 w-4 mr-2 text-yellow-500" />
              Simple & Secure Process
            </Badge>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-6">
              How CareNow <span className="text-primary">Works</span>
            </h1>

            <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto mb-8 leading-relaxed">
              Get started with trusted care in just 4 simple steps. Our process
              is designed to be transparent, secure, and hassle-free for your
              peace of mind.
            </p>
          </div>
        </div>
      </section>

      {/* 4-Step Process */}
      <section className="py-6 md:py-8">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-12 md:mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Get Started in 4 Easy Steps
            </h2>
            <p className="text-lg text-muted-foreground">
              From booking to care delivery, we&apos;ve simplified the entire process
            </p>
          </div>

          <div className="relative">
            {/* Connection Line */}
            <div className="hidden lg:block absolute top-24 left-0 right-0 h-0.5 bg-linear-to-r from-primary/20 via-primary/40 to-primary/20 -z-10" />

            <div className="grid grid-cols-1 lg:grid-cols-4 gap-6 lg:gap-8">
              {steps.map((step, index) => (
                <motion.div
                  key={step.number}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  whileHover={{ y: -5 }}
                  className="relative"
                >
                  <Card className="h-full border-border hover:border-primary/30 transition-all duration-300 hover:shadow-lg">
                    <CardContent className="p-6 md:p-8">
                      {/* Step Number */}
                      <div className="absolute -top-4 -left-4">
                        <div className="h-12 w-12 rounded-full bg-primary text-primary-foreground flex items-center justify-center text-xl font-bold shadow-lg">
                          {step.number}
                        </div>
                      </div>

                      {/* Icon */}
                      <div
                        className={cn(
                          "p-3 rounded-xl w-fit mb-6 mt-4 transition-colors",
                          step.iconBg
                        )}
                      >
                        <step.icon className="h-7 w-7" />
                      </div>

                      {/* Content */}
                      <h3 className="text-xl font-bold mb-3">{step.title}</h3>
                      <p className="text-muted-foreground mb-6">
                        {step.description}
                      </p>

                      {/* Features */}
                      <ul className="space-y-2">
                        {step.features.map((feature, idx) => (
                          <li
                            key={idx}
                            className="flex items-start gap-2 text-sm"
                          >
                            <CheckCircle className="h-4 w-4 text-green-500 shrink-0 mt-0.5" />
                            <span>{feature}</span>
                          </li>
                        ))}
                      </ul>

                      {/* Time Estimate */}
                      <div className="mt-6 pt-4 border-t border-border">
                        <div className="flex items-center gap-2 text-sm text-muted-foreground">
                          <Clock className="h-4 w-4" />
                          <span>{step.time}</span>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Verification Process */}
      <section className="py-16 md:py-20 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <Badge
                variant="outline"
                className="mb-4 px-4 py-2 border-primary/20 bg-primary/5 text-sm font-medium"
              >
                <Shield className="h-4 w-4 mr-2 text-green-500" />
                Our 5-Step Verification
              </Badge>

              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Why Our Caregivers Are{" "}
                <span className="text-primary">Trusted</span>
              </h2>

              <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                Every caregiver undergoes our rigorous 5-step verification
                process to ensure safety, reliability, and professional
                excellence.
              </p>

              <div className="space-y-4">
                {verificationSteps.map((step, index) => (
                  <motion.div
                    key={step.title}
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className="flex items-start gap-4 p-4 rounded-lg bg-background border"
                  >
                    <div className="shrink-0">
                      <div className="h-10 w-10 rounded-full bg-primary/10 flex items-center justify-center">
                        <span className="font-bold text-primary">
                          {index + 1}
                        </span>
                      </div>
                    </div>
                    <div>
                      <h3 className="font-bold text-lg mb-1">{step.title}</h3>
                      <p className="text-muted-foreground">
                        {step.description}
                      </p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="relative"
            >
              <Card className="border-primary/20 bg-linear-to-br from-primary/5 to-secondary/5">
                <CardContent className="p-8">
                  <div className="text-center mb-8">
                    <div className="inline-flex items-center justify-center h-16 w-16 rounded-full bg-primary/10 mb-4">
                      <Award className="h-8 w-8 text-primary" />
                    </div>
                    <h3 className="text-2xl font-bold mb-2">
                      Quality Standards
                    </h3>
                    <p className="text-muted-foreground">
                      What makes CareNow different
                    </p>
                  </div>

                  <div className="space-y-6">
                    {qualityMetrics.map((metric, index) => (
                      <div
                        key={index}
                        className="flex items-center justify-between"
                      >
                        <div className="flex items-center gap-3">
                          <div className={cn("p-2 rounded-lg", metric.iconBg)}>
                            <metric.icon className="h-5 w-5" />
                          </div>
                          <span className="font-medium">{metric.label}</span>
                        </div>
                        <Badge variant="secondary">{metric.value}</Badge>
                      </div>
                    ))}
                  </div>

                  <div className="mt-8 pt-6 border-t">
                    <div className="flex items-center justify-center gap-2 text-sm text-muted-foreground">
                      <FileCheck className="h-4 w-4" />
                      <span>Updated daily with new background checks</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Booking Process Details */}
      <section className="py-16 md:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-12 md:mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Detailed Booking Process
            </h2>
            <p className="text-lg text-muted-foreground">
              A step-by-step guide to booking care with confidence
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 lg:gap-8">
            {bookingDetails.map((detail, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Card className="h-full border-border hover:border-primary/20 transition-colors">
                  <CardContent className="p-6">
                    <div className="flex items-start gap-4 mb-4">
                      <div className="p-2 rounded-lg bg-primary/10">
                        <detail.icon className="h-6 w-6 text-primary" />
                      </div>
                      <div>
                        <h3 className="text-xl font-bold mb-2">
                          {detail.title}
                        </h3>
                        <p className="text-muted-foreground">
                          {detail.description}
                        </p>
                      </div>
                    </div>

                    <ul className="space-y-2 mt-4">
                      {detail.points.map((point, idx) => (
                        <li
                          key={idx}
                          className="flex items-start gap-2 text-sm"
                        >
                          <CheckCircle className="h-4 w-4 text-green-500 shrink-0 mt-0.5" />
                          <span>{point}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Support Section */}
      <section className="py-16 md:py-20 bg-linear-to-r from-primary/10 via-primary/5 to-secondary/10">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Support Throughout Your{" "}
                <span className="text-primary">Care Journey</span>
              </h2>

              <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                Our dedicated support team is available 24/7 to assist you at
                every stage of your care journey, from initial booking to
                ongoing support.
              </p>

              <div className="space-y-4">
                <div className="flex items-center gap-4 p-4 rounded-lg bg-background border">
                  <Phone className="h-6 w-6 text-blue-500" />
                  <div>
                    <h3 className="font-bold text-lg">
                      24/7 Emergency Support
                    </h3>
                    <p className="text-muted-foreground">
                      Immediate assistance for urgent needs
                    </p>
                  </div>
                </div>

                <div className="flex items-center gap-4 p-4 rounded-lg bg-background border">
                  <Users className="h-6 w-6 text-green-500" />
                  <div>
                    <h3 className="font-bold text-lg">
                      Dedicated Care Manager
                    </h3>
                    <p className="text-muted-foreground">
                      Personalized support for your family
                    </p>
                  </div>
                </div>

                <div className="flex items-center gap-4 p-4 rounded-lg bg-background border">
                  <HeartHandshake className="h-6 w-6 text-purple-500" />
                  <div>
                    <h3 className="font-bold text-lg">
                      Feedback & Improvement
                    </h3>
                    <p className="text-muted-foreground">
                      Continuous service enhancement
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <Card className="border-primary/20">
                <CardContent className="p-8">
                  <div className="text-center mb-8">
                    <div className="inline-flex items-center justify-center h-16 w-16 rounded-full bg-primary/10 mb-4">
                      <Star className="h-8 w-8 text-primary" />
                    </div>
                    <h3 className="text-2xl font-bold mb-2">
                      Ready to Get Started?
                    </h3>
                    <p className="text-muted-foreground">
                      Begin your care journey today
                    </p>
                  </div>

                  <div className="space-y-4">
                    <Button asChild className="w-full" size="lg">
                      <Link href="/caregivers">
                        Browse Caregivers
                        <ArrowRight className="h-4 w-4 ml-2" />
                      </Link>
                    </Button>

                    <Button asChild variant="outline" className="w-full">
                      <Link href="/contact">
                        Contact Support
                        <Mail className="h-4 w-4 ml-2" />
                      </Link>
                    </Button>

                    <div className="pt-6 border-t">
                      <div className="flex items-center justify-center gap-2 text-sm text-muted-foreground">
                        <Clock className="h-4 w-4" />
                        <span>Average response time: 15 minutes</span>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
}

// Data
const steps = [
  {
    number: 1,
    title: "Browse & Select",
    description: "Find the perfect caregiver for your needs",
    icon: Search,
    iconBg: "bg-blue-100 text-blue-600",
    features: [
      "Search by specialty, location, or rate",
      "View verified profiles & reviews",
      "Compare caregivers side-by-side",
    ],
    time: "5-10 minutes",
  },
  {
    number: 2,
    title: "Book & Match",
    description: "Schedule care with your chosen professional",
    icon: Calendar,
    iconBg: "bg-green-100 text-green-600",
    features: [
      "Select date, time & duration",
      "Choose service type & specifics",
      "Confirm booking instantly",
    ],
    time: "2-5 minutes",
  },
  {
    number: 3,
    title: "Meet & Verify",
    description: "Connect with your caregiver before service",
    icon: UserCheck,
    iconBg: "bg-purple-100 text-purple-600",
    features: [
      "Free video consultation",
      "Review care plan together",
      "Address specific requirements",
    ],
    time: "15-30 minutes",
  },
  {
    number: 4,
    title: "Receive Care",
    description: "Experience quality care with peace of mind",
    icon: Shield,
    iconBg: "bg-orange-100 text-orange-600",
    features: [
      "Caregiver arrives as scheduled",
      "Real-time updates & check-ins",
      "24/7 support available",
    ],
    time: "Ongoing",
  },
];

const verificationSteps = [
  {
    title: "Background Check",
    description:
      "Comprehensive criminal record verification through national databases",
  },
  {
    title: "Identity Verification",
    description: "National ID, passport, and address proof validation",
  },
  {
    title: "Medical Certification",
    description:
      "Verification of medical training, licenses, and certifications",
  },
  {
    title: "Reference Checks",
    description: "Contact previous employers and families for references",
  },
  {
    title: "In-Person Interview",
    description: "Face-to-face assessment by our HR and medical teams",
  },
];

const qualityMetrics = [
  {
    label: "Verified Caregivers",
    value: "1,500+",
    icon: Users,
    iconBg: "bg-blue-100 text-blue-600",
  },
  {
    label: "Average Rating",
    value: "4.8/5",
    icon: Star,
    iconBg: "bg-yellow-100 text-yellow-600",
  },
  {
    label: "Response Time",
    value: "<15 min",
    icon: Clock,
    iconBg: "bg-green-100 text-green-600",
  },
  {
    label: "Success Rate",
    value: "98%",
    icon: Award,
    iconBg: "bg-purple-100 text-purple-600",
  },
];

const bookingDetails = [
  {
    title: "Finding the Right Caregiver",
    description: "How to choose the perfect match for your needs",
    icon: Search,
    points: [
      "Filter by specialty, experience, and location",
      "Read detailed profiles and client reviews",
      "Compare hourly rates and availability",
      "Check certifications and qualifications",
    ],
  },
  {
    title: "Scheduling & Payment",
    description: "Simple and secure booking process",
    icon: Calendar,
    points: [
      "Select date, time, and service duration",
      "Choose from flexible payment options",
      "Receive instant booking confirmation",
      "Modify or cancel up to 4 hours before",
    ],
  },
  {
    title: "Care Delivery & Support",
    description: "What to expect during service",
    icon: Shield,
    points: [
      "Caregiver arrival with ID verification",
      "Regular updates throughout service",
      "24/7 emergency support available",
      "Post-service feedback and rating",
    ],
  },
];


export default HowItWorksPage;
