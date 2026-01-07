import { 
  Shield, 
  Clock, 
  UserCheck, 
  AlertCircle, 
  CreditCard,
  Users,
  HeartHandshake,
  FileCheck,
  Star
} from "lucide-react"

  export const faqs = [
    {
      question: "How are caregivers verified?",
      answer: "All caregivers undergo our comprehensive 5-step verification process: 1) Police background check, 2) National ID verification, 3) Reference validation, 4) Medical training certification, 5) In-person competency assessment. We maintain a 98% caregiver approval rate with regular performance reviews.",
      icon: Shield,
      badge: "Safety",
      highlight: "98% approval rate",
      category: "verification"
    },
    {
      question: "What if I need to cancel or reschedule?",
      answer: "You can cancel or reschedule up to 4 hours before the service starts with no penalty. Cancellations made within 4 hours may incur a 20% service fee. For emergencies, contact our 24/7 support team for immediate assistance and fee waivers.",
      icon: Clock,
      badge: "Flexibility",
      highlight: "4-hour free cancellation",
      category: "booking"
    },
    {
      question: "Are services available 24/7?",
      answer: "Yes! We offer 24/7 emergency care services across major cities. Regular bookings are available from 6 AM to 11 PM daily. Overnight care packages include 12-hour shifts with two caregivers rotating for optimal rest and care quality.",
      icon: AlertCircle,
      badge: "Availability",
      highlight: "24/7 emergency care",
      category: "availability"
    },
    {
      question: "How are caregivers matched to specific needs?",
      answer: "Our AI-powered matching system considers: care type specialization, medical requirements, language preferences, cultural background, experience level, and personality compatibility. You can review detailed caregiver profiles with ratings and reviews before confirming any booking.",
      icon: UserCheck,
      badge: "Matching",
      highlight: "AI-powered matching",
      category: "matching"
    },
    {
      question: "What safety measures are in place?",
      answer: "Multiple layers of safety: Live GPS tracking during service, emergency SOS button in our app, hourly check-in notifications, comprehensive insurance coverage up to ৳5 lakhs, and our 24/7 support team actively monitoring all active services with rapid response capability.",
      icon: Shield,
      badge: "Security",
      highlight: "৳5 lakhs insurance",
      category: "safety"
    },
    {
      question: "How do payments work?",
      answer: "Pay securely through bKash, Nagad, credit/debit cards, or bank transfer. Payment is only processed after service completion and your satisfaction confirmation. We offer care packages (5, 10, 20 sessions) with discounts up to 25%. All transactions are encrypted and PCI-DSS compliant.",
      icon: CreditCard,
      badge: "Payment",
      highlight: "Pay after service",
      category: "payment"
    },
    {
      question: "How experienced are your caregivers?",
      answer: "Our caregivers have minimum 2 years of professional experience with specialized training in pediatric, geriatric, or special needs care. 75% have nursing or paramedic background. All receive ongoing training every quarter.",
      icon: Users,
      badge: "Experience",
      highlight: "2+ years minimum experience",
      category: "caregiver"
    },
    {
      question: "Can I meet the caregiver before booking?",
      answer: "Yes! We offer free virtual meet-and-greet sessions before confirmation. For long-term care arrangements, we can arrange an in-person meeting. This helps ensure comfort and compatibility between your family and the caregiver.",
      icon: HeartHandshake,
      badge: "Compatibility",
      highlight: "Free virtual meetings",
      category: "booking"
    },
    {
      question: "What happens in case of emergency?",
      answer: "Our caregivers are trained in basic first aid and emergency response. In case of medical emergencies, they will immediately contact our 24/7 medical support line, inform you, and follow protocol to reach the nearest hospital. All services include emergency medical coverage.",
      icon: AlertCircle,
      badge: "Emergency",
      highlight: "24/7 medical support line",
      category: "safety"
    },
    {
      question: "How are service quality and feedback handled?",
      answer: "After each service, you'll receive a feedback form. We monitor ratings closely and caregivers with consistently high ratings receive bonuses. For any concerns, our quality assurance team contacts you within 2 hours to resolve issues.",
      icon: Star,
      badge: "Quality",
      highlight: "2-hour response guarantee",
      category: "quality"
    },
    {
      question: "Are background checks updated regularly?",
      answer: "Yes, we conduct annual background check renewals for all active caregivers. Additional checks are performed if a caregiver hasn't been assigned for 3+ months. Our verification system is continuously updated with national databases.",
      icon: FileCheck,
      badge: "Verification",
      highlight: "Annual background checks",
      category: "verification"
    },
    {
      question: "Do you provide care equipment or supplies?",
      answer: "Basic care supplies are provided by caregivers. Specialized medical equipment can be arranged through our partner network at discounted rates. We maintain an inventory of essential items like blood pressure monitors, mobility aids, and safety equipment.",
      icon: Shield,
      badge: "Equipment",
      highlight: "Discounted medical equipment",
      category: "services"
    }
  ]