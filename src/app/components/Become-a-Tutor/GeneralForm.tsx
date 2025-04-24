// GeneralForm.tsx
"use client";
import React, { useState } from "react";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import FoamInputs from "./FoamInputs";
import Register_a_tutor from "./Register_a_tutor";

export const GeneralForm = () => {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phoneNumber: "",
    age: "",
    password: "",
    confirmPassword: "",
    gender: "",
    address: "",
    bio: "",
  });

  const [imagePreview, setImagePreview] = useState<string | null>(null);
  const [videoFile, setVideoFile] = useState<File | null>(null);
  const [videoUrl, setVideoUrl] = useState<string | null>(null);

  const handleNext = () => {
    if (!formData.fullName || !formData.email || !formData.phoneNumber || 
        !formData.password || !formData.confirmPassword) {
      toast.error("Please fill all required fields");
      return;
    }
    
    if (formData.password !== formData.confirmPassword) {
      toast.error("Passwords do not match");
      return;
    }
    
    setStep(2);
  };

  const handleBack = () => {
    setStep(1);
  };

  const handleSubmitAndReset = () => {
    setFormData({
      fullName: "",
      email: "",
      phoneNumber: "",
      age: "",
      password: "",
      confirmPassword: "",
      gender: "",
      address: "",
      bio: "",
    });
    setImagePreview(null);
    setVideoFile(null);
    setVideoUrl(null);
    setStep(1);
    toast.success("Form submitted successfully! You can now register another tutor.");
  };

  return (
    <main className="py-0 mx-auto max-w-none">
      <ToastContainer />
      <h1 className="mb-6 text-4xl font-extrabold text-stone-900">
        {step === 1 ? "General" : ""}
      </h1>
      <div className={`rounded-xl ${
        step === 1 ? "p-6 md:p-12 border-2 border-dotted border-stone-900 shadow-none" : "p-0 border-none shadow-none"
      }`}>
        {step === 1 ? (
          <Register_a_tutor 
          handleBack={handleBack} 
          formData={formData} 
          imagePreview={imagePreview} 
          videoFile={videoFile}
          handleSubmitAndReset={handleSubmitAndReset}
        />
        ) : (
          <FoamInputs
            formData={formData}
            setFormData={setFormData}
            imagePreview={imagePreview}
            setImagePreview={setImagePreview}
            videoFile={videoFile}
            setVideoFile={setVideoFile}
            videoUrl={videoUrl}
            setVideoUrl={setVideoUrl}
            handleNext={handleNext}
          />
          
        )}
      </div>
    </main>
  );
};

export default GeneralForm;