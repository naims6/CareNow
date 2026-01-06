import { Metadata } from "next";
import { notFound } from "next/navigation";
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
import {
  Baby,
  User,
  HeartPulse,
  Check,
  Shield,
  Phone,
  ArrowRight,
  ChevronLeft,
} from "lucide-react";
import Link from "next/link";

const services = {
  "baby-care": {
    id: "baby-care",
    icon: Baby,
    title: "Baby Care",
    subtitle: "Professional Childcare Services",
    description:
      "Certified babysitters and nannies for infants, toddlers, and children. Our caregivers provide safe, engaging, and educational care for your little ones.",
    longDescription: `Our Baby Care service provides professional childcare solutions for parents across Bangladesh. We understand that finding trustworthy care for your children is a top priority. All our caregivers undergo rigorous background checks, pediatric first aid training, and child development education.

We offer flexible scheduling including regular nanny services, after-school care, overnight care, and emergency babysitting. Our caregivers are trained in age-appropriate activities, nutrition planning, and creating safe, stimulating environments for children of all ages.`,
    price: "Starting from ৳300/hour",
    badge: "Most Popular",
    color: "from-pink-500 to-rose-500",
    bgColor: "bg-pink-50 dark:bg-pink-950/20",
    features: [
      "Newborn & Infant Care",
      "Age-appropriate Activities & Learning",
      "Homework Assistance & Tutoring",
      "Overnight & Weekend Care",
      "Emergency Babysitting",
      "Sick Child Care",
      "Meal Preparation & Feeding",
      "Outdoor Activities & Play",
    ],
    requirements: [
      "Child CPR & First Aid Certified",
      "Background Verified",
      "Early Childhood Education Training",
      "Reference Checks",
      "Regular Health Check-ups",
      "Child Psychology Basics",
    ],
    pricing: [
      { duration: "4 hours", price: "৳1,200", description: "Standard session" },
      { duration: "8 hours", price: "৳2,200", description: "Full day care" },
      { duration: "12 hours", price: "৳3,000", description: "Extended care" },
      {
        duration: "Weekly",
        price: "৳12,000",
        description: "5 days, 8 hours/day",
      },
      { duration: "Monthly", price: "৳40,000", description: "Full-time care" },
    ],
  },
  "elderly-care": {
    id: "elderly-care",
    icon: User,
    title: "Elderly Care",
    subtitle: "Compassionate Senior Care",
    description:
      "Professional caregivers for senior citizens including companionship, medication management, mobility assistance, and daily living support.",
    longDescription: `Our Elderly Care service provides compassionate support for senior citizens across Bangladesh. We specialize in helping elderly individuals maintain their independence and quality of life while receiving the care they need.

Our caregivers are trained in geriatric care, medication management, mobility assistance, and emotional support. We work closely with families to create personalized care plans that respect the dignity and preferences of each senior.`,
    price: "Starting from ৳350/hour",
    badge: "24/7 Available",
    color: "from-blue-500 to-cyan-500",
    bgColor: "bg-blue-50 dark:bg-blue-950/20",
    features: [
      "Medication Management & Reminders",
      "Mobility Assistance & Fall Prevention",
      "Companionship & Social Engagement",
      "Meal Preparation & Nutrition Planning",
      "Personal Care & Hygiene Assistance",
      "Doctor Appointment Support",
      "Light Housekeeping",
      "Exercise & Activity Support",
    ],
    requirements: [
      "Geriatric Care Training",
      "Medication Administration Certified",
      "First Aid & CPR Certified",
      "Dementia Care Training",
      "Background Verified",
      "Experience with Elderly",
    ],
    pricing: [
      { duration: "4 hours", price: "৳1,400", description: "Standard session" },
      { duration: "8 hours", price: "৳2,500", description: "Day care" },
      { duration: "12 hours", price: "৳3,500", description: "Extended care" },
      { duration: "24 hours", price: "৳6,500", description: "Overnight care" },
      { duration: "Monthly", price: "৳45,000", description: "Regular care" },
    ],
  },
  "special-care": {
    id: "special-care",
    icon: HeartPulse,
    title: "Special Care",
    subtitle: "Specialized Medical Care",
    description:
      "Trained caregivers for post-surgery recovery, chronic conditions, special needs, and medical assistance. Professional support for complex care requirements.",
    longDescription: `Our Special Care service provides professional medical support for individuals with complex care needs. Our caregivers have medical training and experience in handling various health conditions, post-surgical care, and special needs.

We work with families and healthcare providers to create comprehensive care plans that address specific medical requirements while ensuring comfort and dignity for the individual.`,
    price: "Starting from ৳400/hour",
    badge: "Medical Trained",
    color: "from-green-500 to-emerald-500",
    bgColor: "bg-green-50 dark:bg-green-950/20",
    features: [
      "Post-Surgery Recovery Support",
      "Physical Therapy Assistance",
      "Medication Administration",
      "Vital Signs Monitoring",
      "Mobility & Transfer Support",
      "Therapeutic Exercises",
      "Wound Care & Dressing",
      "Medical Equipment Assistance",
    ],
    requirements: [
      "Nursing Assistant Certification",
      "Medical Training",
      "First Aid & CPR Advanced",
      "Specific Condition Training",
      "Background Verified",
      "Medical Reference Checks",
    ],
    pricing: [
      { duration: "4 hours", price: "৳1,600", description: "Standard session" },
      { duration: "8 hours", price: "৳2,800", description: "Day care" },
      { duration: "12 hours", price: "৳3,800", description: "Extended care" },
      { duration: "24 hours", price: "৳7,000", description: "Overnight care" },
      { duration: "Monthly", price: "৳50,000", description: "Full-time care" },
    ],
  },
};

