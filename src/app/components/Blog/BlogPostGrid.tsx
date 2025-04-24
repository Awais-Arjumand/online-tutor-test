"use client";
import React, { useState } from "react";
import BlogGrid from "./BlogGrid";
import { BlogPost } from "./types";

// Sample data for the blog posts
const samplePosts: BlogPost[] = [
  {
    id: "1",
    imageUrl:
      "https://cdn.builder.io/api/v1/image/assets/TEMP/f9f0837fa21af03beb287a6589f94c72870ee568",
    category: "PHOTOGRAPHY",
    isSticky: true,
    author: "Durrad",
    date: "Feb 12, 2023",
    title: "The Top Technical Skills All Employees Need in 2022",
  },
  {
    id: "2",
    imageUrl:
      "https://cdn.builder.io/api/v1/image/assets/TEMP/836d887eb505fd60c5873adedecedf305fc3b9b9",
    category: "PHOTOGRAPHY",
    isSticky: true,
    author: "Durrad",
    date: "Feb 12, 2023",
    title: "The Top Technical Skills All Employees Need in 2022",
  },
  {
    id: "3",
    imageUrl:
      "https://cdn.builder.io/api/v1/image/assets/TEMP/e072e94940891e3f8ba324e35b7c53a075aa0f03",
    category: "PHOTOGRAPHY",
    isSticky: true,
    author: "Durrad",
    date: "Feb 12, 2023",
    title: "The Top Technical Skills All Employees Need in 2022",
  },
  {
    id: "4",
    imageUrl:
      "https://cdn.builder.io/api/v1/image/assets/TEMP/f9f0837fa21af03beb287a6589f94c72870ee568",
    category: "PHOTOGRAPHY",
    isSticky: true,
    author: "Durrad",
    date: "Feb 12, 2023",
    title: "The Top Technical Skills All Employees Need in 2022",
  },
  {
    id: "5",
    imageUrl:
      "https://cdn.builder.io/api/v1/image/assets/TEMP/836d887eb505fd60c5873adedecedf305fc3b9b9",
    category: "PHOTOGRAPHY",
    isSticky: true,
    author: "Durrad",
    date: "Feb 12, 2023",
    title: "The Top Technical Skills All Employees Need in 2022",
  },
  {
    id: "6",
    imageUrl:
      "https://cdn.builder.io/api/v1/image/assets/TEMP/e072e94940891e3f8ba324e35b7c53a075aa0f03",
    category: "PHOTOGRAPHY",
    isSticky: true,
    author: "Durrad",
    date: "Feb 12, 2023",
    title: "The Top Technical Skills All Employees Need in 2022",
  },
  {
    id: "7",
    imageUrl:
      "https://cdn.builder.io/api/v1/image/assets/TEMP/f9f0837fa21af03beb287a6589f94c72870ee568",
    category: "PHOTOGRAPHY",
    isSticky: true,
    author: "Durrad",
    date: "Feb 12, 2023",
    title: "The Top Technical Skills All Employees Need in 2022",
  },
  {
    id: "8",
    imageUrl:
      "https://cdn.builder.io/api/v1/image/assets/TEMP/836d887eb505fd60c5873adedecedf305fc3b9b9",
    category: "PHOTOGRAPHY",
    isSticky: true,
    author: "Durrad",
    date: "Feb 12, 2023",
    title: "The Top Technical Skills All Employees Need in 2022",
  },
  {
    id: "9",
    imageUrl:
      "https://cdn.builder.io/api/v1/image/assets/TEMP/e072e94940891e3f8ba324e35b7c53a075aa0f03",
    category: "PHOTOGRAPHY",
    isSticky: true,
    author: "Durrad",
    date: "Feb 12, 2023",
    title: "The Top Technical Skills All Employees Need in 2022",
  },
];

const BlogPostGrid: React.FC = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const totalPages = 12;

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
    console.log(`Fetching posts for page ${page}`);
  };

  return (
    <main>
      <BlogGrid
        posts={samplePosts}
        currentPage={currentPage}
        totalPages={totalPages}
        onPageChange={handlePageChange}
      />
    </main>
  );
};

export default BlogPostGrid;
