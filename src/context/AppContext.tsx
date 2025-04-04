
import React, { createContext, useState, useContext, ReactNode } from 'react';
import { UserRole } from './AppContext'; // Assuming this is already defined

// Define Child interface
export interface Child {
  id: string;
  name: string;
  grade: string;
  school: string;
  qrCode?: string;
}

// Update UserData interface to include children
export interface UserData {
  id: string;
  name: string;
  email: string;
  role: UserRole;
  children?: Child[];
}

export interface AppContextType {
  isAuthenticated: boolean;
  currentUser: UserData | null;
  login: (user: UserData) => void;
  logout: () => void;
  addChild: (child: Omit<Child, 'id' | 'qrCode'>) => void;
  updateChild: (childId: string, updatedChild: Partial<Child>) => void;
  removeChild: (childId: string) => void;
}

export const AppContext = createContext<AppContextType>({
  isAuthenticated: false,
  currentUser: null,
  login: () => {},
  logout: () => {},
  addChild: () => {},
  updateChild: () => {},
  removeChild: () => {},
});

export const AppProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [currentUser, setCurrentUser] = useState<UserData | null>(null);

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

  return (
    <AppContext.Provider value={{ 
      isAuthenticated, 
      currentUser, 
      login, 
      logout,
      addChild,
      updateChild,
      removeChild
    }}>
      {children}
    </AppContext.Provider>
  );
};

export const useAppContext = () => useContext(AppContext);
