import { StatsCard } from "./stats-card"
import {stats} from "@/src/data/stats"

export function StatsGrid() {
  return (
    <div className="mt-24 mx-auto max-w-7xl grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 px-4 lg:px-0">
      {stats.map((stat, index) => (
        <StatsCard key={index} {...stat} />
      ))}
    </div>
  )
}