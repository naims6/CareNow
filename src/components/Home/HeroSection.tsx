import React from "react";
import Link from "next/link";
import { Button } from "@/src/components/ui/button";
import Image from "next/image";
import { StatsGrid } from "../card/StatsGrid";

export default function HeroSection() {
  return (
    <>
      <main className="overflow-x-hidden min-h-[calc(100vh-67px)]">
        <section className="lg:mt-10">
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
              <div className="mt-8 lg:w-150">
                <Image
                  className="ml-auto h-56 w-full object-cover sm:h-96  lg:-right-20 lg:h-max lg:w-full lg:object-contain dark:mix-blend-lighten dark:invert-0"
                  src="/family.svg"
                  alt="Abstract Object"
                  height="4000"
                  width="3000"
                />
              </div>
              <div className="mx-auto mt-8  text-center lg:ml-0 lg:w-full lg:text-left">
                <h1 className="mt-8 max-w-2xl text-balance text-5xl font-medium md:text-6xl lg:mt-16 xl:text-7xl">
                  Trusted Care for Your Loved Ones
                </h1>
                <p className="mt-8 max-w-2xl text-pretty text-lg">
                  Find reliable babysitters and elderly caregivers near you.
                  Book safe and professional care services anytime, anywhere.
                </p>

                <div className="mt-12 flex flex-col items-center justify-center gap-2 sm:flex-row lg:justify-start">
                  <Button asChild size="lg" className="px-5 text-base">
                    <Link href="/services" className="cursor-pointer">
                      <span className="text-nowrap">Start Booking</span>
                    </Link>
                  </Button>
                  <Button
                    key={2}
                    asChild
                    size="lg"
                    variant="secondary"
                    className="px-5 text-base"
                  >
                    <Link href="#link">
                      <span className="text-nowrap">How it&apos;s work</span>
                    </Link>
                  </Button>
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
