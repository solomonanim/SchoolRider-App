
import React from "react";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";

const About = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow pt-32 pb-20">
        <section className="container px-4 py-12">
          <div className="max-w-5xl mx-auto">
            <h1 className="text-4xl font-bold mb-8 text-center">About SchoolRider</h1>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-16 items-center">
              <div>
                <h2 className="text-2xl font-semibold mb-4">Our Mission</h2>
                <p className="text-muted-foreground mb-6">
                  At SchoolRider, we're on a mission to transform school dismissal from a chaotic 
                  experience into a streamlined, secure, and stress-free process for schools, 
                  parents, and students alike.
                </p>
                <p className="text-muted-foreground">
                  We believe that technology can solve real-world problems in education, 
                  and we're dedicated to creating innovative solutions that save time, 
                  enhance safety, and improve communication between schools and families.
                </p>
              </div>
              <div className="rounded-xl overflow-hidden shadow-xl">
                <img 
                  src="https://images.unsplash.com/photo-1507537297725-24a1c029d3ca?auto=format&fit=crop&w=800&q=80" 
                  alt="Diverse group of educators and team members" 
                  className="w-full h-full object-cover" 
                />
              </div>
            </div>
            
            <div className="space-y-16">
              <div>
                <h2 className="text-2xl font-semibold mb-6 text-center">Our Story</h2>
                <p className="text-muted-foreground mb-6">
                  SchoolRider was born from a simple observation: the school dismissal process hadn't 
                  evolved in decades, despite advances in technology. Our founders, a group of 
                  parents and educators, experienced firsthand the frustration of long carpool 
                  lines, miscommunication, and safety concerns during dismissal.
                </p>
                <p className="text-muted-foreground mb-6">
                  In 2023, we set out to create a comprehensive solution that would address these 
                  challenges. After consulting with dozens of schools and conducting extensive 
                  research, we developed SchoolRider – a platform specifically designed to 
                  modernize and optimize the school dismissal experience.
                </p>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                <div className="order-2 md:order-1 rounded-xl overflow-hidden shadow-xl">
                  <img 
                    src="https://images.unsplash.com/photo-1517164850305-99a3e65bb47e?auto=format&fit=crop&w=800&q=80" 
                    alt="Students in a classroom setting" 
                    className="w-full h-full object-cover" 
                  />
                </div>
                <div className="order-1 md:order-2">
                  <h2 className="text-2xl font-semibold mb-4">Our Impact</h2>
                  <p className="text-muted-foreground mb-6">
                    Since launching SchoolRider, we've partnered with over 500 schools nationwide, 
                    helping them save an average of 15 minutes per day during dismissal. That's 
                    more than 45 hours of instructional time reclaimed each school year!
                  </p>
                  <p className="text-muted-foreground">
                    Beyond time savings, schools report improved safety, reduced traffic congestion, 
                    and greater peace of mind for parents. We're proud to be making a positive 
                    difference in school communities across the country.
                  </p>
                </div>
              </div>
            </div>
            
            <div className="mt-20 text-center">
              <h2 className="text-2xl font-semibold mb-6">Join Our Mission</h2>
              <p className="text-muted-foreground mb-8 max-w-3xl mx-auto">
                We're always looking for passionate individuals to join our team and help us 
                transform school dismissal nationwide. If you're excited about making a difference 
                in education through technology, we'd love to hear from you.
              </p>
              <a 
                href="/contact" 
                className="inline-flex items-center justify-center rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-primary text-primary-foreground hover:bg-primary/90 h-10 px-4 py-2"
              >
                Get in Touch
              </a>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default About;
