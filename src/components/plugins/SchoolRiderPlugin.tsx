
import React, { useState } from "react";
import { SchoolRiderLoginPage } from "./SchoolRiderLoginPage";
import { SchoolRiderSignupPage } from "./SchoolRiderSignupPage";
import { ParentDashboard } from "./dashboards/ParentDashboard";
import { SchoolDashboard } from "./dashboards/SchoolDashboard";
import { RiderDashboard } from "./dashboards/RiderDashboard";
import { TeacherDashboard } from "./dashboards/TeacherDashboard";
import { useAppContext, UserRole } from "@/context/AppContext";

export const SchoolRiderPlugin = () => {
  const { isAuthenticated, currentUser, logout } = useAppContext();
  const [showSignup, setShowSignup] = useState(false);
  
  // Handle login in the parent component
  const handleLogin = (role: UserRole) => {
    // User is already authenticated through the context
    console.log(`User logged in as ${role}`);
  };
  
  // Handle switching to signup
  const handleSwitchToSignup = () => {
    setShowSignup(true);
  };
  
  // Handle switching to login
  const handleSwitchToLogin = () => {
    setShowSignup(false);
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
      case UserRole.TEACHER:
        return <TeacherDashboard onLogout={logout} />;
      default:
        return null;
    }
  };
  
  if (!isAuthenticated) {
    return showSignup ? 
      <SchoolRiderSignupPage onLogin={handleLogin} onSwitchToLogin={handleSwitchToLogin} /> : 
      <SchoolRiderLoginPage onLogin={handleLogin} onSwitchToSignup={handleSwitchToSignup} />;
  }
  
  return renderDashboard();
};
