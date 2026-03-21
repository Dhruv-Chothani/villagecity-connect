import { useAuth } from "@/contexts/AuthContext";
import { Link } from "react-router-dom";
import { 
  GraduationCap, 
  ShoppingCart, 
  Briefcase, 
  Heart, 
  Monitor, 
  Tractor, 
  Wrench, 
  BookOpen, 
  Users, 
  LayoutDashboard,
  TrendingUp,
  Activity,
  Calendar,
  Clock,
  Star,
  ArrowUp,
  Package,
  ShoppingCart as CartIcon
} from "lucide-react";

const sectorLinks = [
  { icon: GraduationCap, label: "Education", path: "/education", color: "text-sector-education", bgColor: "bg-sector-education/10" },
  { icon: ShoppingCart, label: "Grocery", path: "/grocery", color: "text-sector-grocery", bgColor: "bg-sector-grocery/10" },
  { icon: Briefcase, label: "Business", path: "/business", color: "text-sector-business", bgColor: "bg-sector-business/10" },
  { icon: Heart, label: "Health", path: "/health", color: "text-sector-health", bgColor: "bg-sector-health/10" },
  { icon: Monitor, label: "Electronics", path: "/electronics", color: "text-sector-electronics", bgColor: "bg-sector-electronics/10" },
  { icon: Tractor, label: "Agriculture", path: "/agriculture", color: "text-sector-agriculture", bgColor: "bg-sector-agriculture/10" },
  { icon: Wrench, label: "Services", path: "/services", color: "text-sector-services", bgColor: "bg-sector-services/10" },
  { icon: BookOpen, label: "Training", path: "/training", color: "text-sector-training", bgColor: "bg-sector-training/10" },
  { icon: Users, label: "Employment", path: "/employment", color: "text-sector-employment", bgColor: "bg-sector-employment/10" },
];

