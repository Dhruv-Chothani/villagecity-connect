import { Users, BookOpen, HeartPulse, Briefcase } from "lucide-react";

const stats = [
  { icon: Users, value: "30,000+", label: "Families Supported" },
  { icon: BookOpen, value: "20,000+", label: "Skill Programs" },
  { icon: HeartPulse, value: "500+", label: "Health Camps" },
  { icon: Briefcase, value: "9", label: "Service Sectors" },
];

const StatsSection = () => {
  return (
    <section className="bg-primary py-14 lg:py-16">
      <div className="container">
        <div className="grid grid-cols-2 gap-8 text-center lg:grid-cols-4">
          {stats.map((s) => (
            <div key={s.label}>
              <s.icon className="mx-auto mb-3 h-8 w-8 text-accent" />
              <p className="font-display text-2xl font-bold text-primary-foreground sm:text-3xl">{s.value}</p>
              <p className="mt-1 text-sm text-primary-foreground/70">{s.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StatsSection;
