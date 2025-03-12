
import React from "react";

interface PageContainerProps {
  children: React.ReactNode;
  className?: string;
}

export const PageContainer: React.FC<PageContainerProps> = ({ children, className = "" }) => {
  return (
    <div className={`container px-4 sm:px-6 max-w-[1300px] mx-auto ${className}`}>
      {children}
    </div>
  );
};
