import TopStrip from "@/components/ngo/TopStrip";
import HeroSection from "@/components/ngo/HeroSection";
import FeatureCards from "@/components/ngo/FeatureCards";
import WhyChooseUs from "@/components/ngo/WhyChooseUs";
import AboutSection from "@/components/ngo/AboutSection";
import ProgramsSection from "@/components/ngo/ProgramsSection";
import StatsSection from "@/components/ngo/StatsSection";
import TestimonialSection from "@/components/ngo/TestimonialSection";
import NgoFooter from "@/components/ngo/NgoFooter";

const Index = () => {
  return (
    <div className="min-h-screen">
      <TopStrip />
      <HeroSection />
      <FeatureCards />
      <WhyChooseUs />
      <AboutSection />
      <ProgramsSection />
      <StatsSection />
      <TestimonialSection />
      <NgoFooter />
    </div>
  );
};

export default Index;
