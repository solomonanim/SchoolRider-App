
import React from "react";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Clock, Filter, Search, BookOpen, ChevronRight, LucideIcon, CheckCircle2, School, UserCircle, Car } from "lucide-react";

const Tutorials = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow pt-28">
        <section className="container px-4 py-12">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">SchoolRider Tutorials</h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Step-by-step guides to help you get the most out of SchoolRider
            </p>
          </div>
          
          <div className="mb-10">
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-4 mb-6">
              <div className="relative flex-1 max-w-md">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                <input 
                  type="text" 
                  placeholder="Search tutorials..." 
                  className="w-full pl-9 h-10 rounded-md border border-input bg-background px-3 py-2 text-sm"
                />
              </div>
              <div className="flex items-center gap-2">
                <Button variant="outline" size="sm" className="gap-2">
                  <Filter className="h-4 w-4" /> Filter
                </Button>
                <Button variant="outline" size="sm">Newest</Button>
                <Button variant="outline" size="sm">Most Popular</Button>
              </div>
            </div>
            
            <div className="flex overflow-x-auto gap-2 pb-4 no-scrollbar">
              <Button variant="secondary" size="sm">All Tutorials</Button>
              <Button variant="outline" size="sm">Getting Started</Button>
              <Button variant="outline" size="sm">Admin Guides</Button>
              <Button variant="outline" size="sm">Teacher Guides</Button>
              <Button variant="outline" size="sm">Parent Guides</Button>
              <Button variant="outline" size="sm">Driver Guides</Button>
              <Button variant="outline" size="sm">Advanced</Button>
            </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
            {tutorialCards.map((card, index) => (
              <Card key={index} className="h-full flex flex-col">
                <CardHeader className="pb-3">
                  <div className="flex justify-between items-start">
                    <div className="h-10 w-10 rounded-full bg-primary/10 flex items-center justify-center">
                      {card.icon}
                    </div>
                    <Badge variant={card.badgeVariant}>{card.badge}</Badge>
                  </div>
                  <CardTitle className="mt-4">{card.title}</CardTitle>
                  <CardDescription>{card.description}</CardDescription>
                </CardHeader>
                <CardContent className="flex-grow">
                  <ul className="space-y-3">
                    {card.topics.map((topic, i) => (
                      <li key={i} className="flex items-start gap-2 text-sm">
                        <CheckCircle2 className="h-4 w-4 text-primary mt-0.5" />
                        <span>{topic}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
                <CardFooter className="flex justify-between items-center pt-4 border-t">
                  <div className="flex items-center text-muted-foreground text-sm">
                    <Clock className="mr-1 h-4 w-4" />
                    {card.readTime}
                  </div>
                  <Button variant="link" className="p-0 h-auto" asChild>
                    <a href="#" className="flex items-center text-primary">
                      Start <ChevronRight className="ml-1 h-4 w-4" />
                    </a>
                  </Button>
                </CardFooter>
              </Card>
            ))}
          </div>
          
          <div className="py-10 border-t">
            <h2 className="text-2xl font-bold mb-10 text-center">Video Tutorials</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {videoTutorials.map((video, index) => (
                <div key={index} className="border rounded-lg overflow-hidden group">
                  <div className="aspect-video bg-muted relative">
                    <img 
                      src={video.thumbnail} 
                      alt={video.title} 
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="h-14 w-14 rounded-full bg-primary/90 flex items-center justify-center shadow-lg cursor-pointer group-hover:bg-primary transition-colors">
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path d="M8 5V19L19 12L8 5Z" fill="white" />
                        </svg>
                      </div>
                    </div>
                  </div>
                  <div className="p-4">
                    <div className="flex justify-between items-start mb-2">
                      <h3 className="font-medium">{video.title}</h3>
                      <Badge variant="outline">{video.level}</Badge>
                    </div>
                    <div className="flex items-center justify-between">
                      <p className="text-sm text-muted-foreground">{video.duration}</p>
                      <Button variant="link" className="p-0 h-auto text-sm" asChild>
                        <a href="#" className="flex items-center text-primary">
                          Watch <ChevronRight className="ml-1 h-4 w-4" />
                        </a>
                      </Button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          <div className="bg-accent rounded-xl p-8 text-center mt-16">
            <div className="max-w-2xl mx-auto">
              <h2 className="text-2xl font-bold mb-4">Need personalized training?</h2>
              <p className="text-muted-foreground mb-6">
                Our team offers customized training sessions for schools and districts implementing SchoolRider at scale.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" className="gap-2">
                  <BookOpen className="h-5 w-5" />
                  Schedule Training
                </Button>
                <Button variant="outline" size="lg">
                  Contact Support
                </Button>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

const tutorialCards = [
  {
    icon: <School className="h-5 w-5 text-primary" />,
    badge: "Admin",
    badgeVariant: "secondary" as const,
    title: "School Setup Guide",
    description: "Complete walkthrough for setting up your school on SchoolRider",
    topics: [
      "Initial account configuration",
      "Importing student data",
      "Setting up dismissal processes",
      "User management",
      "Customizing school settings"
    ],
    readTime: "15 min read"
  },
  {
    icon: <UserCircle className="h-5 w-5 text-primary" />,
    badge: "Teacher",
    badgeVariant: "outline" as const,
    title: "Teacher Dashboard Guide",
    description: "Learn to use the teacher dashboard effectively",
    topics: [
      "Dashboard overview",
      "Managing your classroom dismissal",
      "Tracking student status",
      "Communicating with parents",
      "Handling special dismissal situations"
    ],
    readTime: "10 min read"
  },
  {
    icon: <UserCircle className="h-5 w-5 text-primary" />,
    badge: "Parent",
    badgeVariant: "outline" as const,
    title: "Parent Quick Start",
    description: "Get started with SchoolRider as a parent",
    topics: [
      "Setting up your parent account",
      "Adding your children",
      "Managing pickup preferences",
      "Using the mobile app",
      "Setting up notifications"
    ],
    readTime: "8 min read"
  },
  {
    icon: <Car className="h-5 w-5 text-primary" />,
    badge: "Driver",
    badgeVariant: "outline" as const,
    title: "Driver's Guide",
    description: "Essential information for transportation providers",
    topics: [
      "Driver dashboard overview",
      "Managing your route",
      "Student pickup and check-in",
      "Communication tools",
      "Emergency procedures"
    ],
    readTime: "12 min read"
  },
  {
    icon: <School className="h-5 w-5 text-primary" />,
    badge: "Advanced",
    badgeVariant: "secondary" as const,
    title: "Advanced Admin Features",
    description: "Maximize your school's use of SchoolRider",
    topics: [
      "Custom dismissal workflows",
      "Integration with SIS",
      "Data analytics and reporting",
      "Multi-campus management",
      "Security best practices"
    ],
    readTime: "20 min read"
  },
  {
    icon: <UserCircle className="h-5 w-5 text-primary" />,
    badge: "Essential",
    badgeVariant: "secondary" as const,
    title: "Dismissal Day Procedures",
    description: "Step-by-step guide for daily dismissal operations",
    topics: [
      "Morning preparation",
      "During-day changes",
      "Dismissal execution",
      "Managing exceptions",
      "Post-dismissal review"
    ],
    readTime: "15 min read"
  }
];

const videoTutorials = [
  {
    title: "SchoolRider Mobile App Tour",
    thumbnail: "https://images.unsplash.com/photo-1590859808308-3d2d9c515b1a?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    duration: "4:32",
    level: "Beginner"
  },
  {
    title: "Setting Up Dismissal Zones",
    thumbnail: "https://images.unsplash.com/photo-1581078427030-5a269b4688e8?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    duration: "6:15",
    level: "Admin"
  },
  {
    title: "Managing Special Dismissals",
    thumbnail: "https://images.unsplash.com/photo-1573164574001-518958d9baa2?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    duration: "5:45",
    level: "Intermediate"
  }
];

export default Tutorials;
