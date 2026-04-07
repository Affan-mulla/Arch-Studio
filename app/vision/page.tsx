import type { Metadata } from "next";
import { VisionPageClient } from "./vision-page-client";

export const metadata: Metadata = {
  title: "Vision",
  description:
    "Read the Vanguardis manifesto and sustainability commitments guiding architecture as a living system.",
  openGraph: {
    title: "Vision | Vanguardis",
    description:
      "Architecture as a living system: Vanguardis manifesto and sustainability metrics.",
    url: "https://vanguardis.studio/vision",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Vision | Vanguardis",
    description:
      "A manifesto for resilient architecture designed for uncertain futures.",
  },
};

export default function VisionPage() {
  return <VisionPageClient />;
}
