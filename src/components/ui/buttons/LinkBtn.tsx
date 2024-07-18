import { Link } from "react-router-dom";
import { LinkBtnProps } from "../../../types/button.interface";

const LinkBtn = ({ href, text }: LinkBtnProps) => {
  return (
    <Link
      to={href}
      className="bg-indigo-red block w-full text-base-white py-3 rounded-full my-8"
    >
      {text}
    </Link>
  );
};

export default LinkBtn;
