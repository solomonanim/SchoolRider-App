
import React, { useState } from "react";
import { SchoolRiderLoginPage } from "./SchoolRiderLoginPage";
import { SchoolRiderSignupPage } from "./SchoolRiderSignupPage";
import { ParentDashboard } from "./dashboards/ParentDashboard";
import { SchoolDashboard } from "./dashboards/SchoolDashboard";
import { RiderDashboard } from "./dashboards/RiderDashboard";
import { TeacherDashboard } from "./dashboards/TeacherDashboard";
import { useAppContext, UserRole } from "@/context/AppContext";
import { Car, User } from "lucide-react";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Link } from "react-router-dom";

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
  
  // Header component for authenticated pages
  const Header = () => (
    <div className="flex justify-between items-center p-4 border-b bg-background sticky top-0 z-10">
      <Link to="/" className="flex items-center gap-2">
        <div className="w-10 h-10 bg-primary rounded-md flex items-center justify-center">
          <Car className="h-6 w-6 text-white" />
        </div>
        <span className="font-bold text-lg">SchoolRider</span>
      </Link>
      
      {isAuthenticated && currentUser && (
        <div className="flex items-center gap-2">
          <span className="text-sm font-medium hidden sm:inline-block">
            {currentUser.name}
          </span>
          <Avatar className="cursor-pointer">
            {/* Fix: Remove the attempt to access currentUser.avatar which doesn't exist */}
            <AvatarFallback className="bg-primary/10">
              <User className="h-4 w-4" />
            </AvatarFallback>
          </Avatar>
        </div>
      )}
    </div>
  );
  
  // Determine which dashboard to render based on user role
  const renderDashboard = () => {
    if (!currentUser) return null;
    
    return (
      <div className="min-h-screen flex flex-col">
        <Header />
        <div className="flex-1">
          {currentUser.role === UserRole.PARENT && <ParentDashboard onLogout={logout} />}
          {currentUser.role === UserRole.SCHOOL && <SchoolDashboard onLogout={logout} />}
          {currentUser.role === UserRole.RIDER && <RiderDashboard onLogout={logout} />}
          {currentUser.role === UserRole.TEACHER && <TeacherDashboard onLogout={logout} />}
        </div>
      </div>
    );
  };
  
  if (!isAuthenticated) {
    return showSignup ? 
      <SchoolRiderSignupPage onLogin={handleLogin} onSwitchToLogin={handleSwitchToLogin} /> : 
      <SchoolRiderLoginPage onLogin={handleLogin} onSwitchToSignup={handleSwitchToSignup} />;
  }
  
  return renderDashboard();
};
