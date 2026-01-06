"use client";
import React from "react";
import Link from "next/link";
import { Button } from "@/src/components/ui/button";
import Image from "next/image";
import { StatsGrid } from "../../card/StatsGrid";
import { motion } from "framer-motion";
import { cn } from "@/src/lib/utils";

function BlurReveal({
  children,
  delay = 0,
  blurAmount = 10,
  className,
}: {
  children: React.ReactNode;
  delay?: number;
  blurAmount?: number;
  className?: string;
}) {
  return (
    <motion.div
      initial={{
        filter: `blur(${blurAmount}px)`,
        opacity: 0,
        y: 20,
      }}
      animate={{
        filter: "blur(0px)",
        opacity: 1,
        y: 0,
      }}
      transition={{
        duration: 0.7,
        delay: delay,
        ease: [0.16, 1, 0.3, 1], // Custom easing for smoother effect
      }}
      className={cn(className)}
    >
      {children}
    </motion.div>
  );
}

export default function HeroSection() {
  return (
    <>
      <main className="relative overflow-x-hidden min-h-[calc(100vh-67px)] border-b border-accent">
        <section className="lg:mt-10 pb-7 lg:pb-16">
          {/*Grid Background */}
          <div
            className="absolute inset-0 -z-10 opacity-40 dark:opacity-10"
            style={{
              backgroundImage: `
        linear-gradient(to right, #d1d5db 1px, transparent 1px),
        linear-gradient(to bottom, #d1d5db 1px, transparent 1px)
      `,
              backgroundSize: "32px 32px",
              WebkitMaskImage:
                "radial-gradient(ellipse 60% 60% at 50% 50%, #000 30%, transparent 70%)",
              maskImage:
                "radial-gradient(ellipse 60% 60% at 50% 50%, #000 30%, transparent 70%)",
            }}
          />
          {/* background */}
          <div
            aria-hidden
            className="pointer-events-none absolute inset-0 isolate hidden opacity-65 contain-strict lg:block"
          >
            <div className="w-140 h-320 -translate-y-87.5 absolute left-0 top-0 -rotate-45 rounded-full bg-[radial-gradient(68.54%_68.72%_at_55.02%_31.46%,hsla(0,0%,85%,.08)_0,hsla(0,0%,55%,.02)_50%,hsla(0,0%,45%,0)_80%)]" />
            <div className="h-320 absolute left-0 top-0 w-60 -rotate-45 rounded-full bg-[radial-gradient(50%_50%_at_50%_50%,hsla(0,0%,85%,.06)_0,hsla(0,0%,45%,.02)_80%,transparent_100%)] [translate:5%_-50%]" />
            <div className="h-320 -translate-y-87.5 absolute left-0 top-0 w-60 -rotate-45 bg-[radial-gradient(50%_50%_at_50%_50%,hsla(0,0%,85%,.04)_0,hsla(0,0%,45%,.02)_80%,transparent_100%)]" />
          </div>
          {/* hero content */}
          <div className="pt-16 lg:pt-0">
            <div className="mx-auto max-w-7xl flex flex-col justify-between items-center lg:flex-row-reverse px-6">
              <motion.div
                className="mt-8 lg:w-150"
                initial={{ opacity: 0, scale: 0.95, y: 20 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                <Image
                  className="ml-auto h-56 w-full object-cover sm:h-96 lg:-right-20 lg:h-max lg:w-full lg:object-contain dark:mix-blend-lighten dark:invert-0"
                  src="/family.svg"
                  alt="Happy family with caregiver"
                  height="4000"
                  width="3000"
                  priority
                />
              </motion.div>
              <div className="mx-auto mt-8  text-center lg:ml-0 lg:w-full lg:text-left">
                <BlurReveal blurAmount={12} delay={0.1}>
                  <h1 className="mt-8 max-w-2xl text-balance text-5xl font-bold md:text-6xl lg:mt-16 xl:text-7xl bg-linear-to-r from-foreground to-foreground/80 bg-clip-text text-transparent">
                    Trusted Care for Your Loved Ones
                  </h1>
                </BlurReveal>
                <BlurReveal delay={0.3} blurAmount={8}>
                  <p className="mt-8 max-w-2xl text-pretty text-lg text-muted-foreground">
                    Find reliable babysitters and elderly caregivers near you.
                    Book safe and professional care services anytime, anywhere.
                  </p>
                </BlurReveal>

                <div className="mt-12 flex flex-col items-center justify-center gap-2 sm:flex-row lg:justify-start">
                  <BlurReveal delay={0.5} blurAmount={6}>
                    <Button asChild size="lg" className="px-8 text-base gap-2">
                      <Link href="/services" className="cursor-pointer">
                        <span className="text-nowrap">Start Booking</span>
                      </Link>
                    </Button>
                  </BlurReveal>

                  <BlurReveal delay={0.7} blurAmount={6}>
                    <Button
                      asChild
                      size="lg"
                      variant="outline"
                      className="px-8 text-base"
                    >
                      <Link href="#how-it-works">
                        <span className="text-nowrap">How it works</span>
                      </Link>
                    </Button>
                  </BlurReveal>
                </div>
              </div>
            </div>
            {/* stat  */}
            <StatsGrid />
          </div>
        </section>
      </main>
    </>
  );
}
