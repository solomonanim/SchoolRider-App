
import React from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";
import { Home, Mail, User } from "lucide-react";
import { cn } from "@/lib/utils";
import { useAppContext } from "@/context/AppContext";

export const MobileFooter = () => {
  const { isAuthenticated } = useAppContext();
  const navigate = useNavigate();
  const location = useLocation();
  
  // Check if we're on a plugin page
  const isPluginPage = location.pathname === "/plugin" || 
                       location.pathname.startsWith("/plugin/");
  
  const handleAccountClick = () => {
    navigate("/plugin");
  };
  
  return (
    <>
      {/* Spacer div to prevent content from being hidden behind the footer on mobile */}
      <div className={cn("md:hidden", isPluginPage ? "h-20" : "h-16")} />
      
      <div className="md:hidden fixed bottom-0 left-0 right-0 bg-background border-t border-border py-2 px-4 z-50">
        <div className="flex justify-around items-center">
          <Link to="/" className="flex flex-col items-center p-2">
            <Home className="h-6 w-6 text-primary" />
            <span className="text-xs mt-1">Home</span>
          </Link>
          
          <Link to="/contact" className="flex flex-col items-center p-2">
            <Mail className="h-6 w-6 text-primary" />
            <span className="text-xs mt-1">Contact</span>
          </Link>
          
          <button 
            onClick={handleAccountClick}
            className="flex flex-col items-center p-2 bg-transparent border-none"
          >
            <User className="h-6 w-6 text-primary" />
            <span className="text-xs mt-1">
              {isAuthenticated ? "Dashboard" : "Account"}
            </span>
          </button>
        </div>
      </div>
    </>
  );
};
