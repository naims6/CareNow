"use client"

import { useState } from "react"
import { Card, CardContent, CardFooter } from "@/src/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/src/components/ui/avatar"
import { Badge } from "@/src/components/ui/badge"
import { Button } from "@/src/components/ui/button"
import { Input } from "@/src/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/src/components/ui/select"
import { Slider } from "@/src/components/ui/slider"
import { 
  Star, 
  Clock, 
  MapPin, 
  CheckCircle, 
  Search,
  Filter,
  Users,
  Sparkles,
  Heart,
} from "lucide-react"
import { motion } from "framer-motion"
import Link from "next/link"
import { cn } from "@/src/lib/utils"

// 15 Caregivers Data (will store in MongoDB)
export const caregiversData = [
  {
    id: "cg001",
    name: "Dr. Fatima Rahman",
    role: "Pediatric Specialist",
    experience: "10 years",
    rating: 4.9,
    reviews: 156,
    image: "https://randomuser.me/api/portraits/women/32.jpg",
    specialties: ["Newborn Care", "Child Development", "Vaccination"],
    hourlyRate: 450,
    availability: "Full-time",
    location: "Dhaka",
    languages: ["Bangla", "English", "Arabic"],
    verified: true,
    responseTime: "15 mins",
    email: "fatima.rahman@carenow.com",
    phone: "+8801712345678",
    about: "Pediatric specialist with 10+ years experience in child healthcare and development.",
    education: ["MBBS, DCH", "Pediatrics Specialist"]
  },
  {
    id: "cg002",
    name: "Rahim Uddin",
    role: "Elderly Care Expert",
    experience: "15 years",
    rating: 4.8,
    reviews: 132,
    image: "https://randomuser.me/api/portraits/men/75.jpg",
    specialties: ["Dementia Care", "Post-Stroke Recovery", "Physiotherapy"],
    hourlyRate: 400,
    availability: "24/7",
    location: "Chittagong",
    languages: ["Bangla", "Hindi", "English"],
    verified: true,
    responseTime: "10 mins",
    email: "rahim.uddin@carenow.com",
    phone: "+8801712345679",
    about: "Specialized in elderly care with expertise in dementia and post-stroke recovery.",
    education: ["B.Sc Nursing", "Geriatric Care Certification"]
  },
  {
    id: "cg003",
    name: "Ayesha Chowdhury",
    role: "Special Needs Specialist",
    experience: "8 years",
    rating: 4.7,
    reviews: 98,
    image: "https://randomuser.me/api/portraits/women/44.jpg",
    specialties: ["Autism Support", "Speech Therapy", "Behavioral Therapy"],
    hourlyRate: 500,
    availability: "Flexible",
    location: "Dhaka",
    languages: ["Bangla", "English", "Sign Language"],
    verified: true,
    responseTime: "20 mins",
    email: "ayesha.chowdhury@carenow.com",
    phone: "+8801712345680",
    about: "Special needs care expert with extensive training in autism and behavioral therapy.",
    education: ["Special Education Degree", "Autism Specialist"]
  },
  {
    id: "cg004",
    name: "Mohammad Ali",
    role: "Post-Surgery Care",
    experience: "12 years",
    rating: 4.6,
    reviews: 87,
    image: "https://randomuser.me/api/portraits/men/81.jpg",
    specialties: ["Post-Operation Care", "Wound Dressing", "Medication Management"],
    hourlyRate: 380,
    availability: "Full-time",
    location: "Sylhet",
    languages: ["Bangla", "English", "Urdu"],
    verified: true,
    responseTime: "25 mins",
    email: "mohammad.ali@carenow.com",
    phone: "+8801712345681",
    about: "Expert in post-surgical care with nursing background and emergency response training.",
    education: ["Diploma in Nursing", "Critical Care Certification"]
  },
  {
    id: "cg005",
    name: "Nadia Islam",
    role: "Newborn Care Specialist",
    experience: "6 years",
    rating: 4.9,
    reviews: 145,
    image: "https://randomuser.me/api/portraits/women/68.jpg",
    specialties: ["Premature Baby Care", "Lactation Support", "Sleep Training"],
    hourlyRate: 420,
    availability: "Part-time",
    location: "Dhaka",
    languages: ["Bangla", "English"],
    verified: true,
    responseTime: "30 mins",
    email: "nadia.islam@carenow.com",
    phone: "+8801712345682",
    about: "Specialized in newborn care with focus on premature babies and lactation support.",
    education: ["Midwifery Certification", "Neonatal Care Training"]
  },
  {
    id: "cg006",
    name: "Kamal Hossain",
    role: "Physical Therapy Expert",
    experience: "9 years",
    rating: 4.5,
    reviews: 76,
    image: "https://randomuser.me/api/portraits/men/45.jpg",
    specialties: ["Physical Therapy", "Mobility Training", "Rehabilitation"],
    hourlyRate: 550,
    availability: "Flexible",
    location: "Rajshahi",
    languages: ["Bangla", "English"],
    verified: true,
    responseTime: "40 mins",
    email: "kamal.hossain@carenow.com",
    phone: "+8801712345683",
    about: "Physical therapy specialist with expertise in mobility training and rehabilitation.",
    education: ["Physiotherapy Degree", "Rehabilitation Specialist"]
  },
  {
    id: "cg007",
    name: "Sabrina Ahmed",
    role: "Dementia Care Specialist",
    experience: "11 years",
    rating: 4.8,
    reviews: 103,
    image: "https://randomuser.me/api/portraits/women/26.jpg",
    specialties: ["Alzheimer's Care", "Memory Care", "Cognitive Therapy"],
    hourlyRate: 480,
    availability: "Full-time",
    location: "Dhaka",
    languages: ["Bangla", "English"],
    verified: true,
    responseTime: "15 mins",
    email: "sabrina.ahmed@carenow.com",
    phone: "+8801712345684",
    about: "Specialized in dementia and Alzheimer's care with cognitive therapy expertise.",
    education: ["Psychology Degree", "Dementia Care Certification"]
  },
  {
    id: "cg008",
    name: "Arif Khan",
    role: "Emergency Care Nurse",
    experience: "7 years",
    rating: 4.7,
    reviews: 92,
    image: "https://randomuser.me/api/portraits/men/22.jpg",
    specialties: ["Emergency Response", "First Aid", "CPR Training"],
    hourlyRate: 520,
    availability: "24/7",
    location: "Khulna",
    languages: ["Bangla", "English"],
    verified: true,
    responseTime: "5 mins",
    email: "arif.khan@carenow.com",
    phone: "+8801712345685",
    about: "Emergency care specialist with rapid response training and critical care experience.",
    education: ["Emergency Nursing", "Advanced Life Support"]
  },
  {
    id: "cg009",
    name: "Tasnim Rahman",
    role: "Nutrition & Diet Care",
    experience: "5 years",
    rating: 4.6,
    reviews: 67,
    image: "https://randomuser.me/api/portraits/women/55.jpg",
    specialties: ["Diet Planning", "Nutrition Therapy", "Special Diets"],
    hourlyRate: 350,
    availability: "Part-time",
    location: "Dhaka",
    languages: ["Bangla", "English"],
    verified: true,
    responseTime: "45 mins",
    email: "tasnim.rahman@carenow.com",
    phone: "+8801712345686",
    about: "Nutrition specialist focusing on therapeutic diets and special nutritional needs.",
    education: ["Nutrition Science Degree", "Dietitian Certification"]
  },
  {
    id: "cg010",
    name: "Salman Ahmed",
    role: "Palliative Care Expert",
    experience: "14 years",
    rating: 4.9,
    reviews: 118,
    image: "https://randomuser.me/api/portraits/men/33.jpg",
    specialties: ["Palliative Care", "Pain Management", "Comfort Care"],
    hourlyRate: 600,
    availability: "Full-time",
    location: "Dhaka",
    languages: ["Bangla", "English", "Arabic"],
    verified: true,
    responseTime: "20 mins",
    email: "salman.ahmed@carenow.com",
    phone: "+8801712345687",
    about: "Palliative care specialist with extensive experience in pain management and comfort care.",
    education: ["Palliative Medicine", "Pain Management Certification"]
  },
  {
    id: "cg011",
    name: "Farida Begum",
    role: "Maternity Care Nurse",
    experience: "8 years",
    rating: 4.7,
    reviews: 89,
    image: "https://randomuser.me/api/portraits/women/37.jpg",
    specialties: ["Postpartum Care", "New Mother Support", "Breastfeeding"],
    hourlyRate: 400,
    availability: "Flexible",
    location: "Barisal",
    languages: ["Bangla", "English"],
    verified: true,
    responseTime: "35 mins",
    email: "farida.begum@carenow.com",
    phone: "+8801712345688",
    about: "Maternity care specialist supporting new mothers with postpartum care and breastfeeding.",
    education: ["Midwifery", "Postpartum Care Certification"]
  },
  {
    id: "cg012",
    name: "Rashidul Islam",
    role: "Mental Health Care",
    experience: "10 years",
    rating: 4.8,
    reviews: 95,
    image: "https://randomuser.me/api/portraits/men/66.jpg",
    specialties: ["Mental Health Support", "Counseling", "Therapy Sessions"],
    hourlyRate: 550,
    availability: "Part-time",
    location: "Dhaka",
    languages: ["Bangla", "English"],
    verified: true,
    responseTime: "50 mins",
    email: "rashidul.islam@carenow.com",
    phone: "+8801712345689",
    about: "Mental health care professional providing counseling and therapeutic support.",
    education: ["Clinical Psychology", "Counseling Certification"]
  },
  {
    id: "cg013",
    name: "Maya Rahman",
    role: "Cancer Care Specialist",
    experience: "9 years",
    rating: 4.6,
    reviews: 72,
    image: "https://randomuser.me/api/portraits/women/29.jpg",
    specialties: ["Oncology Care", "Chemotherapy Support", "Pain Management"],
    hourlyRate: 580,
    availability: "Full-time",
    location: "Dhaka",
    languages: ["Bangla", "English"],
    verified: true,
    responseTime: "25 mins",
    email: "maya.rahman@carenow.com",
    phone: "+8801712345690",
    about: "Oncology care specialist with expertise in chemotherapy support and cancer patient care.",
    education: ["Oncology Nursing", "Cancer Care Certification"]
  },
  {
    id: "cg014",
    name: "Imran Hossain",
    role: "Diabetes Care Expert",
    experience: "7 years",
    rating: 4.5,
    reviews: 63,
    image: "https://randomuser.me/api/portraits/men/52.jpg",
    specialties: ["Diabetes Management", "Insulin Therapy", "Diet Control"],
    hourlyRate: 420,
    availability: "Flexible",
    location: "Comilla",
    languages: ["Bangla", "English"],
    verified: true,
    responseTime: "30 mins",
    email: "imran.hossain@carenow.com",
    phone: "+8801712345691",
    about: "Diabetes care specialist focusing on management, insulin therapy and diet control.",
    education: ["Diabetes Educator", "Endocrinology Care"]
  },
  {
    id: "cg015",
    name: "Sadia Akter",
    role: "General Care Nurse",
    experience: "5 years",
    rating: 4.4,
    reviews: 58,
    image: "https://randomuser.me/api/portraits/women/41.jpg",
    specialties: ["General Nursing", "Medication Management", "Daily Care"],
    hourlyRate: 300,
    availability: "Full-time",
    location: "Dhaka",
    languages: ["Bangla", "English"],
    verified: true,
    responseTime: "20 mins",
    email: "sadia.akter@carenow.com",
    phone: "+8801712345692",
    about: "General care nurse providing comprehensive nursing care and medication management.",
    education: ["General Nursing Diploma", "Patient Care Certification"]
  }
]

