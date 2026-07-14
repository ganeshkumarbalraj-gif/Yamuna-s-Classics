import Hero from "@/components/home/Hero";
import AboutHome from "@/components/home/AboutHome";
import WhyChooseUs from "@/components/home/WhyChooseUs";
import CraftCategories from "@/components/home/CraftCategories";
import FeaturedProducts from "@/components/home/FeaturedProducts";
import FeaturedWorkshops from "@/components/home/FeaturedWorkshops";
import Testimonials from "@/components/testimonials/Testimonials";
import StudentCreations from "@/components/home/StudentCreations";
import GallerySection from "@/components/gallery/GallerySection";
import ContactSection from "@/components/contact/ContactSection";

export default function Home() {
  return (
    <>
      <Hero />
      <WhyChooseUs />
      <AboutHome />
      <CraftCategories />
      <FeaturedProducts />
      <FeaturedWorkshops />
      <Testimonials />
      <StudentCreations />
      <GallerySection />
      <ContactSection />
    </>
  );
}