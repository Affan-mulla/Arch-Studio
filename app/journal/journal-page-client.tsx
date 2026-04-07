"use client";

import { motion } from "framer-motion";
import { BreadcrumbJsonLd } from "../components/json-ld";
import { Footer } from "../components/footer";
import { Navbar } from "../components/navbar";
import { SectionReveal } from "../components/ui/section-reveal";
import { SplitImageReveal } from "../components/ui/split-image-reveal";

const articles = [
  {
    title: "The Ethics of Demolition",
    tag: "Opinion",
    date: "Jan 2024",
    excerpt:
      "Demolition is often framed as inevitability, yet many sites can be transformed through strategic reuse. We examine when removal is justified and when reinvention is the more responsible path.",
    image:
      "https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&w=600&q=80",
  },
  {
    title: "Timber: A Structural Renaissance",
    tag: "Material",
    date: "Feb 2024",
    excerpt:
      "Mass timber systems are redefining what low-carbon urban construction can achieve. We look at detailing, fire strategy, and long-span opportunities emerging across Europe.",
    image:
      "https://images.unsplash.com/photo-1487958449943-2429e8be8625?auto=format&fit=crop&w=600&q=80",
  },
  {
    title: "Measuring What Matters in Net Zero",
    tag: "Research",
    date: "Dec 2023",
    excerpt:
      "Operational efficiency is only one part of the equation. This essay proposes practical benchmarks for embodied carbon, adaptability, and maintenance overhead.",
    image:
      "https://images.unsplash.com/photo-1518005068251-37900150dfca?auto=format&fit=crop&w=600&q=80",
  },
  {
    title: "The Silence of Good Acoustics",
    tag: "Design",
    date: "Nov 2023",
    excerpt:
      "Acoustic comfort often determines how spaces are truly experienced. We explore material assemblies and spatial sequencing that shape sonic clarity.",
    image:
      "https://images.unsplash.com/photo-1448630360428-65456885c650?auto=format&fit=crop&w=600&q=80",
  },
  {
    title: "Clients Who Changed Our Thinking",
    tag: "Studio",
    date: "Oct 2023",
    excerpt:
      "Certain collaborations permanently shift studio standards and process. We reflect on the briefs that challenged assumptions and improved our work.",
    image:
      "https://images.unsplash.com/photo-1519999482648-25049ddd37b1?auto=format&fit=crop&w=600&q=80",
  },
];

