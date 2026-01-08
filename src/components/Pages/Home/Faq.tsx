"use client";

import { useState } from "react";
import { Badge } from "@/src/components/ui/badge";
import { HelpCircle } from "lucide-react";
import { faqs } from "@/src/data/faqs";
import FAQItem from "../../card/FAQItem";

export function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  // Split FAQs into two columns
  const leftColumnFaqs = faqs.slice(0, Math.ceil(faqs.length / 2));
  const rightColumnFaqs = faqs.slice(Math.ceil(faqs.length / 2));

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
            Get clear answers about our trusted care services, safety measures,
            and booking process
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
                isOpen={openIndex === index + leftColumnFaqs.length}
                onClick={() =>
                  setOpenIndex(
                    openIndex === index + leftColumnFaqs.length
                      ? null
                      : index + leftColumnFaqs.length
                  )
                }
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
