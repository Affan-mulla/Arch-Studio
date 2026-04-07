
import type { Metadata } from "next";
import { LandingPage } from "./sections/landing-page";

export const metadata: Metadata = {
  title: "Architectural Innovations Habitats",
  description:
    "Vanguardis crafts future-ready architecture with ecological intelligence, engineering precision, and timeless spatial design.",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Architectural Innovations Habitats | Vanguardis",
    description:
      "Discover Vanguardis: a contemporary architecture studio shaping resilient habitats through precision engineering and ecological design.",
    url: "https://vanguardis.studio",
    siteName: "Vanguardis",
    type: "website",
    images: [
      {
        url: "https://images.unsplash.com/photo-1511818966892-d7d671e672a2?auto=format&fit=crop&w=1600&q=80",
        width: 1600,
        height: 900,
        alt: "Contemporary architectural residence by Vanguardis",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Architectural Innovations Habitats | Vanguardis",
    description:
      "A clean, editorial architecture studio experience with sustainable engineering and visionary design.",
    images: [
      "https://images.unsplash.com/photo-1511818966892-d7d671e672a2?auto=format&fit=crop&w=1600&q=80",
    ],
  },
};

export default function Home() {
  return <LandingPage />;
}
