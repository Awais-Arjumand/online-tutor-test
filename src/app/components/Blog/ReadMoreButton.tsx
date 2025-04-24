import React from "react";
import { ReadMoreButtonProps } from "./types";
import ArrowCircleIcon from "./icons/ArrowCircleIcon";

const ReadMoreButton: React.FC<ReadMoreButtonProps> = ({ onClick }) => {
  return (
    <button
      className="flex gap-2.5 items-center cursor-pointer"
      onClick={onClick}
      aria-label="Read Articles"
    >
      <span className="font-Barlow text-base font-bold text-stone-900 max-sm:text-base">
        Read Articles
      </span>
      <ArrowCircleIcon />
    </button>
  );
};

export default ReadMoreButton;
