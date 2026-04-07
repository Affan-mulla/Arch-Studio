import type { Metadata } from "next";
import { PortfolioPageClient } from "./portfolio-page-client";

export const metadata: Metadata = {
  title: "Portfolio",
  description:
    "Explore selected Vanguardis projects across residential, commercial, institutional, and mixed-use typologies.",
  openGraph: {
    title: "Portfolio | Vanguardis",
    description:
      "47 projects delivered with one standard: resilient, precise, and timeless architecture.",
    url: "https://vanguardis.studio/portfolio",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Portfolio | Vanguardis",
    description:
      "Selected works by Vanguardis across geographies and scales.",
  },
};

export default function PortfolioPage() {
  return <PortfolioPageClient />;
}
