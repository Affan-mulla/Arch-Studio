"use client";

import { Footer } from "../components/footer";
import { Navbar } from "../components/navbar";
import {
  InfinitePartnerTicker,
  ParallaxDepthShowcase,
  SectionReveal,
  SplitImageReveal,
} from "../sections/landing-page";

const manifesto = [
  {
    statement: "We build for climates we cannot yet predict.",
    body: "Our design logic anticipates thermal volatility, extreme rainfall, and shifting urban systems. Every decision is calibrated for future environmental uncertainty rather than present-day averages.",
    image:
      "https://images.unsplash.com/photo-1487958449943-2429e8be8625?auto=format&fit=crop&w=900&q=80",
  },
  {
    statement: "Material honesty is not a trend - it is a moral position.",
    body: "We avoid decorative excess that conceals performance failure. Materials are selected for durability, provenance, and life-cycle impact, allowing structure and skin to communicate truthfully.",
    image:
      "https://images.unsplash.com/photo-1448630360428-65456885c650?auto=format&fit=crop&w=900&q=80",
  },
  {
    statement: "Every structure we raise should outlive its architect.",
    body: "Longevity is central to our process: adaptable plans, robust assemblies, and maintenance-aware detailing. We measure success by generational usefulness, not momentary visual effect.",
    image:
      "https://images.unsplash.com/photo-1519999482648-25049ddd37b1?auto=format&fit=crop&w=900&q=80",
  },
];

export function VisionPageClient() {
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
            <ParallaxDepthShowcase
              src="https://images.unsplash.com/photo-1518005068251-37900150dfca?auto=format&fit=crop&w=1600&q=80"
              alt="Visionary architecture under open sky"
              eyebrow="Our Philosophy"
              title="Architecture as a Living System"
            />
          </SectionReveal>
          <SectionReveal delay={0.12}>
            <p className="mx-auto mt-8 max-w-3xl text-center font-(family-name:--font-jost) text-[1.2rem] leading-relaxed text-[#5f6a5f] sm:text-[1.6rem]">
              We treat architecture as an evolving relationship between structure,
              climate, culture, and time. Vision for us is not abstraction - it
              is a measurable commitment to enduring ecological and social value.
            </p>
          </SectionReveal>
        </section>

        <section className="border-b border-black/12 py-12 sm:py-16 lg:py-20">
          <SectionReveal>
            <p className="font-(family-name:--font-jost) text-xs uppercase tracking-[0.18em] text-[#7b8577] sm:text-sm">
              Manifesto
            </p>
          </SectionReveal>

          <div className="mt-8 space-y-12">
            {manifesto.map((item, index) => {
              const imageFirst = index % 2 === 1;
              return (
                <SectionReveal
                  key={item.statement}
                  delay={index * 0.08}
                  className="grid gap-8 border-b border-black/12 pb-10 lg:grid-cols-2 lg:items-center"
                >
                  <div className={imageFirst ? "lg:order-2" : ""}>
                    <SplitImageReveal
                      src={item.image}
                      alt={item.statement}
                      className="h-[320px] sm:h-[420px]"
                    />
                  </div>
                  <div className={imageFirst ? "lg:order-1" : ""}>
                    <h2 className="font-(family-name:--font-cormorant) text-[clamp(2.4rem,5.2vw,4rem)] leading-[0.95] italic text-[#2c382d]">
                      {item.statement}
                    </h2>
                    <p className="mt-5 font-(family-name:--font-jost) text-lg leading-relaxed text-[#5f6a5f] sm:text-[1.25rem]">
                      {item.body}
                    </p>
                  </div>
                </SectionReveal>
              );
            })}
          </div>
        </section>
      </div>

      <section className="border-b border-black/12 bg-[#2a3324] py-12 sm:py-16 lg:py-20 text-[#f1f4eb]">
        <div className="mx-auto w-full max-w-330 px-4 sm:px-6 lg:px-10">
          <SectionReveal>
            <p className="font-(family-name:--font-jost) text-xs uppercase tracking-[0.18em] text-[#c7d1bf] sm:text-sm">
              Measured Against Tomorrow
            </p>
            <h2 className="mt-4 font-(family-name:--font-cormorant) text-[clamp(2.2rem,5vw,4.8rem)] leading-[0.95] text-white">
              Sustainability Metrics
            </h2>
          </SectionReveal>

          <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {[
              ["85%", "Recycled content"],
              ["40%", "Embodied carbon reduction"],
              ["120yr", "Avg lifespan"],
              ["2030", "Net-zero target"],
            ].map(([value, label], index) => (
              <SectionReveal key={label} delay={index * 0.06} className="border border-white/15 p-6">
                <p className="font-(family-name:--font-cormorant) text-7xl leading-none text-white">
                  {value}
                </p>
                <p className="mt-3 font-(family-name:--font-jost) text-xs uppercase tracking-[0.16em] text-[#c7d1bf] sm:text-sm">
                  {label}
                </p>
              </SectionReveal>
            ))}
          </div>
        </div>
      </section>

      <div className="mx-auto w-full max-w-330 px-4 sm:px-6 lg:px-10">
        <section className="border-b border-black/12 py-12 sm:py-16 lg:py-20">
          <SectionReveal>
            <p className="font-(family-name:--font-jost) text-xs uppercase tracking-[0.18em] text-[#7b8577] sm:text-sm">
              Accreditations
            </p>
          </SectionReveal>
          <InfinitePartnerTicker
            items={[
              "RIBA",
              "LEED",
              "BREEAM",
              "Passivhaus",
              "WELL Building",
              "ISO 14001",
              "AJ100",
              "Dezeen Award",
            ]}
          />
        </section>
      </div>

      <Footer />
    </main>
  );
}
