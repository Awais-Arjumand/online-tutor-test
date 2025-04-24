import React from "react";
import { HomeHowItsWorkCard } from "../components/Home-Page/HomeHowItsWorkCard";
import { HomeHowItsWorkCardData } from "../utils/web-dummy-data";
import HowItWorksProcess from "../components/How-it-work/HowItWorksProcess";
import Image from "next/image";
import Stats from "../components/How-it-work/Stats";
import { ReviewsSection } from "../components/Home-Page/ReviewsSection/ReviewsSection";
import Link from "next/link";

const HowItsWork = () => {
  const StatsProps = [
    {
      FirstHeading: "32,000+",
      SecondHeading: "Experienced tutors",
    },
    {
      FirstHeading: "300,000+",
      SecondHeading: "5-star tutor reviews",
    },
    {
      FirstHeading: "120+",
      SecondHeading: "Subjects taught",
    },
    {
      FirstHeading: "180+",
      SecondHeading: "Courses taught",
    },
  ];

  return (
    <div className="w-full h-fit pt-20 md:pt-44 pb-10 flex flex-col gap-8 md:gap-12">
      {/* Hero Section */}
      <div className="px-4 sm:px-6 md:px-5 lg:px-7 xl:px-20 w-full h-fit">
        <div className="w-full h-auto flex flex-col lg:flex-row justify-between items-center gap-6 md:gap-8 lg:gap-10 px-4 sm:px-6 lg:px-8 xl:px-16 bg-primary py-6 md:py-8 lg:py-10 rounded-xl">
          <div className="flex flex-col items-center lg:items-start w-full lg:w-1/2 gap-y-3 md:gap-y-4 lg:gap-y-5">
            <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-[54px] font-Barlow font-extrabold text-white leading-tight text-center lg:text-left">
              How does FindTutor work: Get fluent with your ideal tutor.
            </h1>
            <p className="text-sm md:text-lg text-white w-full lg:max-w-[500px] text-center lg:text-left">
              Advance in your career or explore the world with personalized
              1-on-1 language lessons taught by the best online tutors.
            </p>
            <Link
              className="w-full sm:w-[70%] lg:w-[60%] hover:shadow-2xl font-Barlow transition-all duration-300 cursor-pointer px-4 py-3 sm:py-4 bg-white font-medium text-xl rounded-md flex justify-center items-center"
              href="/tutors"
            >
              Find my Tutor
            </Link>
          </div>

          <div className="flex-1 flex justify-center px-4 sm:px-0">
            <img
              className="w-full max-w-[300px] sm:max-w-[350px] md:max-w-[400px] lg:max-w-[450px] h-auto object-contain "
              src="/images/How-it-fix_images/img1.svg"
              alt="Tutor illustration"
            />
          </div>
        </div>
      </div>

      {/* How It Works Section */}
      <div className="px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 w-full h-fit">
        <div className="w-full h-fit px-2 sm:px-4">
          <div className="w-full flex flex-col lg:flex-row gap-6 md:gap-8 lg:gap-10 xl:gap-12 mt-6 md:mt-8">
            <div className="w-full lg:w-1/2 flex flex-col gap-3 md:gap-4 lg:gap-5">
              <h1 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-Barlow font-extrabold text-secondary">
                How It Works
              </h1>
              <p className="text-sm md:text-base w-full lg:max-w-[599px] leading-5 text-secondary">
                FindTutors is the ideal place for students to find a specialized
                tutor in the subject(s) they struggle with the most. We have
                qualified and experienced male & female online teachers for all
                major subjects, including English, Urdu, Biology, Chemistry,
                Computer Science, Physics, and Maths, for any grade/class or
                level.
              </p>
              <button className="w-fit font-Barlow cursor-pointer hover:bg-purple-400 transition-all duration-300 text-white px-5 py-2 md:px-6 md:py-2.5 lg:px-8 lg:py-3 rounded-lg text-sm sm:text-base md:text-lg font-medium bg-primary">
                Learn More
              </button>
              <img
                className="w-full h-auto object-contain mt-2 max-w-full"
                src="/images/Home_images/img7.svg"
                alt="How it works"
              />
            </div>

            <div className="w-full flex-1 grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-5 md:gap-6 lg:gap-7">
              {HomeHowItsWorkCardData.map((data, index) => (
                <HomeHowItsWorkCard key={index} {...data} />
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Simple & Smart Learning Section */}
      <div className="px-4 sm:px-6 md:px-8 lg:px-12 xl:px-20 w-full h-fit">
        <div className="w-full bg-[#FAFAFA] flex flex-col rounded-2xl gap-y-4 md:gap-y-6 items-center py-8 md:py-12 lg:py-14 px-4">
          <div className="text-center max-w-full md:max-w-[90%] lg:max-w-[1076px]">
            <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-Barlow font-extrabold text-secondary">
              Simple & Smart Learning
            </h1>
            <p className="text-base sm:text-lg md:text-xl text-secondary mt-2">
              Learning made easy! Students can sign up, explore top tutors, book
              lessons, and pay securely to start learning. Tutors can register,
              set their schedule, teach online, and earn effortlessly. Join now
              and elevate your learning experience!
            </p>
          </div>

          <div className="w-full mt-4 md:mt-6">
            <HowItWorksProcess />
          </div>
        </div>
      </div>

      {/* Learn Smarter Section */}
      <div className="px-4 sm:px-6 md:px-5 lg:px-7 xl:px-20 w-full h-fit">
        <div className="w-full bg-[#f6ebfd] h-fit flex flex-col md:flex-row items-center rounded-2xl px-4 sm:px-6 md:px-8 lg:px-9 py-8 md:py-10 lg:py-12 gap-5 md:gap-x-5">
          <div className="w-full md:w-auto flex justify-center">
            <Image
              src="/images/How-it-fix_images/img11.svg"
              alt="How it works"
              width={200}
              height={200}
              className="w-[200px] sm:w-[250px] md:w-[280px] lg:w-[300px] h-auto"
            />
          </div>

          <div className="flex-1 flex flex-col gap-y-3 md:gap-y-4 justify-center text-center md:text-left">
            <h1 className="font-extrabold text-2xl sm:text-3xl font-Barlow">
              Ready to Learn Smarter & Faster?
            </h1>
            <p className="text-sm sm:text-[15px] font-normal">
              Start your learning journey today and take control of your
              success. <span className="text-primary">findtutor.com</span> —
              connecting you with expert tutors to help you achieve your
              academic and career goals, anytime, anywhere.
            </p>
          </div>
        </div>
      </div>

      {/* Final CTA */}
      <div className="w-full h-fit flex justify-center items-center px-3 mt-6">
        <Link
          className="font-Barlow flex justify-center uppercase items-center hover:bg-purple-600 transition-all duration-300 font-bold text-base w-full sm:w-[350px] md:w-[403px] py-3 sm:py-4 rounded-lg cursor-pointer bg-primary mx-auto text-white"
          href="/tutors"
        >
          Find my Tutor
        </Link>
      </div>

      {/* Stats Section */}
      <div className="w-full h-auto min-h-[200px] lg:h-[250px] bg-[#f6ebfd] grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 justify-items-center items-center px-4 sm:px-8 md:px-12 lg:px-16 py-16 lg:py-0 gap-4 sm:gap-8">
        {StatsProps.map((item, index) => (
          <Stats
            key={index}
            FirstHeading={item.FirstHeading}
            SecondHeading={item.SecondHeading}
          />
        ))}
      </div>

      {/* Reviews Section */}
      <div className="w-full h-fit px-4 sm:px-6 md:px-5 lg:px-172 xl:px-20">
        <ReviewsSection />
      </div>
    </div>
  );
};

export default HowItsWork;
