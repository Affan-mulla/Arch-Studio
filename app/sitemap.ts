import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();
  const routes = [
    { path: "/", priority: 1, freq: "weekly" },
    { path: "/studio", priority: 0.9, freq: "monthly" },
    { path: "/expertise", priority: 0.9, freq: "monthly" },
    { path: "/vision", priority: 0.8, freq: "monthly" },
    { path: "/portfolio", priority: 0.9, freq: "weekly" },
    { path: "/journal", priority: 0.7, freq: "weekly" },
  ] as const;

  return routes.map(({ path, priority, freq }) => ({
    url: `https://vanguardis.studio${path}`,
    lastModified: now,
    changeFrequency: freq,
    priority,
  }));
}
