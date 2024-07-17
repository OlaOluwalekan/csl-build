import clsx from "clsx";

export const logoSize = (size: string) => {
  const imgSize = clsx({
    "w-[30px]": size === "sm",
    "w-[35px]": size === "md",
    "w-[40px]": size === "lg",
  });

  const textSize = clsx({
    "text-[16px]": size === "sm",
    "text-[20px]": size === "md",
    "text-[24px]": size === "lg",
  });

  return { imgSize, textSize };
};
