import { ChangeEvent, FormEvent, useState } from "react";
import { BasicNotificationProp } from "../../types/notification.interface";
import BasicNotification from "../notification/BasicNotification";
import PasswordInput from "../ui/inputs/PasswordInput";
import BasicButton from "../ui/buttons/BasicButton";
import { useSelector } from "react-redux";
import { RootState } from "../../store";
import { checkFormData } from "../../utils/form-check";

const ResetPasswordForm = () => {
  const [formData, setFormData] = useState({
    password: "",
    confirmPassword: "",
  });
  const [notification, setNotification] = useState<BasicNotificationProp>({
    show: false,
    message: "",
    type: "success",
  });
  const { isLoading } = useSelector((store: RootState) => store.auth);

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const showNotification = (message: string, type: "success" | "error") => {
    setNotification({ show: true, message, type });
    setTimeout(() => {
      setNotification({ show: false, message: "", type: "success" });
    }, 3000);
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const { hasErrors } = checkFormData(
      formData,
      showNotification,
      "reset-password"
    );
    if (hasErrors) return;
  };

  return (
    <form onSubmit={handleSubmit}>
      {notification.show && (
        <BasicNotification
          message={notification.message}
          type={notification.type}
        />
      )}
      <PasswordInput
        value={formData.password}
        name="password"
        placeholder="New Password"
        handleChange={handleChange}
      />
      <p className="text-left text-sm text-light-grey my-2">
        Minimum of 6 characters. At least 1 capital letter, 1 number & 1 special
        character.
      </p>
      <PasswordInput
        value={formData.confirmPassword}
        name="confirmPassword"
        placeholder="Confirm New Password"
        handleChange={handleChange}
      />
      <p className="text-left text-sm text-light-grey my-2">
        Minimum of 6 characters. At least 1 capital letter, 1 number & 1 special
        character.
      </p>
      <BasicButton
        type="submit"
        text={isLoading ? "Loading..." : "Reset Password"}
      />
    </form>
  );
};

export default ResetPasswordForm;
