import Select, { MultiValue } from "react-select";
import Image from "next/image";
import React, { useState } from "react";
import { GoPlus } from "react-icons/go";
import { MdOutlineEdit } from "react-icons/md";
import { RiDeleteBin5Line } from "react-icons/ri";
import { RxCross2 } from "react-icons/rx";
import { toast, ToastContainer } from "react-toastify";
import BoxChips from "./BoxChips";
import BoxChipsCourses from "./BoxChipsCourses";
import {
  ClassOrSubject,
  Course,
  Experience,
  FormData,
  OptionType,
  QualFormData,
  Qualification,
} from "./Register_a_tutor";

interface Request_a_tutorBoxesProps {
  heading: string;
  src: string;
  instituteName: string;
  SubjectTeacher: string;
  Experience: string;
  Description: string;
  // State props
  experiences: Experience[];
  setExperiences: (value: Experience[]) => void;
  qualifications: Qualification[];
  setQualifications: React.Dispatch<React.SetStateAction<Qualification[]>>;
  classOrSubjects: ClassOrSubject[];
  setClassOrSubjects: React.Dispatch<React.SetStateAction<ClassOrSubject[]>>;
  courses: Course[];
  setCourses: React.Dispatch<React.SetStateAction<Course[]>>;
  // Modal states
  isExpModalOpen: boolean;
  setIsExpModalOpen: React.Dispatch<React.SetStateAction<boolean>>;
  isQualModalOpen: boolean;
  setIsQualModalOpen: React.Dispatch<React.SetStateAction<boolean>>;
  isClassOrSubjectModalOpen: boolean;
  setIsClassOrSubjectModalOpen: React.Dispatch<React.SetStateAction<boolean>>;
  isCoursesModalOpen: boolean;
  setIsCoursesModalOpen: React.Dispatch<React.SetStateAction<boolean>>;
  // Form data
  expFormData: FormData;
  setExpFormData: React.Dispatch<React.SetStateAction<FormData>>;
  qualFormData: QualFormData;
  setQualFormData: React.Dispatch<React.SetStateAction<QualFormData>>;
  // Select options
  ClassselectedOption: OptionType[];
  setClassSelectedOption: React.Dispatch<React.SetStateAction<OptionType[]>>;
  SubjectselectedOption: OptionType[];
  setSubjectSelectedOption: React.Dispatch<React.SetStateAction<OptionType[]>>;
  CoursesSelectedOption: OptionType[];
  setCoursesSelectedOption: React.Dispatch<React.SetStateAction<OptionType[]>>;
  // Edit state
  editIndex: number | null;
  setEditIndex: React.Dispatch<React.SetStateAction<number | null>>;
}

