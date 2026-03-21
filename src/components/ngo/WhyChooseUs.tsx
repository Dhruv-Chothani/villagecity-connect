import { useState, useEffect, useRef } from "react";
import { CheckCircle } from "lucide-react";
import why1 from "@/assets/ngo-why1.jpg";
import why2 from "@/assets/ngo-why2.jpg";

const points = [
  "Digitally connected rural & urban communities",
  "One platform for 9 essential service sectors",
  "Local business promotion & startup support",
  "Skill development & employment programs",
  "Healthcare access & agriculture support",
];

const WhyChooseUs = () => {
  const [count, setCount] = useState(6);
  const [isVisible, setIsVisible] = useState(false);
  const badgeRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const [entry] = entries;
        if (entry.isIntersecting && !isVisible) {
          setIsVisible(true);
        }
      },
      {
        threshold: 0.5, // Trigger when 50% of the element is visible
      }
    );

    if (badgeRef.current) {
      observer.observe(badgeRef.current);
    }

    return () => {
      if (badgeRef.current) {
        observer.unobserve(badgeRef.current);
      }
    };
  }, [isVisible]);

  useEffect(() => {
    if (isVisible) {
      const startCount = 6;
      const endCount = 9;
      const duration = 2000; // 2 seconds
      const steps = 30; // Number of animation steps
      const stepDuration = duration / steps;
      const increment = (endCount - startCount) / steps;

      let currentStep = 0;
      const timer = setInterval(() => {
        currentStep++;
        const newCount = Math.min(startCount + increment * currentStep, endCount);
        setCount(newCount);
        
        if (currentStep >= steps) {
          clearInterval(timer);
        }
      }, stepDuration);

      return () => clearInterval(timer);
    }
  }, [isVisible]);

  return (
    <section className="bg-secondary/50 py-12 sm:py-16 lg:py-20">
      <div className="container px-4 sm:px-6 lg:px-8">
        <div className="grid items-center gap-8 lg:gap-10 lg:grid-cols-2">
          <div className="order-2 lg:order-1">
            <span className="mb-2 inline-block text-xs sm:text-sm font-semibold uppercase tracking-wider text-accent">Why Choose SVCDA</span>
            <h2 className="mb-3 sm:mb-4 font-display text-xl sm:text-2xl lg:text-3xl xl:text-4xl font-bold text-foreground leading-tight">
              One App for Village & City Development
            </h2>
            <p className="mb-4 sm:mb-6 text-sm sm:text-base leading-relaxed text-muted-foreground">
              Small Village & City Development Agency (SVCDA) is building a digitally
              connected and empowered rural & urban community by providing easy access
              to education, employment, business opportunities, healthcare, agriculture 
              support, and local services through one integrated platform.
            </p>
            <ul className="space-y-2 sm:space-y-3">
              {points.map((p, index) => (
                <li key={index} className="flex items-start gap-2 text-xs sm:text-sm text-foreground">
                  <CheckCircle className="mt-0.5 h-3 w-3 sm:h-4 sm:w-4 shrink-0 text-primary" />
                  <span className="leading-tight">{p}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="relative order-1 lg:order-2">
            <div className="grid grid-cols-2 gap-3 sm:gap-4">
              <img 
                src={why1} 
                alt="Community Development" 
                className="h-32 sm:h-40 md:h-48 lg:h-56 xl:h-64 w-full rounded-lg sm:rounded-xl object-cover shadow-md" 
              />
              <img 
                src={why2} 
                alt="Education Programs" 
                className="mt-4 sm:mt-6 md:mt-8 h-32 sm:h-40 md:h-48 lg:h-56 xl:h-64 w-full rounded-lg sm:rounded-xl object-cover shadow-md" 
              />
            </div>
            <div 
              ref={badgeRef}
              className="absolute -bottom-3 sm:-bottom-4 left-1/2 -translate-x-1/2 rounded-lg sm:rounded-xl bg-primary px-4 sm:px-6 py-2 sm:py-3 text-center shadow-lg transform transition-all duration-500"
            >
              <p className="font-display text-lg sm:text-2xl lg:text-3xl font-bold text-primary-foreground">
                {Math.floor(count)}+
              </p>
              <p className="text-xs sm:text-xs md:text-sm text-primary-foreground/80">Service Sectors</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
