
import React, { createContext, useState, useContext, ReactNode } from 'react';

// Export the UserRole enum
export enum UserRole {
  PARENT = 'PARENT',
  SCHOOL = 'SCHOOL',
  TEACHER = 'TEACHER',
  RIDER = 'RIDER'
}

// Define Child interface
export interface Child {
  id: string;
  name: string;
  grade: string;
  school: string;
  qrCode?: string;
}

// Add interfaces for ride history and schedule
export interface RideHistory {
  id: string;
  childId: string;
  date: string;
  time: string;
  type: 'pickup' | 'dropoff';
}

export interface ScheduleDay {
  day: string;
  time: string;
  enabled: boolean;
}

// Define Teacher interface
export interface Teacher {
  id: string;
  name: string;
  subject?: string;
  grade?: string;
  email: string;
}

// Define Homeroom interface
export interface Homeroom {
  id: string;
  name: string;
  grade: string;
  teacherId?: string;
}

// Define School interface (needed for school-select)
export interface School {
  id: string;
  name: string;
  country: string;
}

// Update UserData interface to include all needed properties
export interface UserData {
  id: string;
  name: string;
  email: string;
  role: UserRole;
  children?: Child[];
  rides?: RideHistory[];
  schedule?: ScheduleDay[];
  // School-specific properties
  schoolId?: string;
  school?: string;
  teachers?: Teacher[];
  homerooms?: Homeroom[];
}

export interface AppContextType {
  isAuthenticated: boolean;
  currentUser: UserData | null;
  // Auth functions
  login: (user: UserData) => void;
  logout: () => void;
  // Child management functions
  addChild: (child: Omit<Child, 'id' | 'qrCode'>) => void;
  updateChild: (childId: string, updatedChild: Partial<Child>) => void;
  removeChild: (childId: string) => void;
  // School management functions
  addHomeroom?: (homeroom: Omit<Homeroom, 'id'>) => void;
  addTeacher?: (teacher: Omit<Teacher, 'id'>) => void;
  assignTeacherToHomeroom?: (teacherId: string, homeroomId: string) => void;
  // Dummy property for school-select
  schoolsList: School[];
  // Registration functions
  registerSchool?: (schoolData: any) => Promise<void>;
  registerTeacher?: (teacherData: any) => Promise<void>;
  registerParent?: (parentData: any) => Promise<void>;
  registerRider?: (riderData: any) => Promise<void>;
}

export const AppContext = createContext<AppContextType>({
  isAuthenticated: false,
  currentUser: null,
  login: () => {},
  logout: () => {},
  addChild: () => {},
  updateChild: () => {},
  removeChild: () => {},
  schoolsList: [],
});

