"use client";

import React from "react";

interface RatingStarsProps {
  rating: number;
  totalReviews: string;
}

export const RatingStars: React.FC<RatingStarsProps> = ({
  rating,
  totalReviews,
}) => {
  return (
    <div className="flex flex-wrap gap-1 justify-center items-center mt-2 w-full max-w-[143px]">
      <div className="flex gap-0.5 items-start self-stretch my-auto">
        {[...Array(5)].map((_, index) => (
          <img
            key={index}
            src={
              index < Math.floor(rating)
                ? "https://cdn.builder.io/api/v1/image/assets/e48c41967d9f4a3b81b2800666959c50/0d1852967fc4d966c7cb65c1e19e8aa5f13791d991f18ba503c71a64f384792b?placeholderIfAbsent=true"
                : "https://cdn.builder.io/api/v1/image/assets/e48c41967d9f4a3b81b2800666959c50/bdc3b44f961b8ddd039bbe49f0149f7b0967ae961e58bd4c735a1547afbb187a?placeholderIfAbsent=true"
            }
            className="object-contain shrink-0 aspect-square w-[18px]"
            alt={index < Math.floor(rating) ? "Filled star" : "Empty star"}
          />
        ))}
      </div>
      <span className="self-stretch my-auto text-xs font-medium text-stone-900">
        {totalReviews}
      </span>
    </div>
  );
};
