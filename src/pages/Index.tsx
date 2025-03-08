
import React from "react";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Hero } from "@/components/sections/Hero";
import { Features } from "@/components/sections/Features";
import { Testimonials } from "@/components/sections/Testimonials";
import { AboutTheme } from "@/components/sections/AboutTheme";
import { ContactForm } from "@/components/sections/ContactForm";

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow">
        <Hero />
        <Features />
        <Testimonials />
        <AboutTheme />
        <ContactForm />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
