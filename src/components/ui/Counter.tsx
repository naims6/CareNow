// components/ui/animated-counter.tsx
"use client";

import { useEffect, useState, useRef } from "react";
import { useInView } from "framer-motion";
import { cn } from "@/src/lib/utils";

interface CounterProps {
  value: number;
  duration?: number;
  prefix?: string;
  suffix?: string;
  decimalPlaces?: number;
  className?: string;
  startValue?: number;
  shouldCount?: boolean;
}

export function Counter({
  value,
  duration = 2000,
  prefix = "",
  suffix = "",
  decimalPlaces = 0,
  className,
  startValue = 0,
  shouldCount = true,                                                                                                                                                                                       
}: CounterProps) {
  const [count, setCount] = useState(startValue);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  useEffect(() => {
    if (!shouldCount || !isInView) return;

    let startTimestamp: number | null = null;
    const step = (timestamp: number) => {
      if (!startTimestamp) startTimestamp = timestamp;
      const progress = Math.min((timestamp - startTimestamp) / duration, 1);

      const currentCount = progress * (value - startValue) + startValue;
      setCount(parseFloat(currentCount.toFixed(decimalPlaces)));

      if (progress < 1) {
        window.requestAnimationFrame(step);
      }
    };

    window.requestAnimationFrame(step);
  }, [value, duration, isInView, startValue, decimalPlaces, shouldCount]);

  return (
    <span ref={ref} className={cn("font-bold", className)}>
      {prefix}
      {count.toLocaleString()}
      {suffix}
    </span>
  );
}