export async function generateMetadata({
  params,
}: {
  params: Promise<{ serviceId: string }>;
}): Promise<Metadata> {
  const { serviceId } = await params;
  const service = services[serviceId as keyof typeof services];

  if (!service) {
    return {
      title: "Service Not Found",
      description: "The requested service page could not be found.",
    };
  }

  return {
    title: `${service.title} Services | CareNow`,
    description: service.description,
    keywords: [
      `${service.title.toLowerCase()} services Bangladesh`,
      `caregiver for ${service.title.toLowerCase()}`,
      `${service.title.toLowerCase()} at home`,
      ...(service.title === "Baby Care" ? ["babysitter", "nanny service"] : []),
      ...(service.title === "Elderly Care"
        ? ["senior care", "elderly caregiver"]
        : []),
      ...(service.title === "Special Care"
        ? ["medical care", "special needs caregiver"]
        : []),
    ],
  };
}

export default async function ServiceDetailPage({
  params,
}: {
  params: Promise<{ serviceId: string }>;
}) {
  const { serviceId } = await params;
  const service = services[serviceId as keyof typeof services];

  if (!service) {
    notFound();
  }

  const Icon = service.icon;

  return (
    <div className="min-h-screen bg-linear-to-b from-background to-muted/20">
      {/* Hero Section */}
      <section className="pt-24 pb-16 md:pt-32 md:pb-20 relative overflow-hidden">
        <div
          className={`absolute inset-0 bg-linear-to-br ${service.color
            .replace("from-", "from-")
            .replace("to-", "to-")}/5 via-transparent to-transparent`}
        />
        <div className="relative">
          <div className="max-w-7xl mx-auto">
            {/* Back Button */}
            <Button variant="ghost" className="mb-8" asChild>
              <Link href="/services">
                <ChevronLeft className="h-4 w-4 mr-2" />
                Back to Services
              </Link>
            </Button>

            <div className="grid lg:grid-cols-2 gap-8 items-center">
              <div>
                <Badge className="mb-4">{service.badge}</Badge>
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-6">
                  {service.title} Services
                </h1>
                <p className="text-lg md:text-xl text-muted-foreground mb-8">
                  {service.description}
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Button size="lg" asChild>
                    <Link href={`/book?service=${service.id}`}>
                      Book {service.title}
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                  <Button size="lg" variant="outline" asChild>
                    <Link href="tel:+88096782273669">
                      <Phone className="h-4 w-4 mr-2" />
                      Call for Details
                    </Link>
                  </Button>
                </div>
              </div>

              <div className="flex justify-center">
                <div
                  className={`p-12 rounded-3xl bg-linear-to-br ${service.color} shadow-2xl`}
                >
                  <Icon className="h-24 w-24 text-white" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16 md:py-24">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-3 gap-8">
            {/* Left Column - Content */}
            <div className="lg:col-span-2 space-y-8">
              {/* Description */}
              <Card>
                <CardHeader>
                  <CardTitle>About {service.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-lg">{service.longDescription}</p>
                </CardContent>
              </Card>

              {/* Features */}
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Check className="h-5 w-5 text-primary" />
                    Service Features
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid sm:grid-cols-2 gap-4">
                    {service.features.map((feature, index) => (
                      <div key={index} className="flex items-start gap-3">
                        <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2 shrink-0" />
                        <span>{feature}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              {/* Caregiver Requirements */}
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Shield className="h-5 w-5 text-primary" />
                    Caregiver Requirements
                  </CardTitle>
                  <CardDescription>
                    All our caregivers meet these strict standards
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    {service.requirements.map((requirement, index) => (
                      <div key={index} className="flex items-center gap-3">
                        <Check className="h-4 w-4 text-green-600" />
                        <span>{requirement}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Right Column - Pricing & CTA */}
            <div className="space-y-6">
              {/* Pricing Card */}
              <Card className="sticky top-24">
                <CardHeader>
                  <CardTitle>Pricing Plans</CardTitle>
                  <CardDescription>
                    Flexible options for your needs
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  {service.pricing.map((plan, index) => (
                    <div key={index} className="p-4 rounded-lg border">
                      <div className="flex justify-between items-center mb-2">
                        <div className="font-semibold">{plan.duration}</div>
                        <div className="text-xl font-bold text-primary">
                          {plan.price}
                        </div>
                      </div>
                      <div className="text-sm text-muted-foreground">
                        {plan.description}
                      </div>
                    </div>
                  ))}
                </CardContent>
                <CardFooter>
                  <Button className="w-full" size="lg" asChild>
                    <Link href={`/book?service=${service.id}`}>
                      Book This Service
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                </CardFooter>
              </Card>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
