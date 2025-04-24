"use client";
import React from "react";
import { BlogGridProps } from "./types";
import BlogCard from "./BlogCard";
import Pagination from "./Pagination";

const BlogGrid: React.FC<BlogGridProps> = ({
  posts,
  currentPage,
  totalPages,
  onPageChange,
}) => {
  return (
    <section className="flex flex-col gap-9 p-5 mx-auto my-0 max-w-[1240px] max-sm:gap-5 max-sm:p-2.5">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-7 w-full">
        {posts.map((post) => (
          <BlogCard key={post.id} post={post} />
        ))}
      </div>
      <Pagination
        currentPage={currentPage}
        totalPages={totalPages}
        onPageChange={onPageChange}
      />
    </section>
  );
};

export default BlogGrid;