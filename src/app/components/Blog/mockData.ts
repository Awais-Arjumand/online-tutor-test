import { BlogPost } from "./types";

// Mock data for blog posts
export const mockBlogPosts: BlogPost[] = [
  {
    id: "1",
    imageUrl:
      "https://cdn.builder.io/api/v1/image/assets/TEMP/f9f0837fa21af03beb287a6589f94c72870ee568",
    category: "PHOTOGRAPHY",
    title: "The Top Technical Skills All Employees Need in 2022",
    author: "Durrad",
    date: "Feb 12, 2023",
    isSticky: true,
  },
  {
    id: "2",
    imageUrl:
      "https://cdn.builder.io/api/v1/image/assets/TEMP/836d887eb505fd60c5873adedecedf305fc3b9b9",
    category: "PHOTOGRAPHY",
    title: "The Top Technical Skills All Employees Need in 2022",
    author: "Durrad",
    date: "Feb 12, 2023",
    isSticky: true,
  },
  {
    id: "3",
    imageUrl:
      "https://cdn.builder.io/api/v1/image/assets/TEMP/e072e94940891e3f8ba324e35b7c53a075aa0f03",
    category: "PHOTOGRAPHY",
    title: "The Top Technical Skills All Employees Need in 2022",
    author: "Durrad",
    date: "Feb 12, 2023",
    isSticky: true,
  },
  {
    id: "4",
    imageUrl:
      "https://cdn.builder.io/api/v1/image/assets/TEMP/f9f0837fa21af03beb287a6589f94c72870ee568",
    category: "PHOTOGRAPHY",
    title: "The Top Technical Skills All Employees Need in 2022",
    author: "Durrad",
    date: "Feb 12, 2023",
    isSticky: true,
  },
  {
    id: "5",
    imageUrl:
      "https://cdn.builder.io/api/v1/image/assets/TEMP/836d887eb505fd60c5873adedecedf305fc3b9b9",
    category: "PHOTOGRAPHY",
    title: "The Top Technical Skills All Employees Need in 2022",
    author: "Durrad",
    date: "Feb 12, 2023",
    isSticky: true,
  },
  {
    id: "6",
    imageUrl:
      "https://cdn.builder.io/api/v1/image/assets/TEMP/e072e94940891e3f8ba324e35b7c53a075aa0f03",
    category: "PHOTOGRAPHY",
    title: "The Top Technical Skills All Employees Need in 2022",
    author: "Durrad",
    date: "Feb 12, 2023",
    isSticky: true,
  },
  {
    id: "7",
    imageUrl:
      "https://cdn.builder.io/api/v1/image/assets/TEMP/f9f0837fa21af03beb287a6589f94c72870ee568",
    category: "PHOTOGRAPHY",
    title: "The Top Technical Skills All Employees Need in 2022",
    author: "Durrad",
    date: "Feb 12, 2023",
    isSticky: true,
  },
  {
    id: "8",
    imageUrl:
      "https://cdn.builder.io/api/v1/image/assets/TEMP/836d887eb505fd60c5873adedecedf305fc3b9b9",
    category: "PHOTOGRAPHY",
    title: "The Top Technical Skills All Employees Need in 2022",
    author: "Durrad",
    date: "Feb 12, 2023",
    isSticky: true,
  },
  {
    id: "9",
    imageUrl:
      "https://cdn.builder.io/api/v1/image/assets/TEMP/e072e94940891e3f8ba324e35b7c53a075aa0f03",
    category: "PHOTOGRAPHY",
    title: "The Top Technical Skills All Employees Need in 2022",
    author: "Durrad",
    date: "Feb 12, 2023",
    isSticky: true,
  },
];

// Function to chunk the posts into rows of 3
export const getPostsByPage = (
  page: number,
  postsPerPage: number = 9,
): BlogPost[] => {
  const startIndex = (page - 1) * postsPerPage;
  return mockBlogPosts.slice(startIndex, startIndex + postsPerPage);
};

// Function to get posts in rows (3 posts per row)
export const getPostRows = (posts: BlogPost[]): BlogPost[][] => {
  const rows: BlogPost[][] = [];
  for (let i = 0; i < posts.length; i += 3) {
    rows.push(posts.slice(i, i + 3));
  }
  return rows;
};

// Calculate total pages
export const getTotalPages = (
  totalPosts: number,
  postsPerPage: number = 9,
): number => {
  return Math.ceil(totalPosts / postsPerPage);
};
