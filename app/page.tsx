import Hero from "@/components/home/Hero";
import AboutHome from "@/components/home/AboutHome";
import CraftCategories from "@/components/home/CraftCategories";
import FeaturedProducts from "@/components/home/FeaturedProducts";
import FeaturedWorkshops from "@/components/home/FeaturedWorkshops";
import StudentCreations from "@/components/home/StudentCreations";
import WhyChooseUs from "@/components/home/WhyChooseUs";
import Testimonials from "@/components/testimonials/Testimonials";
import ContactSection from "@/components/contact/ContactSection";
import GalleryPreview from "@/components/home/GalleryPreview";

export default function Home() {
  return (
    <main className="overflow-x-hidden">
      <Hero />

      <WhyChooseUs />

      <AboutHome />

      <CraftCategories />

      <FeaturedProducts />

      <FeaturedWorkshops />

      <Testimonials />

      <StudentCreations />

      <GalleryPreview />

      <ContactSection />
    </main>
  );
}