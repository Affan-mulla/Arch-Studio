import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();

  return [
    {
      url: "https://vanguardis.studio",
      lastModified: now,
      changeFrequency: "weekly",
      priority: 1,
      images: [
        "https://images.unsplash.com/photo-1511818966892-d7d671e672a2?auto=format&fit=crop&w=1600&q=80",
      ],
    },
  ];
}
