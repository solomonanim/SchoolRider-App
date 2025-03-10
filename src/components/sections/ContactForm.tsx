
import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Send, Mail, MessageSquare, User, School } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import { Link } from "react-router-dom";

export const ContactForm = () => {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      toast({
        title: "Message sent",
        description: "We'll get back to you as soon as possible.",
      });
      // Reset form
      (e.target as HTMLFormElement).reset();
    }, 1000);
  };
  
  return (
    <section id="contact" className="py-24 bg-background">
      <div className="container px-4 sm:px-6">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <p className="text-sm font-medium text-primary mb-2 tracking-wider uppercase">Contact Us</p>
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">
            Ready to transform your school dismissal?
          </h2>
          <p className="text-muted-foreground text-lg">
            Get in touch with our team to learn how SchoolRider can work for your institution.
          </p>
        </div>
        
        <div className="max-w-xl mx-auto">
          <div className="p-6 sm:p-8 rounded-xl border bg-card shadow-sm">
            <form onSubmit={handleSubmit} className="space-y-5">
              <div className="space-y-2">
                <label htmlFor="name" className="text-sm font-medium flex items-center gap-2">
                  <User className="h-4 w-4" />
                  Your Name
                </label>
                <input
                  id="name"
                  type="text"
                  required
                  className="w-full px-3 py-2 border rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-primary/20 transition"
                  placeholder="John Doe"
                />
              </div>
              
              <div className="space-y-2">
                <label htmlFor="email" className="text-sm font-medium flex items-center gap-2">
                  <Mail className="h-4 w-4" />
                  Email Address
                </label>
                <input
                  id="email"
                  type="email"
                  required
                  className="w-full px-3 py-2 border rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-primary/20 transition"
                  placeholder="john@example.com"
                />
              </div>
              
              <div className="space-y-2">
                <label htmlFor="school" className="text-sm font-medium flex items-center gap-2">
                  <School className="h-4 w-4" />
                  School/Institution
                </label>
                <input
                  id="school"
                  type="text"
                  required
                  className="w-full px-3 py-2 border rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-primary/20 transition"
                  placeholder="Washington Elementary School"
                />
              </div>
              
              <div className="space-y-2">
                <label htmlFor="message" className="text-sm font-medium flex items-center gap-2">
                  <MessageSquare className="h-4 w-4" />
                  Your Message
                </label>
                <textarea
                  id="message"
                  required
                  rows={4}
                  className="w-full px-3 py-2 border rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-primary/20 transition resize-none"
                  placeholder="I'd like more information about implementing SchoolRider at our school."
                />
              </div>
              
              <Button 
                type="submit" 
                className="w-full group" 
                disabled={isSubmitting}
              >
                {isSubmitting ? (
                  "Sending..."
                ) : (
                  <>
                    Send Message
                    <Send className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                  </>
                )}
              </Button>
            </form>
          </div>
          
          <div className="mt-8 text-center text-sm text-muted-foreground">
            By submitting this form, you agree to our{" "}
            <Link to="/terms-conditions" className="underline hover:text-primary">Terms of Service</Link> and{" "}
            <Link to="/privacy" className="underline hover:text-primary">Privacy Policy</Link>.
          </div>
        </div>
      </div>
    </section>
  );
};
