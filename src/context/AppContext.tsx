import React, { createContext, useContext, useState, useEffect } from "react";

// Define UserRole enum directly in this file to avoid circular dependencies
export enum UserRole {
  PARENT = "parent",
  SCHOOL = "school",
  RIDER = "rider",
  TEACHER = "teacher"
}

// Types
export interface Child {
  id: number;
  name: string;
  grade: string;
  school: string;
  homeroom: string;
  qrCode: string;
  schoolId?: number;
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

export interface Teacher {
  id: number;
  name: string;
  email: string;
  schoolId: number;
  homeroomIds: number[];
  phone?: string;
  subject?: string;
  grade?: string;
  country?: string;
}

export interface Homeroom {
  id: number;
  name: string;
  grade: string;
  teacherId: number;
  schoolId: number;
}

export interface School {
  id: number;
  name: string;
  address: string;
  country?: string;
  phone?: string;
  website?: string;
  email?: string;
}

interface UserData {
  id: number;
  name: string;
  email: string;
  role: UserRole;
  schoolId?: number;
  children?: Child[];
  schedule?: ScheduleDay[];
  rides?: Ride[];
  homerooms?: Homeroom[];
  school?: School;
  teachers?: Teacher[];
  country?: string;
  phone?: string;
  address?: string;
}

// Registration interfaces
interface SchoolRegistration {
  name: string;
  email: string;
  password: string;
  country: string;
  address: string;
  phone?: string;
  website?: string;
}

interface TeacherRegistration {
  name: string;
  email: string;
  password: string;
  country: string;
  schoolId: number;
  phone?: string;
  subject?: string;
  grade?: string;
}

interface ChildRegistration {
  name: string;
  grade: string;
  schoolId: number;
}

interface ParentRegistration {
  name: string;
  email: string;
  password: string;
  country: string;
  phone: string;
  address: string;
  children: ChildRegistration[];
}

interface AppContextType {
  isAuthenticated: boolean;
  currentUser: UserData | null;
  login: (email: string, password: string, role: UserRole) => Promise<void>;
  logout: () => void;
  addChild: (child: Omit<Child, "id" | "qrCode">) => void;
  requestRide: (childId: number, date: string, time: string, type: "pickup" | "dropoff") => void;
  updateSchedule: (daySchedule: ScheduleDay) => void;
  addHomeroom: (homeroom: Omit<Homeroom, "id">) => void;
  addTeacher: (teacher: Omit<Teacher, "id">) => void;
  assignTeacherToHomeroom: (teacherId: number, homeroomId: number) => void;
  registerSchool: (school: SchoolRegistration) => Promise<void>;
  registerTeacher: (teacher: TeacherRegistration) => Promise<void>;
  registerParent: (parent: ParentRegistration) => Promise<void>;
  schoolsList: School[];
}

// Create the context
const AppContext = createContext<AppContextType | undefined>(undefined);

// Mock data
const mockSchools: School[] = [
  { 
    id: 1, 
    name: "Lincoln Elementary", 
    address: "123 Education Lane",
    country: "us",
    email: "admin@lincoln.edu",
    phone: "555-123-4567",
    website: "https://lincoln.edu"
  },
  { 
    id: 2, 
    name: "Washington Middle School", 
    address: "456 Learning Ave",
    country: "us",
    email: "admin@washington.edu",
    phone: "555-987-6543",
    website: "https://washington.edu"
  },
  { 
    id: 3, 
    name: "Oxford Primary School", 
    address: "10 Knowledge Street",
    country: "uk",
    email: "admin@oxford-primary.edu",
    phone: "+44 1234 567890",
    website: "https://oxford-primary.edu"
  }
];

const mockTeachers: Teacher[] = [
  { id: 4, name: "Ms. Thompson", email: "teacher@example.com", schoolId: 1, homeroomIds: [1, 2] },
  { id: 5, name: "Mr. Rodriguez", email: "rodriguez@example.com", schoolId: 1, homeroomIds: [3] }
];

const mockHomerooms: Homeroom[] = [
  { id: 1, name: "5A", grade: "5th Grade", teacherId: 4, schoolId: 1 },
  { id: 2, name: "5B", grade: "5th Grade", teacherId: 4, schoolId: 1 },
  { id: 3, name: "3B", grade: "3rd Grade", teacherId: 5, schoolId: 1 }
];

const mockUsers: UserData[] = [
  {
    id: 1,
    name: "John Parent",
    email: "parent@example.com",
    role: UserRole.PARENT,
    children: [
      { id: 1, name: "Alex Johnson", grade: "5th Grade", school: "Lincoln Elementary", homeroom: "5A", qrCode: "/placeholder.svg" },
      { id: 2, name: "Emma Johnson", grade: "3rd Grade", school: "Lincoln Elementary", homeroom: "3B", qrCode: "/placeholder.svg" }
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
    role: UserRole.SCHOOL,
    schoolId: 1,
    school: mockSchools[0],
    teachers: mockTeachers.filter(t => t.schoolId === 1),
    homerooms: mockHomerooms.filter(h => h.schoolId === 1)
  },
  {
    id: 3,
    name: "Driver",
    email: "rider@example.com",
    role: UserRole.RIDER
  },
  {
    id: 4,
    name: "Ms. Thompson",
    email: "teacher@example.com",
    role: UserRole.TEACHER,
    schoolId: 1,
    homerooms: mockHomerooms.filter(h => h.teacherId === 4)
  },
  {
    id: 5,
    name: "Mr. Rodriguez",
    email: "rodriguez@example.com",
    role: UserRole.TEACHER,
    schoolId: 1,
    homerooms: mockHomerooms.filter(h => h.teacherId === 5)
  }
];

// Provider component
export const AppProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [currentUser, setCurrentUser] = useState<UserData | null>(null);
  const [schools, setSchools] = useState<School[]>(mockSchools);
  const [users, setUsers] = useState<UserData[]>(mockUsers);

  // Check for existing session on load
  useEffect(() => {
    const savedUser = localStorage.getItem("schoolrider_user");
    if (savedUser) {
      setCurrentUser(JSON.parse(savedUser));
      setIsAuthenticated(true);
    }
    
    // Load any saved schools
    const savedSchools = localStorage.getItem("schoolrider_schools");
    if (savedSchools) {
      setSchools(JSON.parse(savedSchools));
    } else {
      // Initialize with mock data
      localStorage.setItem("schoolrider_schools", JSON.stringify(mockSchools));
    }
    
    // Load any saved users
    const savedUsers = localStorage.getItem("schoolrider_users");
    if (savedUsers) {
      setUsers(JSON.parse(savedUsers));
    } else {
      // Initialize with mock data
      localStorage.setItem("schoolrider_users", JSON.stringify(mockUsers));
    }
  }, []);

  // Login function
  const login = async (email: string, password: string, role: UserRole): Promise<void> => {
    // In a real app, this would validate against a backend
    // For the prototype, we're using mock data
    const user = users.find(u => u.email === email && u.role === role);
    
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

  // Add homeroom function (for school admin)
  const addHomeroom = (homeroom: Omit<Homeroom, "id">) => {
    if (!currentUser || currentUser.role !== UserRole.SCHOOL) return;
    
    const newHomeroom: Homeroom = {
      ...homeroom,
      id: Date.now()
    };
    
    const updatedUser = {
      ...currentUser,
      homerooms: [...(currentUser.homerooms || []), newHomeroom]
    };
    
    setCurrentUser(updatedUser);
    localStorage.setItem("schoolrider_user", JSON.stringify(updatedUser));
  };

  // Add teacher function (for school admin)
  const addTeacher = (teacher: Omit<Teacher, "id">) => {
    if (!currentUser || currentUser.role !== UserRole.SCHOOL) return;
    
    const newTeacher: Teacher = {
      ...teacher,
      id: Date.now(),
      homeroomIds: []
    };
    
    const updatedUser = {
      ...currentUser,
      teachers: [...(currentUser.teachers || []), newTeacher]
    };
    
    setCurrentUser(updatedUser);
    localStorage.setItem("schoolrider_user", JSON.stringify(updatedUser));
  };

  // Assign teacher to homeroom function (for school admin)
  const assignTeacherToHomeroom = (teacherId: number, homeroomId: number) => {
    if (!currentUser || currentUser.role !== UserRole.SCHOOL) return;
    
    // Update homeroom's teacherId
    const updatedHomerooms = currentUser.homerooms?.map(homeroom => 
      homeroom.id === homeroomId ? { ...homeroom, teacherId } : homeroom
    ) || [];
    
    // Update teacher's homeroomIds
    const updatedTeachers = currentUser.teachers?.map(teacher => {
      if (teacher.id === teacherId) {
        return {
          ...teacher,
          homeroomIds: [...teacher.homeroomIds, homeroomId]
        };
      }
      return teacher;
    }) || [];
    
    const updatedUser = {
      ...currentUser,
      homerooms: updatedHomerooms,
      teachers: updatedTeachers
    };
    
    setCurrentUser(updatedUser);
    localStorage.setItem("schoolrider_user", JSON.stringify(updatedUser));
  };

  // Register school function
  const registerSchool = async (school: SchoolRegistration): Promise<void> => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        try {
          // Create new school
          const newSchool: School = {
            id: Date.now(),
            name: school.name,
            address: school.address,
            country: school.country,
            phone: school.phone,
            website: school.website,
            email: school.email
          };
          
          // Create new user for school
          const newUser: UserData = {
            id: Date.now() + 1,
            name: school.name,
            email: school.email,
            role: UserRole.SCHOOL,
            schoolId: newSchool.id,
            school: newSchool,
            teachers: [],
            homerooms: [],
            country: school.country,
            phone: school.phone,
            address: school.address
          };
          
          // Update state and localStorage
          const updatedSchools = [...schools, newSchool];
          const updatedUsers = [...users, newUser];
          
          setSchools(updatedSchools);
          setUsers(updatedUsers);
          localStorage.setItem("schoolrider_schools", JSON.stringify(updatedSchools));
          localStorage.setItem("schoolrider_users", JSON.stringify(updatedUsers));
          
          setCurrentUser(newUser);
          setIsAuthenticated(true);
          localStorage.setItem("schoolrider_user", JSON.stringify(newUser));
          
          resolve();
        } catch (error) {
          reject(error);
        }
      }, 800); // Simulate network delay
    });
  };

  // Register teacher function
  const registerTeacher = async (teacher: TeacherRegistration): Promise<void> => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        try {
          // Find school
          const school = schools.find(s => s.id === teacher.schoolId);
          if (!school) {
            reject(new Error("School not found"));
            return;
          }
          
          // Create new teacher
          const newTeacher: Teacher = {
            id: Date.now(),
            name: teacher.name,
            email: teacher.email,
            schoolId: teacher.schoolId,
            homeroomIds: [],
            phone: teacher.phone,
            subject: teacher.subject,
            grade: teacher.grade,
            country: teacher.country
          };
          
          // Create new user for teacher
          const newUser: UserData = {
            id: Date.now() + 1,
            name: teacher.name,
            email: teacher.email,
            role: UserRole.TEACHER,
            schoolId: teacher.schoolId,
            homerooms: [],
            country: teacher.country,
            phone: teacher.phone
          };
          
          // Update state and localStorage
          const updatedUsers = [...users, newUser];
          setUsers(updatedUsers);
          localStorage.setItem("schoolrider_users", JSON.stringify(updatedUsers));
          
          setCurrentUser(newUser);
          setIsAuthenticated(true);
          localStorage.setItem("schoolrider_user", JSON.stringify(newUser));
          
          // Update school's teachers list if it exists in currentUser
          if (currentUser && currentUser.role === UserRole.SCHOOL && currentUser.schoolId === teacher.schoolId) {
            const updatedCurrentUser = {
              ...currentUser,
              teachers: [...(currentUser.teachers || []), newTeacher]
            };
            setCurrentUser(updatedCurrentUser);
            localStorage.setItem("schoolrider_user", JSON.stringify(updatedCurrentUser));
          }
          
          resolve();
        } catch (error) {
          reject(error);
        }
      }, 800); // Simulate network delay
    });
  };

  // Register parent function
  const registerParent = async (parent: ParentRegistration): Promise<void> => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        try {
          // Convert child registrations to Child objects
          const childrenWithDetails: Child[] = parent.children.map((childReg, index) => {
            const school = schools.find(s => s.id === childReg.schoolId);
            return {
              id: Date.now() + index,
              name: childReg.name,
              grade: childReg.grade,
              school: school ? school.name : "Unknown School",
              homeroom: "", // Will be assigned later by school admin
              qrCode: "/placeholder.svg",
              schoolId: childReg.schoolId
            };
          });
          
          // Create default schedule
          const defaultSchedule: ScheduleDay[] = [
            { day: "Mon", enabled: true, time: "3:15 PM" },
            { day: "Tue", enabled: true, time: "3:15 PM" },
            { day: "Wed", enabled: true, time: "3:15 PM" },
            { day: "Thu", enabled: true, time: "3:15 PM" },
            { day: "Fri", enabled: true, time: "3:15 PM" }
          ];
          
          // Create new user for parent
          const newUser: UserData = {
            id: Date.now(),
            name: parent.name,
            email: parent.email,
            role: UserRole.PARENT,
            children: childrenWithDetails,
            schedule: defaultSchedule,
            rides: [],
            country: parent.country,
            phone: parent.phone,
            address: parent.address
          };
          
          // Update state and localStorage
          const updatedUsers = [...users, newUser];
          setUsers(updatedUsers);
          localStorage.setItem("schoolrider_users", JSON.stringify(updatedUsers));
          
          setCurrentUser(newUser);
          setIsAuthenticated(true);
          localStorage.setItem("schoolrider_user", JSON.stringify(newUser));
          
          resolve();
        } catch (error) {
          reject(error);
        }
      }, 800); // Simulate network delay
    });
  };

  const value = {
    isAuthenticated,
    currentUser,
    login,
    logout,
    addChild,
    requestRide,
    updateSchedule,
    addHomeroom,
    addTeacher,
    assignTeacherToHomeroom,
    registerSchool,
    registerTeacher,
    registerParent,
    schoolsList: schools
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
