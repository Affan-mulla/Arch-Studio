import type { MetadataRoute } from "next";
import { BASE_URL } from "./lib/constants";

const base = BASE_URL;

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();
  return [
    {
      url: base,
      lastModified: now,
      changeFrequency: "weekly",
      priority: 1,
      images: [
        "https://images.unsplash.com/photo-1511818966892-d7d671e672a2?auto=format&fit=crop&w=1600&q=80",
      ],
    },
    {
      url: `${base}/studio`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.9,
      images: [
        "https://images.unsplash.com/photo-1486325212027-8081e485255e?auto=format&fit=crop&w=1600&q=80",
        "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1600&q=80",
      ],
    },
    {
      url: `${base}/expertise`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.9,
      images: [
        "https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&w=1400&q=80",
      ],
    },
    {
      url: `${base}/vision`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.85,
      images: [
        "https://images.unsplash.com/photo-1518005068251-37900150dfca?auto=format&fit=crop&w=1600&q=80",
      ],
    },
    {
      url: `${base}/portfolio`,
      lastModified: now,
      changeFrequency: "weekly",
      priority: 0.95,
      images: [
        "https://images.unsplash.com/photo-1451976426598-a7593bd6d0b2?auto=format&fit=crop&w=800&q=80",
        "https://images.unsplash.com/photo-1486325212027-8081e485255e?auto=format&fit=crop&w=800&q=80",
        "https://images.unsplash.com/photo-1482192596544-9eb780fc7f66?auto=format&fit=crop&w=800&q=80",
      ],
    },
    {
      url: `${base}/journal`,
      lastModified: now,
      changeFrequency: "weekly",
      priority: 0.8,
      images: [
        "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1200&q=80",
      ],
    },
  ];
}
