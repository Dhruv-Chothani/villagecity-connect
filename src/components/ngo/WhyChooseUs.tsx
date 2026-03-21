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
  return (
    <section className="bg-secondary/50 py-16 lg:py-20">
      <div className="container">
        <div className="grid items-center gap-10 lg:grid-cols-2">
          <div>
            <span className="mb-2 inline-block text-sm font-semibold uppercase tracking-wider text-accent">Why Choose SVCDA</span>
            <h2 className="mb-4 font-display text-2xl font-bold text-foreground sm:text-3xl lg:text-4xl">
              One App for Village & City Development 🚀
            </h2>
            <p className="mb-6 leading-relaxed text-muted-foreground">
              Small Village & City Development Agency (SVCDA) is building a digitally
              connected and empowered rural & urban community by providing easy access
              to education, employment, business opportunities, healthcare, agriculture 
              support, and local services through one integrated platform.
            </p>
            <ul className="space-y-3">
              {points.map((p) => (
                <li key={p} className="flex items-start gap-2 text-sm text-foreground">
                  <CheckCircle className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                  {p}
                </li>
              ))}
            </ul>
          </div>

          <div className="relative">
            <div className="grid grid-cols-2 gap-4">
              <img src={why1} alt="Community Development" className="h-48 w-full rounded-xl object-cover shadow-md sm:h-56 lg:h-64" />
              <img src={why2} alt="Education Programs" className="mt-8 h-48 w-full rounded-xl object-cover shadow-md sm:h-56 lg:h-64" />
            </div>
            <div className="absolute -bottom-4 left-1/2 -translate-x-1/2 rounded-xl bg-primary px-6 py-3 text-center shadow-lg">
              <p className="font-display text-2xl font-bold text-primary-foreground">9+</p>
              <p className="text-xs text-primary-foreground/80">Service Sectors</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
