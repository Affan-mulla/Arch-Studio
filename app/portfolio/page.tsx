import type { Metadata } from "next";
import { PortfolioPageClient } from "./portfolio-page-client";

export const metadata: Metadata = {
  title: "Portfolio",
  description:
    "Explore selected Vanguardis projects across residential, commercial, institutional, and mixed-use typologies.",
  alternates: { canonical: "/portfolio" },
  openGraph: {
    title: "Portfolio | Vanguardis",
    description:
      "47 projects delivered with one standard: resilient, precise, and timeless architecture.",
    url: "https://vanguardis.studio/portfolio",
    type: "website",
    images: [
      {
        url: "https://images.unsplash.com/photo-1451976426598-a7593bd6d0b2?auto=format&fit=crop&w=1600&q=80",
        width: 1600,
        height: 900,
        alt: "Selected architectural works - Vanguardis portfolio",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Portfolio | Vanguardis",
    description:
      "Selected works by Vanguardis across geographies and scales.",
    images: [
      "https://images.unsplash.com/photo-1451976426598-a7593bd6d0b2?auto=format&fit=crop&w=1600&q=80",
    ],
  },
};

export default function PortfolioPage() {
  return <PortfolioPageClient />;
}
