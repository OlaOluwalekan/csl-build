import { FaEye, FaEyeSlash } from "react-icons/fa6";
import { BasicInputProps } from "../../../types/input.interface";
import { useState } from "react";

const PasswordInput = ({
  value,
  placeholder,
  name,
  handleChange,
}: BasicInputProps) => {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <div className="relative">
      <input
        type={showPassword ? "text" : "password"}
        value={value}
        name={name}
        placeholder={placeholder}
        onChange={handleChange}
        className="w-full border-[1px] border-light-grey py-2 px-3 my-2"
      />
      <article className="absolute flex right-3 top-0 bottom-0 h-fit my-auto text-lg placeholder:text-light-grey">
        <input type="checkbox" name="hide" id="hide" className="hidden" />
        <label htmlFor="hide" onClick={() => setShowPassword(!showPassword)}>
          {showPassword ? <FaEyeSlash /> : <FaEye />}
        </label>
      </article>
    </div>
  );
};

export default PasswordInput;
