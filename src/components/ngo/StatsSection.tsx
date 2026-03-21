import { Users, BookOpen, HeartPulse, Briefcase } from "lucide-react";

const stats = [
  { icon: Users, value: "30,000+", label: "Families Supported" },
  { icon: BookOpen, value: "20,000+", label: "Skill Programs" },
  { icon: HeartPulse, value: "500+", label: "Health Camps" },
  { icon: Briefcase, value: "9", label: "Service Sectors" },
];

const StatsSection = () => {
  return (
    <section className="bg-primary py-10 sm:py-12 lg:py-16">
      <div className="container px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 gap-6 sm:gap-8 text-center lg:grid-cols-4">
          {stats.map((s) => (
            <div key={s.label} className="p-4 sm:p-6">
              <s.icon className="mx-auto mb-3 h-6 w-6 sm:h-8 sm:w-8 text-accent" />
              <p className="font-display text-xl sm:text-2xl lg:text-3xl font-bold text-primary-foreground">{s.value}</p>
              <p className="mt-1 text-xs sm:text-sm text-primary-foreground/70">{s.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StatsSection;
