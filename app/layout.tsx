import type { Metadata } from "next";
import { Cormorant_Garamond, Jost, Geist_Mono } from "next/font/google";
import "./globals.css";
import { PageTransition } from "./components/page-transition";
import { ScrollReset } from "./components/scroll-reset";
import { SmoothScrollProvider } from "./smooth-scroll-provider";

const jost = Jost({
  variable: "--font-jost",
  subsets: ["latin"],
});

const cormorant = Cormorant_Garamond({
  variable: "--font-cormorant",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://vanguardis.studio"),
  title: {
    default: "Vanguardis | Architectural Studio",
    template: "%s | Vanguardis",
  },
  description:
    "Vanguardis is an architectural studio delivering resilient, future-ready spaces through ecological engineering and refined modern design.",
  keywords: [
    "architecture studio",
    "sustainable architecture",
    "structural engineering",
    "eco architecture",
    "residential design",
    "commercial architecture",
  ],
  applicationName: "Vanguardis",
  alternates: {
    canonical: "/",
  },
  authors: [{ name: "Vanguardis Studio" }],
  creator: "Vanguardis Studio",
  publisher: "Vanguardis Ltd.",
  category: "architecture",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
  openGraph: {
    type: "website",
    locale: "en_GB",
    url: "https://vanguardis.studio",
    siteName: "Vanguardis",
    title: "Vanguardis | Architectural Studio",
    description:
      "Architectural innovations for enduring habitats, blending engineering precision with ecological awareness.",
    images: [
      {
        url: "https://images.unsplash.com/photo-1511818966892-d7d671e672a2?auto=format&fit=crop&w=1600&q=80",
        width: 1600,
        height: 900,
        alt: "Contemporary architecture by Vanguardis",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Vanguardis | Architectural Studio",
    description:
      "Progressive architectural systems for modern living, ecological integration, and timeless durability.",
    images: [
      "https://images.unsplash.com/photo-1511818966892-d7d671e672a2?auto=format&fit=crop&w=1600&q=80",
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${jost.variable} ${cormorant.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <ScrollReset />
        <SmoothScrollProvider>
          <PageTransition>{children}</PageTransition>
        </SmoothScrollProvider>
      </body>
    </html>
  );
}
