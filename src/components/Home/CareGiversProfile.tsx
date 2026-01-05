// components/sections/caregiver-preview.tsx
"use client"

import { Card, CardContent } from "@/src/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/src/components/ui/avatar"
import { Badge } from "@/src/components/ui/badge"
import { Button } from "@/src/components/ui/button"
import { Star, Award, Shield, Calendar, Heart } from "lucide-react"
import { motion } from "framer-motion"
import Link from "next/link"

export function CaregiverPreview() {
  const caregivers = [
    {
      name: "Fatima Begum",
      role: "Pediatric Specialist",
      experience: "8 years",
      rating: 4.9,
      reviews: 127,
      image: "/caregivers/fatima.jpg",
      specialties: ["Newborn Care", "Child Development"],
      badge: "Most Booked"
    },
    {
      name: "Rahim Uddin",
      role: "Elderly Care Expert",
      experience: "12 years",
      rating: 4.8,
      reviews: 89,
      image: "/caregivers/rahim.jpg",
      specialties: ["Dementia Care", "Post-Stroke Recovery"],
      badge: "Medical Certified"
    },
    {
      name: "Ayesha Rahman",
      role: "Special Needs Care",
      experience: "6 years",
      rating: 4.7,
      reviews: 56,
      image: "/caregivers/ayesha.jpg",
      specialties: ["Autism Support", "Physical Therapy"],
      badge: "24/7 Available"
    }
  ]

  return (
    <section className="py-16 md:py-24 bg-linear-to-b from-background to-muted/20">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Meet Our Verified Caregivers
          </h2>
          <p className="text-lg text-muted-foreground">
            Carefully selected professionals trained to provide compassionate care
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {caregivers.map((caregiver, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card className="hover:shadow-xl transition-all duration-300 border border-border/50 overflow-hidden group">
                <CardContent className="p-6">
                  {/* Header */}
                  <div className="flex items-start justify-between mb-6">
                    <div className="flex items-center gap-4">
                      <Avatar className="h-16 w-16">
                        <AvatarImage src={caregiver.image} />
                        <AvatarFallback>{caregiver.name.charAt(0)}</AvatarFallback>
                      </Avatar>
                      <div>
                        <h3 className="font-bold text-lg">{caregiver.name}</h3>
                        <p className="text-sm text-muted-foreground">{caregiver.role}</p>
                      </div>
                    </div>
                    <Badge variant="secondary">{caregiver.badge}</Badge>
                  </div>

                  {/* Stats */}
                  <div className="flex items-center justify-between mb-6">
                    <div className="text-center">
                      <div className="text-2xl font-bold">{caregiver.experience}</div>
                      <div className="text-xs text-muted-foreground">Experience</div>
                    </div>
                    <div className="text-center">
                      <div className="flex items-center gap-1">
                        <Star className="h-4 w-4 text-yellow-500 fill-yellow-500" />
                        <span className="text-2xl font-bold">{caregiver.rating}</span>
                      </div>
                      <div className="text-xs text-muted-foreground">{caregiver.reviews} reviews</div>
                    </div>
                  </div>

                  {/* Specialties */}
                  <div className="mb-6">
                    <h4 className="text-sm font-semibold mb-2">Specialties</h4>
                    <div className="flex flex-wrap gap-2">
                      {caregiver.specialties.map((specialty, idx) => (
                        <Badge key={idx} variant="outline" className="text-xs">
                          {specialty}
                        </Badge>
                      ))}
                    </div>
                  </div>

                  {/* View Profile Button */}
                  <Button asChild variant="outline" className="w-full">
                    <Link href={`/caregivers/${caregiver.name.toLowerCase().replace(' ', '-')}`}>
                      View Full Profile
                    </Link>
                  </Button>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        <div className="text-center">
          <Button asChild size="lg">
            <Link href="/caregivers">
              Browse All Caregivers
            </Link>
          </Button>
        </div>
      </div>
    </section>
  )
}