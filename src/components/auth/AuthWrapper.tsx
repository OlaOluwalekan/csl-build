import { ReactNode } from "react";

const AuthWrapper = ({
  children,
  title,
  text,
}: {
  children: ReactNode;
  title: string;
  text: string;
}) => {
  return (
    <div className="w-full bg-base-white py-9 px-4 text-center max-w-[500px] mx-auto absolute h-fit my-auto top-0 bottom-0 left-0 right-0">
      <h2 className="font-extrabold text-2xl font-lato text-base-black">
        {title}
      </h2>
      <p className="text-sm text-base-grey pt-8 pb-5">{text}</p>
      {children}
    </div>
  );
};

export default AuthWrapper;
