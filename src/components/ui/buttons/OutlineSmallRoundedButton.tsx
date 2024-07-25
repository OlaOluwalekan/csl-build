import clsx from "clsx";
import { BasicBtnProps } from "../../../types/button.interface";

const OutlineSmallRoundedButton = ({
  text,
  type,
  disabled = false,
  onClick,
  styleClass,
}: BasicBtnProps) => {
  return (
    <button
      type={type}
      className={clsx(
        "w-full bg-base-white border-indigo-red border-[1px] text-indigo-red py-3 px-3 rounded-lg text-sm",
        disabled
          ? "cursor-not-allowed opacity-50"
          : "cursor-pointer opacity-100",
        styleClass
      )}
      disabled={disabled}
      onClick={onClick}
    >
      {text}
    </button>
  );
};

export default OutlineSmallRoundedButton;
