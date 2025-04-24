import React from "react";
import FAQSection from "../components/Faqs/faqQuestions";

const Faqs = () => {
  return (
    <div className="w-full h-fit px-4 sm:px-5 md:px-7 lg:px-20 xl:px-20 pt-44 pb-10 flex flex-col gap-8 md:gap-12">
      {/* Hero Section */}
      <div className="w-full flex flex-col lg:flex-row justify-between items-center px-4 sm:px-8 md:px-12 lg:px-16 xl:px-20 gap-6 md:gap-8 xl:gap-10 bg-[#fafafa] py-6 md:py-10 lg:py-12 rounded-xl">
  {/* Text Section */}
  <div className="flex flex-col items-center lg:items-start w-full lg:w-[50%] xl:w-[48%] gap-y-3 sm:gap-y-4 md:gap-y-5">
    <h1 className="text-2xl xs:text-3xl sm:text-4xl md:text-[42px] lg:text-[47px] xl:text-[52px] font-extrabold text-secondary leading-tight sm:leading-snug text-center lg:text-left">
      Popular Questions to Ask Before Choosing a Course
    </h1>
    <p className="text-xs xs:text-sm sm:text-base md:text-[17px] lg:text-lg text-secondary max-w-full lg:max-w-[489px] text-center lg:text-left leading-relaxed">
      Egestas sed tempus urna et pharetra. Leo integer malesuada nunc vel.
      Libero id faucibus nisl tincidunt eget nullam non nisi. Faucibus
      turpis in eu mi bibendum neque egestas.
    </p>
  </div>

  {/* Image Section - Improved Responsiveness */}
  <div className="w-full lg:w-[45%] xl:w-[48%] flex justify-center items-center mt-4 sm:mt-6 lg:mt-0">
    <div className="relative w-full h-auto aspect-[1.2/1] sm:aspect-[1.1/1] md:aspect-[1/1] max-w-[280px] sm:max-w-[320px] md:max-w-[380px] lg:max-w-[420px] xl:max-w-[500px]">
      <img
        className="w-full h-full object-contain"
        src="/images/Faqs_images/img1.svg"
        alt="Tutor illustration"
        loading="lazy"
      />
    </div>
  </div>
</div>

      {/* FAQ Section */}
      <div className="w-full h-fit">
        <FAQSection />
      </div>
    </div>
  );
};

export default Faqs;
