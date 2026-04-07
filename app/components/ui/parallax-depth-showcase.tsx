"use client";

import { motion, useMotionTemplate, useReducedMotion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { SplitImageReveal } from "./split-image-reveal";

type ParallaxDepthProps = {
  src: string;
  alt: string;
  eyebrow: string;
  title: string;
};

export function ParallaxDepthShowcase({ src, alt, eyebrow, title }: ParallaxDepthProps) {
  const ref = useRef<HTMLDivElement | null>(null);
  const shouldReduceMotion = useReducedMotion();
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start 88%", "end 15%"],
  });

  const imageY = useTransform(
    scrollYProgress,
    [0, 1],
    shouldReduceMotion ? [0, 0] : [46, -44],
  );
  const imageScale = useTransform(
    scrollYProgress,
    [0, 1],
    shouldReduceMotion ? [1, 1] : [1.07, 1],
  );
  const imageRotateX = useTransform(
    scrollYProgress,
    [0, 1],
    shouldReduceMotion ? [0, 0] : [5, -3],
  );
  const imageRotateY = useTransform(
    scrollYProgress,
    [0, 1],
    shouldReduceMotion ? [0, 0] : [-3, 2],
  );
  const imageTransform = useMotionTemplate`translate3d(0px, ${imageY}px, 0px) rotateX(${imageRotateX}deg) rotateY(${imageRotateY}deg) scale(${imageScale})`;

  const textY = useTransform(
    scrollYProgress,
    [0, 1],
    shouldReduceMotion ? [0, 0] : [78, -86],
  );
  const textZ = useTransform(
    scrollYProgress,
    [0, 1],
    shouldReduceMotion ? [0, 0] : [30, 130],
  );
  const textRotateX = useTransform(
    scrollYProgress,
    [0, 1],
    shouldReduceMotion ? [0, 0] : [-6, 4],
  );
  const textOpacity = useTransform(
    scrollYProgress,
    [0, 1],
    shouldReduceMotion ? [1, 1] : [0.65, 1],
  );
  const textTransform = useMotionTemplate`translate3d(0px, ${textY}px, ${textZ}px) rotateX(${textRotateX}deg)`;

  return (
    <div ref={ref} className="relative mb-10 h-[340px] overflow-hidden [perspective:1300px] sm:h-[470px] lg:h-[720px]">
      <motion.div
        className="absolute inset-0 [transform-style:preserve-3d]"
        style={{ transform: imageTransform }}
      >
        <SplitImageReveal src={src} alt={alt} className="h-full" />
      </motion.div>

      <motion.div
        className="pointer-events-none absolute inset-0 z-20 flex w-full items-center justify-center px-4 [transform-style:preserve-3d] bg-black/15"
        style={{ transform: textTransform, opacity: textOpacity }}
      >
        <div className="mx-auto max-w-3xl text-center">
          <span className="mb-3 block font-body text-xs uppercase tracking-[0.16em] text-[#f1f4eb] sm:text-sm">
            {eyebrow}
          </span>
          <h2 className="text-[clamp(2.25rem,6.4vw,6.15rem)] leading-[0.94] text-[#f6f8f2]">
            {title}
          </h2>
        </div>
      </motion.div>
    </div>
  );
}
