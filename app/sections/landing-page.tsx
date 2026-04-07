"use client";

import { lazy, Suspense } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { Footer } from "../components/footer";
import { Navbar } from "../components/navbar";
import { InfinitePartnerTicker } from "../components/ui/infinite-ticker";
import { SectionReveal } from "../components/ui/section-reveal";
import { SplitImageReveal } from "../components/ui/split-image-reveal";

const LazyParallax = lazy(() =>
  import("../components/ui/parallax-depth-showcase").then((m) => ({
    default: m.ParallaxDepthShowcase,
  })),
);

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
        <Navbar />

        <section className=" py-10 sm:py-14 lg:py-16">
          <div className="grid gap-10 lg:grid-cols-[minmax(0,1fr)_340px] lg:items-end">
            <SectionReveal>
              <h1 className="font-(family-name:--font-cormorant) text-[clamp(2.6rem,9.2vw,8.3rem)] leading-[0.92] text-[#263226]">
                Architectural <span className="italic font-thin">Innovations</span>
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
                isPriority
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

        <motion.div
          initial={{ opacity: 0, y: -8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.2, duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="flex flex-col items-center gap-2 border-b border-black/12 py-6"
        >
          <span className="font-(family-name:--font-jost) text-[0.65rem] uppercase tracking-[0.22em] text-[#9aa39a]">
            Scroll to explore
          </span>
          <motion.span
            animate={{ y: [0, 6, 0] }}
            transition={{ duration: 1.6, repeat: Infinity, ease: "easeInOut" }}
            className="text-lg text-[#9aa39a]"
            aria-hidden
          >
            ↓
          </motion.span>
        </motion.div>

        

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
              >
                <motion.div
                  whileHover={{ y: -5, boxShadow: "0 12px 40px rgba(0,0,0,0.1)" }}
                  transition={{ duration: 0.22, ease: [0.22, 1, 0.36, 1] }}
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
                </motion.div>
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
              >
                <motion.div
                  whileHover={{ y: -4, boxShadow: "0 8px 32px rgba(0,0,0,0.08)" }}
                  transition={{ duration: 0.22, ease: [0.22, 1, 0.36, 1] }}
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
                </motion.div>
              </SectionReveal>
            ))}
          </div>
        </section>

        <section className="border-b border-black/12 py-12 sm:py-16 lg:py-20">
          <SectionReveal>
            <Suspense
              fallback={
                <div className="relative mb-10 h-[340px] bg-[#d0d8ce] sm:h-[470px] lg:h-[720px] animate-pulse" />
              }
            >
              <LazyParallax
                src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/1011c60a-8855-4004-9fb1-f4ec3c3c6c6f_1600w.webp"
                alt="Panoramic modern residence integrated into a natural landscape"
                eyebrow="Perspective"
                title="Construct Your Masterpiece"
              />
            </Suspense>
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
                  <div className="relative">
                    <label className="block">
                      <span className="sr-only">Project Type</span>
                      <select
                        name="projectType"
                        defaultValue=""
                        className="w-full appearance-none cursor-pointer border-b border-black/18 bg-transparent px-1 pb-4 font-(family-name:--font-jost) text-[1.25rem] text-[#304030] outline-none transition-colors focus:border-[#364736]"
                      >
                        <option value="" disabled>
                          Project Type
                        </option>
                        <option value="residential">Residential</option>
                        <option value="commercial">Commercial</option>
                        <option value="institutional">Institutional</option>
                        <option value="mixed-use">Mixed Use</option>
                      </select>
                      <span
                        aria-hidden
                        className="pointer-events-none absolute right-1 bottom-4 text-[#7f897a] text-sm"
                      >
                        ↓
                      </span>
                    </label>
                  </div>
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
      <Footer />
    </main>
  );
}

