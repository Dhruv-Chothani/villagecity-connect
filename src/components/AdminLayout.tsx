import { useState } from "react";
import { Outlet, Link, useLocation } from "react-router-dom";
import { 
  LayoutDashboard, Users, BarChart3, Settings, LogOut, 
  Menu, X, Search, Bell, ChevronDown, Home, Building, 
  ShoppingCart, Briefcase, Heart, Cpu, Leaf, Wrench, 
  GraduationCap, BriefcaseIcon, TrendingUp, FileText,
  MoreHorizontal
} from "lucide-react";
import logo from "@/assets/logo.svg";

const AdminLayout = () => {
  const [sidebarOpen, setSidebarOpen] = useState(true);
  const location = useLocation();

  const menuItems = [
    { path: "/admin", icon: LayoutDashboard, label: "Dashboard", badge: null },
    { path: "/admin/users", icon: Users, label: "Users", badge: "2.5K" },
    { path: "/admin/education", icon: GraduationCap, label: "Education", badge: null },
    { path: "/admin/grocery", icon: ShoppingCart, label: "Grocery", badge: null },
    { path: "/admin/business", icon: Briefcase, label: "Business", badge: null },
    { path: "/admin/health", icon: Heart, label: "Health", badge: null },
    { path: "/admin/electronics", icon: Cpu, label: "Electronics", badge: null },
    { path: "/admin/agriculture", icon: Leaf, label: "Agriculture", badge: null },
    { path: "/admin/services", icon: Wrench, label: "Services", badge: null },
    { path: "/admin/training", icon: GraduationCap, label: "Training", badge: null },
    { path: "/admin/employment", icon: BriefcaseIcon, label: "Employment", badge: null },
    { path: "/admin/analytics", icon: BarChart3, label: "Analytics", badge: null },
    { path: "/admin/reports", icon: FileText, label: "Reports", badge: null },
    { path: "/admin/settings", icon: Settings, label: "Settings", badge: null },
  ];

  const isActive = (path: string) => location.pathname === path;

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

      <div className="flex pt-14">
        {/* Mobile Overlay */}
        {sidebarOpen && (
          <div 
            className="fixed inset-0 bg-black/50 z-30 lg:hidden"
            onClick={() => setSidebarOpen(false)}
          />
        )}
        
        {/* Sidebar */}
        <aside className={`fixed left-0 top-14 h-[calc(100vh-3.5rem)] bg-white border-r border-gray-200 transition-all duration-300 z-40 lg:translate-x-0 ${sidebarOpen ? 'translate-x-0 w-64' : '-translate-x-full w-64 lg:w-0 lg:overflow-hidden'}`}>
          <nav className="p-4 space-y-1 overflow-y-auto h-full">
            {menuItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                onClick={() => setSidebarOpen(false)}
                className={`flex items-center justify-between px-3 py-2 rounded-lg transition-colors ${
                  isActive(item.path)
                    ? 'bg-primary text-primary-foreground'
                    : 'text-gray-700 hover:bg-gray-100'
                }`}
              >
                <div className="flex items-center gap-3">
                  <item.icon className="h-4 w-4 flex-shrink-0" />
                  <span className="text-sm font-medium truncate">{item.label}</span>
                </div>
                {item.badge && (
                  <span className={`text-xs px-2 py-1 rounded-full flex-shrink-0 ${
                    isActive(item.path)
                      ? 'bg-primary-foreground text-primary'
                      : 'bg-gray-200 text-gray-600'
                  }`}>
                    {item.badge}
                  </span>
                )}
              </Link>
            ))}
          </nav>

          {/* Logout Button */}
          <div className="absolute bottom-4 left-4 right-4">
            <button 
              onClick={() => setSidebarOpen(false)}
              className="w-full flex items-center gap-3 px-3 py-2 text-red-600 hover:bg-red-50 rounded-lg transition-colors"
            >
              <LogOut className="h-4 w-4 flex-shrink-0" />
              <span className="text-sm font-medium">Logout</span>
            </button>
          </div>
        </aside>

        {/* Main Content */}
        <main className={`flex-1 transition-all duration-300 ${sidebarOpen ? 'lg:ml-64' : 'lg:ml-0'}`}>
          <div className="p-4 lg:p-6">
            <Outlet />
          </div>
        </main>
      </div>
    </div>
  );
};

export default AdminLayout;
