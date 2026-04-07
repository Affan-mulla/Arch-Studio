"use client";

import { motion, useReducedMotion, useScroll, useSpring, useTransform, type MotionValue } from "framer-motion";
import { useEffect, useMemo, useRef, useState } from "react";
import { unsplashSrcSet, unsplashUrl } from "../../lib/unsplash";

type SplitImageRevealProps = {
  src: string;
  alt: string;
  className?: string;
  isPriority?: boolean;
};

function SplitColumn({
  index,
  image,
  imageSrcSet,
  progress,
  floatY,
  reduceMotion,
  isPriority,
}: {
  index: number;
  image: string;
  imageSrcSet?: string;
  progress: MotionValue<number>;
  floatY: MotionValue<number>;
  reduceMotion: boolean;
  isPriority: boolean;
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
      {/* Intentional hidden img to control loading for CSS background-image. */}
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src={image}
        srcSet={imageSrcSet}
        alt=""
        aria-hidden
        loading={reduceMotion || (isPriority && index === 0) ? "eager" : "lazy"}
        fetchPriority={isPriority && index === 0 ? "high" : "auto"}
        decoding="async"
        style={{
          position: "absolute",
          width: 1,
          height: 1,
          opacity: 0,
          pointerEvents: "none",
        }}
      />
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

export function SplitImageReveal({ src, alt, className, isPriority = false }: SplitImageRevealProps) {
  const ref = useRef<HTMLElement>(null);
  const [viewportSize, setViewportSize] = useState<"sm" | "md" | "lg" | "xl">("lg");
  const shouldReduceMotion = useReducedMotion();

  useEffect(() => {
    const updateViewportSize = () => {
      const width = window.innerWidth;
      if (width < 640) {
        setViewportSize("sm");
      } else if (width < 1024) {
        setViewportSize("md");
      } else if (width < 1440) {
        setViewportSize("lg");
      } else {
        setViewportSize("xl");
      }
    };

    updateViewportSize();
    window.addEventListener("resize", updateViewportSize);
    return () => window.removeEventListener("resize", updateViewportSize);
  }, []);

  const isUnsplash = src.includes("images.unsplash.com");
  const optimizedSrc = useMemo(
    () => (isUnsplash ? unsplashUrl(src, viewportSize) : src),
    [isUnsplash, src, viewportSize],
  );
  const optimizedSrcSet = useMemo(
    () => (isUnsplash ? unsplashSrcSet(src) : undefined),
    [isUnsplash, src],
  );

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
      ref={(node) => {
        ref.current = node;
      }}
      data-priority={isPriority ? "true" : "false"}
      role="img"
      aria-label={alt}
      className={`relative isolate overflow-hidden border border-black/8 bg-[#d7ded3] before:absolute before:inset-0 before:bg-gradient-to-r before:from-[#d0d8ce] before:via-[#dae2d7] before:to-[#d0d8ce] before:animate-pulse before:-z-10 will-change-transform ${className ?? ""}`}
      style={{ opacity: frameOpacity, scale: frameScale, y: floatY, rotateY: frameRotateY }}
    >
      {[0, 1, 2, 3].map((index) => (
        <SplitColumn
          key={`${src}-col-${index}`}
          index={index}
          image={optimizedSrc}
          imageSrcSet={optimizedSrcSet}
          progress={revealProgress}
          floatY={floatY}
          reduceMotion={Boolean(shouldReduceMotion)}
          isPriority={isPriority}
        />
      ))}
      <div className="pointer-events-none absolute inset-0 bg-linear-to-t from-black/14 via-transparent to-transparent" />
    </motion.figure>
  );
}
