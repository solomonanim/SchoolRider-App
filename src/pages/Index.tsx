
import React from "react";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Hero } from "@/components/sections/Hero";
import { Features } from "@/components/sections/Features";
import { Testimonials } from "@/components/sections/Testimonials";
import { AboutTheme } from "@/components/sections/AboutTheme";
import { SchoolRiderInfo } from "@/components/sections/SchoolRiderInfo";
import { DemoSection } from "@/components/sections/DemoSection";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow">
        <Hero />
        <SchoolRiderInfo />
        <Features />
        <DemoSection />
        <Testimonials />
        <AboutTheme />
        <div className="py-24 bg-background">
          <div className="container px-4 sm:px-6 text-center">
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">
              Ready to transform your school dismissal?
            </h2>
            <p className="text-muted-foreground text-lg mb-8 max-w-2xl mx-auto">
              Get in touch with our team to learn how SchoolRider can work for your institution.
            </p>
            <Link to="/contact">
              <Button size="lg" className="px-8">Contact Us</Button>
            </Link>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Index;
