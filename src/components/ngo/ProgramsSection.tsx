import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import prog1 from "@/assets/ngo-program1.jpg";
import prog2 from "@/assets/ngo-program2.jpg";
import prog3 from "@/assets/ngo-program3.jpg";
import prog4 from "@/assets/ngo-program4.jpg";

const programs = [
  {
    img: prog1,
    title: "VCDA Shiksha Mission",
    desc: "Skill training courses, job-oriented programs, and certification training for rural & urban youth.",
    href: "/training",
  },
  {
    img: prog2,
    title: "Women Development Programs",
    desc: "Empowering women through tailoring, handicraft, digital literacy and self-help groups.",
    href: "/training",
  },
  {
    img: prog3,
    title: "Health Awareness Camps",
    desc: "Free medical camps, doctor consultations, medicine orders and health awareness programs.",
    href: "/health",
  },
  {
    img: prog4,
    title: "Green Agriculture Initiative",
    desc: "Farming tips, crop market access, fertilizer & seeds info, and agricultural machinery support.",
    href: "/agriculture",
  },
];

const ProgramsSection = () => {
  return (
    <section id="programs" className="bg-secondary/30 py-12 sm:py-16 lg:py-20">
      <div className="container px-4 sm:px-6 lg:px-8">
        <div className="mb-8 sm:mb-10 text-center">
          <span className="mb-2 inline-block text-xs sm:text-sm font-semibold uppercase tracking-wider text-accent">Our Key Programs</span>
          <h2 className="font-display text-xl sm:text-2xl lg:text-3xl xl:text-4xl font-bold text-foreground leading-tight">
            Introducing Our Programs
          </h2>
        </div>

        <div className="grid gap-4 sm:gap-6 lg:gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-4">
          {programs.map((p) => (
            <Link
              key={p.title}
              to={p.href}
              className="hover-lift group overflow-hidden rounded-xl sm:rounded-2xl border border-border bg-card shadow-sm"
            >
              <div className="h-40 sm:h-48 lg:h-52 overflow-hidden">
                <img
                  src={p.img}
                  alt={p.title}
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>
              <div className="p-4 sm:p-5">
                <h3 className="mb-2 font-display text-sm sm:text-base font-semibold text-foreground leading-tight">{p.title}</h3>
                <p className="mb-3 text-xs sm:text-sm leading-relaxed text-muted-foreground line-clamp-3">{p.desc}</p>
                <span className="inline-flex items-center gap-1 text-xs sm:text-sm font-medium text-accent transition-colors hover:text-accent/80">
                  Read More <ArrowRight className="h-3 w-3 sm:h-3.5 sm:w-3.5" />
                </span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProgramsSection;
