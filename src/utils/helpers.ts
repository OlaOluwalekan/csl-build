import {
  differenceInHours,
  differenceInMinutes,
  differenceInSeconds,
  format,
  isToday,
  isYesterday,
} from "date-fns";

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
  const d = new Date(Number(date));
  const now = new Date();

  const secDiff = differenceInSeconds(now, d);
  const minDiff = differenceInMinutes(now, d);
  const hrDiff = differenceInHours(now, d);

  let res = "";

  if (secDiff < 60) {
    res = `${secDiff} secs ago`;
  } else if (minDiff < 60) {
    res = `${secDiff} mins ago`;
  } else if (hrDiff < 4 && isToday(d)) {
    res = `${hrDiff} hrs ago`;
  } else if (isToday(d)) {
    res = format(d, "hh:mm a");
  } else if (isYesterday(d)) {
    res = "yesterday";
  } else {
    res = format(d, "dd/mm/yyyy");
  }

  return res;
};
