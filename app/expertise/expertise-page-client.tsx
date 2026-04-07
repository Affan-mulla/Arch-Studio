"use client";

import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";
import { Footer } from "../components/footer";
import { Navbar } from "../components/navbar";
import {
  SectionReveal,
  SplitImageReveal,
} from "../sections/landing-page";

const services = [
  {
    title: "Spatial Architecture Design",
    description:
      "We construct spatial frameworks around climate, circulation, and social use patterns. Each design package balances aesthetic continuity with structural logic and long-term adaptability. Our team develops coordinated geometry systems to keep design intent consistent across all scales.",
  },
  {
    title: "Ecological Integration Strategy",
    description:
      "Ecology is integrated at concept stage, not appended at delivery. We map solar behavior, wind flow, and water cycles to shape passive performance from day one. This approach reduces operational load while preserving architectural clarity.",
  },
  {
    title: "Structural Engineering & Analysis",
    description:
      "We run iterative analysis to optimize efficiency, constructability, and resilience under real-world load cases. Complex systems are translated into clear technical documentation for contractors and consultants. The result is robust performance without unnecessary material burden.",
  },
  {
    title: "Lifecycle Planning & Execution",
    description:
      "Our lifecycle plans align design, procurement, and build sequencing to reduce delays and waste. We identify long-term maintenance implications early to protect future operational budgets. Every milestone is managed with clear accountability and measurable criteria.",
  },
  {
    title: "Material Sourcing & Specification",
    description:
      "Material specification is guided by durability, embodied carbon, and regional supply stability. We prioritize transparent provenance and tested performance data across every category. Specification schedules are coordinated for both technical compliance and visual integrity.",
  },
  {
    title: "Post-Occupancy Evaluation",
    description:
      "After completion, we evaluate thermal behavior, occupant comfort, and energy patterns against design targets. Findings are fed back into future projects through documented lessons and revised standards. This closes the loop between design intent and lived performance.",
  },
];

const processSteps = [
  {
    id: "01",
    title: "Discovery",
    body: "We align goals, constraints, climate conditions, and stakeholder priorities into one clear brief. This stage defines performance targets before design options begin.",
  },
  {
    id: "02",
    title: "Schematic",
    body: "Spatial direction and structural concepts are tested through fast comparative studies. We evaluate multiple scenarios to select the most resilient and coherent path.",
  },
  {
    id: "03",
    title: "Design Development",
    body: "Architecture, structure, and systems are coordinated into a unified technical model. Material decisions and detailing standards are locked for delivery clarity.",
  },
  {
    id: "04",
    title: "Construction",
    body: "We collaborate with on-site teams to maintain precision through execution. Design intent is protected while adapting to practical realities and sequencing constraints.",
  },
  {
    id: "05",
    title: "Handover & Legacy",
    body: "Commissioning, documentation, and long-term care strategies are finalized for continuity. We hand over structures prepared for decades of reliable performance.",
  },
];

const toolkit = [
  "Revit",
  "Rhino 3D",
  "Grasshopper",
  "Enscape",
  "Passive House Planning",
  "Cross-Laminated Timber",
  "Rammed Earth",
  "Recycled Steel",
];

