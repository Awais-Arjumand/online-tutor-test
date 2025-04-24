"use client";
import { useEffect, useState } from "react";
import { HomeHowItsWorkCard } from "./components/Home-Page/HomeHowItsWorkCard";
import { ReviewsSection } from "./components/Home-Page/ReviewsSection/ReviewsSection";
import TutorListing from "./components/Home-Page/TutorListing";
import { HomeHowItsWorkCardData } from "./utils/web-dummy-data";
import Stats from "./components/How-it-work/Stats";

export default function Home() {
  const [heroImage, setHeroImage] = useState("/images/Home_images/img1.svg");
  const [heroImage2, setHeroImage2] = useState("/images/Home_images/img5.svg");

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 1024) {
        setHeroImage("/images/Home_images/img16.svg");
        setHeroImage2("/images/Home_images/img17.svg");
      } else {
        setHeroImage("/images/Home_images/img1.svg");
        setHeroImage2("/images/Home_images/img5.svg");
      }
    };

    handleResize();

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

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
    <div className="w-full h-fit py-12 md:pb-12 lg:pb-12  pt-32 md:pt-36 lg:pt-44 flex flex-col gap-16 md:gap-24 font-display ">
      {/* Hero Section */}
      <div className="w-full h-fit px-4 sm:px-6 md:px-8 lg:px-12 xl:px-20 2xl:px-24">
  <div className="w-full flex flex-col lg:flex-row bg-[#f6ebfd] h-auto lg:h-[600px] xl:h-[665px] px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 gap-8 lg:gap-0 rounded-xl relative overflow-hidden">
    {/* Text Section */}
    <div className="h-full flex flex-col items-center justify-center text-center lg:text-left w-full lg:w-1/2 gap-4 sm:gap-6 lg:gap-4 xl:gap-6 py-6 lg:py-0 lg:pr-4 xl:pr-8 2xl:pr-12">
      <div className="w-full flex flex-col items-center lg:items-start justify-center gap-2 sm:gap-3">
        <h1 className="text-3xl xs:text-4xl sm:text-[2.8rem] md:text-5xl lg:text-[3.4rem] xl:text-6xl 2xl:text-[4rem] font-Barlow font-extrabold w-full max-w-[250px] xs:max-w-[300px] sm:max-w-[350px] md:max-w-[400px] lg:max-w-[450px] xl:max-w-[538px] text-[#1F1D0D] leading-tight sm:leading-[1.2] md:leading-[1.3]">
          Learn Smarter, Achieve Greater
        </h1>
        <h2 className="font-light text-secondary text-base sm:text-lg md:text-xl lg:text-[1.25rem] xl:text-2xl mt-1 sm:mt-2 lg:mt-3">
          Tailored Tutoring for Every Student.
        </h2>
      </div>
      <div className="w-full max-w-[400px] lg:max-w-none h-fit flex flex-col justify-center gap-3 sm:gap-4 lg:gap-4 py-2 lg:py-0">
        <button className="w-full font-Barlow cursor-pointer lg:w-[90%] xl:w-[85%] 2xl:w-[80%] py-3 px-4 text-base sm:text-lg transition-all duration-300 hover:border-primary hover:bg-primary hover:text-white font-medium border border-black rounded-lg">
          I&apos;m a student
        </button>
        <button className="w-full font-Barlow hover:bg-purple-400 transition-all duration-300 cursor-pointer lg:w-[90%] xl:w-[85%] 2xl:w-[80%] py-3 px-4 text-base sm:text-lg bg-primary text-white font-medium rounded-lg hover:bg-primary-dark">
          I&apos;m a Parent or Guardian
        </button>
      </div>
    </div>

    {/* Image Section */}
    <div className="flex-1 hidden sm:flex justify-center lg:justify-end items-center relative pb-8 lg:pb-0">
      <div className="relative w-full h-full max-w-[450px] lg:max-w-[500px] xl:max-w-[550px]">
        <img
          className="w-full h-auto max-h-[360px] sm:max-h-[400px] md:max-h-[420px] lg:max-h-[460px] xl:max-h-[500px] object-contain lg:object-cover z-10 relative"
          src={heroImage}
          alt="Tutor illustration"
        />
        {/* Additional Images */}
        <img
          className="absolute right-[10%] w-[80%] lg:w-[90%] xl:w-full top-[-8%] sm:top-[-10%] lg:top-[5%] lg:right-[5%] xl:right-[1%] z-20"
          src="/images/Home_images/img2.svg"
          alt=""
        />
        <img
          className="absolute top-[18%] right-6 sm:right-8 lg:right-[-28px] xl:right-[-35px] w-10 sm:w-12 lg:w-14 xl:w-16 z-30"
          src={heroImage2}
          alt=""
        />
        <img
          className="hidden lg:block absolute top-[50%] xl:top-[52%] left-[-16%] xl:left-[-18%] w-[35%] xl:w-[38%]"
          src="/images/Home_images/img3.svg"
          alt=""
        />
        <img
          className="absolute top-[30%] sm:top-[35%] lg:top-[32%] xl:top-[35%] left-2 sm:left-3 lg:left-[-20px] xl:left-[-25px] w-12 sm:w-14 lg:w-16 z-30"
          src="/images/Home_images/img4.svg"
          alt=""
        />
      </div>
    </div>
  </div>
