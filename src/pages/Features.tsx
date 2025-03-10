
import React from "react";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { 
  ShieldCheck, 
  Users, 
  Clock, 
  BellRing, 
  Map, 
  QrCode, 
  Car, 
  FileText, 
  BarChart4, 
  UserCheck,
  Zap,
  Bell
} from "lucide-react";

const Features = () => {
  const featureCategories = [
    {
      title: "Core Features",
      description: "Essential tools that power our school dismissal system",
      features: [
        {
          icon: <ShieldCheck className="h-10 w-10 text-primary" />,
          title: "Advanced Security",
          description: "Multi-layered security protocols ensure only authorized individuals can pick up students"
        },
        {
          icon: <Map className="h-10 w-10 text-primary" />,
          title: "Real-time GPS Tracking",
          description: "Track your child's journey from school to home with precise GPS location updates"
        },
        {
          icon: <QrCode className="h-10 w-10 text-primary" />,
          title: "QR Verification System",
          description: "Unique QR codes for each student provide quick and secure identity verification"
        },
        {
          icon: <Clock className="h-10 w-10 text-primary" />,
          title: "Time-saving Automation",
          description: "Automated processes reduce pickup times by up to 50%, eliminating long wait lines"
        }
      ]
    },
    {
      title: "For Parents",
      description: "Features designed to give parents peace of mind",
      features: [
        {
          icon: <Bell className="h-10 w-10 text-primary" />,
          title: "Real-time Notifications",
          description: "Instant alerts when your child is picked up, en route, or has arrived safely at home"
        },
        {
          icon: <UserCheck className="h-10 w-10 text-primary" />,
          title: "Authorized Pickup Management",
          description: "Easily manage and update the list of individuals authorized to pick up your children"
        },
        {
          icon: <Car className="h-10 w-10 text-primary" />,
          title: "Car Pool Coordination",
          description: "Seamlessly coordinate carpooling with other trusted parents in your community"
        },
        {
          icon: <FileText className="h-10 w-10 text-primary" />,
          title: "Attendance History",
          description: "Access detailed records of pickup and drop-off times for your peace of mind"
        }
      ]
    },
    {
      title: "For Schools",
      description: "Tools that help schools optimize dismissal processes",
      features: [
        {
          icon: <BarChart4 className="h-10 w-10 text-primary" />,
          title: "Analytics Dashboard",
          description: "Comprehensive analytics to monitor and improve your school's dismissal efficiency"
        },
        {
          icon: <Users className="h-10 w-10 text-primary" />,
          title: "Staff Coordination",
          description: "Streamline communication between teachers, administrators, and dismissal staff"
        },
        {
          icon: <Zap className="h-10 w-10 text-primary" />,
          title: "Emergency Protocols",
          description: "Built-in emergency procedures ensure student safety in unexpected situations"
        },
        {
          icon: <BellRing className="h-10 w-10 text-primary" />,
          title: "Custom Announcements",
          description: "Broadcast important updates and announcements to parents and staff"
        }
      ]
    }
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow pt-32 pb-20">
        {/* Hero Section */}
        <section className="bg-secondary/30 py-16 md:py-24">
          <div className="container px-4 sm:px-6">
            <div className="max-w-4xl mx-auto text-center">
              <Badge variant="outline" className="mb-4">Feature-Rich Platform</Badge>
              <h1 className="text-4xl md:text-5xl font-bold mb-6">Everything You Need for Efficient School Dismissal</h1>
              <p className="text-xl text-muted-foreground mb-8">
                SchoolRider combines powerful tools with an intuitive interface to create the most comprehensive school dismissal solution available.
              </p>
              <div className="flex justify-center gap-4 flex-wrap">
                <Button size="lg">Get Started</Button>
                <Button size="lg" variant="outline">Schedule Demo</Button>
              </div>
            </div>
          </div>
        </section>

        {/* Feature Categories */}
        {featureCategories.map((category, index) => (
          <section key={index} className={`py-20 ${index % 2 === 1 ? 'bg-secondary/20' : 'bg-background'}`}>
            <div className="container px-4 sm:px-6">
              <div className="text-center mb-16">
                <h2 className="text-3xl font-bold mb-4">{category.title}</h2>
                <p className="text-lg text-muted-foreground max-w-2xl mx-auto">{category.description}</p>
              </div>
              
              <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
                {category.features.map((feature, featureIndex) => (
                  <div 
                    key={featureIndex}
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
        ))}

        {/* Comparison Section */}
        <section className="py-20 bg-card">
          <div className="container px-4 sm:px-6">
            <div className="text-center mb-16">
              <Badge variant="outline" className="mb-4">Why Choose SchoolRider</Badge>
              <h2 className="text-3xl font-bold mb-4">SchoolRider vs. Traditional Dismissal</h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                See how our modern approach compares to traditional school dismissal methods.
              </p>
            </div>
            
            <div className="max-w-4xl mx-auto rounded-xl overflow-hidden border">
              <div className="grid grid-cols-3 border-b">
                <div className="p-4 font-medium">Feature</div>
                <div className="p-4 font-medium text-center bg-primary/10">SchoolRider</div>
                <div className="p-4 font-medium text-center">Traditional Method</div>
              </div>
              
              {[
                { feature: "Average Pickup Time", schoolRider: "Under 5 minutes", traditional: "15-30 minutes" },
                { feature: "Security Verification", schoolRider: "Digital QR verification", traditional: "Paper-based or visual ID check" },
                { feature: "Parent Notifications", schoolRider: "Real-time mobile alerts", traditional: "None or limited" },
                { feature: "Traffic Management", schoolRider: "Optimized flow algorithms", traditional: "Manual direction" },
                { feature: "Data & Analytics", schoolRider: "Comprehensive reporting", traditional: "Limited or none" },
                { feature: "Emergency Protocols", schoolRider: "Instant alerts & procedures", traditional: "Manual protocols" }
              ].map((row, index) => (
                <div key={index} className={`grid grid-cols-3 ${index % 2 === 1 ? 'bg-muted/30' : ''}`}>
                  <div className="p-4 border-t">{row.feature}</div>
                  <div className="p-4 text-center border-t bg-primary/10">{row.schoolRider}</div>
                  <div className="p-4 text-center border-t">{row.traditional}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Call to Action */}
        <section className="bg-gradient-to-r from-primary/20 to-secondary/20 py-20">
          <div className="container px-4 sm:px-6 text-center">
            <h2 className="text-3xl font-bold mb-4">Ready to transform your school dismissal process?</h2>
            <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
              Join hundreds of schools that have already improved safety and efficiency with SchoolRider.
            </p>
            <div className="flex justify-center gap-4 flex-wrap">
              <Button size="lg">Request a Demo</Button>
              <Button size="lg" variant="outline">Contact Sales</Button>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Features;
