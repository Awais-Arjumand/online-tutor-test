
"use client";

import React from "react";

interface SectionHeadingProps {
  label: string;
  title: string;
}

const SectionHeading: React.FC<SectionHeadingProps> = ({ label, title }) => {
  return (
    <header className="self-start">
      <h3 className="font-Barlow text-base font-medium text-purple-600 uppercase">
        {label}
      </h3>
      <h2 className="font-Barlow text-5xl font-bold mt-6 text-stone-900 max-md:text-4xl">
        {title}
      </h2>
    </header>
  );
};

export default SectionHeading;

