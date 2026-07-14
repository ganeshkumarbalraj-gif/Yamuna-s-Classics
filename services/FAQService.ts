import { faqs } from "@/data/faq";

class FAQService {
  getAll() {
    return faqs;
  }

  getFeatured() {
    return faqs.filter((faq) => faq.featured);
  }

  getByCategory(category: string) {
    return faqs.filter(
      (faq) => faq.category === category
    );
  }

  getCategories() {
    return [
      "All",
      ...new Set(faqs.map((faq) => faq.category)),
    ];
  }
}

const faqService = new FAQService();

export default faqService;