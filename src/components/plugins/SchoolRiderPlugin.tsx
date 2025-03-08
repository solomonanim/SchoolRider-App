
import React, { useState } from "react";
import { SchoolRiderLoginPage } from "./SchoolRiderLoginPage";
import { ParentDashboard } from "./dashboards/ParentDashboard";
import { SchoolDashboard } from "./dashboards/SchoolDashboard";
import { RiderDashboard } from "./dashboards/RiderDashboard";

export enum UserRole {
  PARENT = "parent",
  SCHOOL = "school",
  RIDER = "rider"
}

export const SchoolRiderPlugin = () => {
  // In a real WordPress plugin, this would be connected to WP authentication
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [userRole, setUserRole] = useState<UserRole>(UserRole.PARENT);
  
  // For demo purposes, we're simulating login
  const handleLogin = (role: UserRole) => {
    setUserRole(role);
    setIsLoggedIn(true);
  };
  
  const handleLogout = () => {
    setIsLoggedIn(false);
  };
  
  if (!isLoggedIn) {
    return <SchoolRiderLoginPage onLogin={handleLogin} />;
  }
  
  return (
    <div>
      {userRole === UserRole.PARENT && <ParentDashboard onLogout={handleLogout} />}
      {userRole === UserRole.SCHOOL && <SchoolDashboard onLogout={handleLogout} />}
      {userRole === UserRole.RIDER && <RiderDashboard onLogout={handleLogout} />}
    </div>
  );
};
