import type { Metadata } from "next";
import { JournalPageClient } from "./journal-page-client";

export const metadata: Metadata = {
  title: "Journal",
  description:
    "Read essays, research, and design reflections from the Vanguardis studio journal.",
  alternates: { canonical: "/journal" },
  openGraph: {
    title: "Journal | Vanguardis",
    description:
      "Editorial perspectives on architecture, materials, and climate-responsive design.",
    url: "https://vanguardis.studio/journal",
    type: "website",
    images: [
      {
        url: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1600&q=80",
        width: 1600,
        height: 900,
        alt: "Architectural essays and research - The Vanguardis Journal",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Journal | Vanguardis",
    description:
      "Ideas, research, and field notes from the Vanguardis practice.",
    images: [
      "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1600&q=80",
    ],
  },
};

export default function JournalPage() {
  return <JournalPageClient />;
}
