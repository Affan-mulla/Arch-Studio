import type { Metadata, Viewport } from "next";
import { Cormorant_Garamond, Jost, Geist_Mono } from "next/font/google";
import "./globals.css";
import { OrganizationJsonLd, WebSiteJsonLd } from "./components/json-ld";
import { PageTransition } from "./components/page-transition";
import { PreloadLinks } from "./components/preload-links";
import { ScrollReset } from "./components/scroll-reset";
import { BASE_URL } from "./lib/constants";
import { SmoothScrollProvider } from "./smooth-scroll-provider";

const jost = Jost({
  variable: "--font-jost",
  subsets: ["latin"],
  display: "swap",
  preload: true,
  weight: ["300", "400", "500", "600"],
});

const cormorant = Cormorant_Garamond({
  variable: "--font-cormorant",
  subsets: ["latin"],
  display: "swap",
  preload: true,
  weight: ["300", "400", "500", "600", "700"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  display: "swap",
  preload: false,
});

export const metadata: Metadata = {
  metadataBase: new URL(BASE_URL),
  title: {
    default: "Vanguardis | Architectural Studio",
    template: "%s | Vanguardis",
  },
  description:
    "Vanguardis is an architectural studio delivering resilient, future-ready spaces through ecological engineering and refined modern design.",
  keywords: [
    "architectural studio London",
    "sustainable architecture UK",
    "ecological architectural design",
    "structural engineering London",
    "passive house design",
    "low carbon architecture",
    "RIBA architect London",
    "award winning architecture studio",
    "residential architecture UK",
    "commercial architecture London",
    "net zero architecture",
    "bioclimatic design",
  ],
  other: {
    "dns-prefetch": "//images.unsplash.com",
  },
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
    url: BASE_URL,
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

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#D8E0D5" },
    { media: "(prefers-color-scheme: dark)", color: "#2C3C2D" },
  ],
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
        <PreloadLinks />
        <OrganizationJsonLd />
        <WebSiteJsonLd />
        <ScrollReset />
        <SmoothScrollProvider>
          <PageTransition>{children}</PageTransition>
        </SmoothScrollProvider>
      </body>
    </html>
  );
}
