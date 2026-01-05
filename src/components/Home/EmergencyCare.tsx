"use client"

import { Card, CardContent } from "@/src/components/ui/card"
import { Button } from "@/src/components/ui/button"
import { Phone, Clock, Shield, Ambulance } from "lucide-react"
import { motion } from "framer-motion"
import { Badge } from "../ui/badge"

export function EmergencyCare() {
  return (
    <section className="mt-10 py-16 md:py-24 bg-linear-to-r from-red-50/50 to-orange-50/50 dark:from-red-950/15 dark:to-orange-950/15">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <Badge variant="destructive" className="mb-4">
              Emergency Care
            </Badge>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Need Care Urgently?
            </h2>
            <p className="text-lg text-muted-foreground mb-8">
              Our emergency care service connects you with available caregivers within 60 minutes. Available 24/7 for urgent care situations.
            </p>

            <div className="space-y-4 mb-8">
              <div className="flex items-center gap-3">
                <Clock className="h-5 w-5 text-red-600" />
                <span>60-Minute Response Time</span>
              </div>
              <div className="flex items-center gap-3">
                <Shield className="h-5 w-5 text-red-600" />
                <span>Trained Emergency Responders</span>
              </div>
              <div className="flex items-center gap-3">
                <Ambulance className="h-5 w-5 text-red-600" />
                <span>Hospital Coordination Available</span>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button className="bg-destructive text-white hover:bg-red-500 gap-2">
                <Phone className="h-4 w-4" />
                Call Emergency: 09678-CARE-NOW
              </Button>
              <Button variant="outline">
                Book Emergency Care
              </Button>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative"
          >
            <Card className="border-none shadow-xl">
              <CardContent className="p-8">
                <div className="text-center">
                  <div className="w-20 h-20 rounded-full bg-red-900 flex items-center justify-center mx-auto mb-6">
                    <Phone className="h-10 w-10 text-white dark:text-white" />
                  </div>
                  <h3 className="text-2xl font-bold mb-4">24/7 Emergency Support</h3>
                  <p className="text-muted-foreground mb-6">
                    Our emergency team is always available for urgent care needs, medical emergencies, or last-minute cancellations.
                  </p>
                  <div className="space-y-3">
                    <div className="text-center">
                      <div className="text-3xl font-bold text-destructive">60 min</div>
                      <div className="text-sm text-muted-foreground">Max Response Time</div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  )
}