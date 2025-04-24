"use client";

import React from "react";
import { TutorCard } from "./TutorCard";
import { tutors } from "@/app/utils/web-dummy-data";
import Link from "next/link";

export const TutorListing: React.FC = () => {
  return (
    <section className="flex flex-col items-center ">
      <div className="flex flex-col justify-center items-center max-w-full w-[972px] ">
        <h1 className="gap-2.5 font-Barlow  self-stretch text-center text-4xl font-extrabold text-stone-900 max-md:max-w-full">
          Best Online Tutors for You
        </h1>
        <p className="mt-4 text-base text-center text-stone-800 max-md:max-w-full">
          Learn from top-qualified tutors who provide personalized, flexible,
          and interactive lessons. Whether for academics, test prep, or
          skill-building, our expert tutors are here to help—anytime, anywhere.
          Start learning today!
        </p>
      </div>

      <div className="mt-9 max-md:max-w-full flex flex-col gap-y-10">
  <div className="grid grid-cols-3 xl:grid-cols-4 gap-4 gap-x-8 lg:gap-x-14  max-lg:grid-cols-2 max-sm:grid-cols-1">
  {tutors.map((tutor, index) => (
  <TutorCard 
    key={index} 
    {...tutor} 
    id={`tutor-${index}-${tutor.name.replace(/\s+/g, '-').toLowerCase()}`}
  />
))}
  </div>
<Link href={"/tutors"} className="w-fit h-fit font-Barlow  px-9 py-4 hover:bg-secondary hover:text-white transition-all duration-300 cursor-pointer border border-black rounded-lg flex justify-center items-center text-secondary text-base font-bold m-auto">SEE MORE TUTORS</Link>
</div>

    </section>
  );
};

export default TutorListing;
