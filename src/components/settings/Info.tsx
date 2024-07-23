import clsx from "clsx";
import Heading3 from "../ui/headings/Heading3";

const Info = ({
  label,
  value,
  styleClass,
}: {
  label: string;
  value: string | number | undefined | null;
  styleClass?: string;
}) => {
  return (
    <div className={clsx(styleClass, "flex flex-col")}>
      <span className="block text-sm mb-2">{label}:</span>
      <Heading3 text={value as string} styleClass="text-sm" />
    </div>
  );
};

export default Info;
