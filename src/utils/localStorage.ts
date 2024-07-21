import { AdminProps } from "../types/auth.interface";
import { encryptToken, decryptToken } from "./token";

export const addAdminToLocalStorage = (admin: AdminProps) => {
  localStorage.setItem("xJVerKY", encryptToken(admin));
};

export const getAdminFromLocalStorage = (): AdminProps | null => {
  let rawResult = localStorage.getItem("xJVerKY");

  let result: AdminProps | null = null;
  if (rawResult) {
    result = decryptToken(rawResult);
  }

  return result || null;
};

export const removeAdminFromLocalStorage = () => {
  localStorage.removeItem("xJVerKY");
};

export const addTokenToLocalStorage = (token: string) => {
  localStorage.setItem("token", token);
};

export const getTokenFromLocalStorage = (): string | null => {
  return localStorage.getItem("token");
};

export const removeTokenFromLocalStorage = () => {
  localStorage.removeItem("token");
};
