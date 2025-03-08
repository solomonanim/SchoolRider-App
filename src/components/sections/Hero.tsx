
import React from "react";
import { Button } from "@/components/ui/button";
import { ArrowRight, Star } from "lucide-react";

export const Hero = () => {
  return (
    <section className="relative pt-28 pb-20 md:pt-36 md:pb-32 overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute right-1/4 top-1/3 w-72 h-72 bg-primary/5 rounded-full blur-3xl" />
        <div className="absolute left-1/4 bottom-1/4 w-80 h-80 bg-blue-500/5 rounded-full blur-3xl" />
      </div>
      
      <div className="container px-4 sm:px-6 max-w-6xl">
        <div className="text-center space-y-8 max-w-3xl mx-auto">
          {/* Badge */}
          <div 
            className="animate-fade-in inline-flex items-center gap-2 bg-accent px-3 py-1 rounded-full text-sm border border-border shadow-sm mx-auto" 
          >
            <div className="flex items-center">
              {[1, 2, 3, 4, 5].map((i) => (
                <Star key={i} size={12} className="fill-primary text-primary" />
              ))}
            </div>
            <span className="text-xs font-medium">
              5.0 rating on WordPress.org
            </span>
          </div>
          
          {/* Heading */}
          <h1 className="animate-fade-up text-balance text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight">
            Minimalist WordPress Theme 
            <span className="text-gradient bg-gradient-to-r from-primary via-primary to-primary/70"> for Creators</span>
          </h1>
          
          {/* Description */}
          <p className="animate-fade-up animate-delay-200 text-muted-foreground text-lg md:text-xl max-w-2xl mx-auto">
            A premium WordPress theme crafted for bloggers, photographers, and creators. Fast, beautiful, and designed to showcase your content with style.
          </p>
          
          {/* CTA Buttons */}
          <div className="animate-fade-up animate-delay-300 flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="group">
              Download Theme
              <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button variant="outline" size="lg">
              View Demo
            </Button>
          </div>
          
          {/* Preview Image */}
          <div className="relative mt-16 animate-fade-up animate-delay-400">
            <div className="absolute inset-0 -z-10 bg-gradient-to-b from-transparent to-background" />
            
            <div className="rounded-xl overflow-hidden border shadow-lg">
              <div className="bg-accent/50 border-b px-4 py-2 flex items-center gap-2">
                <div className="flex gap-1.5">
                  <div className="w-3 h-3 rounded-full bg-red-400" />
                  <div className="w-3 h-3 rounded-full bg-yellow-400" />
                  <div className="w-3 h-3 rounded-full bg-green-400" />
                </div>
                <div className="w-full max-w-lg mx-auto h-6 rounded bg-white/70 text-xs text-center flex items-center justify-center text-muted-foreground">
                  grove-theme.wordpress.com
                </div>
              </div>
              <div className="aspect-[16/9] bg-white overflow-hidden relative">
                <div className="absolute inset-0 bg-gradient-to-tr from-gray-100 to-white" />
                <div className="absolute top-8 left-1/2 -translate-x-1/2 w-[90%] h-12 bg-accent/30 rounded-lg" />
                <div className="absolute top-24 left-8 w-64 h-64 bg-accent/20 rounded-lg" />
                <div className="absolute top-24 right-8 left-80 h-64 bg-accent/10 rounded-lg" />
                <div className="absolute top-96 left-8 right-8 h-32 bg-accent/20 rounded-lg" />
              </div>
            </div>
            
            {/* Shadow Effect */}
            <div className="absolute -bottom-4 -z-10 left-10 right-10 h-12 blur-xl bg-black/10 rounded-full" />
          </div>
        </div>
      </div>
    </section>
  );
};
