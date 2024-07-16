import { BasicBtnProps } from "../../../types/button.interface";

const BasicButton = ({ text, type }: BasicBtnProps) => {
  return (
    <button
      type={type}
      className="bg-indigo-red w-full text-base-white py-3 rounded-full my-8"
    >
      {text}
    </button>
  );
};

export default BasicButton;
