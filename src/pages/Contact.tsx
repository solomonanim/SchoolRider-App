
import React from "react";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import { Send, Mail, MessageSquare, User, School, MapPin, Phone } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const Contact = () => {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = React.useState(false);
  
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
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow pt-32 pb-20">
        <section className="container px-4 py-12">
          <div className="max-w-5xl mx-auto">
            <h1 className="text-4xl font-bold mb-8 text-center">Contact Us</h1>
            <p className="text-muted-foreground text-center mb-12 max-w-2xl mx-auto">
              Have questions about SchoolRider or want to learn how it can benefit your school? 
              Our team is here to help. Reach out to us using any of the methods below.
            </p>
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
              <div>
                <div className="p-6 sm:p-8 rounded-xl border bg-card shadow-sm">
                  <h2 className="text-2xl font-semibold mb-6">Send Us a Message</h2>
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
                        School/Institution (Optional)
                      </label>
                      <input
                        id="school"
                        type="text"
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
                  
                  <div className="mt-6 text-center text-sm text-muted-foreground">
                    By submitting this form, you agree to our{" "}
                    <a href="/terms-conditions" className="underline hover:text-primary">Terms of Service</a> and{" "}
                    <a href="/privacy" className="underline hover:text-primary">Privacy Policy</a>.
                  </div>
                </div>
              </div>
              
              <div className="space-y-8">
                <div>
                  <h2 className="text-2xl font-semibold mb-6">Other Ways to Reach Us</h2>
                  
                  <div className="space-y-6">
                    <div className="flex items-start gap-4">
                      <div className="bg-primary/10 p-3 rounded-full">
                        <Mail className="h-6 w-6 text-primary" />
                      </div>
                      <div>
                        <h3 className="font-medium">Email Us</h3>
                        <p className="text-muted-foreground mb-1 text-sm">For general inquiries:</p>
                        <a href="mailto:info@schoolrider.com" className="text-primary hover:underline">
                          info@schoolrider.com
                        </a>
                        <p className="text-muted-foreground mt-2 mb-1 text-sm">For support:</p>
                        <a href="mailto:support@schoolrider.com" className="text-primary hover:underline">
                          support@schoolrider.com
                        </a>
                      </div>
                    </div>
                    
                    <div className="flex items-start gap-4">
                      <div className="bg-primary/10 p-3 rounded-full">
                        <Phone className="h-6 w-6 text-primary" />
                      </div>
                      <div>
                        <h3 className="font-medium">Call Us</h3>
                        <p className="text-muted-foreground mb-1 text-sm">Monday-Friday, 8am-6pm EST</p>
                        <a href="tel:+15551234567" className="text-primary hover:underline">
                          (555) 123-4567
                        </a>
                      </div>
                    </div>
                    
                    <div className="flex items-start gap-4">
                      <div className="bg-primary/10 p-3 rounded-full">
                        <MapPin className="h-6 w-6 text-primary" />
                      </div>
                      <div>
                        <h3 className="font-medium">Visit Us</h3>
                        <p className="text-muted-foreground">
                          SchoolRider, Inc.<br />
                          123 Education Lane<br />
                          Suite 400<br />
                          San Francisco, CA 94107
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                
                <div className="rounded-xl overflow-hidden h-[300px] shadow-md">
                  <img 
                    src="https://images.unsplash.com/photo-1544717305-2782549b5136?auto=format&fit=crop&w=800&q=80" 
                    alt="Diverse team of education professionals" 
                    className="w-full h-full object-cover" 
                  />
                </div>
                
                <div className="p-6 bg-muted rounded-xl">
                  <h3 className="font-semibold mb-2">Schedule a Demo</h3>
                  <p className="text-muted-foreground text-sm mb-4">
                    Want to see SchoolRider in action? Schedule a personalized demo with one of our 
                    product specialists.
                  </p>
                  <Button variant="outline" className="w-full">
                    Request a Demo
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Contact;
