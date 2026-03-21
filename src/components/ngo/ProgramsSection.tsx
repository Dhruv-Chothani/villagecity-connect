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
    <section id="programs" className="bg-secondary/30 py-16 lg:py-20">
      <div className="container">
        <div className="mb-10 text-center">
          <span className="mb-2 inline-block text-sm font-semibold uppercase tracking-wider text-accent">Our Key Programs</span>
          <h2 className="font-display text-2xl font-bold text-foreground sm:text-3xl lg:text-4xl">
            Introducing Our Programs
          </h2>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {programs.map((p) => (
            <Link
              key={p.title}
              to={p.href}
              className="hover-lift group overflow-hidden rounded-2xl border border-border bg-card shadow-sm"
            >
              <div className="h-48 overflow-hidden">
                <img
                  src={p.img}
                  alt={p.title}
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>
              <div className="p-5">
                <h3 className="mb-2 font-display text-base font-semibold text-foreground">{p.title}</h3>
                <p className="mb-3 text-sm leading-relaxed text-muted-foreground">{p.desc}</p>
                <span className="inline-flex items-center gap-1 text-sm font-medium text-accent transition-colors hover:text-accent/80">
                  Read More <ArrowRight className="h-3.5 w-3.5" />
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
