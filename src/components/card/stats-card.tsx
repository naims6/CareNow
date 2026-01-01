// components/stats-card.tsx
import { Card, CardContent } from "@/src/components/ui/card"
import { LucideIcon } from "lucide-react"

interface StatsCardProps {
  icon: LucideIcon
  value: string
  label: string
  description?: string
}

export function StatsCard({ 
  icon: Icon, 
  value, 
  label, 
  description 
}: StatsCardProps) {
  return (
    <Card className="shadow-lg hover:shadow-xl transition-shadow border border-accent/80 bg-transparent">
      <CardContent className="p-5">
        <div className="flex items-center gap-4">
          <div className="p-3 bg-primary/10 rounded-full">
            <Icon className="h-8 w-8 text-primary" />
          </div>
          <div>
            <h3 className="text-3xl font-bold text-foreground">{value}</h3>
            <p className="text-lg font-semibold text-foreground">{label}</p>
            {description && (
              <p className="text-sm text-muted-foreground mt-1">{description}</p>
            )}
          </div>
        </div>
      </CardContent>
    </Card>
  )
}