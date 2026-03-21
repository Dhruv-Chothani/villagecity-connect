import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import { AuthProvider } from "@/contexts/AuthContext";
import { DataProvider } from "@/contexts/DataContext";
import PageWrapper from "@/components/PageWrapper";
import PrivateRoute from "@/components/PrivateRoute";
import AdminLayout from "@/components/AdminLayout";
import { applyPerformanceStyles } from "@/components/PerformanceOptimizer";
import { useEffect } from "react";
import Index from "./pages/Index";
import Login from "./pages/Login";
import CustomerLogin from "./pages/CustomerLogin";
import AdminLogin from "./pages/AdminLogin";
import Register from "./pages/Register";
import Dashboard from "./pages/Dashboard";
import AdminDashboard from "./pages/AdminDashboard";
import AdminUsers from "./pages/AdminUsers";
import AdminGrocery from "./pages/AdminGrocery";
import AdminEducation from "./pages/AdminEducation";
import AdminBusiness from "./pages/AdminBusiness";
import AdminHealth from "./pages/AdminHealth";
import AdminElectronics from "./pages/AdminElectronics";
import AdminAgriculture from "./pages/AdminAgriculture";
import AdminServices from "./pages/AdminServices";
import AdminSettings from "./pages/AdminSettings";
import AdminTraining from "./pages/AdminTraining";
import AdminEmployment from "./pages/AdminEmployment";
import AdminAnalytics from "./pages/AdminAnalytics";
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

