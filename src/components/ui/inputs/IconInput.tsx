import { IconInputProps } from "../../../types/input.interface";

const IconInput = ({
  type,
  placeholder,
  icon,
  value,
  handleChange,
}: IconInputProps) => {
  return (
    <label className="relative border-[1px] border-indigo-red bg-red-300 inline-flex rounded-lg overflow-hidden my-1">
      <input
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={handleChange}
        className="px-4 py-1.5 bg-base-white"
      />
      <span className="absolute flex top-0 bottom-0 my-auto right-4 w-fit h-fit text-light-grey text-xl">
        {icon}
      </span>
    </label>
  );
};

export default IconInput;
