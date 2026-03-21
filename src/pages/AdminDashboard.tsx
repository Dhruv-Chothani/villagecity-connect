import { useState } from "react";
import { useData } from "@/contexts/DataContext";
import { useAuth } from "@/contexts/AuthContext";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { toast } from "sonner";
import {
  Users, TrendingUp, DollarSign, Activity, ShoppingCart, Heart, Briefcase, GraduationCap,
  Monitor, Tractor, Wrench, BookOpen, ArrowUp, Eye, CheckCircle, XCircle, Clock, Package
} from "lucide-react";

const AdminDashboard = () => {
  const { submissions, updateSubmissionStatus, deleteSubmission, groceryProducts, doctors, businesses, jobs, serviceWorkers, trainingPrograms, electronics } = useData();
  const [selectedPeriod, setSelectedPeriod] = useState('7d');
  const [filterSector, setFilterSector] = useState('all');

  const stats = [
    { title: "Total Submissions", value: submissions.length.toString(), icon: Package, bgColor: "bg-blue-50", textColor: "text-blue-600" },
    { title: "Pending Orders", value: submissions.filter(s => s.status === "pending").length.toString(), icon: Clock, bgColor: "bg-yellow-50", textColor: "text-yellow-600" },
    { title: "Confirmed", value: submissions.filter(s => s.status === "confirmed").length.toString(), icon: CheckCircle, bgColor: "bg-green-50", textColor: "text-green-600" },
    { title: "Total Products", value: (groceryProducts.length + electronics.length).toString(), icon: ShoppingCart, bgColor: "bg-purple-50", textColor: "text-purple-600" },
  ];

  const sectorStats = [
    { name: "Education", count: submissions.filter(s => s.sector === "Education").length, icon: GraduationCap, color: "bg-blue-100 text-blue-600" },
    { name: "Grocery", count: submissions.filter(s => s.sector === "Grocery").length, icon: ShoppingCart, color: "bg-green-100 text-green-600" },
    { name: "Health", count: submissions.filter(s => s.sector === "Health").length, icon: Heart, color: "bg-red-100 text-red-600" },
    { name: "Business", count: submissions.filter(s => s.sector === "Business").length, icon: Briefcase, color: "bg-purple-100 text-purple-600" },
    { name: "Electronics", count: submissions.filter(s => s.sector === "Electronics").length, icon: Monitor, color: "bg-gray-100 text-gray-600" },
    { name: "Services", count: submissions.filter(s => s.sector === "Services").length, icon: Wrench, color: "bg-indigo-100 text-indigo-600" },
    { name: "Employment", count: submissions.filter(s => s.sector === "Employment").length, icon: Briefcase, color: "bg-orange-100 text-orange-600" },
  ];

  const filteredSubmissions = submissions.filter(s => filterSector === "all" || s.sector === filterSector);

  return (
    <div className="space-y-6">
      <div className="flex flex-col gap-4 mb-6">
        <div><h1 className="text-xl lg:text-2xl font-bold text-gray-900">Dashboard Overview</h1><p className="text-gray-500 mt-1 text-sm">All user orders, bookings, enquiries & submissions</p></div>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {stats.map((stat, i) => (
          <div key={i} className="bg-white rounded-xl p-6 shadow-sm border border-gray-200">
            <div className="flex items-center justify-between mb-4">
              <div className={`p-3 rounded-lg ${stat.bgColor}`}><stat.icon className={`h-6 w-6 ${stat.textColor}`} /></div>
            </div>
            <h3 className="text-2xl font-bold text-gray-900">{stat.value}</h3>
            <p className="text-gray-500 text-sm mt-1">{stat.title}</p>
          </div>
        ))}
      </div>

      {/* Sector Breakdown */}
      <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-200">
        <h2 className="text-lg font-semibold text-gray-900 mb-4">Submissions by Sector</h2>
        <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-7 gap-3">
          {sectorStats.map((sector, i) => (
            <div key={i} className="flex items-center gap-2 p-3 rounded-lg border border-gray-200 cursor-pointer hover:bg-gray-50" onClick={() => setFilterSector(sector.name)}>
              <div className={`p-1.5 rounded-lg ${sector.color}`}><sector.icon className="h-4 w-4" /></div>
              <div><p className="text-sm font-medium">{sector.name}</p><p className="text-xs text-gray-500">{sector.count} orders</p></div>
            </div>
          ))}
        </div>
      </div>

      {/* User Submissions Table */}
      <div className="bg-white rounded-xl shadow-sm border border-gray-200">
        <div className="p-4 lg:p-6 border-b border-gray-200 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-3">
          <h2 className="text-lg font-semibold text-gray-900">User Orders & Enquiries ({filteredSubmissions.length})</h2>
          <div className="flex gap-2">
            <select value={filterSector} onChange={e => setFilterSector(e.target.value)} className="px-3 py-2 border rounded-lg text-sm">
              <option value="all">All Sectors</option>
              {["Grocery", "Health", "Education", "Business", "Electronics", "Services", "Employment", "Agriculture", "Training"].map(s => <option key={s} value={s}>{s}</option>)}
            </select>
          </div>
        </div>
        {filteredSubmissions.length === 0 ? (
          <div className="p-12 text-center text-gray-500">
            <Package className="h-12 w-12 mx-auto mb-3 text-gray-300" />
            <p>No submissions yet. When users place orders or make bookings, they'll appear here.</p>
          </div>
        ) : (
          <div className="overflow-x-auto">
            <table className="min-w-full divide-y divide-gray-200">
              <thead className="bg-gray-50">
                <tr>
                  <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase">User</th>
                  <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase">Type</th>
                  <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase">Sector</th>
                  <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase">Details</th>
                  <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase">Status</th>
                  <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase">Date</th>
                  <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase">Actions</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                {filteredSubmissions.map(sub => (
                  <tr key={sub.id} className="hover:bg-gray-50">
                    <td className="px-4 py-3"><p className="text-sm font-medium">{sub.userName}</p><p className="text-xs text-gray-500">{sub.userEmail}</p></td>
                    <td className="px-4 py-3"><Badge variant="outline" className="capitalize">{sub.type}</Badge></td>
                    <td className="px-4 py-3"><Badge variant="secondary">{sub.sector}</Badge></td>
                    <td className="px-4 py-3 max-w-[200px]"><p className="text-xs text-gray-600 truncate">{JSON.stringify(sub.details).slice(0, 80)}...</p></td>
                    <td className="px-4 py-3">
                      <Badge className={sub.status === "pending" ? "bg-yellow-100 text-yellow-800" : sub.status === "confirmed" ? "bg-green-100 text-green-800" : sub.status === "completed" ? "bg-blue-100 text-blue-800" : "bg-red-100 text-red-800"}>{sub.status}</Badge>
                    </td>
                    <td className="px-4 py-3 text-xs text-gray-500">{new Date(sub.createdAt).toLocaleDateString()}</td>
                    <td className="px-4 py-3">
                      <div className="flex gap-1">
                        {sub.status === "pending" && (
                          <Button size="sm" variant="outline" className="text-xs" onClick={() => { updateSubmissionStatus(sub.id, "confirmed"); toast.success("Confirmed"); }}>
                            <CheckCircle className="h-3 w-3 mr-1" />Confirm
                          </Button>
                        )}
                        {sub.status === "confirmed" && (
                          <Button size="sm" variant="outline" className="text-xs" onClick={() => { updateSubmissionStatus(sub.id, "completed"); toast.success("Completed"); }}>
                            Done
                          </Button>
                        )}
                        <Button size="sm" variant="outline" className="text-xs text-destructive" onClick={() => { deleteSubmission(sub.id); toast.success("Deleted"); }}>
                          <XCircle className="h-3 w-3" />
                        </Button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </div>
    </div>
  );
};

export default AdminDashboard;
