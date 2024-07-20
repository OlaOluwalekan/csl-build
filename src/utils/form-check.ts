interface FormDataProps {
  [key: string]: string | number | boolean;
}

const keyMap: FormDataProps = {
  firstName: "First Name",
  lastName: "Last Name",
  email: "Email",
  password: "Password",
  confirmPassword: "Confirm Password",
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
  // if ((formData.password && page == "register") || page == "reset-password") {
  //   const regex =
  //     /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{6,}$/;
  //   if (!regex.test(formData.password as string)) {
  //     cb("Please choose a stronger password", "error");
  //     return { hasErrors: true };
  //   }
  // }
  if ((formData.password && page == "register") || page == "reset-password") {
    const regex = /^(?=.*[a-z])/;
    if (!regex.test(formData.password as string)) {
      cb("Password must contain at least a lowercase", "error");
      return { hasErrors: true };
    }
  }
  if ((formData.password && page == "register") || page == "reset-password") {
    const regex = /^(?=.*[A-Z])/;
    if (!regex.test(formData.password as string)) {
      cb("Password must contain at least an uppercase", "error");
      return { hasErrors: true };
    }
  }
  if ((formData.password && page == "register") || page == "reset-password") {
    const regex = /^(?=.*\d)/;
    if (!regex.test(formData.password as string)) {
      cb("Password must contain at least an number", "error");
      return { hasErrors: true };
    }
  }
  if ((formData.password && page == "register") || page == "reset-password") {
    const regex = /^(?=.*[@#$!%*?&])/;
    if (!regex.test(formData.password as string)) {
      cb(
        "Password must contain at least an special character (@#$!%*?&)",
        "error"
      );
      return { hasErrors: true };
    }
  }
  if ((formData.password && page == "register") || page == "reset-password") {
    const regex = /^.{6,}$/;
    if (!regex.test(formData.password as string)) {
      cb("Password must be at least 6 characters long", "error");
      return { hasErrors: true };
    }
  }
  if (
    formData.confirmPassword &&
    formData.confirmPassword !== formData.password
  ) {
    cb("Passwords do not match", "error");
    return { hasErrors: true };
  }
  return { hasErrors: false };
};
