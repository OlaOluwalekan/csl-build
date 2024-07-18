import clsx from "clsx";

const BasicNotification = ({
  message,
  type,
}: {
  message: string;
  type: "error" | "success";
}) => {
  return (
    <div
      className={clsx(
        "text-base-white py-1.5 rounded",
        type === "error" ? "bg-error" : "bg-success"
      )}
    >
      <p>{message}</p>
    </div>
  );
};

export default BasicNotification;
