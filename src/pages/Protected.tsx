import { ReactNode } from "react";
import { useSelector } from "react-redux";
import { RootState } from "../store";
import { Navigate } from "react-router-dom";

const Protected = ({ children }: { children: ReactNode }) => {
  const { admin } = useSelector((store: RootState) => store.auth);

  console.log("ADMIN: ", admin);

  if (!admin || !admin.isAdmin) {
    return <Navigate to="/login" />;
  }

  return <>{children}</>;
};

export default Protected;
