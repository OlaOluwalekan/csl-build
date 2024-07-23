import clsx from "clsx";

const Heading3 = ({
  text,
  styleClass,
}: {
  text: string;
  styleClass?: string;
}) => {
  return (
    <h3 title={text} className={clsx("font-semibold", styleClass)}>
      {text}
    </h3>
  );
};

export default Heading3;
