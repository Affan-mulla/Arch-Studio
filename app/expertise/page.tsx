import type { Metadata } from "next";
import { ExpertisePageClient } from "./expertise-page-client";

export const metadata: Metadata = {
  title: "Expertise",
  description:
    "Explore Vanguardis services, process, and technical toolkit from concept to long-term performance.",
  openGraph: {
    title: "Expertise | Vanguardis",
    description:
      "A full-spectrum view of Vanguardis architectural and engineering capabilities.",
    url: "https://vanguardis.studio/expertise",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Expertise | Vanguardis",
    description:
      "From discovery to handover: Vanguardis precision at every scale.",
  },
};

export default function ExpertisePage() {
  return <ExpertisePageClient />;
}
