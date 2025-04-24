interface SelectFieldProps {
  label: string;
  placeholder: string;
  name: string;
  required?: boolean;
  SelectOptions?: string[];
  onChange: (event: React.ChangeEvent<HTMLSelectElement>) => void;
  value: string;
}

export const SelectField: React.FC<SelectFieldProps> = ({
  label,
  placeholder,
  name,
  required = false,
  SelectOptions = [],
  onChange,
  value,
}) => {
  return (
    <div className="flex flex-col gap-2.5">
      <label className="font-Barlow px-0 py-1.5 text-lg font-semibold text-stone-900">
        {label} {required && "*"}
      </label>
      <div className="relative">
        <select
          name={name}
          required={required}
          onChange={onChange}
          className="px-6 py-3 w-full outline-none text-base bg-white rounded-md border border-solid border-stone-800 text-neutral-400"
          value={value}
        >
          <option value="" disabled>
            {placeholder}
          </option>
          {SelectOptions.map((option, index) => (
            <option key={index} value={option}>
              {option}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
};
