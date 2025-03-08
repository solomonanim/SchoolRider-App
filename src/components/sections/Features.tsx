
import React from "react";
import { Badge } from "@/components/ui/badge";
import { Check, ShieldCheck, Users, Map, QrCode, Bell } from "lucide-react";

export const Features = () => {
  const features = [
    {
      icon: <ShieldCheck className="h-10 w-10 text-primary/80" />,
      title: "Secure Authentication",
      description: "QR code verification system ensures only authorized individuals can pick up students"
    },
    {
      icon: <Map className="h-10 w-10 text-primary/80" />,
      title: "Real-time Tracking",
      description: "Track your child's ride in real-time with GPS location updates"
    },
    {
      icon: <QrCode className="h-10 w-10 text-primary/80" />,
      title: "QR Code System",
      description: "Generate unique QR codes for each child for quick and secure verification"
    },
    {
      icon: <Users className="h-10 w-10 text-primary/80" />,
      title: "Multiple Students",
      description: "Manage multiple children and authorized riders from one account"
    },
    {
      icon: <Bell className="h-10 w-10 text-primary/80" />,
      title: "Instant Notifications",
      description: "Receive alerts when your child is picked up or dropped off"
    },
    {
      icon: <Check className="h-10 w-10 text-primary/80" />,
      title: "Attendance Tracking",
      description: "Automatically record pick-up and drop-off times for accurate records"
    }
  ];

  return (
    <section id="features" className="py-24 bg-secondary/50">
      <div className="container px-4 sm:px-6">
        <div className="text-center mb-12">
          <Badge variant="outline" className="mb-4">Features</Badge>
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">
            Streamline Your School Dismissal Process
          </h2>
          <p className="text-muted-foreground text-lg max-w-3xl mx-auto">
            SchoolRider makes student pick-up and drop-off safer, faster, and more convenient for everyone.
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3 mt-16">
          {features.map((feature, index) => (
            <div 
              key={index}
              className="bg-card p-6 rounded-xl border shadow-sm hover:shadow-md transition-all"
            >
              <div className="mb-4">{feature.icon}</div>
              <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
              <p className="text-muted-foreground">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
