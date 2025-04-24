
"use client";
import React, { useState } from "react";
import { InputField } from "./InputField";
import { SelectField } from "./SelectField";
import { TextAreaField } from "./TextAreaField";
import { BiSolidMoviePlay } from "react-icons/bi";
import Image from "next/image";
import { toast } from "react-toastify";

interface FormData {
  fullName: string;
  email: string;
  phoneNumber: string;
  age: string;
  password: string;
  confirmPassword: string;
  gender: string;
  address: string;
  bio: string;
}

interface FoamInputsProps {
    formData: FormData;
    setFormData: React.Dispatch<React.SetStateAction<FormData>>;
    imagePreview: string | null;
    setImagePreview: React.Dispatch<React.SetStateAction<string | null>>;
    videoFile: File | null;
    setVideoFile: React.Dispatch<React.SetStateAction<File | null>>;
    videoUrl: string | null;
    setVideoUrl: React.Dispatch<React.SetStateAction<string | null>>;
    handleNext: () => void;
}

const FoamInputs: React.FC<FoamInputsProps> = ({
    formData,
    setFormData,
    imagePreview,
    setImagePreview,
    videoFile,
    setVideoFile,
    videoUrl,
    setVideoUrl,
    handleNext,
}) => {

  const ageOptions = ["18-25", "26-35", "36-45", "45-60"];
  const genderOptions = ["Male", "Female", "Others"];

  const handleInputChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleImageUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
  
    if (file) {
      const imageUrl = URL.createObjectURL(file); 
      setImagePreview(imageUrl);
      console.log("Image URL:", imageUrl); 
    }
  };
  
  const handleVideoUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
  
    if (file && file.type.startsWith("video/")) {
      const videoUrl = URL.createObjectURL(file); 
      setVideoFile(file);
      setVideoUrl(videoUrl);
      console.log("Video URL:", videoUrl);
    }
  };
  
  const handleFormNext = () => {
    for (const key in formData) {
      if (!formData[key as keyof FormData]) {
        toast.error(`Please fill in the ${key.replace(/([A-Z])/g, " $1")}`);
        return;
      }
    }
  
    if (!imagePreview || !videoFile) {
      toast.error("Please upload both an image and a video before proceeding.");
      return;
    }
  
    console.log("Form Data:", formData); 
    console.log("Image URL:", imagePreview);
    console.log("Video File:", videoFile.name);
  
    handleNext();
  };
  
  
  return (
    <div>
      <form>
        <div className="grid gap-8 mb-12 grid-cols-1 md:grid-cols-2 ">
          <InputField
            label="Full Name"
            type="text"
            placeholder="Full Name"
            name="fullName"
            required
            onChange={handleInputChange}
            value={formData.fullName}
          />
          <InputField
            label="Email"
            type="email"
            placeholder="Email Address"
            name="email"
            required
            onChange={handleInputChange}
            value={formData.email}
          />
          <InputField
            label="Phone Number"
            type="number"
            placeholder="Phone Number"
            name="phoneNumber"
            required
            onChange={handleInputChange}
            value={formData.phoneNumber}
          />
          <SelectField
            label="Age"
            placeholder="Select Age"
            name="age"
            required
            SelectOptions={ageOptions}
            onChange={handleInputChange}
            value={formData.age}
          />

          <InputField
            label="Password"
            type="password"
            placeholder="Password"
            name="password"
            required
            onChange={handleInputChange}
            value={formData.password}
          />
          <InputField
            label="Confirm Password"
            type="password"
            placeholder="Confirm Password"
            name="confirmPassword"
            required
            onChange={handleInputChange}
            value={formData.confirmPassword}
          />
          <SelectField
            label="Gender"
            placeholder="Select Gender"
            name="gender"
            required
            SelectOptions={genderOptions}
            onChange={handleInputChange}
            value={formData.gender}
          />
          <InputField
            label="Address"
            type="text"
            placeholder="Address"
            name="address"
            value={formData.address}
            onChange={handleInputChange}
          />
        </div>

        <div className="w-full h-fit flex item-center flex-col gap-y-10">
          <TextAreaField
            label="Bio"
            placeholder="Write here"
            name="bio"
            required
            onChange={handleInputChange}
            value={formData.bio}
          />

          {/* Profile Picture Upload */}
          <div className="w-full h-fit border-2 border-dotted py-8 bg-[#fffff0] flex flex-col items-center gap-y-4 border-[#94938e]">
            {imagePreview && (
              <img
                src={imagePreview}
                alt="Profile Preview"
                className="w-32 h-32 object-cover rounded-full"
              />
            )}
            <h1 className="font-normal text-sm text-[#8F8F8F]">Profile Pic</h1>
            <h1 className="font-semibold text-base text-[#1F1D0D]">
              Allowed File Types: png, jpg, jpeg
            </h1>
            <h1 className="font-semibold text-base text-[#1F1D0D]">
              Maximum Image Size: 10MB
            </h1>
            <input
              key={imagePreview ? imagePreview : "image-upload"}
              type="file"
              accept="image/png, image/jpeg"
              onChange={handleImageUpload}
              className="hidden"
              id="file-upload"
            />

            <label
              htmlFor="file-upload"
              className="w-28 py-3 text-white cursor-pointer font-semibold bg-[#1F1D0D] rounded-md text-center"
            >
              Upload
            </label>
          </div>

          {/* Video Upload */}
          <div className="w-full h-fit border-2 border-dotted py-8 bg-[#fffff0] flex flex-col items-center gap-y-4 border-[#94938e]">
            <BiSolidMoviePlay className="text-5xl" />
            <h1 className="font-semibold text-base text-[#1F1D0D]">
              Upload Your Introduction Video
            </h1>
            <h1 className="font-normal text-base text-[#1F1D0D] text-center px-4">
              Please describe your teaching experience and style in a brief
              introduction video for students' reference.
            </h1>

            <label className="w-fit py-3 px-4 flex gap-x-2 text-white cursor-pointer font-semibold bg-[#1F1D0D] rounded-md">
              <Image
                src="/images/Become-a-Tutor_images/img2.svg"
                alt="Upload"
                width={25}
                height={25}
              />
              Upload Video
              <input
                key={videoFile ? videoFile.name : "video-upload"}
                type="file"
                accept="video/*"
                className="hidden"
                onChange={handleVideoUpload}
              />
            </label>

            {videoUrl && (
              <video className="mt-4 rounded-lg" width="300" controls>
                <source src={videoUrl} type={videoFile?.type} />
                Your browser does not support the video tag.
              </video>
            )}
          </div>

          <div className="w-full h-fit flex justify-end items-center pt-10">
            <button
              type="button"
              className={`self-end px-12 py-4 text-xl cursor-pointer font-bold text-white rounded-md ${
                !imagePreview || !videoFile
                  ? "bg-gray-400 cursor-not-allowed"
                  : "bg-stone-900"
              }`}
              disabled={!imagePreview || !videoFile}
              onClick={handleFormNext} 
            >
              Next
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default FoamInputs;


