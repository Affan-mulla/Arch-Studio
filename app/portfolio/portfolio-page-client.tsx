"use client";

import { AnimatePresence, motion } from "framer-motion";
import { useMemo, useState } from "react";
import { Footer } from "../components/footer";
import { Navbar } from "../components/navbar";
import { SectionReveal } from "../components/ui/section-reveal";
import { SplitImageReveal } from "../components/ui/split-image-reveal";

type Category = "All" | "Residential" | "Commercial" | "Institutional" | "Mixed-Use";

const filters: Category[] = [
  "All",
  "Residential",
  "Commercial",
  "Institutional",
  "Mixed-Use",
];

const projects = [
  {
    name: "Alpine Retreat",
    location: "Verbier",
    year: "2023",
    category: "Residential" as Category,
    description: "Minimalist hillside dwelling anchored to alpine contours.",
    image:
      "https://images.unsplash.com/photo-1451976426598-a7593bd6d0b2?auto=format&fit=crop&w=800&q=80",
    height: "h-[320px]",
  },
  {
    name: "Meridian HQ",
    location: "London",
    year: "2024",
    category: "Commercial" as Category,
    description: "Workplace campus built around daylight and flexible collaboration.",
    image:
      "https://images.unsplash.com/photo-1486325212027-8081e485255e?auto=format&fit=crop&w=800&q=80",
    height: "h-[480px]",
  },
  {
    name: "The Foundry Arts Centre",
    location: "Berlin",
    year: "2022",
    category: "Institutional" as Category,
    description: "Adaptive reuse converting industrial shell into a civic arts hub.",
    image:
      "https://images.unsplash.com/photo-1519999482648-25049ddd37b1?auto=format&fit=crop&w=800&q=80",
    height: "h-[320px]",
  },
  {
    name: "Coastal Residence",
    location: "Cornwall",
    year: "2023",
    category: "Residential" as Category,
    description: "Storm-resilient home merging thermal mass with ocean views.",
    image:
      "https://images.unsplash.com/photo-1482192596544-9eb780fc7f66?auto=format&fit=crop&w=800&q=80",
    height: "h-[480px]",
  },
  {
    name: "Nova Mixed-Use",
    location: "Amsterdam",
    year: "2024",
    category: "Mixed-Use" as Category,
    description: "Urban block blending housing, workspaces, and public terraces.",
    image:
      "https://images.unsplash.com/photo-1487958449943-2429e8be8625?auto=format&fit=crop&w=800&q=80",
    height: "h-[320px]",
  },
  {
    name: "Solaris School",
    location: "Copenhagen",
    year: "2022",
    category: "Institutional" as Category,
    description: "Learning environment optimized for passive comfort and adaptability.",
    image:
      "https://images.unsplash.com/photo-1448630360428-65456885c650?auto=format&fit=crop&w=800&q=80",
    height: "h-[480px]",
  },
];

export function PortfolioPageClient() {
  const [activeFilter, setActiveFilter] = useState<Category>("All");

  const filteredProjects = useMemo(
    () =>
      activeFilter === "All"
        ? projects
        : projects.filter((project) => project.category === activeFilter),
    [activeFilter],
  );

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
              Selected Works
            </p>
            <h1 className="mt-5 font-(family-name:--font-cormorant) text-[clamp(3.1rem,8.6vw,7.5rem)] leading-[0.92] text-[#263226]">
              47 Projects. One Standard.
            </h1>
          </SectionReveal>

          <SectionReveal delay={0.08} className="mt-8 flex flex-wrap gap-3">
            {filters.map((filter) => {
              const active = activeFilter === filter;
              return (
                <button
                  key={filter}
                  type="button"
                  onClick={() => setActiveFilter(filter)}
                  className={`rounded-full border px-5 py-2 font-(family-name:--font-jost) text-xs uppercase tracking-[0.14em] transition-colors sm:text-sm ${
                    active
                      ? "border-[#253425] bg-[#253425] text-white"
                      : "border-black/20 bg-transparent text-[#5f6a5f] hover:border-black/40"
                  }`}
                >
                  {filter}
                </button>
              );
            })}
          </SectionReveal>
        </section>

        <section className="border-b border-black/12 py-12 sm:py-16 lg:py-20">
          <AnimatePresence mode="popLayout">
            <div className="grid gap-6 md:grid-cols-2">
              {filteredProjects.map((project, index) => (
                <motion.div
                  key={project.name}
                  layout
                  initial={{ opacity: 0, y: 16, scale: 0.98 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.97 }}
                  transition={{
                    duration: 0.38,
                    ease: [0.22, 1, 0.36, 1],
                    delay: index * 0.04,
                  }}
                >
                  <motion.article
                    whileHover={{ y: -4, boxShadow: "0 10px 40px rgba(0,0,0,0.09)" }}
                    transition={{ duration: 0.22 }}
                    className="rounded-sm border border-black/10 bg-[#d3dbd0] p-4 cursor-pointer"
                  >
                    <SplitImageReveal
                      src={project.image}
                      alt={project.name}
                      className={project.height}
                    />
                    <div className="pt-5">
                      <h2 className="font-(family-name:--font-cormorant) text-[2rem] leading-[0.95] text-[#2c382d] sm:text-[2.3rem]">
                        {project.name}
                      </h2>
                      <p className="mt-2 font-(family-name:--font-jost) text-xs uppercase tracking-[0.16em] text-[#7b8577] sm:text-sm">
                        {project.location} {project.year}
                      </p>
                      <p className="mt-3 inline-block border border-black/12 px-2 py-1 font-(family-name:--font-jost) text-[10px] uppercase tracking-[0.16em] text-[#5f6a5f] sm:text-xs">
                        {project.category}
                      </p>
                      <p className="mt-3 font-(family-name:--font-jost) text-lg leading-relaxed text-[#5e695f] sm:text-[1.1rem]">
                        {project.description}
                      </p>
                    </div>
                  </motion.article>
                </motion.div>
              ))}
            </div>
          </AnimatePresence>
        </section>
      </div>

      <section className="border-b border-black/12 bg-[#2a3324] py-12 text-center sm:py-16 lg:py-20">
        <div className="mx-auto w-full max-w-330 px-4 sm:px-6 lg:px-10">
          <SectionReveal>
            <h2 className="font-(family-name:--font-cormorant) text-[clamp(2.4rem,5.8vw,5.2rem)] leading-[0.94] text-white">
              Have a Project in Mind?
            </h2>
            <p className="mx-auto mt-4 max-w-2xl font-(family-name:--font-jost) text-[1.1rem] leading-relaxed text-[#c8d0c4] sm:text-[1.3rem]">
              Let&apos;s explore how your brief can become a resilient and
              meaningful built environment.
            </p>
            <a
              href="#"
              className="mt-8 inline-flex items-center justify-between gap-4 bg-linear-to-r from-[#253425] to-[#2e422e] px-6 py-4 font-(family-name:--font-jost) text-sm uppercase tracking-[0.1em] text-[#e7ede3] sm:text-base"
            >
              Begin the Conversation <span aria-hidden>→</span>
            </a>
          </SectionReveal>
        </div>
      </section>

      <Footer />
    </main>
  );
}
