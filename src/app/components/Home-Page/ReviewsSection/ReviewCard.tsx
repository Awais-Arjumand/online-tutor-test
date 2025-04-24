import React from "react";
import { QuoteIcon } from "./StarIcon";
import { StarRating } from "./StarRating";

interface ReviewCardProps {
  image: string;
  title: string;
  text: string;
  courseName: string;
  reviewerName: string;
  rating: number;
}

export const ReviewCard: React.FC<ReviewCardProps> = ({
  image,
  title,
  text,
  courseName,
  reviewerName,
  rating,
}) => {
  return (
    <article className="shrink-0 bg-white rounded-xl border border-solid border-stone-900 h-[260px] w-[600px] max-md:w-[500px] max-sm:w-full">
      <div className="flex relative gap-6 p-8 max-sm:flex-col max-sm:gap-4 max-sm:p-5">
        <img
          src={image}
          alt="Student photo"
          className="object-cover rounded-md h-[200px] w-[170px] max-sm:w-full max-sm:h-[150px]"
        />
        <div className="flex flex-col flex-1 gap-4 max-sm:p-0">
          <StarRating rating={rating} />
          <h2 className="mb-4 text-2xl font-bold text-stone-900">{title}</h2>
          <p className="mb-5 text-base text-stone-800">{text}</p>
          <div className="flex flex-col gap-1.5">
            <p className="text-xs text-stone-800">Course: {courseName}</p>
            <p className="text-sm text-stone-800">{reviewerName}</p>
          </div>
        </div>
        <QuoteIcon className="absolute right-[35px] top-[38px]" />
      </div>
    </article>
  );
};
