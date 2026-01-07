"use client"

import { useState } from "react"
import { Card, CardContent } from "@/src/components/ui/card"
import { Badge } from "@/src/components/ui/badge"
import { 
  HelpCircle, 
  Phone,
  Mail,
  Users,

} from "lucide-react"
import { faqs } from "@/src/data/faqs"
import FAQItem from "../../card/FAQItem"

export function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0)


  // Split FAQs into two columns
  const leftColumnFaqs = faqs.slice(0, Math.ceil(faqs.length / 2))
  const rightColumnFaqs = faqs.slice(Math.ceil(faqs.length / 2))

  return (
    <section className="py-16 md:py-28 bg-linear-to-b from-background to-muted/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <Badge 
            variant="outline" 
            className="mb-4 px-4 py-2 border-primary/20 bg-primary/5 hover:bg-primary/5 text-sm font-medium"
          >
            <HelpCircle className="h-4 w-4 mr-2" />
            Frequently Asked Questions
          </Badge>
          
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight mb-4">
            Everything You Need to Know
          </h2>
          
          <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto">
            Get clear answers about our trusted care services, safety measures, and booking process
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8">
          {/* Left Column */}
          <div className="space-y-4">
            {leftColumnFaqs.map((faq, index) => (
              <FAQItem 
                key={index}
                faq={faq}
                index={index}
                isOpen={openIndex === index}
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
              />
            ))}
          </div>

          {/* Right Column */}
          <div className="space-y-4">
            {rightColumnFaqs.map((faq, index) => (
              <FAQItem
                key={index + leftColumnFaqs.length}
                faq={faq}
                index={index + leftColumnFaqs.length}
                isOpen={openIndex === (index + leftColumnFaqs.length)}
                onClick={() => setOpenIndex(openIndex === (index + leftColumnFaqs.length) ? null : (index + leftColumnFaqs.length))}
              />
            ))}
          </div>
        </div>

        {/* Contact CTA Section */}
        <div className="mt-16 lg:mt-20">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            <Card className="border-primary/20 bg-linear-to-br from-primary/5 to-primary/10 lg:col-span-2">
              <CardContent className="p-6 md:p-8">
                <h3 className="text-2xl font-bold mb-3">Still have questions?</h3>
                <p className="text-muted-foreground mb-6">
                  Our dedicated support team is available 24/7 to assist you with any queries or concerns about our care services.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <a 
                    href="tel:+8801700000000" 
                    className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-primary text-primary-foreground rounded-lg font-medium hover:bg-primary/90 transition-colors"
                  >
                    <Phone className="h-4 w-4" />
                    Call Support: +880 1700-000000
                  </a>
                  <a 
                    href="mailto:support@carenow.com" 
                    className="inline-flex items-center justify-center gap-2 px-6 py-3 border border-input bg-background hover:bg-accent hover:text-accent-foreground rounded-lg font-medium transition-colors"
                  >
                    <Mail className="h-4 w-4" />
                    Email Support
                  </a>
                </div>
              </CardContent>
            </Card>

            <Card className="border-secondary/20 bg-linear-to-br from-secondary/5 to-secondary/10">
              <CardContent className="p-6 md:p-8 h-full flex flex-col justify-center">
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-2 bg-secondary/20 rounded-lg">
                    <Users className="h-6 w-6 text-secondary" />
                  </div>
                  <h4 className="text-lg font-semibold">Quick Support</h4>
                </div>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li className="flex items-center gap-2">
                    <div className="h-1.5 w-1.5 rounded-full bg-primary" />
                    Average response time: 5 minutes
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="h-1.5 w-1.5 rounded-full bg-primary" />
                    24/7 live chat available
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="h-1.5 w-1.5 rounded-full bg-primary" />
                    Emergency line: +880 1700-000001
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="h-1.5 w-1.5 rounded-full bg-primary" />
                    WhatsApp: +880 1700-000002
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  )
}
