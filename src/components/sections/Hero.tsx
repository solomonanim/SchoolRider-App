
import React from "react";
import { Button } from "@/components/ui/button";
import { ArrowRight, LogIn } from "lucide-react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

export const Hero = () => {
  return (
    <section className="relative py-20 lg:py-32 overflow-hidden">
      <div className="container px-4 sm:px-6 max-w-[1300px] mx-auto">
        <div className="flex flex-col lg:flex-row gap-12 items-center">
          <div className="flex-1 text-center lg:text-left">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-6">
              <span className="text-gradient">SchoolRider</span>
              <br />
              <span className="text-3xl md:text-4xl lg:text-5xl">Safe & Efficient School Dismissal</span>
            </h1>
            <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto lg:mx-0">
              Transform your school's dismissal process with our comprehensive solution. Enhance safety, reduce wait times, and streamline pick-up operations.
            </p>
            <div className="flex flex-wrap gap-4 justify-center lg:justify-start">
              <Link to="/plugin">
                <Button size="lg" className="gap-2">
                  Login
                  <LogIn className="h-5 w-5" />
                </Button>
              </Link>
              <Link to="/plugin">
                <Button 
                  size="lg" 
                  variant="outline" 
                  className="gap-2"
                >
                  View Demo
                  <ArrowRight className="h-5 w-5" />
                </Button>
              </Link>
            </div>
          </div>
          
          {/* Modern vertical slideshow with exactly 5 images - faster animation and no overlay */}
          <div className="flex-1 relative h-[800px] overflow-hidden rounded-2xl shadow-2xl border border-white/10">
            <div className="absolute inset-0 w-full h-full">
              <div className="vertical-slideshow h-full w-full">
                <motion.div
                  className="flex flex-col w-full"
                  animate={{ 
                    y: [0, -100 * 5]  // 5 images * -100%
                  }}
                  transition={{
                    y: {
                      repeat: Infinity,
                      repeatType: "loop",
                      duration: 15,  // Faster animation
                      ease: "linear"
                    }
                  }}
                >
                  {/* Exactly 5 portrait images */}
                  {[
                    "https://images.unsplash.com/photo-1633113093730-47449a1a9c6e?auto=format&fit=crop&q=80&w=1000",
                    "https://images.unsplash.com/photo-1544717305-2782549b5136?auto=format&fit=crop&q=80&w=1000",
                    "https://images.unsplash.com/photo-1581447109200-bf2769546fd8?auto=format&fit=crop&q=80&w=1000",
                    "https://images.unsplash.com/photo-1583508805133-8fd03a9916d0?auto=format&fit=crop&q=80&w=1000",
                    "https://images.unsplash.com/photo-1546155701-39de63c0429c?auto=format&fit=crop&q=80&w=1000"
                  ].map((src, index) => (
                    <div key={`slide-${index}`} className="w-full h-[800px] flex-shrink-0">
                      <img 
                        src={src} 
                        alt={`School scene ${index + 1}`} 
                        className="w-full h-full object-cover object-center" 
                      />
                    </div>
                  ))}
                  
                  {/* Duplicate the first few images to create a seamless loop */}
                  {[
                    "https://images.unsplash.com/photo-1633113093730-47449a1a9c6e?auto=format&fit=crop&q=80&w=1000",
                    "https://images.unsplash.com/photo-1544717305-2782549b5136?auto=format&fit=crop&q=80&w=1000"
                  ].map((src, index) => (
                    <div key={`slide-repeat-${index}`} className="w-full h-[800px] flex-shrink-0">
                      <img 
                        src={src} 
                        alt={`School scene ${index + 1}`} 
                        className="w-full h-full object-cover object-center" 
                      />
                    </div>
                  ))}
                </motion.div>
              </div>
            </div>
            
            {/* Decorative elements */}
            <div className="absolute -z-10 -top-20 -right-20 w-60 h-60 bg-primary/10 rounded-full blur-3xl"></div>
            <div className="absolute -z-10 -bottom-20 -left-20 w-60 h-60 bg-primary/10 rounded-full blur-3xl"></div>
            <motion.div 
              className="absolute -z-10 top-1/2 left-1/3 w-40 h-40 bg-secondary/20 rounded-full blur-xl"
              animate={{ 
                scale: [1, 1.2, 1],
                opacity: [0.5, 0.8, 0.5],
              }}
              transition={{ 
                repeat: Infinity,
                duration: 4,
                ease: "easeInOut" 
              }}
            />
            <motion.div 
              className="absolute -z-10 bottom-1/3 right-1/4 w-32 h-32 bg-primary/15 rounded-full blur-xl"
              animate={{ 
                scale: [1, 1.3, 1],
                opacity: [0.4, 0.7, 0.4],
              }}
              transition={{ 
                repeat: Infinity,
                duration: 5,
                ease: "easeInOut",
                delay: 1 
              }}
            />
          </div>
        </div>
      </div>
    </section>
  );
};
