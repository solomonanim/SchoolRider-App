
import React, { useEffect, useState } from "react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Menu } from "lucide-react";
import { ThemeButton } from "../ui/ThemeButton";

const navItems = [
  { title: "Features", href: "#features" },
  { title: "Showcase", href: "#showcase" },
  { title: "Testimonials", href: "#testimonials" },
  { title: "About", href: "#about" },
  { title: "Contact", href: "#contact" },
];

export const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header 
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300 px-6 lg:px-10",
        isScrolled 
          ? "py-3 blur-backdrop shadow-sm" 
          : "py-6 bg-transparent"
      )}
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <a href="/" className="flex items-center gap-2">
          <div className="relative w-8 h-8 rounded-md bg-foreground">
            <div className="absolute -right-1 -top-1 w-4 h-4 rounded-full bg-accent-foreground" />
          </div>
          <span className="font-display font-semibold text-lg md:text-xl">Grove</span>
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-1">
          {navItems.map((item) => (
            <a
              key={item.title}
              href={item.href}
              className="px-4 py-2 text-sm text-foreground/80 hover:text-foreground transition-colors rounded-md hover:bg-accent/50"
            >
              {item.title}
            </a>
          ))}
          <div className="ml-2">
            <ThemeButton />
          </div>
          <Button className="ml-4 shadow-sm">Download</Button>
        </nav>

        {/* Mobile Navigation Toggle */}
        <div className="flex items-center gap-4 md:hidden">
          <ThemeButton />
          <Button 
            variant="ghost" 
            size="icon" 
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            <Menu className="h-5 w-5" />
          </Button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div 
        className={cn(
          "fixed inset-x-0 top-[57px] p-6 bg-background border-b md:hidden transition-all duration-300 ease-in-out z-40",
          isMenuOpen ? "translate-y-0 opacity-100" : "-translate-y-full opacity-0 pointer-events-none"
        )}
      >
        <nav className="flex flex-col gap-3">
          {navItems.map((item) => (
            <a
              key={item.title}
              href={item.href}
              className="px-4 py-3 text-foreground/80 hover:text-foreground transition-colors rounded-md hover:bg-accent"
              onClick={() => setIsMenuOpen(false)}
            >
              {item.title}
            </a>
          ))}
          <Button className="mt-4 w-full">Download</Button>
        </nav>
      </div>
    </header>
  );
};
