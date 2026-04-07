"use client";

import { motion } from "framer-motion";
import { BreadcrumbJsonLd } from "../components/json-ld";
import { Footer } from "../components/footer";
import { Navbar } from "../components/navbar";
import { ParallaxDepthShowcase } from "../components/ui/parallax-depth-showcase";
import { SectionReveal } from "../components/ui/section-reveal";
import { SplitImageReveal } from "../components/ui/split-image-reveal";

const team = [
  {
    name: "Arjun Mehta",
    role: "Principal Architect",
    bio: "Leads context-driven design systems that balance structural rigor and cultural memory.",
    image:
      "https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=400&q=80",
  },
  {
    name: "Lena Hoffmann",
    role: "Structural Lead",
    bio: "Transforms engineering complexity into resilient spatial frameworks with elegant clarity.",
    image:
      "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?auto=format&fit=crop&w=400&q=80",
  },
  {
    name: "Marcus Lin",
    role: "Ecology Strategist",
    bio: "Integrates low-carbon material logic and passive systems into every project lifecycle.",
    image:
      "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=400&q=80",
  },
  {
    name: "Elena Rostova",
    role: "Project Director",
    bio: "Orchestrates interdisciplinary teams from concept to handover with precision and calm.",
    image:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=400&q=80",
  },
];

const principles = [
  {
    id: "01",
    title: "Ecological Stewardship",
    body: "Every proposal is evaluated against climate impact and site-specific ecological resilience. We design to reduce long-term resource extraction, not only short-term construction cost.",
  },
  {
    id: "02",
    title: "Structural Honesty",
    body: "Our buildings reveal how they stand and why they endure. Materials are selected for performance and dignity, allowing structural expression to remain legible through time.",
  },
  {
    id: "03",
    title: "Spatial Generosity",
    body: "We shape light, circulation, and proportion to support human wellbeing at every scale. A generous plan anticipates change and remains useful for generations.",
  },
];

