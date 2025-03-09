
import React, { useEffect } from "react";
import { SchoolRiderLoginPage } from "./SchoolRiderLoginPage";
import { ParentDashboard } from "./dashboards/ParentDashboard";
import { SchoolDashboard } from "./dashboards/SchoolDashboard";
import { RiderDashboard } from "./dashboards/RiderDashboard";
import { useAppContext } from "@/context/AppContext";

export enum UserRole {
  PARENT = "parent",
  SCHOOL = "school",
  RIDER = "rider"
}

export const SchoolRiderPlugin = () => {
  const { isAuthenticated, currentUser, logout } = useAppContext();
  
  // Handle login/logout in the parent component
  const handleLogin = (role: UserRole) => {
    // User is already authenticated through the context
    console.log(`User logged in as ${role}`);
  };
  
  // Determine which dashboard to render based on user role
  const renderDashboard = () => {
    if (!currentUser) return null;
    
    switch (currentUser.role) {
      case UserRole.PARENT:
        return <ParentDashboard onLogout={logout} />;
      case UserRole.SCHOOL:
        return <SchoolDashboard onLogout={logout} />;
      case UserRole.RIDER:
        return <RiderDashboard onLogout={logout} />;
      default:
        return null;
    }
  };
  
  if (!isAuthenticated) {
    return <SchoolRiderLoginPage onLogin={handleLogin} />;
  }
  
  return renderDashboard();
};