export const AppProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [currentUser, setCurrentUser] = useState<UserData | null>(null);

  // Sample schools list for the school-select component
  const schoolsList: School[] = [
    { id: "1", name: "Washington Elementary", country: "us" },
    { id: "2", name: "Lincoln High School", country: "us" },
    { id: "3", name: "Roosevelt Middle School", country: "us" },
    { id: "4", name: "Churchill Academy", country: "uk" },
    { id: "5", name: "Victoria School", country: "uk" }
  ];

  const login = (user: UserData) => {
    setCurrentUser(user);
    setIsAuthenticated(true);
  };

  const logout = () => {
    setCurrentUser(null);
    setIsAuthenticated(false);
  };

  const addChild = (childData: Omit<Child, 'id' | 'qrCode'>) => {
    if (!currentUser) return;

    const newChild: Child = {
      id: `child_${Date.now()}`, // Generate unique ID
      ...childData,
      qrCode: `https://api.qrserver.com/v1/create-qr-code/?size=200x200&data=${encodeURIComponent(childData.name)}`,
    };

    setCurrentUser(prev => prev ? {
      ...prev,
      children: [...(prev.children || []), newChild]
    } : null);
  };

  const updateChild = (childId: string, updatedChild: Partial<Child>) => {
    if (!currentUser) return;

    setCurrentUser(prev => prev ? {
      ...prev,
      children: (prev.children || []).map(child => 
        child.id === childId ? { ...child, ...updatedChild } : child
      )
    } : null);
  };

  const removeChild = (childId: string) => {
    if (!currentUser) return;

    setCurrentUser(prev => prev ? {
      ...prev,
      children: (prev.children || []).filter(child => child.id !== childId)
    } : null);
  };

  // Mock register functions
  const registerSchool = async (schoolData: any) => {
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    login({
      id: `school_${Date.now()}`,
      name: schoolData.name,
      email: schoolData.email,
      role: UserRole.SCHOOL,
      schoolId: `school_${Date.now()}`,
      school: schoolData.name,
      teachers: [],
      homerooms: []
    });
  };

  const registerTeacher = async (teacherData: any) => {
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    login({
      id: `teacher_${Date.now()}`,
      name: teacherData.name,
      email: teacherData.email,
      role: UserRole.TEACHER,
      homerooms: []
    });
  };

  const registerParent = async (parentData: any) => {
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    // Convert children data to Child objects
    const children: Child[] = (parentData.children || []).map((child: any) => ({
      id: `child_${Date.now()}_${Math.random().toString(36).substring(2, 9)}`,
      name: child.name,
      grade: child.grade,
      school: child.schoolId ? schoolsList.find(s => s.id === child.schoolId.toString())?.name || "" : "",
      qrCode: `https://api.qrserver.com/v1/create-qr-code/?size=200x200&data=${encodeURIComponent(child.name)}`,
    }));
    
    login({
      id: `parent_${Date.now()}`,
      name: parentData.name,
      email: parentData.email,
      role: UserRole.PARENT,
      children,
      rides: [],
      schedule: [
        { day: "Mon", time: "3:00 PM", enabled: false },
        { day: "Tue", time: "3:00 PM", enabled: false },
        { day: "Wed", time: "2:30 PM", enabled: false },
        { day: "Thu", time: "3:00 PM", enabled: false },
        { day: "Fri", time: "3:00 PM", enabled: false }
      ]
    });
  };

  const registerRider = async (riderData: any) => {
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    login({
      id: `rider_${Date.now()}`,
      name: riderData.name,
      email: riderData.email,
      role: UserRole.RIDER
    });
  };

  // School-specific functions
  const addHomeroom = (homeroomData: Omit<Homeroom, 'id'>) => {
    if (!currentUser || currentUser.role !== UserRole.SCHOOL) return;

    const newHomeroom: Homeroom = {
      id: `homeroom_${Date.now()}`,
      ...homeroomData
    };

    setCurrentUser(prev => prev ? {
      ...prev,
      homerooms: [...(prev.homerooms || []), newHomeroom]
    } : null);
  };

  const addTeacher = (teacherData: Omit<Teacher, 'id'>) => {
    if (!currentUser || currentUser.role !== UserRole.SCHOOL) return;

    const newTeacher: Teacher = {
      id: `teacher_${Date.now()}`,
      ...teacherData
    };

    setCurrentUser(prev => prev ? {
      ...prev,
      teachers: [...(prev.teachers || []), newTeacher]
    } : null);
  };

  const assignTeacherToHomeroom = (teacherId: string, homeroomId: string) => {
    if (!currentUser || currentUser.role !== UserRole.SCHOOL) return;

    setCurrentUser(prev => {
      if (!prev || !prev.homerooms) return prev;
      
      return {
        ...prev,
        homerooms: prev.homerooms.map(homeroom => 
          homeroom.id === homeroomId ? { ...homeroom, teacherId } : homeroom
        )
      };
    });
  };

  return (
    <AppContext.Provider value={{ 
      isAuthenticated, 
      currentUser, 
      login, 
      logout,
      addChild,
      updateChild,
      removeChild,
      schoolsList,
      registerSchool,
      registerTeacher,
      registerParent,
      registerRider,
      addHomeroom,
      addTeacher,
      assignTeacherToHomeroom
    }}>
      {children}
    </AppContext.Provider>
  );
};

export const useAppContext = () => useContext(AppContext);
