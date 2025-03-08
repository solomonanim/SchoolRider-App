
import React from "react";
import { Badge } from "@/components/ui/badge";
import { Star } from "lucide-react";

export const Testimonials = () => {
  const testimonials = [
    {
      name: "Dr. Sarah Johnson",
      role: "School Principal",
      image: "/placeholder.svg",
      quote: "SchoolRider has revolutionized our dismissal process. What used to take over an hour now takes just 20 minutes, and parents love the added security.",
      rating: 5
    },
    {
      name: "Michael Rodriguez",
      role: "IT Director",
      image: "/placeholder.svg",
      quote: "As the IT director for our district, I was amazed by how easy it was to implement SchoolRider. The WordPress integration is seamless and our staff needed minimal training.",
      rating: 5
    },
    {
      name: "Jennifer Williams",
      role: "Parent",
      image: "/placeholder.svg",
      quote: "The ability to track my child's pickup in real-time gives me such peace of mind. The QR code system ensures that only I or designated family members can pick up my children.",
      rating: 5
    }
  ];

  const renderStars = (rating: number) => {
    return Array(5).fill(0).map((_, i) => (
      <Star 
        key={i} 
        className={`h-4 w-4 ${i < rating ? 'text-yellow-500 fill-yellow-500' : 'text-gray-300'}`} 
      />
    ));
  };

  return (
    <section id="testimonials" className="py-24 bg-background">
      <div className="container px-4 sm:px-6">
        <div className="text-center mb-16">
          <Badge variant="outline" className="mb-4">Testimonials</Badge>
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">
            Trusted by Schools Nationwide
          </h2>
          <p className="text-muted-foreground text-lg max-w-3xl mx-auto">
            SchoolRider is helping educational institutions transform their dismissal process. See what our users have to say.
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div 
              key={index}
              className="bg-card rounded-xl p-6 border shadow-sm hover:shadow-md transition-all"
            >
              <div className="flex gap-4 items-center mb-4">
                <div className="w-16 h-16 rounded-full overflow-hidden">
                  <img 
                    src={testimonial.image} 
                    alt={testimonial.name} 
                    className="w-full h-full object-cover"
                  />
                </div>
                <div>
                  <div className="font-semibold">{testimonial.name}</div>
                  <div className="text-sm text-muted-foreground">{testimonial.role}</div>
                  <div className="flex mt-1">
                    {renderStars(testimonial.rating)}
                  </div>
                </div>
              </div>
              <blockquote className="italic text-muted-foreground">
                "{testimonial.quote}"
              </blockquote>
            </div>
          ))}
        </div>
        
        <div className="mt-16 bg-primary/5 rounded-xl p-8 border">
          <div className="grid md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-4xl font-bold">500+</div>
              <div className="text-muted-foreground">Schools</div>
            </div>
            <div>
              <div className="text-4xl font-bold">4.9/5</div>
              <div className="text-muted-foreground">Average Rating</div>
            </div>
            <div>
              <div className="text-4xl font-bold">65%</div>
              <div className="text-muted-foreground">Time Saved</div>
            </div>
            <div>
              <div className="text-4xl font-bold">98%</div>
              <div className="text-muted-foreground">Satisfaction</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
