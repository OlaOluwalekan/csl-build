import { AdminProps } from "../types/store.interface";
import { encryptToken, decryptToken } from "./token";

export const addAdminToLocalStorage = (admin: AdminProps) => {
  localStorage.setItem("xJVerKY", encryptToken(admin));
};

export const getAdminFromLocalStorage = (): AdminProps | null => {
  let rawResult = localStorage.getItem("xJVerKY");
  console.log("RAW: ", typeof rawResult);

  let result: AdminProps | null = null;
  if (rawResult) {
    result = decryptToken(rawResult);
  }
  // console.log(result);

  return result || null;
};

export const removeAdminFromLocalStorage = () => {
  localStorage.removeItem("xJVerKY");
};
