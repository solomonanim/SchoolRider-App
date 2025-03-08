import React, { useState } from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";
import { 
  Car, 
  Clock, 
  QrCode, 
  Users, 
  User, 
  Bell, 
  Search,
  CheckCircle,
  AlertTriangle,
  Calendar,
  BarChart,
  LogOut
} from "lucide-react";

interface SchoolDashboardProps {
  onLogout: () => void;
}

export const SchoolDashboard: React.FC<SchoolDashboardProps> = ({ onLogout }) => {
  const [qrScanMode, setQrScanMode] = useState(false);
  
  const recentPickups = [
    { id: 1, name: "Alex Johnson", grade: "5th Grade", status: "Picked up", time: "3:15 PM", rider: "Jane Smith (Mother)" },
    { id: 2, name: "Emma Wilson", grade: "3rd Grade", status: "Pending", time: "3:20 PM", rider: "Tom Wilson (Father)" },
    { id: 3, name: "Noah Brown", grade: "4th Grade", status: "Picked up", time: "3:10 PM", rider: "Sarah Brown (Mother)" },
  ];

  const upcomingPickups = [
    { id: 1, name: "Sophia Davis", grade: "2nd Grade", time: "3:25 PM", status: "On time" },
    { id: 2, name: "Liam Miller", grade: "1st Grade", time: "3:25 PM", status: "On time" },
    { id: 3, name: "Olivia Garcia", grade: "Kindergarten", time: "3:30 PM", status: "Delayed" },
  ];

  return (
    <div className="container py-6 space-y-6">
      <div className="flex flex-col md:flex-row gap-4 md:items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold">School Admin Dashboard</h1>
          <p className="text-muted-foreground">Manage student dismissal and pickups</p>
        </div>
        <div className="flex flex-wrap gap-2">
          <Button 
            variant={qrScanMode ? "default" : "outline"}
            className="gap-2"
            onClick={() => setQrScanMode(!qrScanMode)}
          >
            <QrCode className="h-4 w-4" />
            {qrScanMode ? "Scanning Mode Active" : "Start QR Scanning"}
          </Button>
          <Button variant="outline" className="gap-2">
            <Bell className="h-4 w-4" />
            Announcements
          </Button>
          <Button variant="ghost" size="icon" onClick={onLogout}>
            <LogOut className="h-4 w-4" />
          </Button>
        </div>
      </div>

      {qrScanMode ? (
        <Card className="border-2 border-primary">
          <CardHeader className="pb-2">
            <CardTitle>QR Code Scanner</CardTitle>
            <CardDescription>Scan student or rider QR codes to verify pickup</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="aspect-video bg-muted rounded-md flex items-center justify-center">
              <div className="text-center">
                <QrCode className="h-16 w-16 mx-auto mb-4 text-primary animate-pulse" />
                <p className="text-lg font-medium">Point camera at QR code</p>
                <p className="text-sm text-muted-foreground">Camera access required for scanning</p>
              </div>
            </div>
            <div className="flex justify-center">
              <Button 
                variant="outline" 
                className="gap-2" 
                onClick={() => setQrScanMode(false)}
              >
                Cancel Scanning
              </Button>
            </div>
          </CardContent>
        </Card>
      ) : (
        <Tabs defaultValue="current" className="space-y-4">
          <TabsList className="grid grid-cols-4 w-full max-w-2xl">
            <TabsTrigger value="current" className="flex items-center gap-2">
              <Clock className="h-4 w-4" />
              <span className="hidden sm:inline">Current</span>
            </TabsTrigger>
            <TabsTrigger value="students" className="flex items-center gap-2">
              <Users className="h-4 w-4" />
              <span className="hidden sm:inline">Students</span>
            </TabsTrigger>
            <TabsTrigger value="schedule" className="flex items-center gap-2">
              <Calendar className="h-4 w-4" />
              <span className="hidden sm:inline">Schedule</span>
            </TabsTrigger>
            <TabsTrigger value="reports" className="flex items-center gap-2">
              <BarChart className="h-4 w-4" />
              <span className="hidden sm:inline">Reports</span>
            </TabsTrigger>
          </TabsList>
          
          <TabsContent value="current">
            <div className="grid gap-6 md:grid-cols-2">
              <Card>
                <CardHeader className="pb-2">
                  <div className="flex justify-between items-center">
                    <CardTitle>Recent Activity</CardTitle>
                    <Badge className="bg-primary">3:15 - 3:30 PM</Badge>
                  </div>
                  <CardDescription>Today's pickup status</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {recentPickups.map((pickup) => (
                      <div key={pickup.id} className="flex items-center justify-between p-3 border rounded-md">
                        <div>
                          <p className="font-medium">{pickup.name}</p>
                          <div className="flex items-center gap-1 text-sm text-muted-foreground">
                            <span>{pickup.grade}</span>
                            <span>•</span>
                            <Clock className="h-3 w-3" />
                            <span>{pickup.time}</span>
                          </div>
                          <p className="text-xs">{pickup.rider}</p>
                        </div>
                        <Badge variant={pickup.status === "Picked up" ? "outline" : "secondary"} className="flex items-center gap-1">
                          {pickup.status === "Picked up" ? (
                            <CheckCircle className="h-3 w-3 text-green-500" />
                          ) : (
                            <Clock className="h-3 w-3" />
                          )}
                          {pickup.status}
                        </Badge>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
              
              <Card>
                <CardHeader className="pb-2">
                  <CardTitle>Upcoming Pickups</CardTitle>
                  <CardDescription>Students waiting for pickup</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {upcomingPickups.map((pickup) => (
                      <div key={pickup.id} className="flex items-center justify-between p-3 border rounded-md">
                        <div>
                          <p className="font-medium">{pickup.name}</p>
                          <div className="flex items-center gap-1 text-sm text-muted-foreground">
                            <span>{pickup.grade}</span>
                            <span>•</span>
                            <Clock className="h-3 w-3" />
                            <span>{pickup.time}</span>
                          </div>
                        </div>
                        <Badge 
                          variant={pickup.status === "Delayed" ? "secondary" : "outline"} 
                          className={`flex items-center gap-1 ${pickup.status === "Delayed" ? "text-amber-500" : ""}`}
                        >
                          {pickup.status === "Delayed" ? (
                            <AlertTriangle className="h-3 w-3" />
                          ) : (
                            <Car className="h-3 w-3" />
                          )}
                          {pickup.status}
                        </Badge>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>
          
          <TabsContent value="students">
            <Card>
              <CardHeader>
                <div className="flex justify-between items-center">
                  <CardTitle>Student Database</CardTitle>
                  <Button size="sm" className="gap-2">
                    <User className="h-4 w-4" />
                    Add Student
                  </Button>
                </div>
                <CardDescription>Manage student profiles and authorized riders</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="relative mb-6">
                  <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                  <Input className="pl-9" placeholder="Search students by name, grade, or ID..." />
                </div>
                
                <div className="space-y-4">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <div key={i} className="flex items-center justify-between p-3 border rounded-md">
                      <div className="flex items-center gap-4">
                        <div className="w-10 h-10 bg-muted rounded-full flex items-center justify-center">
                          <User className="h-5 w-5 text-muted-foreground" />
                        </div>
                        <div>
                          <p className="font-medium">{["Sophia Davis", "Liam Miller", "Jackson Thomas", "Emma Wilson", "Noah Brown"][i]}</p>
                          <p className="text-sm text-muted-foreground">{["2nd Grade", "1st Grade", "5th Grade", "3rd Grade", "4th Grade"][i]} • ID: {1000 + i}</p>
                        </div>
                      </div>
                      <div className="flex gap-2">
                        <Button variant="outline" size="sm">Riders</Button>
                        <Button variant="outline" size="sm">Edit</Button>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>
          
          <TabsContent value="schedule">
            <Card>
              <CardHeader>
                <CardTitle>Dismissal Schedule</CardTitle>
                <CardDescription>Manage regular and special dismissal times</CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div>
                  <h3 className="font-medium mb-3">Regular Schedule</h3>
                  <div className="grid grid-cols-5 gap-3">
                    {["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"].map((day) => (
                      <div key={day} className="border rounded-md p-3 bg-card">
                        <p className="font-medium">{day}</p>
                        <div className="flex justify-between items-center mt-2">
                          <p className="text-sm">3:15 PM</p>
                          <Button variant="ghost" size="sm" className="h-6 w-6 p-0">
                            <Clock className="h-3 w-3" />
                          </Button>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
                
                <div>
                  <div className="flex justify-between items-center mb-3">
                    <h3 className="font-medium">Special Dismissals</h3>
                    <Button variant="outline" size="sm" className="gap-2">
                      <Calendar className="h-4 w-4" />
                      Add Special Day
                    </Button>
                  </div>
                  
                  <div className="space-y-3">
                    <div className="border rounded-md p-3">
                      <div className="flex justify-between items-center">
                        <div className="flex items-center gap-2">
                          <Calendar className="h-4 w-4 text-primary" />
                          <p className="font-medium">Nov 22, 2023</p>
                        </div>
                        <Badge>Early Dismissal</Badge>
                      </div>
                      <p className="text-sm text-muted-foreground mt-1">1:00 PM - Thanksgiving Break</p>
                    </div>
                    
                    <div className="border rounded-md p-3">
                      <div className="flex justify-between items-center">
                        <div className="flex items-center gap-2">
                          <Calendar className="h-4 w-4 text-primary" />
                          <p className="font-medium">Dec 20, 2023</p>
                        </div>
                        <Badge>Early Dismissal</Badge>
                      </div>
                      <p className="text-sm text-muted-foreground mt-1">12:30 PM - Winter Break</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
          
          <TabsContent value="reports">
            <Card>
              <CardHeader>
                <CardTitle>Dismissal Analytics</CardTitle>
                <CardDescription>Insights and statistics on the dismissal process</CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  {[
                    { title: "Average Pickup Time", value: "3:22 PM", icon: <Clock className="h-5 w-5 text-primary" /> },
                    { title: "On-Time Rate", value: "94%", icon: <CheckCircle className="h-5 w-5 text-green-500" /> },
                    { title: "Daily Dismissals", value: "478", icon: <Users className="h-5 w-5 text-primary" /> }
                  ].map((stat, i) => (
                    <Card key={i}>
                      <CardContent className="pt-6">
                        <div className="flex items-center justify-between">
                          <div>
                            <p className="text-sm text-muted-foreground">{stat.title}</p>
                            <p className="text-2xl font-bold">{stat.value}</p>
                          </div>
                          {stat.icon}
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
                
                <div className="bg-muted aspect-video rounded-md flex items-center justify-center">
                  <div className="text-center">
                    <BarChart className="h-12 w-12 mx-auto mb-2 text-primary" />
                    <p>Interactive charts and reports will appear here</p>
                    <p className="text-sm text-muted-foreground">Showing dismissal trends, peak times, and efficiency metrics</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      )}
    </div>
  );
};
