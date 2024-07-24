import { ReactNode } from "react";
import { useDispatch } from "react-redux";
import {
  setEditBankDetails,
  setEditBasicInfo,
  setEditPassword,
} from "../../features/adminSlice";

const FormOverlay = ({ children }: { children: ReactNode }) => {
  const dispatch = useDispatch();

  const handleClick = (e: any) => {
    dispatch(setEditBasicInfo(false));
    dispatch(setEditBankDetails(false));
    dispatch(setEditPassword(false));
    e.stopPropagation();
  };

  return (
    <div
      className="w-screen h-screen fixed top-0 left-0 bg-base-black/50 overflow-x-scroll scrollbar-none z-40"
      onClick={handleClick}
    >
      {children}
    </div>
  );
};

export default FormOverlay;
