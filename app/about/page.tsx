import PageHeader from "@/components/layout/PageHeader";
import StorySection from "@/components/about/StorySection";
import MissionVision from "@/components/about/MissionVision";
import WhyChooseUs from "@/components/about/WhyChooseUs";
import MottoBanner from "@/components/about/MottoBanner";

export default function AboutPage() {
  return (
    <>
      <PageHeader
        title="About Us"
        subtitle="Our story, passion and commitment."
      />

      <StorySection />

      <MissionVision />

      <WhyChooseUs />

      <MottoBanner />
    </>
  );
}