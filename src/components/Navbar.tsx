import { Link, useNavigate, useLocation } from "react-router-dom";
import { useAuth } from "@/contexts/AuthContext";
import { LogOut, Menu, X, Shield, ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useState, useEffect, useCallback } from "react";
import logo from "@/assets/logo.svg";

const Navbar = () => {
  const { user, logout, isAdmin, isAuthenticated } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // Check if current page is not home
  const isNotHomePage = location.pathname !== "/";
  
  // Handle back navigation
  const handleBack = useCallback(() => {
    navigate(-1);
  }, [navigate]);

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
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? "bg-white/95 backdrop-blur-sm shadow-lg border-b border-gray-200" : "bg-white border-b border-gray-200"}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-3 sm:gap-4 flex-shrink-0">
            <img src={logo} alt="SVCDA Logo" className="h-14 w-14 sm:h-16 sm:w-16 lg:h-20 lg:w-20" />
            <div className="hidden sm:block">
              <p className="font-bold text-base sm:text-lg lg:text-xl leading-tight text-gray-900">SVCDA</p>
              <p className="text-sm sm:text-base text-gray-600">Development Agency</p>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-1">
            <Link to="/" className="rounded-lg px-3 py-2 text-sm font-medium text-gray-600 hover:text-gray-900 hover:bg-gray-100 transition-colors">Home</Link>
            <Link to="/education" className="rounded-lg px-3 py-2 text-sm font-medium text-gray-600 hover:text-gray-900 hover:bg-gray-100 transition-colors">Education</Link>
            <Link to="/grocery" className="rounded-lg px-3 py-2 text-sm font-medium text-gray-600 hover:text-gray-900 hover:bg-gray-100 transition-colors">Grocery</Link>
            <Link to="/business" className="rounded-lg px-3 py-2 text-sm font-medium text-gray-600 hover:text-gray-900 hover:bg-gray-100 transition-colors">Business</Link>
            <Link to="/health" className="rounded-lg px-3 py-2 text-sm font-medium text-gray-600 hover:text-gray-900 hover:bg-gray-100 transition-colors">Health</Link>
            <Link to="/services" className="rounded-lg px-3 py-2 text-sm font-medium text-gray-600 hover:text-gray-900 hover:bg-gray-100 transition-colors">Services</Link>
            <Link to="/employment" className="rounded-lg px-3 py-2 text-sm font-medium text-gray-600 hover:text-gray-900 hover:bg-gray-100 transition-colors">Employment</Link>
            
            {/* Admin Link - Only show to authenticated admin users */}
            {isAuthenticated && isAdmin && (
              <Link to="/admin" className="rounded-lg px-3 py-2 text-sm font-medium text-gray-600 hover:text-gray-900 hover:bg-gray-100 transition-colors flex items-center gap-1">
                <Shield className="h-4 w-4" /> Admin
              </Link>
            )}
            
            {/* Auth Buttons */}
            {user ? (
              <>
                <Link to="/dashboard" className="rounded-lg px-3 py-2 text-sm font-medium text-gray-600 hover:text-gray-900 hover:bg-gray-100 transition-colors">Dashboard</Link>
                <div className="h-6 w-px bg-gray-300"></div>
                <span className="rounded-full bg-primary/10 px-3 py-1 text-xs font-semibold text-primary hidden xl:block">{user.name}</span>
                <Button size="sm" variant="ghost" onClick={handleLogout} className="rounded-lg px-3 py-2 text-sm">
                  <LogOut className="mr-1 h-4 w-4" /> Logout
                </Button>
              </>
            ) : (
              <div className="flex items-center gap-2 ml-2">
                <Link to="/login"><Button size="sm" variant="outline" className="rounded-lg">Customer</Button></Link>
                <Link to="/admin-login"><Button size="sm" className="rounded-lg">Admin</Button></Link>
              </div>
            )}
          </div>

          {/* Mobile/Tablet Navigation */}
          <div className="flex lg:hidden items-center gap-2">
            {/* Mobile menu button */}
            <button className="flex h-10 w-10 items-center justify-center rounded-lg hover:bg-gray-100 transition-colors" onClick={() => setMobileOpen(!mobileOpen)}>
              {mobileOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileOpen && (
        <div className="bg-white border-t border-gray-200 lg:hidden">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
            <div className="flex flex-col gap-2">
              <Link to="/" onClick={() => setMobileOpen(false)} className="rounded-lg px-4 py-3 text-sm font-medium text-gray-600 hover:text-gray-900 hover:bg-gray-100 transition-colors">Home</Link>
              <Link to="/education" onClick={() => setMobileOpen(false)} className="rounded-lg px-4 py-3 text-sm font-medium text-gray-600 hover:text-gray-900 hover:bg-gray-100 transition-colors">Education</Link>
              <Link to="/grocery" onClick={() => setMobileOpen(false)} className="rounded-lg px-4 py-3 text-sm font-medium text-gray-600 hover:text-gray-900 hover:bg-gray-100 transition-colors">Grocery</Link>
              <Link to="/business" onClick={() => setMobileOpen(false)} className="rounded-lg px-4 py-3 text-sm font-medium text-gray-600 hover:text-gray-900 hover:bg-gray-100 transition-colors">Business</Link>
              <Link to="/health" onClick={() => setMobileOpen(false)} className="rounded-lg px-4 py-3 text-sm font-medium text-gray-600 hover:text-gray-900 hover:bg-gray-100 transition-colors">Health</Link>
              <Link to="/services" onClick={() => setMobileOpen(false)} className="rounded-lg px-4 py-3 text-sm font-medium text-gray-600 hover:text-gray-900 hover:bg-gray-100 transition-colors">Services</Link>
              <Link to="/employment" onClick={() => setMobileOpen(false)} className="rounded-lg px-4 py-3 text-sm font-medium text-gray-600 hover:text-gray-900 hover:bg-gray-100 transition-colors">Employment</Link>
              
              {/* Admin Link - Only show to authenticated admin users */}
              {isAuthenticated && isAdmin && (
                <Link to="/admin" onClick={() => setMobileOpen(false)} className="rounded-lg px-4 py-3 text-sm font-medium text-gray-600 hover:text-gray-900 hover:bg-gray-100 transition-colors flex items-center gap-2">
                  <Shield className="h-4 w-4" /> Admin
                </Link>
              )}
              
              {user ? (
                <>
                  <Link to="/dashboard" onClick={() => setMobileOpen(false)} className="rounded-lg px-4 py-3 text-sm font-medium text-gray-600 hover:text-gray-900 hover:bg-gray-100 transition-colors">Dashboard</Link>
                  <div className="border-t border-gray-200 pt-2">
                    <Button size="sm" variant="ghost" onClick={() => { logout(); navigate("/login", { replace: true }); setMobileOpen(false); }} className="justify-start rounded-lg w-full">
                      <LogOut className="mr-2 h-4 w-4" /> Logout
                    </Button>
                  </div>
                </>
              ) : (
                <div className="border-t border-gray-200 pt-2 flex gap-2">
                  <Link to="/login" onClick={() => setMobileOpen(false)} className="flex-1"><Button size="sm" variant="outline" className="w-full rounded-lg">Customer</Button></Link>
                  <Link to="/admin-login" onClick={() => setMobileOpen(false)} className="flex-1"><Button size="sm" className="w-full rounded-lg">Admin</Button></Link>
                </div>
              )}
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