export function StudioPageClient() {
  return (
    <main className="relative overflow-x-clip bg-[#d8e0d5] text-[#2a3329]">
      <BreadcrumbJsonLd
        items={[
          { name: "Home", href: "/" },
          { name: "Studio", href: "/studio" },
        ]}
      />
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
              Est. 2018
            </p>
            <h1 className="mt-5 font-(family-name:--font-cormorant) text-[clamp(2.6rem,9.2vw,8.3rem)] leading-[0.92] text-[#263226]">
              We Build for the <span className="italic">Next</span> Century
            </h1>
            <p className="mt-8 max-w-4xl font-(family-name:--font-jost) text-[1.2rem] leading-relaxed text-[#687368] sm:text-[1.65rem]">
              Vanguardis was founded on a simple conviction: architecture should
              outlast trends and serve future climates with intelligence. We work
              at the intersection of engineering precision, ecological ethics,
              and enduring civic value.
            </p>
          </SectionReveal>
        </section>

        <section className="border-b border-black/12 py-12 sm:py-16 lg:py-20">
          <div className="grid gap-8 lg:grid-cols-[minmax(0,1fr)_minmax(0,0.95fr)] lg:items-start">
            <SectionReveal>
              <blockquote className="font-(family-name:--font-cormorant) text-[clamp(2.5rem,5vw,4rem)] leading-[0.96] text-[#263226]">
                &ldquo;We design structures as long-term participants in their
                landscapes, not temporary objects within them.&rdquo;
              </blockquote>
              <p className="mt-7 font-(family-name:--font-jost) text-lg leading-relaxed text-[#5f6a5f] sm:text-[1.35rem]">
                Our studio develops architecture through an integrated process
                where structure, materials, and environmental systems evolve
                together from the earliest sketch.
              </p>
              <p className="mt-5 font-(family-name:--font-jost) text-lg leading-relaxed text-[#5f6a5f] sm:text-[1.35rem]">
                The result is a body of work that is materially honest,
                climate-responsive, and spatially generous for the communities it
                serves.
              </p>
            </SectionReveal>

            <SectionReveal delay={0.12}>
              <SplitImageReveal
                src="https://images.unsplash.com/photo-1486325212027-8081e485255e?auto=format&fit=crop&w=1200&q=80"
                alt="Architecture studio process and drafting"
                className="h-[320px] sm:h-[480px]"
                isPriority
              />
            </SectionReveal>
          </div>
        </section>

        <section className="border-b border-black/12 py-12 sm:py-16 lg:py-20">
          <SectionReveal>
            <p className="font-(family-name:--font-jost) text-xs uppercase tracking-[0.18em] text-[#7b8577] sm:text-sm">
              The People
            </p>
            <h2 className="mt-4 font-(family-name:--font-cormorant) text-[clamp(2.2rem,5.2vw,5rem)] leading-[0.95] text-[#263226]">
              Minds Behind the Studio
            </h2>
          </SectionReveal>

          <div className="mt-10 grid gap-4 md:grid-cols-2">
            {team.map((member, index) => (
              <SectionReveal
                key={member.name}
                delay={index * 0.07}
              >
                <motion.div
                  whileHover={{ y: -4, boxShadow: "0 8px 32px rgba(0,0,0,0.08)" }}
                  transition={{ duration: 0.22, ease: [0.22, 1, 0.36, 1] }}
                  className="border border-black/10 bg-[#d3dbd0] p-6"
                >
                  <div
                    className="h-64 rounded-sm bg-cover bg-center"
                    style={{ backgroundImage: `url(${member.image})` }}
                    aria-label={member.name}
                    role="img"
                  />
                  <h3 className="mt-5 font-(family-name:--font-cormorant) text-5xl leading-[0.95] text-[#2c382d]">
                    {member.name}
                  </h3>
                  <p className="mt-2 font-(family-name:--font-jost) text-xs uppercase tracking-[0.16em] text-[#7d8678] sm:text-sm">
                    {member.role}
                  </p>
                  <p className="mt-4 font-(family-name:--font-jost) text-lg leading-relaxed text-[#5e695f] sm:text-[1.2rem]">
                    {member.bio}
                  </p>
                </motion.div>
              </SectionReveal>
            ))}
          </div>
        </section>

        <section className="border-b border-black/12 py-12 sm:py-16 lg:py-20">
          <SectionReveal>
            <p className="font-(family-name:--font-jost) text-xs uppercase tracking-[0.18em] text-[#7b8577] sm:text-sm">
              Principles
            </p>
            <h2 className="mt-4 font-(family-name:--font-cormorant) text-[clamp(2.2rem,5.2vw,5rem)] leading-[0.95] text-[#263226]">
              What Guides Every Decision
            </h2>
          </SectionReveal>

          <div className="mt-10">
            {principles.map((item, index) => (
              <SectionReveal
                key={item.id}
                delay={index * 0.08}
                className="grid gap-4 border-b border-black/12 py-7 md:grid-cols-[90px_minmax(0,1fr)]"
              >
                <span className="font-(family-name:--font-jost) text-3xl text-[#7f897e]">
                  {item.id}
                </span>
                <div>
                  <h3 className="font-(family-name:--font-cormorant) text-5xl leading-[0.95] text-[#2c382d]">
                    {item.title}
                  </h3>
                  <p className="mt-3 font-(family-name:--font-jost) text-lg leading-relaxed text-[#5f6a5f] sm:text-[1.2rem]">
                    {item.body}
                  </p>
                </div>
              </SectionReveal>
            ))}
          </div>
        </section>

        <section className="border-b border-black/12 py-12 sm:py-16 lg:py-20">
          <SectionReveal>
            <ParallaxDepthShowcase
              src="https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1600&q=80"
              alt="Vanguardis studio headquarters"
              eyebrow="Our Home"
              title="Rooted in London, Building Globally"
            />
          </SectionReveal>
        </section>
      </div>

      <Footer />
    </main>
  );
}
