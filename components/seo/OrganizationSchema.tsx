import { site } from "@/data/site";

export default function OrganizationSchema() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Organization",

    name: site.name,

    url: "https://www.yamunasclassics.com",

    logo: "https://www.yamunasclassics.com/icon.png",

    description: site.description,

    email: site.email,

    telephone: site.phone,

    sameAs: [
      site.instagram,
      site.youtube,
      `https://wa.me/${site.whatsapp.replace(/\D/g, "")}`,
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