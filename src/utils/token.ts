import CryptoJS from "crypto-js";

export const encryptToken = (data: any): string => {
  return CryptoJS.AES.encrypt(
    JSON.stringify(data),
    import.meta.env.VITE_ENC_SECRET
  ).toString();
};

export const decryptToken = (token: string): any => {
  const decryptedBytes = CryptoJS.AES.decrypt(
    token,
    import.meta.env.VITE_ENC_SECRET
  );
  const decryptedData = JSON.parse(decryptedBytes.toString(CryptoJS.enc.Utf8));
  return decryptedData;
};
