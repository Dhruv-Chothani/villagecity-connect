import TopStrip from "@/components/ngo/TopStrip";
import HeroWithFeatures from "@/components/HeroWithFeatures";
import WhyChooseUs from "@/components/ngo/WhyChooseUs";
import AboutSection from "@/components/ngo/AboutSection";
import ProgramsSection from "@/components/ngo/ProgramsSection";
import StatsSection from "@/components/ngo/StatsSection";
import TestimonialSection from "@/components/ngo/TestimonialSection";
import NgoFooter from "@/components/ngo/NgoFooter";
import ModernSpinner from "@/components/ModernSpinner";
import { useState, useEffect } from "react";

const Index = () => {
  const [showLoader, setShowLoader] = useState(true);

  // Hide loader after page loads
  useEffect(() => {
    const timer = setTimeout(() => {
      setShowLoader(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="min-h-screen">
      {/* Loading Overlay */}
      {showLoader && (
        <ModernSpinner 
          text="Loading SVCDA..." 
          size="lg" 
          color="gradient" 
        />
      )}
      
      {/* Page Content */}
      {!showLoader && (
        <>
          <TopStrip />
          
          {/* Hero Section with Overlapping Features */}
          <HeroWithFeatures />
          
          <WhyChooseUs />
          <AboutSection />
          <ProgramsSection />
          <StatsSection />
          <TestimonialSection />
          <NgoFooter />
        </>
      )}
    </div>
  );
};

export default Index;
