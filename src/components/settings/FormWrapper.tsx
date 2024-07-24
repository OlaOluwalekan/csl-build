import { MouseEvent, ReactNode } from "react";
import Heading3 from "../ui/headings/Heading3";
import clsx from "clsx";

const FormWrapper = ({
  children,
  text,
  styleClass,
}: {
  children: ReactNode;
  text: string;
  styleClass?: string;
}) => {
  const handleClick = (e: MouseEvent<HTMLDivElement>) => {
    e.stopPropagation();
  };

  return (
    <div
      className={clsx(
        "w-[90%] max-w-[800px] h-fit mx-auto bg-base-white px-3 py-5 rounded-md shadow-lg absolute left-0 right-0",
        styleClass
      )}
      onClick={handleClick}
    >
      <Heading3 text={text} />
      <div>{children}</div>
    </div>
  );
};

export default FormWrapper;
