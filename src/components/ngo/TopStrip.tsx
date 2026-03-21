import { Facebook, Twitter, Instagram, Youtube, Phone } from "lucide-react";

const TopStrip = () => {
  return (
    <div className="bg-primary text-primary-foreground">
      <div className="container flex items-center justify-between py-2 text-xs">
        <div className="hidden items-center gap-4 sm:flex">
          <a href="tel:+918978210705" className="flex items-center gap-1 transition-opacity hover:opacity-80">
            <Phone className="h-3 w-3" /> +91 8978210705
          </a>
        </div>
        <div className="flex w-full items-center justify-between gap-4 sm:w-auto sm:justify-end">
          <div className="flex items-center gap-3">
            <a href="/education" className="transition-opacity hover:opacity-80">Education</a>
            <span className="opacity-40">|</span>
            <a href="/grocery" className="transition-opacity hover:opacity-80">Grocery</a>
            <span className="opacity-40">|</span>
            <a href="/employment" className="transition-opacity hover:opacity-80">Employment</a>
          </div>
          <div className="flex items-center gap-2">
            <a href="#" className="rounded-full p-1 transition-colors hover:bg-primary-foreground/10"><Facebook className="h-3.5 w-3.5" /></a>
            <a href="#" className="rounded-full p-1 transition-colors hover:bg-primary-foreground/10"><Twitter className="h-3.5 w-3.5" /></a>
            <a href="#" className="rounded-full p-1 transition-colors hover:bg-primary-foreground/10"><Instagram className="h-3.5 w-3.5" /></a>
            <a href="#" className="rounded-full p-1 transition-colors hover:bg-primary-foreground/10"><Youtube className="h-3.5 w-3.5" /></a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TopStrip;
