import { ReactNode } from "react";

const ProfileWrapper = ({ children }: { children: ReactNode }) => {
  return (
    <div className="shadow p-3 my-4 bg-base-white rounded-md">{children}</div>
  );
};

export default ProfileWrapper;
