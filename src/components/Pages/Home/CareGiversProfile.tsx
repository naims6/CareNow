"use client";
import { Button } from "@/src/components/ui/button";
import Link from "next/link";
import CaregiverCard from "../../card/CaregiverCard";

export function CaregiverPreview() {
  const caregivers = [
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
      about:
        "Pediatric specialist with 10+ years experience in child healthcare and development.",
      education: ["MBBS, DCH", "Pediatrics Specialist"],
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
      about:
        "Specialized in elderly care with expertise in dementia and post-stroke recovery.",
      education: ["B.Sc Nursing", "Geriatric Care Certification"],
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
      about:
        "Special needs care expert with extensive training in autism and behavioral therapy.",
      education: ["Special Education Degree", "Autism Specialist"],
    },
  ];

  return (
    <section className="py-16 md:py-20 bg-linear-to-b from-background to-muted/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-12 md:mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Meet Our Verified Caregivers
          </h2>
          <p className="text-lg text-muted-foreground">
            Carefully selected professionals trained to provide compassionate
            care
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 lg:gap-8 mb-12">
          <CaregiverCard caregiversData={caregivers} />
        </div>

        <div className="text-center">
          <Button asChild size="lg">
            <Link href="/caregivers">Browse All Caregivers</Link>
          </Button>
        </div>
      </div>
    </section>
  );
}