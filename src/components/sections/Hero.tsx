
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
          <div className="flex-1 relative h-[500px] md:h-[600px]">
            {/* Vertical slideshow container */}
            <div className="absolute w-full h-full overflow-hidden">
              {/* Left column of images */}
              <div className="absolute left-[10%] w-40 h-full overflow-hidden">
                <motion.div
                  className="flex flex-col gap-4"
                  animate={{ 
                    y: [0, "-100%"] 
                  }}
                  transition={{
                    y: {
                      repeat: Infinity,
                      repeatType: "loop",
                      duration: 15,
                      ease: "linear"
                    }
                  }}
                >
                  {/* First set of images */}
                  <div className="w-40 h-56 md:w-56 md:h-72 rounded-2xl overflow-hidden shadow-xl border">
                    <img 
                      src="https://images.unsplash.com/photo-1541339907198-e08756dedf3f?auto=format&fit=crop&q=80" 
                      alt="Student being picked up" 
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="w-40 h-56 md:w-56 md:h-72 rounded-2xl overflow-hidden shadow-xl border">
                    <img 
                      src="https://images.unsplash.com/photo-1571210862729-78a52d3779a2?auto=format&fit=crop&q=80" 
                      alt="School students" 
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="w-40 h-56 md:w-56 md:h-72 rounded-2xl overflow-hidden shadow-xl border">
                    <img 
                      src="https://images.unsplash.com/photo-1577896851231-70ef18881754?auto=format&fit=crop&q=80" 
                      alt="Teacher with students" 
                      className="w-full h-full object-cover"
                    />
                  </div>
                  
                  {/* Duplicate set for seamless loop */}
                  <div className="w-40 h-56 md:w-56 md:h-72 rounded-2xl overflow-hidden shadow-xl border">
                    <img 
                      src="https://images.unsplash.com/photo-1541339907198-e08756dedf3f?auto=format&fit=crop&q=80" 
                      alt="Student being picked up" 
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="w-40 h-56 md:w-56 md:h-72 rounded-2xl overflow-hidden shadow-xl border">
                    <img 
                      src="https://images.unsplash.com/photo-1571210862729-78a52d3779a2?auto=format&fit=crop&q=80" 
                      alt="School students" 
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="w-40 h-56 md:w-56 md:h-72 rounded-2xl overflow-hidden shadow-xl border">
                    <img 
                      src="https://images.unsplash.com/photo-1577896851231-70ef18881754?auto=format&fit=crop&q=80" 
                      alt="Teacher with students" 
                      className="w-full h-full object-cover"
                    />
                  </div>
                </motion.div>
              </div>
              
              {/* Right column of images - with offset timing */}
              <div className="absolute right-[15%] w-40 h-full overflow-hidden">
                <motion.div
                  className="flex flex-col gap-4"
                  animate={{ 
                    y: ["-30%", "-130%"] 
                  }}
                  transition={{
                    y: {
                      repeat: Infinity,
                      repeatType: "loop",
                      duration: 20,
                      ease: "linear"
                    }
                  }}
                >
                  {/* First set of images */}
                  <div className="w-40 h-56 md:w-56 md:h-72 rounded-2xl overflow-hidden shadow-xl border">
                    <img 
                      src="https://images.unsplash.com/photo-1580582932707-520aed937b7b?auto=format&fit=crop&q=80" 
                      alt="School classroom" 
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="w-40 h-56 md:w-56 md:h-72 rounded-2xl overflow-hidden shadow-xl border">
                    <img 
                      src="https://images.unsplash.com/photo-1491841550275-ad7854e35ca6?auto=format&fit=crop&q=80" 
                      alt="Students walking" 
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="w-40 h-56 md:w-56 md:h-72 rounded-2xl overflow-hidden shadow-xl border">
                    <img 
                      src="https://images.unsplash.com/photo-1503676260728-1c00da094a0b?auto=format&fit=crop&q=80" 
                      alt="Students with tablets" 
                      className="w-full h-full object-cover"
                    />
                  </div>
                  
                  {/* Duplicate set for seamless loop */}
                  <div className="w-40 h-56 md:w-56 md:h-72 rounded-2xl overflow-hidden shadow-xl border">
                    <img 
                      src="https://images.unsplash.com/photo-1580582932707-520aed937b7b?auto=format&fit=crop&q=80" 
                      alt="School classroom" 
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="w-40 h-56 md:w-56 md:h-72 rounded-2xl overflow-hidden shadow-xl border">
                    <img 
                      src="https://images.unsplash.com/photo-1491841550275-ad7854e35ca6?auto=format&fit=crop&q=80" 
                      alt="Students walking" 
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="w-40 h-56 md:w-56 md:h-72 rounded-2xl overflow-hidden shadow-xl border">
                    <img 
                      src="https://images.unsplash.com/photo-1503676260728-1c00da094a0b?auto=format&fit=crop&q=80" 
                      alt="Students with tablets" 
                      className="w-full h-full object-cover"
                    />
                  </div>
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
            ></motion.div>
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
            ></motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};
