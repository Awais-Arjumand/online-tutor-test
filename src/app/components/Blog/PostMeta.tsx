import React from "react";
import { PostMetaProps } from "./types";
import StickyIcon from "./icons/StickyIcon";
import AuthorIcon from "./icons/AuthorIcon";
import CalendarIcon from "./icons/CalendarIcon";

const PostMeta: React.FC<PostMetaProps> = ({ isSticky, author, date }) => {
  return (
    <div className="flex gap-4 mb-6 max-sm:flex-wrap">
      {isSticky && (
        <div className="flex gap-0.5 items-center">
          <div>
            <StickyIcon />
          </div>
          <div className="text-sm text-stone-900">Sticky Post</div>
        </div>
      )}
      <div className="flex gap-0.5 items-center">
        <div>
          <AuthorIcon />
        </div>
        <div className="text-sm text-stone-900">by {author}</div>
      </div>
      <div className="flex gap-0.5 items-center">
        <div>
          <CalendarIcon />
        </div>
        <div className="text-sm text-stone-900">{date}</div>
      </div>
    </div>
  );
};

export default PostMeta;
