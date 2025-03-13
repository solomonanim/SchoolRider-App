
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useToast } from "@/components/ui/use-toast";
import { useAppContext } from "@/context/AppContext";
import { Image, Link as LinkIcon } from "lucide-react";

const CreatePost = () => {
  const navigate = useNavigate();
  const { toast } = useToast();
  const { currentUser } = useAppContext();
  
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [category, setCategory] = useState("General");
  const [thumbnail, setThumbnail] = useState<File | null>(null);
  const [thumbnailPreview, setThumbnailPreview] = useState<string | null>(null);
  const [videoLink, setVideoLink] = useState("");
  
  const handleThumbnailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      const file = e.target.files[0];
      setThumbnail(file);
      setThumbnailPreview(URL.createObjectURL(file));
    }
  };
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!title || !content) {
      toast({
        title: "Missing information",
        description: "Please fill in all required fields",
        variant: "destructive"
      });
      return;
    }
    
    // Here we would typically handle the API call to save the post
    // For now, we'll just simulate a successful post creation
    
    toast({
      title: "Post published!",
      description: "Your post has been successfully published.",
    });
    
    // Navigate back to the blog page
    navigate("/blog");
  };
  
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow pt-28 pb-20">
        <div className="container px-4 sm:px-6 max-w-4xl">
          <h1 className="text-3xl font-bold mb-8">Create New Post</h1>
          
          <Card>
            <form onSubmit={handleSubmit}>
              <CardHeader>
                <CardTitle>Post Details</CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="space-y-2">
                  <Label htmlFor="title">Post Title</Label>
                  <Input 
                    id="title" 
                    value={title} 
                    onChange={(e) => setTitle(e.target.value)} 
                    placeholder="Enter a title for your post"
                    required
                  />
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="category">Category</Label>
                  <Select 
                    value={category} 
                    onValueChange={setCategory}
                  >
                    <SelectTrigger>
                      <SelectValue placeholder="Select a category" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="General">General</SelectItem>
                      <SelectItem value="Safety">Safety</SelectItem>
                      <SelectItem value="Technology">Technology</SelectItem>
                      <SelectItem value="Updates">Updates</SelectItem>
                      <SelectItem value="Testimonials">Testimonials</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="content">Post Content</Label>
                  <Textarea 
                    id="content" 
                    value={content} 
                    onChange={(e) => setContent(e.target.value)} 
                    placeholder="Write your post content here..."
                    required
                    rows={10}
                  />
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="thumbnail">Thumbnail Image</Label>
                  <div className="flex items-center gap-4">
                    <Button 
                      type="button" 
                      variant="outline" 
                      onClick={() => document.getElementById('thumbnail')?.click()}
                      className="gap-2"
                    >
                      <Image className="h-4 w-4" />
                      Upload Thumbnail
                    </Button>
                    <Input 
                      id="thumbnail" 
                      type="file" 
                      accept="image/*" 
                      onChange={handleThumbnailChange} 
                      className="hidden"
                    />
                    {thumbnailPreview && (
                      <div className="relative w-20 h-20 rounded overflow-hidden border">
                        <img 
                          src={thumbnailPreview} 
                          alt="Thumbnail preview" 
                          className="w-full h-full object-cover"
                        />
                      </div>
                    )}
                  </div>
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="video">Video Link (Optional)</Label>
                  <div className="flex gap-2">
                    <div className="flex-grow">
                      <Input 
                        id="video" 
                        value={videoLink} 
                        onChange={(e) => setVideoLink(e.target.value)} 
                        placeholder="https://www.youtube.com/watch?v=..."
                      />
                    </div>
                    {videoLink && (
                      <Button 
                        type="button" 
                        variant="outline"
                        size="icon"
                      >
                        <LinkIcon className="h-4 w-4" />
                      </Button>
                    )}
                  </div>
                </div>
              </CardContent>
              
              <CardFooter className="flex justify-between">
                <Button 
                  type="button" 
                  variant="outline" 
                  onClick={() => navigate("/blog")}
                >
                  Cancel
                </Button>
                <Button type="submit">Publish Post</Button>
              </CardFooter>
            </form>
          </Card>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default CreatePost;
