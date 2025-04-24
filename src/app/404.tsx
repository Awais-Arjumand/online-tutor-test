import Image from "next/image";
import Link from "next/link";
import React from "react";

const Error404 = () => {
  return (
<div className="w-full h-screen flex flex-col gap-6 md:gap-8 lg:gap-12 ">
      <div className="w-full h-screen py-8 sm:py-12 md:py-16 lg:py-20  relative overflow-hidden">
        <div className="hidden sm:hidden xl:block">
          <div className="absolute top-[-10%] sm:top-[-13%] left-[-5%] sm:left-[-3%] w-32 h-32 sm:w-40 sm:h-40 md:w-48 md:h-48 bg-primary rotate-45 rounded-lg sm:rounded-xl" />
          
          <div className="absolute top-[45%] sm:top-[52%] left-16 sm:left-20 md:left-28 w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14 bg-primary rotate-45 rounded-lg sm:rounded-xl" />
          
          <div className="absolute top-8 sm:top-10 right-[15%] sm:right-[20%] w-12 h-12 sm:w-16 sm:h-16 md:w-[70px] md:h-[70px] bg-primary rotate-45 rounded-lg sm:rounded-xl" />
          
          <div className="absolute bottom-[-5%] sm:bottom-[-8%] right-[-5%] w-48 h-48 sm:w-64 sm:h-64 md:w-80 md:h-80 bg-primary rotate-45 rounded-lg sm:rounded-xl" />
        </div>

        <div className="w-full h-full flex pb-4 sm:pb-6 md:pb-7 flex-col gap-y-4 sm:gap-y-6 md:gap-y-8 lg:gap-y-11 justify-center items-center">
          <div className="w-full max-w-[280px] xs:max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg">
            <Image
              src={"/images/404_images/img1.svg"}
              width={500}
              height={500}
              alt="Not Found"
              layout="responsive"
              priority
            />
          </div>

          <div className="w-fit h-fit flex flex-col items-center justify-center gap-y-2 sm:gap-y-3 px-2 sm:px-4">
            <h1 className="text-2xl xs:text-3xl sm:text-4xl md:text-5xl font-extrabold font-Barlow text-center">
            No Authorization Found
            </h1>
            <p className="font-normal text-xs xs:text-sm sm:text-base w-full max-w-[280px] xs:max-w-xs sm:max-w-md md:max-w-lg lg:max-w-xl text-center">
            Egestas sed tempus urna et pharetra. Leo integer malesuada nunc vel.
Libero id faucibus nisl tincidunt eget nullam non nisi. Faucibus turpis
in eu mi bibendum neque egestas
            </p>
          </div>

          <Link
            href={"/"}
            className="w-full max-w-[280px] xs:max-w-xs sm:max-w-sm md:w-2/3 lg:w-2/5 xl:w-1/3 font-Barlow h-fit px-4 py-2 sm:py-3 flex justify-center items-center bg-black text-white rounded-md hover:bg-gray-500 transition-all duration-300 ease-in-out text-xs xs:text-sm sm:text-base"
          >
            Return Home
          </Link>
        </div>
      </div>
    </div>
  )
}

export default Error404
