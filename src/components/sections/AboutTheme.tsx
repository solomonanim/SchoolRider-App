
import React from "react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { 
  Download, 
  Zap, 
  Code, 
  Lock, 
  Smartphone, 
  Globe, 
  Database, 
  PieChart
} from "lucide-react";

export const AboutTheme = () => {
  return (
    <section id="about" className="py-24 bg-secondary/50">
      <div className="container px-4 sm:px-6">
        <div className="text-center mb-16">
          <Badge variant="outline" className="mb-4">WordPress Theme</Badge>
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">
            The Complete School Dismissal Solution
          </h2>
          <p className="text-muted-foreground text-lg max-w-3xl mx-auto">
            SchoolRider is more than just a WordPress theme. It's a complete dismissal management system packaged as a theme and plugin bundle.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <div className="space-y-6">
              <div className="flex gap-4 items-start">
                <div className="bg-primary/10 p-3 rounded-lg text-primary">
                  <Zap className="h-6 w-6" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-1">Easy Installation</h3>
                  <p className="text-muted-foreground">
                    Install the theme and plugins with a few clicks. Get up and running in minutes.
                  </p>
                </div>
              </div>
              
              <div className="flex gap-4 items-start">
                <div className="bg-primary/10 p-3 rounded-lg text-primary">
                  <Code className="h-6 w-6" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-1">Developer Friendly</h3>
                  <p className="text-muted-foreground">
                    Clean, well-documented code that can be customized to your specific needs.
                  </p>
                </div>
              </div>
              
              <div className="flex gap-4 items-start">
                <div className="bg-primary/10 p-3 rounded-lg text-primary">
                  <Lock className="h-6 w-6" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-1">Security Focused</h3>
                  <p className="text-muted-foreground">
                    Built with security best practices to protect student and parent data.
                  </p>
                </div>
              </div>
              
              <div className="flex gap-4 items-start">
                <div className="bg-primary/10 p-3 rounded-lg text-primary">
                  <Smartphone className="h-6 w-6" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-1">Mobile Optimized</h3>
                  <p className="text-muted-foreground">
                    Beautiful, responsive design works perfectly on all devices.
                  </p>
                </div>
              </div>
            </div>
            
            <Button size="lg" className="mt-8 gap-2">
              Download SchoolRider
              <Download className="h-5 w-5" />
            </Button>
          </div>
          
          <div className="bg-card rounded-xl border p-8 shadow-sm">
            <h3 className="text-2xl font-bold mb-6">What's Included:</h3>
            
            <div className="space-y-6">
              <div className="flex items-center gap-3">
                <Globe className="h-5 w-5 text-primary" />
                <div>
                  <h4 className="font-medium">WordPress Theme</h4>
                  <p className="text-sm text-muted-foreground">Fully responsive, customizable WordPress theme</p>
                </div>
              </div>
              
              <div className="flex items-center gap-3">
                <Database className="h-5 w-5 text-primary" />
                <div>
                  <h4 className="font-medium">SchoolRider Core Plugin</h4>
                  <p className="text-sm text-muted-foreground">Main functionality including QR code system</p>
                </div>
              </div>
              
              <div className="flex items-center gap-3">
                <Smartphone className="h-5 w-5 text-primary" />
                <div>
                  <h4 className="font-medium">Mobile App Integration</h4>
                  <p className="text-sm text-muted-foreground">Connect with our SchoolRider mobile app</p>
                </div>
              </div>
              
              <div className="flex items-center gap-3">
                <PieChart className="h-5 w-5 text-primary" />
                <div>
                  <h4 className="font-medium">Analytics Plugin</h4>
                  <p className="text-sm text-muted-foreground">Track and analyze dismissal efficiency metrics</p>
                </div>
              </div>
            </div>
            
            <div className="mt-8 pt-6 border-t">
              <div className="flex items-center justify-between mb-2">
                <span className="font-medium">SchoolRider Core</span>
                <Badge>Free</Badge>
              </div>
              <div className="flex items-center justify-between mb-2">
                <span className="font-medium">Premium Plugins Bundle</span>
                <span className="text-lg font-bold">$99/year</span>
              </div>
              <p className="text-sm text-muted-foreground mt-4">
                Includes 1 year of updates and premium support
              </p>
            </div>
          </div>
        </div>
        
        <div className="mt-20 text-center">
          <h3 className="text-2xl font-bold mb-4">Compatible with Popular WordPress Plugins</h3>
          <div className="flex flex-wrap justify-center gap-8 mt-8">
            <div className="flex items-center justify-center bg-card p-4 rounded-lg border w-40 h-20">
              <span className="font-medium">WooCommerce</span>
            </div>
            <div className="flex items-center justify-center bg-card p-4 rounded-lg border w-40 h-20">
              <span className="font-medium">Elementor</span>
            </div>
            <div className="flex items-center justify-center bg-card p-4 rounded-lg border w-40 h-20">
              <span className="font-medium">Contact Form 7</span>
            </div>
            <div className="flex items-center justify-center bg-card p-4 rounded-lg border w-40 h-20">
              <span className="font-medium">Yoast SEO</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
