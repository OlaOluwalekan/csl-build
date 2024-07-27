import clsx from "clsx";
import { SelectInputProps } from "../../../types/input.interface";

const SelectInput = ({
  id,
  name,
  value,
  onChange,
  label,
  options,
  placeholder,
}: SelectInputProps) => {
  const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    onChange(e.target.value);
  };

  return (
    <div className="flex flex-col gap-2">
      <label htmlFor={id} className="text-xs">
        {label}:
      </label>
      <select
        name={name}
        id={id}
        value={value}
        onChange={handleChange}
        className={clsx(
          "border-[1px] border-light-grey px-4 py-2 rounded-md focus:border-[1.5px] focus:outline-none bg-base-white"
        )}
      >
        <option value="" disabled>
          {placeholder ? placeholder : "Select"}
        </option>
        {options.map((option) => {
          return (
            <option key={option.value} value={option.value}>
              {option.label}
            </option>
          );
        })}
      </select>
    </div>
  );
};

export default SelectInput;
