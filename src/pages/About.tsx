
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
                  src="https://images.unsplash.com/photo-1531545514256-b1400bc00f31?auto=format&fit=crop&w=800&q=80" 
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
                    src="https://images.unsplash.com/photo-1522069213448-443a614da9b6?auto=format&fit=crop&w=800&q=80" 
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
              
              <div>
                <h2 className="text-2xl font-semibold mb-6 text-center">Our Team</h2>
                <p className="text-muted-foreground mb-12 text-center max-w-3xl mx-auto">
                  SchoolRider is powered by a diverse team of educators, technologists, and 
                  parents who are passionate about improving the school experience.
                </p>
                
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                  <div className="text-center">
                    <div className="w-48 h-48 mx-auto rounded-full overflow-hidden mb-4">
                      <img 
                        src="https://images.unsplash.com/photo-1506277886164-e25aa3f4ef7f?auto=format&fit=crop&w=400&q=80" 
                        alt="Team member - CEO" 
                        className="w-full h-full object-cover" 
                      />
                    </div>
                    <h3 className="font-semibold text-lg">Dr. Maya Johnson</h3>
                    <p className="text-primary">Co-Founder & CEO</p>
                    <p className="text-sm text-muted-foreground mt-2">
                      Former elementary school principal with 15 years in education administration
                    </p>
                  </div>
                  
                  <div className="text-center">
                    <div className="w-48 h-48 mx-auto rounded-full overflow-hidden mb-4">
                      <img 
                        src="https://images.unsplash.com/photo-1507152832244-10d45c7eda57?auto=format&fit=crop&w=400&q=80" 
                        alt="Team member - CTO" 
                        className="w-full h-full object-cover" 
                      />
                    </div>
                    <h3 className="font-semibold text-lg">Marcus Williams</h3>
                    <p className="text-primary">Co-Founder & CTO</p>
                    <p className="text-sm text-muted-foreground mt-2">
                      Software engineer with background in building secure, scalable education technologies
                    </p>
                  </div>
                  
                  <div className="text-center">
                    <div className="w-48 h-48 mx-auto rounded-full overflow-hidden mb-4">
                      <img 
                        src="https://images.unsplash.com/photo-1531384441138-2736e62e0919?auto=format&fit=crop&w=400&q=80" 
                        alt="Team member - COO" 
                        className="w-full h-full object-cover" 
                      />
                    </div>
                    <h3 className="font-semibold text-lg">Amara Thompson</h3>
                    <p className="text-primary">Chief Operating Officer</p>
                    <p className="text-sm text-muted-foreground mt-2">
                      Former district transportation coordinator and efficiency expert
                    </p>
                  </div>
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
