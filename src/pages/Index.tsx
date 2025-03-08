
import React from "react";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Hero } from "@/components/sections/Hero";
import { Features } from "@/components/sections/Features";
import { Testimonials } from "@/components/sections/Testimonials";
import { AboutTheme } from "@/components/sections/AboutTheme";
import { ContactForm } from "@/components/sections/ContactForm";
import { SchoolRiderInfo } from "@/components/sections/SchoolRiderInfo";
import { DemoSection } from "@/components/sections/DemoSection";

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
        <ContactForm />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
