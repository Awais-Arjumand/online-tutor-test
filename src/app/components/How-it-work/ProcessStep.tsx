
"use client";

import React from "react";

interface ProcessStepProps {
  imageUrl: string;
  altText: string;
  title: string;
  className?: string;
  imageClassName?: string;
}

const ProcessStep: React.FC<ProcessStepProps> = ({
  imageUrl,
  altText,
  title,
  className = "",
  imageClassName = "",
}) => {
  return (
    <article
      className={`flex flex-col gap-2 items-center rounded-xl ${className}`}
    >
      <img src={imageUrl} alt={altText} className={imageClassName} />
      <h3 className="gap-2.5 text-lg font-Barlow font-bold text-center w-[220px] rounded-xl text-stone-900">
        {title}
      </h3>
    </article>
  );
};

export default ProcessStep;

