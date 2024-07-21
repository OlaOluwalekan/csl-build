import { ReactNode } from "react";
import { useSelector } from "react-redux";
import { RootState } from "../store";
import { Navigate } from "react-router-dom";

const Protected = ({ children }: { children: ReactNode }) => {
  const { admin, token } = useSelector((store: RootState) => store.auth);

  if (!admin || !admin.isAdmin || !token) {
    return <Navigate to="/login" />;
  }

  return <>{children}</>;
};

export default Protected;
