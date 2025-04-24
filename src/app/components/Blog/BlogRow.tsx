import React from "react";
import { BlogPost } from "./types";
import BlogCard from "./BlogCard";

interface BlogRowProps {
  posts: BlogPost[];
  onReadMore?: (postId?: string) => void;
}

export const BlogRow: React.FC<BlogRowProps> = ({ posts, onReadMore }) => {
  return (
    <div className="flex gap-7 w-full max-md:flex-col">
      {posts.map((post) => (
        <BlogCard key={post.id} post={post} onReadMore={onReadMore} />
      ))}
    </div>
  );
};
