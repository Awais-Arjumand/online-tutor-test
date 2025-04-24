interface SubjectsCircleProps {
    label: string;
  }
  
  export const TutorsCardItems = ({ label }: SubjectsCircleProps) => {
    return (
      <div className="w-fit h-fit px-3 py-1 rounded-2xl text-xs flex justify-center items-center font-medium border-2 border-[#e5e5e5]">
        {label}
      </div>
    );
  };
  