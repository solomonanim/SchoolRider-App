
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
  Book,
  GraduationCap,
  LogOut,
  ListChecks
} from "lucide-react";
import { useAppContext, Homeroom } from "@/context/AppContext";
import { useToast } from "@/hooks/use-toast";

interface TeacherDashboardProps {
  onLogout: () => void;
}

export const TeacherDashboard: React.FC<TeacherDashboardProps> = ({ onLogout }) => {
  const [activeTab, setActiveTab] = useState("homerooms");
  const { currentUser } = useAppContext();
  const { toast } = useToast();
  
  // Extract teacher's homerooms
  const homerooms = currentUser?.homerooms || [];
  
  // Mock data for students in homerooms - in a real app, this would be filtered by the backend
  const allStudents = [
    { id: 1, name: "Alex Johnson", grade: "5th Grade", homeroom: "5A", status: "In School", nextRide: "3:15 PM Pickup" },
    { id: 2, name: "Emma Wilson", grade: "5th Grade", homeroom: "5A", status: "In School", nextRide: "3:15 PM Pickup" },
    { id: 3, name: "Noah Brown", grade: "5th Grade", homeroom: "5A", status: "In School", nextRide: "3:20 PM Pickup" },
    { id: 4, name: "Olivia Garcia", grade: "5th Grade", homeroom: "5A", status: "Absent", nextRide: "N/A" },
    { id: 5, name: "James Davis", grade: "5th Grade", homeroom: "5B", status: "In School", nextRide: "3:15 PM Pickup" },
    { id: 6, name: "Sophia Miller", grade: "5th Grade", homeroom: "5B", status: "In School", nextRide: "3:15 PM Pickup" },
    { id: 7, name: "Benjamin Taylor", grade: "3rd Grade", homeroom: "3B", status: "In School", nextRide: "3:15 PM Pickup" },
    { id: 8, name: "Ava Martinez", grade: "3rd Grade", homeroom: "3B", status: "Absent", nextRide: "N/A" },
  ];
  
  // Function to get students for teacher's homerooms ONLY
  const getStudentsByTeacherHomerooms = () => {
    if (!homerooms || homerooms.length === 0) return [];
    
    // Get homeroom names for this teacher
    const homeroomNames = homerooms.map(h => h.name);
    
    // Filter students who are in the teacher's homerooms
    return allStudents.filter(student => homeroomNames.includes(student.homeroom));
  };
  
  // Get filtered students
  const studentsInTeacherHomerooms = getStudentsByTeacherHomerooms();
  
  // Function to get students for a specific homeroom
  const getStudentsByHomeroom = (homeroomName: string) => {
    return studentsInTeacherHomerooms.filter(student => student.homeroom === homeroomName);
  };
  
  // Upcoming pickups for students in teacher's homerooms only
  const upcomingPickups = studentsInTeacherHomerooms
    .filter(student => student.status === "In School" && student.nextRide !== "N/A")
    .map(student => ({
      id: student.id,
      studentId: student.id,
      time: student.nextRide.split(" ")[0],
      rider: ["Jane Johnson (Mother)", "Tom Wilson (Father)", "Sarah Brown (Mother)", "Daniel Davis (Father)", "Paula Miller (Mother)"][student.id % 5],
      status: Math.random() > 0.3 ? "Confirmed" : "Pending"
    }));
  
  // Track attendance function
  const markAttendance = (studentId: number, status: string) => {
    toast({
      title: "Attendance Updated",
      description: `Student status updated to: ${status}`,
    });
  };
  
  // Confirm pickup function
  const confirmPickup = (pickupId: number) => {
    toast({
      title: "Pickup Confirmed",
      description: "You have confirmed this pickup/drop-off",
    });
  };
  
  return (
    <div className="container py-6 space-y-6">
      <div className="flex flex-col md:flex-row gap-4 md:items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold">Teacher Dashboard</h1>
          <p className="text-muted-foreground">
            Manage your homerooms and monitor student pickups
            {homerooms.length > 0 && (
              <span className="ml-1">
                ({homerooms.map(h => h.name).join(", ")})
              </span>
            )}
          </p>
        </div>
        <div className="flex gap-2">
          <Button variant="outline" className="gap-2">
            <Bell className="h-4 w-4" />
            Notifications
          </Button>
          <Button variant="ghost" size="icon" onClick={onLogout}>
            <LogOut className="h-4 w-4" />
          </Button>
        </div>
      </div>

      <Tabs defaultValue="homerooms" value={activeTab} onValueChange={setActiveTab} className="space-y-4">
        <TabsList className="grid grid-cols-3 w-full max-w-xl">
          <TabsTrigger value="homerooms" className="flex items-center gap-2">
            <Book className="h-4 w-4" />
            <span className="hidden sm:inline">Homerooms</span>
          </TabsTrigger>
          <TabsTrigger value="pickups" className="flex items-center gap-2">
            <Car className="h-4 w-4" />
            <span className="hidden sm:inline">Pickups/Drop-offs</span>
          </TabsTrigger>
          <TabsTrigger value="attendance" className="flex items-center gap-2">
            <ListChecks className="h-4 w-4" />
            <span className="hidden sm:inline">Attendance</span>
          </TabsTrigger>
        </TabsList>
        
        <TabsContent value="homerooms" className="space-y-6">
          {homerooms.length > 0 ? (
            homerooms.map((homeroom) => (
              <Card key={homeroom.id}>
                <CardHeader className="pb-2">
                  <div className="flex justify-between items-center">
                    <CardTitle>{homeroom.name} - {homeroom.grade}</CardTitle>
                    <Badge>{getStudentsByHomeroom(homeroom.name).length} Students</Badge>
                  </div>
                  <CardDescription>Manage students and monitor pickups/drop-offs</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="relative mb-4">
                    <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                    <Input className="pl-9" placeholder={`Search students in ${homeroom.name}...`} />
                  </div>
                  
                  <div className="space-y-3">
                    {getStudentsByHomeroom(homeroom.name).map((student) => (
                      <div key={student.id} className="flex items-center justify-between p-3 border rounded-md">
                        <div className="flex items-center gap-3">
                          <div className="w-10 h-10 bg-muted rounded-full flex items-center justify-center">
                            <User className="h-5 w-5 text-muted-foreground" />
                          </div>
                          <div>
                            <p className="font-medium">{student.name}</p>
                            <div className="flex items-center gap-1 text-sm text-muted-foreground">
                              <Clock className="h-3 w-3" />
                              <span>{student.nextRide}</span>
                            </div>
                          </div>
                        </div>
                        <Badge 
                          variant={student.status === "In School" ? "outline" : "secondary"}
                          className={student.status === "Absent" ? "text-red-500" : ""}
                        >
                          {student.status === "In School" ? (
                            <CheckCircle className="h-3 w-3 mr-1 text-green-500" />
                          ) : (
                            <AlertTriangle className="h-3 w-3 mr-1" />
                          )}
                          {student.status}
                        </Badge>
                      </div>
                    ))}
                    
                    {getStudentsByHomeroom(homeroom.name).length === 0 && (
                      <div className="text-center p-4">
                        <p className="text-muted-foreground">No students in this homeroom</p>
                      </div>
                    )}
                  </div>
                </CardContent>
              </Card>
            ))
          ) : (
            <Card>
              <CardContent className="flex flex-col items-center justify-center py-8">
                <Book className="h-12 w-12 text-muted-foreground mb-4" />
                <p className="text-muted-foreground">No homerooms assigned yet</p>
                <p className="text-sm text-muted-foreground">Contact your school administrator</p>
              </CardContent>
            </Card>
          )}
        </TabsContent>
        
        <TabsContent value="pickups">
          <Card>
            <CardHeader>
              <div className="flex justify-between items-center">
                <CardTitle>Today's Pickups & Drop-offs</CardTitle>
                <Badge className="bg-primary">3:15 - 3:30 PM</Badge>
              </div>
              <CardDescription>
                Monitor scheduled pickups and drop-offs for your students
              </CardDescription>
            </CardHeader>
            <CardContent>
              {upcomingPickups.length > 0 ? (
                <div className="space-y-4">
                  {upcomingPickups.map((pickup) => {
                    const student = studentsInTeacherHomerooms.find(s => s.id === pickup.studentId);
                    return student ? (
                      <div key={pickup.id} className="flex items-center justify-between p-3 border rounded-md">
                        <div>
                          <div className="flex items-center gap-2">
                            <p className="font-medium">{student?.name}</p>
                            <Badge variant="outline">{student?.homeroom}</Badge>
                          </div>
                          <div className="flex items-center gap-1 text-sm text-muted-foreground">
                            <Clock className="h-3 w-3" />
                            <span>{pickup.time}</span>
                            <span>•</span>
                            <User className="h-3 w-3" />
                            <span>{pickup.rider}</span>
                          </div>
                        </div>
                        <div>
                          <Button 
                            size="sm" 
                            variant={pickup.status === "Confirmed" ? "outline" : "default"}
                            className="gap-2"
                            onClick={() => confirmPickup(pickup.id)}
                            disabled={pickup.status === "Confirmed"}
                          >
                            {pickup.status === "Confirmed" ? (
                              <>
                                <CheckCircle className="h-3 w-3" />
                                <span>Confirmed</span>
                              </>
                            ) : (
                              <>
                                <CheckCircle className="h-3 w-3" />
                                <span>Confirm</span>
                              </>
                            )}
                          </Button>
                        </div>
                      </div>
                    ) : null;
                  })}
                </div>
              ) : (
                <div className="text-center p-6">
                  <Car className="h-12 w-12 mx-auto mb-2 text-muted-foreground" />
                  <p className="text-muted-foreground">No pickups scheduled for your students today</p>
                </div>
              )}
            </CardContent>
          </Card>
        </TabsContent>
        
        <TabsContent value="attendance">
          <Card>
            <CardHeader>
              <CardTitle>Daily Attendance</CardTitle>
              <CardDescription>Mark and track student attendance</CardDescription>
            </CardHeader>
            <CardContent>
              {homerooms.length > 0 ? (
                <div className="space-y-4">
                  {homerooms.map((homeroom) => (
                    <div key={homeroom.id} className="space-y-3">
                      <h3 className="font-medium text-lg flex items-center gap-2">
                        <GraduationCap className="h-5 w-5 text-primary" />
                        {homeroom.name} Attendance
                      </h3>
                      
                      <div className="space-y-2">
                        {getStudentsByHomeroom(homeroom.name).map((student) => (
                          <div key={student.id} className="flex items-center justify-between p-3 border rounded-md">
                            <div className="flex items-center gap-3">
                              <div className="w-8 h-8 bg-muted rounded-full flex items-center justify-center">
                                <User className="h-4 w-4 text-muted-foreground" />
                              </div>
                              <p className="font-medium">{student.name}</p>
                            </div>
                            <div className="flex gap-2">
                              <Button 
                                size="sm" 
                                variant={student.status === "In School" ? "default" : "outline"} 
                                className="px-3"
                                onClick={() => markAttendance(student.id, "In School")}
                              >
                                Present
                              </Button>
                              <Button 
                                size="sm" 
                                variant={student.status === "Absent" ? "destructive" : "outline"} 
                                className="px-3"
                                onClick={() => markAttendance(student.id, "Absent")}
                              >
                                Absent
                              </Button>
                            </div>
                          </div>
                        ))}
                        
                        {getStudentsByHomeroom(homeroom.name).length === 0 && (
                          <div className="text-center p-4">
                            <p className="text-muted-foreground">No students in this homeroom</p>
                          </div>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              ) : (
                <div className="text-center p-6">
                  <ListChecks className="h-12 w-12 mx-auto mb-2 text-muted-foreground" />
                  <p className="text-muted-foreground">No homerooms assigned yet</p>
                  <p className="text-sm text-muted-foreground">Contact your school administrator</p>
                </div>
              )}
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
};
