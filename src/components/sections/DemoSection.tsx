
import React from "react";
import { Button } from "@/components/ui/button";
import { Monitor, Smartphone, QrCode, Navigation } from "lucide-react";

export const DemoSection = () => {
  return (
    <section className="py-24 bg-card">
      <div className="container px-4 sm:px-6">
        <div className="flex flex-col lg:flex-row items-center gap-12">
          <div className="lg:w-1/2">
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-6">
              Experience SchoolRider in Action
            </h2>
            <p className="text-lg text-muted-foreground mb-8">
              See how SchoolRider transforms the school dismissal process with its intuitive 
              interface, robust security features, and real-time tracking.
            </p>
            
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="bg-primary/10 p-2 rounded-lg text-primary">
                  <Monitor className="h-6 w-6" />
                </div>
                <div>
                  <h3 className="font-semibold text-xl mb-1">Admin Dashboard</h3>
                  <p className="text-muted-foreground">
                    Complete control for school administrators with real-time dismissal management.
                  </p>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <div className="bg-primary/10 p-2 rounded-lg text-primary">
                  <Smartphone className="h-6 w-6" />
                </div>
                <div>
                  <h3 className="font-semibold text-xl mb-1">Parent Mobile Experience</h3>
                  <p className="text-muted-foreground">
                    User-friendly mobile interface for parents to track and manage pickup.
                  </p>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <div className="bg-primary/10 p-2 rounded-lg text-primary">
                  <QrCode className="h-6 w-6" />
                </div>
                <div>
                  <h3 className="font-semibold text-xl mb-1">QR Verification System</h3>
                  <p className="text-muted-foreground">
                    Secure QR-based pickup verification ensures student safety.
                  </p>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <div className="bg-primary/10 p-2 rounded-lg text-primary">
                  <Navigation className="h-6 w-6" />
                </div>
                <div>
                  <h3 className="font-semibold text-xl mb-1">Live Tracking</h3>
                  <p className="text-muted-foreground">
                    Real-time ride tracking for parents and school administrators.
                  </p>
                </div>
              </div>
            </div>
            
            <Button size="lg" className="mt-8">
              Watch Video Demo
            </Button>
          </div>
          
          <div className="lg:w-1/2 relative">
            <div className="rounded-xl overflow-hidden border shadow-xl">
              <img 
                src="https://images.unsplash.com/photo-1540479859555-17af45c78602?auto=format&fit=crop&w=800&h=500&q=80" 
                alt="SchoolRider Demo" 
                className="w-full h-auto"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
