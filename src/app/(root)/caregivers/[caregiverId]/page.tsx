"use client"

import { useState } from "react"
import { useParams } from "next/navigation"
import { Card, CardContent, CardHeader, CardTitle } from "@/src/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/src/components/ui/avatar"
import { Badge } from "@/src/components/ui/badge"
import { Button } from "@/src/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/src/components/ui/tabs"
import { Separator } from "@/src/components/ui/separator"
import { 
  Star, 
  Clock, 
  MapPin, 
  CheckCircle, 

  Users, 
  Calendar, 
  Phone, 
  Mail,
  Heart,

  GraduationCap,
  Languages,
  Sparkles,
  Award,

} from "lucide-react"
import { cn } from "@/src/lib/utils"
import { caregiversData } from "@/src/components/Pages/caregivers/CaregiversPage"

export function CaregiverProfile() {
  const params = useParams()
  const [activeTab, setActiveTab] = useState("overview")
  
  // Find caregiver by ID
  const caregiver = caregiversData.find(c => c.id === params.id) || caregiversData[0]
  
  if (!caregiver) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold mb-4">Caregiver not found</h1>
          <p>The caregiver you&apos;re looking for doesn&apos;t exist.</p>
        </div>
      </div>
    )
  }

  // Mock additional data for the profile
  const profileData = {
    ...caregiver,
    fullBio: `${caregiver.about} With a compassionate approach and professional expertise, I ensure the highest quality of care for your loved ones.`,
    educationDetails: [
      { institution: "Dhaka Medical College", degree: "Bachelor of Medicine", year: "2010-2015" },
      { institution: "Bangabandhu Sheikh Mujib Medical University", degree: "Pediatrics Specialization", year: "2016-2018" }
    ],
    certifications: [
      "Basic Life Support (BLS)",
      "Advanced Cardiac Life Support (ACLS)",
      "Pediatric Advanced Life Support (PALS)",
      "Infection Control Certification"
    ],
    services: [
      { name: "Hourly Care", description: "Flexible hourly care services", price: `৳${caregiver.hourlyRate}/hr` },
      { name: "Daily Care", description: "8-12 hours of daily care", price: "৳3,500/day" },
      { name: "Overnight Care", description: "12-hour overnight care", price: "৳4,500/night" },
      { name: "Weekly Package", description: "Full week of care services", price: "৳20,000/week" }
    ],
    reviews: [
      { name: "Ahmed H.", rating: 5, comment: "Excellent care for our elderly mother. Very professional!", date: "2 weeks ago" },
      { name: "Fatima B.", rating: 5, comment: "Great with children. My kids love her!", date: "1 month ago" },
      { name: "Rahim C.", rating: 4, comment: "Very reliable and punctual. Highly recommended.", date: "2 months ago" }
    ],
    availability: [
      { day: "Monday", hours: "8:00 AM - 8:00 PM" },
      { day: "Tuesday", hours: "8:00 AM - 8:00 PM" },
      { day: "Wednesday", hours: "8:00 AM - 8:00 PM" },
      { day: "Thursday", hours: "8:00 AM - 8:00 PM" },
      { day: "Friday", hours: "8:00 AM - 6:00 PM" },
      { day: "Saturday", hours: "9:00 AM - 5:00 PM" },
      { day: "Sunday", hours: "Emergency Only" }
    ]
  }

  return (
    <div className="min-h-screen bg-linear-to-b from-background to-muted/20 mt-16">
      {/* Hero Section */}
      <section className="py-8 md:py-12">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Left Column - Profile Info */}
            <div className="lg:col-span-2">
              <Card className="border-primary/20">
                <CardContent className="p-6">
                  <div className="flex flex-col md:flex-row items-start gap-6">
                    {/* Avatar */}
                    <Avatar className="h-32 w-32 border-4 border-background">
                      <AvatarImage src={caregiver.image} alt={caregiver.name} />
                      <AvatarFallback className="text-2xl">
                        {caregiver.name.split(' ').map(n => n[0]).join('')}
                      </AvatarFallback>
                    </Avatar>
                    
                    {/* Info */}
                    <div className="flex-1">
                      <div className="flex flex-wrap items-start justify-between gap-4 mb-4">
                        <div>
                          <h1 className="text-3xl font-bold mb-2">{caregiver.name}</h1>
                          <div className="flex items-center gap-2 mb-3">
                            <Badge className="bg-primary/10 text-primary">
                              {caregiver.role}
                            </Badge>
                            {caregiver.verified && (
                              <Badge variant="outline" className="border-green-200">
                                <CheckCircle className="h-3 w-3 mr-1" />
                                Verified
                              </Badge>
                            )}
                          </div>
                        </div>
                        
                        <div className="text-right">
                          <div className="text-3xl font-bold text-primary">
                            ৳{caregiver.hourlyRate}<span className="text-lg">/hr</span>
                          </div>
                          <p className="text-sm text-muted-foreground">Starting rate</p>
                        </div>
                      </div>

                      {/* Stats Grid */}
                      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
                        <div className="flex items-center gap-2">
                          <Clock className="h-5 w-5 text-blue-500" />
                          <div>
                            <p className="font-semibold">{caregiver.experience}</p>
                            <p className="text-xs text-muted-foreground">Experience</p>
                          </div>
                        </div>
                        
                        <div className="flex items-center gap-2">
                          <Star className="h-5 w-5 text-yellow-500 fill-yellow-500" />
                          <div>
                            <p className="font-semibold">{caregiver.rating}</p>
                            <p className="text-xs text-muted-foreground">Rating</p>
                          </div>
                        </div>
                        
                        <div className="flex items-center gap-2">
                          <Users className="h-5 w-5 text-green-500" />
                          <div>
                            <p className="font-semibold">{caregiver.reviews}</p>
                            <p className="text-xs text-muted-foreground">Reviews</p>
                          </div>
                        </div>
                        
                        <div className="flex items-center gap-2">
                          <MapPin className="h-5 w-5 text-purple-500" />
                          <div>
                            <p className="font-semibold">{caregiver.location}</p>
                            <p className="text-xs text-muted-foreground">Location</p>
                          </div>
                        </div>
                      </div>

                      {/* Contact Info */}
                      <div className="mb-6 p-4 bg-muted/30 rounded-lg">
                        <h3 className="font-semibold mb-3">Contact Information</h3>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                          <div className="flex items-center gap-3">
                            <Phone className="h-4 w-4 text-blue-500" />
                            <div>
                              <p className="text-sm text-muted-foreground">Phone</p>
                              <p className="font-medium">{caregiver.phone}</p>
                            </div>
                          </div>
                          <div className="flex items-center gap-3">
                            <Mail className="h-4 w-4 text-green-500" />
                            <div>
                              <p className="text-sm text-muted-foreground">Email</p>
                              <p className="font-medium">{caregiver.email}</p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Right Column - Booking Card */}
            <div>
              <Card className="sticky top-6 border-primary/20">
                <CardHeader>
                  <CardTitle className="text-xl">Book This Caregiver</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {/* Quick Info */}
                    <div className="space-y-2">
                      <div className="flex items-center justify-between">
                        <span className="text-sm text-muted-foreground">Response Time</span>
                        <span className="font-medium">{caregiver.responseTime}</span>
                      </div>
                      <div className="flex items-center justify-between">
                        <span className="text-sm text-muted-foreground">Availability</span>
                        <Badge variant="secondary">{caregiver.availability}</Badge>
                      </div>
                    </div>

                    <Separator />

                    {/* Quick Actions */}
                    <div className="space-y-3">
                      <Button className="w-full" size="lg">
                        <Calendar className="h-4 w-4 mr-2" />
                        Book Appointment
                      </Button>
                      
                      <div className="flex gap-3">
                        <Button variant="outline" className="flex-1">
                          <Phone className="h-4 w-4 mr-2" />
                          Call
                        </Button>
                        <Button variant="outline" className="flex-1">
                          <Mail className="h-4 w-4 mr-2" />
                          Message
                        </Button>
                      </div>
                      
                      <Button variant="ghost" className="w-full">
                        <Heart className="h-4 w-4 mr-2" />
                        Save Caregiver
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Tabs Section */}
      <section className="py-8">
        <div className="max-w-6xl mx-auto px-4">
          <Tabs value={activeTab} onValueChange={setActiveTab}>
            <TabsList className="grid w-full grid-cols-4 mb-8">
              <TabsTrigger value="overview">Overview</TabsTrigger>
              <TabsTrigger value="experience">Experience</TabsTrigger>
              <TabsTrigger value="services">Services</TabsTrigger>
              <TabsTrigger value="reviews">Reviews</TabsTrigger>
            </TabsList>

            {/* Overview Tab */}
            <TabsContent value="overview" className="space-y-6">
              <Card>
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold mb-4">About Me</h3>
                  <p className="text-muted-foreground leading-relaxed mb-6">
                    {profileData.fullBio}
                  </p>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {/* Specialties */}
                    <div>
                      <h4 className="font-semibold mb-3 flex items-center gap-2">
                        <Sparkles className="h-4 w-4" />
                        Specialties
                      </h4>
                      <div className="flex flex-wrap gap-2">
                        {caregiver.specialties.map((specialty, idx) => (
                          <Badge key={idx} variant="secondary" className="mb-2">
                            {specialty}
                          </Badge>
                        ))}
                      </div>
                    </div>

                    {/* Languages */}
                    <div>
                      <h4 className="font-semibold mb-3 flex items-center gap-2">
                        <Languages className="h-4 w-4" />
                        Languages
                      </h4>
                      <div className="flex flex-wrap gap-2">
                        {caregiver.languages.map((language, idx) => (
                          <Badge key={idx} variant="outline">
                            {language}
                          </Badge>
                        ))}
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Education & Certifications */}
              <Card>
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold mb-6 flex items-center gap-2">
                    <GraduationCap className="h-5 w-5" />
                    Education & Certifications
                  </h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {/* Education */}
                    <div>
                      <h4 className="font-semibold mb-4 text-primary">Education</h4>
                      <div className="space-y-4">
                        {profileData.educationDetails.map((edu, idx) => (
                          <div key={idx} className="border-l-2 border-primary pl-4">
                            <p className="font-medium">{edu.degree}</p>
                            <p className="text-sm text-muted-foreground">{edu.institution}</p>
                            <p className="text-xs text-muted-foreground">{edu.year}</p>
                          </div>
                        ))}
                      </div>
                    </div>
                    
                    {/* Certifications */}
                    <div>
                      <h4 className="font-semibold mb-4 text-primary">Certifications</h4>
                      <div className="space-y-3">
                        {profileData.certifications.map((cert, idx) => (
                          <div key={idx} className="flex items-center gap-3">
                            <Award className="h-4 w-4 text-green-500" />
                            <span>{cert}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            {/* Experience Tab */}
            <TabsContent value="experience">
              <Card>
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold mb-6">Professional Experience</h3>
                  <div className="space-y-8">
                    {/* Experience Timeline */}
                    <div className="relative">
                      {[
                        { role: "Senior Caregiver", organization: "CareNow Platform", duration: "2021 - Present" },
                        { role: "Pediatric Nurse", organization: "Apollo Hospital", duration: "2018 - 2021" },
                        { role: "Intern Nurse", organization: "Dhaka Medical College Hospital", duration: "2016 - 2018" }
                      ].map((exp, idx) => (
                        <div key={idx} className="flex gap-4 mb-8 last:mb-0">
                          <div className="flex flex-col items-center">
                            <div className="h-4 w-4 rounded-full bg-primary" />
                            {idx < 2 && <div className="h-full w-0.5 bg-primary/30 mt-1" />}
                          </div>
                          <div className="flex-1 pb-4">
                            <h4 className="font-bold text-lg">{exp.role}</h4>
                            <p className="text-primary font-medium">{exp.organization}</p>
                            <p className="text-sm text-muted-foreground">{exp.duration}</p>
                            <p className="text-muted-foreground mt-3">
                              Provided specialized care services with focus on patient wellbeing and family support.
                            </p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            {/* Services Tab */}
            <TabsContent value="services">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {profileData.services.map((service, idx) => (
                  <Card key={idx} className="border-primary/20">
                    <CardContent className="p-6">
                      <div className="flex items-start justify-between mb-4">
                        <h4 className="font-bold text-lg">{service.name}</h4>
                        <Badge className="text-lg px-3">{service.price}</Badge>
                      </div>
                      <p className="text-muted-foreground mb-6">{service.description}</p>
                      <Button className="w-full">Book This Service</Button>
                    </CardContent>
                  </Card>
                ))}
              </div>

              {/* Availability */}
              <Card className="mt-6">
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold mb-6">Weekly Availability</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-7 gap-4">
                    {profileData.availability.map((day, idx) => (
                      <div key={idx} className="text-center p-4 border rounded-lg">
                        <p className="font-semibold mb-2">{day.day}</p>
                        <p className="text-sm text-muted-foreground">{day.hours}</p>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            {/* Reviews Tab */}
            <TabsContent value="reviews">
              <Card>
                <CardContent className="p-6">
                  <div className="flex items-center justify-between mb-8">
                    <div>
                      <h3 className="text-xl font-bold">Client Reviews</h3>
                      <p className="text-muted-foreground">
                        {caregiver.rating} rating from {caregiver.reviews} reviews
                      </p>
                    </div>
                    <div className="flex items-center gap-2 text-2xl font-bold">
                      {caregiver.rating}
                      <Star className="h-5 w-5 text-yellow-500 fill-yellow-500" />
                    </div>
                  </div>

                  <div className="space-y-6">
                    {profileData.reviews.map((review, idx) => (
                      <div key={idx} className="pb-6 border-b last:border-0 last:pb-0">
                        <div className="flex items-start justify-between mb-3">
                          <div>
                            <p className="font-medium">{review.name}</p>
                            <p className="text-sm text-muted-foreground">{review.date}</p>
                          </div>
                          <div className="flex items-center gap-1">
                            {[...Array(5)].map((_, i) => (
                              <Star 
                                key={i}
                                className={cn(
                                  "h-4 w-4",
                                  i < review.rating 
                                    ? "text-yellow-500 fill-yellow-500" 
                                    : "text-gray-300"
                                )}
                              />
                            ))}
                          </div>
                        </div>
                        <p className="text-muted-foreground">{review.comment}</p>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </div>
      </section>
    </div>
  )
}

export default CaregiverProfile