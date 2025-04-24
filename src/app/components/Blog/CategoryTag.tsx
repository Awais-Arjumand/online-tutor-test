import React from "react";
import { CategoryTagProps } from "./types";

const CategoryTag: React.FC<CategoryTagProps> = ({ category }) => {
  return (
    <div className="absolute top-5 right-5 px-4 py-1.5 text-base rounded-md bg-neutral-100 text-stone-900 max-sm:px-3 max-sm:py-1 max-sm:text-sm">
      {category}
    </div>
  );
};

export default CategoryTag;
