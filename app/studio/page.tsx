import type { Metadata } from "next";
import { StudioPageClient } from "./studio-page-client";

export const metadata: Metadata = {
  title: "Studio",
  description:
    "Meet Vanguardis: our studio philosophy, team, and principles behind long-life architectural systems.",
  alternates: { canonical: "/studio" },
  openGraph: {
    title: "Studio | Vanguardis",
    description:
      "Discover the people and principles behind Vanguardis architectural practice.",
    url: "https://vanguardis.studio/studio",
    type: "website",
    images: [
      {
        url: "https://images.unsplash.com/photo-1486325212027-8081e485255e?auto=format&fit=crop&w=1600&q=80",
        width: 1600,
        height: 900,
        alt: "Vanguardis studio - architectural practice London",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Studio | Vanguardis",
    description:
      "Inside Vanguardis: founding philosophy, team, and global architectural ambition.",
    images: [
      "https://images.unsplash.com/photo-1486325212027-8081e485255e?auto=format&fit=crop&w=1600&q=80",
    ],
  },
};

export default function StudioPage() {
  return <StudioPageClient />;
}
