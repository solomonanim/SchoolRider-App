
import React from "react";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";

const Changelog = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow pt-32 pb-20 px-6">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl font-bold mb-8">Changelog</h1>
          
          <div className="space-y-12">
            <div className="border-l-4 border-primary pl-6 relative">
              <div className="absolute w-4 h-4 bg-primary rounded-full -left-[10px] top-1"></div>
              <h2 className="text-2xl font-semibold mb-2">Version 2.0.0 - March 2025</h2>
              <p className="text-muted-foreground mb-4">Major update with new features and improvements</p>
              <ul className="list-disc list-inside space-y-2">
                <li>Added real-time notifications for student pickups</li>
                <li>Improved QR code scanning reliability</li>
                <li>Redesigned parent dashboard for better usability</li>
                <li>Added support for multiple pickup guardians</li>
                <li>Enhanced reporting features for school administrators</li>
              </ul>
            </div>
            
            <div className="border-l-4 border-primary pl-6 relative">
              <div className="absolute w-4 h-4 bg-primary rounded-full -left-[10px] top-1"></div>
              <h2 className="text-2xl font-semibold mb-2">Version 1.5.0 - December 2024</h2>
              <p className="text-muted-foreground mb-4">Feature update focused on school administrators</p>
              <ul className="list-disc list-inside space-y-2">
                <li>Added bulk student import via CSV</li>
                <li>Implemented advanced filtering in dismissal logs</li>
                <li>Added customizable dismissal zones for larger schools</li>
                <li>Enhanced security with two-factor authentication</li>
                <li>Improved mobile responsiveness</li>
              </ul>
            </div>
            
            <div className="border-l-4 border-primary pl-6 relative">
              <div className="absolute w-4 h-4 bg-primary rounded-full -left-[10px] top-1"></div>
              <h2 className="text-2xl font-semibold mb-2">Version 1.0.0 - September 2024</h2>
              <p className="text-muted-foreground mb-4">Initial release</p>
              <ul className="list-disc list-inside space-y-2">
                <li>Core dismissal management system</li>
                <li>Basic QR code implementation for student verification</li>
                <li>Parent, teacher, and administrator dashboards</li>
                <li>Email notifications for pickup status</li>
                <li>Basic reporting capabilities</li>
              </ul>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Changelog;
