import { useState } from "react";
import { Phone, Menu, X } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import logo from "@/assets/logo.svg";

const navLinks = [
  { label: "Home", href: "/" },
  { label: "Education", href: "/education" },
  { label: "Grocery", href: "/grocery" },
  { label: "Business", href: "/business" },
  { label: "Health", href: "/health" },
  { label: "Services", href: "/services" },
  { label: "Employment", href: "/employment" },
];

const MainNavbar = () => {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-50 border-b border-border bg-background shadow-sm">
      <div className="container flex h-16 items-center justify-between lg:h-20">
        <Link to="/" className="flex items-center gap-2">
          <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-primary/10 shadow-sm border border-primary/20 lg:h-12 lg:w-12">
            <img src={logo} alt="SVCDA Logo" className="h-8 w-8 lg:h-10 lg:w-10" />
          </div>
          <div>
            <p className="font-display text-sm font-bold leading-tight text-primary lg:text-base">Small Village & City</p>
            <p className="text-[10px] font-medium text-muted-foreground lg:text-xs">Development Agency</p>
          </div>
        </Link>

        <div className="hidden items-center gap-1 xl:flex">
          {navLinks.map((link) => (
            <Link
              key={link.label}
              to={link.href}
              className="rounded-lg px-3 py-2 text-sm font-medium text-foreground transition-colors hover:bg-secondary hover:text-primary"
            >
              {link.label}
            </Link>
          ))}
        </div>

        <div className="hidden items-center gap-3 lg:flex">
          <a href="tel:+918978210705" className="flex items-center gap-1.5 text-sm font-medium text-foreground">
            <Phone className="h-4 w-4 text-accent" />
            +91 8978210705
          </a>
          <Link to="/login">
            <Button variant="outline" size="sm" className="rounded-lg border-primary text-primary hover:bg-primary hover:text-primary-foreground">
              Login
            </Button>
          </Link>
          <Link to="/register">
            <Button size="sm" className="rounded-lg bg-accent text-accent-foreground hover:bg-accent/90 shadow-md">
              Register Now
            </Button>
          </Link>
        </div>

        <button
          className="flex h-10 w-10 items-center justify-center rounded-lg hover:bg-muted xl:hidden"
          onClick={() => setMobileOpen(!mobileOpen)}
        >
          {mobileOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      {mobileOpen && (
        <div className="border-t bg-background p-4 animate-fade-in xl:hidden">
          <div className="flex flex-col gap-1">
            {navLinks.map((link) => (
              <Link
                key={link.label}
                to={link.href}
                onClick={() => setMobileOpen(false)}
                className="rounded-lg px-3 py-2.5 text-sm font-medium transition-colors hover:bg-secondary"
              >
                {link.label}
              </Link>
            ))}
            <div className="mt-3 flex gap-2">
              <Link to="/login" className="flex-1">
                <Button variant="outline" size="sm" className="w-full rounded-lg border-primary text-primary">Login</Button>
              </Link>
              <Link to="/register" className="flex-1">
                <Button size="sm" className="w-full rounded-lg bg-accent text-accent-foreground">Register</Button>
              </Link>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default MainNavbar;
