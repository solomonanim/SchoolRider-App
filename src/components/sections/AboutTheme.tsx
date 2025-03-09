
import React from "react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { 
  Download, 
  Zap, 
  Code, 
  Lock, 
  Smartphone, 
  Globe, 
  Database, 
  PieChart,
  Users,
  GraduationCap,
  Car,
  School
} from "lucide-react";

export const AboutTheme = () => {
  return (
    <section id="about" className="py-24 bg-secondary/50">
      <div className="container px-4 sm:px-6">
        <div className="text-center mb-16">
          <Badge variant="outline" className="mb-4">School Dismissal System</Badge>
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">
            The Complete School Dismissal Solution
          </h2>
          <p className="text-muted-foreground text-lg max-w-3xl mx-auto">
            SchoolRider is a comprehensive platform that connects parents, schools, teachers, and drivers to ensure safe and efficient student transportation.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <div className="space-y-6">
              <div className="flex gap-4 items-start">
                <div className="bg-primary/10 p-3 rounded-lg text-primary">
                  <Zap className="h-6 w-6" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-1">Streamlined Dismissal</h3>
                  <p className="text-muted-foreground">
                    Reduce wait times and traffic congestion with our organized pickup system.
                  </p>
                </div>
              </div>
              
              <div className="flex gap-4 items-start">
                <div className="bg-primary/10 p-3 rounded-lg text-primary">
                  <Lock className="h-6 w-6" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-1">Enhanced Security</h3>
                  <p className="text-muted-foreground">
                    QR verification ensures students are only released to authorized individuals.
                  </p>
                </div>
              </div>
              
              <div className="flex gap-4 items-start">
                <div className="bg-primary/10 p-3 rounded-lg text-primary">
                  <GraduationCap className="h-6 w-6" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-1">Teacher Integration</h3>
                  <p className="text-muted-foreground">
                    Teachers maintain real-time awareness of student pickup status and homeroom management.
                  </p>
                </div>
              </div>
              
              <div className="flex gap-4 items-start">
                <div className="bg-primary/10 p-3 rounded-lg text-primary">
                  <Smartphone className="h-6 w-6" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-1">Mobile Access</h3>
                  <p className="text-muted-foreground">
                    Parents and staff can manage everything from their smartphones for maximum convenience.
                  </p>
                </div>
              </div>
            </div>
            
            <Button size="lg" className="mt-8 gap-2">
              Get Started with SchoolRider
              <Download className="h-5 w-5" />
            </Button>
          </div>
          
          <div className="bg-card rounded-xl border p-8 shadow-sm">
            <h3 className="text-2xl font-bold mb-6">Comprehensive Platform:</h3>
            
            <div className="space-y-6">
              <div className="flex items-center gap-3">
                <Users className="h-5 w-5 text-primary" />
                <div>
                  <h4 className="font-medium">Parent Portal</h4>
                  <p className="text-sm text-muted-foreground">Schedule pickups and monitor your child's status</p>
                </div>
              </div>
              
              <div className="flex items-center gap-3">
                <School className="h-5 w-5 text-primary" />
                <div>
                  <h4 className="font-medium">School Admin Dashboard</h4>
                  <p className="text-sm text-muted-foreground">Manage dismissal process and view analytics</p>
                </div>
              </div>
              
              <div className="flex items-center gap-3">
                <GraduationCap className="h-5 w-5 text-primary" />
                <div>
                  <h4 className="font-medium">Teacher Interface</h4>
                  <p className="text-sm text-muted-foreground">Track homeroom students and confirm pickups</p>
                </div>
              </div>
              
              <div className="flex items-center gap-3">
                <Car className="h-5 w-5 text-primary" />
                <div>
                  <h4 className="font-medium">Driver App</h4>
                  <p className="text-sm text-muted-foreground">Optimize routes and verify student identity</p>
                </div>
              </div>
            </div>
            
            <div className="mt-8 pt-6 border-t">
              <div className="flex items-center justify-between mb-2">
                <span className="font-medium">Basic Plan</span>
                <Badge>Free Trial</Badge>
              </div>
              <div className="flex items-center justify-between mb-2">
                <span className="font-medium">Premium Plan</span>
                <span className="text-lg font-bold">$199/month</span>
              </div>
              <p className="text-sm text-muted-foreground mt-4">
                Includes unlimited users, priority support, and custom integrations
              </p>
            </div>
          </div>
        </div>
        
        <div className="mt-20 text-center">
          <h3 className="text-2xl font-bold mb-4">Trusted by Schools Nationwide</h3>
          <div className="flex flex-wrap justify-center gap-8 mt-8">
            <div className="flex items-center justify-center bg-card p-4 rounded-lg border w-40 h-20">
              <span className="font-medium">Lincoln Elementary</span>
            </div>
            <div className="flex items-center justify-center bg-card p-4 rounded-lg border w-40 h-20">
              <span className="font-medium">Washington High</span>
            </div>
            <div className="flex items-center justify-center bg-card p-4 rounded-lg border w-40 h-20">
              <span className="font-medium">Jefferson Academy</span>
            </div>
            <div className="flex items-center justify-center bg-card p-4 rounded-lg border w-40 h-20">
              <span className="font-medium">Roosevelt School</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
