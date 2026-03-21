import { GraduationCap, ShoppingCart, Briefcase, HeartPulse, Monitor, Tractor, Wrench, BookOpen, Users } from "lucide-react";
import { Link } from "react-router-dom";

const sectors = [
  {
    icon: GraduationCap,
    num: "1",
    title: "Education Sector",
    items: ["School / College", "Stationery's", "Skill Courses / Books", "Digital Learning"],
    href: "/education",
    color: "from-green-500 to-green-600",
  },
  {
    icon: ShoppingCart,
    num: "2",
    title: "Home Grocery Store",
    items: ["Local Grocery Online Order", "Village Stores Listing", "Home Delivery Option", "Daily Offers & Discounts"],
    href: "/grocery",
    color: "from-orange-500 to-orange-600",
  },
  {
    icon: Briefcase,
    num: "3",
    title: "Business Sector",
    items: ["Small Business Registration", "Local Market Promotion", "Startup Support", "Business Networking"],
    href: "/business",
    color: "from-blue-500 to-blue-600",
  },
  {
    icon: HeartPulse,
    num: "4",
    title: "Health Services",
    items: ["Online Doctor Appointments", "Nearby Hospitals / Clinics", "Medicines Order", "Health Awareness Programs"],
    href: "/health",
    color: "from-red-500 to-red-600",
  },
  {
    icon: Monitor,
    num: "5",
    title: "Electronics Sector",
    items: ["Repair Services Booking", "Buy Electronics", "Mobile, TV, AC & More"],
    href: "/electronics",
    color: "from-indigo-500 to-indigo-600",
  },
  {
    icon: Tractor,
    num: "6",
    title: "Agriculture Sector",
    items: ["Farming Tips", "Crop Market", "Fertilizer & Seeds Info", "Agricultural Machinery Items"],
    href: "/agriculture",
    color: "from-emerald-500 to-emerald-600",
  },
  {
    icon: Wrench,
    num: "7",
    title: "Services Sector",
    items: ["Electricians", "Plumbers", "Carpenters", "Daily Wage Labourers", "Local Service Booking"],
    href: "/services",
    color: "from-amber-500 to-amber-600",
  },
  {
    icon: BookOpen,
    num: "8",
    title: "Skill Development & Training",
    items: ["VCDA Shiksha Mission", "Women Development Programs", "Skill Training Courses", "Job Oriented Programs"],
    href: "/training",
    color: "from-purple-500 to-purple-600",
  },
  {
    icon: Users,
    num: "9",
    title: "Rural & Urban Employment",
    items: ["Awareness Programs", "Daily Wage Jobs", "Company Job Updates", "Employment Registration"],
    href: "/employment",
    color: "from-teal-500 to-teal-600",
  },
];

const FeatureCards = () => {
  return (
    <section className="bg-background py-16 lg:py-20">
      <div className="container">
        <div className="mb-10 text-center">
          <span className="mb-2 inline-block text-sm font-semibold uppercase tracking-wider text-accent">All In One Platform</span>
          <h2 className="font-display text-2xl font-bold text-foreground sm:text-3xl lg:text-4xl">
            9 Sector Service Hub
          </h2>
          <p className="mx-auto mt-3 max-w-2xl text-muted-foreground">
            Access education, grocery, business, health, electronics, agriculture, services, training & employment — everything in one place.
          </p>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {sectors.map((s) => (
            <Link
              key={s.title}
              to={s.href}
              className="hover-lift group rounded-2xl border border-border bg-card p-6 shadow-sm transition-all"
            >
              <div className="mb-4 flex items-center gap-3">
                <div className={`flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br ${s.color} text-sm font-bold text-white shadow-md`}>
                  {s.num}
                </div>
                <div className="flex items-center gap-2">
                  <s.icon className="h-5 w-5 text-primary" />
                  <h3 className="font-display text-base font-semibold text-foreground">{s.title}</h3>
                </div>
              </div>
              <ul className="space-y-1.5">
                {s.items.map((item) => (
                  <li key={item} className="flex items-center gap-2 text-sm text-muted-foreground">
                    <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
                    {item}
                  </li>
                ))}
              </ul>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeatureCards;
