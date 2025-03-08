
import React from "react";
import { 
  Zap, 
  Paint, 
  Lightbulb, 
  Monitor, 
  SlidersHorizontal, 
  Search, 
  LayoutGrid, 
  Code,
  ArrowDownToLine
} from "lucide-react";
import { Button } from "@/components/ui/button";

const features = [
  {
    icon: <Zap className="h-5 w-5" />,
    title: "Lightning Fast",
    description: "Optimized for speed with minimal HTTP requests and efficient code."
  },
  {
    icon: <Paint className="h-5 w-5" />,
    title: "Customizable",
    description: "Easily adjust colors, fonts, and layouts to match your brand."
  },
  {
    icon: <Lightbulb className="h-5 w-5" />,
    title: "SEO Friendly",
    description: "Built with search engines in mind to help improve your rankings."
  },
  {
    icon: <Monitor className="h-5 w-5" />,
    title: "Responsive Design",
    description: "Looks perfect on every device, from mobile phones to desktops."
  },
  {
    icon: <SlidersHorizontal className="h-5 w-5" />,
    title: "Advanced Options",
    description: "Powerful theme settings that give you complete control."
  },
  {
    icon: <Search className="h-5 w-5" />,
    title: "RTL Support",
    description: "Full right-to-left language support for global audiences."
  },
  {
    icon: <LayoutGrid className="h-5 w-5" />,
    title: "Multiple Layouts",
    description: "Choose from various content layouts for different page types."
  },
  {
    icon: <Code className="h-5 w-5" />,
    title: "Developer Friendly",
    description: "Clean code with hooks and filters for easy customization."
  }
];

export const Features = () => {
  return (
    <section id="features" className="py-24 bg-white dark:bg-black">
      <div className="container px-4 sm:px-6">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <p className="text-sm font-medium text-primary mb-2 tracking-wider uppercase">Features</p>
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">
            Everything you need in a WordPress theme
          </h2>
          <p className="text-muted-foreground text-lg">
            Grove comes packed with features that make it the perfect choice for your next website.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div 
              key={index} 
              className="group p-6 border rounded-xl transition-all hover:shadow-md bg-background"
            >
              <div className="h-10 w-10 rounded-lg bg-primary/10 text-primary flex items-center justify-center mb-4 group-hover:bg-primary group-hover:text-white transition-colors">
                {feature.icon}
              </div>
              <h3 className="font-semibold text-lg mb-2">{feature.title}</h3>
              <p className="text-muted-foreground text-sm">{feature.description}</p>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <Button 
            variant="outline" 
            size="lg" 
            className="group"
          >
            <ArrowDownToLine className="mr-2 h-4 w-4 group-hover:animate-bounce" />
            Download Grove Theme
          </Button>
        </div>
      </div>
    </section>
  );
};
