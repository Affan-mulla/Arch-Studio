"use client";

import Lenis from "lenis";
import { useEffect } from "react";

export function SmoothScrollProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  useEffect(() => {
    const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
    if (mediaQuery.matches) return;

    const lenis = new Lenis({
      lerp: 0.085,
      smoothWheel: true,
      syncTouch: false,
      wheelMultiplier: 0.9,
    });

    let rafId = 0;
    let running = true;

    const raf = (time: number) => {
      if (!running) return;
      lenis.raf(time);
      rafId = window.requestAnimationFrame(raf);
    };

    const onVisibility = () => {
      if (document.hidden) {
        running = false;
        window.cancelAnimationFrame(rafId);
      } else {
        running = true;
        rafId = window.requestAnimationFrame(raf);
      }
    };

    document.addEventListener("visibilitychange", onVisibility);

    rafId = window.requestAnimationFrame(raf);

    return () => {
      running = false;
      window.cancelAnimationFrame(rafId);
      document.removeEventListener("visibilitychange", onVisibility);
      lenis.destroy();
    };
  }, []);

  return <>{children}</>;
}
