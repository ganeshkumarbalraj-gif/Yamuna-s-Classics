import { testimonials } from "@/data/testimonials";

class TestimonialService {
  getAll() {
    return testimonials;
  }

  getFeatured() {
    return testimonials.slice(0, 3);
  }
}

const testimonialService = new TestimonialService();

export default testimonialService;