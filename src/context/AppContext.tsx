
import React, { createContext, useContext, useState, useEffect } from "react";
import { UserRole } from "@/components/plugins/SchoolRiderPlugin";

// Types
export interface Child {
  id: number;
  name: string;
  grade: string;
  school: string;
  qrCode: string;
}

export interface Ride {
  id: number;
  childId: number;
  date: string;
  time: string;
  type: "pickup" | "dropoff";
  status: "scheduled" | "in-progress" | "completed";
  riderId?: number;
}

export interface ScheduleDay {
  day: string;
  enabled: boolean;
  time: string;
}

interface UserData {
  id: number;
  name: string;
  email: string;
  role: UserRole;
  children?: Child[];
  schedule?: ScheduleDay[];
  rides?: Ride[];
}

interface AppContextType {
  isAuthenticated: boolean;
  currentUser: UserData | null;
  login: (email: string, password: string, role: UserRole) => Promise<void>;
  logout: () => void;
  addChild: (child: Omit<Child, "id" | "qrCode">) => void;
  requestRide: (childId: number, date: string, time: string, type: "pickup" | "dropoff") => void;
  updateSchedule: (daySchedule: ScheduleDay) => void;
}

// Create the context
const AppContext = createContext<AppContextType | undefined>(undefined);

// Mock data
const mockUsers: UserData[] = [
  {
    id: 1,
    name: "John Parent",
    email: "parent@example.com",
    role: UserRole.PARENT,
    children: [
      { id: 1, name: "Alex Johnson", grade: "5th Grade", school: "Lincoln Elementary", qrCode: "/placeholder.svg" },
      { id: 2, name: "Emma Johnson", grade: "3rd Grade", school: "Lincoln Elementary", qrCode: "/placeholder.svg" }
    ],
    schedule: [
      { day: "Mon", enabled: true, time: "3:15 PM" },
      { day: "Tue", enabled: true, time: "3:15 PM" },
      { day: "Wed", enabled: true, time: "3:15 PM" },
      { day: "Thu", enabled: true, time: "3:15 PM" },
      { day: "Fri", enabled: true, time: "3:15 PM" }
    ],
    rides: [
      { id: 1, childId: 1, date: "2023-10-11", time: "3:15 PM", type: "pickup", status: "completed" },
      { id: 2, childId: 1, date: "2023-10-12", time: "3:15 PM", type: "pickup", status: "completed" },
      { id: 3, childId: 2, date: "2023-10-13", time: "3:15 PM", type: "pickup", status: "completed" }
    ]
  },
  {
    id: 2,
    name: "School Admin",
    email: "school@example.com",
    role: UserRole.SCHOOL
  },
  {
    id: 3,
    name: "Driver",
    email: "rider@example.com",
    role: UserRole.RIDER
  }
];

// Provider component
export const AppProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [currentUser, setCurrentUser] = useState<UserData | null>(null);

  // Check for existing session on load
  useEffect(() => {
    const savedUser = localStorage.getItem("schoolrider_user");
    if (savedUser) {
      setCurrentUser(JSON.parse(savedUser));
      setIsAuthenticated(true);
    }
  }, []);

  // Login function
  const login = async (email: string, password: string, role: UserRole): Promise<void> => {
    // In a real app, this would validate against a backend
    // For the prototype, we're using mock data
    const user = mockUsers.find(u => u.email === email && u.role === role);
    
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if (user) {
          setCurrentUser(user);
          setIsAuthenticated(true);
          localStorage.setItem("schoolrider_user", JSON.stringify(user));
          resolve();
        } else {
          reject(new Error("Invalid credentials"));
        }
      }, 500); // Simulating API call
    });
  };

  // Logout function
  const logout = () => {
    setCurrentUser(null);
    setIsAuthenticated(false);
    localStorage.removeItem("schoolrider_user");
  };

  // Add child function
  const addChild = (child: Omit<Child, "id" | "qrCode">) => {
    if (!currentUser || currentUser.role !== UserRole.PARENT) return;
    
    const newChild: Child = {
      ...child,
      id: Date.now(),
      qrCode: "/placeholder.svg"
    };
    
    const updatedUser = {
      ...currentUser,
      children: [...(currentUser.children || []), newChild]
    };
    
    setCurrentUser(updatedUser);
    localStorage.setItem("schoolrider_user", JSON.stringify(updatedUser));
  };

  // Request ride function
  const requestRide = (childId: number, date: string, time: string, type: "pickup" | "dropoff") => {
    if (!currentUser || currentUser.role !== UserRole.PARENT) return;
    
    const newRide: Ride = {
      id: Date.now(),
      childId,
      date,
      time,
      type,
      status: "scheduled"
    };
    
    const updatedUser = {
      ...currentUser,
      rides: [...(currentUser.rides || []), newRide]
    };
    
    setCurrentUser(updatedUser);
    localStorage.setItem("schoolrider_user", JSON.stringify(updatedUser));
  };

  // Update schedule function
  const updateSchedule = (daySchedule: ScheduleDay) => {
    if (!currentUser || currentUser.role !== UserRole.PARENT) return;
    
    const updatedSchedule = currentUser.schedule?.map(day => 
      day.day === daySchedule.day ? daySchedule : day
    ) || [daySchedule];
    
    const updatedUser = {
      ...currentUser,
      schedule: updatedSchedule
    };
    
    setCurrentUser(updatedUser);
    localStorage.setItem("schoolrider_user", JSON.stringify(updatedUser));
  };

  const value = {
    isAuthenticated,
    currentUser,
    login,
    logout,
    addChild,
    requestRide,
    updateSchedule
  };

  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
};

// Hook for using the context
export const useAppContext = () => {
  const context = useContext(AppContext);
  if (context === undefined) {
    throw new Error("useAppContext must be used within an AppProvider");
  }
  return context;
};
