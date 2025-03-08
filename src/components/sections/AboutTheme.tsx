
import React from "react";
import { Button } from "@/components/ui/button";
import { Check, ArrowRight } from "lucide-react";

const features = [
  "One-click theme installation",
  "7 homepage variations",
  "Custom block patterns",
  "Global style variations",
  "WooCommerce compatibility",
  "Gutenberg optimized",
  "Detailed documentation",
  "Premium support",
  "Regular updates",
  "Developer friendly codebase"
];

export const AboutTheme = () => {
  return (
    <section id="about" className="py-24 bg-background overflow-hidden">
      <div className="container px-4 sm:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="order-2 lg:order-1">
            <p className="text-sm font-medium text-primary mb-2 tracking-wider uppercase">About Grove</p>
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-6">
              A WordPress theme built for the modern web
            </h2>
            <p className="text-muted-foreground text-lg mb-6">
              Grove is built with performance and usability in mind. We've carefully crafted each element to ensure your content looks stunning while maintaining blazing-fast load times.
            </p>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-4 mb-8">
              {features.map((feature, index) => (
                <div key={index} className="flex items-start gap-2">
                  <div className="h-5 w-5 rounded-full bg-primary/10 text-primary flex items-center justify-center shrink-0 mt-0.5">
                    <Check className="h-3 w-3" />
                  </div>
                  <span className="text-sm">{feature}</span>
                </div>
              ))}
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" className="group">
                Get Grove Today
                <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button variant="outline" size="lg">
                View Documentation
              </Button>
            </div>
          </div>
          
          <div className="order-1 lg:order-2 relative">
            <div className="relative rounded-xl overflow-hidden border shadow-lg">
              <div className="bg-accent/50 border-b px-4 py-2 flex items-center gap-2">
                <div className="flex gap-1.5">
                  <div className="w-3 h-3 rounded-full bg-red-400" />
                  <div className="w-3 h-3 rounded-full bg-yellow-400" />
                  <div className="w-3 h-3 rounded-full bg-green-400" />
                </div>
              </div>
              
              <div className="aspect-[4/3] bg-white dark:bg-gray-900 p-4 overflow-hidden">
                <div className="h-full rounded bg-gradient-to-br from-gray-50 to-white dark:from-gray-800 dark:to-gray-900 border overflow-hidden">
                  {/* Theme Preview - Simplified Layout */}
                  <div className="h-6 w-full bg-accent/30 rounded-t mt-4 mx-4" />
                  <div className="grid grid-cols-3 gap-4 p-4">
                    <div className="h-32 bg-accent/20 rounded-lg" />
                    <div className="h-32 bg-accent/10 rounded-lg" />
                    <div className="h-32 bg-accent/20 rounded-lg" />
                  </div>
                  <div className="h-16 mx-4 bg-accent/15 rounded-lg mb-4" />
                  <div className="h-24 mx-4 bg-accent/10 rounded-lg mb-4" />
                </div>
              </div>
            </div>
            
            {/* Design Elements */}
            <div className="absolute -z-10 -bottom-6 -right-6 w-32 h-32 bg-primary/5 rounded-full blur-2xl" />
            <div className="absolute -z-10 -top-6 -left-6 w-32 h-32 bg-blue-500/5 rounded-full blur-2xl" />
          </div>
        </div>
      </div>
    </section>
  );
};
