import type { Metadata } from "next";
import { VisionPageClient } from "./vision-page-client";

export const metadata: Metadata = {
  title: "Vision",
  description:
    "Read the Vanguardis manifesto and sustainability commitments guiding architecture as a living system.",
  alternates: { canonical: "/vision" },
  openGraph: {
    title: "Vision | Vanguardis",
    description:
      "Architecture as a living system: Vanguardis manifesto and sustainability metrics.",
    url: "https://vanguardis.studio/vision",
    type: "website",
    images: [
      {
        url: "https://images.unsplash.com/photo-1518005068251-37900150dfca?auto=format&fit=crop&w=1600&q=80",
        width: 1600,
        height: 900,
        alt: "Architecture as a living system - Vanguardis vision",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Vision | Vanguardis",
    description:
      "A manifesto for resilient architecture designed for uncertain futures.",
    images: [
      "https://images.unsplash.com/photo-1518005068251-37900150dfca?auto=format&fit=crop&w=1600&q=80",
    ],
  },
};

export default function VisionPage() {
  return <VisionPageClient />;
}
