
import React, { useState } from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
  CardFooter
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
  LogOut,
  GraduationCap,
  School,
  BookOpen,
  Plus
} from "lucide-react";
import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useAppContext, Teacher, Homeroom } from "@/context/AppContext";
import { useToast } from "@/hooks/use-toast";

interface SchoolDashboardProps {
  onLogout: () => void;
}

export const SchoolDashboard: React.FC<SchoolDashboardProps> = ({ onLogout }) => {
  const [qrScanMode, setQrScanMode] = useState(false);
  const [activeTab, setActiveTab] = useState("current");
  const { currentUser, addHomeroom, addTeacher, assignTeacherToHomeroom } = useAppContext();
  const { toast } = useToast();
  
  // New teacher form state
  const [newTeacher, setNewTeacher] = useState({
    name: "",
    email: "",
  });
  
  // New homeroom form state
  const [newHomeroom, setNewHomeroom] = useState({
    name: "",
    grade: "",
    teacherId: 0
  });
  
  // Assign teacher to homeroom state
  const [assignTeacherHomeroom, setAssignTeacherHomeroom] = useState({
    teacherId: 0,
    homeroomId: 0
  });
  
  // Get school data
  const schoolId = currentUser?.schoolId || 0;
  const schoolName = currentUser?.school?.name || "School";
  const teachers = currentUser?.teachers || [];
  const homerooms = currentUser?.homerooms || [];
  
  // Mock data for students in this school
  const students = [
    { id: 1, name: "Alex Johnson", grade: "5th Grade", homeroom: "5A", status: "In School" },
    { id: 2, name: "Emma Wilson", grade: "3rd Grade", homeroom: "3B", status: "In School" },
    { id: 3, name: "Noah Brown", grade: "5th Grade", homeroom: "5A", status: "Absent" },
    { id: 4, name: "Olivia Garcia", grade: "3rd Grade", homeroom: "3B", status: "In School" },
    { id: 5, name: "James Davis", grade: "5th Grade", homeroom: "5B", status: "In School" },
  ];
  
  const recentPickups = [
    { id: 1, name: "Alex Johnson", grade: "5th Grade", homeroom: "5A", status: "Picked up", time: "3:15 PM", rider: "Jane Smith (Mother)" },
    { id: 2, name: "Emma Wilson", grade: "3rd Grade", homeroom: "3B", status: "Pending", time: "3:20 PM", rider: "Tom Wilson (Father)" },
    { id: 3, name: "Noah Brown", grade: "5th Grade", homeroom: "5A", status: "Picked up", time: "3:10 PM", rider: "Sarah Brown (Mother)" },
  ];

  const upcomingPickups = [
    { id: 1, name: "Sophia Davis", grade: "5th Grade", homeroom: "5B", time: "3:25 PM", status: "On time" },
    { id: 2, name: "Liam Miller", grade: "3rd Grade", homeroom: "3B", time: "3:25 PM", status: "On time" },
    { id: 3, name: "Olivia Garcia", grade: "3rd Grade", homeroom: "3B", time: "3:30 PM", status: "Delayed" },
  ];
  
  // Handler for adding a new teacher
  const handleAddTeacher = () => {
    if (!newTeacher.name || !newTeacher.email) {
      toast({
        title: "Error",
        description: "Please fill out all fields",
        variant: "destructive"
      });
      return;
    }
    
    addTeacher({
      name: newTeacher.name,
      email: newTeacher.email,
      schoolId: schoolId,
      homeroomIds: []
    });
    
    setNewTeacher({ name: "", email: "" });
    
    toast({
      title: "Teacher Added",
      description: `${newTeacher.name} has been added as a teacher.`
    });
  };
  
  // Handler for adding a new homeroom
  const handleAddHomeroom = () => {
    if (!newHomeroom.name || !newHomeroom.grade) {
      toast({
        title: "Error",
        description: "Please fill out all fields",
        variant: "destructive"
      });
      return;
    }
    
    addHomeroom({
      name: newHomeroom.name,
      grade: newHomeroom.grade,
      teacherId: newHomeroom.teacherId || 0,
      schoolId: schoolId
    });
    
    setNewHomeroom({ name: "", grade: "", teacherId: 0 });
    
    toast({
      title: "Homeroom Added",
      description: `Homeroom ${newHomeroom.name} has been added.`
    });
  };
  
  // Handler for assigning teacher to homeroom
  const handleAssignTeacherToHomeroom = () => {
    if (!assignTeacherHomeroom.teacherId || !assignTeacherHomeroom.homeroomId) {
      toast({
        title: "Error",
        description: "Please select both a teacher and a homeroom",
        variant: "destructive"
      });
      return;
    }
    
    assignTeacherToHomeroom(assignTeacherHomeroom.teacherId, assignTeacherHomeroom.homeroomId);
    
    setAssignTeacherHomeroom({ teacherId: 0, homeroomId: 0 });
    
    toast({
      title: "Teacher Assigned",
      description: "Teacher has been assigned to the homeroom."
    });
  };
  
  // Get students by homeroom
  const getStudentsByHomeroom = (homeroomName: string) => {
    return students.filter(student => student.homeroom === homeroomName);
  };
  
  // Get teacher name by ID
  const getTeacherName = (teacherId: number) => {
    const teacher = teachers.find(t => t.id === teacherId);
    return teacher ? teacher.name : "Unassigned";
  };

  return (
    <div className="container py-6 space-y-6">
      <div className="flex flex-col md:flex-row gap-4 md:items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold">School Admin Dashboard</h1>
          <p className="text-muted-foreground">{schoolName} - Manage students, teachers, and homerooms</p>
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
        <Tabs value={activeTab} onValueChange={setActiveTab} className="space-y-4">
          <TabsList className="grid grid-cols-6 w-full max-w-4xl">
            <TabsTrigger value="current" className="flex items-center gap-2">
              <Clock className="h-4 w-4" />
              <span className="hidden sm:inline">Current</span>
            </TabsTrigger>
            <TabsTrigger value="students" className="flex items-center gap-2">
              <Users className="h-4 w-4" />
              <span className="hidden sm:inline">Students</span>
            </TabsTrigger>
            <TabsTrigger value="teachers" className="flex items-center gap-2">
              <GraduationCap className="h-4 w-4" />
              <span className="hidden sm:inline">Teachers</span>
            </TabsTrigger>
            <TabsTrigger value="homerooms" className="flex items-center gap-2">
              <BookOpen className="h-4 w-4" />
              <span className="hidden sm:inline">Homerooms</span>
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
                            <span>{pickup.homeroom}</span>
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
                            <span>{pickup.homeroom}</span>
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
                  <Input className="pl-9" placeholder="Search students by name, grade, or homeroom..." />
                </div>
                
                <div className="space-y-4">
                  {students.map((student) => (
                    <div key={student.id} className="flex items-center justify-between p-3 border rounded-md">
                      <div className="flex items-center gap-4">
                        <div className="w-10 h-10 bg-muted rounded-full flex items-center justify-center">
                          <User className="h-5 w-5 text-muted-foreground" />
                        </div>
                        <div>
                          <p className="font-medium">{student.name}</p>
                          <p className="text-sm text-muted-foreground">
                            {student.grade} • {student.homeroom} • ID: {1000 + student.id}
                          </p>
                        </div>
                      </div>
                      <div className="flex gap-2">
                        <Badge 
                          variant={student.status === "In School" ? "outline" : "secondary"}
                          className={student.status === "Absent" ? "text-red-500" : ""}
                        >
                          {student.status}
                        </Badge>
                        <Button variant="outline" size="sm">Details</Button>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>
          
          <TabsContent value="teachers">
            <div className="grid gap-6 lg:grid-cols-5 lg:grid-rows-1">
              <Card className="lg:col-span-3">
                <CardHeader>
                  <CardTitle>Teachers</CardTitle>
                  <CardDescription>Manage teachers and their homeroom assignments</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="relative mb-6">
                    <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                    <Input className="pl-9" placeholder="Search teachers by name..." />
                  </div>
                  
                  <div className="space-y-4">
                    {teachers.length > 0 ? (
                      teachers.map((teacher) => (
                        <div key={teacher.id} className="flex items-center justify-between p-4 border rounded-md">
                          <div className="flex items-center gap-4">
                            <div className="w-12 h-12 bg-muted rounded-full flex items-center justify-center">
                              <GraduationCap className="h-6 w-6 text-muted-foreground" />
                            </div>
                            <div>
                              <p className="font-medium">{teacher.name}</p>
                              <p className="text-sm text-muted-foreground">{teacher.email}</p>
                              <div className="flex flex-wrap gap-1 mt-1">
                                {teacher.homeroomIds.map((hId) => {
                                  const homeroom = homerooms.find(h => h.id === hId);
                                  return homeroom ? (
                                    <Badge key={hId} variant="outline" className="text-xs">
                                      {homeroom.name} ({homeroom.grade})
                                    </Badge>
                                  ) : null;
                                })}
                                {teacher.homeroomIds.length === 0 && (
                                  <Badge variant="secondary" className="text-xs">No Homerooms</Badge>
                                )}
                              </div>
                            </div>
                          </div>
                          <div className="flex gap-2">
                            <Dialog>
                              <DialogTrigger asChild>
                                <Button variant="outline" size="sm">Assign Homeroom</Button>
                              </DialogTrigger>
                              <DialogContent>
                                <DialogHeader>
                                  <DialogTitle>Assign Homeroom to {teacher.name}</DialogTitle>
                                  <DialogDescription>
                                    Select a homeroom to assign to this teacher.
                                  </DialogDescription>
                                </DialogHeader>
                                <div className="grid gap-4 py-4">
                                  <div className="space-y-2">
                                    <Label htmlFor="homeroom">Homeroom</Label>
                                    <Select
                                      onValueChange={(value) => setAssignTeacherHomeroom({
                                        teacherId: teacher.id,
                                        homeroomId: parseInt(value)
                                      })}
                                    >
                                      <SelectTrigger id="homeroom">
                                        <SelectValue placeholder="Select a homeroom" />
                                      </SelectTrigger>
                                      <SelectContent>
                                        {homerooms
                                          .filter(h => h.teacherId === 0 || h.teacherId === teacher.id)
                                          .map((homeroom) => (
                                            <SelectItem 
                                              key={homeroom.id} 
                                              value={homeroom.id.toString()}
                                            >
                                              {homeroom.name} ({homeroom.grade})
                                            </SelectItem>
                                          ))
                                        }
                                      </SelectContent>
                                    </Select>
                                  </div>
                                </div>
                                <DialogFooter>
                                  <Button onClick={handleAssignTeacherToHomeroom}>
                                    Assign Homeroom
                                  </Button>
                                </DialogFooter>
                              </DialogContent>
                            </Dialog>
                            <Button variant="outline" size="sm">Edit</Button>
                          </div>
                        </div>
                      ))
                    ) : (
                      <div className="text-center p-8">
                        <GraduationCap className="h-12 w-12 mx-auto mb-4 text-muted-foreground" />
                        <p className="text-muted-foreground">No teachers added yet</p>
                      </div>
                    )}
                  </div>
                </CardContent>
              </Card>
              
              <Card className="lg:col-span-2">
                <CardHeader>
                  <CardTitle>Add New Teacher</CardTitle>
                  <CardDescription>Create a new teacher account</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="space-y-2">
                      <Label htmlFor="teacherName">Teacher Name</Label>
                      <Input 
                        id="teacherName" 
                        placeholder="e.g. Ms. Jane Smith"
                        value={newTeacher.name}
                        onChange={(e) => setNewTeacher({...newTeacher, name: e.target.value})}
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="teacherEmail">Email Address</Label>
                      <Input 
                        id="teacherEmail" 
                        type="email" 
                        placeholder="e.g. teacher@school.edu"
                        value={newTeacher.email}
                        onChange={(e) => setNewTeacher({...newTeacher, email: e.target.value})}
                      />
                    </div>
                  </div>
                </CardContent>
                <CardFooter>
                  <Button onClick={handleAddTeacher} className="w-full gap-2">
                    <Plus className="h-4 w-4" />
                    Add Teacher
                  </Button>
                </CardFooter>
              </Card>
            </div>
          </TabsContent>
          
          <TabsContent value="homerooms">
            <div className="grid gap-6 lg:grid-cols-5 lg:grid-rows-1">
              <Card className="lg:col-span-3">
                <CardHeader>
                  <CardTitle>Homerooms</CardTitle>
                  <CardDescription>Manage homerooms and view assigned teachers</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {homerooms.length > 0 ? (
                      homerooms.map((homeroom) => (
                        <div key={homeroom.id} className="flex items-center justify-between p-4 border rounded-md">
                          <div>
                            <div className="flex items-center gap-2">
                              <BookOpen className="h-5 w-5 text-primary" />
                              <p className="font-medium">{homeroom.name} - {homeroom.grade}</p>
                            </div>
                            <div className="flex items-center mt-1">
                              <GraduationCap className="h-4 w-4 text-muted-foreground mr-1" />
                              <p className="text-sm text-muted-foreground">
                                Teacher: {getTeacherName(homeroom.teacherId)}
                              </p>
                            </div>
                            <p className="text-sm text-muted-foreground mt-1">
                              {getStudentsByHomeroom(homeroom.name).length} Students
                            </p>
                          </div>
                          <div className="flex gap-2">
                            <Dialog>
                              <DialogTrigger asChild>
                                <Button variant="outline" size="sm">Assign Teacher</Button>
                              </DialogTrigger>
                              <DialogContent>
                                <DialogHeader>
                                  <DialogTitle>Assign Teacher to {homeroom.name}</DialogTitle>
                                  <DialogDescription>
                                    Select a teacher to assign to this homeroom.
                                  </DialogDescription>
                                </DialogHeader>
                                <div className="grid gap-4 py-4">
                                  <div className="space-y-2">
                                    <Label htmlFor="teacher">Teacher</Label>
                                    <Select
                                      onValueChange={(value) => setAssignTeacherHomeroom({
                                        teacherId: parseInt(value),
                                        homeroomId: homeroom.id
                                      })}
                                    >
                                      <SelectTrigger id="teacher">
                                        <SelectValue placeholder="Select a teacher" />
                                      </SelectTrigger>
                                      <SelectContent>
                                        {teachers.map((teacher) => (
                                          <SelectItem 
                                            key={teacher.id} 
                                            value={teacher.id.toString()}
                                          >
                                            {teacher.name}
                                          </SelectItem>
                                        ))}
                                      </SelectContent>
                                    </Select>
                                  </div>
                                </div>
                                <DialogFooter>
                                  <Button onClick={handleAssignTeacherToHomeroom}>
                                    Assign Teacher
                                  </Button>
                                </DialogFooter>
                              </DialogContent>
                            </Dialog>
                            <Button variant="outline" size="sm">View Students</Button>
                          </div>
                        </div>
                      ))
                    ) : (
                      <div className="text-center p-8">
                        <BookOpen className="h-12 w-12 mx-auto mb-4 text-muted-foreground" />
                        <p className="text-muted-foreground">No homerooms added yet</p>
                      </div>
                    )}
                  </div>
                </CardContent>
              </Card>
              
              <Card className="lg:col-span-2">
                <CardHeader>
                  <CardTitle>Add New Homeroom</CardTitle>
                  <CardDescription>Create a new homeroom for your school</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="space-y-2">
                      <Label htmlFor="homeroomName">Homeroom Name</Label>
                      <Input 
                        id="homeroomName" 
                        placeholder="e.g. 5A"
                        value={newHomeroom.name}
                        onChange={(e) => setNewHomeroom({...newHomeroom, name: e.target.value})}
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="grade">Grade Level</Label>
                      <Input 
                        id="grade" 
                        placeholder="e.g. 5th Grade"
                        value={newHomeroom.grade}
                        onChange={(e) => setNewHomeroom({...newHomeroom, grade: e.target.value})}
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="homeroomTeacher">Assign Teacher (Optional)</Label>
                      <Select
                        onValueChange={(value) => setNewHomeroom({
                          ...newHomeroom, 
                          teacherId: parseInt(value)
                        })}
                      >
                        <SelectTrigger id="homeroomTeacher">
                          <SelectValue placeholder="Select a teacher" />
                        </SelectTrigger>
                        <SelectContent>
                          {teachers.map((teacher) => (
                            <SelectItem 
                              key={teacher.id} 
                              value={teacher.id.toString()}
                            >
                              {teacher.name}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    </div>
                  </div>
                </CardContent>
                <CardFooter>
                  <Button onClick={handleAddHomeroom} className="w-full gap-2">
                    <Plus className="h-4 w-4" />
                    Add Homeroom
                  </Button>
                </CardFooter>
              </Card>
            </div>
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
