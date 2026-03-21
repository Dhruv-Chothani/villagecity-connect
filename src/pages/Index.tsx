import TopStrip from "@/components/ngo/TopStrip";
import HeroWithFeatures from "@/components/HeroWithFeatures";
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
      
      {/* Hero Section with Overlapping Features */}
      <HeroWithFeatures />
      
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
