import { MouseEvent, ReactNode } from "react";
import Heading3 from "../ui/headings/Heading3";

const FormWrapper = ({
  children,
  text,
}: {
  children: ReactNode;
  text: string;
}) => {
  const handleClick = (e: MouseEvent<HTMLDivElement>) => {
    e.stopPropagation();
  };

  return (
    <div
      className="w-[90%] max-w-[800px] mx-auto my-3 bg-base-white px-3 py-5 rounded-md shadow-lg"
      onClick={handleClick}
    >
      <Heading3 text={text} />
      <div>{children}</div>
    </div>
  );
};

export default FormWrapper;
