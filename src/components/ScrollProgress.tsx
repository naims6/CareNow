"use client"

import { useEffect, useState } from "react"
import { Stethoscope, ChevronUp } from "lucide-react"
import { motion, AnimatePresence } from "framer-motion"

const ScrollProgress = () => {
  const [isVisible, setIsVisible] = useState(false)
  const [scrollProgress, setScrollProgress] = useState(0)

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY
      const docHeight = document.body.scrollHeight - window.innerHeight
      setScrollProgress((scrollTop / docHeight) * 100)
      setIsVisible(scrollTop > 500)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.button
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0 }}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          className="fixed bottom-8 right-8 w-14 h-14 rounded-full bg-linear-to-br from-primary to-primary/80 text-primary-foreground flex items-center justify-center shadow-lg hover:shadow-xl z-50 group"
          aria-label="Back to top"
        >
          <motion.div
            animate={{ 
              y: scrollProgress > 70 ? [0, -3, 0] : 0 
            }}
            transition={{ 
              duration: 1.5, 
              repeat: Infinity,
              repeatType: "reverse" 
            }}
          >
            {scrollProgress > 90 ? (
              <Stethoscope className="h-6 w-6" />
            ) : (
              <ChevronUp className="h-6 w-6" />
            )}
          </motion.div>
        </motion.button>
      )}
    </AnimatePresence>
  )
}

export default ScrollProgress