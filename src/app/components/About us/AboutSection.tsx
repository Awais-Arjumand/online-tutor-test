"use client";

import React from "react";
import SectionHeading from "./SectionHeading";

interface AboutSectionProps {
  imageUrl: string;
  label: string;
  title: string;
  paragraphs: string[];
  imagePosition: "left" | "right";
}

const AboutSection: React.FC<AboutSectionProps> = ({
  imageUrl,
  label,
  title,
  paragraphs,
  imagePosition,
}) => {
  const imageElement = (
    <img
      src={imageUrl}
      alt={title}
      className="object-contain self-stretch my-auto rounded-xl aspect-[1.31] min-w-60 w-full lg:w-[498px] max-md:max-w-full"
    />
  );

  const contentElement = (
    <article className="flex flex-col self-stretch my-auto min-w-60 w-[562px] max-md:max-w-full">
      <SectionHeading label={label} title={title} />
      <div className="mt-4 max-w-full text-lg leading-7 text-stone-800 w-[562px]">
        {paragraphs.map((paragraph, index) => (
          <p
            key={index}
            className={
              index > 0 ? "mt-3 max-md:max-w-full" : "max-md:max-w-full"
            }
          >
            {paragraph}
          </p>
        ))}
      </div>
    </article>
  );

  return (
    <section className="flex flex-wrap gap-10  items-center max-md:max-w-full">
      {imagePosition === "left" ? (
        <>
          {imageElement}
          {contentElement}
        </>
      ) : (
        <>
          {contentElement}
          {imageElement}
        </>
      )}
    </section>
  );
};

export default AboutSection;
