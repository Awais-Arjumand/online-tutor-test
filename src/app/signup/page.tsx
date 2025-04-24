"use client";
import Link from "next/link";
import React, { useState } from "react";
import { IoCheckmark } from "react-icons/io5";
import SignUpInputFields from "../components/SignUp/SignUpInputFields";
import { FaFacebookF, FaGoogle, FaInstagram, FaTwitter } from "react-icons/fa";
import { FooterSocialLinks } from "../components/footer/FooterSocialLinks";

const page = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    password: "",
    confirmPassword: "",
  });

  const [errors, setErrors] = useState({
    email: "",
    phone: "",
    password: "",
    confirmPassword: "",
  });

  const signUpPlaceHolders = [
    { key: "name", placeholder: "Name", type: "text" },
    { key: "email", placeholder: "Email", type: "text" },
    { key: "phone", placeholder: "Phone Number", type: "number" },
    { key: "password", placeholder: "Create Password", type: "password" },
    { key: "confirmPassword", placeholder: "Confirm Password", type: "password" },
  ];

  const validateInput = (key: string, value: string) => {
    let errorMessage = "";

    if (key === "email") {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(value)) {
        errorMessage = "Invalid email format";
      }
    } else if (key === "phone") {
      const phoneRegex = /^\d{11}$/; 
      if (!phoneRegex.test(value)) {
        errorMessage = "Phone number must be 11 digits";
      }
    } else if (key === "password") {
      const passwordRegex = /^(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
      if (!passwordRegex.test(value)) {
        errorMessage =
          "Password must be at least 8 characters, with 1 uppercase, 1 number, and 1 special character";
      }
    } else if (key === "confirmPassword") {
      if (value !== formData.password) {
        errorMessage = "Passwords do not match";
      }
    }

    setErrors((prev) => ({ ...prev, [key]: errorMessage }));
  };

  const handleChange = (key: string, value: string) => {
    setFormData((prev) => ({ ...prev, [key]: value }));
    validateInput(key, value);
  };

  const handleSignUp = () => {
    const hasErrors = Object.values(errors).some((error) => error !== "");
    if (hasErrors) {
      console.log("Fix validation errors first");
      return;
    }
  
    console.log("Form Data:", formData);
  
    // Reset form fields after successful signup
    setFormData({
      name: "",
      email: "",
      phone: "",
      password: "",
      confirmPassword: "",
    });
  
    setErrors({
      email: "",
      phone: "",
      password: "",
      confirmPassword: "",
    });
  };
  

  const FooterSocialIcons = [
    {
      href: "https://www.facebook.com/",
      icon: <FaFacebookF className="text-white text-xl" />,
    },
    {
      href: "https://www.google.com/",
      icon: <FaGoogle className="text-white text-xl" />,
    },
    {
      href: "https://twitter.com/",
      icon: <FaTwitter className="text-white text-xl" />,
    },
  ];

  return (
    <div className="w-full h-fit pt-0 pb-[500px] flex flex-col justify-center items-center gap-8 md:gap-12">
      <div className="w-full h-[430px] lg:h-[450px] bg-primary px-7 top-0 lg:px-0 relative flex justify-center items-center pt-28">
        <div className="w-fit h-fit flex justify-center items-center left-[50%] top-10 absolute ">

        <h1 className="block lg:hidden font-bold text-4xl text-center leading-12 w-[100px] absolute top-[80px] text-white">
        Create Account
        </h1>
        <h1 className="text-white ml-10 flex gap-x-3 w-60 absolute top-[180px] font-normal  text-center  text-lg">
        Already have account? <Link href={"/login"} className="text-[#FFD42D]">Login</Link>
        </h1>
        </div>

        <div className="w-full lg:w-[39%] z-20 h-[640px] sm:h-[660px] lg:h-[780px] top-[360px] lg:top-[270px] bg-secondary relative rounded-2xl">
          <div className="w-full bottom-5 h-fit rounded-2xl border-2 border-secondary right-3 lg:right-5 px-[32px] py-5 sm:py-7 lg:py-10 bg-white absolute flex flex-col gap-y-5">
            <h1 className="font-bold text-4xl text-secondary hidden lg:block">
              Create Account
            </h1>
            <div className="w-fit h-fit hidden lg:flex gap-x-2 font-normal text-base items-center">
              <h1>Already have an account?</h1>
              <Link href={"/login"} className="underline">
                Login
              </Link>
            </div>
            <div className="w-full h-fit flex flex-col gap-y-7 items-center pt-2">
              {signUpPlaceHolders.map((item) => (
                <SignUpInputFields
                  key={item.key}
                  placeholder={item.placeholder}
                  type={item.type}
                  value={formData[item.key as keyof typeof formData]}
                  onChange={(e) => handleChange(item.key, e.target.value)}
                  error={errors[item.key as keyof typeof errors]}
                />
              ))}
            </div>
            <button
              onClick={handleSignUp}
              className="w-full py-4 bg-secondary rounded-lg cursor-pointer text-white font-medium text-xl"
            >
              SignUp Now
            </button>
            <div className="w-full h-fit flex flex-col items-center justify-center pt-4 gap-y-3">
              <h1 className="text-base font-normal">Or Login With</h1>
              <div className="w-fit h-fit flex gap-x-3">
                {FooterSocialIcons.map((item, index) => (
                  <FooterSocialLinks key={index} href={item.href} icon={item.icon} />
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Images (No Changes) */}

         {/* Left Side Images */}
         <img
          className="hidden lg:block absolute left-[22%] top-28"
          src="/images/Login_images/img1.svg"
          alt=""
        />
        <img
          className="hidden lg:block absolute left-[17%] top-[140px]"
          src="/images/Login_images/img7.svg"
          alt=""
        />
        <img
          className="hidden lg:block absolute left-[10%] top-[210px]"
          src="/images/Login_images/img9.svg"
          alt=""
        />
        <img
          className="hidden lg:block w-[140px] absolute left-[5%] top-[280px]"
          src="/images/Login_images/img2.svg"
          alt=""
        />
        <img
          className="hidden lg:block absolute left-[13%] top-[380px]"
          src="/images/Login_images/img3.svg"
          alt=""
        />

        {/* Right side Images */}
        <img
          className="hidden lg:block absolute right-[20%] top-24"
          src="/images/Login_images/img8.svg"
          alt=""
        />
        <img
          className="hidden lg:block absolute right-[15%] top-[140px]"
          src="/images/Login_images/img9.svg"
          alt=""
        />
        <img
          className="hidden lg:block w-[140px] absolute right-24 top-[210px]"
          src="/images/Login_images/img4.svg"
          alt=""
        />
        <img
          className="hidden lg:block absolute right-[12.5%] top-[330px]"
          src="/images/Login_images/img5.svg"
          alt=""
        />
        <img
          className="hidden lg:block absolute right-[18%] top-[400px]"
          src="/images/Login_images/img6.svg"
          alt=""
        />
        {/* For Mobile Devices */}
        <img
          className="block lg:hidden absolute left-[15%] top-16"
          src="/images/Login_images/img3.svg"
          alt=""
        />
        <img
          className="block lg:hidden absolute left-0 top-[33%]"
          src="/images/Login_images/img10.svg"
          alt=""
        />
        <img
          className="block lg:hidden absolute left-9 top-[64%] sm:top-[62%]"
          src="/images/Login_images/img9.svg"
          alt=""
        />
        <img
          className="block lg:hidden absolute right-16 top-20"
          src="/images/Login_images/img6.svg"
          alt=""
        />
        <img
          className="block lg:hidden absolute right-[36px] top-[150px]"
          src="/images/Login_images/img11.svg"
          alt=""
        />
        <img
          className="block lg:hidden absolute right-0 top-[60%] sm:top-[58%] z-10"
          src="/images/Login_images/img12.svg"
          alt=""
        />
      </div>
    </div>
  );
};

export default page;
