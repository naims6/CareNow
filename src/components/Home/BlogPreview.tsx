"use client"

import { Card, CardContent } from "@/src/components/ui/card"
import { Button } from "@/src/components/ui/button"
import { Calendar, Clock, ArrowRight } from "lucide-react"
import { motion } from "framer-motion"
import Link from "next/link"

export function BlogPreview() {
  const articles = [
    {
      title: "5 Signs Your Elderly Parent Needs Professional Care",
      excerpt: "Learn to recognize when it's time to seek professional help for aging parents.",
      category: "Elderly Care",
      readTime: "5 min",
      date: "Mar 15, 2024"
    },
    {
      title: "Essential Questions to Ask a Babysitter",
      excerpt: "A comprehensive checklist for interviewing potential caregivers for your children.",
      category: "Baby Care",
      readTime: "7 min",
      date: "Mar 10, 2024"
    },
    {
      title: "Creating a Safe Home Environment for Special Needs",
      excerpt: "Tips and modifications to make your home safer for family members with special needs.",
      category: "Special Care",
      readTime: "8 min",
      date: "Mar 5, 2024"
    }
  ]

  return (
    <section className="py-16 md:py-24">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Care Resources & Tips
          </h2>
          <p className="text-lg text-muted-foreground">
            Expert advice and resources to help you make informed care decisions
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {articles.map((article, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card className="hover:shadow-xl transition-all duration-300 h-full group">
                <CardContent className="p-6">
                  <div className="flex items-center gap-2 text-sm text-muted-foreground mb-4">
                    <span className="px-3 py-1 bg-primary/10 text-primary rounded-full">
                      {article.category}
                    </span>
                  </div>
                  
                  <h3 className="text-xl font-bold mb-3 group-hover:text-primary transition-colors">
                    {article.title}
                  </h3>
                  
                  <p className="text-muted-foreground mb-6">
                    {article.excerpt}
                  </p>
                  
                  <div className="flex items-center justify-between text-sm text-muted-foreground">
                    <div className="flex items-center gap-4">
                      <div className="flex items-center gap-1">
                        <Clock className="h-3 w-3" />
                        {article.readTime}
                      </div>
                      <div className="flex items-center gap-1">
                        <Calendar className="h-3 w-3" />
                        {article.date}
                      </div>
                    </div>
                    <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        <div className="text-center">
          <Button asChild variant="outline" size="lg">
            <Link href="/blog">
              View All Articles
            </Link>
          </Button>
        </div>
      </div>
    </section>
  )
}