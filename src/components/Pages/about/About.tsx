"use client";

import { Card, CardContent } from "@/src/components/ui/card";
import { Badge } from "@/src/components/ui/badge";
import { Button } from "@/src/components/ui/button";
import {
  Avatar,
  AvatarFallback,
  AvatarImage,
} from "@/src/components/ui/avatar";
import {
  Heart,
  Shield,
  Users,
  Clock,
  Award,
  Star,
  MapPin,
  CheckCircle,
  ArrowRight,
  Baby,
  UserCog,
  Stethoscope,
  Home,
  Activity,
  Target,
  Mail,
} from "lucide-react";
import { cn } from "@/src/lib/utils";
import { motion } from "framer-motion";
import Link from "next/link";

export function AboutPage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative py-20 md:py-24 lg:py-28 overflow-hidden">
        <div className="absolute inset-0 bg-linear-to-br from-primary/5 via-background to-secondary/5" />
        <motion.div
          className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"
          initial="hidden"
          animate="show"
          variants={{
            hidden: { opacity: 0 },
            show: {
              opacity: 1,
              transition: {
                staggerChildren: 0.1,
              },
            },
          }}
        >
          <motion.div
            variants={{
              hidden: { opacity: 0, y: 20 },
              show: { opacity: 1, y: 0, transition: { duration: 0.5 } },
            }}
            className="text-center max-w-4xl mx-auto"
          >
            <Badge
              variant="outline"
              className="mb-6 px-4 py-2 border-primary/20 bg-primary/5 hover:bg-primary/5 text-sm font-medium"
            >
              <Heart className="h-4 w-4 mr-2 text-pink-500" />
              Our Story
            </Badge>

            <motion.h1
              variants={{
                hidden: { opacity: 0, y: 20 },
                show: { opacity: 1, y: 0, transition: { duration: 0.5 } },
              }}
              className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-6"
            >
              More Than Care —{" "}
              <span className="text-primary">A Commitment</span> to Families
            </motion.h1>

            <motion.p
              variants={{
                hidden: { opacity: 0, y: 20 },
                show: { opacity: 1, y: 0, transition: { duration: 0.5 } },
              }}
              className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto mb-8 leading-relaxed"
            >
              At CareNow, we&apos;re redefining what it means to provide care.
              Founded in 2020 by healthcare professionals, we&apos;ve grown to
              become Bangladesh&apos;s most trusted care service platform,
              connecting families with verified, compassionate caregivers.
            </motion.p>

            <motion.div
              variants={{
                hidden: { opacity: 0, y: 20 },
                show: { opacity: 1, y: 0, transition: { duration: 0.5 } },
              }}
              className="flex flex-col sm:flex-row gap-4 justify-center"
            >
              <Link href={"/services"}>
                <Button size="lg" className="gap-2">
                  Book a Service <ArrowRight className="h-4 w-4" />
                </Button>
              </Link>
              <Button size="lg" variant="outline" className="gap-2">
                Join Our Team <Users className="h-4 w-4" />
              </Button>
            </motion.div>
          </motion.div>
        </motion.div>
      </section>

      {/* Mission & Values */}
      <section className="py-16 md:py-20 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="grid grid-cols-1 lg:grid-cols-3 gap-6 lg:gap-8 md:gap-12"
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            variants={{
              hidden: { opacity: 0 },
              show: {
                opacity: 1,
                transition: {
                  staggerChildren: 0.1,
                },
              },
            }}
          >
            {/* Mission Card */}
            <motion.div
              variants={{
                hidden: { opacity: 0, x: -20 },
                show: { opacity: 1, x: 0, transition: { duration: 0.5 } },
              }}
              className="lg:col-span-2"
            >
              <Card className="border-primary/20 bg-linear-to-br from-background to-primary/5">
                <CardContent className="p-8 md:p-10">
                  <div className="flex items-center gap-4 mb-6">
                    <div className="p-3 bg-linear-to-br from-pink-100 to-purple-100 rounded-xl">
                      <Heart className="h-8 w-8 text-pink-600" />
                    </div>
                    <div>
                      <h2 className="text-2xl md:text-3xl font-bold">
                        Our Mission
                      </h2>
                      <p className="text-muted-foreground">
                        What drives us every day
                      </p>
                    </div>
                  </div>
                  <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                    To make quality care accessible, affordable, and stress-free
                    for every family in Bangladesh. We believe everyone deserves
                    compassionate, professional care that respects dignity and
                    enhances quality of life.
                  </p>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <motion.div
                      className="flex items-center gap-3"
                      whileHover={{ scale: 1.05 }}
                    >
                      <CheckCircle className="h-5 w-5 text-green-500 shrink-0" />
                      <span className="font-medium">Accessible to All</span>
                    </motion.div>
                    <motion.div
                      className="flex items-center gap-3"
                      whileHover={{ scale: 1.05 }}
                    >
                      <Shield className="h-5 w-5 text-blue-500 shrink-0" />
                      <span className="font-medium">
                        Verified Professionals
                      </span>
                    </motion.div>
                    <motion.div
                      className="flex items-center gap-3"
                      whileHover={{ scale: 1.05 }}
                    >
                      <Activity className="h-5 w-5 text-purple-500 shrink-0" />
                      <span className="font-medium">Transparent Pricing</span>
                    </motion.div>
                    <motion.div
                      className="flex items-center gap-3"
                      whileHover={{ scale: 1.05 }}
                    >
                      <Clock className="h-5 w-5 text-orange-500 shrink-0" />
                      <span className="font-medium">24/7 Support</span>
                    </motion.div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>

            {/* Stats Card */}
            <motion.div
              variants={{
                hidden: { opacity: 0, x: 20 },
                show: { opacity: 1, x: 0, transition: { duration: 0.5 } },
              }}
            >
              <Card className="border-secondary/20 bg-linear-to-br from-secondary/5 to-background">
                <CardContent className="p-8 md:p-10">
                  <h3 className="text-xl font-bold mb-6">By The Numbers</h3>
                  <div className="space-y-6">
                    <motion.div
                      className="flex items-center gap-2 mb-1"
                      whileHover={{ scale: 1.05 }}
                    >
                      <Users className="h-5 w-5 text-blue-500" />
                      <span className="text-3xl md:text-4xl font-bold text-blue-600">
                        1,500+
                      </span>
                    </motion.div>
                    <p className="text-sm text-muted-foreground ml-7">
                      Verified Caregivers
                    </p>

                    <motion.div
                      className="flex items-center gap-2 mb-1"
                      whileHover={{ scale: 1.05 }}
                    >
                      <Home className="h-5 w-5 text-green-500" />
                      <span className="text-3xl md:text-4xl font-bold text-green-600">
                        25,000+
                      </span>
                    </motion.div>
                    <p className="text-sm text-muted-foreground ml-7">
                      Families Served
                    </p>

                    <motion.div
                      className="flex items-center gap-2 mb-1"
                      whileHover={{ scale: 1.05 }}
                    >
                      <MapPin className="h-5 w-5 text-purple-500" />
                      <span className="text-3xl md:text-4xl font-bold text-purple-600">
                        12
                      </span>
                    </motion.div>
                    <p className="text-sm text-muted-foreground ml-7">
                      Cities Across Bangladesh
                    </p>

                    <motion.div
                      className="flex items-center gap-2 mb-1"
                      whileHover={{ scale: 1.05 }}
                    >
                      <Star className="h-5 w-5 text-yellow-500" />
                      <span className="text-3xl md:text-4xl font-bold text-yellow-600">
                        4.8
                      </span>
                    </motion.div>
                    <p className="text-sm text-muted-foreground ml-7">
                      Average Rating
                    </p>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="py-16 md:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center max-w-3xl mx-auto mb-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <Badge
              variant="outline"
              className="mb-4 px-4 py-2 border-primary/20 bg-primary/5 hover:bg-primary/5 text-sm font-medium"
            >
              <Stethoscope className="h-4 w-4 mr-2 text-red-500" />
              Our Services
            </Badge>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Comprehensive Care Solutions
            </h2>
            <p className="text-lg text-muted-foreground">
              Specialized care services designed for every family need
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {services.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ y: -10 }}
              >
                <Card className="group hover:shadow-xl transition-all duration-300 border-border hover:border-primary/30">
                  <CardContent className="p-6 md:p-8">
                    <motion.div
                      className={cn(
                        "p-3 rounded-xl w-fit mb-6 transition-colors",
                        service.color
                      )}
                      whileHover={{ rotate: 5 }}
                    >
                      <service.icon className="h-7 w-7" />
                    </motion.div>
                    <h3 className="text-xl font-bold mb-3">{service.title}</h3>
                    <p className="text-muted-foreground mb-6">
                      {service.description}
                    </p>
                    <ul className="space-y-2 mb-6">
                      {service.features.map((feature, idx) => (
                        <motion.li
                          key={idx}
                          className="flex items-center gap-2 text-sm"
                          initial={{ opacity: 0, x: -10 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          viewport={{ once: true }}
                          transition={{ delay: idx * 0.05 }}
                        >
                          <CheckCircle className="h-4 w-4 text-green-500 shrink-0" />
                          <span>{feature}</span>
                        </motion.li>
                      ))}
                    </ul>
                    <Button
                      variant="outline"
                      className="w-full transition-colors"
                    >
                      Learn More
                    </Button>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-16 md:py-20 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center max-w-3xl mx-auto mb-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <Badge
              variant="outline"
              className="mb-4 px-4 py-2 border-primary/20 bg-primary/5 hover:bg-primary/5 text-sm font-medium"
            >
              <Users className="h-4 w-4 mr-2 text-blue-500" />
              Leadership Team
            </Badge>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Meet Our Founders
            </h2>
            <p className="text-lg text-muted-foreground">
              Healthcare professionals dedicated to transforming care
            </p>
          </motion.div>
          {/* team member */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
            {teamMembers.map((member, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ y: -5, scale: 1.02 }}
              >
                <Card className="group overflow-hidden border-border hover:border-primary/20 transition-all duration-300">
                  <CardContent className="p-0">
                    {/* Top section with avatar and info */}
                    <div className="relative p-6 pb-0">
                      {/* Background pattern */}
                      <div className="absolute inset-0 bg-linear-to-br from-primary/5 to-secondary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                      <div className="relative flex flex-col items-center text-center">
                        <Avatar className="h-20 w-20 mb-4 border-4 border-background">
                          <AvatarImage src={member.image} alt={member.name} />
                          <AvatarFallback className="bg-linear-to-br from-primary/20 to-secondary/20">
                            {member.initials}
                          </AvatarFallback>
                        </Avatar>

                        <h3 className="font-bold text-lg mb-1">
                          {member.name}
                        </h3>
                        <p className="text-sm text-primary font-medium mb-3">
                          {member.role}
                        </p>
                      </div>
                    </div>

                    {/* Bio section */}
                    <div className="p-6 pt-4">
                      <p className="text-sm text-muted-foreground text-center mb-6">
                        {member.bio}
                      </p>

                      {/* Bottom section with contact */}
                      <div className="flex items-center justify-center gap-3 pt-4 border-t border-border/50">
                        <motion.button
                          whileHover={{ scale: 1.1 }}
                          whileTap={{ scale: 0.95 }}
                          className="text-muted-foreground hover:text-blue-600 transition-colors"
                        >
                          <LinkedInIcon className="h-4 w-4" />
                        </motion.button>
                        <motion.button
                          whileHover={{ scale: 1.1 }}
                          whileTap={{ scale: 0.95 }}
                          className="text-muted-foreground hover:text-blue-400 transition-colors"
                        >
                          <TwitterIcon className="h-4 w-4" />
                        </motion.button>
                        <motion.button
                          whileHover={{ scale: 1.1 }}
                          whileTap={{ scale: 0.95 }}
                          className="text-muted-foreground hover:text-green-500 transition-colors"
                        >
                          <Mail className="h-4 w-4" />
                        </motion.button>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-16 md:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <Badge
                variant="outline"
                className="mb-4 px-4 py-2 border-primary/20 bg-primary/5 hover:bg-primary/5 text-sm font-medium"
              >
                <Shield className="h-4 w-4 mr-2 text-green-500" />
                Why CareNow
              </Badge>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                The Trusted Choice for Families
              </h2>
              <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                We go beyond matching caregivers with families. Our
                comprehensive approach ensures safety, quality, and peace of
                mind at every step.
              </p>

              <div className="space-y-6">
                {features.map((feature, index) => (
                  <motion.div
                    key={index}
                    className="flex items-start gap-4"
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    whileHover={{ x: 5 }}
                  >
                    <div
                      className={cn(
                        "p-2 rounded-lg mt-1 shrink-0",
                        feature.iconBg
                      )}
                    >
                      <feature.icon className="h-5 w-5" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-lg mb-2">
                        {feature.title}
                      </h3>
                      <p className="text-muted-foreground">
                        {feature.description}
                      </p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            <motion.div
              className="grid grid-cols-2 gap-4"
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              {testimonials.map((testimonial, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  whileHover={{ y: -5 }}
                >
                  <Card
                    className={cn(
                      "border-border hover:border-primary/20 transition-colors",
                      index === 0 && "lg:col-span-2"
                    )}
                  >
                    <CardContent className="p-6">
                      <div className="flex items-center gap-2 mb-3">
                        {[...Array(5)].map((_, i) => (
                          <motion.div
                            key={i}
                            initial={{ scale: 0 }}
                            whileInView={{ scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: i * 0.1 }}
                          >
                            <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                          </motion.div>
                        ))}
                      </div>
                      <p className="text-muted-foreground mb-4 italic">
                        &apos;{testimonial.comment}&apos;
                      </p>
                      <div className="flex items-center gap-3">
                        <Avatar className="h-10 w-10">
                          <AvatarImage
                            src={testimonial.avatar}
                            alt={testimonial.name}
                          />
                          <AvatarFallback>
                            {testimonial.initials}
                          </AvatarFallback>
                        </Avatar>
                        <div>
                          <p className="font-medium">{testimonial.name}</p>
                          <p className="text-sm text-muted-foreground">
                            {testimonial.relationship}
                          </p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
}

// Icons
function LinkedInIcon({ className }: { className?: string }) {
  return (
    <svg className={className} fill="currentColor" viewBox="0 0 24 24">
      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
    </svg>
  );
}

function TwitterIcon({ className }: { className?: string }) {
  return (
    <svg className={className} fill="currentColor" viewBox="0 0 24 24">
      <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.213c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z" />
    </svg>
  );
}

// Data - Updated with real user images from randomuser.me
const services = [
  {
    title: "Child Care",
    description: "Expert babysitting and child care services for busy parents",
    icon: Baby,
    color: "bg-pink-100 text-pink-600",
    features: [
      "Age-appropriate activities",
      "Homework assistance",
      "Meal preparation",
      "Emergency first aid",
    ],
  },
  {
    title: "Elderly Care",
    description: "Compassionate care for seniors with medical expertise",
    icon: UserCog,
    color: "bg-blue-100 text-blue-600",
    features: [
      "Medication management",
      "Mobility assistance",
      "Companionship",
      "Health monitoring",
    ],
  },
  {
    title: "Special Needs Care",
    description: "Specialized care for individuals with unique requirements",
    icon: Stethoscope,
    color: "bg-purple-100 text-purple-600",
    features: [
      "Therapy assistance",
      "Daily routine support",
      "Special diet management",
      "Behavioral support",
    ],
  },
];

const teamMembers = [
  {
    name: "Dr. Fatima Rahman",
    role: "Co-founder & Medical Director",
    initials: "FR",
    bio: "Former head of pediatrics with 15+ years experience",
    image: "https://randomuser.me/api/portraits/women/32.jpg",
  },
  {
    name: "Ahmed Hossain",
    role: "Co-founder & CEO",
    initials: "AH",
    bio: "Healthcare technology entrepreneur",
    image: "https://randomuser.me/api/portraits/men/75.jpg",
  },
  {
    name: "Nadia Chowdhury",
    role: "Head of Operations",
    initials: "NC",
    bio: "Previously managed 5 care facilities",
    image: "https://randomuser.me/api/portraits/women/44.jpg",
  },
  {
    name: "Dr. Rahim Islam",
    role: "Quality Assurance Director",
    initials: "RI",
    bio: "Geriatric specialist with 20 years experience",
    image: "https://randomuser.me/api/portraits/men/81.jpg",
  },
];

const features = [
  {
    title: "Rigorous Verification",
    description:
      "5-step verification process including background checks, medical certification, and in-person interviews.",
    icon: Shield,
    iconBg: "bg-green-100 text-green-600",
  },
  {
    title: "24/7 Support",
    description:
      "Round-the-clock support team with emergency response within 15 minutes.",
    icon: Clock,
    iconBg: "bg-orange-100 text-orange-600",
  },
  {
    title: "Quality Guarantee",
    description:
      "100% satisfaction guarantee with free replacement if not satisfied.",
    icon: Award,
    iconBg: "bg-yellow-100 text-yellow-600",
  },
  {
    title: "Transparent Pricing",
    description: "No hidden fees. Pay only for actual service hours used.",
    icon: Target,
    iconBg: "bg-blue-100 text-blue-600",
  },
];

const testimonials = [
  {
    name: "Mr. Kabir Ahmed",
    relationship: "Son of elderly patient",
    comment:
      "CareNow provided excellent care for my father. The caregiver was professional and compassionate.",
    initials: "KA",
    avatar: "https://randomuser.me/api/portraits/men/32.jpg",
  },
  {
    name: "Mrs. Sharmin Akter",
    relationship: "Working mother",
    comment:
      "Finally found reliable childcare! The verification process gave us complete peace of mind.",
    initials: "SA",
    avatar: "https://randomuser.me/api/portraits/women/68.jpg",
  },
  {
    name: "Dr. Rajib Hasan",
    relationship: "Physician",
    comment:
      "As a doctor, I appreciate their medical expertise and attention to detail.",
    initials: "RH",
    avatar: "https://randomuser.me/api/portraits/men/54.jpg",
  },
  {
    name: "Ms. Tania Rahman",
    relationship: "Daughter with special needs",
    comment:
      "The caregivers are trained specifically for special needs. Life-changing service!",
    initials: "TR",
    avatar: "https://randomuser.me/api/portraits/women/26.jpg",
  },
];

export default AboutPage;
