"use client";
import { ToastContainer } from "react-toastify";
import GeneralForm from "../components/Become-a-Tutor/GeneralForm";
import Image from "next/image";

const BecomeATutor = () => {
  return (
    <div className="w-full h-fit pt-32 pb-10 px-4 sm:px-10 md:px-24  flex flex-col gap-8 md:gap-12">
      <ToastContainer />

      {/* Main Content */}
    <div className="w-full h-auto flex flex-col lg:flex-row justify-center items-center px-4 sm:px-8 md:px-12 lg:px-20 gap-6 md:gap-8 bg-[#fafafa] py-6 md:py-12 lg:py-16  rounded-xl">
  <div className="flex flex-col items-center lg:items-start w-full lg:w-[55%] xl:w-[50%] gap-y-3 md:gap-y-4">
    <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-[54px] text-center lg:text-start font-extrabold text-secondary leading-tight">
      Become an Online Tutor
    </h1>
    <p className="text-sm md:text-base lg:text-lg text-center lg:text-start text-secondary">
      Please complete the below form for registration. With registration,
      it is easier for Students to reach You and you can earn extra income
      from home and online tuition. Fields marked as * are mandatory.
    </p>
  </div>
  <div className="w-full lg:w-[45%] xl:w-[50%] flex justify-center items-center mt-4 lg:mt-0">
    <div className="relative w-full max-w-[500px] lg:max-w-none aspect-square">
      <Image
        src="/images/Become-a-Tutor_images/img1.svg"
        fill
        alt="Become a tutor"
        className="object-contain"
      />
    </div>
  </div>
</div>

      {/* Form Section */}
      <div className="w-full h-fit bg-white rounded-xl">
        <GeneralForm />
      </div>
    </div>
  );
};

export default BecomeATutor;