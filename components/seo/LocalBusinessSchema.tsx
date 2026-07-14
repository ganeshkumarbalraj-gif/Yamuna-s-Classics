import { site } from "@/data/site";

export default function LocalBusinessSchema() {
  const jsonLd = {
    "@context": "https://schema.org",

    "@type": "LocalBusiness",

    name: site.name,

    image: "https://www.yamunasclassics.com/about/yamuna.jpg",

    telephone: site.phone,

    email: site.email,

    address: {
      "@type": "PostalAddress",

      addressLocality: site.city,

      addressRegion: site.state,

      addressCountry: site.country,
    },

    url: "https://www.yamunasclassics.com",

    sameAs: [
      site.instagram,
      site.youtube,
      site.facebook,
    ].filter(Boolean),
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