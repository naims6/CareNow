// import { Users, Heart, Calendar, Star } from "lucide-react"
import { StatsCard } from "./stats-card"
import {stats} from "@/src/data/stats"
export function StatsGrid() {
  // const stats = [
  //   {
  //     icon: Users,
  //     value: "500+",
  //     label: "Verified Caregivers",
  //     description: "Professionally vetted and trained"
  //   },
  //   {
  //     icon: Heart,
  //     value: "1,200+",
  //     label: "Happy Families",
  //     description: "Trusted by families nationwide"
  //   },
  //   {
  //     icon: Calendar,
  //     value: "3,000+",
  //     label: "Services Completed",
  //     description: "And counting every day"
  //   },
  //   {
  //     icon: Star,
  //     value: "98%",
  //     label: "Satisfaction Rate",
  //     description: "Based on client feedback"
  //   }
  // ]

  return (
    <div className="mt-24 mx-auto max-w-7xl grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 px-4 lg:px-0">
      {stats.map((stat, index) => (
        <StatsCard key={index} {...stat} />
      ))}
    </div>
  )
}