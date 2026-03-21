import { Button } from "@/components/ui/button";
import { ArrowRight, Rocket } from "lucide-react";
import { Link } from "react-router-dom";
import heroImg from "@/assets/ngo-hero.jpg";

const HeroSection = () => {
  return (
    <section className="relative min-h-[70vh] overflow-hidden lg:min-h-[85vh]">
      <div className="absolute inset-0">
        <img src={heroImg} alt="Community Development" className="h-full w-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-r from-primary/90 via-primary/70 to-primary/30" />
      </div>

      <div className="container relative z-10 flex min-h-[70vh] items-center lg:min-h-[85vh]">
        <div className="max-w-2xl py-16 lg:py-24">
          <span className="mb-4 inline-flex items-center gap-1.5 rounded-full bg-accent/20 px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-accent-foreground">
            <Rocket className="h-3.5 w-3.5" /> One App for Village & City Development
          </span>
          <h1 className="mb-6 font-display text-3xl font-extrabold leading-tight text-primary-foreground sm:text-4xl lg:text-5xl xl:text-6xl">
            Small Village & City{" "}
            <span className="text-accent">Development Agency</span>
          </h1>
          <p className="mb-4 font-display text-lg font-semibold text-primary-foreground/90 sm:text-xl">
            All in One Sector Service Hub
          </p>
          <p className="mb-8 max-w-lg text-base leading-relaxed text-primary-foreground/80 sm:text-lg">
            Building a digitally connected & empowered rural and urban community 
            through easy access to education, employment, business, healthcare, 
            agriculture & local services — all on one platform.
          </p>
          <div className="flex flex-wrap gap-3">
            <Link to="/register">
              <Button size="lg" className="rounded-lg bg-accent text-accent-foreground shadow-lg hover:bg-accent/90">
                Get Started <ArrowRight className="ml-1 h-4 w-4" />
              </Button>
            </Link>
            <a href="tel:+918978210705">
              <Button size="lg" variant="outline" className="rounded-lg border-white/50 bg-transparent text-white hover:bg-white/10 hover:border-white/70 backdrop-blur-sm">
                Call Now: +91 8978210705
              </Button>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
