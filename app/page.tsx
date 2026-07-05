import Header from "@/components/layout/Header";
import Hero from "@/components/home/Hero";
import AboutSection from "@/components/home/AboutSection";
import Categories from "@/components/home/Categories";
import FeaturedProducts from "@/components/home/FeaturedProducts";
import GallerySection from "@/components/gallery/GallerySection";
import Testimonials from "@/components/testimonials/Testimonials";

export default function Home() {
  return (
    <>
      <Header />

      <main>
        <Hero />
        <AboutSection />
        <Categories />
        <FeaturedProducts />
        <GallerySection />
        <Testimonials />
      </main>
    </>
  );
}