const PerformanceOptimizedApp = () => {
  useEffect(() => {
    // Apply performance optimizations when component mounts
    const cleanup = applyPerformanceStyles();
    
    // Preload critical resources
    if ('requestIdleCallback' in window) {
      requestIdleCallback(() => {
        // Preload critical resources during idle time
        const link = document.createElement('link');
        link.rel = 'preload';
        link.as = 'image';
        link.href = '/logo.svg';
        document.head.appendChild(link);
      });
    }
    
    return cleanup;
  }, []);

  return (
    <QueryClientProvider client={queryClient}>
      <AuthProvider>
        <DataProvider>
          <TooltipProvider>
            <Toaster />
            <Sonner />
            <BrowserRouter>
              <Routes>
                <Route path="/" element={<Index />} />
                <Route path="/login" element={<PageWrapper><CustomerLogin /></PageWrapper>} />
                <Route path="/admin-login" element={<PageWrapper><AdminLogin /></PageWrapper>} />
                <Route path="/register" element={<PageWrapper><Register /></PageWrapper>} />
                
                {/* Protected Dashboard Route */}
                <Route path="/dashboard" element={
                  <PrivateRoute>
                    <PageWrapper><Dashboard /></PageWrapper>
                  </PrivateRoute>
                } />
                
                {/* Protected Admin Routes */}
                <Route path="/admin" element={
                  <PrivateRoute requireAdmin>
                    <AdminLayout />
                  </PrivateRoute>
                }>
                  <Route index element={<AdminDashboard />} />
                  <Route path="analytics" element={<AdminAnalytics />} />
                  <Route path="users" element={<AdminUsers />} />
                  <Route path="grocery" element={<AdminGrocery />} />
                  <Route path="education" element={<AdminEducation />} />
                  <Route path="business" element={<AdminBusiness />} />
                  <Route path="health" element={<AdminHealth />} />
                  <Route path="electronics" element={<AdminElectronics />} />
                  <Route path="agriculture" element={<AdminAgriculture />} />
                  <Route path="services" element={<AdminServices />} />
                  <Route path="training" element={<AdminTraining />} />
                  <Route path="employment" element={<AdminEmployment />} />
                  <Route path="settings" element={<AdminSettings />} />
                </Route>
                <Route path="/admin-dashboard" element={
                  <PrivateRoute requireAdmin>
                    <AdminLayout />
                  </PrivateRoute>
                }>
                  <Route index element={<AdminDashboard />} />
                  <Route path="analytics" element={<AdminAnalytics />} />
                  <Route path="users" element={<AdminUsers />} />
                  <Route path="grocery" element={<AdminGrocery />} />
                  <Route path="education" element={<AdminEducation />} />
                  <Route path="business" element={<AdminBusiness />} />
                  <Route path="health" element={<AdminHealth />} />
                  <Route path="electronics" element={<AdminElectronics />} />
                  <Route path="agriculture" element={<AdminAgriculture />} />
                  <Route path="services" element={<AdminServices />} />
                  <Route path="training" element={<AdminTraining />} />
                  <Route path="employment" element={<AdminEmployment />} />
                  <Route path="settings" element={<AdminSettings />} />
                </Route>
                <Route path="/admin/users" element={
                  <PrivateRoute requireAdmin>
                    <AdminLayout />
                  </PrivateRoute>
                }>
                  <Route index element={<AdminUsers />} />
                </Route>
                <Route path="/admin/grocery" element={
                  <PrivateRoute requireAdmin>
                    <AdminLayout />
                  </PrivateRoute>
                }>
                  <Route index element={<AdminGrocery />} />
                </Route>
                <Route path="/admin/education" element={
                  <PrivateRoute requireAdmin>
                    <AdminLayout />
                  </PrivateRoute>
                }>
                  <Route index element={<AdminEducation />} />
                </Route>
                <Route path="/admin/business" element={
                  <PrivateRoute requireAdmin>
                    <AdminLayout />
                  </PrivateRoute>
                }>
                  <Route index element={<AdminBusiness />} />
                </Route>
                <Route path="/admin/health" element={
                  <PrivateRoute requireAdmin>
                    <AdminLayout />
                  </PrivateRoute>
                }>
                  <Route index element={<AdminHealth />} />
                </Route>
                <Route path="/admin/electronics" element={
                  <PrivateRoute requireAdmin>
                    <AdminLayout />
                  </PrivateRoute>
                }>
                  <Route index element={<AdminElectronics />} />
                </Route>
                <Route path="/admin/agriculture" element={
                  <PrivateRoute requireAdmin>
                    <AdminLayout />
                  </PrivateRoute>
                }>
                  <Route index element={<AdminAgriculture />} />
                </Route>
                <Route path="/admin/services" element={
                  <PrivateRoute requireAdmin>
                    <AdminLayout />
                  </PrivateRoute>
                }>
                  <Route index element={<AdminServices />} />
                </Route>
                <Route path="/admin/training" element={
                  <PrivateRoute requireAdmin>
                    <AdminLayout />
                  </PrivateRoute>
                }>
                  <Route index element={<AdminTraining />} />
                </Route>
                <Route path="/admin/employment" element={
                  <PrivateRoute requireAdmin>
                    <AdminLayout />
                  </PrivateRoute>
                }>
                  <Route index element={<AdminEmployment />} />
                </Route>
                <Route path="/admin/settings" element={
                  <PrivateRoute requireAdmin>
                    <AdminLayout />
                  </PrivateRoute>
                }>
                  <Route index element={<AdminSettings />} />
                </Route>
                
                {/* User Routes */}
                <Route path="/education" element={<PageWrapper><Education /></PageWrapper>} />
                <Route path="/grocery" element={<PageWrapper><Grocery /></PageWrapper>} />
                <Route path="/business" element={<PageWrapper><Business /></PageWrapper>} />
                <Route path="/health" element={<PageWrapper><Health /></PageWrapper>} />
                <Route path="/electronics" element={<PageWrapper><Electronics /></PageWrapper>} />
                <Route path="/agriculture" element={<PageWrapper><Agriculture /></PageWrapper>} />
                <Route path="/services" element={<PageWrapper><Services /></PageWrapper>} />
                <Route path="/training" element={<PageWrapper><Training /></PageWrapper>} />
                <Route path="/employment" element={<PageWrapper><Employment /></PageWrapper>} />
                
                {/* 404 */}
                <Route path="*" element={<PageWrapper><NotFound /></PageWrapper>} />
              </Routes>
            </BrowserRouter>
          </TooltipProvider>
        </DataProvider>
      </AuthProvider>
    </QueryClientProvider>
  );
};

const App = () => <PerformanceOptimizedApp />;

export default App;
