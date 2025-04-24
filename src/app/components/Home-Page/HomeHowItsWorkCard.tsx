interface HomeHowItsWorkCardProps {
  src: string;
  label: string;
  Paragraph: string;
}
export const HomeHowItsWorkCard: React.FC<HomeHowItsWorkCardProps> = ({ src, label, Paragraph }) => {
  return (
    <div className="group w-full hover:translate-y-[-15px] transition-all duration-500 hover:bg-primary hover:border-white hover:shadow-2xl hover:border-2 cursor-pointer max-w-full  h-auto border-2 border-gray-300 rounded-lg flex flex-col p-6 gap-y-4">
     <div className="w-fit h-fit bg-white rounded-none group-hover:rounded-full flex justify-center items-center transition-all duration-1000 ">
     <img className="w-[60px] group-hover:scale-[70%] transition-all duration-500 xl:w-[70px] h-[60px] xl:h-[70px]" src={src} alt={label} />
      
     </div>
      <h1 className="font-bold text-lg xl:text-xl font-Barlow text-secondary group-hover:text-white">
        {label}
      </h1>
      <p className="w-full text-sm xl:text-[15px] text-secondary font-normal group-hover:text-white">
        {Paragraph}
      </p>
    </div>
  );
};
