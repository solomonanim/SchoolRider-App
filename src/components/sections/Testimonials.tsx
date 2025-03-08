
import React from "react";
import { Star } from "lucide-react";

const testimonials = [
  {
    quote: "Grove has completely transformed our blog. The clean design and attention to detail has helped our content stand out and improved our engagement metrics.",
    name: "Sarah Johnson",
    role: "Food Blogger",
    avatarSrc: null,
    rating: 5
  },
  {
    quote: "I've tried dozens of WordPress themes over the years, but Grove is by far the most intuitive and customizable. My photography portfolio has never looked better.",
    name: "Michael Chen",
    role: "Photographer",
    avatarSrc: null,
    rating: 5
  },
  {
    quote: "As a web developer, I appreciate the clean code and thoughtful architecture. Grove makes it easy to create custom extensions while maintaining performance.",
    name: "Alex Rodriguez",
    role: "Web Developer",
    avatarSrc: null,
    rating: 5
  },
  {
    quote: "The support team behind Grove is incredible. They helped me customize the theme to match my brand identity perfectly, and the site loads in a flash.",
    name: "Emily Parker",
    role: "Small Business Owner",
    avatarSrc: null,
    rating: 5
  }
];

const createInitials = (name: string) => {
  const names = name.split(' ');
  return names.length > 1 
    ? `${names[0][0]}${names[1][0]}` 
    : names[0].substring(0, 2);
};

export const Testimonials = () => {
  return (
    <section id="testimonials" className="py-24 bg-accent">
      <div className="container px-4 sm:px-6">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <p className="text-sm font-medium text-primary mb-2 tracking-wider uppercase">Testimonials</p>
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">
            Loved by creators worldwide
          </h2>
          <p className="text-muted-foreground text-lg">
            Don't just take our word for it. Here's what our customers have to say about Grove.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {testimonials.map((testimonial, index) => (
            <div 
              key={index} 
              className="relative p-6 rounded-xl border bg-card hover:shadow-md transition-all"
            >
              <div className="flex mb-4">
                {Array.from({ length: testimonial.rating }).map((_, i) => (
                  <Star key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                ))}
              </div>
              
              <blockquote className="text-card-foreground mb-6">
                "{testimonial.quote}"
              </blockquote>
              
              <div className="flex items-center">
                {testimonial.avatarSrc ? (
                  <img 
                    src={testimonial.avatarSrc} 
                    alt={testimonial.name} 
                    className="h-10 w-10 rounded-full mr-3"
                  />
                ) : (
                  <div className="h-10 w-10 rounded-full bg-primary/10 text-primary flex items-center justify-center mr-3 text-sm font-medium">
                    {createInitials(testimonial.name)}
                  </div>
                )}
                <div>
                  <div className="font-medium">{testimonial.name}</div>
                  <div className="text-sm text-muted-foreground">{testimonial.role}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
