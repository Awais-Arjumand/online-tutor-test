import React from "react";

interface SignUpInputFieldsType {
  placeholder: string;
  type: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  error?: string;
}

const SignUpInputFields = ({ placeholder, type, value, onChange, error }: SignUpInputFieldsType) => {
  return (
    <div className="w-full h-fit">
      <input
        className="w-full py-4 rounded-md outline-none border border-black px-5 placeholder:text-sm placeholder:font-normal"
        placeholder={placeholder}
        type={type}
        value={value}
        onChange={onChange}
      />
      {error && <p className="text-red-500 text-sm">{error}</p>}
    </div>
  );
};

export default SignUpInputFields;
