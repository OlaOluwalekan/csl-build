import clsx from "clsx";
import { BasicBtnProps } from "../../../types/button.interface";

const SmallRoundedButton = ({
  text,
  type,
  disabled = false,
  onClick,
  w,
}: BasicBtnProps) => {
  return (
    <button
      type={type}
      className={clsx(
        "bg-indigo-red w-full text-base-white py-3 px-3 rounded-lg my-2 text-sm",
        disabled
          ? "cursor-not-allowed opacity-50"
          : "cursor-pointer opacity-100"
      )}
      style={{ width: w }}
      disabled={disabled}
      onClick={onClick}
    >
      {text}
    </button>
  );
};

export default SmallRoundedButton;
