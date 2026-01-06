"use client"

import { useState } from "react"
import { Card, CardContent } from "@/src/components/ui/card"
import { Button } from "@/src/components/ui/button"
import { ChevronDown, HelpCircle } from "lucide-react"
import { motion, AnimatePresence } from "framer-motion"

export function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0)

  const faqs = [
    {
      question: "How are caregivers verified?",
      answer: "All caregivers undergo 5-step verification: 1) Background check, 2) Identity verification, 3) Reference checks, 4) Medical training certification, 5) In-person interview. We maintain a 98% caregiver approval rate."
    },
    {
      question: "What if I need to cancel or reschedule?",
      answer: "You can cancel or reschedule up to 4 hours before the service starts with no penalty. For emergencies within 4 hours, contact our 24/7 support team."
    },
    {
      question: "Are services available 24/7?",
      answer: "Yes, we offer 24/7 emergency care services. For non-emergencies, bookings are available from 6 AM to 11 PM daily. Overnight care is also available."
    },
    {
      question: "How are caregivers matched to specific needs?",
      answer: "We match based on: care type (baby/elderly/special), medical requirements, language preferences, experience level, and personality compatibility. You can review caregiver profiles before confirming."
    },
    {
      question: "What safety measures are in place?",
      answer: "GPS tracking during service, emergency SOS button in app, regular check-ins, insurance coverage up to ৳5 lakhs, and 24/7 support team monitoring all active services."
    },
    {
      question: "How do payments work?",
      answer: "Pay securely through bKash, Nagad, credit/debit cards, or bank transfer. Payment is only processed after service completion. You can also purchase care packages for discounted rates."
    }
  ]

  return (
    <section className="py-16 md:py-24">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-medium mb-4">
            <HelpCircle className="h-4 w-4" />
            Frequently Asked Questions
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Your Questions Answered
          </h2>
          <p className="text-lg text-muted-foreground">
            Everything you need to know about CareNow services
          </p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <Card key={index} className="border hover:border-primary/20 transition-colors">
              <CardContent className="p-0">
                <button
                  onClick={() => setOpenIndex(openIndex === index ? null : index)}
                  className="w-full px-6 py-4 text-left flex items-center justify-between hover:bg-muted/50 transition-colors"
                >
                  <span className="font-semibold text-lg">{faq.question}</span>
                  <ChevronDown 
                    className={`h-5 w-5 text-muted-foreground transition-transform duration-300 ${
                      openIndex === index ? "rotate-180" : ""
                    }`}
                  />
                </button>
                
                <AnimatePresence>
                  {openIndex === index && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                      className="overflow-hidden"
                    >
                      <div className="px-6 pb-6 pt-2">
                        <p className="text-muted-foreground">{faq.answer}</p>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}