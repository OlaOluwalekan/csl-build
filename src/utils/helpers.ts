import {
  differenceInHours,
  differenceInMinutes,
  differenceInSeconds,
  format,
  isToday,
  isYesterday,
} from "date-fns";
import { randomPassword } from "secure-random-password";

export const showAlert = (
  cb: ({}: {}) => void,
  message: string,
  type: boolean
) => {
  cb({ show: true, message, type });
  setTimeout(() => {
    cb({ show: false, message: "", type: "success" });
  }, 3000);
};

export const formatDate = (date: string | Date) => {
  console.log(date);

  const d = new Date(date);
  const now = new Date();

  console.log(d);

  const secDiff = differenceInSeconds(now, d);
  const minDiff = differenceInMinutes(now, d);
  const hrDiff = differenceInHours(now, d);

  let res = "";

  if (secDiff < 60) {
    res = `${secDiff} secs ago`;
  } else if (minDiff < 60) {
    res = `${minDiff} mins ago`;
  } else if (hrDiff < 4 && isToday(d)) {
    res = `${hrDiff} hrs ago`;
  } else if (isToday(d)) {
    res = format(d, "hh:mm a");
  } else if (isYesterday(d)) {
    res = "yesterday";
  } else {
    res = format(d, "dd/MM/yyyy");
    console.log(res);
  }

  return res;
};

export const generateRandomPassword = () => {
  const password = randomPassword({
    length: 10,
    characters: [
      { characters: "ABCDEFGHIJKLMNOPQRSTUVWXYZ" },
      { characters: "abcdefghijklmnopqrstuvwxyz" },
      { characters: "0123456789" },
      { characters: "!@#$%^&*" },
    ],
  });

  return password;
};

export const simpleDateFormatting = (date: string | Date) => {
  return format(new Date(date), "dd/MM/yyyy");
};
