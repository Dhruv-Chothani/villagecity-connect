import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import aboutImg from "@/assets/ngo-about.jpg";

const AboutSection = () => {
  return (
    <section id="about" className="bg-background py-12 sm:py-16 lg:py-20">
      <div className="container px-4 sm:px-6 lg:px-8">
        <div className="grid items-center gap-8 lg:gap-10 lg:grid-cols-2">
          <div className="order-2 lg:order-1 overflow-hidden rounded-xl sm:rounded-2xl shadow-xl">
            <img 
              src={aboutImg} 
              alt="About SVCDA" 
              className="h-64 sm:h-80 md:h-96 lg:h-full w-full object-cover" 
            />
          </div>

          <div className="order-1 lg:order-2">
            <span className="mb-2 inline-block text-xs sm:text-sm font-semibold uppercase tracking-wider text-accent">About Us</span>
            <h2 className="mb-3 sm:mb-4 font-display text-xl sm:text-2xl lg:text-3xl xl:text-4xl font-bold text-foreground leading-tight">
              Small Village & City Development Agency
            </h2>

            <div className="mb-4 sm:mb-6 space-y-3 sm:space-y-4">
              <div>
                <h3 className="mb-2 font-display text-base sm:text-lg font-semibold text-primary flex items-center gap-2">
                  <span className="text-lg sm:text-xl">🔭</span> Vision
                </h3>
                <p className="text-xs sm:text-sm leading-relaxed text-muted-foreground">
                  To build a digitally connected and empowered rural & urban community 
                  by providing easy access to education, employment, business opportunities, 
                  healthcare, agriculture support, and local services through one platform.
                </p>
              </div>

              <div>
                <h3 className="mb-2 font-display text-base sm:text-lg font-semibold text-primary flex items-center gap-2">
                  <span className="text-lg sm:text-xl">🎯</span> Mission
                </h3>
                <ul className="space-y-1.5 sm:space-y-2 text-xs sm:text-sm text-muted-foreground">
                  <li className="flex items-start gap-2">
                    <span className="mt-1.5 h-1.5 w-1.5 sm:h-2 sm:w-2 shrink-0 rounded-full bg-accent" />
                    <span className="leading-tight">Promote education, skill development, and job opportunities.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="mt-1.5 h-1.5 w-1.5 sm:h-2 sm:w-2 shrink-0 rounded-full bg-accent" />
                    <span className="leading-tight">Support local businesses, startups, and farmers through digital access.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="mt-1.5 h-1.5 w-1.5 sm:h-2 sm:w-2 shrink-0 rounded-full bg-accent" />
                    <span className="leading-tight">Provide healthcare, grocery, electronics, and local service booking.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="mt-1.5 h-1.5 w-1.5 sm:h-2 sm:w-2 shrink-0 rounded-full bg-accent" />
                    <span className="leading-tight">Connect villages and cities for sustainable economic & social development.</span>
                  </li>
                </ul>
              </div>
            </div>

            <Button className="rounded-lg bg-accent text-accent-foreground hover:bg-accent/90 px-4 sm:px-6 py-2 sm:py-3 text-sm sm:text-base">
              Learn More <ArrowRight className="ml-1 h-3 w-3 sm:h-4 sm:w-4" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
