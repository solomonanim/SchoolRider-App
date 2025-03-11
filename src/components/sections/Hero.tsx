
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
            {/* Multiple floating images with vertical flowing animations */}
            <div className="absolute w-full h-full">
              {/* Image 1 */}
              <motion.div 
                className="absolute top-[5%] right-[10%] w-40 h-56 md:w-56 md:h-72 rounded-2xl overflow-hidden shadow-xl border transform"
                initial={{ y: 20, opacity: 0 }}
                animate={{ 
                  y: [0, -15, 0],
                  opacity: 1 
                }}
                transition={{ 
                  y: {
                    duration: 4,
                    repeat: Infinity,
                    repeatType: "reverse",
                    ease: "easeInOut"
                  },
                  opacity: { duration: 0.8 }
                }}
              >
                <img 
                  src="https://images.unsplash.com/photo-1541339907198-e08756dedf3f?auto=format&fit=crop&q=80" 
                  alt="Student being picked up" 
                  className="w-full h-full object-cover"
                />
              </motion.div>
              
              {/* Image 2 */}
              <motion.div 
                className="absolute top-[30%] left-[5%] w-36 h-48 md:w-48 md:h-64 rounded-2xl overflow-hidden shadow-xl border transform"
                initial={{ y: 40, opacity: 0 }}
                animate={{ 
                  y: [0, -20, 0],
                  opacity: 1 
                }}
                transition={{ 
                  y: {
                    duration: 4.5,
                    repeat: Infinity,
                    repeatType: "reverse",
                    ease: "easeInOut",
                    delay: 0.5
                  },
                  opacity: { duration: 0.7, delay: 0.2 }
                }}
              >
                <img 
                  src="https://images.unsplash.com/photo-1571210862729-78a52d3779a2?auto=format&fit=crop&q=80" 
                  alt="School students" 
                  className="w-full h-full object-cover"
                />
              </motion.div>
              
              {/* Image 3 */}
              <motion.div 
                className="absolute bottom-[5%] right-[20%] w-44 h-60 md:w-52 md:h-72 rounded-2xl overflow-hidden shadow-xl border transform"
                initial={{ y: 60, opacity: 0 }}
                animate={{ 
                  y: [0, -25, 0],
                  opacity: 1 
                }}
                transition={{ 
                  y: {
                    duration: 5,
                    repeat: Infinity,
                    repeatType: "reverse",
                    ease: "easeInOut",
                    delay: 1
                  },
                  opacity: { duration: 0.8, delay: 0.4 }
                }}
              >
                <img 
                  src="https://images.unsplash.com/photo-1577896851231-70ef18881754?auto=format&fit=crop&q=80" 
                  alt="Teacher with students" 
                  className="w-full h-full object-cover"
                />
              </motion.div>
              
              {/* Image 4 - New */}
              <motion.div 
                className="absolute top-[15%] left-[25%] w-32 h-44 md:w-44 md:h-60 rounded-2xl overflow-hidden shadow-xl border transform"
                initial={{ y: 30, opacity: 0 }}
                animate={{ 
                  y: [0, -15, 0],
                  opacity: 1 
                }}
                transition={{ 
                  y: {
                    duration: 4.2,
                    repeat: Infinity,
                    repeatType: "reverse",
                    ease: "easeInOut",
                    delay: 0.7
                  },
                  opacity: { duration: 0.7, delay: 0.3 }
                }}
              >
                <img 
                  src="https://images.unsplash.com/photo-1580582932707-520aed937b7b?auto=format&fit=crop&q=80" 
                  alt="School classroom" 
                  className="w-full h-full object-cover"
                />
              </motion.div>
              
              {/* Image 5 - New */}
              <motion.div 
                className="absolute bottom-[28%] left-[35%] w-28 h-40 md:w-40 md:h-56 rounded-2xl overflow-hidden shadow-xl border transform"
                initial={{ y: 50, opacity: 0 }}
                animate={{ 
                  y: [0, -20, 0],
                  opacity: 1 
                }}
                transition={{ 
                  y: {
                    duration: 4.8,
                    repeat: Infinity,
                    repeatType: "reverse",
                    ease: "easeInOut",
                    delay: 1.1
                  },
                  opacity: { duration: 0.7, delay: 0.5 }
                }}
              >
                <img 
                  src="https://images.unsplash.com/photo-1491841550275-ad7854e35ca6?auto=format&fit=crop&q=80" 
                  alt="Students walking" 
                  className="w-full h-full object-cover"
                />
              </motion.div>
              
              {/* Image 6 - New */}
              <motion.div 
                className="absolute bottom-[10%] left-[10%] w-36 h-48 md:w-48 md:h-64 rounded-2xl overflow-hidden shadow-xl border transform"
                initial={{ y: 40, opacity: 0 }}
                animate={{ 
                  y: [0, -18, 0],
                  opacity: 1 
                }}
                transition={{ 
                  y: {
                    duration: 5.2,
                    repeat: Infinity,
                    repeatType: "reverse",
                    ease: "easeInOut",
                    delay: 0.9
                  },
                  opacity: { duration: 0.8, delay: 0.6 }
                }}
              >
                <img 
                  src="https://images.unsplash.com/photo-1503676260728-1c00da094a0b?auto=format&fit=crop&q=80" 
                  alt="Students with tablets" 
                  className="w-full h-full object-cover"
                />
              </motion.div>
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
