// Register_a_tutor.tsx
import React, { useState } from "react";
import Request_a_tutorBoxes from "./Request_a_tutorBoxes";
import { toast } from "react-toastify";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export interface RegisterATutorProps {
  handleBack: () => void;
  formData: {
    fullName: string;
    email: string;
    phoneNumber: string;
    age: string;
    password: string;
    confirmPassword: string;
    gender: string;
    address: string;
    bio: string;
  };
  imagePreview: string | null;
  videoFile: File | null;
  handleSubmitAndReset: () => void;
}

export interface Experience {
  instituteName: string;
  SubjectTeacher: string;
  Experience: string;
  Description: string;
}

export interface Qualification {
  degree: string;
  institute: string;
  fieldOfStudy: string;
  year: string;
  description: string;
}

export interface ClassOrSubject {
  selectedClasses: string[];
  selectedSubjects: string[];
}

export interface QualFormData {
  degree: string;
  institute: string;
  fieldOfStudy: string;
  startMonth: string;
  startYear: string;
  endMonth: string;
  endYear: string;
  currentlyStudying: boolean;
  description: string;
}

export interface FormData {
  instituteName: string;
  designation: string;
  startMonth: string;
  startYear: string;
  endMonth: string;
  endYear: string;
  currentlyWorking: boolean;
  description: string;
}
export interface Course {
  selectedCourses: string[];
}

export interface OptionType {
  value: string;
  label: string;
}