const Dashboard = () => {
  const { user, isAdmin } = useAuth();

  if (!user) {
    return (
      <div className="container flex min-h-[60vh] flex-col items-center justify-center gap-4">
        <p className="text-lg text-muted-foreground">Please login to access the dashboard.</p>
        <Link to="/login" className="rounded-lg bg-primary px-6 py-2 text-sm font-medium text-primary-foreground">Login</Link>
      </div>
    );
  }

  const userStats = [
    {
      title: "Active Orders",
      value: "3",
      change: "+2 this week",
      trend: "up",
      icon: CartIcon,
      bgColor: "bg-blue-50",
      textColor: "text-blue-600"
    },
    {
      title: "Saved Items",
      value: "12",
      change: "+5 this week",
      trend: "up",
      icon: Package,
      bgColor: "bg-green-50",
      textColor: "text-green-600"
    },
    {
      title: "Services Used",
      value: "8",
      change: "+1 this week",
      trend: "up",
      icon: Wrench,
      bgColor: "bg-purple-50",
      textColor: "text-purple-600"
    },
    {
      title: "Appointments",
      value: "2",
      change: "No change",
      trend: "neutral",
      icon: Calendar,
      bgColor: "bg-orange-50",
      textColor: "text-orange-600"
    }
  ];

  const recentActivity = [
    {
      id: 1,
      action: "Viewed Education Courses",
      time: "2 hours ago",
      icon: GraduationCap,
      color: "text-sector-education"
    },
    {
      id: 2,
      action: "Added items to Grocery Cart",
      time: "5 hours ago",
      icon: ShoppingCart,
      color: "text-sector-grocery"
    },
    {
      id: 3,
      action: "Booked Health Service",
      time: "1 day ago",
      icon: Heart,
      color: "text-sector-health"
    },
    {
      id: 4,
      action: "Enrolled in Training Program",
      time: "2 days ago",
      icon: BookOpen,
      color: "text-sector-training"
    }
  ];

  return (
    <div className="p-6 space-y-6">
      {/* Header */}
      <div className="flex flex-col gap-4">
        <div>
          <h1 className="text-xl lg:text-2xl font-bold text-gray-900">Customer Dashboard</h1>
          <p className="text-gray-500 mt-1 text-sm lg:text-base">
            Welcome back, {user.name}! Here's your activity overview.
          </p>
        </div>
        <div className="flex items-center gap-2">
          <span className="rounded-full bg-primary/10 px-3 py-1 text-sm font-medium text-primary">
            {user.role === "admin" ? "Admin User" : "Customer"}
          </span>
          {isAdmin && (
            <Link 
              to="/admin-dashboard" 
              className="rounded-full bg-secondary px-3 py-1 text-sm font-medium text-secondary-foreground hover:bg-secondary/80"
            >
              Admin Panel →
            </Link>
          )}
        </div>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {userStats.map((stat, index) => (
          <div key={index} className="bg-white rounded-xl p-6 shadow-sm border border-gray-200">
            <div className="flex items-center justify-between mb-4">
              <div className={`p-3 rounded-lg ${stat.bgColor}`}>
                <stat.icon className={`h-6 w-6 ${stat.textColor}`} />
              </div>
              <div className={`flex items-center gap-1 text-sm ${
                stat.trend === 'up' ? 'text-green-600' : stat.trend === 'down' ? 'text-red-600' : 'text-gray-500'
              }`}>
                {stat.trend === 'up' && <ArrowUp className="h-4 w-4" />}
                {stat.change}
              </div>
            </div>
            <h3 className="text-2xl font-bold text-gray-900">{stat.value}</h3>
            <p className="text-gray-500 text-sm mt-1">{stat.title}</p>
          </div>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Sector Access */}
        <div className="lg:col-span-2 bg-white rounded-xl p-6 shadow-sm border border-gray-200">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-lg font-semibold text-gray-900">Quick Access</h2>
            <Link to="/sectors" className="text-sm text-primary hover:text-primary/80">
              View All
            </Link>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {sectorLinks.map((sector) => (
              <Link
                key={sector.path}
                to={sector.path}
                className="flex items-center gap-3 p-4 rounded-lg border border-gray-200 hover:border-gray-300 hover:shadow-md transition-all duration-200"
              >
                <div className={`p-2 rounded-lg ${sector.bgColor}`}>
                  <sector.icon className={`h-5 w-5 ${sector.color}`} />
                </div>
                <div>
                  <p className="font-medium text-gray-900">{sector.label}</p>
                  <p className="text-xs text-gray-500">Explore now</p>
                </div>
              </Link>
            ))}
          </div>
        </div>

        {/* Recent Activity */}
        <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-200">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-lg font-semibold text-gray-900">Recent Activity</h2>
            <Clock className="h-4 w-4 text-gray-400" />
          </div>
          <div className="space-y-4">
            {recentActivity.map((activity) => (
              <div key={activity.id} className="flex items-start gap-3">
                <div className="p-2 rounded-lg bg-gray-50">
                  <activity.icon className={`h-4 w-4 ${activity.color}`} />
                </div>
                <div className="flex-1 min-w-0">
                  <p className="text-sm text-gray-900">{activity.action}</p>
                  <p className="text-xs text-gray-500">{activity.time}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Admin Notice */}
      {isAdmin && (
        <div className="rounded-xl border-2 border-secondary/30 bg-secondary/5 p-6">
          <div className="flex items-center gap-3 mb-3">
            <div className="p-2 rounded-lg bg-secondary/20">
              <LayoutDashboard className="h-5 w-5 text-secondary" />
            </div>
            <div>
              <h3 className="font-bold text-secondary">Admin Access Available</h3>
              <p className="text-sm text-muted-foreground">You have administrative privileges to manage all sectors.</p>
            </div>
          </div>
          <div className="flex flex-wrap gap-3 mt-4">
            <Link 
              to="/admin-dashboard/grocery" 
              className="px-4 py-2 bg-white rounded-lg text-sm font-medium border border-gray-200 hover:bg-gray-50"
            >
              Manage Grocery
            </Link>
            <Link 
              to="/admin-dashboard/education" 
              className="px-4 py-2 bg-white rounded-lg text-sm font-medium border border-gray-200 hover:bg-gray-50"
            >
              Manage Education
            </Link>
            <Link 
              to="/admin-dashboard/health" 
              className="px-4 py-2 bg-white rounded-lg text-sm font-medium border border-gray-200 hover:bg-gray-50"
            >
              Manage Health
            </Link>
            <Link 
              to="/admin-dashboard" 
              className="px-4 py-2 bg-secondary text-secondary-foreground rounded-lg text-sm font-medium hover:bg-secondary/90"
            >
              Full Admin Panel →
            </Link>
          </div>
        </div>
      )}
    </div>
  );
};

export default Dashboard;
