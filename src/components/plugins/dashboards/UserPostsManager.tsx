
import React from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { PlusCircle, Pencil, Trash2 } from "lucide-react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { BlogPostProps } from "@/components/blog/BlogPost";

// Mock data - in a real app this would come from an API
const userPosts: BlogPostProps[] = [
  {
    id: 101,
    title: "My Experience with SchoolRider",
    description: "How SchoolRider has improved my school's dismissal process",
    content: "How SchoolRider has improved my school's dismissal process...",
    thumbnailUrl: "https://images.unsplash.com/photo-1544717305-2782549b5136?auto=format&fit=crop&q=80&w=1000",
    author: {
      name: "Current User",
    },
    date: "June 15, 2023",
    category: "Testimonials"
  },
  {
    id: 102,
    title: "Tips for Implementing SchoolRider",
    description: "Best practices for setting up SchoolRider at your school",
    content: "Best practices for setting up SchoolRider at your school...",
    thumbnailUrl: "https://images.unsplash.com/photo-1581447109200-bf2769546fd8?auto=format&fit=crop&q=80&w=1000",
    author: {
      name: "Current User",
    },
    date: "July 3, 2023",
    category: "Implementation"
  }
];

export const UserPostsManager = () => {
  const navigate = useNavigate();
  
  const handleEditPost = (postId: number) => {
    // In a real app, this would navigate to an edit page with the post ID
    console.log(`Editing post ${postId}`);
    // navigate(`/edit-post/${postId}`);
  };
  
  const handleDeletePost = (postId: number) => {
    // In a real app, this would show a confirmation dialog and then delete
    console.log(`Deleting post ${postId}`);
  };
  
  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h2 className="text-2xl font-bold">My Blog Posts</h2>
        <Link to="/create-post">
          <Button className="gap-2">
            <PlusCircle className="h-4 w-4" />
            Create New Post
          </Button>
        </Link>
      </div>
      
      {userPosts.length === 0 ? (
        <div className="text-center py-12 bg-muted/50 rounded-lg">
          <p className="text-muted-foreground mb-4">You haven't created any posts yet</p>
          <Button variant="outline" className="gap-2" asChild>
            <Link to="/create-post">
              <PlusCircle className="h-4 w-4" />
              Create Your First Post
            </Link>
          </Button>
        </div>
      ) : (
        <div className="space-y-4">
          {userPosts.map((post) => (
            <Card key={post.id} className="overflow-hidden">
              <CardContent className="p-0">
                <div className="flex flex-col sm:flex-row gap-4">
                  <div className="sm:w-40 h-32 relative">
                    <img 
                      src={post.thumbnailUrl} 
                      alt={post.title} 
                      className="absolute inset-0 w-full h-full object-cover"
                    />
                  </div>
                  <div className="p-4 flex-1">
                    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-2">
                      <h3 className="font-semibold text-lg">{post.title}</h3>
                      <span className="text-xs font-medium bg-primary/10 text-primary px-3 py-1 rounded-full w-fit">
                        {post.category}
                      </span>
                    </div>
                    <p className="text-muted-foreground text-sm mb-1">{post.description}</p>
                    <div className="text-xs text-muted-foreground">
                      Published on {post.date}
                    </div>
                  </div>
                </div>
              </CardContent>
              <CardFooter className="flex justify-end gap-2 py-2">
                <Button 
                  variant="outline" 
                  size="sm" 
                  className="gap-1"
                  onClick={() => handleEditPost(post.id)}
                >
                  <Pencil className="h-3.5 w-3.5" />
                  Edit
                </Button>
                <Button 
                  variant="destructive" 
                  size="sm" 
                  className="gap-1"
                  onClick={() => handleDeletePost(post.id)}
                >
                  <Trash2 className="h-3.5 w-3.5" />
                  Delete
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      )}
    </div>
  );
};
