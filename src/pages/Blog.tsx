
import React from "react";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { CalendarDays, User, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const blogPosts = [
  {
    id: 1,
    title: "How SchoolRider is Transforming School Dismissal Safety",
    description: "Learn how schools across the country are implementing SchoolRider to make dismissal safer and more efficient.",
    image: "https://images.unsplash.com/photo-1581078426770-6d336e5de7bf?ixlib=rb-4.0.3&auto=format&fit=crop&w=880&q=80",
    author: "Amara Johnson",
    date: "May 15, 2023",
    category: "Safety"
  },
  {
    id: 2,
    title: "The Benefits of Digitizing School Pickup Systems",
    description: "Research shows that digital dismissal systems can reduce pickup times by up to 40% while improving safety protocols.",
    image: "https://images.unsplash.com/photo-1543269865-cbf427effbad?ixlib=rb-4.0.3&auto=format&fit=crop&w=880&q=80",
    author: "Marcus Davis",
    date: "April 22, 2023",
    category: "Technology"
  },
  {
    id: 3,
    title: "Parent Testimonials: How SchoolRider Changed Our Routine",
    description: "Real stories from parents who have experienced the difference SchoolRider makes in their daily school pickup routine.",
    image: "https://images.unsplash.com/photo-1594608661623-aa0bd3a69799?ixlib=rb-4.0.3&auto=format&fit=crop&w=880&q=80",
    author: "Sophia Williams",
    date: "March 10, 2023",
    category: "Testimonials"
  },
  {
    id: 4,
    title: "SchoolRider's New Features for the Upcoming School Year",
    description: "Explore the new features and improvements coming to SchoolRider for the next academic year.",
    image: "https://images.unsplash.com/photo-1581078426770-6d336e5de7bf?ixlib=rb-4.0.3&auto=format&fit=crop&w=880&q=80",
    author: "David Thompson",
    date: "February 28, 2023",
    category: "Updates"
  },
  {
    id: 5,
    title: "How to Implement SchoolRider at Your School: A Principal's Guide",
    description: "A step-by-step guide for school administrators looking to transform their dismissal process with SchoolRider.",
    image: "https://images.unsplash.com/photo-1531482615713-2afd69097998?ixlib=rb-4.0.3&auto=format&fit=crop&w=880&q=80",
    author: "Principal James Wilson",
    date: "January 15, 2023",
    category: "Implementation"
  }
];

const Blog = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow pt-28">
        <section className="container px-4 py-12">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">SchoolRider Blog</h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              News, insights, and stories about school dismissal management and education safety
            </p>
          </div>
          
          {/* Featured Article */}
          <div className="mb-16">
            <Card className="overflow-hidden border-none shadow-lg">
              <div className="grid md:grid-cols-2 gap-6">
                <div className="relative h-64 md:h-full">
                  <img 
                    src="https://images.unsplash.com/photo-1571210862729-78a52d3779a2?ixlib=rb-4.0.3&auto=format&fit=crop&w=1470&q=80" 
                    alt="Featured School" 
                    className="absolute inset-0 w-full h-full object-cover"
                  />
                </div>
                <div className="p-6 md:p-10 flex flex-col justify-center">
                  <div className="flex items-center gap-2 text-sm text-primary mb-4">
                    <span className="bg-primary/10 px-3 py-1 rounded-full">Featured</span>
                    <span className="text-muted-foreground">June 10, 2023</span>
                  </div>
                  <h2 className="text-2xl md:text-3xl font-bold mb-4">
                    How SchoolRider Reduced Pickup Time by 50% at Lincoln Elementary
                  </h2>
                  <p className="text-muted-foreground mb-6">
                    A case study on how Lincoln Elementary transformed their dismissal process, eliminated traffic congestion, 
                    and enhanced student safety with SchoolRider's comprehensive solution.
                  </p>
                  <div className="flex items-center justify-between mt-auto">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-full bg-foreground/10 flex items-center justify-center">
                        <User className="w-5 h-5" />
                      </div>
                      <div>
                        <p className="font-medium text-sm">Principal Rebecca Thomas</p>
                        <p className="text-xs text-muted-foreground">5 min read</p>
                      </div>
                    </div>
                    <Button variant="link" className="gap-2">
                      Read Case Study <ArrowRight className="h-4 w-4" />
                    </Button>
                  </div>
                </div>
              </div>
            </Card>
          </div>
          
          {/* Blog Articles Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.map((post) => (
              <Card key={post.id} className="overflow-hidden border shadow-sm hover:shadow-md transition-shadow">
                <div className="aspect-video relative">
                  <img 
                    src={post.image} 
                    alt={post.title} 
                    className="absolute inset-0 w-full h-full object-cover"
                  />
                </div>
                <CardHeader className="pb-3">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-xs font-medium bg-primary/10 text-primary px-3 py-1 rounded-full">
                      {post.category}
                    </span>
                  </div>
                  <CardTitle className="text-xl">{post.title}</CardTitle>
                </CardHeader>
                <CardContent className="pb-4">
                  <CardDescription>{post.description}</CardDescription>
                </CardContent>
                <CardFooter className="pt-0 flex items-center justify-between">
                  <div className="flex items-center gap-2 text-xs text-muted-foreground">
                    <CalendarDays className="h-3 w-3" />
                    <span>{post.date}</span>
                  </div>
                  <Button variant="link" className="p-0 h-auto text-sm" asChild>
                    <Link to="#">Read More</Link>
                  </Button>
                </CardFooter>
              </Card>
            ))}
          </div>
          
          <div className="mt-12 text-center">
            <Button variant="outline" size="lg">Load More Articles</Button>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Blog;
