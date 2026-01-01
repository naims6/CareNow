// components/about-minimal.tsx
import { Card, CardContent } from "@/src/components/ui/card"
import { Button } from "@/src/components/ui/button"
import { Badge } from "@/src/components/ui/badge"
import { Separator } from "@/src/components/ui/separator"
import { Heart, Shield, Users, CheckCircle, Star } from "lucide-react"
import {stats} from "@/src/data/stats"
export function About() {
  const features = [
    "Background Verified Caregivers",
    "24/7 Emergency Support",
    "Flexible Booking Options",
    "Regular Quality Checks",
    "Insurance Coverage",
    "Same-Day Service Available"
  ]

  return (
    <section id="about" className="py-16 md:py-24">
      <div className="mx-auto max-w-7xl px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Column */}
          <div>
            <Badge variant="secondary" className="mb-4">
              Why Choose CareNow.
            </Badge>
            <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-6">
              Trusted Care for Your <span className="text-primary">Loved Ones</span>
            </h2>
            <p className="text-lg text-muted-foreground mb-8">
              At CareNow, we understand that entrusting someone with your family&apos;s care 
              is a big decision. That&apos;s why we go above and beyond to ensure every 
              caregiver is thoroughly vetted, trained, and matched to your specific needs.
            </p>

            <div className="space-y-4 mb-8">
              {features.map((feature, index) => (
                <div key={index} className="flex items-center gap-3">
                  <CheckCircle className="h-5 w-5 text-green-600 shrink-0" />
                  <span>{feature}</span>
                </div>
              ))}
            </div>

            <div className="flex flex-wrap gap-4">
              <Button>Book a Caregiver</Button>
              <Button variant="outline">Learn More</Button>
            </div>
          </div>

          {/* Right Column - Stats */}
          <div className="grid grid-cols-2 gap-6">
            {stats.map((stat) =>  <Card key={stat.label} className="text-center bg-card/50 border border-accent/50">
              <CardContent className="p-6">
                <stat.icon className="h-8 w-8 text-primary mx-auto mb-4" />
                <div className="text-3xl font-bold">{stat.value}</div>
                <div className="text-sm text-muted-foreground">{stat.label}</div>
              </CardContent>
            </Card>)}
          </div>
        </div>

        <Separator className="my-16" />

        {/* Trust Indicators */}
        <div className="text-center">
          <h3 className="text-2xl font-semibold mb-8">
            Trusted by Families Across Bangladesh
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-8">
            {/* Add partner logos or trust badges here */}
            <div className="text-muted-foreground">Dhaka Division</div>
            <div className="text-muted-foreground">Chittagong</div>
            <div className="text-muted-foreground">Sylhet</div>
            <div className="text-muted-foreground">Rajshahi</div>
            <div className="text-muted-foreground">Khulna</div>
            <div className="text-muted-foreground">Barishal</div>
          </div>
        </div>
      </div>
    </section>
  )
}