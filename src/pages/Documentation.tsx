
import React from "react";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Button } from "@/components/ui/button";
import { 
  Download, 
  Book, 
  Code, 
  Video, 
  FileText, 
  LayoutDashboard,
  Users,
  Car,
  School,
  UserCircle,
  Workflow,
  ChevronRight
} from "lucide-react";

const Documentation = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow pt-28">
        <section className="container px-4 py-12">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">SchoolRider Documentation</h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Comprehensive guides and resources to help you get the most out of SchoolRider
            </p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
            <div className="lg:col-span-1">
              <div className="sticky top-24 space-y-8">
                <div className="bg-card rounded-lg border p-4">
                  <h3 className="font-semibold mb-4">Documentation</h3>
                  <ul className="space-y-2">
                    <li>
                      <a href="#getting-started" className="text-sm flex items-center text-muted-foreground hover:text-foreground">
                        <Book className="mr-2 h-4 w-4" />
                        Getting Started
                      </a>
                    </li>
                    <li>
                      <a href="#user-guides" className="text-sm flex items-center text-muted-foreground hover:text-foreground">
                        <Users className="mr-2 h-4 w-4" />
                        User Guides
                      </a>
                    </li>
                    <li>
                      <a href="#api" className="text-sm flex items-center text-muted-foreground hover:text-foreground">
                        <Code className="mr-2 h-4 w-4" />
                        API Reference
                      </a>
                    </li>
                    <li>
                      <a href="#videos" className="text-sm flex items-center text-muted-foreground hover:text-foreground">
                        <Video className="mr-2 h-4 w-4" />
                        Tutorial Videos
                      </a>
                    </li>
                  </ul>
                </div>
                
                <div className="bg-accent rounded-lg p-6">
                  <h3 className="font-semibold mb-3">Need help?</h3>
                  <p className="text-sm text-muted-foreground mb-4">
                    Can't find what you're looking for? Our support team is here to help.
                  </p>
                  <Button variant="default" size="sm" className="w-full">Contact Support</Button>
                </div>
                
                <div className="border rounded-lg p-6">
                  <h3 className="font-semibold mb-3">Documentation Downloads</h3>
                  <ul className="space-y-3">
                    <li>
                      <a href="#" className="text-sm flex items-center text-primary hover:underline">
                        <Download className="mr-2 h-4 w-4" />
                        Complete User Guide (PDF)
                      </a>
                    </li>
                    <li>
                      <a href="#" className="text-sm flex items-center text-primary hover:underline">
                        <Download className="mr-2 h-4 w-4" />
                        Admin Quick Start Guide (PDF)
                      </a>
                    </li>
                    <li>
                      <a href="#" className="text-sm flex items-center text-primary hover:underline">
                        <Download className="mr-2 h-4 w-4" />
                        Parent Quick Start Guide (PDF)
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            
            <div className="lg:col-span-3">
              <div id="getting-started" className="mb-16">
                <div className="flex items-center gap-3 mb-6">
                  <div className="h-10 w-10 rounded-full bg-primary/10 flex items-center justify-center">
                    <Book className="h-5 w-5 text-primary" />
                  </div>
                  <h2 className="text-3xl font-bold">Getting Started</h2>
                </div>
                
                <div className="grid md:grid-cols-2 gap-6 mb-8">
                  <div className="border rounded-lg p-6 hover:shadow-md transition-shadow">
                    <div className="flex items-center gap-3 mb-4">
                      <div className="h-8 w-8 rounded-full bg-primary/10 flex items-center justify-center">
                        <School className="h-4 w-4 text-primary" />
                      </div>
                      <h3 className="font-semibold">For Schools</h3>
                    </div>
                    <p className="text-muted-foreground text-sm mb-4">
                      Learn how to set up SchoolRider for your school, import student data, and configure dismissal procedures.
                    </p>
                    <Button variant="link" className="p-0 h-auto" asChild>
                      <a href="#" className="flex items-center text-primary">
                        Read Guide <ChevronRight className="ml-1 h-4 w-4" />
                      </a>
                    </Button>
                  </div>
                  
                  <div className="border rounded-lg p-6 hover:shadow-md transition-shadow">
                    <div className="flex items-center gap-3 mb-4">
                      <div className="h-8 w-8 rounded-full bg-primary/10 flex items-center justify-center">
                        <UserCircle className="h-4 w-4 text-primary" />
                      </div>
                      <h3 className="font-semibold">For Parents</h3>
                    </div>
                    <p className="text-muted-foreground text-sm mb-4">
                      Set up your parent account, add your children, and learn how to use SchoolRider for daily pickup.
                    </p>
                    <Button variant="link" className="p-0 h-auto" asChild>
                      <a href="#" className="flex items-center text-primary">
                        Read Guide <ChevronRight className="ml-1 h-4 w-4" />
                      </a>
                    </Button>
                  </div>
                </div>
                
                <div className="bg-accent rounded-lg p-8">
                  <h3 className="text-xl font-semibold mb-4">Quick Start Guide</h3>
                  <ol className="space-y-4 ml-5 list-decimal">
                    <li className="pl-2">
                      <p className="font-medium">Create your account</p>
                      <p className="text-sm text-muted-foreground">
                        Sign up for SchoolRider as a school administrator, teacher, or parent.
                      </p>
                    </li>
                    <li className="pl-2">
                      <p className="font-medium">Set up your profile</p>
                      <p className="text-sm text-muted-foreground">
                        Complete your profile information and preferences.
                      </p>
                    </li>
                    <li className="pl-2">
                      <p className="font-medium">Connect with your school</p>
                      <p className="text-sm text-muted-foreground">
                        Link your account to your school or add your children to your parent account.
                      </p>
                    </li>
                    <li className="pl-2">
                      <p className="font-medium">Explore the dashboard</p>
                      <p className="text-sm text-muted-foreground">
                        Familiarize yourself with the features and functions available in your dashboard.
                      </p>
                    </li>
                    <li className="pl-2">
                      <p className="font-medium">Start using SchoolRider</p>
                      <p className="text-sm text-muted-foreground">
                        Begin using SchoolRider for your daily dismissal process.
                      </p>
                    </li>
                  </ol>
                </div>
              </div>
              
              <div id="user-guides" className="mb-16">
                <div className="flex items-center gap-3 mb-6">
                  <div className="h-10 w-10 rounded-full bg-primary/10 flex items-center justify-center">
                    <Users className="h-5 w-5 text-primary" />
                  </div>
                  <h2 className="text-3xl font-bold">User Guides</h2>
                </div>
                
                <Tabs defaultValue="school" className="mb-8">
                  <TabsList className="grid grid-cols-4 mb-8">
                    <TabsTrigger value="school">School Admin</TabsTrigger>
                    <TabsTrigger value="teacher">Teacher</TabsTrigger>
                    <TabsTrigger value="parent">Parent</TabsTrigger>
                    <TabsTrigger value="driver">Driver</TabsTrigger>
                  </TabsList>
                  
                  <TabsContent value="school">
                    <div className="grid gap-6">
                      <div className="border rounded-lg p-6">
                        <div className="flex items-start gap-4">
                          <div className="h-8 w-8 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                            <LayoutDashboard className="h-4 w-4 text-primary" />
                          </div>
                          <div>
                            <h3 className="font-semibold mb-2">Dashboard Overview</h3>
                            <p className="text-sm text-muted-foreground mb-3">
                              Learn about the administrative dashboard and how to navigate the various features.
                            </p>
                            <Button variant="link" className="p-0 h-auto" asChild>
                              <a href="#" className="flex items-center text-primary text-sm">
                                Read More <ChevronRight className="ml-1 h-4 w-4" />
                              </a>
                            </Button>
                          </div>
                        </div>
                      </div>
                      
                      <div className="border rounded-lg p-6">
                        <div className="flex items-start gap-4">
                          <div className="h-8 w-8 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                            <Users className="h-4 w-4 text-primary" />
                          </div>
                          <div>
                            <h3 className="font-semibold mb-2">Managing Staff & Students</h3>
                            <p className="text-sm text-muted-foreground mb-3">
                              Learn how to add, edit, and manage staff and student records in SchoolRider.
                            </p>
                            <Button variant="link" className="p-0 h-auto" asChild>
                              <a href="#" className="flex items-center text-primary text-sm">
                                Read More <ChevronRight className="ml-1 h-4 w-4" />
                              </a>
                            </Button>
                          </div>
                        </div>
                      </div>
                      
                      <div className="border rounded-lg p-6">
                        <div className="flex items-start gap-4">
                          <div className="h-8 w-8 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                            <Workflow className="h-4 w-4 text-primary" />
                          </div>
                          <div>
                            <h3 className="font-semibold mb-2">Configuring Dismissal Process</h3>
                            <p className="text-sm text-muted-foreground mb-3">
                              Set up and customize your school's dismissal process, including pickup zones and procedures.
                            </p>
                            <Button variant="link" className="p-0 h-auto" asChild>
                              <a href="#" className="flex items-center text-primary text-sm">
                                Read More <ChevronRight className="ml-1 h-4 w-4" />
                              </a>
                            </Button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </TabsContent>
                  
                  <TabsContent value="teacher">
                    <div className="grid gap-6">
                      <div className="border rounded-lg p-6">
                        <div className="flex items-start gap-4">
                          <div className="h-8 w-8 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                            <LayoutDashboard className="h-4 w-4 text-primary" />
                          </div>
                          <div>
                            <h3 className="font-semibold mb-2">Teacher Dashboard</h3>
                            <p className="text-sm text-muted-foreground mb-3">
                              Navigate the teacher dashboard and understand the available features for classroom dismissal.
                            </p>
                            <Button variant="link" className="p-0 h-auto" asChild>
                              <a href="#" className="flex items-center text-primary text-sm">
                                Read More <ChevronRight className="ml-1 h-4 w-4" />
                              </a>
                            </Button>
                          </div>
                        </div>
                      </div>
                      
                      <div className="border rounded-lg p-6">
                        <div className="flex items-start gap-4">
                          <div className="h-8 w-8 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                            <Users className="h-4 w-4 text-primary" />
                          </div>
                          <div>
                            <h3 className="font-semibold mb-2">Managing Classroom Dismissal</h3>
                            <p className="text-sm text-muted-foreground mb-3">
                              Learn how to efficiently manage your classroom during dismissal time using SchoolRider.
                            </p>
                            <Button variant="link" className="p-0 h-auto" asChild>
                              <a href="#" className="flex items-center text-primary text-sm">
                                Read More <ChevronRight className="ml-1 h-4 w-4" />
                              </a>
                            </Button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </TabsContent>
                  
                  <TabsContent value="parent">
                    <div className="grid gap-6">
                      <div className="border rounded-lg p-6">
                        <div className="flex items-start gap-4">
                          <div className="h-8 w-8 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                            <UserCircle className="h-4 w-4 text-primary" />
                          </div>
                          <div>
                            <h3 className="font-semibold mb-2">Setting Up Your Parent Account</h3>
                            <p className="text-sm text-muted-foreground mb-3">
                              Complete guide to setting up your parent profile, adding children, and managing pickup settings.
                            </p>
                            <Button variant="link" className="p-0 h-auto" asChild>
                              <a href="#" className="flex items-center text-primary text-sm">
                                Read More <ChevronRight className="ml-1 h-4 w-4" />
                              </a>
                            </Button>
                          </div>
                        </div>
                      </div>
                      
                      <div className="border rounded-lg p-6">
                        <div className="flex items-start gap-4">
                          <div className="h-8 w-8 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                            <Car className="h-4 w-4 text-primary" />
                          </div>
                          <div>
                            <h3 className="font-semibold mb-2">Using the Mobile App for Pickup</h3>
                            <p className="text-sm text-muted-foreground mb-3">
                              Learn how to use the SchoolRider mobile app for efficient school pickup.
                            </p>
                            <Button variant="link" className="p-0 h-auto" asChild>
                              <a href="#" className="flex items-center text-primary text-sm">
                                Read More <ChevronRight className="ml-1 h-4 w-4" />
                              </a>
                            </Button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </TabsContent>
                  
                  <TabsContent value="driver">
                    <div className="grid gap-6">
                      <div className="border rounded-lg p-6">
                        <div className="flex items-start gap-4">
                          <div className="h-8 w-8 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                            <Car className="h-4 w-4 text-primary" />
                          </div>
                          <div>
                            <h3 className="font-semibold mb-2">Driver Dashboard</h3>
                            <p className="text-sm text-muted-foreground mb-3">
                              Overview of the driver dashboard and features for transportation providers.
                            </p>
                            <Button variant="link" className="p-0 h-auto" asChild>
                              <a href="#" className="flex items-center text-primary text-sm">
                                Read More <ChevronRight className="ml-1 h-4 w-4" />
                              </a>
                            </Button>
                          </div>
                        </div>
                      </div>
                      
                      <div className="border rounded-lg p-6">
                        <div className="flex items-start gap-4">
                          <div className="h-8 w-8 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                            <Workflow className="h-4 w-4 text-primary" />
                          </div>
                          <div>
                            <h3 className="font-semibold mb-2">Managing Routes and Pickup</h3>
                            <p className="text-sm text-muted-foreground mb-3">
                              Learn how to manage routes, pickups, and students using the driver interface.
                            </p>
                            <Button variant="link" className="p-0 h-auto" asChild>
                              <a href="#" className="flex items-center text-primary text-sm">
                                Read More <ChevronRight className="ml-1 h-4 w-4" />
                              </a>
                            </Button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </TabsContent>
                </Tabs>
              </div>
              
              <div id="api" className="mb-16">
                <div className="flex items-center gap-3 mb-6">
                  <div className="h-10 w-10 rounded-full bg-primary/10 flex items-center justify-center">
                    <Code className="h-5 w-5 text-primary" />
                  </div>
                  <h2 className="text-3xl font-bold">API Reference</h2>
                </div>
                
                <div className="border rounded-lg bg-card overflow-hidden mb-8">
                  <div className="p-6">
                    <p className="text-muted-foreground mb-4">
                      SchoolRider offers a comprehensive API for integrating with your existing school management systems.
                    </p>
                    
                    <div className="bg-accent/50 rounded-lg p-4 mb-6">
                      <h4 className="text-sm font-medium mb-2">Base URL</h4>
                      <code className="bg-background text-sm p-2 rounded border block">
                        https://api.schoolrider.com/v1
                      </code>
                    </div>
                    
                    <h4 className="text-sm font-medium mb-2">Authentication</h4>
                    <p className="text-sm text-muted-foreground mb-4">
                      All API requests require authentication using an API key. You can generate an API key in your school administrator dashboard.
                    </p>
                    
                    <div className="border-t pt-4 mt-4">
                      <h4 className="text-sm font-medium mb-2">Available Endpoints</h4>
                      <ul className="space-y-2 text-sm">
                        <li>
                          <a href="#" className="text-primary hover:underline">/students</a> - Manage student records
                        </li>
                        <li>
                          <a href="#" className="text-primary hover:underline">/parents</a> - Manage parent accounts
                        </li>
                        <li>
                          <a href="#" className="text-primary hover:underline">/dismissal</a> - Manage dismissal events
                        </li>
                        <li>
                          <a href="#" className="text-primary hover:underline">/notifications</a> - Send notifications
                        </li>
                      </ul>
                    </div>
                  </div>
                  
                  <div className="border-t p-4 bg-accent/30 flex justify-between items-center">
                    <span className="text-sm text-muted-foreground">
                      For complete API documentation
                    </span>
                    <Button size="sm">View Full Documentation</Button>
                  </div>
                </div>
              </div>
              
              <div id="videos" className="mb-16">
                <div className="flex items-center gap-3 mb-6">
                  <div className="h-10 w-10 rounded-full bg-primary/10 flex items-center justify-center">
                    <Video className="h-5 w-5 text-primary" />
                  </div>
                  <h2 className="text-3xl font-bold">Tutorial Videos</h2>
                </div>
                
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="border rounded-lg overflow-hidden">
                    <div className="aspect-video bg-muted relative">
                      <img 
                        src="https://images.unsplash.com/photo-1616587894289-86480e533129?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
                        alt="Tutorial video thumbnail" 
                        className="w-full h-full object-cover"
                      />
                      <div className="absolute inset-0 flex items-center justify-center">
                        <div className="h-14 w-14 rounded-full bg-primary/90 flex items-center justify-center shadow-lg cursor-pointer hover:bg-primary transition-colors">
                          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M8 5V19L19 12L8 5Z" fill="white" />
                          </svg>
                        </div>
                      </div>
                    </div>
                    <div className="p-4">
                      <h3 className="font-medium mb-1">Getting Started with SchoolRider</h3>
                      <p className="text-sm text-muted-foreground">4:32 • Beginner</p>
                    </div>
                  </div>
                  
                  <div className="border rounded-lg overflow-hidden">
                    <div className="aspect-video bg-muted relative">
                      <img 
                        src="https://images.unsplash.com/photo-1573164574572-cb89e39749b4?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
                        alt="Tutorial video thumbnail" 
                        className="w-full h-full object-cover"
                      />
                      <div className="absolute inset-0 flex items-center justify-center">
                        <div className="h-14 w-14 rounded-full bg-primary/90 flex items-center justify-center shadow-lg cursor-pointer hover:bg-primary transition-colors">
                          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M8 5V19L19 12L8 5Z" fill="white" />
                          </svg>
                        </div>
                      </div>
                    </div>
                    <div className="p-4">
                      <h3 className="font-medium mb-1">Setting Up Your School</h3>
                      <p className="text-sm text-muted-foreground">6:15 • Administrator</p>
                    </div>
                  </div>
                  
                  <div className="border rounded-lg overflow-hidden">
                    <div className="aspect-video bg-muted relative">
                      <img 
                        src="https://images.unsplash.com/photo-1588075592446-265fd1e6e76f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
                        alt="Tutorial video thumbnail" 
                        className="w-full h-full object-cover"
                      />
                      <div className="absolute inset-0 flex items-center justify-center">
                        <div className="h-14 w-14 rounded-full bg-primary/90 flex items-center justify-center shadow-lg cursor-pointer hover:bg-primary transition-colors">
                          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M8 5V19L19 12L8 5Z" fill="white" />
                          </svg>
                        </div>
                      </div>
                    </div>
                    <div className="p-4">
                      <h3 className="font-medium mb-1">Parent App Walkthrough</h3>
                      <p className="text-sm text-muted-foreground">3:45 • Parent</p>
                    </div>
                  </div>
                  
                  <div className="border rounded-lg overflow-hidden">
                    <div className="aspect-video bg-muted relative">
                      <img 
                        src="https://images.unsplash.com/photo-1551966775-a4ddc8df052b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
                        alt="Tutorial video thumbnail" 
                        className="w-full h-full object-cover"
                      />
                      <div className="absolute inset-0 flex items-center justify-center">
                        <div className="h-14 w-14 rounded-full bg-primary/90 flex items-center justify-center shadow-lg cursor-pointer hover:bg-primary transition-colors">
                          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M8 5V19L19 12L8 5Z" fill="white" />
                          </svg>
                        </div>
                      </div>
                    </div>
                    <div className="p-4">
                      <h3 className="font-medium mb-1">Teacher Dashboard Overview</h3>
                      <p className="text-sm text-muted-foreground">5:20 • Teacher</p>
                    </div>
                  </div>
                </div>
                
                <div className="mt-8 text-center">
                  <Button variant="outline" size="lg">View All Videos</Button>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Documentation;
