import { useState } from "react";
import { 
  Search, 
  Filter, 
  Download, 
  UserPlus, 
  MoreHorizontal,
  Eye,
  Edit,
  Trash2,
  Mail,
  Phone,
  MapPin,
  Calendar,
  Shield,
  CheckCircle,
  XCircle,
  Clock,
  ChevronDown,
  Users
} from "lucide-react";

const AdminUsers = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedRole, setSelectedRole] = useState('all');
  const [selectedStatus, setSelectedStatus] = useState('all');

  const users = [
    {
      id: 1,
      name: "Ramesh Kumar",
      email: "ramesh.kumar@email.com",
      phone: "+91 98765 43210",
      role: "Farmer",
      status: "Active",
      location: "Rural Village, Maharashtra",
      joinDate: "2024-01-15",
      lastActive: "2 hours ago",
      avatar: "👨‍🌾",
      services: ["Agriculture", "Grocery"],
      verified: true
    },
    {
      id: 2,
      name: "Priya Sharma",
      email: "priya.sharma@email.com",
      phone: "+91 87654 32109",
      role: "Business Owner",
      status: "Active",
      location: "Pune, Maharashtra",
      joinDate: "2024-02-20",
      lastActive: "5 minutes ago",
      avatar: "👩‍💼",
      services: ["Business", "Education"],
      verified: true
    },
    {
      id: 3,
      name: "Anita Devi",
      email: "anita.devi@email.com",
      phone: "+91 76543 21098",
      role: "Student",
      status: "Active",
      location: "Village, Rajasthan",
      joinDate: "2024-03-10",
      lastActive: "1 day ago",
      avatar: "👩‍🎓",
      services: ["Education", "Training"],
      verified: false
    },
    {
      id: 4,
      name: "Vijay Singh",
      email: "vijay.singh@email.com",
      phone: "+91 65432 10987",
      role: "Service Provider",
      status: "Inactive",
      location: "Delhi",
      joinDate: "2023-12-05",
      lastActive: "1 week ago",
      avatar: "👨‍🔧",
      services: ["Services", "Electronics"],
      verified: true
    },
    {
      id: 5,
      name: "Sunita Devi",
      email: "sunita.devi@email.com",
      phone: "+91 54321 09876",
      role: "Healthcare Worker",
      status: "Active",
      location: "Rural Area, Gujarat",
      joinDate: "2024-01-25",
      lastActive: "30 minutes ago",
      avatar: "👩‍⚕️",
      services: ["Health", "Training"],
      verified: true
    }
  ];

  const filteredUsers = users.filter(user => {
    const matchesSearch = user.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         user.email.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         user.role.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesRole = selectedRole === 'all' || user.role === selectedRole;
    const matchesStatus = selectedStatus === 'all' || user.status === selectedStatus;
    return matchesSearch && matchesRole && matchesStatus;
  });

  const getStatusBadge = (status: string) => {
    const styles = {
      Active: "bg-green-100 text-green-800",
      Inactive: "bg-gray-100 text-gray-800",
      Pending: "bg-yellow-100 text-yellow-800",
      Suspended: "bg-red-100 text-red-800"
    };
    return styles[status as keyof typeof styles] || styles.Inactive;
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex flex-col gap-4 mb-6">
        <div>
          <h1 className="text-xl lg:text-2xl font-bold text-gray-900">User Management</h1>
          <p className="text-gray-500 mt-1 text-sm lg:text-base">Manage and monitor all platform users</p>
        </div>
        <div className="flex flex-col sm:flex-row items-start sm:items-center gap-2">
          <button className="flex items-center gap-2 px-4 py-2 border border-gray-300 rounded-lg text-sm hover:bg-gray-50 transition-colors w-full sm:w-auto">
            <Download className="h-4 w-4" />
            Export
          </button>
          <button className="flex items-center gap-2 px-4 py-2 bg-primary text-primary-foreground rounded-lg text-sm hover:bg-primary/90 transition-colors w-full sm:w-auto">
            <UserPlus className="h-4 w-4" />
            Add User
          </button>
        </div>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-200">
          <div className="flex items-center justify-between mb-2">
            <Users className="h-8 w-8 text-blue-600" />
            <span className="text-sm text-green-600 font-medium">+12.5%</span>
          </div>
          <h3 className="text-2xl font-bold text-gray-900">10,234</h3>
          <p className="text-gray-500 text-sm">Total Users</p>
        </div>
        <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-200">
          <div className="flex items-center justify-between mb-2">
            <CheckCircle className="h-8 w-8 text-green-600" />
            <span className="text-sm text-green-600 font-medium">+8.2%</span>
          </div>
          <h3 className="text-2xl font-bold text-gray-900">8,567</h3>
          <p className="text-gray-500 text-sm">Active Users</p>
        </div>
        <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-200">
          <div className="flex items-center justify-between mb-2">
            <Shield className="h-8 w-8 text-purple-600" />
            <span className="text-sm text-green-600 font-medium">+15.3%</span>
          </div>
          <h3 className="text-2xl font-bold text-gray-900">6,234</h3>
          <p className="text-gray-500 text-sm">Verified Users</p>
        </div>
        <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-200">
          <div className="flex items-center justify-between mb-2">
            <Calendar className="h-8 w-8 text-orange-600" />
            <span className="text-sm text-green-600 font-medium">+234</span>
          </div>
          <h3 className="text-2xl font-bold text-gray-900">456</h3>
          <p className="text-gray-500 text-sm">New This Month</p>
        </div>
      </div>

      {/* Filters */}
      <div className="bg-white rounded-xl p-4 lg:p-6 shadow-sm border border-gray-200">
        <div className="flex flex-col lg:flex-row gap-4">
          <div className="flex-1">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
              <input
                type="text"
                placeholder="Search users by name, email, or role..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
              />
            </div>
          </div>
          <div className="flex flex-col sm:flex-row gap-2">
            <select
              value={selectedRole}
              onChange={(e) => setSelectedRole(e.target.value)}
              className="px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary w-full sm:w-auto"
            >
              <option value="all">All Roles</option>
              <option value="Farmer">Farmer</option>
              <option value="Business Owner">Business Owner</option>
              <option value="Student">Student</option>
              <option value="Service Provider">Service Provider</option>
              <option value="Healthcare Worker">Healthcare Worker</option>
            </select>
            <select
              value={selectedStatus}
              onChange={(e) => setSelectedStatus(e.target.value)}
              className="px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary w-full sm:w-auto"
            >
              <option value="all">All Status</option>
              <option value="Active">Active</option>
              <option value="Inactive">Inactive</option>
              <option value="Pending">Pending</option>
              <option value="Suspended">Suspended</option>
            </select>
            <button className="flex items-center gap-2 px-3 py-2 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors w-full sm:w-auto">
              <Filter className="h-4 w-4" />
              More Filters
            </button>
          </div>
        </div>
      </div>

      {/* Users Table */}
      <div className="bg-white rounded-xl shadow-sm border border-gray-200">
        <div className="overflow-x-auto">
          <div className="min-w-full inline-block align-middle">
            <div className="overflow-hidden shadow ring-1 ring-black ring-opacity-5 md:rounded-lg">
              <table className="min-w-full divide-y divide-gray-300">
                <thead className="bg-gray-50">
                  <tr>
                    <th scope="col" className="px-3 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      User
                    </th>
                    <th scope="col" className="px-3 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider hidden lg:table-cell">
                      Contact
                    </th>
                    <th scope="col" className="px-3 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Role
                    </th>
                    <th scope="col" className="px-3 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider hidden sm:table-cell">
                      Services
                    </th>
                    <th scope="col" className="px-3 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Status
                    </th>
                    <th scope="col" className="px-3 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider hidden md:table-cell">
                      Joined
                    </th>
                    <th scope="col" className="px-3 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider hidden sm:table-cell">
                      Last Active
                    </th>
                    <th scope="col" className="px-3 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Actions
                    </th>
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                  {filteredUsers.map((user) => (
                    <tr key={user.id} className="hover:bg-gray-50">
                      <td className="px-3 py-4">
                        <div className="flex items-center gap-3">
                          <div className="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center text-lg flex-shrink-0">
                            {user.avatar}
                          </div>
                          <div className="min-w-0 flex-1">
                            <div className="flex items-center gap-2">
                              <p className="font-medium text-gray-900 truncate">{user.name}</p>
                              {user.verified && (
                                <CheckCircle className="h-4 w-4 text-blue-600 flex-shrink-0" />
                              )}
                            </div>
                            <p className="text-sm text-gray-500 flex items-center gap-1 truncate">
                              <MapPin className="h-3 w-3 flex-shrink-0" />
                              {user.location}
                            </p>
                          </div>
                        </div>
                      </td>
                      <td className="px-3 py-4 hidden lg:table-cell">
                        <div className="space-y-1">
                          <p className="text-sm text-gray-900 flex items-center gap-1 truncate">
                            <Mail className="h-3 w-3 text-gray-400 flex-shrink-0" />
                            {user.email}
                          </p>
                          <p className="text-sm text-gray-600 flex items-center gap-1 truncate">
                            <Phone className="h-3 w-3 text-gray-400 flex-shrink-0" />
                            {user.phone}
                          </p>
                        </div>
                      </td>
                      <td className="px-3 py-4">
                        <span className="text-sm text-gray-900 truncate">{user.role}</span>
                      </td>
                      <td className="px-3 py-4 hidden sm:table-cell">
                        <div className="flex flex-wrap gap-1">
                          {user.services.map((service, index) => (
                            <span
                              key={index}
                              className="inline-flex items-center px-2 py-1 rounded-full text-xs font-medium bg-blue-100 text-blue-800"
                            >
                              {service}
                            </span>
                          ))}
                        </div>
                      </td>
                      <td className="px-3 py-4">
                        <span className={`inline-flex items-center px-2 py-1 rounded-full text-xs font-medium ${getStatusBadge(user.status)}`}>
                          {user.status}
                        </span>
                      </td>
                      <td className="px-3 py-4 hidden md:table-cell">
                        <span className="text-sm text-gray-600">{user.joinDate}</span>
                      </td>
                      <td className="px-3 py-4 hidden sm:table-cell">
                        <span className="text-sm text-gray-600 flex items-center gap-1">
                          <Clock className="h-3 w-3 text-gray-400 flex-shrink-0" />
                          {user.lastActive}
                        </span>
                      </td>
                      <td className="px-3 py-4">
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
        
        {/* Pagination */}
        <div className="flex flex-col sm:flex-row items-center justify-between p-4 lg:p-6 border-t border-gray-200 gap-4">
          <p className="text-sm text-gray-600">
            Showing {filteredUsers.length} of {users.length} users
          </p>
          <div className="flex items-center gap-2">
            <button className="px-3 py-1 border border-gray-300 rounded-lg text-sm hover:bg-gray-50 transition-colors">
              Previous
            </button>
            <button className="px-3 py-1 bg-primary text-primary-foreground rounded-lg text-sm">
              1
            </button>
            <button className="px-3 py-1 border border-gray-300 rounded-lg text-sm hover:bg-gray-50 transition-colors">
              2
            </button>
            <button className="px-3 py-1 border border-gray-300 rounded-lg text-sm hover:bg-gray-50 transition-colors">
              3
            </button>
            <button className="px-3 py-1 border border-gray-300 rounded-lg text-sm hover:bg-gray-50 transition-colors">
              Next
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminUsers;
