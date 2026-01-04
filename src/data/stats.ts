import { Users, Heart, Calendar, Star } from "lucide-react";

// export const stats = [
//   {
//     icon: Users,
//     value: "500",
//     label: "Verified Caregivers",
//     description: "Professionally vetted and trained",
//   },
//   {
//     icon: Heart,
//     value: "1,200",
//     label: "Happy Families",
//     description: "Trusted by families nationwide",
//   },
//   {
//     icon: Calendar,
//     value: "3,000",
//     label: "Services Completed",
//     description: "And counting every day",
//   },
//   {
//     icon: Star,
//     value: "98",
//     label: "Satisfaction Rate",
//     description: "Based on client feedback",
//   },
// ];

interface StatItem {
  icon: React.ComponentType<{ className?: string }>
  value: number
  label: string
  description?: string
  prefix?: string
  suffix?: string
}

export const stats: StatItem[] = [
  {
    icon: Users,
    value: 500,
    label: "Verified Caregivers",
    description: "Professionally vetted and trained",
    suffix: "+"
  },
  {
    icon: Heart,
    value: 1200,
    label: "Happy Families",
    description: "Trusted by families nationwide",
    suffix: "+"
  },
  {
    icon: Calendar,
    value: 3000,
    label: "Services Completed",
    description: "And counting every day",
    suffix: "+"
  },
  {
    icon: Star,
    value: 98,
    label: "Satisfaction Rate",
    description: "Based on client feedback",
    suffix: "%"
  }
]