</div>
      {/* Center Section */}
      <div className="w-full h-fit px-5 sm:px-8 md:px-7 lg:px-20">
        <div className="w-full flex flex-col items-center bg-[#fafafa] p-6 md:p-12 lg:p-9 rounded-xl gap-6 md:gap-8">
          <div className="w-fit h-fit px-4 md:px-7 flex flex-col items-center gap-4">
            <h1 className="font-Barlow font-extrabold text-2xl sm:text-3xl md:text-4xl text-center">
              Connect with Perfect Teacher
            </h1>
            <p className="font-normal text-sm sm:text-base text-center max-w-[1050px]">
            We connect you with the most qualified and experienced teachers, ensuring you receive top-quality education tailored to your needs. Whether you're looking for academic support or skill development, our expert tutors are here to guide you every step of the way.
            </p>
          </div>
          <div className="w-full h-full px-4 md:px-20">
            <img
              className="w-full h-auto object-contain"
              src="/images/Home_images/img6.svg"
              alt=""
            />
          </div>
        </div>
      </div>

      {/* How It Works Section */}
      <div className="w-full h-fit px-5 sm:px-8 md:px-7 lg:px-20">
        <div className="w-full h-fit flex flex-col lg:flex-row gap-6 xl:gap-12">
          <div className="w-full lg:w-[50%] flex flex-col gap-4 md:gap-5">
            <h1 className="font-Barlow text-2xl md:text-3xl lg:text-4xl font-extrabold text-secondary">
              How It Works
            </h1>
            <p className="font-normal text-sm md:text-base">
              FindTutors is the ideal place for students to find a specialized
              tutor in the subject (s) they struggle with the most. We have
              qualified and experienced male & female online teachers for all
              the major subjects including English, Urdu, Biology, Chemistry,
              Computer Science, Physics and Maths , for any grade/class or level
              including Matriculation, HSSC, A/O levels, IGCSE, IETLS/TOEFL, and
              more.
            </p>
            <button className="w-fit font-Barlow  cursor-pointer hover:bg-purple-400 transition-all duration-300 text-white px-6 py-2.5 md:px-8 md:py-3 rounded-lg text-base md:text-lg font-medium bg-primary">
              Learn More
            </button>
            <img
              className="w-full h-auto object-contain"
              src="/images/Home_images/img7.svg"
              alt=""
            />
          </div>
          <div className="w-full flex-1 grid grid-cols-1 lg:grid-cols-2 gap-x-4 xl:gap-x-7 gap-y-6 xl:gap-y-7">
            {HomeHowItsWorkCardData.map((data, index) => (
              <HomeHowItsWorkCard key={index} {...data} />
            ))}
          </div>
        </div>
      </div>

      {/* Tutors Cards Section */}
      <div className="w-full h-fit px-5 sm:px-8 md:px-7 lg:px-20 flex flex-col gap-6 md:gap-10">
        <TutorListing />
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
      {/* Review Section */}
      <div className="w-full h-fit px-5 sm:px-8 md:px-7 lg:px-20">
        <ReviewsSection />
      </div>
    </div>
  );
}
