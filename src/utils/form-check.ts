interface FormDataProps {
  [key: string]: string | number | boolean;
}

const keyMap: FormDataProps = {
  firstName: "First Name",
  lastName: "Last Name",
  email: "Email",
  password: "Password",
};

export const checkFormData = (
  formData: FormDataProps,
  cb: (message: string, type: "error" | "success") => void,
  page = "register"
) => {
  for (let key in formData) {
    if (formData[key] === "") {
      cb(`Oops! ${keyMap[key]} is required`, "error");
      return { hasErrors: true };
    }
  }
  if (formData.password && page == "register") {
    const regex =
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{6,}$/;
    if (!regex.test(formData.password as string)) {
      cb("Please choose a stronger password", "error");
      return { hasErrors: true };
    }
  }
  return { hasErrors: false };
};
