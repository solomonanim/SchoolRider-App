
import React from "react";
import { Button } from "@/components/ui/button";
import { Github, Twitter, Instagram, Linkedin } from "lucide-react";
import { Link } from "react-router-dom";

export const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="w-full bg-accent py-16 border-t pb-24 md:pb-16">
      <div className="container grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3 max-w-[1300px] mx-auto">
        <div className="space-y-4">
          <div className="flex items-center gap-2">
            <div className="relative w-8 h-8 rounded-md bg-foreground">
              <div className="absolute -right-1 -top-1 w-4 h-4 rounded-full bg-accent-foreground" />
            </div>
            <span className="font-display font-semibold text-xl">SchoolRider</span>
          </div>
          <p className="text-muted-foreground text-sm max-w-xs">
            A comprehensive solution for safe and efficient school dismissal processes.
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
            <li>
              <Link to="/docs" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                Documentation
              </Link>
            </li>
            <li>
              <Link to="/tutorials" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                Tutorials
              </Link>
            </li>
            <li>
              <Link to="/contact" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                Support
              </Link>
            </li>
            <li>
              <Link to="/faq" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                FAQ
              </Link>
            </li>
            <li>
              <Link to="/changelog" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                Changelog
              </Link>
            </li>
          </ul>
        </div>
        
        <div>
          <h3 className="font-medium text-sm uppercase tracking-wider mb-4">Company</h3>
          <ul className="space-y-3">
            <li>
              <Link to="/about" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                About us
              </Link>
            </li>
            <li>
              <Link to="/blog" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                Blog
              </Link>
            </li>
            <li>
              <Link to="/contact" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                Careers
              </Link>
            </li>
            <li>
              <Link to="/contact" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                Press
              </Link>
            </li>
            <li>
              <Link to="/contact" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                Partners
              </Link>
            </li>
          </ul>
        </div>
      </div>
      
      <div className="container mt-12 pt-6 border-t flex flex-col md:flex-row justify-between items-center gap-4 max-w-[1300px] mx-auto">
        <p className="text-sm text-muted-foreground">
          © {currentYear} SchoolRider by <a href="https://solangigs.com" className="hover:text-primary transition-colors">Solangigs</a>. All rights reserved.
        </p>
        <div className="flex gap-6">
          <Link to="/terms-conditions" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
            Terms
          </Link>
          <Link to="/privacy" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
            Privacy
          </Link>
          <Link to="/privacy" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
            Cookies
          </Link>
        </div>
      </div>
    </footer>
  );
};
