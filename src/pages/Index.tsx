import { Link } from "react-router-dom";
import { GraduationCap, ShoppingCart, Briefcase, Heart, Monitor, Tractor, Wrench, BookOpen, Users, Rocket, Phone, ArrowRight, Star, Zap, Globe, MapPin, CheckCircle, TrendingUp, Award, Building, Users2, Lightbulb, Target, Shield, Clock, MessageCircle, ThumbsUp } from "lucide-react";
import logo from "@/assets/logo.svg";

const sectors = [
  { key: "education", icon: GraduationCap, title: "Education Sector", desc: "Schools, Colleges, Skill Courses & Books", path: "/education", color: "bg-sector-education", image: "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?w=400&h=250&fit=crop&crop=entropy&auto=format" },
  { key: "grocery", icon: ShoppingCart, title: "Home Grocery Store", desc: "Online Grocery, Home Delivery, Daily Discounts", path: "/grocery", color: "bg-sector-grocery", image: "https://images.unsplash.com/photo-1542838132-92c53300491e?w=400&h=250&fit=crop&crop=entropy&auto=format" },
  { key: "business", icon: Briefcase, title: "Business Sector", desc: "Startup Support, Local Market, Networking", path: "/business", color: "bg-sector-business", image: "https://images.unsplash.com/photo-1507679799987-487c21bf244a?w=400&h=250&fit=crop&crop=entropy&auto=format" },
  { key: "health", icon: Heart, title: "Health Services", desc: "Doctor Consult, Medicines, Hospitals", path: "/health", color: "bg-sector-health", image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=400&h=250&fit=crop&crop=entropy&auto=format" },
  { key: "electronics", icon: Monitor, title: "Electronics Sector", desc: "Repair & Buy Electronics", path: "/electronics", color: "bg-sector-electronics", image: "https://images.unsplash.com/photo-1498049794561-7780e7231661?w=400&h=250&fit=crop&crop=entropy&auto=format" },
  { key: "agriculture", icon: Tractor, title: "Agriculture Sector", desc: "Farming Tips, Crop Market, Seeds & Machinery", path: "/agriculture", color: "bg-sector-agriculture", image: "https://images.unsplash.com/photo-1591292171169-b7356c8c8e0d?w=400&h=250&fit=crop&crop=entropy&auto=format" },
  { key: "services", icon: Wrench, title: "Services Sector", desc: "Electricians, Plumbers, Labour Services", path: "/services", color: "bg-sector-services", image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=400&h=250&fit=crop&crop=entropy&auto=format" },
  { key: "training", icon: BookOpen, title: "Skill Development", desc: "VCDA Shiksha Mission, Job Courses, Women Empowerment", path: "/training", color: "bg-sector-training", image: "https://images.unsplash.com/photo-1524178232363-1fb2b075b655?w=400&h=250&fit=crop&crop=entropy&auto=format" },
  { key: "employment", icon: Users, title: "Employment Sector", desc: "Job Alerts, Daily Wage Jobs, Registration", path: "/employment", color: "bg-sector-employment", image: "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?w=400&h=250&fit=crop&crop=entropy&auto=format" },
];

const stats = [
  { label: "Villages Connected", value: "500+", icon: Globe },
  { label: "Active Users", value: "10K+", icon: Users },
  { label: "Services Offered", value: "9", icon: Zap },
  { label: "Success Stories", value: "1200+", icon: Star },
];

const testimonials = [
  {
    name: "Ramesh Kumar",
    role: "Farmer",
    location: "Rural Village",
    content: "SVCDA transformed my farming business. I now get better prices for my crops and access to modern farming equipment.",
    rating: 5,
    image: "👨‍🌾"
  },
  {
    name: "Priya Sharma",
    role: "Small Business Owner",
    location: "Town Area",
    content: "The business sector support helped me expand my shop from a small store to a thriving local business with online presence.",
    rating: 5,
    image: "👩‍💼"
  },
  {
    name: "Anita Devi",
    role: "Student",
    location: "Village",
    content: "Through VCDA Shiksha Mission, I got free computer training and now work as a data entry operator.",
    rating: 5,
    image: "👩‍🎓"
  }
];

const successStories = [
  {
    title: "Digital Literacy Campaign",
    description: "Successfully trained 500+ villagers in basic computer skills and digital payments",
    icon: Lightbulb,
    stats: "500+ People Trained",
    color: "bg-blue-100 text-blue-600"
  },
  {
    title: "Farmers Market Connect",
    description: "Connected 200+ farmers directly with urban markets, eliminating middlemen",
    icon: TrendingUp,
    stats: "200+ Farmers Benefited",
    color: "bg-green-100 text-green-600"
  },
  {
    title: "Women Empowerment",
    description: "Empowered 300+ women with skill development and employment opportunities",
    icon: Award,
    stats: "300+ Women Empowered",
    color: "bg-purple-100 text-purple-600"
  },
  {
    title: "Healthcare Access",
    description: "Provided telemedicine services to 1000+ patients in remote villages",
    icon: Heart,
    stats: "1000+ Patients Helped",
    color: "bg-red-100 text-red-600"
  }
];

const features = [
  {
    icon: Shield,
    title: "Trusted Platform",
    description: "Secure and reliable services for all your needs"
  },
  {
    icon: Clock,
    title: "24/7 Support",
    description: "Round-the-clock assistance for all sectors"
  },
  {
    icon: MessageCircle,
    title: "Community Driven",
    description: "Built by the community, for the community"
  },
  {
    icon: Target,
    title: "Goal Oriented",
    description: "Focused on sustainable development"
  }
];

const Index = () => {
  return (
    <div className="min-h-screen">
      {/* Hero */}
      <section className="relative overflow-hidden gradient-hero px-4 py-20 text-primary-foreground md:py-32">
        <div className="container relative z-10 text-center">
          <div className="mx-auto mb-8 flex h-40 w-40 items-center justify-center rounded-3xl bg-white shadow-2xl">
            <img src={logo} alt="SVCDA Logo" className="h-36 w-36" />
          </div>
          <div className="mb-3 inline-flex items-center gap-2 rounded-full border border-primary-foreground/20 bg-primary-foreground/10 px-4 py-1.5 text-xs font-medium backdrop-blur-sm">
            <span className="h-2 w-2 rounded-full bg-secondary" />
            Empowering Rural & Urban Communities
          </div>
          <h1 className="mb-4 text-4xl font-extrabold leading-tight tracking-tight md:text-6xl lg:text-7xl">
            Small Village & City
            <br />
            <span className="gradient-text">Development Agency</span>
          </h1>
          <p className="mx-auto mb-3 max-w-2xl text-lg font-medium opacity-90 md:text-xl">
            All-in-One Sector Service Hub
          </p>
          <p className="mx-auto mb-10 max-w-lg text-sm opacity-70 md:text-base">
            Building a digitally connected & empowered community through one platform — bridging villages and cities.
          </p>
          
          {/* Hero Image */}
          <div className="mb-10 mx-auto max-w-4xl">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl">
              <img 
                src="https://images.unsplash.com/photo-1628595351029-c2bf17511435?w=800&h=400&fit=crop&crop=entropy&auto=format"
                alt="Rural and Urban Development"
                className="w-full h-64 md:h-96 object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
              <div className="absolute bottom-4 left-4 right-4 text-white">
                <p className="text-sm font-medium">Connecting Communities, Transforming Lives</p>
              </div>
            </div>
          </div>
          
          <div className="flex flex-wrap items-center justify-center gap-4">
            <Link to="/register" className="group inline-flex items-center gap-2 rounded-xl bg-secondary px-8 py-4 text-sm font-bold text-secondary-foreground shadow-lg shadow-secondary/30 transition-all hover:shadow-xl hover:shadow-secondary/40 hover:-translate-y-0.5">
              Get Started Free
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Link>
            <a href="tel:+918978210705" className="inline-flex items-center gap-2 rounded-xl border-2 border-primary-foreground/20 bg-primary-foreground/5 px-8 py-4 text-sm font-semibold backdrop-blur-sm transition-all hover:bg-primary-foreground/10 hover:border-primary-foreground/30">
              <Phone className="h-4 w-4" /> +91 8978210705
            </a>
          </div>
        </div>
      </section>

      {/* Stats Bar */}
      <section className="relative z-10 -mt-8 px-4">
        <div className="container">
          <div className="glass mx-auto grid max-w-4xl grid-cols-2 gap-4 rounded-2xl p-6 shadow-xl md:grid-cols-4 md:gap-6">
            {stats.map((stat) => (
              <div key={stat.label} className="text-center">
                <stat.icon className="mx-auto mb-2 h-5 w-5 text-primary" />
                <p className="text-2xl font-extrabold text-foreground md:text-3xl">{stat.value}</p>
                <p className="text-xs font-medium text-muted-foreground">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Sectors Grid */}
      <section className="container py-16 md:py-24">
        <div className="mb-12 text-center">
          <span className="mb-3 inline-block rounded-full bg-primary/10 px-4 py-1.5 text-xs font-semibold text-primary">
            OUR SECTORS
          </span>
          <h2 className="mb-3 text-3xl font-extrabold md:text-4xl">Everything You Need, One Platform</h2>
          <p className="mx-auto max-w-md text-muted-foreground">9 comprehensive sectors serving rural & urban communities with digital-first solutions</p>
        </div>
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {sectors.map((s, i) => (
            <Link
              key={s.key}
              to={s.path}
              className="sector-card shimmer-border group overflow-hidden rounded-2xl border bg-card shadow-sm transition-all hover:shadow-lg hover:-translate-y-1 stagger-fade-in"
              style={{ animationDelay: `${i * 80}ms` }}
            >
              <div className="relative h-40 overflow-hidden">
                <img 
                  src={s.image} 
                  alt={s.title}
                  className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                <div className={`absolute top-4 left-4 flex h-12 w-12 items-center justify-center rounded-xl ${s.color} text-primary-foreground shadow-lg transition-transform duration-300 group-hover:scale-110 group-hover:rotate-3`}>
                  <s.icon className="h-6 w-6" />
                </div>
              </div>
              <div className="p-5">
                <h3 className="font-display text-lg font-bold transition-colors group-hover:text-primary">{s.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{s.desc}</p>
                <span className="mt-4 inline-flex items-center gap-1 text-xs font-semibold text-primary opacity-0 transition-all duration-300 group-hover:opacity-100">
                  Explore <ArrowRight className="h-3 w-3" />
                </span>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* Vision & Mission */}
      <section className="border-t bg-muted/40 py-16 md:py-20">
        <div className="container">
          <div className="mb-10 text-center">
            <span className="mb-3 inline-block rounded-full bg-secondary/10 px-4 py-1.5 text-xs font-semibold text-secondary">
              WHY CHOOSE US
            </span>
            <h2 className="text-3xl font-extrabold md:text-4xl">Our Purpose & Direction</h2>
          </div>
          <div className="grid gap-6 md:grid-cols-2">
            <div className="group rounded-2xl border bg-card p-8 shadow-sm transition-all hover:shadow-lg hover:-translate-y-1">
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 text-2xl">🎯</div>
              <h3 className="mb-3 text-xl font-bold text-primary">Our Vision</h3>
              <p className="text-sm leading-relaxed text-muted-foreground">
                To build a digitally connected & empowered rural & urban community through one platform — bridging the gap between villages and cities with technology and innovation.
              </p>
            </div>
            <div className="group rounded-2xl border bg-card p-8 shadow-sm transition-all hover:shadow-lg hover:-translate-y-1">
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-secondary/10 text-2xl">🚀</div>
              <h3 className="mb-3 text-xl font-bold text-secondary">Our Mission</h3>
              <p className="text-sm leading-relaxed text-muted-foreground">
                Education, Business, Healthcare, Agriculture & Employment Support — all accessible through a single digital platform designed for every citizen.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 md:py-20">
        <div className="container">
          <div className="mb-12 text-center">
            <span className="mb-3 inline-block rounded-full bg-primary/10 px-4 py-1.5 text-xs font-semibold text-primary">
              PLATFORM FEATURES
            </span>
            <h2 className="mb-3 text-3xl font-extrabold md:text-4xl">Why Choose SVCDA</h2>
            <p className="mx-auto max-w-md text-muted-foreground">Experience the difference with our comprehensive service platform</p>
          </div>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {features.map((feature, index) => (
              <div key={index} className="text-center group">
                <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-2xl bg-primary/10 text-primary transition-all group-hover:scale-110 group-hover:bg-primary group-hover:text-primary-foreground">
                  <feature.icon className="h-8 w-8" />
                </div>
                <h3 className="mb-2 font-semibold text-foreground">{feature.title}</h3>
                <p className="text-sm text-muted-foreground">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Success Stories */}
      <section className="border-t bg-muted/30 py-16 md:py-20">
        <div className="container">
          <div className="mb-12 text-center">
            <span className="mb-3 inline-block rounded-full bg-secondary/10 px-4 py-1.5 text-xs font-semibold text-secondary">
              SUCCESS STORIES
            </span>
            <h2 className="mb-3 text-3xl font-extrabold md:text-4xl">Real Impact, Real Lives</h2>
            <p className="mx-auto max-w-md text-muted-foreground">See how we're making a difference in communities</p>
          </div>
          <div className="grid gap-6 md:grid-cols-2">
            {successStories.map((story, index) => (
              <div key={index} className="group rounded-2xl border bg-card p-6 shadow-sm transition-all hover:shadow-lg hover:-translate-y-1">
                <div className="mb-4 flex items-start gap-4">
                  <div className={`flex h-12 w-12 items-center justify-center rounded-xl ${story.color}`}>
                    <story.icon className="h-6 w-6" />
                  </div>
                  <div className="flex-1">
                    <h3 className="mb-1 text-lg font-bold text-foreground">{story.title}</h3>
                    <p className="mb-2 text-sm font-semibold text-primary">{story.stats}</p>
                    <p className="text-sm text-muted-foreground">{story.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16 md:py-20">
        <div className="container">
          <div className="mb-12 text-center">
            <span className="mb-3 inline-block rounded-full bg-primary/10 px-4 py-1.5 text-xs font-semibold text-primary">
              TESTIMONIALS
            </span>
            <h2 className="mb-3 text-3xl font-extrabold md:text-4xl">What Our Users Say</h2>
            <p className="mx-auto max-w-md text-muted-foreground">Real stories from real people</p>
          </div>
          <div className="grid gap-6 md:grid-cols-3">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="rounded-2xl border bg-card p-6 shadow-sm">
                <div className="mb-4 flex items-center gap-3">
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/10 text-2xl">
                    {testimonial.image}
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground">{testimonial.name}</h4>
                    <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                  </div>
                </div>
                <div className="mb-3 flex gap-1">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                <p className="text-sm text-muted-foreground italic">"{testimonial.content}"</p>
                <div className="mt-3 flex items-center gap-1 text-xs text-muted-foreground">
                  <MapPin className="h-3 w-3" />
                  {testimonial.location}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="gradient-hero py-16 md:py-20">
        <div className="container text-center text-primary-foreground">
          <h2 className="mb-4 text-3xl font-extrabold md:text-4xl">Ready to Transform Your Community?</h2>
          <p className="mx-auto mb-8 max-w-md text-sm opacity-80">
            Join thousands of users already benefiting from our all-in-one service platform.
          </p>
          <Link to="/register" className="group inline-flex items-center gap-2 rounded-xl bg-secondary px-8 py-4 text-sm font-bold text-secondary-foreground shadow-lg shadow-secondary/30 transition-all hover:shadow-xl hover:-translate-y-0.5">
            Join Now — It's Free
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
          </Link>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t bg-card py-10">
        <div className="container">
          <div className="flex flex-col items-center gap-4">
            <div className="flex items-center gap-2">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-primary">
                <Rocket className="h-5 w-5 text-primary-foreground" />
              </div>
              <div>
                <p className="font-display text-sm font-bold">Small Village & City</p>
                <p className="text-xs text-muted-foreground">Development Agency</p>
              </div>
            </div>
            <p className="font-display text-base font-bold text-foreground">"One App for Village & City Development" 🚀</p>
            <div className="flex items-center gap-4 text-sm text-muted-foreground">
              <span>© 2026 SVCDA</span>
              <span>•</span>
              <a href="tel:+918978210705" className="transition-colors hover:text-primary">+91 8978210705</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
