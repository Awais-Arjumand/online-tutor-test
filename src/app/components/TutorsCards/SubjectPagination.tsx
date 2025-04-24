import { useState } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

interface SubjectPaginationProps {
  pageNation: string[];
}

export const SubjectPagination: React.FC<SubjectPaginationProps> = ({ pageNation }) => {
  const [selectedIndex, setSelectedIndex] = useState<number>(0); // Default to first index

  const handleNext = () => {
    if (selectedIndex < pageNation.length - 1) {
      setSelectedIndex(selectedIndex + 1);
    }
  };

  const handlePrev = () => {
    if (selectedIndex > 0) {
      setSelectedIndex(selectedIndex - 1);
    }
  };

  return (
    <div className="flex gap-2">
      {/* Left Arrow */}
      <div 
        className={`w-11 h-11 cursor-pointer hover:bg-black hover:text-white transition-all duration-300 rounded-md flex justify-center items-center border border-black 
        ${selectedIndex === 0 ? "opacity-50 cursor-not-allowed" : ""}`} 
        onClick={handlePrev}
      >
        <FaChevronLeft className="text-lg" />
      </div>

      {/* Page Buttons */}
      {pageNation.map((page, index) => (
        <button
          key={index}
          onClick={() => setSelectedIndex(index)}
          className={`w-11 h-11 cursor-pointer rounded-md flex justify-center items-center border border-black transition-colors ${
            selectedIndex === index ? "bg-black text-white" : "bg-white text-black"
          }`}
        >
          {page}
        </button>
      ))}

      {/* Right Arrow */}
      <div 
        className={`w-11 h-11 hover:bg-black transition-all duration-300 hover:text-white cursor-pointer rounded-md flex justify-center items-center border border-black 
        ${selectedIndex === pageNation.length - 1 ? "opacity-50 cursor-not-allowed" : ""}`} 
        onClick={handleNext}
      >
        <FaChevronRight className="text-lg" />
      </div>
    </div>
  );
};