export function CaregiversPage() {
  const [searchTerm, setSearchTerm] = useState("")
  const [selectedLocation, setSelectedLocation] = useState("all")
  const [selectedSpecialty, setSelectedSpecialty] = useState("all")
  const [priceRange, setPriceRange] = useState([0, 600])
  const [showFilters, setShowFilters] = useState(false)

  // Get unique locations and specialties for filters
  const locations = ["all", ...new Set(caregiversData.map(c => c.location))]
  const specialties = ["all", ...new Set(caregiversData.flatMap(c => c.specialties))]

  // Filter caregivers based on criteria
  const filteredCaregivers = caregiversData.filter(caregiver => {
    const matchesSearch = searchTerm === "" || 
      caregiver.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      caregiver.role.toLowerCase().includes(searchTerm.toLowerCase()) ||
      caregiver.specialties.some(s => s.toLowerCase().includes(searchTerm.toLowerCase()))
    
    const matchesLocation = selectedLocation === "all" || caregiver.location === selectedLocation
    const matchesSpecialty = selectedSpecialty === "all" || caregiver.specialties.includes(selectedSpecialty)
    const matchesPrice = caregiver.hourlyRate >= priceRange[0] && caregiver.hourlyRate <= priceRange[1]

    return matchesSearch && matchesLocation && matchesSpecialty && matchesPrice
  })

  return (
    <div className="min-h-screen bg-linear-to-b from-background to-muted/20 mt-16">
      {/* Hero Section */}
      <section className="py-12 md:py-16 bg-linear-to-r from-primary/10 via-primary/5 to-secondary/10">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-6">
              Find Your Perfect Caregiver
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground mb-8">
              Browse our verified caregivers and find the perfect match for your family&apos;s needs
            </p>
          </div>
        </div>
      </section>

      {/* Search & Filters */}
      <section className="py-8 bg-background/95 backdrop-blur supports-backdrop-filter:bg-background/60">
        <div className="max-w-7xl mx-auto px-4">
          <div className="space-y-4">
            {/* Search Bar */}
            <div className="relative">
              <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 h-5 w-5 text-muted-foreground" />
              <Input
                placeholder="Search by name, specialty, or location..."
                className="pl-12 h-12 text-lg"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>

            {/* Filters Toggle */}
            <div className="flex items-center justify-between">
              <Button
                variant="outline"
                onClick={() => setShowFilters(!showFilters)}
                className="gap-2"
              >
                <Filter className="h-4 w-4" />
                {showFilters ? "Hide Filters" : "Show Filters"}
              </Button>
              
              <div className="text-sm text-muted-foreground">
                {filteredCaregivers.length} caregivers found
              </div>
            </div>

            {/* Filters Panel */}
            {showFilters && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: "auto" }}
                exit={{ opacity: 0, height: 0 }}
                className="grid grid-cols-1 md:grid-cols-3 gap-6 p-6 border rounded-lg bg-card"
              >
                <div>
                  <label className="text-sm font-medium mb-2 block">Location</label>
                  <Select value={selectedLocation} onValueChange={setSelectedLocation}>
                    <SelectTrigger>
                      <SelectValue placeholder="Select location" />
                    </SelectTrigger>
                    <SelectContent>
                      {locations.map((location) => (
                        <SelectItem key={location} value={location}>
                          {location === "all" ? "All Locations" : location}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>

                <div>
                  <label className="text-sm font-medium mb-2 block">Specialty</label>
                  <Select value={selectedSpecialty} onValueChange={setSelectedSpecialty}>
                    <SelectTrigger>
                      <SelectValue placeholder="Select specialty" />
                    </SelectTrigger>
                    <SelectContent>
                      {specialties.map((specialty) => (
                        <SelectItem key={specialty} value={specialty}>
                          {specialty === "all" ? "All Specialties" : specialty}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>

                <div>
                  <label className="text-sm font-medium mb-2 block">
                    Price Range: ৳{priceRange[0]} - ৳{priceRange[1]}/hr
                  </label>
                  <Slider
                    defaultValue={[0, 600]}
                    max={600}
                    step={50}
                    value={priceRange}
                    onValueChange={setPriceRange}
                    className="w-full"
                  />
                </div>
              </motion.div>
            )}
          </div>
        </div>
      </section>

      {/* Caregivers Grid */}
      <section className="py-8">
        <div className="max-w-7xl mx-auto px-4">
          {filteredCaregivers.length === 0 ? (
            <div className="text-center py-16">
              <Users className="h-16 w-16 mx-auto text-muted-foreground mb-4" />
              <h3 className="text-xl font-semibold mb-2">No caregivers found</h3>
              <p className="text-muted-foreground">
                Try adjusting your search filters
              </p>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredCaregivers.map((caregiver, index) => (
                <motion.div
                  key={caregiver.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.05 }}
                  whileHover={{ y: -5 }}
                >
                  <Card className="h-full border-border/50 hover:border-primary/30 transition-all duration-300 hover:shadow-xl overflow-hidden group">
                    {/* Top Badge */}
                    <div className="absolute top-4 right-4 z-10">
                      <Badge className={cn(
                        "shadow-md",
                        caregiver.rating >= 4.8 ? "bg-yellow-500 hover:bg-yellow-600" :
                        caregiver.rating >= 4.5 ? "bg-blue-500 hover:bg-blue-600" :
                        "bg-green-500 hover:bg-green-600"
                      )}>
                        <Star className="h-3 w-3 mr-1" />
                        {caregiver.rating}
                      </Badge>
                    </div>

                    <CardContent className="p-6">
                      {/* Caregiver Header */}
                      <div className="flex items-start gap-4 mb-6">
                        <Avatar className="h-20 w-20 border-2 border-primary/20">
                          <AvatarImage src={caregiver.image} alt={caregiver.name} />
                          <AvatarFallback className="text-lg">
                            {caregiver.name.split(' ').map(n => n[0]).join('')}
                          </AvatarFallback>
                        </Avatar>
                        
                        <div className="flex-1">
                          <div className="flex items-start justify-between">
                            <div>
                              <h3 className="font-bold text-xl mb-1">{caregiver.name}</h3>
                              <p className="text-primary font-medium">{caregiver.role}</p>
                            </div>
                            
                            {caregiver.verified && (
                              <Badge variant="outline" className="text-xs">
                                <CheckCircle className="h-3 w-3 mr-1 text-green-500" />
                                Verified
                              </Badge>
                            )}
                          </div>

                          <div className="flex items-center gap-4 mt-3 text-sm">
                            <div className="flex items-center gap-1">
                              <MapPin className="h-4 w-4 text-muted-foreground" />
                              <span>{caregiver.location}</span>
                            </div>
                            <div className="flex items-center gap-1">
                              <Clock className="h-4 w-4 text-muted-foreground" />
                              <span>{caregiver.experience}</span>
                            </div>
                          </div>
                        </div>
                      </div>

                      {/* Specialties */}
                      <div className="mb-6">
                        <h4 className="text-sm font-semibold mb-2 flex items-center gap-2">
                          <Sparkles className="h-4 w-4 text-purple-500" />
                          Specialties
                        </h4>
                        <div className="flex flex-wrap gap-2">
                          {caregiver.specialties.slice(0, 3).map((specialty, idx) => (
                            <Badge 
                              key={idx} 
                              variant="secondary" 
                              className="text-xs"
                            >
                              {specialty}
                            </Badge>
                          ))}
                          {caregiver.specialties.length > 3 && (
                            <Badge variant="outline" className="text-xs">
                              +{caregiver.specialties.length - 3} more
                            </Badge>
                          )}
                        </div>
                      </div>

                      {/* Stats */}
                      <div className="grid grid-cols-3 gap-4 mb-6 p-4 bg-muted/30 rounded-lg">
                        <div className="text-center">
                          <div className="text-lg font-bold text-primary">
                            ৳{caregiver.hourlyRate}
                          </div>
                          <p className="text-xs text-muted-foreground">per hour</p>
                        </div>
                        
                        <div className="text-center">
                          <div className="text-lg font-bold">{caregiver.reviews}</div>
                          <p className="text-xs text-muted-foreground">reviews</p>
                        </div>
                        
                        <div className="text-center">
                          <div className="text-lg font-bold">{caregiver.responseTime}</div>
                          <p className="text-xs text-muted-foreground">response</p>
                        </div>
                      </div>

                      {/* Languages */}
                      <div className="mb-6">
                        <h4 className="text-sm font-semibold mb-2">Languages</h4>
                        <div className="flex flex-wrap gap-2">
                          {caregiver.languages.slice(0, 2).map((language, idx) => (
                            <Badge 
                              key={idx} 
                              variant="outline" 
                              className="text-xs"
                            >
                              {language}
                            </Badge>
                          ))}
                        </div>
                      </div>
                    </CardContent>

                    <CardFooter className="p-6 pt-0">
                      <div className="flex gap-3 w-full">
                        <Button asChild className="flex-1">
                          <Link href={`/caregivers/${caregiver.id}`}>
                            View Details
                          </Link>
                        </Button>
                        <Button variant="outline" size="icon">
                          <Heart className="h-4 w-4" />
                        </Button>
                      </div>
                    </CardFooter>
                  </Card>
                </motion.div>
              ))}
            </div>
          )}
        </div>
      </section>
    </div>
  )
}

export default CaregiversPage