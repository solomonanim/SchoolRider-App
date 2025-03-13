
import React from "react";
import { Car, School, User, Clock, Shield } from "lucide-react";

export const SchoolRiderInfo = () => {
  const benefits = [
    {
      icon: <Shield className="h-6 w-6" />,
      title: "Enhanced Safety",
      description: "QR verification ensures only authorized individuals can pick up students"
    },
    {
      icon: <Clock className="h-6 w-6" />,
      title: "Time Saving",
      description: "Reduce wait times by up to 50% with organized dismissal process"
    },
    {
      icon: <Car className="h-6 w-6" />,
      title: "Traffic Management",
      description: "Streamline vehicle flow and reduce congestion around your school"
    },
    {
      icon: <User className="h-6 w-6" />,
      title: "Parent Peace of Mind",
      description: "Real-time updates and tracking for complete transparency"
    }
  ];

  return (
    <section className="py-16 bg-background">
      <div className="container px-4 sm:px-6">
        <div className="text-center mb-10">
          <h2 className="text-3xl font-bold mb-4">The School Dismissal Solution</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            SchoolRider is a complete WordPress theme and plugin package designed specifically for educational institutions looking to modernize their dismissal process.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mt-12">
          {benefits.map((benefit, index) => (
            <div 
              key={index} 
              className="p-6 bg-card border rounded-xl hover:shadow-md transition-all"
            >
              <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4 text-primary">
                {benefit.icon}
              </div>
              <h3 className="text-xl font-semibold mb-2">{benefit.title}</h3>
              <p className="text-muted-foreground">{benefit.description}</p>
            </div>
          ))}
        </div>
        
        <div className="mt-16 p-6 bg-primary/5 rounded-xl border">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div className="mb-6 md:mb-0 text-center md:text-left">
              <h3 className="text-2xl font-bold mb-2 flex flex-col md:flex-row items-center justify-center md:justify-start">
                <School className="mr-0 md:mr-2 mb-2 md:mb-0 h-6 w-6" />
                <span>Perfect for All School Types</span>
              </h3>
              <p className="text-muted-foreground">
                Elementary, middle, high schools, and private academies across the country trust SchoolRider.
              </p>
            </div>
            <div className="flex flex-wrap gap-4 justify-center">
              <div className="text-center px-4">
                <div className="text-3xl font-bold">500+</div>
                <div className="text-sm text-muted-foreground">Schools</div>
              </div>
              <div className="text-center px-4">
                <div className="text-3xl font-bold">250,000+</div>
                <div className="text-sm text-muted-foreground">Students</div>
              </div>
              <div className="text-center px-4">
                <div className="text-3xl font-bold">98%</div>
                <div className="text-sm text-muted-foreground">Satisfaction</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
