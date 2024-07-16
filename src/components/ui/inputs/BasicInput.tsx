import { BasicInputProps } from "../../../types/input.interface";

const BasicInput = ({
  type,
  value,
  placeholder,
  name,
  handleChange,
}: BasicInputProps) => {
  return (
    <input
      type={type}
      value={value}
      name={name}
      placeholder={placeholder}
      onChange={handleChange}
      className="w-full border-[1px] border-light-grey py-2 px-3 my-2 placeholder:text-light-grey"
    />
  );
};

export default BasicInput;
