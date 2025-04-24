"use client";

import React from "react";
import { FaArrowRightLong } from "react-icons/fa6";
import { Badge } from "../Home-Page/Badge";
import { RatingStars } from "../Home-Page/RatingStars";

interface TutorCardsProps {
  name: string;
  qualifications: string;
  imageUrl: string;
  hourlyRate: string;
  subjects: string[];
  levels: string[];
  experience: string;
  id: string;
}

export const TutorCards: React.FC<TutorCardsProps> = ({
  name,
  qualifications,
  imageUrl,
  hourlyRate,
  subjects,
  levels,
  id
}) => {
  const generatedId = React.useId();
  
  const handleViewProfile = () => {
    console.log("Prop ID:", id);
    console.log("Generated ID:", generatedId);

   
  };
  return (
    <div className="flex flex-col justify-center px-0  py-1.5 min-w-60 w-full ">
      <article className="w-full bg-white rounded-xl border  border-neutral-200">
        <div id={id} className="flex flex-col items-center px-5 py-6 w-full bg-white rounded-xl border-2 border-solid border-neutral-200">
          <header className="flex gap-5 justify-between self-stretch w-full text-xs font-medium whitespace-nowrap">
            <Badge text="Available" variant="success" />
            <span className="gap-2.5 self-stretch py-1.5 rounded-3xl text-stone-900">
              {hourlyRate}
            </span>
          </header>

          <img
            src={imageUrl}
            alt={`${name}'s profile picture`}
            className="object-contain rounded-full mt-5 max-w-full aspect-square w-[100px]"
          />

          <div className="flex flex-col  items-center mt-2.5">
            <h3 className="text-lg font-semibold text-stone-900">{name}</h3>
            <p className="mt-2 text-sm text-neutral-400">{qualifications}</p>
            <RatingStars rating={4} totalReviews="( 1.5k )" />
          </div>

            <div className="flex flex-col  items-center justify-center  self-stretch mt-6 mr-3  text-sm font-medium max-md:mx-2.5">
            <div className="flex gap-2 items-center self-center text-purple-600">
              {levels.map((level, index) => (
                <Badge key={index} text={level} variant="primary" />
              ))}
            </div>
            <div className="flex gap-2.5 items-center justify-center mt-2.5 w-full whitespace-nowrap text-stone-900">
              {subjects.map((subject, index) => (
                <Badge
                  key={index}
                  text={subject}
                  variant={
                    index === subjects.length - 1 ? "primary" : "secondary"
                  }
                  className={
                    index === subjects.length - 1
                      ? "bg-purple-600 text-white shadow-[0px_4px_4px_rgba(164,53,240,0.25)]"
                      : ""
                  }
                />
              ))}
            </div>
          </div>
        

          <h1 className=" mt-6 text-sm text-center text-neutral-400">
            I have over
            <span className="font-medium text-stone-900"> 12 years</span> of
            professional and teaching experience.
          </h1>

          <hr className="shrink-0 mt-3 w-28 h-px border border-solid border-zinc-300" />

          <button onClick={handleViewProfile} className="flex gap-2.5 items-center mt-3 cursor-pointer">
            <span className="gap-2.5 self-stretch pt-0.5 pb-1 my-auto text-sm font-medium text-stone-900">
              View Profile
            </span>
            <div className="self-stretch my-auto w-6">
              <div className="flex shrink-0 w-6 h-6 bg-purple-600 rounded-full justify-center items-center text-white" ><FaArrowRightLong  className="text-sm"/>
              </div>
            </div>
          </button>
        </div>
      </article>
    </div>
  );
};
