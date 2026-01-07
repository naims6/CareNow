import { 
  ChevronDown, 
} from "lucide-react"
import { motion, AnimatePresence } from "framer-motion"
import { cn } from "@/src/lib/utils"
import { FAQItemType } from "@/src/types/faqTypes"
import { Card, CardContent } from "../ui/card"
import { Badge } from "../ui/badge"

export default function FAQItem({ 
  faq, 
  isOpen, 
  onClick 
}: { 
  faq: FAQItemType, 
  isOpen: boolean, 
  index: number
  onClick: () => void 
}) {
  const Icon = faq.icon
  
  return (
    <Card
      className={cn(
        "border transition-all duration-300 hover:shadow-md overflow-hidden",
        isOpen 
          ? "border-primary/30 shadow-lg" 
          : "border-border hover:border-primary/20"
      )}
    >
      <CardContent className="p-0">
        <button
          onClick={onClick}
          className="w-full px-5 py-4 text-left flex items-start justify-between hover:bg-accent/30 transition-colors"
          aria-expanded={isOpen}
        >
          <div className="flex items-start gap-3 flex-1">
            <div className={cn(
              "p-2 rounded-lg mt-1 transition-colors shrink-0",
              isOpen ? "bg-primary/10" : "bg-muted"
            )}>
              <Icon className={cn(
                "h-4 w-4 transition-colors",
                isOpen ? "text-primary" : "text-muted-foreground"
              )} />
            </div>
            
            <div className="flex-1 text-left">
              <div className="flex items-center gap-2 mb-1 flex-wrap">
                <span className="font-semibold text-base">
                  {faq.question}
                </span>
                <Badge
                  variant="secondary" 
                  className="text-xs font-normal"
                >
                  {faq.badge}
                </Badge>
              </div>
              
              {faq.highlight && (
                <p className="text-sm text-primary font-medium">
                  {faq.highlight}
                </p>
              )}
            </div>
          </div>
          
          <ChevronDown 
            className={cn(
              "h-4 w-4 text-muted-foreground shrink-0 ml-3 mt-2 transition-all duration-300",
              isOpen ? "rotate-180 text-primary" : ""
            )}
          />
        </button>
        
        <AnimatePresence initial={false}>
          {isOpen && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ 
                height: "auto", 
                opacity: 1,
                transition: {
                  height: {
                    duration: 0.3,
                    ease: "easeOut"
                  },
                  opacity: {
                    duration: 0.2,
                    delay: 0.1
                  }
                }
              }}
              exit={{ 
                height: 0, 
                opacity: 0,
                transition: {
                  height: {
                    duration: 0.2
                  },
                  opacity: {
                    duration: 0.1
                  }
                }
              }}
              className="overflow-hidden"
            >
              <div className="px-5 pb-5 pt-2 ml-12">
                <div className="pl-4 border-l-2 border-primary/30">
                  <p className="text-muted-foreground leading-relaxed text-sm md:text-base">
                    {faq.answer}
                  </p>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </CardContent>
    </Card>
  )
}