"use client";
import React from "react";
import BlogPostGrid from "../components/Blog/BlogPostGrid";

const Blog = () => {
  return (
    <div className="w-full h-fit px-4 sm:px-8 md:px-12  xl:px-20 pt-44 pb-10 flex flex-col gap-8 md:gap-12">
      {/* Main Content */}
      <div className="w-full h-auto flex flex-col lg:flex-row justify-between items-center gap-6 md:gap-10 bg-[#fafafa] py-6 md:py-10 lg:py-12 rounded-xl px-4 sm:px-6 md:px-8 lg:px-12 xl:px-20">
  <div className="flex flex-col items-center lg:items-start w-full lg:w-1/2 gap-y-4 md:gap-y-5">
    <h1 className="font-Barlow text-3xl sm:text-4xl md:text-5xl lg:text-[54px] font-extrabold text-secondary leading-tight text-center lg:text-left">
      Articles
    </h1>
    <p className="text-sm md:text-base text-secondary text-center lg:text-left max-w-full md:max-w-[90%] lg:max-w-[500px]">
      Egestas sed tempus urna et pharetra. Leo integer malesuada nunc vel.
      Libero id faucibus nisl tincidunt eget nullam non nisi. Faucibus
      turpis in eu mi bibendum neque egestas.
    </p>

    {/* Input and Button */}
    <div className="w-full flex flex-col sm:flex-row items-center gap-3">
      <input
        type="text"
        placeholder="What do you want to learn?"
        className="w-full sm:flex-grow border border-black h-12 md:h-14 text-sm rounded-lg outline-none placeholder:font-normal px-4"
      />
      <button className="w-full sm:w-28 md:w-32 hover:bg-gray-700 transition-all duration-300 cursor-pointer px-4 py-3 bg-secondary text-white font-medium text-base rounded-md">
        Search
      </button>
    </div>
  </div>

  {/* Image */}
  <div className="w-full lg:w-1/2 flex justify-center">
    <img
      className="w-full max-w-[350px] sm:max-w-[400px] md:max-w-[500px] lg:max-w-[550px] h-auto object-contain"
      src="/images/Tutor_images/img1.svg"
      alt="Tutor illustration"
    />
  </div>
</div>


      {/* Blog Cards */}
      <div className="w-full h-fit">
        <BlogPostGrid />
      </div>
    </div>
  );
};

export default Blog;
