"use client";

import Link from "next/link";
import {
  motion,
  useAnimationFrame,
  useSpring,
  type MotionValue,
  useMotionValue,
  useReducedMotion,
  useScroll,
  useTransform,
  useMotionTemplate,
} from "framer-motion";
import { useEffect, useRef } from "react";

type ExpertiseCard = {
  id: string;
  title: string;
  body: string;
};

type Testimonial = {
  quote: string;
  name: string;
  role: string;
  avatar: string;
};

type SplitImageRevealProps = {
  src: string;
  alt: string;
  className?: string;
};

type ParallaxDepthProps = {
  src: string;
  alt: string;
  eyebrow: string;
  title: string;
};

const navItems = ["Studio", "Expertise", "Vision", "Portfolio", "Journal"];
const trustedPartners = [
  "VISA",
  "SONY",
  "NVIDIA",
  "UBER",
  "MERIDIAN",
  "AIRBNB",
  "ADOBE",
  "STRIPE",
];

const expertiseCards: ExpertiseCard[] = [
  {
    id: "01",
    title: "Spatial Architecture Design",
    body: "We engineer structural frameworks that optimize spatial flow, light penetration, and material efficiency for modern demands.",
  },
  {
    id: "02",
    title: "Ecological Integration Strategy",
    body: "Our specialists provide blueprints for implementing passive energy systems and reducing total structural carbon footprint.",
  },
  {
    id: "03",
    title: "Lifecycle Planning & Execution",
    body: "From initial schematics to final structural deployment, we manage the complete lifecycle of every architectural project.",
  },
];

const testimonials: Testimonial[] = [
  {
    quote:
      "Vanguardis transformed our operational brief into a physical reality that exceeds all structural and aesthetic expectations.",
    name: "Elena Rostova",
    role: "Director, Nexus Corp",
    avatar:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=120&q=80",
  },
  {
    quote:
      "Their approach to passive thermal systems reduced our energy overhead drastically, without compromising the minimalist aesthetic we demanded.",
    name: "Marcus Lin",
    role: "Founder, Aura Developments",
    avatar:
      "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=120&q=80",
  },
  {
    quote:
      "Uncompromising precision. The entire lifecycle planning executed by their studio was flawless from the initial sketches to deployment.",
    name: "Sarah Jenkins",
    role: "VP Operations, Meridian",
    avatar:
      "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&w=120&q=80",
  },
];

const metrics = [
  ["Execution Year", "2024"],
  ["Total Floor Area", "14,500 sq meters"],
  ["Locally Sourced Materials", "85% by volume"],
  ["Thermal Efficiency Rating", "A+ Certified"],
  ["Energy Autonomy", "Solar Grid Integration"],
  ["Structural Lifespan Est.", "120+ Years"],
  ["Maintenance Reduction", "30% lower overhead"],
];

function SectionReveal({
  children,
  className,
  delay = 0,
}: {
  children: React.ReactNode;
  className?: string;
  delay?: number;
}) {
  const shouldReduceMotion = useReducedMotion();

  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y: shouldReduceMotion ? 0 : 32 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1], delay }}
    >
      {children}
    </motion.div>
  );
}

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

