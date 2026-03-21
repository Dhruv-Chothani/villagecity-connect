import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "@/contexts/AuthContext";
import { LogOut, Menu, X, Shield } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useState, useEffect, useCallback } from "react";
import logo from "@/assets/logo.svg";

const Navbar = () => {
  const { user, logout, isAdmin, isAuthenticated } = useAuth();
  const navigate = useNavigate();
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // Optimized scroll handler with throttling
  useEffect(() => {
    let timeoutId: NodeJS.Timeout;
    let lastScrollY = 0;

    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      
      // Clear existing timeout
      if (timeoutId) {
        clearTimeout(timeoutId);
      }
      
      // Throttle scroll events
      timeoutId = setTimeout(() => {
        // Only update state if scroll position changed significantly
        if (Math.abs(currentScrollY - lastScrollY) > 10) {
          setScrolled(currentScrollY > 20);
          lastScrollY = currentScrollY;
        }
      }, 16); // ~60fps
    };

    // Use passive event listener for better performance
    window.addEventListener("scroll", handleScroll, { passive: true });
    
    return () => {
      window.removeEventListener("scroll", handleScroll);
      if (timeoutId) {
        clearTimeout(timeoutId);
      }
    };
  }, []);

  // Memoize logout function to prevent unnecessary re-renders
  const handleLogout = useCallback(() => {
    logout();
    navigate("/login", { replace: true });
  }, [logout, navigate]);

  return (
    <nav className={`sticky top-0 z-50 transition-all duration-300 ${scrolled ? "glass shadow-lg" : "bg-transparent border-b border-border/50"}`}>
      <div className="container flex h-16 items-center justify-between">
        <Link to="/" className="flex items-center gap-3">
          <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-white shadow-md shadow-primary/20 border border-primary/20">
            <img src={logo} alt="SVCDA Logo" className="h-10 w-10" />
          </div>
          <div className="hidden sm:block">
            <p className="font-display text-sm font-bold leading-tight text-foreground">Small Village & City</p>
            <p className="text-[11px] text-muted-foreground">Development Agency</p>
          </div>
        </Link>

        {/* Desktop */}
        <div className="hidden items-center gap-3 md:flex">
          <Link to="/" className="rounded-lg px-3 py-2 text-sm font-medium text-muted-foreground transition-colors hover:bg-muted hover:text-foreground">Home</Link>
          
          {/* Admin Link - Only show to authenticated admin users */}
          {isAuthenticated && isAdmin && (
            <Link to="/admin" className="rounded-lg px-3 py-2 text-sm font-medium text-muted-foreground transition-colors hover:bg-muted hover:text-foreground flex items-center gap-1">
              <Shield className="h-4 w-4" /> Admin
            </Link>
          )}
          
          {user ? (
            <>
              <Link to="/dashboard" className="rounded-lg px-3 py-2 text-sm font-medium text-muted-foreground transition-colors hover:bg-muted hover:text-foreground">Dashboard</Link>
              <span className="rounded-full bg-primary/10 px-3 py-1 text-xs font-semibold text-primary">{user.name}</span>
              <Button size="sm" variant="ghost" onClick={handleLogout} className="rounded-lg">
                <LogOut className="mr-1 h-4 w-4" /> Logout
              </Button>
            </>
          ) : (
            <>
              <Link to="/login"><Button size="sm" variant="outline" className="rounded-lg">Customer Login</Button></Link>
              <Link to="/admin-login"><Button size="sm" className="rounded-lg shadow-md shadow-primary/20">Admin Login</Button></Link>
            </>
          )}
        </div>

        {/* Mobile toggle */}
        <button className="flex h-10 w-10 items-center justify-center rounded-lg transition-colors hover:bg-muted md:hidden" onClick={() => setMobileOpen(!mobileOpen)}>
          {mobileOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      {mobileOpen && (
        <div className="glass border-t p-4 md:hidden animate-fade-in">
          <div className="flex flex-col gap-2">
            <Link to="/" onClick={() => setMobileOpen(false)} className="rounded-lg px-3 py-2.5 text-sm font-medium transition-colors hover:bg-muted">Home</Link>
            
            {/* Admin Link - Only show to authenticated admin users */}
            {isAuthenticated && isAdmin && (
              <Link to="/admin" onClick={() => setMobileOpen(false)} className="rounded-lg px-3 py-2.5 text-sm font-medium transition-colors hover:bg-muted flex items-center gap-1">
                <Shield className="h-4 w-4" /> Admin
              </Link>
            )}
            
            {user ? (
              <>
                <Link to="/dashboard" onClick={() => setMobileOpen(false)} className="rounded-lg px-3 py-2.5 text-sm font-medium transition-colors hover:bg-muted">Dashboard</Link>
                <Button size="sm" variant="ghost" onClick={() => { logout(); navigate("/login", { replace: true }); setMobileOpen(false); }} className="justify-start">
                  <LogOut className="mr-1 h-4 w-4" /> Logout
                </Button>
              </>
            ) : (
              <div className="flex gap-2 pt-2">
                <Link to="/login" onClick={() => setMobileOpen(false)} className="flex-1"><Button size="sm" variant="outline" className="w-full rounded-lg">Customer</Button></Link>
                <Link to="/admin-login" onClick={() => setMobileOpen(false)} className="flex-1"><Button size="sm" className="w-full rounded-lg">Admin</Button></Link>
              </div>
            )}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
