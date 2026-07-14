import { Workshop } from "@/types";
import { site } from "@/data/site";

interface WorkshopSchemaProps {
  workshop: Workshop;
}

export default function WorkshopSchema({
  workshop,
}: WorkshopSchemaProps) {
  const jsonLd = {
    "@context": "https://schema.org",

    "@type": "Course",

    name: workshop.name,

    description: workshop.description,

    provider: {
      "@type": "Organization",
      name: site.name,

      url: "https://www.yamunasclassics.com",
    },

    image: workshop.images.map((image) =>
      image.startsWith("http")
        ? image
        : `https://www.yamunasclassics.com${image}`
    ),

    educationalLevel: workshop.level,

    timeRequired: workshop.duration,
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(jsonLd),
      }}
    />
  );
}