
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
import { Car, School, User, Lock, GraduationCap } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import { UserRole, useAppContext } from "@/context/AppContext";

interface SchoolRiderLoginPageProps {
  onLogin: (role: UserRole) => void;
}

export const SchoolRiderLoginPage: React.FC<SchoolRiderLoginPageProps> = ({ onLogin }) => {
  const [userType, setUserType] = useState<UserRole>(UserRole.PARENT);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const { toast } = useToast();
  const { login } = useAppContext();
  
  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    
    try {
      await login(email, password, userType);
      toast({
        title: "Login Successful",
        description: `You have logged in as a ${userType}`,
      });
      onLogin(userType);
    } catch (error) {
      toast({
        title: "Login Failed",
        description: "Invalid credentials. Try parent@example.com with any password.",
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
          <div className="mx-auto w-16 h-16 mb-4 bg-primary rounded-2xl flex items-center justify-center">
            <Car className="h-8 w-8 text-white" />
          </div>
          <h1 className="text-3xl font-bold">SchoolRider</h1>
          <p className="text-muted-foreground">Safe & Efficient School Dismissal System</p>
        </div>
        
        <Card className="border-t-4 border-t-primary shadow-lg">
          <CardHeader>
            <CardTitle>Welcome Back</CardTitle>
            <CardDescription>
              Login to access your SchoolRider dashboard
            </CardDescription>
          </CardHeader>
          
          <CardContent>
            <Tabs defaultValue={UserRole.PARENT} onValueChange={(value) => setUserType(value as UserRole)}>
              <TabsList className="grid grid-cols-4 mb-6">
                <TabsTrigger value={UserRole.PARENT} className="flex items-center gap-2">
                  <User className="h-4 w-4" />
                  <span className="hidden sm:inline">Parent</span>
                </TabsTrigger>
                <TabsTrigger value={UserRole.SCHOOL} className="flex items-center gap-2">
                  <School className="h-4 w-4" />
                  <span className="hidden sm:inline">School</span>
                </TabsTrigger>
                <TabsTrigger value={UserRole.TEACHER} className="flex items-center gap-2">
                  <GraduationCap className="h-4 w-4" />
                  <span className="hidden sm:inline">Teacher</span>
                </TabsTrigger>
                <TabsTrigger value={UserRole.RIDER} className="flex items-center gap-2">
                  <Car className="h-4 w-4" />
                  <span className="hidden sm:inline">Rider</span>
                </TabsTrigger>
              </TabsList>
              
              {[UserRole.PARENT, UserRole.SCHOOL, UserRole.TEACHER, UserRole.RIDER].map((type) => (
                <TabsContent key={type} value={type}>
                  <form onSubmit={handleLogin} className="space-y-4">
                    <div className="space-y-2">
                      <Label htmlFor={`${type}-email`}>Email</Label>
                      <Input 
                        id={`${type}-email`} 
                        type="email" 
                        placeholder={type === UserRole.PARENT ? "parent@example.com" : `${type}@example.com`}
                        required 
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                      />
                    </div>
                    <div className="space-y-2">
                      <div className="flex justify-between">
                        <Label htmlFor={`${type}-password`}>Password</Label>
                        <a 
                          href="#" 
                          className="text-xs text-primary hover:underline"
                        >
                          Forgot password?
                        </a>
                      </div>
                      <Input 
                        id={`${type}-password`} 
                        type="password" 
                        required 
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                      />
                    </div>
                    <Button type="submit" className="w-full" disabled={isLoading}>
                      {isLoading ? (
                        <span className="flex items-center gap-2">
                          <span className="h-4 w-4 animate-spin rounded-full border-2 border-current border-t-transparent" />
                          Signing In...
                        </span>
                      ) : (
                        <span className="flex items-center gap-2">
                          <Lock className="h-4 w-4" /> Sign In
                        </span>
                      )}
                    </Button>
                  </form>
                </TabsContent>
              ))}
            </Tabs>
            
            <div className="mt-4 p-3 bg-muted/50 rounded-md text-sm">
              <p className="font-medium">Demo Login Credentials:</p>
              <p><span className="text-muted-foreground">Parent:</span> parent@example.com</p>
              <p><span className="text-muted-foreground">School:</span> school@example.com</p>
              <p><span className="text-muted-foreground">Teacher:</span> teacher@example.com</p>
              <p><span className="text-muted-foreground">Rider:</span> rider@example.com</p>
              <p className="text-xs text-muted-foreground mt-1">Use any password for demo purposes</p>
            </div>
          </CardContent>
          
          <CardFooter className="flex flex-col space-y-4">
            <div className="text-center w-full">
              <p className="text-sm text-muted-foreground">
                Don't have an account?{" "}
                <a href="#" className="text-primary hover:underline">
                  Sign up
                </a>
              </p>
            </div>
            <div className="text-center w-full pt-2 border-t">
              <p className="text-xs text-muted-foreground">
                SchoolRider - Safe Transportation Management System
              </p>
            </div>
          </CardFooter>
        </Card>
      </div>
    </div>
  );
};