function SplitImageReveal({ src, alt, className }: SplitImageRevealProps) {
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
      className={`relative isolate overflow-hidden border border-black/8 bg-[#d7ded3] will-change-transform ${className ?? ""}`}
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

function ParallaxDepthShowcase({ src, alt, eyebrow, title }: ParallaxDepthProps) {
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

function InfinitePartnerTicker({ items }: { items: string[] }) {
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

export function LandingPage() {
  return (
    <main className="relative overflow-x-clip  bg-[#d8e0d5] text-[#2a3329]">
      

      <div className="relative mx-auto w-full max-w-330 px-4 sm:px-6 lg:px-10">
        <div
        aria-hidden
        className="pointer-events-none absolute inset-0"
        style={{
          border: "1px solid rgba(0,0,0,0.06)",
          backgroundSize: "300px",
        }}
      />
        <motion.header
          initial={{ opacity: 0, y: -14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
          className="border-b border-black/12 py-6"
        >
          <nav className="flex flex-wrap items-center justify-between gap-4 font-(family-name:--font-jost) uppercase tracking-[0.15em] text-[#6d7569]">
            <ul className="flex flex-wrap items-center gap-4 text-[0.95rem] sm:text-base">
              {navItems.map((item, index) => (
                <li key={item} className="flex items-center gap-4">
                  <Link
                    href="#"
                    className="transition-colors duration-200 hover:text-[#2c3d2d]"
                  >
                    {item}
                  </Link>
                  {index !== navItems.length - 1 ? (
                    <span className="text-[#95a08f]">/</span>
                  ) : null}
                </li>
              ))}
            </ul>
            <span aria-hidden className="text-lg text-[#84907f]">
              ↗
            </span>
          </nav>
        </motion.header>

        <section className=" py-10 sm:py-14 lg:py-16">
          <div className="grid gap-10 lg:grid-cols-[minmax(0,1fr)_340px] lg:items-end">
            <SectionReveal>
              <h1 className="font-(family-name:--font-cormorant) text-[clamp(3.3rem,9.2vw,8.3rem)] leading-[0.92] text-[#263226]">
                Architectural <span className="italic">Innovations</span>
                <br />
                Habitats
              </h1>
            </SectionReveal>

            <SectionReveal delay={0.12} className="space-y-4">
              <div className="flex items-center justify-between border-b border-black/22 pb-2 font-(family-name:--font-jost) uppercase tracking-[0.09em] text-[#3d493d]">
                <span>Discuss Project</span>
              </div>
              <SplitImageReveal
                src="https://images.unsplash.com/photo-1451976426598-a7593bd6d0b2?q=100&w=570"
                alt="Corner detail of a modern timber structure"
                className="h-55"
              />
              <p className="max-w-sm font-(family-name:--font-jost) text-lg leading-relaxed text-[#687368]">
                Developing timeless structures with minimal environmental footprint,
                altering the way we inhabit spaces.
              </p>
            </SectionReveal>
          </div>

          <div className="mt-8 grid gap-3 border-y border-black/12 py-4 font-(family-name:--font-jost) uppercase tracking-[0.14em] text-[#6f796c] sm:grid-cols-3 sm:text-lg">
            <span>Alpine Retreat Concept</span>
            <span className="sm:text-center">2024</span>
            <span className="sm:text-right">Minimalist Dwelling</span>
          </div>

          <SectionReveal className="border-b border-black/12 py-8 sm:py-10">
          <div className="font-body text-[0.78rem] font-medium uppercase tracking-[0.2em] text-[#7f897e] sm:text-xs">
            <span>Trusted by industry leaders</span>
          </div>
          <InfinitePartnerTicker items={trustedPartners} />
        </SectionReveal>
        </section>

        

        <section className="border-b border-black/12 py-12 sm:py-16 lg:py-20">
          <div className="grid gap-8 lg:grid-cols-[minmax(0,1.03fr)_minmax(0,0.97fr)]">
            <SectionReveal>
              <h2 className="max-w-4xl font-(family-name:--font-cormorant) text-[clamp(2rem,5vw,5.3rem)] leading-[0.95] text-[#263226]">
                At Vanguardis, we are commited to pioneering architectural systems that harmonize with their environments, engineered for longevity and spatial excellence.
              </h2>
              <Link
                href="#"
                className="mt-8 inline-block border-b border-[#2d3d2d] pb-1 font-(family-name:--font-jost) text-xl uppercase tracking-[0.09em] text-[#304030] transition-colors hover:text-[#5d6d5c]"
              >
                Our Studio
              </Link>
            </SectionReveal>

            <SectionReveal delay={0.1} className="space-y-7">
              <p className="font-(family-name:--font-jost) text-[1.2rem] leading-relaxed text-[#5f6a5f] sm:text-[1.85rem]">
                We pioneer a forward-thinking approach by fusing advanced
                structural engineering with ecological awareness. From passive
                thermal systems to the deliberate selection of regional materials,
                every endeavor is a testament to longevity and spatial harmony.
              </p>
              <SplitImageReveal
                src="https://images.unsplash.com/photo-1767293567719-7d1ad37b7ce5?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                alt="Rolling landscape integrated with sustainable architecture"
                className="h-[210px] sm:h-[360px]"
              />
            </SectionReveal>
          </div>
        </section>

        <section className="border-b border-black/12 py-12 sm:py-16 lg:py-20">
          <div className="mb-10 flex flex-wrap items-end justify-between gap-4">
            <SectionReveal>
              <p className="mb-5 font-(family-name:--font-jost) text-sm uppercase tracking-[0.16em] text-[#7d8678] sm:text-base">
                Expertise
              </p>
              <h2 className="max-w-4xl font-(family-name:--font-cormorant) text-[clamp(2.2rem,5vw,4.7rem)] leading-[0.95] text-[#273226]">
                Engineering Precision Solutions for Any Scale
              </h2>
            </SectionReveal>
            <SectionReveal delay={0.14}>
              <Link
                href="#"
                className="inline-block border-b border-black/45 pb-1 font-(family-name:--font-jost) text-lg uppercase tracking-[0.08em] text-[#39453a]"
              >
                Explore All
              </Link>
            </SectionReveal>
          </div>

          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {expertiseCards.map((card, index) => (
              <SectionReveal
                key={card.id}
                delay={index * 0.08}
                className="relative flex min-h-[420px] flex-col border border-black/10 bg-[#d0d8ce] p-9"
              >
                <span className="font-(family-name:--font-jost) text-3xl text-[#85907f]">
                  {card.id}
                </span>
                <h3 className="mt-9 max-w-sm font-(family-name:--font-cormorant) text-5xl leading-[0.92] text-[#2f3c2f]">
                  {card.title}
                </h3>
                <p className="mt-8 max-w-md font-(family-name:--font-jost) text-[1.3rem] leading-relaxed text-[#5e695f]">
                  {card.body}
                </p>
                <button
                  type="button"
                  className="mt-auto h-12 w-12 rounded-[2px] bg-[#253425] text-2xl text-[#dce4d9] transition-colors hover:bg-[#3a4b3a]"
                  aria-label={`Read more about ${card.title}`}
                >
                  →
                </button>
              </SectionReveal>
            ))}
          </div>
        </section>

        <section className="border-b border-black/12 py-12 sm:py-16 lg:py-20">
          <SectionReveal>
            <p className="mb-6 font-(family-name:--font-jost) text-sm uppercase tracking-[0.14em] text-[#7b8577] sm:text-base">
              Client Perspectives
            </p>
          </SectionReveal>
          <div className="grid gap-4 lg:grid-cols-3">
            {testimonials.map((item, index) => (
              <SectionReveal
                key={item.name}
                delay={index * 0.09}
                className="flex min-h-[360px] flex-col border border-black/10 bg-[#d3dbd0] p-8"
              >
                <blockquote className="font-(family-name:--font-cormorant) text-[2.1rem] leading-[1.02] text-[#2c382d]">
                  “{item.quote}”
                </blockquote>
                <div className="mt-auto flex items-center gap-4 border-t border-black/11 pt-7">
                  <div
                    role="img"
                    aria-label={item.name}
                    className="h-14 w-14 rounded-full bg-cover bg-center"
                    style={{ backgroundImage: `url(${item.avatar})` }}
                  />
                  <div>
                    <p className="font-(family-name:--font-jost) text-[1.2rem] uppercase tracking-[0.08em] text-[#424f43]">
                      {item.name}
                    </p>
                    <p className="font-(family-name:--font-jost) text-base uppercase tracking-[0.08em] text-[#818b7d]">
                      {item.role}
                    </p>
                  </div>
                </div>
              </SectionReveal>
            ))}
          </div>
        </section>

        <section className="border-b border-black/12 py-12 sm:py-16 lg:py-20">
          <SectionReveal>
            <ParallaxDepthShowcase
              src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/1011c60a-8855-4004-9fb1-f4ec3c3c6c6f_1600w.webp"
              alt="Panoramic modern residence integrated into a natural landscape"
              eyebrow="Perspective"
              title="Construct Your Masterpiece"
            />
          </SectionReveal>
        </section>

        <section className="border-b border-black/12 py-12 sm:py-16 lg:py-20">
          <div className="grid gap-8 lg:grid-cols-[minmax(0,0.95fr)_minmax(0,1.05fr)]">
            <SectionReveal className="space-y-8">
              <p className="max-w-2xl font-(family-name:--font-jost) text-[1.35rem] leading-relaxed text-[#5d685d] sm:text-[2rem]">
                Every structure we engineer reflects our dedication to establishing
                enduring, resilient habitats that accommodate future generations
                while respecting current topographies.
              </p>
              <SplitImageReveal
                src="https://images.unsplash.com/photo-1482192596544-9eb780fc7f66?auto=format&fit=crop&w=1200&q=80"
                alt="Coastal residence built with storm-resilient structural logic"
                className="h-[260px] sm:h-[340px]"
              />
            </SectionReveal>

            <SectionReveal delay={0.12}>
              <p className="mb-1 text-right font-(family-name:--font-jost) text-sm uppercase tracking-[0.16em] text-[#788272] sm:text-base">
                Metrics
              </p>
              <h3 className="font-(family-name:--font-cormorant) text-[clamp(2.2rem,5.2vw,5rem)] leading-[0.95] text-[#253024]">
                Forward-Thinking Spaces, Engineered for Longevity
              </h3>
              <dl className="mt-8 border-t border-black/12">
                {metrics.map(([label, value], index) => (
                  <div
                    key={label}
                    className={`grid gap-2 border-b border-black/10 py-4 font-(family-name:--font-jost) text-[1.15rem] text-[#586358] sm:grid-cols-[1fr_auto] sm:items-center sm:text-[1.7rem] ${
                      index === metrics.length - 1 ? "" : ""
                    }`}
                  >
                    <dt>{label}</dt>
                    <dd className="sm:text-right text-[#364336]">{value}</dd>
                  </div>
                ))}
              </dl>
            </SectionReveal>
          </div>
        </section>

        <section className="border-b border-black/12 py-12 sm:py-16 lg:py-20">
          <div className="grid gap-8 lg:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)]">
            <SectionReveal>
              <p className="font-(family-name:--font-jost) text-sm uppercase tracking-[0.16em] text-[#75806f] sm:text-base">
                Inquiries
              </p>
              <h2 className="mt-5 max-w-2xl font-(family-name:--font-cormorant) text-[clamp(2rem,5vw,6rem)] leading-[0.93] text-[#263226]">
                Let&apos;s discuss your next project.
              </h2>
              <div className="mt-24 space-y-8 font-(family-name:--font-jost) text-[#4f5a4f]">
                <div>
                  <p className="text-sm uppercase tracking-[0.15em] text-[#879183] sm:text-base">
                    Headquarters
                  </p>
                  <p className="mt-3 text-2xl leading-relaxed">
                    124 Vanguard Way
                    <br />
                    Architecture District
                    <br />
                    London, UK
                  </p>
                </div>
                <div>
                  <p className="text-sm uppercase tracking-[0.15em] text-[#879183] sm:text-base">
                    Direct Communications
                  </p>
                  <p className="mt-3 text-2xl leading-relaxed">
                    studio@vanguardis.com
                    <br />
                    +44 20 1234 5678
                  </p>
                </div>
              </div>
            </SectionReveal>

            <SectionReveal delay={0.12}>
              <form className="border border-black/10 bg-[#d1d9cf] p-6 sm:p-10">
                <fieldset className="space-y-6 sm:space-y-10">
                  <legend className="sr-only">Project inquiry form</legend>
                  <label className="block">
                    <span className="sr-only">Full Name</span>
                    <input
                      type="text"
                      name="fullName"
                      placeholder="Full Name"
                      className="w-full border-b border-black/18 bg-transparent px-1 pb-4 font-(family-name:--font-jost) text-[1.25rem] text-[#304030] placeholder:text-[#7f897a] outline-none transition-colors focus:border-[#364736]"
                    />
                  </label>
                  <label className="block">
                    <span className="sr-only">Email Address</span>
                    <input
                      type="email"
                      name="email"
                      placeholder="Email Address"
                      className="w-full border-b border-black/18 bg-transparent px-1 pb-4 font-(family-name:--font-jost) text-[1.25rem] text-[#304030] placeholder:text-[#7f897a] outline-none transition-colors focus:border-[#364736]"
                    />
                  </label>
                  <label className="block">
                    <span className="sr-only">Project Type</span>
                    <select
                      name="projectType"
                      defaultValue=""
                      className="w-full border-b border-black/18 bg-transparent px-1 pb-4 font-(family-name:--font-jost) text-[1.25rem] text-[#304030] outline-none transition-colors focus:border-[#364736]"
                    >
                      <option value="" disabled>
                        Project Type
                      </option>
                      <option value="residential">Residential</option>
                      <option value="commercial">Commercial</option>
                      <option value="institutional">Institutional</option>
                      <option value="mixed-use">Mixed Use</option>
                    </select>
                  </label>
                  <label className="block">
                    <span className="sr-only">Brief Description</span>
                    <textarea
                      name="brief"
                      rows={4}
                      placeholder="Brief Description"
                      className="w-full border-b border-black/18 bg-transparent px-1 pb-4 font-(family-name:--font-jost) text-[1.25rem] text-[#304030] placeholder:text-[#7f897a] outline-none transition-colors focus:border-[#364736]"
                    />
                  </label>
                </fieldset>
                <motion.button
                  whileHover={{ scale: 1.01 }}
                  whileTap={{ scale: 0.99 }}
                  transition={{ duration: 0.2 }}
                  type="submit"
                  className="mt-10 inline-flex w-full items-center justify-between bg-linear-to-r from-[#1f2e1f] to-[#2e422e] px-6 py-5 font-(family-name:--font-jost) text-lg uppercase tracking-[0.08em] text-[#e7ede3] sm:text-xl"
                >
                  Submit Inquiry <span aria-hidden>→</span>
                </motion.button>
              </form>
            </SectionReveal>
          </div>
        </section>

        
      </div>
      <footer className="min-w-full bg-[#2a3324]   px-6 py-10 sm:px-10 lg:px-14 sm:py-12">
        <SectionReveal className="mx-auto w-full max-w-[1480px]">
          <div className="relative overflow-hidden">
            <span
              aria-hidden
              className="pointer-events-none absolute right-0 top-1  text-[clamp(4rem,13vw,10rem)] leading-none text-white/10"
            >
              Vanguardis
            </span>

            <div className="relative grid gap-10 lg:grid-cols-[minmax(0,1.08fr)_minmax(0,0.92fr)]">
              <div>
                <h2 className="font-(family-name:--font-cormorant) text-[clamp(2.8rem,5vw,5rem)] leading-[0.9] text-white">
                  Vanguardis
                </h2>
                <p className="mt-6 max-w-xl font-(family-name:--font-jost) text-[1.12rem] leading-relaxed text-[#cad2c3] sm:text-[1.35rem]">
                  We forge advanced habitats by merging progressive structural
                  engineering with conscious material application and timeless
                  spatial character.
                </p>
                <Link
                  href="#"
                  className="mt-8 inline-flex items-center gap-2 border-b border-[#d8e0d5]/60 pb-1 font-(family-name:--font-jost) text-sm uppercase tracking-[0.12em] text-[#eaf0e4] transition-colors hover:text-white"
                >
                  Start a Conversation <span aria-hidden>↗</span>
                </Link>
              </div>

             
            </div>

            <div className="relative mt-12 border-t border-white/14 pt-8">
              <div className="flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
                <ul className="flex flex-wrap gap-x-7 gap-y-3 font-(family-name:--font-jost) text-sm uppercase tracking-[0.14em] text-[#d0d8ca] sm:text-base">
                  {navItems.map((item) => (
                    <li key={`footer-${item}`}>
                      <Link href="#" className="transition-colors hover:text-white">
                        {item}
                      </Link>
                    </li>
                  ))}
                </ul>
                <p className="font-(family-name:--font-jost) text-xs uppercase tracking-[0.14em] text-[#b9c2b1] sm:text-sm">
                  © 2024 Vanguardis Ltd. All rights reserved.
                </p>
              </div>
            </div>
          </div>
        </SectionReveal>
      </footer>
    </main>
  );
}

