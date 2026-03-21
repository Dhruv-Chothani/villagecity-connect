import { Facebook, Twitter, Instagram, Youtube, Mail, Phone, MapPin } from "lucide-react";
import { Link } from "react-router-dom";
import logo from "@/assets/logo.svg";

const NgoFooter = () => {
  return (
    <footer id="contact" className="bg-primary text-primary-foreground">
      <div className="container py-12 lg:py-16">
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          <div>
            <div className="mb-4 flex items-center gap-2">
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary-foreground/10 p-1">
                <img src={logo} alt="SVCDA" className="h-8 w-8" />
              </div>
              <div>
                <p className="font-display text-sm font-bold">Small Village & City</p>
                <p className="text-xs text-primary-foreground/60">Development Agency</p>
              </div>
            </div>
            <p className="mb-2 text-sm italic text-primary-foreground/80">
              "One App for Village & City Development." 🚀
            </p>
            <p className="mb-4 text-sm leading-relaxed text-primary-foreground/70">
              Building digitally connected rural & urban communities through one platform.
            </p>
            <div className="flex gap-2">
              <a href="#" className="rounded-full bg-primary-foreground/10 p-2 transition-colors hover:bg-primary-foreground/20"><Facebook className="h-4 w-4" /></a>
              <a href="#" className="rounded-full bg-primary-foreground/10 p-2 transition-colors hover:bg-primary-foreground/20"><Twitter className="h-4 w-4" /></a>
              <a href="#" className="rounded-full bg-primary-foreground/10 p-2 transition-colors hover:bg-primary-foreground/20"><Instagram className="h-4 w-4" /></a>
              <a href="#" className="rounded-full bg-primary-foreground/10 p-2 transition-colors hover:bg-primary-foreground/20"><Youtube className="h-4 w-4" /></a>
            </div>
          </div>

          <div>
            <h4 className="mb-4 font-display text-sm font-semibold uppercase tracking-wider">Sectors</h4>
            <ul className="space-y-2 text-sm text-primary-foreground/70">
              <li><Link to="/education" className="transition-colors hover:text-primary-foreground">Education</Link></li>
              <li><Link to="/grocery" className="transition-colors hover:text-primary-foreground">Grocery</Link></li>
              <li><Link to="/business" className="transition-colors hover:text-primary-foreground">Business</Link></li>
              <li><Link to="/health" className="transition-colors hover:text-primary-foreground">Health Services</Link></li>
              <li><Link to="/agriculture" className="transition-colors hover:text-primary-foreground">Agriculture</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="mb-4 font-display text-sm font-semibold uppercase tracking-wider">More</h4>
            <ul className="space-y-2 text-sm text-primary-foreground/70">
              <li><Link to="/electronics" className="transition-colors hover:text-primary-foreground">Electronics</Link></li>
              <li><Link to="/services" className="transition-colors hover:text-primary-foreground">Services</Link></li>
              <li><Link to="/training" className="transition-colors hover:text-primary-foreground">Skill Development</Link></li>
              <li><Link to="/employment" className="transition-colors hover:text-primary-foreground">Employment</Link></li>
              <li><Link to="/login" className="transition-colors hover:text-primary-foreground">Login</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="mb-4 font-display text-sm font-semibold uppercase tracking-wider">Contact Us</h4>
            <ul className="space-y-3 text-sm text-primary-foreground/70">
              <li className="flex items-start gap-2">
                <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-accent" />
                India
              </li>
              <li className="flex items-center gap-2">
                <Phone className="h-4 w-4 shrink-0 text-accent" />
                +91 8978210705
              </li>
              <li className="flex items-center gap-2">
                <Mail className="h-4 w-4 shrink-0 text-accent" />
                contact@svcda.in
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className="border-t border-primary-foreground/10">
        <div className="container py-4 text-center text-xs text-primary-foreground/50">
          © {new Date().getFullYear()} Small Village & City Development Agency (SVCDA). All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default NgoFooter;
