"use client";

import React from "react";
import AboutUsPage from "../components/About us/AboutUsPage";
import { ContactUsBoxes } from "../components/ContactUs/ContactUsBoxes";
import { HiLocationMarker } from "react-icons/hi";
import { MdEmail } from "react-icons/md";
import { FaPhoneAlt } from "react-icons/fa";

const AboutUs = () => {
  const callBoxData = [
    {
      icon: <FaPhoneAlt className="text-xl" />,
      label: "Call Us",
      Number1: "(101) 222 123 456",
      Number2: "(102) 333 234 674",
    },
    {
      icon: <MdEmail className="text-xl" />,
      label: "Email Address",
      Number1: "info-findtutors@example.com",
      Number2: "findtutors-support@example.com",
    },
    {
      icon: <HiLocationMarker className="text-xl" />,
      label: "Reach Us",
      Number1: "31 Sunset Road, Gales Ferry,",
      Number2: "6335 United States",
    },
  ];

  return (
    <div className="w-full h-fit px-6 sm:px-10 md:px-16 lg:px-24 pt-44 pb-10 flex flex-col gap-8 md:gap-12">
      {/* Main Content */}
      <div className="w-full h-auto px-4 sm:px-10 lg:px-20 flex flex-col lg:flex-row justify-between items-center gap-6 md:gap-10 bg-[#fafafa] py-6 md:py-12 lg:py-16 rounded-xl">
  {/* Left - Text Content */}
  <div className="flex flex-col items-center lg:items-start w-full lg:w-[45%] text-center lg:text-left gap-y-4 md:gap-y-6">
    <h1 className="font-Barlow text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-[54px] w-full max-w-[422px] font-extrabold text-secondary leading-tight">
      About FindTutors
    </h1>
    <p className="text-sm sm:text-base text-secondary w-full max-w-[479px]">
      Egestas sed tempus urna et pharetra. Leo integer malesuada nunc vel.
      Libero id faucibus nisl tincidunt eget nullam non nisi. Faucibus
      turpis in eu mi bibendum neque egestas
    </p>
  </div>

  {/* Right - Image */}
  <div className="w-full lg:flex-1 flex justify-center mt-6 lg:mt-0">
    <img
      className="w-full max-w-[300px] xs:max-w-[350px] sm:max-w-[400px] md:max-w-[500px] lg:max-w-[600px] h-auto object-contain"
      src="/images/AboutUs_images/img1.svg"
      alt="Tutor illustration"
    />
  </div>
</div>

      {/* Center Section */}
      <div className="w-full h-fit">
        <AboutUsPage />
      </div>

      {/* Contact Info & Map Section */}
      <div className="w-full flex flex-col lg:flex-row gap-10">
        {/* Left Side - Contact Info */}
        <div className="lg:w-[45%] flex flex-col gap-y-6">
          <h1 className="font-Barlow font-extrabold text-2xl md:text-5xl">Contact Us</h1>
          <p className="text-sm md:text-base max-w-[396px]">
            Viverra maecenas accumsan lacus vel facilisis volutpat. Faucibus
            purus in massa tempor nec feugiat nisl.
          </p>
          <div className="flex flex-col gap-y-6">
            {callBoxData.map((item, index) => (
              <ContactUsBoxes
                key={index}
                icon={item.icon}
                label={item.label}
                Number1={item.Number1}
                Number2={item.Number2}
                backGround="bg-purple-600"
              />
            ))}
          </div>
        </div>

        {/* Right Side - Google Map */}
        <div className="flex-1">
          <iframe
            className="w-full h-[250px] sm:h-[300px] md:h-[400px] lg:h-[500px] rounded-lg"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3020.0247882449885!2d-73.96802178908014!3d40.80544907126031!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c2f63c75af2d65%3A0xf45542f6cb090cc9!2s2880%20Broadway%2C%20New%20York%2C%20NY%2010025%2C%20USA!5e0!3m2!1sen!2s!4v1740385586324!5m2!1sen!2s"
          ></iframe>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
