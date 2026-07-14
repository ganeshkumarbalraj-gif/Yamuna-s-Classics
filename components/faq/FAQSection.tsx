import FAQAccordion from "./FAQAccordion";
import faqService from "@/services/FAQService";

export default function FAQSection() {
  const faqs = faqService.getFeatured();

  return (
    <section
      className="bg-pink-50 py-20"
      aria-labelledby="faq-heading"
    >
      <div className="mx-auto max-w-5xl px-6">
        <div className="mb-12 text-center">
          <p className="font-semibold uppercase tracking-widest text-pink-600">
            FAQs
          </p>

          <h2
            id="faq-heading"
            className="mt-3 text-4xl font-bold text-gray-900"
          >
            Everything You Need to Know
          </h2>

          <p className="mt-4 text-lg leading-8 text-gray-600">
            If you don&apos;t find the answer you&apos;re looking for,
            please feel free to contact us anytime. We&apos;re always happy
            to help.
          </p>
        </div>

        <FAQAccordion faqs={faqs} />
      </div>
    </section>
  );
}