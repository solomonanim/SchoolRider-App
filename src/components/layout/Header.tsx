import React, { useEffect, useState } from "react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Menu } from "lucide-react";
import { ThemeButton } from "../ui/ThemeButton";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";

const navItems = [
  { title: "About", href: "/about" },
  { title: "Contact", href: "/contact" },
  { title: "Blog", href: "/blog" },
  { title: "FAQ", href: "/faq" },
  { title: "Documentation", href: "/docs" },
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
        "fixed top-4 left-6 right-6 z-50 transition-all duration-300 rounded-xl px-6 lg:px-10 mx-auto max-w-[1300px]",
        isScrolled 
          ? "py-3 blur-backdrop shadow-md" 
          : "py-6 bg-transparent"
      )}
    >
      <div className="flex items-center justify-between">
        <Link to="/" className="flex items-center gap-2 group">
          <div className="relative w-8 h-8 rounded-md bg-foreground transition-transform group-hover:scale-110">
            <motion.div 
              className="absolute -right-1 -top-1 w-4 h-4 rounded-full bg-accent-foreground"
              animate={{ 
                scale: [1, 1.2, 1],
                opacity: [0.7, 1, 0.7] 
              }}
              transition={{ 
                repeat: Infinity,
                duration: 2,
                ease: "easeInOut"
              }}
            />
          </div>
          <span className="font-display font-semibold text-lg md:text-xl">SchoolRider</span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-1">
          {navItems.map((item) => (
            <Link
              key={item.title}
              to={item.href.startsWith('#') ? `/${item.href}` : item.href}
              className="px-4 py-2 text-sm text-foreground/80 hover:text-foreground transition-colors rounded-md hover:bg-accent/50"
            >
              {item.title}
            </Link>
          ))}
          <div className="ml-2">
            <ThemeButton />
          </div>
          <Link to="/app">
            <Button className="ml-4 shadow-sm">Login</Button>
          </Link>
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
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div 
            className="fixed inset-x-0 top-[70px] p-6 bg-background border-b md:hidden z-40 rounded-b-xl mx-6 shadow-lg"
            initial={{ y: -50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: -50, opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            <nav className="flex flex-col gap-3">
              {navItems.map((item) => (
                <Link
                  key={item.title}
                  to={item.href.startsWith('#') ? `/${item.href}` : item.href}
                  className="px-4 py-3 text-foreground/80 hover:text-foreground transition-colors rounded-md hover:bg-accent"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.title}
                </Link>
              ))}
              <Link to="/app" onClick={() => setIsMenuOpen(false)}>
                <Button className="mt-4 w-full">Login</Button>
              </Link>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};
