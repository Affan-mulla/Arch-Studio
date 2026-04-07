import type { Metadata } from "next";
import { JournalPageClient } from "./journal-page-client";

export const metadata: Metadata = {
  title: "Journal",
  description:
    "Read essays, research, and design reflections from the Vanguardis studio journal.",
  openGraph: {
    title: "Journal | Vanguardis",
    description:
      "Editorial perspectives on architecture, materials, and climate-responsive design.",
    url: "https://vanguardis.studio/journal",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Journal | Vanguardis",
    description:
      "Ideas, research, and field notes from the Vanguardis practice.",
  },
};

export default function JournalPage() {
  return <JournalPageClient />;
}
