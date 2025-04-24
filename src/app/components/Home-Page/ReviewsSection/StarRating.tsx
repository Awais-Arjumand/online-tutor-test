import React from "react";
import { StarHalfIcon, StarIcon } from "./StarIcon";

interface StarRatingProps {
  rating: number;
}

export const StarRating: React.FC<StarRatingProps> = ({ rating }) => {
  const fullStars = Math.floor(rating);
  const hasHalfStar = rating % 1 !== 0;

  return (
    <div className="flex gap-0.5 mb-3">
      {[...Array(fullStars)].map((_, index) => (
        <StarIcon key={`star-${index}`} />
      ))}
      {hasHalfStar && <StarHalfIcon />}
    </div>
  );
};
