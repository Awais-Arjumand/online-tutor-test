"use client";
import { ReviewsData } from "@/app/utils/web-dummy-data";
import React, { useState, useEffect } from "react";
import { FaArrowLeftLong, FaArrowRightLong, FaStarHalfStroke } from "react-icons/fa6";
import { TiStarFullOutline } from "react-icons/ti";


export const ReviewsSection: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isFading, setIsFading] = useState(false);
  const [isLeftHovered, setIsLeftHovered] = useState(false);
  const [isRightHovered, setIsRightHovered] = useState(false);
  const [reviewsPerPage, setReviewsPerPage] = useState(2);

  console.log(isLeftHovered, isRightHovered);

  useEffect(() => {
    const handleResize = () => {
      setReviewsPerPage(window.innerWidth < 768 ? 1 : 2);
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const totalReviews = ReviewsData.length;
  const maxIndex = Math.ceil(totalReviews / reviewsPerPage) - 1;

  const handleNext = () => {
    if (currentIndex < maxIndex) {
      setIsFading(true);
      setTimeout(() => {
        setCurrentIndex((prevIndex) => prevIndex + 1);
        setIsFading(false);
      }, 300);
    }
  };

  const handlePrevious = () => {
    if (currentIndex > 0) {
      setIsFading(true);
      setTimeout(() => {
        setCurrentIndex((prevIndex) => prevIndex - 1);
        setIsFading(false);
      }, 300);
    }
  };

  const currentReviews = ReviewsData.slice(
    currentIndex * reviewsPerPage,
    (currentIndex + 1) * reviewsPerPage
  );

  return (
    <div className="flex flex-col gap-8 overflow-hidden ">
      {/* Heading & Arrows */}
      <div className="flex flex-col lg:flex-row gap-y-3 justify-between items-center">
        <h1 className="font-bold text-2xl sm:text-3xl lg:text-4xl text-center sm:text-left">
          OUR STUDENT REVIEWS
        </h1>

        {/* Navigation Arrows */}
        <div className="flex gap-4 mt-4 sm:mt-0">
          {/* Left Arrow */}
          <button
            onClick={handlePrevious}
            className="w-10 h-10 cursor-pointer border border-black rounded-full flex items-center justify-center transition-all duration-300 hover:bg-primary hover:text-white hover:border-transparent disabled:opacity-30 disabled:cursor-not-allowed"
            onMouseEnter={() => setIsLeftHovered(true)}
            onMouseLeave={() => setIsLeftHovered(false)}
            disabled={currentIndex === 0}
          >
            <FaArrowLeftLong />
          </button>

          {/* Right Arrow */}
          <button
            onClick={handleNext}
            className="w-10 h-10 cursor-pointer border border-black rounded-full flex items-center justify-center transition-all duration-300 hover:bg-primary hover:text-white hover:border-transparent disabled:opacity-30 disabled:cursor-not-allowed"
            onMouseEnter={() => setIsRightHovered(true)}
            onMouseLeave={() => setIsRightHovered(false)}
            disabled={currentIndex === maxIndex}
          >
            <FaArrowRightLong />
          </button>
        </div>
      </div>

      {/* Reviews Body */}
      <div className="reviews-body w-full relative">
        <div
          className={`flex flex-col lg:flex-row gap-y-6 gap-x-5 justify-center sm:justify-between transition-opacity duration-300 ${
            isFading ? "opacity-0" : "opacity-100"
          }`}
        >
        {currentReviews.map((review, index) => (
  <div
    key={index}
    className="w-full border border-gray-500 rounded-lg flex flex-row p-4 sm:p-6 gap-4 sm:gap-6"
  >
    {/* Image Section - Responsive with fixed aspect ratio */}
    <div className="w-[100px] sm:w-[120px] md:w-[150px] lg:w-[180px] flex-shrink-0">
      <div className="relative w-full aspect-square rounded-md overflow-hidden">
        <img
          className="w-full h-full object-cover"
          src={review.img}
          alt={review.name}
          loading="lazy"
        />
      </div>
    </div>

    {/* Content Section */}
    <div className="flex-1 flex flex-col justify-between min-w-0"> {/* min-w-0 prevents flex overflow */}
      {/* Stars & Quote */}
      <div className="flex justify-between items-start">
        <div className="text-primary text-base lg:text-lg flex items-center gap-1">
          {[...Array(4)].map((_, i) => (
            <TiStarFullOutline key={i} />
          ))}
          <FaStarHalfStroke />
        </div>
        <img 
          className="w-6 sm:w-7 md:w-8 flex-shrink-0 " 
          src="/images/Home_images/img15.svg" 
          alt="quote" 
          loading="lazy"
        />
      </div>

      {/* Review Content - Added truncation for long text */}
      <div className="mt-2 space-y-1 sm:space-y-2">
        <h2 className="font-bold text-sm sm:text-base md:text-lg xl:text-xl truncate">
          {review.headline}
        </h2>
        <p className="text-xs sm:text-sm md:text-base text-gray-700 line-clamp-2 sm:line-clamp-3">
          {review.description}
        </p>
      </div>

      {/* Reviewer Info */}
      <div className="mt-2 sm:mt-3 text-xs sm:text-sm">
        <p className="text-gray-600 truncate">Course: {review.course}</p>
        <p className="font-bold text-[#29281E] truncate">{review.name}</p>
      </div>
    </div>
  </div>
))}
        </div>
      </div>
    </div>
  );
};
