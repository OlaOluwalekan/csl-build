import { AdminProps } from "../types/store.interface";
import { encryptToken, decryptToken } from "./token";

export const addAdminToLocalStorage = (admin: AdminProps) => {
  localStorage.setItem("xJVerKY", encryptToken(admin));
};

export const getAdminFromLocalStorage = () => {
  let result = localStorage.getItem("xJVerKY");
  if (result) {
    result = decryptToken(result);
  }
  return JSON.parse(result as string) || null;
};

export const removeAdminFromLocalStorage = () => {
  localStorage.removeItem("xJVerKY");
};