const Request_a_tutorBoxes = ({
  heading,
  experiences,
  setExperiences,
  qualifications,
  setQualifications,
  classOrSubjects,
  setClassOrSubjects,
  courses,
  setCourses,
  isExpModalOpen,
  setIsExpModalOpen,
  isQualModalOpen,
  setIsQualModalOpen,
  isClassOrSubjectModalOpen,
  setIsClassOrSubjectModalOpen,
  isCoursesModalOpen,
  setIsCoursesModalOpen,

  ClassselectedOption,
  setClassSelectedOption,
  SubjectselectedOption,
  setSubjectSelectedOption,
  CoursesSelectedOption,
  setCoursesSelectedOption,
  editIndex,
  setEditIndex,
}: Request_a_tutorBoxesProps) => {
  const [formData, setFormData] = useState({
    instituteName: "",
    designation: "",
    startMonth: "",
    startYear: "",
    endMonth: "",
    endYear: "",
    currentlyWorking: false,
    description: "",
  });
  const [qualificationData, setQualificationData] = useState({
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

  const [, setClassOrSubjectData] = useState({
    selectedClasses: [] as string[],
    selectedSubjects: [] as string[],
  });
  const [, setCoursesData] = useState({
    selectedCourses: [] as string[],
  });

  const Classoptions = [
    { value: "1", label: "1" },
    { value: "2", label: "2" },
    { value: "3", label: "3" },
    { value: "4", label: "4" },
    { value: "5", label: "5" },
    { value: "6", label: "6" },
    { value: "7", label: "7" },
    { value: "8", label: "8" },
    { value: "Metric", label: "Metric" },
    { value: "Intermediate", label: "Intermediate" },
    { value: "A-Level", label: "A-Level" },
    { value: "O-Level", label: "O-Level" },
    { value: "Bachelors", label: "Bachelors" },
    { value: "Masters", label: "Masters" },
  ];

  const subjectOptions = [
    { value: "Math", label: "Math" },
    { value: "Science", label: "Science" },
    { value: "English", label: "English" },
    { value: "History", label: "History" },
    { value: "Geography", label: "Geography" },
    { value: "Computer Science", label: "Computer Science" },
    { value: "Physics", label: "Physics" },
    { value: "Chemistry", label: "Chemistry" },
    { value: "Biology", label: "Biology" },
    { value: "Economics", label: "Economics" },
    { value: "Psychology", label: "Psychology" },
    { value: "Sociology", label: "Sociology" },
    { value: "Political Science", label: "Political Science" },
    { value: "Philosophy", label: "Philosophy" },
    { value: "Art", label: "Art" },
    { value: "Music", label: "Music" },
  ];

  const coursesOptions = [
    { value: "Web Development", label: "Web Development" },
    { value: "Mobile App Development", label: "Mobile App Development" },
    { value: "Data Science", label: "Data Science" },
    { value: "Machine Learning", label: "Machine Learning" },
    { value: "Artificial Intelligence", label: "Artificial Intelligence" },
    { value: "Cloud Computing", label: "Cloud Computing" },
    { value: "Cybersecurity", label: "Cybersecurity" },
    { value: "Blockchain", label: "Blockchain" },
    { value: "UI/UX Design", label: "UI/UX Design" },
    { value: "Digital Marketing", label: "Digital Marketing" },
    { value: "Graphic Design", label: "Graphic Design" },
    { value: "Game Development", label: "Game Development" },
  ];

  const currentYear = new Date().getFullYear();
  const years = Array.from(
    { length: currentYear - 1949 },
    (_, i) => currentYear - i
  );
  const months = [
    "Jan",
    "Feb",
    "March",
    "Apr",
    "May",
    "June",
    "July",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ];

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
    >
  ) => {
    const { name, value, type } = e.target;
    const checked =
      type === "checkbox" && e.target instanceof HTMLInputElement
        ? e.target.checked
        : undefined;

    if (heading === "Teaching Experience") {
      setFormData((prev) => {
        const updated = {
          ...prev,
          [name]: type === "checkbox" ? checked : value,
        };
        if (name === "currentlyWorking" && checked) {
          updated.endMonth = "";
          updated.endYear = "";
        }
        return updated;
      });
    } else if (heading === "Your Qualification") {
      setQualificationData((prev) => {
        const updated = {
          ...prev,
          [name]: type === "checkbox" ? checked : value,
        };
        if (name === "currentlyStudying" && checked) {
          updated.endMonth = "";
          updated.endYear = "";
        }
        return updated;
      });
    }
  };

  const handleSubmit = () => {
    if (heading === "Teaching Experience") {
      const {
        instituteName,
        designation,
        startMonth,
        startYear,
        endMonth,
        endYear,
        currentlyWorking,
        description,
      } = formData;

      if (
        !instituteName ||
        !designation ||
        !startMonth ||
        !startYear ||
        (!currentlyWorking && (!endMonth || !endYear))
      ) {
        toast.error("Please fill all required fields!", {
          position: "top-right",
          autoClose: 3000,
        });
        return;
      }

      const experienceEntry = {
        instituteName,
        SubjectTeacher: designation,
        Experience: `${startMonth} ${startYear} - ${
          currentlyWorking ? "Present" : `${endMonth} ${endYear}`
        }`,
        Description: description,
      };

      if (editIndex !== null) {
        const updated = [...experiences];
        updated[editIndex] = experienceEntry;
        setExperiences(updated);
      } else {
        setExperiences([...experiences, experienceEntry]);
      }

      // Reset form
      setFormData({
        instituteName: "",
        designation: "",
        startMonth: "",
        startYear: "",
        endMonth: "",
        endYear: "",
        currentlyWorking: false,
        description: "",
      });
      setIsExpModalOpen(false);
    } else if (heading === "Your Qualification") {
      const {
        degree,
        institute,
        fieldOfStudy,
        startMonth,
        startYear,
        endMonth,
        endYear,
        currentlyStudying,
        description,
      } = qualificationData;

      if (
        !institute ||
        !degree ||
        !fieldOfStudy ||
        !startMonth ||
        !startYear ||
        (!currentlyStudying && (!endMonth || !endYear))
      ) {
        toast.error("Please fill all required fields!", {
          position: "top-right",
          autoClose: 3000,
        });
        return;
      }

      const qualificationEntry = {
        degree,
        institute,
        fieldOfStudy,
        year: `${startMonth} ${startYear} - ${
          currentlyStudying ? "Present" : `${endMonth} ${endYear}`
        }`,
        description,
      };

      if (editIndex !== null) {
        const updated = [...qualifications];
        updated[editIndex] = qualificationEntry;
        setQualifications(updated);
      } else {
        setQualifications([...qualifications, qualificationEntry]);
      }

      // Reset form
      setQualificationData({
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
      setIsQualModalOpen(false);
    } else if (heading === "Classes and Subjects") {
      const selectedClasses = ClassselectedOption.map(
        (option: { value: string | number; label: string }) =>
          option.value.toString()
      );
      const selectedSubjects = SubjectselectedOption.map(
        (option: { value: string | number; label: string }) =>
          option.value.toString()
      );

      if (selectedClasses.length === 0 || selectedSubjects.length === 0) {
        toast.error("Please select at least one class and one subject!", {
          position: "top-right",
          autoClose: 3000,
        });
        return;
      }

      const newClassOrSubject = {
        selectedClasses,
        selectedSubjects,
      };

      if (editIndex !== null) {
        const updated = [...classOrSubjects];
        updated[editIndex] = newClassOrSubject;
        setClassOrSubjects(updated);
      } else {
        setClassOrSubjects([...classOrSubjects, newClassOrSubject]);
      }

      setClassSelectedOption([]);
      setSubjectSelectedOption([]);
      setIsClassOrSubjectModalOpen(false);
    } else if (heading === "Courses") {
      const selectedCourses = CoursesSelectedOption.map(
        (option: { value: string | number; label: string }) =>
          option.value.toString()
      );

      if (selectedCourses.length === 0) {
        toast.error("Please select at least one course!", {
          position: "top-right",
          autoClose: 3000,
        });
        return;
      }

      const newCourse = {
        selectedCourses,
      };

      if (editIndex !== null) {
        const updated = [...courses];
        updated[editIndex] = newCourse;
        setCourses(updated);
      } else {
        setCourses([...courses, newCourse]);
      }

      setCoursesSelectedOption([]);
      setIsCoursesModalOpen(false);
    }

    setEditIndex(null);
  };

  const handleEdit = (index: number) => {
    if (heading === "Teaching Experience") {
      const exp = experiences[index];
      const parts = exp.Experience.split(" ");
      setFormData({
        instituteName: exp.instituteName,
        designation: exp.SubjectTeacher,
        startMonth: parts[0],
        startYear: parts[1],
        endMonth: exp.Experience.includes("Present") ? "" : parts[3],
        endYear: exp.Experience.includes("Present") ? "" : parts[4],
        currentlyWorking: exp.Experience.includes("Present"),
        description: exp.Description,
      });
      setEditIndex(index);
      setIsExpModalOpen(true);
    } else if (heading === "Your Qualification") {
      const qual = qualifications[index];
      const parts = qual.year.split(" ");
      setQualificationData({
        degree: qual.degree,
        institute: qual.institute,
        fieldOfStudy: qual.fieldOfStudy,
        startMonth: parts[0],
        startYear: parts[1],
        endMonth: qual.year.includes("Present") ? "" : parts[3],
        endYear: qual.year.includes("Present") ? "" : parts[4],
        currentlyStudying: qual.year.includes("Present"),
        description: qual.description,
      });
      setEditIndex(index);
      setIsQualModalOpen(true);
    } else if (heading === "Classes and Subjects") {
      const classSub = classOrSubjects[index];
      setClassSelectedOption(
        classSub.selectedClasses.map((cls: string) => ({
          value: cls,
          label: cls,
        }))
      );
      setSubjectSelectedOption(
        classSub.selectedSubjects.map((sub: string) => ({
          value: sub,
          label: sub,
        }))
      );
      setEditIndex(index);
      setIsClassOrSubjectModalOpen(true);
    } else if (heading === "Courses") {
      const course = courses[index];
      setCoursesSelectedOption(
        course.selectedCourses.map((crs: string) => ({
          value: crs,
          label: crs,
        }))
      );
      setEditIndex(index);
      setIsCoursesModalOpen(true);
    }
  };

  const handleDelete = (index: number) => {
    if (heading === "Teaching Experience") {
      setExperiences(experiences.filter((_, i) => i !== index));
    } else if (heading === "Your Qualification") {
      setQualifications(qualifications.filter((_, i) => i !== index));
    } else if (heading === "Classes and Subjects") {
      setClassOrSubjects(classOrSubjects.filter((_, i) => i !== index));
    } else if (heading === "Courses") {
      setCourses(courses.filter((_, i) => i !== index));
    }
  };

  const openModal = () => {
    if (heading === "Teaching Experience") {
      setIsExpModalOpen(true);
    } else if (heading === "Your Qualification") {
      setIsQualModalOpen(true);
    } else if (heading === "Classes and Subjects") {
      setIsClassOrSubjectModalOpen(true);
    } else if (heading === "Courses") {
      setIsCoursesModalOpen(true);
    }
  };

  return (
    <div className="w-full h-fit flex flex-col gap-y-10 items-center px-9 py-9 rounded-xl border border-dotted border-black">
      <div className="w-full flex justify-between items-center">
        <h1 className="font-extrabold text-4xl">{heading}</h1>
        <div
          className="w-10 h-10 bg-primary rounded-full flex justify-center items-center text-white cursor-pointer text-4xl"
          onClick={openModal}
        >
          <GoPlus />
        </div>
      </div>

      {/* Experience Modal */}
      {isExpModalOpen && heading === "Teaching Experience" && (
        <div className="fixed top-20 inset-0 flex items-center justify-center bg-black/50 z-20">
          <div className="bg-white w-[535px] h-[500px] border-2 border-gray-400 rounded-2xl overflow-y-scroll">
            <div className="fixed bg-white flex justify-between items-center w-[530px] py-6 px-8 border-b-2 border-gray-300 rounded-t-2xl">
              <h2 className="text-xl font-bold">Add Experience</h2>
              <button
                className="w-8 h-8 bg-primary rounded-full text-white flex justify-center items-center cursor-pointer"
                onClick={() => setIsExpModalOpen(false)}
              >
                <RxCross2 />
              </button>
            </div>
            <ToastContainer />
            <div className="flex flex-col gap-4 px-8 pb-6 mt-24">
              <h1 className="text-xs text-[#8F8F8F]">* Indicates required</h1>
              {[
                {
                  label: "Institute Name*",
                  name: "instituteName",
                  type: "text",
                  placeholder: "Institute Name",
                },
                {
                  label: "Designation*",
                  name: "designation",
                  type: "text",
                  placeholder: "Your Designation",
                },
              ].map(({ label, name, type, placeholder }) => (
                <div key={name} className="w-full flex flex-col gap-y-2">
                  <h1 className="text-lg font-semibold text-secondary">
                    {label}
                  </h1>
                  <input
                    type={type}
                    name={name}
                    value={String(formData[name as keyof typeof formData])}
                    onChange={handleChange}
                    placeholder={placeholder}
                    className="border border-black text-[#8F8F8F] px-6 py-2 text-sm rounded-md w-full outline-none"
                  />
                </div>
              ))}

              {/* Start Date */}
              <div className="flex flex-col gap-1">
                <h1 className="text-lg font-semibold text-secondary">
                  Start Date*
                </h1>
                <div className="flex gap-6">
                  {["startMonth", "startYear"].map((field, idx) => (
                    <div
                      key={field}
                      className="w-1/2 pr-2 py-1 border border-black rounded-md"
                    >
                      <select
                        name={field}
                        value={String(formData[field as keyof typeof formData])}
                        onChange={handleChange}
                        className="text-[#8F8F8F] border border-transparent cursor-pointer px-3 py-2.5 text-sm w-full outline-none"
                      >
                        <option disabled value="">{`Start ${
                          idx === 0 ? "Month" : "Year"
                        }`}</option>
                        {(idx === 0 ? months : years).map((val) => (
                          <option key={val} value={val}>
                            {val}
                          </option>
                        ))}
                      </select>
                    </div>
                  ))}
                </div>
              </div>

              {/* End Date */}
              <div className="flex flex-col gap-x-1">
                <h1 className="text-lg font-semibold text-secondary">
                  End Date*
                </h1>
                <div className="flex gap-6">
                  {["endMonth", "endYear"].map((field, idx) => (
                    <div
                      key={field}
                      className={`w-1/2 pr-2 py-1 border rounded-md ${
                        formData.currentlyWorking
                          ? "border-gray-400 text-gray-400"
                          : "border-black"
                      }`}
                    >
                      <select
                        name={field}
                        value={String(formData[field as keyof typeof formData])}
                        onChange={handleChange}
                        disabled={formData.currentlyWorking}
                        className="w-full cursor-pointer border border-transparent text-[#8F8F8F] px-3 py-2.5 text-sm outline-none"
                      >
                        <option disabled value="">{`End ${
                          idx === 0 ? "Month" : "Year"
                        }`}</option>
                        {(idx === 0 ? months : years).map((val) => (
                          <option key={val} value={val}>
                            {val}
                          </option>
                        ))}
                      </select>
                    </div>
                  ))}
                </div>
              </div>

              <div className="flex gap-2 items-center">
                <input
                  type="checkbox"
                  name="currentlyWorking"
                  checked={formData.currentlyWorking}
                  onChange={handleChange}
                  className="rounded-full cursor-pointer"
                  id="currentlyWorking"
                />
                <label htmlFor="currentlyWorking">Currently Working</label>
              </div>

              <div className="flex flex-col gap-y-2">
                <h1 className="text-lg font-semibold text-secondary">
                  Description:
                </h1>
                <textarea
                  name="description"
                  value={formData.description}
                  onChange={handleChange}
                  className="w-full h-[150px] px-5 py-4 text-sm text-[#8F8F8F] rounded-lg outline-none border border-black"
                  placeholder="Write here"
                ></textarea>
              </div>

              <div className="flex justify-end gap-4">
                <button
                  onClick={handleSubmit}
                  className="bg-black text-white py-3 rounded-md w-24 cursor-pointer"
                >
                  Save
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Qualification Modal */}
      {isQualModalOpen && heading === "Your Qualification" && (
        <div className="fixed top-20 inset-0 flex items-center justify-center bg-black/50 z-20">
          <div className="bg-white w-[535px] h-[500px] border-2 border-gray-400 rounded-2xl overflow-y-scroll">
            <div className="fixed bg-white flex justify-between items-center w-[530px] py-6 px-8 border-b-2 border-gray-300 rounded-t-2xl">
              <h2 className="text-xl font-bold">Add Education</h2>
              <button
                className="w-8 h-8 bg-primary rounded-full text-white flex justify-center items-center cursor-pointer"
                onClick={() => setIsQualModalOpen(false)}
              >
                <RxCross2 />
              </button>
            </div>
            <ToastContainer />
            <div className="flex flex-col gap-4 px-8 pb-6 mt-24">
              <h1 className="text-xs text-[#8F8F8F]">* Indicates required</h1>
              {[
                {
                  label: "School *",
                  name: "institute",
                  type: "text",
                  placeholder: "Ex: Boston University",
                },
                {
                  label: "Degree:",
                  name: "degree",
                  type: "text",
                  placeholder: "Ex: Bachelor's",
                },
                {
                  label: "Field of study:",
                  name: "fieldOfStudy",
                  type: "text",
                  placeholder: "Ex: Business",
                },
              ].map(({ label, name, type, placeholder }) => (
                <div key={name} className="w-full flex flex-col gap-y-2">
                  <h1 className="text-lg font-semibold text-secondary">
                    {label}
                  </h1>
                  <input
                    type={type}
                    name={name}
                    value={String(
                      qualificationData[name as keyof typeof qualificationData]
                    )}
                    onChange={handleChange}
                    placeholder={placeholder}
                    className="border border-black text-[#8F8F8F] px-6 py-2 text-sm rounded-md w-full outline-none"
                  />
                </div>
              ))}

              {/* Start Date */}
              <div className="flex flex-col gap-1">
                <h1 className="text-lg font-semibold text-secondary">
                  Start Date*
                </h1>
                <div className="flex gap-6">
                  {["startMonth", "startYear"].map((field, idx) => (
                    <div
                      key={field}
                      className="w-1/2 pr-2 py-1 border border-black rounded-md"
                    >
                      <select
                        name={field}
                        value={String(
                          qualificationData[
                            field as keyof typeof qualificationData
                          ]
                        )}
                        onChange={handleChange}
                        className="text-[#8F8F8F] border border-transparent !outline-none cursor-pointer px-3 py-2.5 text-sm w-full "
                      >
                        <option disabled value="">{`Start ${
                          idx === 0 ? "Month" : "Year"
                        }`}</option>
                        {(idx === 0 ? months : years).map((val) => (
                          <option key={val} value={val}>
                            {val}
                          </option>
                        ))}
                      </select>
                    </div>
                  ))}
                </div>
              </div>

              {/* End Date */}
              <div className="flex flex-col gap-x-1">
                <h1 className="text-lg font-semibold text-secondary">
                  End Date*
                </h1>
                <div className="flex gap-6">
                  {["endMonth", "endYear"].map((field, idx) => (
                    <div
                      key={field}
                      className={`w-1/2 pr-2 py-1 border rounded-md ${
                        qualificationData.currentlyStudying
                          ? "border-gray-400 text-gray-400"
                          : "border-black"
                      }`}
                    >
                      <select
                        name={field}
                        value={String(
                          qualificationData[
                            field as keyof typeof qualificationData
                          ]
                        )}
                        onChange={handleChange}
                        disabled={qualificationData.currentlyStudying}
                        className="w-full cursor-pointer border border-transparent  text-[#8F8F8F] px-3 py-2.5 text-sm outline-none"
                      >
                        <option disabled value="">{`End ${
                          idx === 0 ? "Month" : "Year"
                        }`}</option>
                        {(idx === 0 ? months : years).map((val) => (
                          <option key={val} value={val}>
                            {val}
                          </option>
                        ))}
                      </select>
                    </div>
                  ))}
                </div>
              </div>
              <div className="flex gap-2 items-center">
                <input
                  type="checkbox"
                  name="currentlyStudying"
                  checked={qualificationData.currentlyStudying}
                  onChange={handleChange}
                  className="rounded-full cursor-pointer accent-[#a435f0] outline-none focus:ring-0 focus:outline-none"
                  id="currentlyStudying"
                />
                <label
                  htmlFor="currentlyStudying"
                  className="text-sm font-medium text-gray-700"
                >
                  Currently Studying
                </label>
              </div>

              <div className="flex flex-col gap-y-2">
                <h1 className="text-lg font-semibold text-secondary">
                  Description:
                </h1>
                <textarea
                  name="description"
                  value={qualificationData.description}
                  onChange={handleChange}
                  className="w-full h-[150px] px-5 py-4 text-sm text-[#8F8F8F] rounded-lg outline-none border border-black"
                  placeholder="Write here (optional)"
                ></textarea>
              </div>

              <div className="flex justify-end gap-4">
                <button
                  onClick={handleSubmit}
                  className="bg-black text-white py-3 rounded-md w-24 cursor-pointer"
                >
                  Save
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Class and Subject Modal */}
      {isClassOrSubjectModalOpen && heading === "Classes and Subjects" && (
        <div className="fixed top-7 inset-0 flex items-center justify-center bg-black/50 z-20">
          <div className="bg-white w-[535px] h-fit border-2 border-gray-400 rounded-2xl">
            <div className="fixed bg-white flex justify-between items-center w-[530px] py-6 px-8 border-b-2 border-gray-300 rounded-t-2xl">
              <h2 className="text-xl font-bold">Add Class and Subject</h2>
              <button
                className="w-8 h-8 bg-primary rounded-full text-white flex justify-center items-center cursor-pointer"
                onClick={() => {
                  setIsClassOrSubjectModalOpen(false);
                  setClassSelectedOption([]);
                  setSubjectSelectedOption([]);
                  setEditIndex(null);
                }}
              >
                <RxCross2 />
              </button>
            </div>
            <ToastContainer />
            <div className="flex flex-col gap-4 px-8 pb-6 mt-24">
              <h1 className="text-xs text-[#8F8F8F]">* Indicates required</h1>

              {/* Class Select */}
              <div className="flex flex-col gap-y-2 relative">
                <h1 className="font-semibold text-lg">Classes*</h1>
                <Select
                  options={Classoptions}
                  value={ClassselectedOption}
                  onChange={(selected) => {
                    setClassSelectedOption([
                      ...(selected as MultiValue<{
                        value: string;
                        label: string;
                      }>),
                    ]);
                    setClassOrSubjectData((prev) => ({
                      ...prev,
                      selectedClasses: selected
                        ? selected.map((option) => option.value.toString())
                        : [],
                    }));
                  }}
                  placeholder="Select Classes"
                  isMulti
                  className="basic-multi-select"
                  classNamePrefix="select"
                />
              </div>

              {/* Subject Select */}
              <div className="flex flex-col gap-y-2 relative">
                <h1 className="font-semibold text-lg">Subjects*</h1>
                <Select
                  options={subjectOptions}
                  value={SubjectselectedOption}
                  onChange={(selected) => {
                    setSubjectSelectedOption([
                      ...(selected as MultiValue<{
                        value: string;
                        label: string;
                      }>),
                    ]);
                    setClassOrSubjectData((prev) => ({
                      ...prev,
                      selectedSubjects: selected
                        ? selected.map((option) => option.value.toString())
                        : [],
                    }));
                  }}
                  placeholder="Select Subjects"
                  isMulti
                  className="basic-multi-select"
                  classNamePrefix="select"
                />
              </div>

              <div className="flex justify-end gap-4">
                <button
                  onClick={handleSubmit}
                  className="bg-black text-white py-3 rounded-md w-24 cursor-pointer"
                >
                  Save
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Courses Modal */}
      {isCoursesModalOpen && heading === "Courses" && (
        <div className="fixed top-7 inset-0 flex items-center justify-center bg-black/50 z-20">
          <div className="bg-white w-[535px] h-fit border-2 border-gray-400 rounded-2xl">
            <div className="fixed bg-white flex justify-between items-center w-[530px] py-6 px-8 border-b-2 border-gray-300 rounded-t-2xl">
              <h2 className="text-xl font-bold">Add Courses</h2>
              <button
                className="w-8 h-8 bg-primary rounded-full text-white flex justify-center items-center cursor-pointer"
                onClick={() => {
                  setIsCoursesModalOpen(false);
                  setCoursesSelectedOption([]);
                  setEditIndex(null);
                }}
              >
                <RxCross2 />
              </button>
            </div>
            <ToastContainer />
            <div className="flex flex-col gap-4 px-8 pb-6 mt-24">
              <h1 className="text-xs text-[#8F8F8F]">* Indicates required</h1>

              {/* Courses Select */}
              <div className="flex flex-col gap-y-2 relative">
                <h1 className="font-semibold text-lg">Courses*</h1>
                <Select
                  options={coursesOptions}
                  value={CoursesSelectedOption}
                  onChange={(selected) => {
                    setCoursesSelectedOption([
                      ...(selected as MultiValue<{
                        value: string;
                        label: string;
                      }>),
                    ]);
                    setCoursesData((prev) => ({
                      ...prev,
                      selectedCourses: selected
                        ? selected.map((option) => option.value.toString())
                        : [],
                    }));
                  }}
                  placeholder="Select Courses"
                  isMulti
                  className="basic-multi-select"
                  classNamePrefix="select"
                />
              </div>

              <div className="flex justify-end gap-4">
                <button
                  onClick={handleSubmit}
                  className="bg-black text-white py-3 rounded-md w-24 cursor-pointer"
                >
                  {editIndex !== null ? "Update" : "Save"}
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Display content based on heading */}
      {heading === "Teaching Experience"
        ? experiences.map(
            (
              exp: {
                instituteName: string;
                SubjectTeacher: string;
                Experience: string;
                Description: string;
              },
              index: number
            ) => (
              <div
                key={index}
                className="w-full flex flex-col sm:flex-row items-start gap-y-4 sm:gap-x-4 rounded-lg"
              >
                <Image
                  src="/images/Become-a-Tutor_images/img3.svg"
                  alt="Logo"
                  width={60}
                  height={60}
                  className="rounded-full mx-auto sm:mx-0"
                />
                <div className="flex flex-col w-full gap-y-4">
                  <div className="flex justify-between">
                    <div className="flex flex-col gap-y-2">
                      <h1 className="text-xl sm:text-2xl font-semibold text-secondary">
                        {exp.instituteName}
                      </h1>
                      <h2 className="text-base">{exp.SubjectTeacher}</h2>
                      <h3 className="text-sm text-[#8F8F8F]">
                        {exp.Experience}
                      </h3>
                    </div>
                    <div className="flex gap-x-4 mt-2">
                      <div
                        className="w-8 h-8 flex justify-center items-center bg-primary text-white text-xl rounded-full cursor-pointer"
                        onClick={() => handleDelete(index)}
                      >
                        <RiDeleteBin5Line />
                      </div>
                      <div
                        className="w-8 h-8 flex justify-center items-center bg-primary text-white text-xl rounded-full cursor-pointer"
                        onClick={() => handleEdit(index)}
                      >
                        <MdOutlineEdit />
                      </div>
                    </div>
                  </div>
                  <p className="text-[15.6px] text-[#8F8F8F]">
                    {exp.Description}
                  </p>
                </div>
              </div>
            )
          )
        : heading === "Your Qualification"
        ? qualifications.map((qual, index) => (
            <div
              key={index}
              className="w-full flex flex-col sm:flex-row items-start gap-y-4 sm:gap-x-4 rounded-lg"
            >
              <Image
                src="/images/Become-a-Tutor_images/img3.svg"
                alt="Logo"
                width={60}
                height={60}
                className="rounded-full mx-auto sm:mx-0"
              />
              <div className="flex flex-col w-full gap-y-4">
                <div className="flex justify-between">
                  <div className="flex flex-col gap-y-2">
                    <h1 className="text-xl sm:text-2xl font-semibold text-secondary">
                      {qual.institute}
                    </h1>
                    <h2 className="text-base">
                      {qual.degree}, {qual.fieldOfStudy}
                    </h2>
                    <h3 className="text-sm text-[#8F8F8F]">{qual.year}</h3>
                  </div>
                  <div className="flex gap-x-4 mt-2">
                    <div
                      className="w-8 h-8 flex justify-center items-center bg-primary text-white text-xl rounded-full cursor-pointer"
                      onClick={() => handleDelete(index)}
                    >
                      <RiDeleteBin5Line />
                    </div>
                    <div
                      className="w-8 h-8 flex justify-center items-center bg-primary text-white text-xl rounded-full cursor-pointer"
                      onClick={() => handleEdit(index)}
                    >
                      <MdOutlineEdit />
                    </div>
                  </div>
                </div>
                <p className="text-[15.6px] text-[#8F8F8F]">
                  {qual.description}
                </p>
              </div>
            </div>
          ))
        : heading === "Classes and Subjects"
        ? classOrSubjects.map((item, index) => (
            <div
              key={index}
              className="w-full flex flex-col sm:flex-row items-start gap-y-4 sm:gap-x-4 rounded-lg"
            >
              <div className="flex flex-col w-full gap-y-4">
                <div className="flex justify-between">
                  <div className="flex flex-col w-full gap-y-4 px-1">
                    <div className="flex justify-between items-center">
                      <h1 className="font-bold text-xl sm:text-2xl">
                        Classes / Subjects
                      </h1>
                    </div>
                    <BoxChips
                      ChipsData={item.selectedClasses}
                      val2={item.selectedSubjects}
                      onEmpty={() => handleDelete(index)}
                      showDeleteAll={false}
                    />
                  </div>
                </div>
              </div>
            </div>
          ))
        : heading === "Courses"
        ? courses.map((course, index) => (
            <div
              key={index}
              className="w-full flex flex-col sm:flex-row items-start gap-y-4 sm:gap-x-4 rounded-lg"
            >
              <div className="flex flex-col w-full gap-y-4">
                <div className="flex justify-between">
                  <div className="flex flex-col w-full gap-y-4 px-1">
                    <div className="flex justify-between items-center">
                      <h1 className="font-bold text-xl sm:text-2xl">Courses</h1>
                      <div className="flex gap-x-4"></div>
                    </div>
                    <BoxChipsCourses
                      ChipsData={course.selectedCourses}
                      onEmpty={() => handleDelete(index)}
                    />
                  </div>
                </div>
              </div>
            </div>
          ))
        : null}
    </div>
  );
};

export default Request_a_tutorBoxes;