export function JournalPageClient() {
  return (
    <main className="relative  overflow-x-clip bg-[#d8e0d5] text-[#2a3329]">
      <BreadcrumbJsonLd
        items={[
          { name: "Home", href: "/" },
          { name: "Journal", href: "/journal" },
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
              Thinking Out Loud
            </p>
            <h1 className="mt-5 font-(family-name:--font-cormorant) text-[clamp(3.1rem,8.6vw,7.5rem)] leading-[0.92] text-[#263226]">
              The Vanguardis Journal
            </h1>
            <p className="mt-8 max-w-4xl font-(family-name:--font-jost) text-[1.15rem] leading-relaxed text-[#687368] sm:text-[1.5rem]">
              Our journal gathers essays, field observations, and technical notes
              from ongoing practice. It is where architecture, material
              intelligence, and climate research meet editorial clarity.
            </p>
          </SectionReveal>
        </section>

        <section className="border-b border-black/12 py-12 sm:py-16 lg:py-20">
          <div className="grid gap-8 border border-black/10 bg-[#d3dbd0] p-6 lg:grid-cols-[minmax(0,1fr)_minmax(0,0.92fr)] lg:items-center">
            <SectionReveal>
              <p className="font-(family-name:--font-jost) text-xs uppercase tracking-[0.16em] text-[#7b8577] sm:text-sm">
                Essay · March 2024
              </p>
              <h2 className="mt-4 font-(family-name:--font-cormorant) text-[clamp(2.4rem,5.3vw,3.5rem)] leading-[0.95] text-[#2c382d]">
                What Passive Design Owes to Ancient Persia
              </h2>
              <p className="mt-5 font-(family-name:--font-jost) text-lg leading-relaxed text-[#5f6a5f] sm:text-[1.25rem]">
                Long before contemporary sustainability frameworks, desert
                architecture mastered thermal moderation through geometry,
                ventilation, and shade. We trace those lessons into present-day
                passive systems.
              </p>
              <a
                href="#"
                className="mt-6 inline-block border-b border-[#2d3d2d] pb-1 font-(family-name:--font-jost) text-sm uppercase tracking-[0.12em] text-[#304030]"
              >
                Read Article →
              </a>
            </SectionReveal>

            <SectionReveal delay={0.1}>
              <SplitImageReveal
                src="https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1200&q=80"
                alt="Passive architecture in warm climate"
                className="h-[360px]"
                isPriority
              />
            </SectionReveal>
          </div>
        </section>

        <section className="border-b border-black/12 py-12 sm:py-16 lg:py-20">
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {articles.map((article, index) => (
              <SectionReveal
                key={article.title}
                delay={index * 0.05}
              >
                <motion.div
                  whileHover={{ y: -4, boxShadow: "0 8px 32px rgba(0,0,0,0.08)" }}
                  transition={{ duration: 0.22, ease: [0.22, 1, 0.36, 1] }}
                  className="border border-black/10 bg-[#d3dbd0] p-4"
                >
                  <SplitImageReveal
                    src={article.image}
                    alt={article.title}
                    className="h-[220px]"
                  />
                  <p className="mt-4 font-(family-name:--font-jost) text-xs uppercase tracking-[0.14em] text-[#7b8577] sm:text-sm">
                    {article.tag} · {article.date}
                  </p>
                  <h3 className="mt-2 font-(family-name:--font-cormorant) text-[1.8rem] leading-[0.95] text-[#2c382d] sm:text-[2.1rem]">
                    {article.title}
                  </h3>
                  <p className="mt-3 font-(family-name:--font-jost) text-lg leading-relaxed text-[#5f6a5f] sm:text-[1.1rem]">
                    {article.excerpt}
                  </p>
                  <a
                    href="#"
                    className="mt-5 inline-block border-b border-black/20 pb-1 font-(family-name:--font-jost) text-sm uppercase tracking-[0.12em] text-[#304030]"
                  >
                    Read →
                  </a>
                </motion.div>
              </SectionReveal>
            ))}
          </div>
        </section>
      </div>

      <section className="mt-0 overflow-hidden border-b border-black/12 bg-[#2a3324] py-12 sm:py-16 lg:py-20">
        <div className="mx-auto w-full max-w-330 px-4 sm:px-6 lg:px-10">
          <SectionReveal>
            <h2 className="font-(family-name:--font-cormorant) text-[clamp(2.4rem,5.5vw,4.8rem)] leading-[0.95] text-white">
              Ideas Worth Returning To
            </h2>
            <p className="mt-4 max-w-2xl font-(family-name:--font-jost) text-[1.1rem] leading-relaxed text-[#c8d0c4] sm:text-[1.3rem]">
              Subscribe to receive essays, research notes, and project thinking
              from the studio.
            </p>
            <div className="mt-8 flex flex-col gap-4 sm:flex-row sm:items-end">
              <input
                type="email"
                placeholder="Email address"
                className="w-full border-b border-white/30 bg-transparent pb-3 font-(family-name:--font-jost) text-white placeholder:text-[#b9c2b1] outline-none sm:max-w-md"
              />
              <button
                type="button"
                className="inline-flex items-center justify-center bg-[#d8e0d5] px-6 py-3 font-(family-name:--font-jost) text-sm uppercase tracking-[0.12em] text-[#2a3324]"
                onClick={() => {
                  // Placeholder newsletter action
                }}
              >
                Subscribe
              </button>
            </div>
          </SectionReveal>
        </div>
      </section>

      <Footer />
    </main>
  );
}
