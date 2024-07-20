import { ChangeEvent, FormEvent, useState } from "react";
import { BasicNotificationProp } from "../../types/notification.interface";
import BasicNotification from "../notification/BasicNotification";
import PasswordInput from "../ui/inputs/PasswordInput";
import BasicButton from "../ui/buttons/BasicButton";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../../store";
import { checkFormData } from "../../utils/form-check";
import AuthWrapper from "./AuthWrapper";
import { useNavigate, useSearchParams } from "react-router-dom";
import LinkBtn from "../ui/buttons/LinkBtn";
import { resetPassword } from "../../features/authSlice";

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
  const [searchParams] = useSearchParams();
  const resetPasswordSuccess = searchParams.get("success");
  const iv = searchParams.get("iv");
  const content = searchParams.get("content");
  const timestamp = searchParams.get("timestamp");
  const dispatch = useDispatch<AppDispatch>();
  const navigate = useNavigate();

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
    dispatch(
      resetPassword({
        password: formData.password,
        encryption: {
          iv: iv as string,
          content: content as string,
          timestamp: timestamp as string,
        },
      })
    ).then((res) => {
      if (res.payload.success) {
        setFormData({
          password: "",
          confirmPassword: "",
        });
        navigate(`/reset-password?success=true`);
      } else {
        showNotification(res.payload.message, "error");
      }
    });
  };

  if (resetPasswordSuccess) {
    return (
      <AuthWrapper
        title="Successful"
        text="You can now use your new password to login to your account. Welcome back on board!"
      >
        <div className="flex flex-col justify-center items-center">
          {/* <img src="/images/reg-success.png" alt="Registration Successful" /> */}
          <LinkBtn href="/login" text="Login" />
        </div>
      </AuthWrapper>
    );
  }

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
