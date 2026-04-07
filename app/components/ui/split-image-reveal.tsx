"use client";

import { motion, useReducedMotion, useScroll, useSpring, useTransform, type MotionValue } from "framer-motion";
import { useRef } from "react";

type SplitImageRevealProps = {
  src: string;
  alt: string;
  className?: string;
};

function SplitColumn({
  index,
  image,
  progress,
  floatY,
  reduceMotion,
}: {
  index: number;
  image: string;
  progress: MotionValue<number>;
  floatY: MotionValue<number>;
  reduceMotion: boolean;
}) {
  const fromY = index % 2 === 0 ? -72 : 72;
  const start = index * 0.06;
  const entryProgress = useTransform(progress, [start, 1], [0, 1]);

  const entryY = useTransform(
    entryProgress,
    [0, 1],
    reduceMotion ? [0, 0] : [fromY, 0],
  );
  const entryOpacity = useTransform(
    entryProgress,
    [0, 1],
    reduceMotion ? [1, 1] : [0.22, 1],
  );

  const columnFloat = useTransform(
    floatY,
    (value) => (reduceMotion ? 0 : value * (index % 2 === 0 ? 0.36 : 0.44)),
  );
  const y = useTransform([entryY, columnFloat], ([a, b]: number[]) => a + b);

  return (
    <motion.div
      aria-hidden
      className="absolute top-0 h-full overflow-hidden will-change-transform"
      style={{
        left: `${index * 25}%`,
        width: "25%",
        y,
        opacity: entryOpacity,
      }}
    >
      <div
        className="absolute inset-y-0 w-[400%] bg-cover bg-center"
        style={{
          backgroundImage: `url(${image})`,
          left: `-${index * 100}%`,
        }}
      />
    </motion.div>
  );
}

export function SplitImageReveal({ src, alt, className }: SplitImageRevealProps) {
  const ref = useRef<HTMLElement | null>(null);
  const shouldReduceMotion = useReducedMotion();
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 145,
    damping: 32,
    mass: 0.34,
  });

  const revealProgress = useTransform(
    smoothProgress,
    [0.06, 0.36],
    shouldReduceMotion ? [1, 1] : [0, 1],
  );

  const floatBase = useTransform(
    smoothProgress,
    [0, 0.5, 1],
    shouldReduceMotion ? [0, 0, 0] : [6, 0, -6],
  );
  const floatY = useSpring(floatBase, {
    stiffness: 120,
    damping: 26,
    mass: 0.5,
  });

  const frameOpacity = useTransform(
    revealProgress,
    [0, 1],
    shouldReduceMotion ? [1, 1] : [0.5, 1],
  );
  const frameScale = useTransform(
    revealProgress,
    [0, 1],
    shouldReduceMotion ? [1, 1] : [0.992, 1],
  );
  const frameRotateY = useTransform(
    smoothProgress,
    [0, 1],
    shouldReduceMotion ? [0, 0] : [-0.4, 0.4],
  );

  return (
    <motion.figure
      ref={ref}
      role="img"
      aria-label={alt}
      className={`relative isolate overflow-hidden border border-black/8 bg-[#d7ded3] before:absolute before:inset-0 before:bg-gradient-to-r before:from-[#d0d8ce] before:via-[#dae2d7] before:to-[#d0d8ce] before:animate-pulse before:-z-10 will-change-transform ${className ?? ""}`}
      style={{ opacity: frameOpacity, scale: frameScale, y: floatY, rotateY: frameRotateY }}
    >
      {[0, 1, 2, 3].map((index) => (
        <SplitColumn
          key={`${src}-col-${index}`}
          index={index}
          image={src}
          progress={revealProgress}
          floatY={floatY}
          reduceMotion={Boolean(shouldReduceMotion)}
        />
      ))}
      <div className="pointer-events-none absolute inset-0 bg-linear-to-t from-black/14 via-transparent to-transparent" />
    </motion.figure>
  );
}
