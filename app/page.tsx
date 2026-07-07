import Hero from "@/components/home/Hero";
import AboutHome from "@/components/home/AboutHome";
import Stats from "@/components/home/Stats";
import CraftCategories from "@/components/home/CraftCategories";
import FeaturedProducts from "@/components/home/FeaturedProducts";
import FeaturedWorkshops from "@/components/home/FeaturedWorkshops";
import WhyChooseUs from "@/components/home/WhyChooseUs";
import StudentCreations from "@/components/home/StudentCreations";
import GallerySection from "@/components/gallery/GallerySection";
import Testimonials from "@/components/testimonials/Testimonials";
import ContactSection from "@/components/contact/ContactSection";


export default function Home() {
  return (
    <>
      <Hero />
      <AboutHome />
      <Stats />
      <CraftCategories />
      <FeaturedProducts />
      <FeaturedWorkshops /> 
      <WhyChooseUs />    
      <StudentCreations />
      <GallerySection />
      <Testimonials />
      <ContactSection />
    </>
  );
}