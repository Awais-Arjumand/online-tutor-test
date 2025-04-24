import React from "react";

interface InputFieldProps {
  label: string;
  type: string;
  placeholder: string;
  name: string;
  required?: boolean;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  value: string;
}

export const InputField: React.FC<InputFieldProps> = ({
  label,
  type,
  placeholder,
  name,
  required = false,
  onChange,
  value,
}) => {
  return (
    <div className="flex flex-col gap-2.5">
      <label className="font-Barlow px-0 py-1.5 text-lg font-semibold text-stone-900">
        {label} {required && "*"}
      </label>
      <input
        type={type}
        placeholder={placeholder}
        name={name}
        required={required}
        onChange={onChange}
        value={value} 
        className="px-6 py-3 w-full outline-none text-base bg-white rounded-md border border-solid border-stone-800 text-neutral-400"
      />
    </div>
  );
};
