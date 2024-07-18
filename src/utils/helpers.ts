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