export function ExpertisePageClient() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <main className="relative overflow-x-clip bg-[#d8e0d5] text-[#2a3329]">
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

        <section className="border-b border-black/12 py-12 sm:py-16 lg:py-20">
          <SectionReveal>
            <p className="font-(family-name:--font-jost) text-xs uppercase tracking-[0.18em] text-[#7b8577] sm:text-sm">
              What We Do
            </p>
            <h1 className="mt-5 font-(family-name:--font-cormorant) text-[clamp(3.3rem,8.6vw,7.5rem)] leading-[0.92] text-[#263226]">
              Precision at Every Scale
            </h1>
            <p className="mt-8 max-w-4xl font-(family-name:--font-jost) text-[1.15rem] leading-relaxed text-[#687368] sm:text-[1.5rem]">
              Vanguardis combines architecture, engineering, and ecological
              intelligence into one coordinated workflow designed for long-term
              performance and civic relevance.
            </p>
            <div className="mt-10 grid gap-3 border-y border-black/12 py-4 font-(family-name:--font-jost) uppercase tracking-[0.14em] text-[#6f796c] sm:grid-cols-3 sm:text-lg">
              <span>47 Projects</span>
              <span className="sm:text-center">12 Countries</span>
              <span className="sm:text-right">120yr Lifespan Est.</span>
            </div>
          </SectionReveal>
        </section>

        <section className="border-b border-black/12 py-12 sm:py-16 lg:py-20">
          <SectionReveal>
            <p className="font-(family-name:--font-jost) text-xs uppercase tracking-[0.18em] text-[#7b8577] sm:text-sm">
              Services
            </p>
            <h2 className="mt-4 font-(family-name:--font-cormorant) text-[clamp(2.2rem,5vw,4.8rem)] leading-[0.95] text-[#263226]">
              Our Full Spectrum
            </h2>
          </SectionReveal>

          <div className="mt-8">
            {services.map((service, index) => {
              const isOpen = openIndex === index;
              return (
                <SectionReveal
                  key={service.title}
                  delay={index * 0.05}
                  className="border-b border-black/12"
                >
                  <button
                    type="button"
                    onClick={() => setOpenIndex(isOpen ? null : index)}
                    className="flex w-full items-center justify-between py-6 text-left"
                  >
                    <h3 className="font-(family-name:--font-cormorant) text-5xl leading-[0.94] text-[#2c382d]">
                      {service.title}
                    </h3>
                    <motion.span
                      animate={{ rotate: isOpen ? 90 : 0 }}
                      transition={{ duration: 0.25 }}
                      className="ml-4 text-4xl text-[#5f6a5f]"
                    >
                      →
                    </motion.span>
                  </button>
                  <AnimatePresence initial={false}>
                    {isOpen ? (
                      <motion.div
                        key="panel"
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
                        className="overflow-hidden"
                      >
                        <p className="pb-6 font-(family-name:--font-jost) text-lg leading-relaxed text-[#5f6a5f] sm:text-[1.2rem]">
                          {service.description}
                        </p>
                      </motion.div>
                    ) : null}
                  </AnimatePresence>
                </SectionReveal>
              );
            })}
          </div>
        </section>

        <section className="border-b border-black/12 py-12 sm:py-16 lg:py-20">
          <SectionReveal>
            <p className="font-(family-name:--font-jost) text-xs uppercase tracking-[0.18em] text-[#7b8577] sm:text-sm">
              How We Work
            </p>
            <h2 className="mt-4 font-(family-name:--font-cormorant) text-[clamp(2.2rem,5vw,4.8rem)] leading-[0.95] text-[#263226]">
              From Brief to Building
            </h2>
          </SectionReveal>

          <div className="mt-8 space-y-0">
            {processSteps.map((step, index) => (
              <SectionReveal
                key={step.id}
                delay={index * 0.06}
                className="relative border-l-2 border-[#2c3c2d] pl-6"
              >
                {index !== processSteps.length - 1 ? (
                  <span className="absolute left-0 top-12 h-full w-px bg-black/12" />
                ) : null}
                <div className="border-b border-black/12 pb-8 pt-2">
                  <p className="font-(family-name:--font-jost) text-3xl text-[#7f897e]">
                    {step.id}
                  </p>
                  <h3 className="mt-2 font-(family-name:--font-cormorant) text-5xl leading-[0.94] text-[#2c382d]">
                    {step.title}
                  </h3>
                  <p className="mt-3 font-(family-name:--font-jost) text-lg leading-relaxed text-[#5f6a5f] sm:text-[1.2rem]">
                    {step.body}
                  </p>
                </div>
              </SectionReveal>
            ))}
          </div>
        </section>

        <section className="border-b border-black/12 py-12 sm:py-16 lg:py-20">
          <SectionReveal>
            <SplitImageReveal
              src="https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&w=1400&q=80"
              alt="Engineering blueprint detail"
              className="h-[280px] sm:h-[420px] lg:h-[560px]"
            />
          </SectionReveal>
        </section>

        <section className="border-b border-black/12 py-12 sm:py-16 lg:py-20">
          <SectionReveal>
            <p className="font-(family-name:--font-jost) text-xs uppercase tracking-[0.18em] text-[#7b8577] sm:text-sm">
              Built With
            </p>
            <h2 className="mt-4 font-(family-name:--font-cormorant) text-[clamp(2.2rem,5vw,4.8rem)] leading-[0.95] text-[#263226]">
              Our Toolkit
            </h2>
          </SectionReveal>

          <div className="mt-9 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {toolkit.map((tool, index) => (
              <SectionReveal
                key={tool}
                delay={index * 0.04}
                className="border border-black/10 bg-[#d0d8ce] p-6"
              >
                <p className="font-(family-name:--font-jost) text-[1.1rem] uppercase tracking-[0.12em] text-[#2a3329] sm:text-[1.2rem]">
                  {tool}
                </p>
              </SectionReveal>
            ))}
          </div>
        </section>
      </div>

      <Footer />
    </main>
  );
}
