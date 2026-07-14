import type { Metadata } from "next";
import { site } from "@/data/site";

interface MetadataProps {
  title: string;
  description: string;
  path?: string;
}

export function createMetadata({
  title,
  description,
  path = "",
}: MetadataProps): Metadata {
  const url = `https://www.yamunasclassics.com${path}`;

  return {
    title,
    description,

    alternates: {
      canonical: url,
    },

    openGraph: {
      title,
      description,
      url,
      siteName: site.name,
      locale: "en_IN",
      type: "website",

      images: [
        {
          url: "/about/yamuna.jpg",
          width: 1200,
          height: 630,
          alt: site.name,
        },
      ],
    },

    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: ["/about/yamuna.jpg"],
    },
  };
}