import React from "react";

interface TextAreaFieldProps {
  label: string;
  placeholder: string;
  name: string;
  required?: boolean;
  onChange: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
  value: string;
}

export const TextAreaField: React.FC<TextAreaFieldProps> = ({
  label,
  placeholder,
  name,
  required = false,
  onChange,
  value, // Ensure value prop is used
}) => {
  return (
    <div className="flex flex-col gap-2.5">
      <label className="px-0 py-1.5 text-xl font-semibold text-stone-900">
        {label} {required && "*"}
      </label>
      <textarea
        name={name}
        placeholder={placeholder}
        required={required}
        onChange={onChange}
        value={value}
        className="px-6 py-5 w-full outline-none text-base bg-white rounded-md border border-solid resize-none border-stone-800 h-[300px] text-neutral-400"
      />
    </div>
  );
};
