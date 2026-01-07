import {
  Baby,
  User,
  HeartPulse,
  Clock,
  Shield,
  Star,
  Users,
  Calendar,
  AlertCircle,
  BookOpen,
  FileText,
} from "lucide-react";

export const services = [
  {
    id: "baby-care",
    icon: Baby,
    title: "Baby Care",
    subtitle: "Professional Childcare Services",
    description:
      "Certified babysitters and nannies for infants, toddlers, and children. Our caregivers provide safe, engaging, and educational care for your little ones.",
    price: "Starting from ৳300/hour",
    badge: "Most Popular",
    color: "bg-pink-50 dark:bg-pink-950/20",
    iconColor: "text-pink-600",
    delay: 0.1,
    features: [
      "Newborn & Infant Care",
      "Age-appropriate Activities",
      "Homework Assistance",
      "Overnight Care Available",
      "Emergency Babysitting",
      "Sick Child Care",
    ],
    idealFor: [
      "Working Parents",
      "Date Nights",
      "Emergency Childcare",
      "Newborn Parents",
      "After-school Care",
      "Weekend Care",
    ],
    highlights: [
      { icon: Shield, text: "Background Verified", color: "text-blue-600" },
      { icon: Star, text: "4.9/5 Rating", color: "text-yellow-600" },
      { icon: Clock, text: "Same-day Booking", color: "text-green-600" },
    ],
  },
  {
    id: "elderly-care",
    icon: User,
    title: "Elderly Care",
    subtitle: "Compassionate Senior Care",
    description:
      "Professional caregivers for senior citizens including companionship, medication management, mobility assistance, and daily living support.",
    price: "Starting from ৳350/hour",
    badge: "24/7 Available",
    color: "bg-blue-50 dark:bg-blue-950/20",
    iconColor: "text-blue-600",
    delay: 0.2,
    features: [
      "Medication Management",
      "Mobility Assistance",
      "Companionship",
      "Meal Preparation",
      "Personal Care",
      "Doctor Appointment Support",
    ],
    idealFor: [
      "Senior Living Alone",
      "Post-Hospitalization Care",
      "Dementia/Alzheimer's Care",
      "Chronic Condition Management",
      "Respite for Family Caregivers",
      "Palliative Care",
    ],
    highlights: [
      {
        icon: Users,
        text: "Trained in Geriatric Care",
        color: "text-purple-600",
      },
      { icon: Calendar, text: "Flexible Scheduling", color: "text-orange-600" },
      { icon: HeartPulse, text: "Medical Background", color: "text-red-600" },
    ],
  },
  {
    id: "special-care",
    icon: HeartPulse,
    title: "Special Care",
    subtitle: "Specialized Medical Care",
    description:
      "Trained caregivers for post-surgery recovery, chronic conditions, special needs, and medical assistance. Professional support for complex care requirements.",
    price: "Starting from ৳400/hour",
    badge: "Medical Trained",
    color: "bg-green-50 dark:bg-green-950/20",
    iconColor: "text-green-600",
    delay: 0.3,
    features: [
      "Post-Surgery Recovery",
      "Physical Therapy Assistance",
      "Medication Administration",
      "Vital Signs Monitoring",
      "Mobility Support",
      "Therapeutic Exercises",
    ],
    idealFor: [
      "Post-Surgery Patients",
      "Chronic Illness (Diabetes, BP)",
      "Physical Disabilities",
      "Autism Spectrum",
      "Stroke Recovery",
      "Cancer Care Support",
    ],
    highlights: [
      { icon: AlertCircle, text: "Medical Training", color: "text-green-600" },
      { icon: FileText, text: "Care Plans", color: "text-indigo-600" },
      { icon: BookOpen, text: "Therapy Knowledge", color: "text-amber-600" },
    ],
  },
];

// Home page data shorter version
export const servicesHomePageData = services.map((service) => ({
  icon: service.icon.name,
  title: service.title,
  description: service.description,
  features: service.features.slice(0, 3),
  price: service.price,
  badge: service.badge,
  color: service.color,
  iconColor: service.iconColor,
  delay: service.delay,
}));

// For ServiceCard component
export const servicesCardsData = services.map((service) => ({
  icon: service.icon,
  title: service.title,
  description: service.description,
  features: service.features,
  price: service.price,
  badge: service.badge,
  color: service.color,
  iconColor: service.iconColor,
  delay: service.delay,
}));

// For Tabs section in services page
export const servicesTabsData = services.map((service) => ({
  id: service.id,
  icon: service.icon,
  title: service.title,
  subtitle: service.subtitle,
  description: service.description,
  price: service.price,
  badge: service.badge,
  color: service.color,
  iconColor: service.iconColor,
  delay: service.delay,
  features: service.features,
  idealFor: service.idealFor,
  highlights: service.highlights,
}));
