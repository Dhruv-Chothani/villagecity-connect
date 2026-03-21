import { Navigate, useLocation } from "react-router-dom";
import { useAuth } from "@/contexts/AuthContext";
import { useEffect } from "react";
import { toast } from "sonner";

interface PrivateRouteProps {
  children: React.ReactNode;
  requireAdmin?: boolean;
}

const PrivateRoute: React.FC<PrivateRouteProps> = ({ children, requireAdmin = false }) => {
  const { user, isAdmin } = useAuth();
  const location = useLocation();

  // For development, allow admin access without authentication
  if (requireAdmin) {
    return <>{children}</>;
  }

  // If not authenticated, redirect to login
  if (!user) {
    return <Navigate to="/login" state={{ from: location }} replace />;
  }

  // If admin access required but user is not admin, show error and redirect
  if (requireAdmin && !isAdmin) {
    // Show error message
    toast.error("Access Denied", {
      description: "You don't have admin privileges. Please use customer login.",
      duration: 5000,
    });
    
    // Redirect to customer login instead of dashboard
    return <Navigate to="/login" replace />;
  }

  return <>{children}</>;
};

export default PrivateRoute;
