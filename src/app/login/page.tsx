"use client";
import Link from "next/link";
import React, { useState } from "react";
import { IoCheckmark } from "react-icons/io5";

const Login = () => {
  const [rememberMe, setRememberMe] = useState(false);
  const [emailOrPhone, setEmailOrPhone] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const validateEmailOrPhone = (input: string) => {
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    const phoneRegex = /^\d{10,}$/;
    return emailRegex.test(input) || phoneRegex.test(input);
  };

  const validatePassword = (input: string) => {
    const passwordRegex =
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
    return passwordRegex.test(input);
  };

  const handleLogin = () => {
    if (!validateEmailOrPhone(emailOrPhone)) {
      setError("Invalid Email or Phone Number.");
      return;
    }
    if (!validatePassword(password)) {
      setError(
        "Password must be at least 8 characters, include an uppercase letter, a lowercase letter, a number, and a special character."
      );
      return;
    }

    setError("");
    console.log("Email/Phone:", emailOrPhone);
    console.log("Password:", password);

    setEmailOrPhone("");
    setPassword("");
  };

  return (
    <div className="w-full h-fit pt-0 pb-[200px] flex flex-col justify-center items-center gap-8 md:gap-12">
      <div className="w-full h-[430px] lg:h-[450px]  bg-primary px-7 top-0 lg:px-0  relative flex  justify-center items-center pt-28">
        <h1 className="block lg:hidden  font-bold text-3xl sm:text-4xl text-center leading-9 sm:leading-12 w-[100px] absolute top-[100px] text-white ">
          Student Login
        </h1>
        <h1 className="text-white  absolute top-[200px] font-normal w-[312px] text-center text-base sm:text-lg">
          Please enter your PhoneNumber/Email & Password
        </h1>

        <div className="w-full lg:w-[39%]  z-20 h-[360px] sm:h-[350px] lg:h-[480px] top-[200px] lg:top-[130px]  bg-secondary relative rounded-2xl">
          <div className="w-full bottom-5 h-fit rounded-2xl border-2 border-secondary right-3 lg:right-5 px-[32px] py-5 sm:py-7 lg:py-10 bg-white absolute flex flex-col gap-y-5">
            <h1 className="font-bold text-4xl text-secondary hidden lg:block">
              Login
            </h1>
            <div className="w-fit h-fit hidden lg:flex gap-x-2 font-normal text-base ">
              <Link href={"/signup"} className="underline">
                Sign up as a student
              </Link>
              <h1>or</h1>
              <Link href={"/become-a-tutor"} className="underline">
                Sign up as a tutor
              </Link>
            </div>
            <div className="w-full h-fit flex flex-col gap-y-6 items-center pt-2">
              <input
                value={emailOrPhone}
                onChange={(e) => setEmailOrPhone(e.target.value)}
                className="w-full py-5 rounded-md outline-none border border-black px-5 placeholder:text-sm placeholder:font-normal"
                placeholder="Phone Number/Email"
                type="text"
              />
              <input
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full py-5 rounded-md outline-none border border-black px-5 placeholder:text-sm placeholder:font-normal"
                placeholder="Enter Password"
                type="password"
              />

              {error && <p className="text-red-500 text-sm">{error}</p>}
              <div className="w-full h-fit flex flex-col gap-y-0 sm:flex-row justify-between items-center">
                <div
                  className="w-fit h-fit flex gap-x-2 items-center cursor-pointer"
                  onClick={() => setRememberMe(!rememberMe)}
                >
                  <div
                    className={`w-5 h-5 flex justify-center items-center rounded-full border border-black transition-all duration-300 ${
                      rememberMe
                        ? "bg-primary border-primary text-white"
                        : "bg-white"
                    }`}
                  >
                    {rememberMe && <IoCheckmark className="text-sm" />}
                  </div>
                  <h1 className="text-base font-normal">Remember me</h1>
                </div>
                <h1 className="font-medium text-base text-primary cursor-pointer">
                  Forgot Password?
                </h1>
              </div>
            </div>
            <button
              onClick={handleLogin}
              className="w-full py-4 bg-secondary rounded-lg cursor-pointer text-white font-medium text-xl"
            >
              Login Now
            </button>
          </div>
        </div>

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
          className="block lg:hidden absolute left-7  top-[61%]"
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
          className="block lg:hidden absolute right-0 top-[58%] z-10"
          src="/images/Login_images/img12.svg"
          alt=""
        />
      </div>
    </div>
  );
};

export default Login;
