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
          <div className="flex-1 relative h-[800px]">
            <div className="absolute w-full h-full overflow-hidden">
              <div className="flex justify-center w-full h-full">
               <motion.div
  className="w-full max-w-[400px] flex flex-col gap-8 flex-shrink-0"
  animate={{
    y: ["0%", "-100%"]
  }}
  transition={{
    y: {
      repeat: Infinity,
      repeatType: "loop",
      duration: 12,
      ease: "linear"
    }
  }}
>
  {[
    "https://images.unsplash.com/photo-1541339907198-e08756dedf3f?auto=format&fit=crop&q=80",
    "https://images.unsplash.com/photo-1571210862729-78a52d3779a2?auto=format&fit=crop&q=80",
    "https://images.unsplash.com/photo-1577896851231-70ef18881754?auto=format&fit=crop&q=80",
    "https://images.unsplash.com/photo-1580582932707-520aed937b7b?auto=format&fit=crop&q=80",
    "https://images.unsplash.com/photo-1491841550275-ad7854e35ca6?auto=format&fit=crop&q=80",
    "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?auto=format&fit=crop&q=80"
  ].map((src, index) => (
    <div key={`first-${index}`} className="w-full h-[700px] rounded-xl overflow-hidden shadow-xl border border-white/20">
      <img 
        src={src} 
        alt={`Image ${index + 1}`} 
        className="w-full h-full object-cover" 
      />
    </div>
  ))}

  {[
    "https://images.unsplash.com/photo-1541339907198-e08756dedf3f?auto=format&fit=crop&q=80",
    "https://images.unsplash.com/photo-1571210862729-78a52d3779a2?auto=format&fit=crop&q=80",
    "https://images.unsplash.com/photo-1577896851231-70ef18881754?auto=format&fit=crop&q=80",
    "https://images.unsplash.com/photo-1580582932707-520aed937b7b?auto=format&fit=crop&q=80",
    "https://images.unsplash.com/photo-1491841550275-ad7854e35ca6?auto=format&fit=crop&q=80",
    "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?auto=format&fit=crop&q=80"
  ].map((src, index) => (
    <div key={`second-${index}`} className="w-full h-[700px] rounded-xl overflow-hidden shadow-xl border border-white/20">
      <img 
        src={src} 
        alt={`Image ${index + 1}`} 
        className="w-full h-full object-cover" 
      />
    </div>
  ))}
</motion.div>



                
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
