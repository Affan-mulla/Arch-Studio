import type { Metadata } from "next";
import { StudioPageClient } from "./studio-page-client";

export const metadata: Metadata = {
  title: "Studio",
  description:
    "Meet Vanguardis: our studio philosophy, team, and principles behind long-life architectural systems.",
  openGraph: {
    title: "Studio | Vanguardis",
    description:
      "Discover the people and principles behind Vanguardis architectural practice.",
    url: "https://vanguardis.studio/studio",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Studio | Vanguardis",
    description:
      "Inside Vanguardis: founding philosophy, team, and global architectural ambition.",
  },
};

export default function StudioPage() {
  return <StudioPageClient />;
}
