import Script from "next/script";

export function OrganizationJsonLd() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    "@id": "https://vanguardis.studio/#organization",
    name: "Vanguardis",
    alternateName: "Vanguardis Architectural Studio",
    url: "https://vanguardis.studio",
    logo: "https://vanguardis.studio/logo.png",
    description:
      "Vanguardis is a London-based architectural studio delivering resilient, future-ready spaces through ecological engineering and refined modern design.",
    foundingDate: "2018",
    address: {
      "@type": "PostalAddress",
      streetAddress: "124 Vanguard Way",
      addressLocality: "London",
      addressCountry: "GB",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: "51.5074",
      longitude: "-0.1278",
    },
    contactPoint: {
      "@type": "ContactPoint",
      telephone: "+44-20-1234-5678",
      contactType: "customer service",
      email: "studio@vanguardis.com",
      areaServed: ["GB", "DE", "DK", "NL"],
      availableLanguage: "English",
    },
    sameAs: [
      "https://www.linkedin.com/company/vanguardis",
      "https://www.instagram.com/vanguardis.studio",
    ],
    serviceType: [
      "Spatial Architecture Design",
      "Ecological Integration Strategy",
      "Structural Engineering",
      "Lifecycle Planning",
    ],
    priceRange: "\u00A3\u00A3\u00A3\u00A3",
    areaServed: {
      "@type": "GeoCircle",
      geoMidpoint: {
        "@type": "GeoCoordinates",
        latitude: "51.5074",
        longitude: "-0.1278",
      },
      geoRadius: "5000000",
    },
  };

  return (
    <Script
      id="org-schema"
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      strategy="afterInteractive"
    />
  );
}

export function WebSiteJsonLd() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": "https://vanguardis.studio/#website",
    url: "https://vanguardis.studio",
    name: "Vanguardis",
    description:
      "Architectural studio London - sustainable and ecological design",
    publisher: {
      "@id": "https://vanguardis.studio/#organization",
    },
    potentialAction: {
      "@type": "SearchAction",
      target: {
        "@type": "EntryPoint",
        urlTemplate: "https://vanguardis.studio/?q={search_term_string}",
      },
      "query-input": "required name=search_term_string",
    },
  };

  return (
    <Script
      id="website-schema"
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      strategy="afterInteractive"
    />
  );
}

export function BreadcrumbJsonLd({
  items,
}: {
  items: { name: string; href: string }[];
}) {
  const schema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: `https://vanguardis.studio${item.href}`,
    })),
  };

  return (
    <Script
      id="breadcrumb-schema"
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      strategy="afterInteractive"
    />
  );
}