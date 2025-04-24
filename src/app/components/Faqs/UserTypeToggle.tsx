import React from "react";

interface UserTypeToggleProps {
  selectedType: "TUTOR" | "STUDENT";
  onTypeChange: (type: "TUTOR" | "STUDENT") => void;
}

export function UserTypeToggle({
  selectedType,
  onTypeChange,
}: UserTypeToggleProps) {
  return (
    <nav className="flex gap-6 mb-5 max-md:flex-row max-md:justify-center max-sm:flex-col max-sm:gap-4">
      <button
        onClick={() => onTypeChange("TUTOR")}
        className={`px-11 py-3 text-xl font-bold rounded-md cursor-pointer max-md:px-8  max-md:text-2xl max-sm:w-full max-sm:text-xl max-sm:text-center ${
          selectedType === "TUTOR"
            ? "bg-primary text-white"
            : "text-stone-900 border-2 border-gray-400"
        }`}
        aria-pressed={selectedType === "TUTOR"}
      >
        TUTOR
      </button>
      <button
        onClick={() => onTypeChange("STUDENT")}
        className={`px-11 py-3 text-xl font-bold rounded-md cursor-pointer max-md:px-8 max-md:py-3 max-md:text-2xl max-sm:w-full max-sm:text-xl max-sm:text-center ${
          selectedType === "STUDENT"
            ? "bg-primary text-white"
            : "text-stone-900 border-2 border-gray-400"
        }`}
        aria-pressed={selectedType === "STUDENT"}
      >
        STUDENT
      </button>
    </nav>
  );
}
