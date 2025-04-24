"use client";
import React from "react";
import { FaPhoneAlt } from "react-icons/fa";
import { HiLocationMarker } from "react-icons/hi";
import { MdEmail } from "react-icons/md";
import { ContactUsBoxes } from "../components/ContactUs/ContactUsBoxes";
import { Controller, SubmitHandler, useForm } from "react-hook-form";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

interface IFormInput {
  firstName: string;
  email: string;
  gender: string;
  number: string;
  bio: string;
  queryType: string;
}

interface OptionType {
  value: string;
  label: string;
}

const ContactUs = () => {
  const { register, handleSubmit, reset, setValue, control } =
  useForm<IFormInput>();

const onSubmit: SubmitHandler<IFormInput> = (data) => {
  if (!data.firstName || !data.email || !data.number || !data.bio || !data.queryType) {
    toast.error("Please fill in all the required fields!", {
      position: "top-right",
      autoClose: 3000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "colored",
    });
    return;
  }

  console.log("Form Data:", data);

  toast.success("Message sent successfully!", {
    position: "top-right",
    autoClose: 3000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    theme: "colored",
  });

  reset({
    firstName: "",
    email: "",
    gender: "",
    number: "",
    bio: "",
    queryType: "",
  });

  setValue("queryType", "");
};

const QueryTypeOptions: OptionType[] = [
  { value: "PLATFORM", label: "Platform" },
  { value: "TUTOR", label: "Tutor" },
  { value: "STUDENT", label: "Student" },
  { value: "PAYMENT", label: "Payment" },
];

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
    <div className="w-full h-fit pt-44 pb-10 flex flex-col gap-8 md:gap-12 ">
      {/* Contact Info Section */}
      <div className="w-full flex flex-col px-4 sm:px-10 lg:px-36 lg:flex-row gap-10">
        {/* Left Side - Contact Info */}
        <div className="lg:w-[45%] flex flex-col gap-y-6">
          <h1 className="font-Barlow font-extrabold text-3xl md:text-5xl">Contact Us</h1>
          <p className="font-normal text-sm md:text-base max-w-[396px]">
            Viverra maecenas accumsan lacus vel facilisis volutpat. Faucibus
            purus in massa tempor nec feugiat nisl
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
            className="w-full h-[300px] md:h-[400px] lg:h-[500px]"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3020.0247882449885!2d-73.96802178908014!3d40.80544907126031!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c2f63c75af2d65%3A0xf45542f6cb090cc9!2s2880%20Broadway%2C%20New%20York%2C%20NY%2010025%2C%20USA!5e0!3m2!1sen!2s!4v1740385586324!5m2!1sen!2s"
          ></iframe>
        </div>
      </div>

      {/* Contact Form Section */}
      <div className="w-full flex justify-center items-center bg-[#fafafa] relative px-4 md:px-16 py-16">
        {/* Form Content */}
        <div className="w-full max-w-2xl flex flex-col gap-y-8">
        <img
          src="/images/ContactUS_images/img2.svg"
          className="hidden lg:block absolute top-0 left-0 w-[19%]"
          alt=""
        />
        <img
          src="/images/ContactUS_images/img3.svg"
          className="hidden lg:block absolute bottom-20 left-20 w-[8%]"
          alt=""
        />
        <img
          src="/images/ContactUS_images/img3.svg"
          className="hidden lg:block absolute top-[160px] right-[150px] w-[8%]"
          alt=""
        />
        <img
          src="/images/ContactUS_images/img4.svg"
          className="hidden lg:block absolute bottom-0 right-0 w-[20%]"
          alt=""
        />
          <h1 className="font-extrabold text-3xl md:text-5xl leading-14 text-center font-Barlow">
            Contact Our Support Team to Know What You Want
          </h1>
          <ToastContainer />
          <form
            onSubmit={handleSubmit(onSubmit)}
            className="w-full flex flex-col gap-6"
          >
            {/* Grid Layout for Inputs */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 gap-x-7">
              <div className="flex flex-col gap-y-2">
                <label className="font-semibold text-sm font-Barlow">Name</label>
                <input
                  placeholder="Your Name"
                  className="border border-gray-400 bg-white outline-none rounded-sm py-3 px-4 placeholder:text-sm"
                  {...register("firstName")}
                />
              </div>

              <div className="flex flex-col gap-y-2">
                <label className="font-semibold text-sm font-Barlow">Email</label>
                <input
                  placeholder="Your Email"
                  className="border border-gray-400 bg-white outline-none rounded-sm py-3 px-4 placeholder:text-sm"
                  {...register("email")}
                />
              </div>

              <div className="flex flex-col gap-y-2 ">
                <label className="font-semibold text-sm font-Barlow">Phone Number</label>
                <input
                  placeholder="Your Phone"
                  type="number"
                  className="border border-gray-400 bg-white outline-none rounded-sm py-3 px-4 placeholder:text-sm"
                  {...register("number")}
                />
              </div>

              <div className="flex flex-col gap-y-2">
                <label className="font-semibold text-sm font-Barlow">Query Type</label>
                <Controller
                  name="queryType"
                  control={control}
                  render={({ field }) => (
                <div className="w-full h-fit px-4 border border-gray-400 bg-white rounded-sm">

                    <select
                      {...field}
                      className="w-full h-[50px] text-sm cursor-pointer border-gray-400 bg-transparent outline-none rounded-sm py-3 "
                      value={field.value || ""}
                      onChange={(event) => field.onChange(event.target.value)}
                    >
                      <option value="" disabled>
                        Choose
                      </option>
                      {QueryTypeOptions.map((option) => (
                        <option key={option.value} value={option.value}>
                          {option.label}
                        </option>
                      ))}
                    </select>
                    </div>
                  )}
                  
                />
              </div>
            </div>

            <div className="flex flex-col gap-y-2">
              <label className="font-semibold text-sm font-Barlow">Your Message</label>
              <textarea
                placeholder="Type Your Message"
                className="border outline-none border-gray-400 placeholder:text-sm bg-white rounded-sm p-5 h-[200px] resize-none"
                {...register("bio")}
              />
            </div>

            <div className="flex justify-start">
              <input
                className="bg-[#1F1D0D] font-Barlow w-full font-semibold text-white px-6 py-3 rounded-lg cursor-pointer"
                type="submit"
                value="Send Your Message"
              />
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
