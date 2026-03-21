import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import aboutImg from "@/assets/ngo-about.jpg";

const AboutSection = () => {
  return (
    <section id="about" className="bg-background py-16 lg:py-20">
      <div className="container">
        <div className="grid items-center gap-10 lg:grid-cols-2">
          <div className="overflow-hidden rounded-2xl shadow-xl">
            <img src={aboutImg} alt="About SVCDA" className="h-full w-full object-cover" />
          </div>

          <div>
            <span className="mb-2 inline-block text-sm font-semibold uppercase tracking-wider text-accent">About Us</span>
            <h2 className="mb-4 font-display text-2xl font-bold text-foreground sm:text-3xl lg:text-4xl">
              Small Village & City Development Agency
            </h2>

            <div className="mb-6 space-y-4">
              <div>
                <h3 className="mb-2 font-display text-lg font-semibold text-primary">🔭 Vision</h3>
                <p className="leading-relaxed text-muted-foreground">
                  To build a digitally connected and empowered rural & urban community 
                  by providing easy access to education, employment, business opportunities, 
                  healthcare, agriculture support, and local services through one platform.
                </p>
              </div>

              <div>
                <h3 className="mb-2 font-display text-lg font-semibold text-primary">🎯 Mission</h3>
                <ul className="space-y-1.5 text-sm text-muted-foreground">
                  <li className="flex items-start gap-2">
                    <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
                    Promote education, skill development, and job opportunities.
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
                    Support local businesses, startups, and farmers through digital access.
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
                    Provide healthcare, grocery, electronics, and local service booking.
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
                    Connect villages and cities for sustainable economic & social development.
                  </li>
                </ul>
              </div>
            </div>

            <Button className="rounded-lg bg-accent text-accent-foreground hover:bg-accent/90">
              Learn More <ArrowRight className="ml-1 h-4 w-4" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
