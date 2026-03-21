import { useState } from "react";
import { Outlet, Link, useLocation, useNavigate } from "react-router-dom";
import { useAuth } from "@/contexts/AuthContext";
import { 
  LayoutDashboard, Users, BarChart3, Settings, LogOut, 
  Menu, X, Search, Bell, ChevronDown, Home, Building, 
  ShoppingCart, Briefcase, Heart, Cpu, Leaf, Wrench, 
  GraduationCap, BriefcaseIcon, TrendingUp, FileText,
  MoreHorizontal
} from "lucide-react";
import logo from "@/assets/logo.svg";
import { toast } from "sonner";

const AdminLayout = () => {
  const [sidebarOpen, setSidebarOpen] = useState(true);
  const location = useLocation();
  const { logout } = useAuth();
  const navigate = useNavigate();

  const menuItems = [
    { path: "/admin-dashboard", icon: LayoutDashboard, label: "Dashboard", badge: null },
    { path: "/admin-dashboard/users", icon: Users, label: "Users", badge: "2.5K" },
    { path: "/admin-dashboard/education", icon: GraduationCap, label: "Education", badge: null },
    { path: "/admin-dashboard/grocery", icon: ShoppingCart, label: "Grocery", badge: null },
    { path: "/admin-dashboard/business", icon: Briefcase, label: "Business", badge: null },
    { path: "/admin-dashboard/health", icon: Heart, label: "Health", badge: null },
    { path: "/admin-dashboard/electronics", icon: Cpu, label: "Electronics", badge: null },
    { path: "/admin-dashboard/agriculture", icon: Leaf, label: "Agriculture", badge: null },
    { path: "/admin-dashboard/services", icon: Wrench, label: "Services", badge: null },
    { path: "/admin-dashboard/training", icon: GraduationCap, label: "Training", badge: null },
    { path: "/admin-dashboard/employment", icon: BriefcaseIcon, label: "Employment", badge: null },
    { path: "/admin-dashboard/analytics", icon: BarChart3, label: "Analytics", badge: null },
    { path: "/admin-dashboard/reports", icon: FileText, label: "Reports", badge: null },
    { path: "/admin-dashboard/settings", icon: Settings, label: "Settings", badge: null },
  ];

  const isActive = (path: string) => location.pathname === path;

  const handleLogout = () => {
    try {
      // Clear authentication data
      logout();
      
      // Show success toast
      toast.success("Logged out successfully", {
        description: "You have been logged out of the admin panel",
        duration: 3000,
      });
      
      // Redirect to login page with replace to prevent back navigation
      navigate("/login", { replace: true });
    } catch (error) {
      toast.error("Logout failed", {
        description: "There was an error logging out. Please try again.",
        duration: 5000,
      });
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-white border-b border-gray-200">
        <div className="flex items-center justify-between px-4 py-3">
          <div className="flex items-center gap-2">
            <button
              onClick={() => setSidebarOpen(!sidebarOpen)}
              className="p-2 rounded-lg hover:bg-gray-100 transition-colors"
            >
              {sidebarOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </button>
            <div className="flex items-center gap-2">
              <div className="h-10 w-10 bg-white rounded-lg flex items-center justify-center border border-primary/20 shadow-sm">
                <img src={logo} alt="SVCDA Logo" className="h-8 w-8" />
              </div>
              <div className="hidden sm:block">
                <h1 className="text-lg font-bold text-gray-900">SVCDA Admin</h1>
              </div>
            </div>
          </div>

          <div className="flex items-center gap-2">
            {/* Search - Hidden on mobile */}
            <div className="hidden md:flex items-center gap-2 bg-gray-100 rounded-lg px-3 py-2">
              <Search className="h-4 w-4 text-gray-400" />
              <input
                type="text"
                placeholder="Search..."
                className="bg-transparent outline-none text-sm w-32 lg:w-64"
              />
            </div>

            {/* Notifications */}
            <button className="relative p-2 rounded-lg hover:bg-gray-100 transition-colors">
              <Bell className="h-5 w-5 text-gray-600" />
              <span className="absolute top-1 right-1 h-2 w-2 bg-red-500 rounded-full"></span>
            </button>

            {/* User Menu - Simplified on mobile */}
            <div className="flex items-center gap-2">
              <div className="h-8 w-8 bg-primary rounded-full flex items-center justify-center">
                <span className="text-xs font-bold text-primary-foreground">A</span>
              </div>
              <div className="hidden lg:block">
                <p className="text-sm font-medium text-gray-900">Admin User</p>
                <p className="text-xs text-gray-500">admin@svcda.com</p>
              </div>
              <ChevronDown className="hidden lg:block h-4 w-4 text-gray-400" />
            </div>
          </div>
        </div>
      </header>

      <div className="flex pt-16">
        {/* Mobile Overlay */}
        {sidebarOpen && (
          <div 
            className="fixed inset-0 bg-black/50 z-30 lg:hidden"
            onClick={() => setSidebarOpen(false)}
          />
        )}
        
        {/* Sidebar */}
        <aside className={`fixed left-0 top-16 h-[calc(100vh-4rem)] bg-white border-r border-gray-200 transition-all duration-300 z-40 lg:translate-x-0 ${sidebarOpen ? 'translate-x-0 w-64' : '-translate-x-full w-64 lg:w-64 lg:overflow-visible'}`}>
          <nav className="p-4 space-y-1 overflow-y-auto h-full pb-20">
            {menuItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                onClick={() => setSidebarOpen(false)}
                className={`flex items-center justify-between px-3 py-2.5 rounded-lg transition-all duration-200 ${
                  isActive(item.path)
                    ? 'bg-primary text-primary-foreground shadow-sm shadow-primary/20'
                    : 'text-gray-700 hover:bg-gray-100 hover:text-gray-900'
                }`}
              >
                <div className="flex items-center gap-3">
                  <item.icon className={`h-4 w-4 flex-shrink-0 ${isActive(item.path) ? 'text-primary-foreground' : 'text-gray-500'}`} />
                  <span className="text-sm font-medium truncate">{item.label}</span>
                </div>
                {item.badge && (
                  <span className={`text-xs px-2 py-1 rounded-full font-medium flex-shrink-0 ${
                    isActive(item.path)
                      ? 'bg-primary-foreground/20 text-primary-foreground'
                      : 'bg-gray-100 text-gray-600'
                  }`}>
                    {item.badge}
                  </span>
                )}
              </Link>
            ))}
          </nav>

          {/* Logout Button - Professional Styling */}
          <div className="absolute bottom-0 left-0 right-0 bg-white border-t border-gray-200 p-4">
            <button 
              onClick={handleLogout}
              className="w-full flex items-center gap-3 px-4 py-3 bg-red-50 hover:bg-red-100 text-red-600 hover:text-red-700 rounded-lg transition-all duration-200 group border border-red-100 hover:border-red-200"
            >
              <div className="p-1.5 rounded-md bg-red-100 group-hover:bg-red-200 transition-colors">
                <LogOut className="h-4 w-4" />
              </div>
              <div className="flex-1 text-left">
                <span className="text-sm font-semibold">Logout</span>
                <p className="text-xs text-red-500/70 group-hover:text-red-600/70">Sign out of admin panel</p>
              </div>
            </button>
          </div>
        </aside>

        {/* Main Content */}
        <main className={`flex-1 transition-all duration-300 ${sidebarOpen ? 'lg:ml-64' : 'lg:ml-64'} min-h-screen`}>
          <div className="p-4 lg:p-6">
            <Outlet />
          </div>
        </main>
      </div>
    </div>
  );
};

export default AdminLayout;
