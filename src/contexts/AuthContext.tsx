import React, { createContext, useContext, useState, useCallback } from "react";

interface User {
  id: string;
  name: string;
  email: string;
  role: "user" | "admin";
}

interface AuthContextType {
  user: User | null;
  token: string | null;
  login: (email: string, password: string) => Promise<void>;
  register: (name: string, email: string, password: string) => Promise<void>;
  logout: () => void;
  isAdmin: boolean;
  isAuthenticated: boolean;
}

const AuthContext = createContext<AuthContextType | null>(null);

export const useAuth = () => {
  const ctx = useContext(AuthContext);
  if (!ctx) throw new Error("useAuth must be used within AuthProvider");
  return ctx;
};

export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [user, setUser] = useState<User | null>(() => {
    const saved = localStorage.getItem("vcda_user");
    return saved ? JSON.parse(saved) : null;
  });

  const [token, setToken] = useState<string | null>(() => {
    return localStorage.getItem("vcda_token");
  });

  const isAuthenticated = !!user && !!token;

  const login = useCallback(async (email: string, _password: string) => {
    // In production, call: POST http://localhost:5000/api/auth/login
    const dummyToken = "dummy_jwt_token_" + Date.now();
    const dummyUser: User = {
      id: "1",
      name: email.includes("admin") ? "Admin User" : "Demo User",
      email,
      role: email.includes("admin") ? "admin" : "user",
    };
    
    setUser(dummyUser);
    setToken(dummyToken);
    localStorage.setItem("vcda_user", JSON.stringify(dummyUser));
    localStorage.setItem("vcda_token", dummyToken);
  }, []);

  const register = useCallback(async (name: string, email: string, _password: string) => {
    const dummyToken = "dummy_jwt_token_" + Date.now();
    const dummyUser: User = { id: "2", name, email, role: "user" };
    
    setUser(dummyUser);
    setToken(dummyToken);
    localStorage.setItem("vcda_user", JSON.stringify(dummyUser));
    localStorage.setItem("vcda_token", dummyToken);
  }, []);

  const logout = useCallback(() => {
    setUser(null);
    setToken(null);
    localStorage.removeItem("vcda_user");
    localStorage.removeItem("vcda_token");
  }, []);

  return (
    <AuthContext.Provider value={{ 
      user, 
      token, 
      login, 
      register, 
      logout, 
      isAdmin: user?.role === "admin",
      isAuthenticated 
    }}>
      {children}
    </AuthContext.Provider>
  );
};
