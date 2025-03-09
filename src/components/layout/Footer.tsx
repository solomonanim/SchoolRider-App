
import React from "react";
import { Button } from "@/components/ui/button";
import { Github, Twitter, Instagram, Linkedin } from "lucide-react";

export const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="w-full bg-accent py-16 border-t">
      <div className="container grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
        <div className="space-y-4">
          <div className="flex items-center gap-2">
            <div className="relative w-8 h-8 rounded-md bg-foreground">
              <div className="absolute -right-1 -top-1 w-4 h-4 rounded-full bg-accent-foreground" />
            </div>
            <span className="font-display font-semibold text-xl">SchoolRider</span>
          </div>
          <p className="text-muted-foreground text-sm max-w-xs">
            A comprehensive WordPress solution for safe and efficient school dismissal processes.
          </p>
          <div className="flex space-x-4">
            <Button variant="ghost" size="icon" className="rounded-full h-8 w-8">
              <Twitter className="h-4 w-4" />
              <span className="sr-only">Twitter</span>
            </Button>
            <Button variant="ghost" size="icon" className="rounded-full h-8 w-8">
              <Instagram className="h-4 w-4" />
              <span className="sr-only">Instagram</span>
            </Button>
            <Button variant="ghost" size="icon" className="rounded-full h-8 w-8">
              <Github className="h-4 w-4" />
              <span className="sr-only">GitHub</span>
            </Button>
            <Button variant="ghost" size="icon" className="rounded-full h-8 w-8">
              <Linkedin className="h-4 w-4" />
              <span className="sr-only">LinkedIn</span>
            </Button>
          </div>
        </div>
        
        <div>
          <h3 className="font-medium text-sm uppercase tracking-wider mb-4">Resources</h3>
          <ul className="space-y-3">
            {["Documentation", "Tutorials", "Support", "FAQ", "Changelog"].map((item) => (
              <li key={item}>
                <a 
                  href="#" 
                  className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                >
                  {item}
                </a>
              </li>
            ))}
          </ul>
        </div>
        
        <div>
          <h3 className="font-medium text-sm uppercase tracking-wider mb-4">Company</h3>
          <ul className="space-y-3">
            {["About us", "Blog", "Careers", "Press", "Partners"].map((item) => (
              <li key={item}>
                <a 
                  href="#" 
                  className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                >
                  {item}
                </a>
              </li>
            ))}
          </ul>
        </div>
        
        <div>
          <h3 className="font-medium text-sm uppercase tracking-wider mb-4">Subscribe</h3>
          <p className="text-sm text-muted-foreground mb-4">
            Get the latest updates and offers from our team.
          </p>
          <div className="flex space-x-2">
            <input 
              type="email" 
              placeholder="Your email" 
              className="rounded-md border border-border bg-white px-3 py-2 text-sm flex-1"
            />
            <Button size="sm" className="shrink-0">Subscribe</Button>
          </div>
        </div>
      </div>
      
      <div className="container mt-12 pt-6 border-t flex flex-col md:flex-row justify-between items-center gap-4">
        <p className="text-sm text-muted-foreground">
          © {currentYear} SchoolRider Theme by <a href="https://solangigs.com" className="hover:text-primary transition-colors">Solomon Anim (Solan)</a>. All rights reserved.
        </p>
        <div className="flex gap-6">
          <a href="#" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
            Terms
          </a>
          <a href="#" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
            Privacy
          </a>
          <a href="#" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
            Cookies
          </a>
        </div>
      </div>
    </footer>
  );
};
