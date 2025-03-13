
import React from "react";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { CalendarDays, User, ArrowRight, PlusCircle } from "lucide-react";
import { Link } from "react-router-dom";
import { BlogPost, BlogPostProps } from "@/components/blog/BlogPost";
import { useAppContext } from "@/context/AppContext";

const blogPosts: BlogPostProps[] = [
  {
    id: 1,
    title: "How SchoolRider is Transforming School Dismissal Safety",
    description: "Learn how schools across the country are implementing SchoolRider to make dismissal safer and more efficient.",
    content: "Learn how schools across the country are implementing SchoolRider to make dismissal safer and more efficient.",
    thumbnailUrl: "https://images.unsplash.com/photo-1581078426770-6d336e5de7bf?ixlib=rb-4.0.3&auto=format&fit=crop&w=880&q=80",
    author: {
      name: "Amara Johnson",
      avatarUrl: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
    },
    date: "May 15, 2023",
    category: "Safety"
  },
  {
    id: 2,
    title: "The Benefits of Digitizing School Pickup Systems",
    description: "Research shows that digital dismissal systems can reduce pickup times by up to 40% while improving safety protocols.",
    content: "Research shows that digital dismissal systems can reduce pickup times by up to 40% while improving safety protocols.",
    thumbnailUrl: "https://images.unsplash.com/photo-1543269865-cbf427effbad?ixlib=rb-4.0.3&auto=format&fit=crop&w=880&q=80",
    author: {
      name: "Marcus Davis",
      avatarUrl: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
    },
    date: "April 22, 2023",
    category: "Technology"
  },
  {
    id: 3,
    title: "Parent Testimonials: How SchoolRider Changed Our Routine",
    description: "Real stories from parents who have experienced the difference SchoolRider makes in their daily school pickup routine.",
    content: "Real stories from parents who have experienced the difference SchoolRider makes in their daily school pickup routine.",
    thumbnailUrl: "https://images.unsplash.com/photo-1594608661623-aa0bd3a69799?ixlib=rb-4.0.3&auto=format&fit=crop&w=880&q=80",
    author: {
      name: "Sophia Williams",
      avatarUrl: "https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
    },
    date: "March 10, 2023",
    category: "Testimonials"
  },
  {
    id: 4,
    title: "SchoolRider's New Features for the Upcoming School Year",
    description: "Explore the new features and improvements coming to SchoolRider for the next academic year.",
    content: "Explore the new features and improvements coming to SchoolRider for the next academic year.",
    thumbnailUrl: "https://images.unsplash.com/photo-1581078426770-6d336e5de7bf?ixlib=rb-4.0.3&auto=format&fit=crop&w=880&q=80",
    author: {
      name: "David Thompson",
      avatarUrl: "https://images.unsplash.com/photo-1492562080023-ab3db95bfbce?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
    },
    date: "February 28, 2023",
    category: "Updates"
  },
  {
    id: 5,
    title: "How to Implement SchoolRider at Your School: A Principal's Guide",
    description: "A step-by-step guide for school administrators looking to transform their dismissal process with SchoolRider.",
    content: "A step-by-step guide for school administrators looking to transform their dismissal process with SchoolRider.",
    thumbnailUrl: "https://images.unsplash.com/photo-1531482615713-2afd69097998?ixlib=rb-4.0.3&auto=format&fit=crop&w=880&q=80",
    author: {
      name: "Principal James Wilson",
      avatarUrl: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
    },
    date: "January 15, 2023",
    category: "Implementation"
  }
];

const Blog = () => {
  const { isAuthenticated } = useAppContext();
  
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow pt-28">
        <section className="container px-4 py-12">
          <div className="flex justify-between items-center mb-16">
            <div>
              <h1 className="text-4xl md:text-5xl font-bold mb-4">SchoolRider Blog</h1>
              <p className="text-xl text-muted-foreground max-w-2xl">
                News, insights, and stories about school dismissal management and education safety
              </p>
            </div>
            
            {isAuthenticated && (
              <Link to="/create-post">
                <Button className="gap-2">
                  <PlusCircle className="h-4 w-4" />
                  Create Post
                </Button>
              </Link>
            )}
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
              <BlogPost key={post.id} {...post} />
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
