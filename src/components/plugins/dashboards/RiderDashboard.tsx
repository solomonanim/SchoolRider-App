import React, { useState } from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";
import { 
  Car, 
  Clock, 
  MapPin, 
  QrCode, 
  User, 
  Check, 
  X,
  Navigation,
  Calendar,
  History,
  LogOut
} from "lucide-react";
import { useToast } from "@/hooks/use-toast";

interface RiderDashboardProps {
  onLogout: () => void;
}

export const RiderDashboard: React.FC<RiderDashboardProps> = ({ onLogout }) => {
  const [qrScanMode, setQrScanMode] = useState(false);
  const [activeStatus, setActiveStatus] = useState<"idle" | "en-route" | "arrived" | "completed">("idle");
  const { toast } = useToast();
  
  const upcomingRides = [
    { id: 1, name: "Alex Johnson", school: "Lincoln Elementary", time: "3:15 PM", date: "Today" },
    { id: 2, name: "Emma Wilson", school: "Lincoln Elementary", time: "3:15 PM", date: "Today" },
    { id: 3, name: "Noah Brown", school: "Washington Middle School", time: "4:00 PM", date: "Tomorrow" },
  ];

  const handleStatusChange = (status: "idle" | "en-route" | "arrived" | "completed") => {
    setActiveStatus(status);
    toast({
      title: "Status Updated",
      description: `Your status is now: ${status.replace("-", " ")}`,
    });
  };

  return (
    <div className="container py-6 space-y-6">
      <div className="flex flex-col md:flex-row gap-4 md:items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold">Rider Dashboard</h1>
          <p className="text-muted-foreground">Manage student pickups and track your rides</p>
        </div>
        <div className="flex flex-wrap gap-2">
          <Button 
            variant={qrScanMode ? "default" : "outline"}
            className="gap-2"
            onClick={() => setQrScanMode(!qrScanMode)}
          >
            <QrCode className="h-4 w-4" />
            {qrScanMode ? "Scanning Mode Active" : "Scan QR Code"}
          </Button>
          <Button className="gap-2">
            <Navigation className="h-4 w-4" />
            Navigate
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
            <CardDescription>Scan student QR code to verify pickup or drop-off</CardDescription>
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
        <Tabs defaultValue="active" className="space-y-4">
          <TabsList className="grid grid-cols-3 w-full max-w-xl">
            <TabsTrigger value="active" className="flex items-center gap-2">
              <Car className="h-4 w-4" />
              <span className="hidden sm:inline">Active Rides</span>
            </TabsTrigger>
            <TabsTrigger value="upcoming" className="flex items-center gap-2">
              <Calendar className="h-4 w-4" />
              <span className="hidden sm:inline">Upcoming</span>
            </TabsTrigger>
            <TabsTrigger value="history" className="flex items-center gap-2">
              <History className="h-4 w-4" />
              <span className="hidden sm:inline">History</span>
            </TabsTrigger>
          </TabsList>
          
          <TabsContent value="active">
            <div className="grid gap-6 md:grid-cols-2">
              <Card>
                <CardHeader className="pb-2">
                  <CardTitle>Current Ride Status</CardTitle>
                  <CardDescription>Update your status for parents and schools</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex flex-wrap justify-between gap-2">
                    {[
                      { id: "idle", label: "Idle", icon: <Clock /> },
                      { id: "en-route", label: "En Route", icon: <Car /> },
                      { id: "arrived", label: "Arrived", icon: <MapPin /> },
                      { id: "completed", label: "Completed", icon: <Check /> }
                    ].map((status) => (
                      <Button 
                        key={status.id}
                        variant={activeStatus === status.id ? "default" : "outline"}
                        className="flex-1 gap-2"
                        onClick={() => handleStatusChange(status.id as any)}
                      >
                        {status.icon}
                        {status.label}
                      </Button>
                    ))}
                  </div>
                  
                  <div className="bg-muted rounded-md p-4">
                    <h3 className="font-medium mb-2">Today's Assignment</h3>
                    <div className="space-y-2">
                      <div className="flex justify-between items-center">
                        <p className="text-sm font-medium">School</p>
                        <p className="text-sm">Lincoln Elementary</p>
                      </div>
                      <div className="flex justify-between items-center">
                        <p className="text-sm font-medium">Pickup Time</p>
                        <p className="text-sm">3:15 PM</p>
                      </div>
                      <div className="flex justify-between items-center">
                        <p className="text-sm font-medium">Students</p>
                        <p className="text-sm">2 students</p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
              
              <Card>
                <CardHeader className="pb-2">
                  <CardTitle>Navigation</CardTitle>
                  <CardDescription>Get directions to schools and pickup locations</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="bg-muted aspect-video rounded-md flex items-center justify-center mb-4">
                    <div className="text-center">
                      <MapPin className="h-12 w-12 mx-auto mb-2 text-primary" />
                      <p>Interactive map will appear here</p>
                      <p className="text-sm text-muted-foreground">Turn-by-turn navigation to your destination</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center justify-between p-3 border rounded-md">
                    <div>
                      <p className="font-medium">Lincoln Elementary</p>
                      <p className="text-sm text-muted-foreground">123 School St, Springfield</p>
                    </div>
                    <Badge className="flex items-center gap-1">
                      <Clock className="h-3 w-3" />
                      8 min away
                    </Badge>
                  </div>
                </CardContent>
              </Card>
            </div>
            
            <Card className="mt-6">
              <CardHeader className="pb-2">
                <CardTitle>Students to Pick Up</CardTitle>
                <CardDescription>Students assigned to your vehicle today</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  {["Alex Johnson", "Emma Wilson"].map((name, i) => (
                    <div key={i} className="flex items-center justify-between p-3 border rounded-md">
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 bg-muted rounded-full flex items-center justify-center">
                          <User className="h-5 w-5 text-muted-foreground" />
                        </div>
                        <div>
                          <p className="font-medium">{name}</p>
                          <p className="text-sm text-muted-foreground">{["5th Grade", "3rd Grade"][i]} • ID: {1001 + i}</p>
                        </div>
                      </div>
                      <div className="flex gap-2">
                        <Button 
                          variant="outline" 
                          size="sm" 
                          className="gap-1"
                          onClick={() => setQrScanMode(true)}
                        >
                          <QrCode className="h-3 w-3" />
                          Verify
                        </Button>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>
          
          <TabsContent value="upcoming">
            <Card>
              <CardHeader>
                <CardTitle>Upcoming Rides</CardTitle>
                <CardDescription>Your scheduled pickup assignments</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {upcomingRides.map((ride) => (
                    <div key={ride.id} className="flex items-center justify-between p-3 border rounded-md">
                      <div>
                        <p className="font-medium">{ride.name}</p>
                        <div className="flex items-center gap-1 text-sm text-muted-foreground">
                          <span>{ride.school}</span>
                          <span>•</span>
                          <Clock className="h-3 w-3" />
                          <span>{ride.time}</span>
                        </div>
                      </div>
                      <Badge 
                        variant="outline" 
                        className="flex items-center gap-1"
                      >
                        {ride.date}
                      </Badge>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>
          
          <TabsContent value="history">
            <Card>
              <CardHeader>
                <CardTitle>Ride History</CardTitle>
                <CardDescription>Your past pickups and drop-offs</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <div key={i} className="flex items-center justify-between p-3 border rounded-md">
                      <div>
                        <p className="font-medium">{["Alex Johnson", "Emma Wilson", "Noah Brown", "Sophia Davis", "Liam Miller"][i]}</p>
                        <div className="flex items-center gap-1 text-sm text-muted-foreground">
                          <span>{["Lincoln Elementary", "Lincoln Elementary", "Washington Middle", "Jefferson High", "Lincoln Elementary"][i]}</span>
                          <span>•</span>
                          <Calendar className="h-3 w-3" />
                          <span>Oct {15 - i}, 2023</span>
                        </div>
                      </div>
                      <Badge 
                        variant="outline" 
                        className="flex items-center gap-1"
                      >
                        <Check className="h-3 w-3 text-green-500" />
                        Completed
                      </Badge>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      )}
    </div>
  );
};
