import clsx from "clsx";
import { Link } from "react-router-dom";
import { logoSize } from "./logo.config";

const Logo = ({ size }: { size?: string }) => {
  return (
    <Link to="/" className="flex items-center gap-2">
      <img
        src="/images/csl-icon.svg"
        alt="Logo"
        className={clsx(logoSize(size as string).imgSize)}
      />
      <span
        className={clsx(
          "text-xl font-extrabold font-lato text-navy-blue",
          logoSize(size as string).textSize
        )}
      >
        CSL Hospitality
      </span>
    </Link>
  );
};

export default Logo;
