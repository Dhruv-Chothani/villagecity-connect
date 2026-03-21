import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { 
  TrendingUp, 
  Users, 
  ShoppingCart, 
  DollarSign, 
  Activity, 
  Eye,
  Download,
  Calendar,
  BarChart3,
  PieChart,
  LineChart,
  ArrowUp,
  ArrowDown,
  Target,
  Zap
} from "lucide-react";
import { useData } from "@/contexts/DataContext";

const AdminAnalytics = () => {
  const { 
    submissions, 
    groceryProducts, 
    doctors, 
    businesses, 
    jobs, 
    serviceWorkers, 
    trainingPrograms, 
    electronics,
    schools,
    hospitals
  } = useData();
  
  const [selectedPeriod, setSelectedPeriod] = useState('30d');
  const [selectedMetric, setSelectedMetric] = useState('overview');

  const periods = [
    { value: '7d', label: 'Last 7 days' },
    { value: '30d', label: 'Last 30 days' },
    { value: '90d', label: 'Last 90 days' },
    { value: '1y', label: 'Last year' }
  ];

  const overviewStats = [
    {
      title: "Total Users",
      value: "2,847",
      change: "+12.5%",
      trend: "up",
      icon: Users,
      color: "bg-blue-50 text-blue-600"
    },
    {
      title: "Active Services",
      value: "156",
      change: "+8.2%",
      trend: "up", 
      icon: Target,
      color: "bg-green-50 text-green-600"
    },
    {
      title: "Total Revenue",
      value: "$48,574",
      change: "+23.1%",
      trend: "up",
      icon: DollarSign,
      color: "bg-purple-50 text-purple-600"
    },
    {
      title: "Conversion Rate",
      value: "3.24%",
      change: "-2.4%",
      trend: "down",
      icon: TrendingUp,
      color: "bg-orange-50 text-orange-600"
    }
  ];

  const sectorPerformance = [
    { sector: "Education", users: 847, revenue: "$12,450", growth: "+15.3%", status: "active" },
    { sector: "Grocery", users: 623, revenue: "$8,234", growth: "+8.7%", status: "active" },
    { sector: "Health", users: 412, revenue: "$15,678", growth: "+22.1%", status: "active" },
    { sector: "Business", users: 389, revenue: "$6,789", growth: "+5.4%", status: "active" },
    { sector: "Services", users: 298, revenue: "$4,123", growth: "+11.2%", status: "active" },
    { sector: "Electronics", users: 278, revenue: "$1,300", growth: "-3.2%", status: "declining" }
  ];

  const topPerformers = [
    { name: "Dr. Rajesh Kumar", sector: "Health", performance: 98, patients: 156 },
    { name: "SVCDA School", sector: "Education", performance: 95, students: 847 },
    { name: "QuickFix Services", sector: "Services", performance: 92, jobs: 89 },
    { name: "FreshMart Grocery", sector: "Grocery", performance: 88, orders: 234 },
    { name: "TechHub Electronics", sector: "Electronics", performance: 85, sales: 67 }
  ];

  const recentActivity = [
    { action: "New user registration", user: "John Doe", time: "2 minutes ago", type: "user" },
    { action: "Service booking completed", user: "Jane Smith", time: "15 minutes ago", type: "service" },
    { action: "Grocery order placed", user: "Mike Johnson", time: "1 hour ago", type: "order" },
    { action: "Training program enrolled", user: "Sarah Wilson", time: "2 hours ago", type: "training" },
    { action: "Doctor consultation booked", user: "Robert Brown", time: "3 hours ago", type: "health" }
  ];

  return (
    <div className="space-y-6">
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
        <div>
          <h1 className="text-xl lg:text-2xl font-bold text-gray-900">Analytics Dashboard</h1>
          <p className="text-gray-500 mt-1 text-sm">Comprehensive insights and performance metrics</p>
        </div>
        <div className="flex gap-2">
          <select 
            value={selectedPeriod} 
            onChange={(e) => setSelectedPeriod(e.target.value)}
            className="px-3 py-2 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-primary"
          >
            {periods.map(period => (
              <option key={period.value} value={period.value}>{period.label}</option>
            ))}
          </select>
          <Button variant="outline" size="sm">
            <Download className="h-4 w-4 mr-2" />
            Export Report
          </Button>
        </div>
      </div>

      {/* Overview Stats */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {overviewStats.map((stat, index) => (
          <Card key={index}>
            <CardContent className="p-6">
              <div className="flex items-center justify-between mb-4">
                <div className={`p-3 rounded-lg ${stat.color}`}>
                  <stat.icon className="h-6 w-6" />
                </div>
                <div className={`flex items-center gap-1 text-sm ${
                  stat.trend === 'up' ? 'text-green-600' : 'text-red-600'
                }`}>
                  {stat.trend === 'up' ? (
                    <ArrowUp className="h-4 w-4" />
                  ) : (
                    <ArrowDown className="h-4 w-4" />
                  )}
                  <span className="font-medium">{stat.change}</span>
                </div>
              </div>
              <h3 className="text-2xl font-bold text-gray-900">{stat.value}</h3>
              <p className="text-gray-500 text-sm mt-1">{stat.title}</p>
            </CardContent>
          </Card>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Sector Performance */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <BarChart3 className="h-5 w-5" />
              Sector Performance
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {sectorPerformance.map((sector, index) => (
                <div key={index} className="flex items-center justify-between p-3 border rounded-lg">
                  <div className="flex-1">
                    <div className="flex items-center justify-between mb-2">
                      <h4 className="font-medium text-gray-900">{sector.sector}</h4>
                      <Badge variant={sector.status === 'active' ? 'default' : 'secondary'}>
                        {sector.status}
                      </Badge>
                    </div>
                    <div className="flex items-center justify-between text-sm text-gray-600">
                      <span>{sector.users} users</span>
                      <span>{sector.revenue}</span>
                    </div>
                  </div>
                  <div className={`ml-4 text-sm font-medium ${
                    sector.growth.startsWith('+') ? 'text-green-600' : 'text-red-600'
                  }`}>
                    {sector.growth}
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Top Performers */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Zap className="h-5 w-5" />
              Top Performers
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {topPerformers.map((performer, index) => (
                <div key={index} className="flex items-center justify-between p-3 border rounded-lg">
                  <div className="flex-1">
                    <h4 className="font-medium text-gray-900">{performer.name}</h4>
                    <div className="flex items-center gap-2 text-sm text-gray-600">
                      <Badge variant="outline" className="text-xs">{performer.sector}</Badge>
                      <span>{performer.patients || performer.students || performer.jobs || performer.orders || performer.sales} served</span>
                    </div>
                  </div>
                  <div className="ml-4 text-center">
                    <div className="text-lg font-bold text-primary">{performer.performance}%</div>
                    <div className="text-xs text-gray-500">Score</div>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Recent Activity */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Activity className="h-5 w-5" />
            Recent Activity
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {recentActivity.map((activity, index) => (
              <div key={index} className="flex items-center justify-between p-3 border rounded-lg">
                <div className="flex items-center gap-3">
                  <div className={`p-2 rounded-lg ${
                    activity.type === 'user' ? 'bg-blue-50' :
                    activity.type === 'service' ? 'bg-green-50' :
                    activity.type === 'order' ? 'bg-purple-50' :
                    activity.type === 'training' ? 'bg-orange-50' :
                    'bg-red-50'
                  }`}>
                    <Users className={`h-4 w-4 ${
                      activity.type === 'user' ? 'text-blue-600' :
                      activity.type === 'service' ? 'text-green-600' :
                      activity.type === 'order' ? 'text-purple-600' :
                      activity.type === 'training' ? 'text-orange-600' :
                      'text-red-600'
                    }`} />
                  </div>
                  <div>
                    <p className="font-medium text-gray-900">{activity.action}</p>
                    <p className="text-sm text-gray-600">by {activity.user}</p>
                  </div>
                </div>
                <div className="text-sm text-gray-500">{activity.time}</div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default AdminAnalytics;
