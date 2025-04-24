import React from "react";
import { BlogCardProps } from "./types";
import CategoryTag from "./CategoryTag";
import PostMeta from "./PostMeta";
import ReadMoreButton from "./ReadMoreButton";

const BlogCard: React.FC<BlogCardProps> = ({ post, onReadMore }) => {
  return (
    <article className="flex overflow-hidden flex-col flex-1 gap-4 bg-white rounded-xl max-md:w-full">
      <div className="relative w-full">
        <img
          src={post.imageUrl}
          className="object-cover w-full h-[220px] rounded-[10px_10px_0_0]"
          alt="Blog post image"
        />
        <CategoryTag category={post.category} />
      </div>
      <div className="px-0 pt-0 pb-4">
        <PostMeta
          isSticky={post.isSticky}
          author={post.author}
          date={post.date}
        />
        <h2 className="mb-6 text-xl w-[272px] font-bold text-stone-900 max-sm:text-lg">
          {post.title}
        </h2>
        <ReadMoreButton
          onClick={() => onReadMore && onReadMore(post.id)}
        />
      </div>
    </article>
  );
};

export default BlogCard;
