import clsx from "clsx";
import { OutlineBtnProps } from "../../../types/button.interface";

const OutlineButton = ({
  text,
  type,
  disabled = false,
  onClick,
  classStyles,
}: OutlineBtnProps) => {
  return (
    <button
      type={type}
      className={clsx(
        "bg-base-white text-indigo-red font-bold py-3 rounded-full border-2 border-indigo-red",
        disabled
          ? "cursor-not-allowed opacity-50"
          : "cursor-pointer opacity-100",
        classStyles
      )}
      disabled={disabled}
      onClick={onClick}
    >
      {text}
    </button>
  );
};

export default OutlineButton;
