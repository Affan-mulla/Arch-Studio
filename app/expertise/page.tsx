import type { Metadata } from "next";
import { ExpertisePageClient } from "./expertise-page-client";

export const metadata: Metadata = {
  title: "Expertise",
  description:
    "Explore Vanguardis services, process, and technical toolkit from concept to long-term performance.",
  alternates: { canonical: "/expertise" },
  openGraph: {
    title: "Expertise | Vanguardis",
    description:
      "A full-spectrum view of Vanguardis architectural and engineering capabilities.",
    url: "https://vanguardis.studio/expertise",
    type: "website",
    images: [
      {
        url: "https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&w=1600&q=80",
        width: 1600,
        height: 900,
        alt: "Structural engineering and architecture expertise - Vanguardis",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Expertise | Vanguardis",
    description:
      "From discovery to handover: Vanguardis precision at every scale.",
    images: [
      "https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&w=1600&q=80",
    ],
  },
};

export default function ExpertisePage() {
  return <ExpertisePageClient />;
}
