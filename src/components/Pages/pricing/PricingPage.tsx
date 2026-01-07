"use client"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/src/components/ui/card"
import { Badge } from "@/src/components/ui/badge"
import { Button } from "@/src/components/ui/button"
import { Switch } from "@/src/components/ui/switch"
import { Label } from "@/src/components/ui/label"
import { CheckCircle, Star, Users, Clock, Shield, Award } from "lucide-react"
import { cn } from "@/src/lib/utils"
import { motion } from "framer-motion"

export function PricingPage() {
  const [isAnnual, setIsAnnual] = useState(false)

  const plans = [
    {
      name: "Basic",
      description: "For occasional care needs",
      monthlyPrice: 299,
      annualPrice: 2990,
      popular: false,
      features: [
        "Up to 20 hours/month",
        "Standard caregiver matching",
        "Basic background checks",
        "Email support",
        "24/7 emergency line",
        "Daily care reports",
      ],
      excluded: ["Priority matching", "Dedicated care manager", "Extended hours"]
    },
    {
      name: "Professional",
      description: "For regular care requirements",
      monthlyPrice: 799,
      annualPrice: 7990,
      popular: true,
      features: [
        "Up to 80 hours/month",
        "Priority caregiver matching",
        "Enhanced background checks",
        "Phone & email support",
        "Weekly care planning",
        "Medication management",
        "Monthly health reports",
        "Caregiver replacement guarantee",
      ],
      excluded: []
    },
    {
      name: "Premium",
      description: "For comprehensive care solutions",
      monthlyPrice: 1499,
      annualPrice: 14990,
      popular: false,
      features: [
        "Unlimited hours",
        "VIP caregiver matching",
        "Comprehensive background checks",
        "24/7 dedicated support",
        "Personal care manager",
        "Medical coordination",
        "Quarterly care assessments",
        "Emergency response guarantee",
        "Specialized training access",
        "Family portal access",
      ],
      excluded: []
    }
  ]

  const addOns = [
    {
      name: "Special Needs Care",
      description: "Additional training for special requirements",
      price: 299,
      unit: "per month"
    },
    {
      name: "Overnight Care",
      description: "12-hour overnight shifts",
      price: 499,
      unit: "per shift"
    },
    {
      name: "Weekend Package",
      description: "Priority weekend bookings",
      price: 399,
      unit: "per month"
    },
    {
      name: "Medical Equipment",
      description: "Essential medical devices",
      price: 199,
      unit: "per month"
    }
  ]



  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative py-16 md:py-20 lg:py-28 overflow-hidden">
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-4xl mx-auto">
            <Badge 
              variant="outline" 
              className="mb-6 px-4 py-2 border-primary/20 bg-primary/5 text-sm font-medium"
            >
              <Star className="h-4 w-4 mr-2 text-yellow-500" />
              Simple, Transparent Pricing
            </Badge>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-6">
              Care Plans for{" "}
              <span className="text-primary">Every Family</span>
            </h1>
            
            <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto mb-8 leading-relaxed">
              Choose from flexible plans designed for your specific care needs. 
              All plans include our 5-step verification process and 24/7 support.
            </p>

            {/* Billing Toggle */}
            <div className="flex items-center justify-center gap-4">
              <Label htmlFor="billing-toggle" className="text-lg font-medium">
                Monthly
              </Label>
              <Switch
                id="billing-toggle"
                checked={isAnnual}
                onCheckedChange={setIsAnnual}
              />
              <div className="flex items-center gap-2">
                <Label htmlFor="billing-toggle" className="text-lg font-medium">
                  Annual
                </Label>
                <Badge variant="secondary" className="text-xs">
                  Save 16%
                </Badge>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Cards */}
      <section className="py-16 md:py-20 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12">
            {plans.map((plan, index) => {
              const price = isAnnual ? plan.annualPrice : plan.monthlyPrice
              const period = isAnnual ? "year" : "month"
              const monthlyEquivalent = isAnnual ? Math.round(plan.annualPrice / 12) : plan.monthlyPrice

              return (
                <motion.div
                  key={plan.name}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  whileHover={{ y: -10 }}
                >
                  <Card className={cn(
                    "h-full border-2 transition-all duration-300 hover:shadow-xl relative",
                    plan.popular 
                      ? "border-primary shadow-lg" 
                      : "border-border hover:border-primary/30"
                  )}>
                    {plan.popular && (
                      <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                        <Badge className="px-4 py-1.5 text-sm bg-primary text-primary-foreground">
                          <Star className="h-3 w-3 mr-1" />
                          Most Popular
                        </Badge>
                      </div>
                    )}

                    <CardHeader className={cn(
                      "text-center pb-4",
                      plan.popular && "pt-8"
                    )}>
                      <CardTitle className="text-2xl font-bold mb-2">
                        {plan.name}
                      </CardTitle>
                      <CardDescription className="text-muted-foreground">
                        {plan.description}
                      </CardDescription>
                      
                      <div className="mt-6">
                        <div className="flex items-baseline justify-center">
                          <span className="text-4xl font-bold">৳{price}</span>
                          <span className="text-muted-foreground ml-2">/{period}</span>
                        </div>
                        {isAnnual && (
                          <p className="text-sm text-muted-foreground mt-2">
                            ৳{monthlyEquivalent}/month
                          </p>
                        )}
                      </div>
                    </CardHeader>

                    <CardContent className="pb-6">
                      <ul className="space-y-3 mb-6">
                        {plan.features.map((feature, idx) => (
                          <li key={idx} className="flex items-start gap-2">
                            <CheckCircle className="h-5 w-5 text-green-500 shrink-0 mt-0.5" />
                            <span className="text-sm">{feature}</span>
                          </li>
                        ))}
                      </ul>

                      {plan.excluded.length > 0 && (
                        <div className="pt-4 border-t">
                          <p className="text-sm font-medium mb-2 text-muted-foreground">Not included:</p>
                          <ul className="space-y-2">
                            {plan.excluded.map((item, idx) => (
                              <li key={idx} className="flex items-start gap-2 text-sm text-muted-foreground">
                                <div className="h-5 w-5 flex items-center justify-center">
                                  <div className="h-1 w-1 rounded-full bg-muted-foreground" />
                                </div>
                                <span>{item}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      )}
                    </CardContent>

                    <CardFooter>
                      <Button 
                        className={cn(
                          "w-full",
                          plan.popular 
                            ? "bg-primary hover:bg-primary/90" 
                            : "bg-secondary hover:bg-secondary/80 text-secondary-foreground"
                        )}
                        size="lg"
                      >
                        {plan.popular ? "Get Started" : "Choose Plan"}
                      </Button>
                    </CardFooter>
                  </Card>
                </motion.div>
              )
            })}
          </div>

          {/* Add-ons Section */}
          <div className="mt-20">
            <div className="text-center max-w-3xl mx-auto mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Additional Services
              </h2>
              <p className="text-lg text-muted-foreground">
                Customize your care plan with these optional add-ons
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {addOns.map((addOn, index) => (
                <motion.div
                  key={addOn.name}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <Card className="h-full border-border hover:border-primary/20 transition-colors">
                    <CardContent className="p-6">
                      <div className="flex items-start justify-between mb-4">
                        <div>
                          <h3 className="font-bold text-lg mb-1">{addOn.name}</h3>
                          <p className="text-sm text-muted-foreground">{addOn.description}</p>
                        </div>
                        <Badge variant="outline" className="text-sm">
                          ৳{addOn.price}
                        </Badge>
                      </div>
                      <p className="text-xs text-muted-foreground mb-4">{addOn.unit}</p>
                      <Button variant="outline" className="w-full">
                        Add Service
                      </Button>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Features Comparison */}
      <section className="py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Compare All Features
            </h2>
            <p className="text-lg text-muted-foreground">
              See how our plans stack up against each other
            </p>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full border-collapse">
              <thead>
                <tr>
                  <th className="text-left p-4 border-b font-semibold">Features</th>
                  {plans.map((plan) => (
                    <th key={plan.name} className="text-center p-4 border-b font-semibold">
                      {plan.name}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {[
                  { feature: "Care Hours/Month", basic: "20", pro: "80", premium: "Unlimited" },
                  { feature: "Caregiver Matching", basic: "Standard", pro: "Priority", premium: "VIP" },
                  { feature: "Background Checks", basic: "Basic", pro: "Enhanced", premium: "Comprehensive" },
                  { feature: "Support", basic: "Email", pro: "Phone & Email", premium: "24/7 Dedicated" },
                  { feature: "Care Reports", basic: "Daily", pro: "Weekly", premium: "Real-time" },
                  { feature: "Emergency Response", basic: "✓", pro: "✓", premium: "✓" },
                  { feature: "Medication Management", basic: "–", pro: "✓", premium: "✓" },
                  { feature: "Care Manager", basic: "–", pro: "–", premium: "✓" },
                  { feature: "Health Assessments", basic: "–", pro: "Monthly", premium: "Quarterly" },
                ].map((row, idx) => (
                  <tr key={idx} className={idx % 2 === 0 ? "bg-muted/30" : ""}>
                    <td className="p-4 border-b font-medium">{row.feature}</td>
                    <td className="p-4 border-b text-center">
                      {row.basic === "✓" ? (
                        <CheckCircle className="h-5 w-5 text-green-500 mx-auto" />
                      ) : row.basic === "–" ? (
                        <span className="text-muted-foreground">–</span>
                      ) : (
                        <span>{row.basic}</span>
                      )}
                    </td>
                    <td className="p-4 border-b text-center">
                      {row.pro === "✓" ? (
                        <CheckCircle className="h-5 w-5 text-green-500 mx-auto" />
                      ) : row.pro === "–" ? (
                        <span className="text-muted-foreground">–</span>
                      ) : (
                        <span>{row.pro}</span>
                      )}
                    </td>
                    <td className="p-4 border-b text-center">
                      {row.premium === "✓" ? (
                        <CheckCircle className="h-5 w-5 text-green-500 mx-auto" />
                      ) : row.premium === "–" ? (
                        <span className="text-muted-foreground">–</span>
                      ) : (
                        <span>{row.premium}</span>
                      )}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Trust Badges */}
      <section className="py-12 border-t">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <Shield className="h-8 w-8 text-green-500 mx-auto mb-2" />
              <p className="font-medium">5-Step Verification</p>
            </div>
            <div>
              <Clock className="h-8 w-8 text-blue-500 mx-auto mb-2" />
              <p className="font-medium">24/7 Support</p>
            </div>
            <div>
              <Award className="h-8 w-8 text-yellow-500 mx-auto mb-2" />
              <p className="font-medium">Satisfaction Guarantee</p>
            </div>
            <div>
              <Users className="h-8 w-8 text-purple-500 mx-auto mb-2" />
              <p className="font-medium">25,000+ Families Served</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default PricingPage