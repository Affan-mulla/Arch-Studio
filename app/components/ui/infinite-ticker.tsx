"use client";

import { motion, useAnimationFrame, useMotionValue, useReducedMotion } from "framer-motion";
import { useEffect, useRef } from "react";

export function InfinitePartnerTicker({ items }: { items: string[] }) {
  const shouldReduceMotion = useReducedMotion();
  const trackRef = useRef<HTMLUListElement | null>(null);
  const trackWidthRef = useRef(0);
  const x = useMotionValue(0);
  const speedPxPerSecond = 56;
  const loopItems = [...items, ...items];

  useEffect(() => {
    const updateTrackWidth = () => {
      if (!trackRef.current) {
        return;
      }

      trackWidthRef.current = trackRef.current.scrollWidth / 2;
    };

    updateTrackWidth();

    const resizeObserver = new ResizeObserver(updateTrackWidth);
    if (trackRef.current) {
      resizeObserver.observe(trackRef.current);
    }

    window.addEventListener("resize", updateTrackWidth);

    return () => {
      resizeObserver.disconnect();
      window.removeEventListener("resize", updateTrackWidth);
    };
  }, []);

  useEffect(() => {
    if (shouldReduceMotion) {
      x.set(0);
    }
  }, [shouldReduceMotion, x]);

  useAnimationFrame((_, delta) => {
    if (shouldReduceMotion) {
      return;
    }

    const trackWidth = trackWidthRef.current;
    if (!trackWidth) {
      return;
    }

    const step = (speedPxPerSecond * delta) / 1000;
    const next = x.get() - step;
    x.set(next <= -trackWidth ? next + trackWidth : next);
  });

  return (
    <div className="relative mt-5 overflow-hidden border-y border-black/12 py-4">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-y-0 left-0 z-10 w-14 bg-linear-to-r from-[#d8e0d5] to-transparent sm:w-24"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute inset-y-0 right-0 z-10 w-14 bg-linear-to-l from-[#d8e0d5] to-transparent sm:w-24"
      />

      <motion.ul
        ref={trackRef}
        className="flex min-w-max items-center gap-8 font-(family-name:--font-jost) text-[0.78rem] font-medium uppercase tracking-[0.2em] text-[#7f897e] sm:gap-10 sm:text-xs"
        style={{ x }}
      >
        {loopItems.map((item, index) => (
          <li key={`${item}-${index}`} className="shrink-0 whitespace-nowrap">
            {item}
          </li>
        ))}
      </motion.ul>
    </div>
  );
}
