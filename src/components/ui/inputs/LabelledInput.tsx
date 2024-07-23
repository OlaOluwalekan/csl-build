import clsx from "clsx";
import { LabelledInputProps } from "../../../types/input.interface";

const LabelledInput = ({
  type,
  value,
  label,
  placeholder,
  handleChange,
  id,
  name,
  readonly,
  styleClass,
}: LabelledInputProps) => {
  return (
    <div className={clsx("flex flex-col gap-2", styleClass)}>
      <label htmlFor={id} className="text-xs">
        {label}:
      </label>
      <input
        type={type}
        value={value}
        id={id}
        placeholder={placeholder}
        onChange={handleChange}
        name={name}
        className={clsx(
          "border-[1px] w-full border-light-grey px-4 py-2 rounded-md focus:border-[1.5px] focus:outline-none",
          readonly ? "bg-base-secondary cursor-not-allowed" : ""
        )}
        readOnly={readonly}
      />
    </div>
  );
};

export default LabelledInput;
