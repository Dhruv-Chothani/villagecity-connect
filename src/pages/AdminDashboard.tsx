import { useState } from "react";
import { 
  Users, 
  TrendingUp, 
  DollarSign, 
  Activity,
  GraduationCap,
  ShoppingCart,
  Briefcase,
  Heart,
  Monitor,
  Tractor,
  Wrench,
  BookOpen,
  UserCheck,
  Calendar,
  BarChart3,
  PieChart,
  ArrowUp,
  ArrowDown,
  MoreHorizontal,
  Eye,
  Edit,
  Trash2
} from "lucide-react";

const AdminDashboard = () => {
  const [selectedPeriod, setSelectedPeriod] = useState('7d');

  const stats = [
    {
      title: "Total Users",
      value: "10,234",
      change: "+12.5%",
      trend: "up",
      icon: Users,
      color: "bg-blue-500",
      bgColor: "bg-blue-50",
      textColor: "text-blue-600"
    },
    {
      title: "Active Services",
      value: "156",
      change: "+8.2%",
      trend: "up",
      icon: Activity,
      color: "bg-green-500",
      bgColor: "bg-green-50",
      textColor: "text-green-600"
    },
    {
      title: "Revenue",
      value: "₹2,45,678",
      change: "+23.1%",
      trend: "up",
      icon: DollarSign,
      color: "bg-purple-500",
      bgColor: "bg-purple-50",
      textColor: "text-purple-600"
    },
    {
      title: "Villages Connected",
      value: "523",
      change: "+5.4%",
      trend: "up",
      icon: TrendingUp,
      color: "bg-orange-500",
      bgColor: "bg-orange-50",
      textColor: "text-orange-600"
    }
  ];

  const sectorStats = [
    { name: "Education", users: 2341, growth: 15, icon: GraduationCap, color: "bg-blue-100 text-blue-600" },
    { name: "Grocery", users: 1876, growth: 12, icon: ShoppingCart, color: "bg-green-100 text-green-600" },
    { name: "Business", users: 1234, growth: 8, icon: Briefcase, color: "bg-purple-100 text-purple-600" },
    { name: "Health", users: 987, growth: 18, icon: Heart, color: "bg-red-100 text-red-600" },
    { name: "Electronics", users: 765, growth: 6, icon: Monitor, color: "bg-gray-100 text-gray-600" },
    { name: "Agriculture", users: 654, growth: 22, icon: Tractor, color: "bg-yellow-100 text-yellow-600" },
    { name: "Services", users: 543, growth: 10, icon: Wrench, color: "bg-indigo-100 text-indigo-600" },
    { name: "Training", users: 432, growth: 25, icon: BookOpen, color: "bg-pink-100 text-pink-600" },
  ];

  const recentActivities = [
    {
      id: 1,
      user: "Ramesh Kumar",
      action: "Registered for Agriculture Services",
      time: "2 minutes ago",
      avatar: "👨‍🌾"
    },
    {
      id: 2,
      user: "Priya Sharma",
      action: "Completed Business Registration",
      time: "5 minutes ago",
      avatar: "👩‍💼"
    },
    {
      id: 3,
      user: "Anita Devi",
      action: "Enrolled in Training Program",
      time: "10 minutes ago",
      avatar: "👩‍🎓"
    },
    {
      id: 4,
      user: "Vijay Singh",
      action: "Ordered Grocery Items",
      time: "15 minutes ago",
      avatar: "👨‍💼"
    },
    {
      id: 5,
      user: "Sunita Devi",
      action: "Booked Health Consultation",
      time: "20 minutes ago",
      avatar: "👩‍⚕️"
    }
  ];

  const topPerformers = [
    {
      name: "Digital Literacy Program",
      category: "Education",
      participants: 1234,
      completion: 89,
      status: "Active"
    },
    {
      name: "Farmers Market Connect",
      category: "Agriculture",
      participants: 876,
      completion: 76,
      status: "Active"
    },
    {
      name: "Women Empowerment Initiative",
      category: "Training",
      participants: 654,
      completion: 92,
      status: "Active"
    }
  ];

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex flex-col gap-4 mb-6">
        <div>
          <h1 className="text-xl lg:text-2xl font-bold text-gray-900">Dashboard Overview</h1>
          <p className="text-gray-500 mt-1 text-sm lg:text-base">Welcome back! Here's what's happening with your platform.</p>
        </div>
        <div className="flex flex-col sm:flex-row items-start sm:items-center gap-2">
          <select
            value={selectedPeriod}
            onChange={(e) => setSelectedPeriod(e.target.value)}
            className="px-3 py-2 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-primary w-full sm:w-auto"
          >
            <option value="24h">Last 24 hours</option>
            <option value="7d">Last 7 days</option>
            <option value="30d">Last 30 days</option>
            <option value="90d">Last 90 days</option>
          </select>
          <button className="px-4 py-2 bg-primary text-primary-foreground rounded-lg text-sm font-medium hover:bg-primary/90 transition-colors w-full sm:w-auto">
            Export Report
          </button>
        </div>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {stats.map((stat, index) => (
          <div key={index} className="bg-white rounded-xl p-6 shadow-sm border border-gray-200">
            <div className="flex items-center justify-between mb-4">
              <div className={`p-3 rounded-lg ${stat.bgColor}`}>
                <stat.icon className={`h-6 w-6 ${stat.textColor}`} />
              </div>
              <div className={`flex items-center gap-1 text-sm ${
                stat.trend === 'up' ? 'text-green-600' : 'text-red-600'
              }`}>
                {stat.trend === 'up' ? <ArrowUp className="h-4 w-4" /> : <ArrowDown className="h-4 w-4" />}
                {stat.change}
              </div>
            </div>
            <h3 className="text-2xl font-bold text-gray-900">{stat.value}</h3>
            <p className="text-gray-500 text-sm mt-1">{stat.title}</p>
          </div>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Sector Performance */}
        <div className="lg:col-span-2 bg-white rounded-xl p-4 lg:p-6 shadow-sm border border-gray-200">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-lg font-semibold text-gray-900">Sector Performance</h2>
            <button className="text-sm text-primary hover:text-primary/80">
              View All
            </button>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {sectorStats.map((sector, index) => (
              <div key={index} className="flex items-center gap-4 p-4 rounded-lg border border-gray-200 hover:bg-gray-50 transition-colors">
                <div className={`p-2 rounded-lg ${sector.color} flex-shrink-0`}>
                  <sector.icon className="h-5 w-5" />
                </div>
                <div className="flex-1 min-w-0">
                  <h4 className="font-medium text-gray-900 truncate">{sector.name}</h4>
                  <p className="text-sm text-gray-500">{sector.users.toLocaleString()} users</p>
                </div>
                <div className="text-right flex-shrink-0">
                  <p className={`text-sm font-medium ${
                    sector.growth > 15 ? 'text-green-600' : sector.growth > 10 ? 'text-blue-600' : 'text-gray-600'
                  }`}>
                    +{sector.growth}%
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Recent Activities */}
        <div className="bg-white rounded-xl p-4 lg:p-6 shadow-sm border border-gray-200">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-lg font-semibold text-gray-900">Recent Activities</h2>
            <button className="text-sm text-primary hover:text-primary/80">
              View All
            </button>
          </div>
          <div className="space-y-4">
            {recentActivities.map((activity) => (
              <div key={activity.id} className="flex items-start gap-3">
                <div className="flex-shrink-0 w-8 h-8 rounded-full bg-gray-100 flex items-center justify-center text-sm">
                  {activity.avatar}
                </div>
                <div className="flex-1 min-w-0">
                  <p className="text-sm font-medium text-gray-900 truncate">{activity.user}</p>
                  <p className="text-xs text-gray-500">{activity.action}</p>
                  <p className="text-xs text-gray-400 mt-1">{activity.time}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Top Performing Programs */}
      <div className="bg-white rounded-xl p-4 lg:p-6 shadow-sm border border-gray-200">
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-6 gap-4">
          <h2 className="text-lg font-semibold text-gray-900">Top Performing Programs</h2>
          <div className="flex items-center gap-2">
            <button className="p-2 hover:bg-gray-100 rounded-lg transition-colors">
              <BarChart3 className="h-4 w-4 text-gray-600" />
            </button>
            <button className="p-2 hover:bg-gray-100 rounded-lg transition-colors">
              <PieChart className="h-4 w-4 text-gray-600" />
            </button>
          </div>
        </div>
        <div className="overflow-x-auto">
          <div className="min-w-full inline-block align-middle">
            <div className="overflow-hidden shadow ring-1 ring-black ring-opacity-5 md:rounded-lg">
              <table className="min-w-full divide-y divide-gray-300">
                <thead className="bg-gray-50">
                  <tr>
                    <th scope="col" className="px-3 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Program Name
                    </th>
                    <th scope="col" className="px-3 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider hidden sm:table-cell">
                      Category
                    </th>
                    <th scope="col" className="px-3 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Participants
                    </th>
                    <th scope="col" className="px-3 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider hidden lg:table-cell">
                      Completion
                    </th>
                    <th scope="col" className="px-3 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Status
                    </th>
                    <th scope="col" className="px-3 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Actions
                    </th>
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                  {topPerformers.map((program, index) => (
                    <tr key={index} className="hover:bg-gray-50">
                      <td className="px-3 py-4 whitespace-nowrap">
                        <div>
                          <p className="text-sm font-medium text-gray-900 truncate max-w-[120px] sm:max-w-none">{program.name}</p>
                        </div>
                      </td>
                      <td className="px-3 py-4 whitespace-nowrap hidden sm:table-cell">
                        <span className="text-sm text-gray-600">{program.category}</span>
                      </td>
                      <td className="px-3 py-4 whitespace-nowrap">
                        <span className="text-sm text-gray-900">{program.participants.toLocaleString()}</span>
                      </td>
                      <td className="px-3 py-4 whitespace-nowrap hidden lg:table-cell">
                        <div className="flex items-center gap-2">
                          <div className="w-16 bg-gray-200 rounded-full h-2">
                            <div 
                              className="bg-primary h-2 rounded-full" 
                              style={{ width: `${program.completion}%` }}
                            ></div>
                          </div>
                          <span className="text-sm text-gray-600">{program.completion}%</span>
                        </div>
                      </td>
                      <td className="px-3 py-4 whitespace-nowrap">
                        <span className="inline-flex items-center px-2 py-1 rounded-full text-xs font-medium bg-green-100 text-green-800">
                          {program.status}
                        </span>
                      </td>
                      <td className="px-3 py-4 whitespace-nowrap">
                        <div className="flex items-center gap-1">
                          <button className="p-1 hover:bg-gray-100 rounded transition-colors">
                            <Eye className="h-4 w-4 text-gray-600" />
                          </button>
                          <button className="p-1 hover:bg-gray-100 rounded transition-colors">
                            <Edit className="h-4 w-4 text-gray-600" />
                          </button>
                          <button className="p-1 hover:bg-gray-100 rounded transition-colors">
                            <MoreHorizontal className="h-4 w-4 text-gray-600" />
                          </button>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;
