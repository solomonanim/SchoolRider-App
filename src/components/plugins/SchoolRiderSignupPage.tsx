import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/components/ui/tabs";
import { Car, School as SchoolIcon, User, GraduationCap, Plus, Trash2 } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import { UserRole, useAppContext, Child } from "@/context/AppContext";
import { CountrySelect } from "@/components/ui/country-select";
import { SchoolSelect } from "@/components/ui/school-select";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Link } from "react-router-dom";

interface SchoolRiderSignupPageProps {
  onLogin: (role: UserRole) => void;
  onSwitchToLogin: () => void;
}

export const SchoolRiderSignupPage: React.FC<SchoolRiderSignupPageProps> = ({ 
  onLogin, 
  onSwitchToLogin 
}) => {
  const [userType, setUserType] = useState<UserRole>(UserRole.PARENT);
  const { toast } = useToast();
  const { registerSchool, registerTeacher, registerParent } = useAppContext();
  
  // School form state
  const [schoolForm, setSchoolForm] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
    country: "us",
    address: "",
    phone: "",
    website: "",
  });

  // Teacher form state
  const [teacherForm, setTeacherForm] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
    country: "us",
    schoolId: "",
    phone: "",
    subject: "",
    grade: "",
  });

  // Parent form state
  const [parentForm, setParentForm] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
    country: "us",
    phone: "",
    address: "",
  });

  // Children state for parent signup
  const [children, setChildren] = useState<Array<{
    name: string;
    grade: string;
    schoolId: string;
    id: number;
  }>>([{ name: "", grade: "", schoolId: "", id: Date.now() }]);

  const [isLoading, setIsLoading] = useState(false);
  const [acceptTerms, setAcceptTerms] = useState(false);

  const handleSchoolFormChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setSchoolForm(prev => ({ ...prev, [name]: value }));
  };

  const handleTeacherFormChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setTeacherForm(prev => ({ ...prev, [name]: value }));
  };

  const handleParentFormChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setParentForm(prev => ({ ...prev, [name]: value }));
  };

  const handleChildChange = (id: number, field: string, value: string) => {
    setChildren(prevChildren => 
      prevChildren.map(child => 
        child.id === id ? { ...child, [field]: value } : child
      )
    );
  };

  const addChild = () => {
    setChildren(prev => [...prev, { name: "", grade: "", schoolId: "", id: Date.now() }]);
  };

  const removeChild = (id: number) => {
    if (children.length > 1) {
      setChildren(prev => prev.filter(child => child.id !== id));
    } else {
      toast({
        title: "Cannot Remove",
        description: "At least one child is required",
        variant: "destructive",
      });
    }
  };

  const handleSchoolSignup = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    
    // Validation
    if (schoolForm.password !== schoolForm.confirmPassword) {
      toast({
        title: "Passwords do not match",
        description: "Please ensure both passwords are the same",
        variant: "destructive",
      });
      setIsLoading(false);
      return;
    }

    if (!acceptTerms) {
      toast({
        title: "Terms and Privacy Policy",
        description: "You must accept the Terms and Privacy Policy to continue",
        variant: "destructive",
      });
      setIsLoading(false);
      return;
    }

    try {
      await registerSchool({
        name: schoolForm.name,
        email: schoolForm.email,
        password: schoolForm.password,
        country: schoolForm.country,
        address: schoolForm.address,
        phone: schoolForm.phone,
        website: schoolForm.website,
      });
      
      toast({
        title: "Registration Successful",
        description: "Your school account has been created successfully",
      });
      
      onLogin(UserRole.SCHOOL);
    } catch (error) {
      toast({
        title: "Registration Failed",
        description: "An error occurred during registration",
        variant: "destructive",
      });
    } finally {
      setIsLoading(false);
    }
  };

  const handleTeacherSignup = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    
    // Validation
    if (teacherForm.password !== teacherForm.confirmPassword) {
      toast({
        title: "Passwords do not match",
        description: "Please ensure both passwords are the same",
        variant: "destructive",
      });
      setIsLoading(false);
      return;
    }

    if (!teacherForm.schoolId) {
      toast({
        title: "School Required",
        description: "Please select a school",
        variant: "destructive",
      });
      setIsLoading(false);
      return;
    }

    if (!acceptTerms) {
      toast({
        title: "Terms and Privacy Policy",
        description: "You must accept the Terms and Privacy Policy to continue",
        variant: "destructive",
      });
      setIsLoading(false);
      return;
    }

    try {
      await registerTeacher({
        name: teacherForm.name,
        email: teacherForm.email,
        password: teacherForm.password,
        country: teacherForm.country,
        schoolId: parseInt(teacherForm.schoolId),
        phone: teacherForm.phone,
        subject: teacherForm.subject,
        grade: teacherForm.grade,
      });
      
      toast({
        title: "Registration Successful",
        description: "Your teacher account has been created successfully",
      });
      
      onLogin(UserRole.TEACHER);
    } catch (error) {
      toast({
        title: "Registration Failed",
        description: "An error occurred during registration",
        variant: "destructive",
      });
    } finally {
      setIsLoading(false);
    }
  };

  const handleParentSignup = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    
    // Validation
    if (parentForm.password !== parentForm.confirmPassword) {
      toast({
        title: "Passwords do not match",
        description: "Please ensure both passwords are the same",
        variant: "destructive",
      });
      setIsLoading(false);
      return;
    }

    // Validate children
    const invalidChildren = children.filter(child => !child.name || !child.grade || !child.schoolId);
    if (invalidChildren.length > 0) {
      toast({
        title: "Incomplete Child Information",
        description: "Please complete all children details",
        variant: "destructive",
      });
      setIsLoading(false);
      return;
    }

    if (!acceptTerms) {
      toast({
        title: "Terms and Privacy Policy",
        description: "You must accept the Terms and Privacy Policy to continue",
        variant: "destructive",
      });
      setIsLoading(false);
      return;
    }

    try {
      await registerParent({
        name: parentForm.name,
        email: parentForm.email,
        password: parentForm.password,
        country: parentForm.country,
        phone: parentForm.phone,
        address: parentForm.address,
        children: children.map(child => ({
          name: child.name,
          grade: child.grade,
          schoolId: parseInt(child.schoolId),
        })),
      });
      
      toast({
        title: "Registration Successful",
        description: "Your parent account has been created successfully",
      });
      
      onLogin(UserRole.PARENT);
    } catch (error) {
      toast({
        title: "Registration Failed",
        description: "An error occurred during registration",
        variant: "destructive",
      });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-primary/5 to-background p-4">
      <div className="w-full max-w-md">
        <div className="text-center mb-8">
          <Link to="/">
            <div className="mx-auto w-16 h-16 mb-4 bg-primary rounded-2xl flex items-center justify-center cursor-pointer">
              <Car className="h-8 w-8 text-white" />
            </div>
            <h1 className="text-3xl font-bold">SchoolRider</h1>
            <p className="text-muted-foreground">Safe & Efficient School Dismissal System</p>
          </Link>
        </div>
        
        <Card className="border-t-4 border-t-primary shadow-lg">
          <CardHeader>
            <CardTitle>Create an Account</CardTitle>
            <CardDescription>
              Sign up to access SchoolRider's features
            </CardDescription>
          </CardHeader>
          
          <CardContent>
            <Tabs defaultValue={UserRole.PARENT} onValueChange={(value) => setUserType(value as UserRole)}>
              <TabsList className="grid grid-cols-3 mb-6">
                <TabsTrigger value={UserRole.PARENT} className="flex items-center gap-2">
                  <User className="h-4 w-4" />
                  <span className="hidden sm:inline">Parent</span>
                </TabsTrigger>
                <TabsTrigger value={UserRole.SCHOOL} className="flex items-center gap-2">
                  <SchoolIcon className="h-4 w-4" />
                  <span className="hidden sm:inline">School</span>
                </TabsTrigger>
                <TabsTrigger value={UserRole.TEACHER} className="flex items-center gap-2">
                  <GraduationCap className="h-4 w-4" />
                  <span className="hidden sm:inline">Teacher</span>
                </TabsTrigger>
              </TabsList>
              
              {/* School Registration Form */}
              <TabsContent value={UserRole.SCHOOL}>
                <form onSubmit={handleSchoolSignup} className="space-y-4">
                  <div className="space-y-2">
                    <Label htmlFor="school-name">School Name</Label>
                    <Input 
                      id="school-name" 
                      name="name"
                      value={schoolForm.name}
                      onChange={handleSchoolFormChange}
                      placeholder="Enter school name" 
                      required 
                    />
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="school-email">Email</Label>
                    <Input 
                      id="school-email" 
                      name="email"
                      type="email" 
                      value={schoolForm.email}
                      onChange={handleSchoolFormChange}
                      placeholder="school@example.com" 
                      required 
                    />
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="school-password">Password</Label>
                      <Input 
                        id="school-password" 
                        name="password"
                        type="password" 
                        value={schoolForm.password}
                        onChange={handleSchoolFormChange}
                        required 
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="school-confirm-password">Confirm Password</Label>
                      <Input 
                        id="school-confirm-password" 
                        name="confirmPassword"
                        type="password" 
                        value={schoolForm.confirmPassword}
                        onChange={handleSchoolFormChange}
                        required 
                      />
                    </div>
                  </div>
                  
                  <CountrySelect
                    label="Country"
                    value={schoolForm.country}
                    onValueChange={(value) => setSchoolForm(prev => ({ ...prev, country: value }))}
                  />
                  
                  <div className="space-y-2">
                    <Label htmlFor="school-address">Address</Label>
                    <Input 
                      id="school-address" 
                      name="address"
                      value={schoolForm.address}
                      onChange={handleSchoolFormChange}
                      placeholder="School address" 
                      required 
                    />
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="school-phone">Phone Number</Label>
                      <Input 
                        id="school-phone" 
                        name="phone"
                        value={schoolForm.phone}
                        onChange={handleSchoolFormChange}
                        placeholder="Phone number" 
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="school-website">Website</Label>
                      <Input 
                        id="school-website" 
                        name="website"
                        value={schoolForm.website}
                        onChange={handleSchoolFormChange}
                        placeholder="https://school.edu" 
                      />
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-2 pt-2">
                    <input
                      type="checkbox"
                      id="school-terms"
                      className="mt-0.5"
                      checked={acceptTerms}
                      onChange={(e) => setAcceptTerms(e.target.checked)}
                      required
                    />
                    <label htmlFor="school-terms" className="text-xs text-muted-foreground">
                      By creating an account, you agree to our{" "}
                      <a href="/terms" className="text-primary hover:underline" target="_blank">Terms of Service</a> and{" "}
                      <a href="/privacy" className="text-primary hover:underline" target="_blank">Privacy Policy</a>
                    </label>
                  </div>
                  
                  <Button type="submit" className="w-full" disabled={isLoading}>
                    {isLoading ? (
                      <span className="flex items-center gap-2">
                        <span className="h-4 w-4 animate-spin rounded-full border-2 border-current border-t-transparent" />
                        Creating Account...
                      </span>
                    ) : (
                      "Create School Account"
                    )}
                  </Button>
                </form>
              </TabsContent>
              
              {/* Teacher Registration Form */}
              <TabsContent value={UserRole.TEACHER}>
                <form onSubmit={handleTeacherSignup} className="space-y-4">
                  <div className="space-y-2">
                    <Label htmlFor="teacher-name">Full Name</Label>
                    <Input 
                      id="teacher-name" 
                      name="name"
                      value={teacherForm.name}
                      onChange={handleTeacherFormChange}
                      placeholder="Enter your full name" 
                      required 
                    />
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="teacher-email">Email</Label>
                    <Input 
                      id="teacher-email" 
                      name="email"
                      type="email" 
                      value={teacherForm.email}
                      onChange={handleTeacherFormChange}
                      placeholder="teacher@example.com" 
                      required 
                    />
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="teacher-password">Password</Label>
                      <Input 
                        id="teacher-password" 
                        name="password"
                        type="password" 
                        value={teacherForm.password}
                        onChange={handleTeacherFormChange}
                        required 
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="teacher-confirm-password">Confirm Password</Label>
                      <Input 
                        id="teacher-confirm-password" 
                        name="confirmPassword"
                        type="password" 
                        value={teacherForm.confirmPassword}
                        onChange={handleTeacherFormChange}
                        required 
                      />
                    </div>
                  </div>
                  
                  <CountrySelect
                    label="Country"
                    value={teacherForm.country}
                    onValueChange={(value) => setTeacherForm(prev => ({ ...prev, country: value }))}
                  />
                  
                  <SchoolSelect
                    label="School"
                    value={teacherForm.schoolId}
                    onValueChange={(value) => setTeacherForm(prev => ({ ...prev, schoolId: value }))}
                    country={teacherForm.country}
                  />
                  
                  <div className="space-y-2">
                    <Label htmlFor="teacher-phone">Phone Number</Label>
                    <Input 
                      id="teacher-phone" 
                      name="phone"
                      value={teacherForm.phone}
                      onChange={handleTeacherFormChange}
                      placeholder="Phone number" 
                    />
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="teacher-subject">Subject/Area</Label>
                      <Input 
                        id="teacher-subject" 
                        name="subject"
                        value={teacherForm.subject}
                        onChange={handleTeacherFormChange}
                        placeholder="e.g. Mathematics" 
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="teacher-grade">Grade Level</Label>
                      <Select 
                        value={teacherForm.grade} 
                        onValueChange={(value) => setTeacherForm(prev => ({ ...prev, grade: value }))}
                      >
                        <SelectTrigger id="teacher-grade">
                          <SelectValue placeholder="Select Grade" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="K">Kindergarten</SelectItem>
                          <SelectItem value="1">1st Grade</SelectItem>
                          <SelectItem value="2">2nd Grade</SelectItem>
                          <SelectItem value="3">3rd Grade</SelectItem>
                          <SelectItem value="4">4th Grade</SelectItem>
                          <SelectItem value="5">5th Grade</SelectItem>
                          <SelectItem value="6">6th Grade</SelectItem>
                          <SelectItem value="7">7th Grade</SelectItem>
                          <SelectItem value="8">8th Grade</SelectItem>
                          <SelectItem value="9">9th Grade</SelectItem>
                          <SelectItem value="10">10th Grade</SelectItem>
                          <SelectItem value="11">11th Grade</SelectItem>
                          <SelectItem value="12">12th Grade</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-2 pt-2">
                    <input
                      type="checkbox"
                      id="teacher-terms"
                      className="mt-0.5"
                      checked={acceptTerms}
                      onChange={(e) => setAcceptTerms(e.target.checked)}
                      required
                    />
                    <label htmlFor="teacher-terms" className="text-xs text-muted-foreground">
                      By creating an account, you agree to our{" "}
                      <a href="/terms" className="text-primary hover:underline" target="_blank">Terms of Service</a> and{" "}
                      <a href="/privacy" className="text-primary hover:underline" target="_blank">Privacy Policy</a>
                    </label>
                  </div>
                  
                  <Button type="submit" className="w-full" disabled={isLoading}>
                    {isLoading ? (
                      <span className="flex items-center gap-2">
                        <span className="h-4 w-4 animate-spin rounded-full border-2 border-current border-t-transparent" />
                        Creating Account...
                      </span>
                    ) : (
                      "Create Teacher Account"
                    )}
                  </Button>
                </form>
              </TabsContent>
              
              {/* Parent Registration Form */}
              <TabsContent value={UserRole.PARENT}>
                <form onSubmit={handleParentSignup} className="space-y-4">
                  <div className="space-y-2">
                    <Label htmlFor="parent-name">Full Name</Label>
                    <Input 
                      id="parent-name" 
                      name="name"
                      value={parentForm.name}
                      onChange={handleParentFormChange}
                      placeholder="Enter your full name" 
                      required 
                    />
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="parent-email">Email</Label>
                    <Input 
                      id="parent-email" 
                      name="email"
                      type="email" 
                      value={parentForm.email}
                      onChange={handleParentFormChange}
                      placeholder="parent@example.com" 
                      required 
                    />
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="parent-password">Password</Label>
                      <Input 
                        id="parent-password" 
                        name="password"
                        type="password" 
                        value={parentForm.password}
                        onChange={handleParentFormChange}
                        required 
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="parent-confirm-password">Confirm Password</Label>
                      <Input 
                        id="parent-confirm-password" 
                        name="confirmPassword"
                        type="password" 
                        value={parentForm.confirmPassword}
                        onChange={handleParentFormChange}
                        required 
                      />
                    </div>
                  </div>
                  
                  <CountrySelect
                    label="Country"
                    value={parentForm.country}
                    onValueChange={(value) => setParentForm(prev => ({ ...prev, country: value }))}
                  />
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="parent-phone">Phone Number</Label>
                      <Input 
                        id="parent-phone" 
                        name="phone"
                        value={parentForm.phone}
                        onChange={handleParentFormChange}
                        placeholder="Phone number" 
                        required
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="parent-address">Address</Label>
                      <Input 
                        id="parent-address" 
                        name="address"
                        value={parentForm.address}
                        onChange={handleParentFormChange}
                        placeholder="Home address" 
                        required
                      />
                    </div>
                  </div>
                  
                  <div className="border rounded-md p-4 space-y-4">
                    <div className="flex items-center justify-between">
                      <h3 className="font-medium">Children Information</h3>
                      <Button 
                        type="button" 
                        variant="outline" 
                        size="sm" 
                        onClick={addChild}
                        className="flex items-center gap-1"
                      >
                        <Plus className="h-4 w-4" /> Add Child
                      </Button>
                    </div>
                    
                    {children.map((child, index) => (
                      <div key={child.id} className="space-y-4 pt-2 border-t first:border-t-0 first:pt-0">
                        <div className="flex items-center justify-between">
                          <h4 className="text-sm font-medium">Child {index + 1}</h4>
                          <Button 
                            type="button" 
                            variant="ghost" 
                            size="sm" 
                            onClick={() => removeChild(child.id)}
                            className="h-8 w-8 p-0"
                          >
                            <Trash2 className="h-4 w-4 text-destructive" />
                          </Button>
                        </div>
                        
                        <div className="space-y-2">
                          <Label htmlFor={`child-name-${child.id}`}>Child's Name</Label>
                          <Input 
                            id={`child-name-${child.id}`}
                            value={child.name}
                            onChange={(e) => handleChildChange(child.id, "name", e.target.value)}
                            placeholder="Child's full name" 
                            required 
                          />
                        </div>
                        
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                          <div className="space-y-2">
                            <Label htmlFor={`child-grade-${child.id}`}>Grade</Label>
                            <Select 
                              value={child.grade} 
                              onValueChange={(value) => handleChildChange(child.id, "grade", value)}
                            >
                              <SelectTrigger id={`child-grade-${child.id}`}>
                                <SelectValue placeholder="Select Grade" />
                              </SelectTrigger>
                              <SelectContent>
                                <SelectItem value="K">Kindergarten</SelectItem>
                                <SelectItem value="1">1st Grade</SelectItem>
                                <SelectItem value="2">2nd Grade</SelectItem>
                                <SelectItem value="3">3rd Grade</SelectItem>
                                <SelectItem value="4">4th Grade</SelectItem>
                                <SelectItem value="5">5th Grade</SelectItem>
                                <SelectItem value="6">6th Grade</SelectItem>
                                <SelectItem value="7">7th Grade</SelectItem>
                                <SelectItem value="8">8th Grade</SelectItem>
                                <SelectItem value="9">9th Grade</SelectItem>
                                <SelectItem value="10">10th Grade</SelectItem>
                                <SelectItem value="11">11th Grade</SelectItem>
                                <SelectItem value="12">12th Grade</SelectItem>
                              </SelectContent>
                            </Select>
                          </div>
                          
                          <SchoolSelect
                            label="School"
                            value={child.schoolId}
                            onValueChange={(value) => handleChildChange(child.id, "schoolId", value)}
                            country={parentForm.country}
                          />
                        </div>
                      </div>
                    ))}
                  </div>
                  
                  <div className="flex items-start space-x-2 pt-2">
                    <input
                      type="checkbox"
                      id="parent-terms"
                      className="mt-0.5"
                      checked={acceptTerms}
                      onChange={(e) => setAcceptTerms(e.target.checked)}
                      required
                    />
                    <label htmlFor="parent-terms" className="text-xs text-muted-foreground">
                      By creating an account, you agree to our{" "}
                      <a href="/terms" className="text-primary hover:underline" target="_blank">Terms of Service</a> and{" "}
                      <a href="/privacy" className="text-primary hover:underline" target="_blank">Privacy Policy</a>
                    </label>
                  </div>
                  
                  <Button type="submit" className="w-full" disabled={isLoading}>
                    {isLoading ? (
                      <span className="flex items-center gap-2">
                        <span className="h-4 w-4 animate-spin rounded-full border-2 border-current border-t-transparent" />
                        Creating Account...
                      </span>
                    ) : (
                      "Create Parent Account"
                    )}
                  </Button>
                </form>
              </TabsContent>
            </Tabs>
          </CardContent>
          
          <CardFooter className="flex flex-col space-y-4">
            <div className="text-center w-full">
              <p className="text-sm text-muted-foreground">
                Already have an account?{" "}
                <button 
                  type="button"
                  onClick={onSwitchToLogin}
                  className="text-primary hover:underline bg-transparent p-0 border-none cursor-pointer"
                >
                  Sign in
                </button>
              </p>
            </div>
          </CardFooter>
        </Card>
      </div>
    </div>
  );
};
