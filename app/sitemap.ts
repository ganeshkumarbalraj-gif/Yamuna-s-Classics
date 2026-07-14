import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://www.yamunasclassics.com";

  return [
    {
      url: baseUrl,
      priority: 1,
    },
    {
      url: `${baseUrl}/about`,
      priority: 0.9,
    },
    {
      url: `${baseUrl}/products`,
      priority: 0.9,
    },
    {
      url: `${baseUrl}/gallery`,
      priority: 0.9,
    },
    {
      url: `${baseUrl}/workshops`,
      priority: 0.9,
    },
    {
      url: `${baseUrl}/contact`,
      priority: 0.8,
    },
    {
      url: `${baseUrl}/faq`,
      priority: 0.8,
    },
  ];
}