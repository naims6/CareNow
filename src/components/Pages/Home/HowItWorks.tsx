"use client"

import { Card, CardContent } from "@/src/components/ui/card"
import { Search, CalendarCheck, UserCheck, Star } from "lucide-react"
import { motion } from "framer-motion"

export function HowItWorks() {
  const steps = [
    {
      icon: Search,
      title: "Choose Service",
      description: "Select baby care, elderly care, or special care based on your needs",
      color: "from-blue-500 to-blue-600"
    },
    {
      icon: CalendarCheck,
      title: "Book & Schedule",
      description: "Pick date, time, duration, and enter location details",
      color: "from-green-500 to-green-600"
    },
    {
      icon: UserCheck,
      title: "Get Matched",
      description: "We match you with verified caregivers based on your requirements",
      color: "from-purple-500 to-purple-600"
    },
    {
      icon: Star,
      title: "Receive Care",
      description: "Professional caregiver arrives on time, provides quality care",
      color: "from-orange-500 to-orange-600"
    }
  ]

  return (
    <section className="py-16 md:py-20 bg-muted/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-12 md:mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            How CareNow Works
          </h2>
          <p className="text-lg text-muted-foreground">
            Get started with professional care in just 4 simple steps
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {steps.map((step, index) => {
            const Icon = step.icon
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Card className="border-none shadow-sm h-full">
                  <CardContent className="p-6 text-center">
                    <div className="inline-flex items-center justify-center mb-6">
                      <div className={`w-12 h-12 rounded-full bg-linear-to-br ${step.color} flex items-center justify-center`}>
                        <Icon className="h-6 w-6 text-white" />
                      </div>
                      <div className="ml-4 w-8 h-8 rounded-full bg-primary text-primary-foreground flex items-center justify-center text-sm font-bold">
                        {index + 1}
                      </div>
                    </div>
                    
                    <h3 className="text-xl font-semibold mb-3">{step.title}</h3>
                    <p className="text-muted-foreground">
                      {step.description}
                    </p>
                  </CardContent>
                </Card>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}