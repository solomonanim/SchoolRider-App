
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
import { 
  Car, 
  Clock, 
  MapPin, 
  QrCode, 
  UserPlus, 
  History, 
  Bell, 
  Calendar,
  LogOut
} from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { useAppContext } from "@/context/AppContext";
import { useToast } from "@/hooks/use-toast";

interface ParentDashboardProps {
  onLogout: () => void;
}

export const ParentDashboard: React.FC<ParentDashboardProps> = ({ onLogout }) => {
  const [activeTab, setActiveTab] = useState("children");
  const { currentUser } = useAppContext();
  const { toast } = useToast();
  
  // Extract children data from the context
  const childrenData = currentUser?.children || [];
  
  // Extract ride history from the context
  const rideHistory = currentUser?.rides || [];
  
  // Extract schedule data from the context
  const scheduleData = currentUser?.schedule || [];
  
  const handleAddChild = () => {
    toast({
      title: "Feature Coming Soon",
      description: "The ability to add children will be available in a future update.",
    });
  };
  
  const handleRequestPickup = () => {
    toast({
      title: "Feature Coming Soon",
      description: "The ability to request pickups will be available in a future update.",
    });
  };
  
  const handleShowQR = (childName: string) => {
    toast({
      title: "QR Code Ready",
      description: `QR code for ${childName} can be shown to riders for verification.`,
    });
  };
  
  const handleAddRider = () => {
    toast({
      title: "Feature Coming Soon",
      description: "The ability to add authorized riders will be available in a future update.",
    });
  };

  return (
    <div className="container py-6 space-y-6">
      <div className="flex flex-col md:flex-row gap-4 md:items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold">Parent Dashboard</h1>
          <p className="text-muted-foreground">Manage your children's school transportation</p>
        </div>
        <div className="flex gap-2">
          <Button variant="outline" className="gap-2" onClick={handleAddChild}>
            <UserPlus className="h-4 w-4" />
            Add Child
          </Button>
          <Button className="gap-2" onClick={handleRequestPickup}>
            <Car className="h-4 w-4" />
            Request Pickup
          </Button>
          <Button variant="ghost" size="icon" onClick={onLogout}>
            <LogOut className="h-4 w-4" />
          </Button>
        </div>
      </div>

      <Tabs defaultValue="children" value={activeTab} onValueChange={setActiveTab} className="space-y-4">
        <TabsList className="grid grid-cols-4 w-full max-w-2xl">
          <TabsTrigger value="children" className="flex items-center gap-2">
            <UserPlus className="h-4 w-4" />
            <span className="hidden sm:inline">Children</span>
          </TabsTrigger>
          <TabsTrigger value="tracking" className="flex items-center gap-2">
            <MapPin className="h-4 w-4" />
            <span className="hidden sm:inline">Tracking</span>
          </TabsTrigger>
          <TabsTrigger value="history" className="flex items-center gap-2">
            <History className="h-4 w-4" />
            <span className="hidden sm:inline">History</span>
          </TabsTrigger>
          <TabsTrigger value="schedule" className="flex items-center gap-2">
            <Calendar className="h-4 w-4" />
            <span className="hidden sm:inline">Schedule</span>
          </TabsTrigger>
        </TabsList>
        
        <TabsContent value="children" className="space-y-4">
          <div className="grid md:grid-cols-2 gap-6">
            {childrenData.length > 0 ? (
              childrenData.map((child) => (
                <Card key={child.id}>
                  <CardHeader className="pb-2">
                    <CardTitle>{child.name}</CardTitle>
                    <CardDescription>{child.grade} - {child.school}</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="flex justify-center">
                      <div className="relative">
                        <img 
                          src={child.qrCode} 
                          alt={`QR code for ${child.name}`} 
                          className="w-48 h-48 border rounded-md" 
                        />
                        <Badge className="absolute -top-2 -right-2 bg-primary">QR Code</Badge>
                      </div>
                    </div>
                    <div className="grid grid-cols-2 gap-2">
                      <Button variant="outline" className="w-full gap-2" onClick={() => handleShowQR(child.name)}>
                        <QrCode className="h-4 w-4" />
                        Show QR
                      </Button>
                      <Button variant="outline" className="w-full gap-2" onClick={handleAddRider}>
                        <UserPlus className="h-4 w-4" />
                        Add Rider
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))
            ) : (
              <Card className="col-span-2">
                <CardContent className="flex flex-col items-center justify-center py-8">
                  <UserPlus className="h-12 w-12 text-muted-foreground mb-4" />
                  <p className="text-muted-foreground">No children added yet</p>
                  <Button className="mt-4" onClick={handleAddChild}>Add Your First Child</Button>
                </CardContent>
              </Card>
            )}
          </div>
        </TabsContent>
        
        <TabsContent value="tracking">
          <Card>
            <CardHeader>
              <CardTitle>Live Tracking</CardTitle>
              <CardDescription>
                Track your child's rider in real-time
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="bg-muted aspect-video rounded-md flex items-center justify-center">
                <div className="text-center">
                  <MapPin className="h-12 w-12 mx-auto mb-2 text-primary" />
                  <p>Interactive map will appear here</p>
                  <p className="text-sm text-muted-foreground">Showing real-time location of your child's rider</p>
                </div>
              </div>
              <div className="mt-4 flex items-center justify-between p-3 border rounded-md">
                <div className="flex items-center gap-2">
                  <Car className="h-5 w-5 text-primary" />
                  <div>
                    <p className="font-medium">John's Ride</p>
                    <p className="text-sm text-muted-foreground">Toyota Camry • ABC123</p>
                  </div>
                </div>
                <div className="flex flex-col items-end">
                  <Badge variant="outline" className="flex items-center gap-1">
                    <Clock className="h-3 w-3" />
                    ETA: 5 min
                  </Badge>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
        
        <TabsContent value="history">
          <Card>
            <CardHeader>
              <CardTitle>Ride History</CardTitle>
              <CardDescription>
                Past pickup and drop-off records
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {rideHistory.length > 0 ? (
                  rideHistory.map((ride) => {
                    const child = childrenData.find(c => c.id === ride.childId);
                    return (
                      <div key={ride.id} className="flex items-center justify-between p-3 border rounded-md">
                        <div>
                          <p className="font-medium">{child?.name || "Child"}</p>
                          <div className="flex items-center gap-1 text-sm text-muted-foreground">
                            <Calendar className="h-3 w-3" />
                            <span>{ride.date}</span>
                            <span>•</span>
                            <Clock className="h-3 w-3" />
                            <span>{ride.time}</span>
                          </div>
                        </div>
                        <Badge variant="outline" className="flex items-center gap-1">
                          <Car className="h-3 w-3" />
                          {ride.type === "pickup" ? "Pickup" : "Drop-off"}
                        </Badge>
                      </div>
                    );
                  })
                ) : (
                  <div className="flex flex-col items-center justify-center py-8">
                    <History className="h-12 w-12 text-muted-foreground mb-4" />
                    <p className="text-muted-foreground">No ride history yet</p>
                  </div>
                )}
              </div>
            </CardContent>
          </Card>
        </TabsContent>
        
        <TabsContent value="schedule">
          <Card>
            <CardHeader>
              <CardTitle>Pickup Schedule</CardTitle>
              <CardDescription>
                Manage your regular and special pickup requests
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="bg-muted p-4 rounded-lg">
                <h3 className="font-medium mb-2">Regular Schedule</h3>
                <div className="grid grid-cols-2 md:grid-cols-5 gap-2 text-center">
                  {scheduleData.length > 0 ? (
                    scheduleData.map((day) => (
                      <div 
                        key={day.day} 
                        className={`border rounded-md p-2 ${day.enabled ? 'bg-card' : 'bg-muted/50 text-muted-foreground'}`}
                      >
                        <p className="font-medium">{day.day}</p>
                        <p className="text-sm">{day.time}</p>
                      </div>
                    ))
                  ) : (
                    ["Mon", "Tue", "Wed", "Thu", "Fri"].map((day) => (
                      <div key={day} className="border rounded-md p-2 bg-muted/50 text-muted-foreground">
                        <p className="font-medium">{day}</p>
                        <p className="text-sm">Not set</p>
                      </div>
                    ))
                  )}
                </div>
              </div>
              
              <div>
                <div className="flex justify-between items-center mb-3">
                  <h3 className="font-medium">Special Requests</h3>
                  <Button variant="outline" size="sm" className="gap-2" onClick={handleRequestPickup}>
                    <Calendar className="h-4 w-4" />
                    New Request
                  </Button>
                </div>
                
                <div className="border rounded-md p-3 space-y-1">
                  <div className="flex justify-between items-center">
                    <div className="flex items-center gap-2">
                      <Calendar className="h-4 w-4 text-primary" />
                      <p className="font-medium">Nov 15, 2023</p>
                    </div>
                    <Badge>Early Pickup</Badge>
                  </div>
                  <p className="text-sm text-muted-foreground">1:30 PM - Doctor's appointment</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
};
