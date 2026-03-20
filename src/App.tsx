import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import { AuthProvider } from "@/contexts/AuthContext";
import Navbar from "@/components/Navbar";
import AdminLayout from "@/components/AdminLayout";
import Index from "./pages/Index";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Dashboard from "./pages/Dashboard";
import AdminDashboard from "./pages/AdminDashboard";
import AdminUsers from "./pages/AdminUsers";
import AdminSettings from "./pages/AdminSettings";
import Education from "./pages/Education";
import Grocery from "./pages/Grocery";
import Business from "./pages/Business";
import Health from "./pages/Health";
import Electronics from "./pages/Electronics";
import Agriculture from "./pages/Agriculture";
import Services from "./pages/Services";
import Training from "./pages/Training";
import Employment from "./pages/Employment";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <AuthProvider>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<><Navbar /><Index /></>} />
            <Route path="/login" element={<><Navbar /><Login /></>} />
            <Route path="/register" element={<><Navbar /><Register /></>} />
            <Route path="/dashboard" element={<><Navbar /><Dashboard /></>} />
            
            {/* Admin Routes */}
            <Route path="/admin" element={<AdminLayout />}>
              <Route index element={<AdminDashboard />} />
              <Route path="users" element={<AdminUsers />} />
              <Route path="education" element={<AdminDashboard />} />
              <Route path="grocery" element={<AdminDashboard />} />
              <Route path="business" element={<AdminDashboard />} />
              <Route path="health" element={<AdminDashboard />} />
              <Route path="electronics" element={<AdminDashboard />} />
              <Route path="agriculture" element={<AdminDashboard />} />
              <Route path="services" element={<AdminDashboard />} />
              <Route path="training" element={<AdminDashboard />} />
              <Route path="employment" element={<AdminDashboard />} />
              <Route path="analytics" element={<AdminDashboard />} />
              <Route path="reports" element={<AdminDashboard />} />
              <Route path="settings" element={<AdminSettings />} />
            </Route>
            
            <Route path="/education" element={<><Navbar /><Education /></>} />
            <Route path="/grocery" element={<><Navbar /><Grocery /></>} />
            <Route path="/business" element={<><Navbar /><Business /></>} />
            <Route path="/health" element={<><Navbar /><Health /></>} />
            <Route path="/electronics" element={<><Navbar /><Electronics /></>} />
            <Route path="/agriculture" element={<><Navbar /><Agriculture /></>} />
            <Route path="/services" element={<><Navbar /><Services /></>} />
            <Route path="/training" element={<><Navbar /><Training /></>} />
            <Route path="/employment" element={<><Navbar /><Employment /></>} />
            <Route path="*" element={<><Navbar /><NotFound /></>} />
          </Routes>
        </BrowserRouter>
      </TooltipProvider>
    </AuthProvider>
  </QueryClientProvider>
);

export default App;