const Register_a_tutor: React.FC<RegisterATutorProps> = ({
  handleBack,
  formData,
  imagePreview,
  videoFile,
  handleSubmitAndReset,
}) => {
  const [feeValue, setFeeValue] = useState<string>("");
  const [experiences, setExperiences] = useState<Experience[]>([]);
  const [qualifications, setQualifications] = useState<Qualification[]>([]);
  const [classOrSubjects, setClassOrSubjects] = useState<ClassOrSubject[]>([]);
  const [courses, setCourses] = useState<Course[]>([]);

  const [isExpModalOpen, setIsExpModalOpen] = useState(false);
  const [isQualModalOpen, setIsQualModalOpen] = useState(false);
  const [isClassOrSubjectModalOpen, setIsClassOrSubjectModalOpen] =
    useState(false);
  const [isCoursesModalOpen, setIsCoursesModalOpen] = useState(false);

  const [expFormData, setExpFormData] = useState({
    instituteName: "",
    designation: "",
    startMonth: "",
    startYear: "",
    endMonth: "",
    endYear: "",
    currentlyWorking: false,
    description: "",
  });

  const [qualFormData, setQualFormData] = useState({
    degree: "",
    institute: "",
    fieldOfStudy: "",
    startMonth: "",
    startYear: "",
    endMonth: "",
    endYear: "",
    currentlyStudying: false,
    description: "",
  });

  const [ClassselectedOption, setClassSelectedOption] = useState<OptionType[]>([]);
  const [SubjectselectedOption, setSubjectSelectedOption] = useState<OptionType[]>(
    []
  );
  const [CoursesSelectedOption, setCoursesSelectedOption] = useState<OptionType[]>(
    []
  );

  const [editIndex, setEditIndex] = useState<number | null>(null);

  const handleFeeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFeeValue(e.target.value);
  };

  const validateForm = () => {
    if (
      !formData.fullName ||
      !formData.email ||
      !formData.phoneNumber ||
      !formData.password ||
      !formData.confirmPassword
    ) {
      return false;
    }

    if (formData.password !== formData.confirmPassword) {
      toast.error("Passwords do not match");
      return false;
    }

    if (!feeValue) {
      toast.error("Please enter your fee per hour");
      return false;
    }

    return true;
  };

  const handleSubmit = () => {
    if (!validateForm()) {
      return;
    }

    const completeData = {
      ...formData,
      profileImage: imagePreview,
      videoIntroduction: videoFile?.name,
      teachingExperiences: experiences,
      qualifications: qualifications,
      classAndSubjects: classOrSubjects,
      courses: courses,
      feeValue: feeValue,
    };

    console.log("Complete Tutor Registration Data:", completeData);
    alert("Registration successful!");

    setFeeValue("");
    setExperiences([]);
    setQualifications([]);
    setClassOrSubjects([]);
    setCourses([]);

    handleSubmitAndReset();
  };

  const Request_a_tutorBoxesData = [
    {
      heading: "Teaching Experience",
      src: "",
      instituteName: "N/A",
      Description: "",
      SubjectTeacher: "",
      Experience: "",
    },
    {
      heading: "Your Qualification",
      src: "",
      instituteName: "",
      Description: "",
      SubjectTeacher: "",
      Experience: "",
    },
    {
      heading: "Classes and Subjects",
      src: "",
      instituteName: "N/A",
      Description: "",
      SubjectTeacher: "",
      Experience: "",
    },
    {
      heading: "Courses",
      src: "",
      instituteName: "N/A",
      Description: "",
      SubjectTeacher: "",
      Experience: "",
    },
  ];

  return (
    <div className="w-full flex flex-col gap-y-10">
      <ToastContainer />

      {Request_a_tutorBoxesData.map((item, key) => (
        <Request_a_tutorBoxes
          heading={item.heading}
          src={item.src}
          instituteName={item.instituteName}
          SubjectTeacher={item.SubjectTeacher}
          Experience={item.Experience}
          Description={item.Description}
          key={key}
          experiences={experiences}
          setExperiences={setExperiences}
          qualifications={qualifications}
          setQualifications={setQualifications}
          classOrSubjects={classOrSubjects}
          setClassOrSubjects={setClassOrSubjects}
          courses={courses}
          setCourses={setCourses}
          isExpModalOpen={isExpModalOpen}
          setIsExpModalOpen={setIsExpModalOpen}
          isQualModalOpen={isQualModalOpen}
          setIsQualModalOpen={setIsQualModalOpen}
          isClassOrSubjectModalOpen={isClassOrSubjectModalOpen}
          setIsClassOrSubjectModalOpen={setIsClassOrSubjectModalOpen}
          isCoursesModalOpen={isCoursesModalOpen}
          setIsCoursesModalOpen={setIsCoursesModalOpen}
          expFormData={expFormData}
          setExpFormData={setExpFormData}
          qualFormData={qualFormData}
          setQualFormData={setQualFormData}
          ClassselectedOption={ClassselectedOption}
          setClassSelectedOption={setClassSelectedOption}
          SubjectselectedOption={SubjectselectedOption}
          setSubjectSelectedOption={setSubjectSelectedOption}
          CoursesSelectedOption={CoursesSelectedOption}
          setCoursesSelectedOption={setCoursesSelectedOption}
          editIndex={editIndex}
          setEditIndex={setEditIndex}
        />
      ))}

      <div className="w-full h-fit border border-dotted border-black flex flex-col rounded-lg gap-y-7 px-9 py-9">
        <h1 className="font-extrabold text-2xl sm:text-3xl">Tuition Fee</h1>
        <div className="w-full h-fit flex flex-col gap-y-5">
          <h1 className="font-semibold text-xl sm:text-2xl">Fee/per hour</h1>
          <input
            type="text"
            value={feeValue}
            onChange={handleFeeChange}
            className="w-full py-3 px-5 rounded-md font-normal text-base placeholder:font-normal outline-none text-[#8F8F8F] border border-gray-500"
            placeholder="Enter Here"
          />
        </div>
      </div>

      <div className="w-full h-fit flex justify-end items-center pt-10 gap-x-5">
        <button
          type="button"
          className="self-end px-8 sm:px-12 py-3 sm:py-4 text-lg sm:text-xl cursor-pointer font-bold rounded-md bg-white border border-stone-900 hover:bg-stone-900 transition-all duration-300 hover:text-white"
          onClick={handleBack}
        >
          Previous
        </button>
        <button
          type="button"
          onClick={handleSubmit}
          className="self-end px-8 sm:px-12 py-3 sm:py-4 text-lg sm:text-xl cursor-pointer font-bold text-white rounded-md bg-stone-900"
        >
          Submit
        </button>
      </div>
    </div>
  );
};

export default Register_a_tutor;
