
import React from "react";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { CalendarDays, User, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

export interface BlogPostProps {
  id: number;
  title: string;
  content: string;
  description: string;
  thumbnailUrl: string;
  author: {
    name: string;
    avatarUrl?: string;
  };
  date: string;
  category: string;
}

export const BlogPost: React.FC<BlogPostProps> = ({
  id,
  title,
  description,
  thumbnailUrl,
  author,
  date,
  category,
}) => {
  return (
    <Card className="overflow-hidden border shadow-sm hover:shadow-md transition-shadow h-full flex flex-col">
      <div className="aspect-video relative">
        <img 
          src={thumbnailUrl} 
          alt={title} 
          className="absolute inset-0 w-full h-full object-cover"
        />
      </div>
      <CardHeader className="pb-3 flex-grow">
        <div className="flex items-center justify-between mb-2">
          <span className="text-xs font-medium bg-primary/10 text-primary px-3 py-1 rounded-full">
            {category}
          </span>
        </div>
        <CardTitle className="text-xl">{title}</CardTitle>
      </CardHeader>
      <CardContent className="pb-4">
        <CardDescription>{description}</CardDescription>
      </CardContent>
      <CardFooter className="pt-0 flex items-center justify-between mt-auto">
        <div className="flex items-center gap-2">
          <Avatar className="h-6 w-6">
            <AvatarImage src={author.avatarUrl} alt={author.name} />
            <AvatarFallback>{author.name.charAt(0)}</AvatarFallback>
          </Avatar>
          <span className="text-xs text-muted-foreground">{author.name}</span>
          <span className="text-xs text-muted-foreground">•</span>
          <span className="text-xs text-muted-foreground">{date}</span>
        </div>
        <Button variant="link" className="p-0 h-auto text-sm" asChild>
          <Link to={`/blog/${id}`}>Read More</Link>
        </Button>
      </CardFooter>
    </Card>
  );
};
