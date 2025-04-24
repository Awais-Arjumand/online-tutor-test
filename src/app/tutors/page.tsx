  "use client";
  import dynamic from "next/dynamic";
  import React, { useState } from "react";
  import { ImEqualizer } from "react-icons/im";
  import { cardData } from "../utils/web-dummy-data";
  import { SingleValue } from "react-select";
  import { Pagination } from "flowbite-react";
  import { TutorCards } from "../components/TutorsCards/TutorsCards";
  import { RxCross2 } from "react-icons/rx";
  import { FaChevronDown } from "react-icons/fa";

  const Select = dynamic(() => import("react-select"), { ssr: false, loading: () => <p></p> });

  interface OptionType {
    value: string;
    label: string;
  }

  const Tutors = () => {
    const [selectedSubject, setSelectedSubject] = useState<OptionType | null>(null);
    const [selectedClass, setSelectedClass] = useState<OptionType | null>(null);
    const [selectedSorting] = useState<SingleValue<OptionType>>(null);
    const [experience, setExperience] = useState<OptionType | null>(null);
    const [gender, setGender] = useState<OptionType | null>(null);
    const [feeRange, setFeeRange] = useState<OptionType | null>(null);

    const [isSideBarOpen, setIsSideBarOpen] = useState(false);
    const [errorMessage, setErrorMessage] = useState<string | null>(null);

    const toggleSideBar = () => {
      setIsSideBarOpen(!isSideBarOpen);
      setErrorMessage(null); 
    };

    const cardsPerPage = 9;
    const totalPages = Math.ceil(cardData.length / cardsPerPage);
    const [currentPage, setCurrentPage] = useState(1);

    const onPageChange = (page: number) => setCurrentPage(page);

    const startIndex = (currentPage - 1) * cardsPerPage;
    const endIndex = startIndex + cardsPerPage;
    const currentCards = cardData.slice(startIndex, endIndex);

    const options: OptionType[] = [
      { value: "chocolate", label: "Chocolate" },
      { value: "strawberry", label: "Strawberry" },
      { value: "vanilla", label: "Vanilla" },
    ];

    const option2: OptionType[] = [
      { value: "Red", label: "Red" },
      { value: "Blue", label: "Blue" },
      { value: "Green", label: "Green" },
    ];

    const option3: OptionType[] = [
      { value: "A To Z", label: "A To Z" },
      { value: "Z To A", label: "Z To A" },
    ];

    const experienceOptions: OptionType[] = [
      { value: "1", label: "1+ Years" },
      { value: "3", label: "3+ Years" },
      { value: "5", label: "5+ Years" },
    ];

    const genderOptions: OptionType[] = [
      { value: "male", label: "Male" },
      { value: "female", label: "Female" },
      { value: "other", label: "Other" },
    ];

    const feeRangeOptions: OptionType[] = [
      { value: "0-20", label: "$0 - $20" },
      { value: "20-50", label: "$20 - $50" },
      { value: "50-100", label: "$50 - $100" },
    ];

    const handleApplyFilters = () => {
      if (!selectedClass || !selectedSubject || !experience || !gender || !feeRange) {
        setErrorMessage("The select box is empty. Please fill it !");
        return;
      }

      console.log("Selected Filters:", {
        class: selectedClass,
        subject: selectedSubject,
        experience,
        gender,
        feeRange,
      });

      setSelectedClass(null);
      setSelectedSubject(null);
      setExperience(null);
      setGender(null);
      setFeeRange(null);

      toggleSideBar();
    };

    return (
      <div className="w-full h-fit pt-40 pb-10 px-5 sm:px-7 lg:px-20 flex flex-col gap-8 md:gap-12">
        {/* Overlay */}
        <div
          className={`fixed inset-0 bg-black bg-opacity-50 z-40 transition-opacity duration-300 ${
            isSideBarOpen
              ? "opacity-50 pointer-events-auto"
              : "opacity-0 pointer-events-none"
          }`}
          onClick={toggleSideBar}
        />

        {/* Sidebar */}
        <div
          className={`fixed inset-y-0 left-0  w-full max-w-[80%] sm:max-w-[50%] lg:max-w-[25%] bg-white z-50 flex flex-col p-6 gap-4 transform transition-transform duration-300 ease-in-out ${
            isSideBarOpen ? "translate-x-0" : "translate-x-[-100%]"
          }`}
        >
          <div className="w-8 h-8 rounded-lg bg-[#f6f6f6] flex justify-center items-center">
            <RxCross2
              className="text-lg cursor-pointer"
              onClick={toggleSideBar}
            />
          </div>
          <div className="flex flex-col gap-4">
            {/* Class Dropdown */}
            <div className="w-full border-b border-black py-5">
              <Select
                options={option2}
                value={selectedClass}
                onChange={(newValue) => setSelectedClass(newValue as OptionType)}
                placeholder="Select Class"
                className="text-sm"
                styles={{
                  control: (base) => ({
                    ...base,
                    border: "none",
                    boxShadow: "none",
                    backgroundColor: "transparent",
                    cursor: "pointer",
                    minHeight: "auto",
                  }),
                  indicatorSeparator: () => ({ display: "none" }),
                  dropdownIndicator: (base) => ({
                    ...base,
                    padding: 0,
                    color: "#666",
                  }),
                  placeholder: (base) => ({
                    ...base,
                    color: "#000",
                    fontWeight: "bold",
                    fontSize: "1.125rem",
                  }),
                }}
                components={{
                  DropdownIndicator: () => <FaChevronDown className="text-base" />,
                }}
              />
            </div>

            {/* Subject Dropdown */}
            <div className="w-full border-b border-black py-5">
              <Select
                options={options}
                value={selectedSubject}
                onChange={(newValue) => setSelectedSubject(newValue as OptionType)}
                placeholder="Select Subject"
                className="text-sm"
                styles={{
                  control: (base) => ({
                    ...base,
                    border: "none",
                    boxShadow: "none",
                    backgroundColor: "transparent",
                    cursor: "pointer",
                    minHeight: "auto",
                  }),
                  indicatorSeparator: () => ({ display: "none" }),
                  dropdownIndicator: (base) => ({
                    ...base,
                    padding: 0,
                    color: "#666",
                  }),
                  placeholder: (base) => ({
                    ...base,
                    color: "#000",
                    fontWeight: "bold",
                    fontSize: "1.125rem",
                  }),
                }}
                components={{
                  DropdownIndicator: () => <FaChevronDown className="text-base" />,
                }}
              />
            </div>

            {/* Experience Dropdown */}
            <div className="w-full border-b border-black py-5">
              <Select
                options={experienceOptions}
                value={experience}
                onChange={(newValue) => setExperience(newValue as OptionType)}
                placeholder="Experience"
                className="text-sm"
                styles={{
                  control: (base) => ({
                    ...base,
                    border: "none",
                    boxShadow: "none",
                    backgroundColor: "transparent",
                    cursor: "pointer",
                    minHeight: "auto",
                  }),
                  indicatorSeparator: () => ({ display: "none" }),
                  dropdownIndicator: (base) => ({
                    ...base,
                    padding: 0,
                    color: "#666",
                  }),
                  placeholder: (base) => ({
                    ...base,
                    color: "#000",
                    fontWeight: "bold",
                    fontSize: "1.125rem",
                  }),
                }}
                components={{
                  DropdownIndicator: () => <FaChevronDown className="text-base" />,
                }}
              />
            </div>

            {/* Gender Dropdown */}
            <div className="w-full border-b border-black py-5">
              <Select
                options={genderOptions}
                value={gender}
                onChange={(newValue) => setGender(newValue as OptionType)}
                placeholder="Select Gender"
                className="text-sm"
                styles={{
                  control: (base) => ({
                    ...base,
                    border: "none",
                    boxShadow: "none",
                    backgroundColor: "transparent",
                    cursor: "pointer",
                    minHeight: "auto",
                  }),
                  indicatorSeparator: () => ({ display: "none" }),
                  dropdownIndicator: (base) => ({
                    ...base,
                    padding: 0,
                    color: "#666",
                  }),
                  placeholder: (base) => ({
                    ...base,
                    color: "#000",
                    fontWeight: "bold",
                    fontSize: "1.125rem",
                  }),
                }}
                components={{
                  DropdownIndicator: () => <FaChevronDown className="text-base" />,
                }}
              />
            </div>

            {/* Fee Range Dropdown */}
            <div className="w-full border-b border-black py-5">
              <Select
                options={feeRangeOptions}
                value={feeRange}
                onChange={(newValue) => setFeeRange(newValue as OptionType)}
                placeholder="Fee Range"
                className="text-sm"
                styles={{
                  control: (base) => ({
                    ...base,
                    border: "none",
                    boxShadow: "none",
                    backgroundColor: "transparent",
                    cursor: "pointer",
                    minHeight: "auto",
                  }),
                  indicatorSeparator: () => ({ display: "none" }),
                  dropdownIndicator: (base) => ({
                    ...base,
                    padding: 0,
                    color: "#666",
                  }),
                  placeholder: (base) => ({
                    ...base,
                    color: "#000",
                    fontWeight: "bold",
                    fontSize: "1.125rem",
                  }),
                }}
                components={{
                  DropdownIndicator: () => <FaChevronDown className="text-base" />,
                }}
              />
            </div>
          </div>

          {/* Error Message */}
          {errorMessage && (
            <p className="text-red-500 text-sm text-center font-medium">{errorMessage}</p>
          )}

          {/* Apply Filters Button */}
          <button
            className="w-full px-6 py-3.5 cursor-pointer transition-all duration-300 bg-[#A435F0] text-white font-medium text-sm rounded-md hover:bg-[#9332d6]"
            onClick={handleApplyFilters}
          >
            APPLY FILTERS
          </button>
        </div>

        {/* Main Content */}
        <div className="w-full h-auto flex flex-col lg:flex-row justify-center items-center gap-x-8 md:gap-x-5 bg-[#fafafa] py-6 md:py-12 lg:py-10 rounded-xl">
          <div className="flex flex-col items-center lg:items-start pl-4 sm:pl-10 lg:pl-20 w-full lg:w-fit gap-y-4 md:gap-y-3">
            <h1 className="font-Barlow text-3xl sm:text-4xl md:text-5xl lg:text-[54px] w-full lg:w-[520px] font-extrabold text-secondary leading-tight">
              Find the best tutor for your subject
            </h1>
            <p className="text-sm md:text-base text-secondary w-full lg:w-[478px]">
              Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum fugiat nulla pariatur.
            </p>
            <div className="w-full font-Barlow  flex flex-col sm:flex-row gap-4 select-container pr-4 sm:pr-10 py-5">
              <Select
                value={selectedSubject}
                options={options}
                className="w-full text-sm"
                placeholder="Select Subjects"
                menuPortalTarget={typeof document !== "undefined" ? document.body : null}
                styles={{
                  control: (base) => ({
                    ...base,
                    backgroundColor: "white",
                    height: "50px",
                    cursor: "pointer",
                    border: "1px solid black",
                  }),
                  menuPortal: (base) => ({ ...base, zIndex: 9999 }),
                }}
              />
              <Select
                value={selectedClass}
                options={option2}
                className="w-full text-sm"
                placeholder="Your Class"
                menuPortalTarget={typeof document !== "undefined" ? document.body : null}
                styles={{
                  control: (base) => ({
                    ...base,
                    backgroundColor: "white",
                    height: "50px",
                    cursor: "pointer",
                    border: "1px solid black",
                  }),
                  menuPortal: (base) => ({ ...base, zIndex: 9999 }),
                }}
              />
            </div>
            <div className="w-full h-fit pr-4 sm:pr-10">
              <button className="w-full font-Barlow  hover:bg-[#9332d6] transition-all duration-300 cursor-pointer px-6 py-4 bg-[#A435F0] text-white font-medium text-base rounded-md">
                FIND TUTORS
              </button>
            </div>
          </div>
          <div className="flex-1 flex justify-center mt-8 lg:mt-0">
            <img
              className="w-full max-w-[600px] h-auto object-contain"
              src="/images/Tutor_images/img1.svg"
              alt="Tutor illustration"
            />
          </div>
        </div>

        {/* Cards Section */}
        <div className="w-full flex flex-col gap-y-8 md:gap-y-12 gap-x-8 md:gap-x-10">
          <div className="w-full flex flex-col sm:flex-row justify-between items-center gap-4">
            <h1 className="font-bold font-Barlow  text-lg text-center sm:text-left">
              Showing {currentCards.length} of {cardData.length} results
            </h1>
            <div className="w-full font-Barlow  sm:w-fit flex flex-col xs:flex-row gap-3">
              <button
                onClick={toggleSideBar}
                className="w-full font-Barlow  xs:w-fit cursor-pointer flex items-center justify-center gap-2 bg-[#F6F6F6] px-4 py-2.5 rounded-md border-2 border-[#e5e5e5] text-sm text-[#8F8F8F] hover:bg-[#eaeaea] transition-colors"
              >
                <ImEqualizer className="text-sm" /> FILTER
              </button>
              <Select
                value={selectedSorting}
                options={option3}
                className="w-full xs:w-36 text-sm"
                placeholder="SORTING"
                styles={{
                  control: (base) => ({
                    ...base,
                    backgroundColor: "#F6F6F6",
                    height: "40px",
                    cursor: "pointer",
                    border: "2px solid #e5e5e5",
                  }),
                  placeholder: (base) => ({
                    ...base,
                    color: "#8F8F8F",
                    fontWeight: "400",
                  }),
                }}
              />
            </div>
          </div>

          {/* Display only 9 Cards Per Page */}
          <div className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-6 justify-between lg:justify-start items-center lg:items-start">
            {currentCards.map((tutor, index) => (
              <TutorCards  key={index} 
              {...tutor} 
              id={`tutor-${index}-${tutor.name.replace(/\s+/g, '-').toLowerCase()}`} />
            ))}
          </div>

          {/* Pagination Section */}
          <div className="flex overflow-x-auto justify-center sm:justify-start">
          <Pagination
    currentPage={currentPage}
    totalPages={totalPages}
    onPageChange={onPageChange}
    className="MainPagination flex"
    theme={{
      pages: {
        base: "flex gap-1",
        selector: {
          base: "w-10 h-10 flex items-center justify-center rounded-full text-sm font-medium transition-colors",
          active: "bg-[#A435F0] text-white",
        },
      },
    }}
  />
          </div>


        </div>
      </div>
    );
  };

  export default Tutors;