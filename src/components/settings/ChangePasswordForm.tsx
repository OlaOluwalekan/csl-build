import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../../store";
import { ChangeEvent, FormEvent, useState } from "react";
import FormOverlay from "./FormOverlay";
import FormWrapper from "./FormWrapper";
import PasswordInput from "../ui/inputs/PasswordInput";
import OverlayLoading from "../loading/OverlayLoading";
import BasicButton from "../ui/buttons/BasicButton";
import { checkFormData } from "../../utils/form-check";
import { BasicNotificationProp } from "../../types/notification.interface";
import BasicNotification from "../notification/BasicNotification";
import { setEditPassword, updatePassword } from "../../features/adminSlice";
import { toast } from "react-toastify";

// interface PasswordProps {
//   currentPassword: string;
//   password: string;
//   confirmPassword: string;
// }

const ChangePasswordForm = () => {
  const { isLoading } = useSelector((store: RootState) => store.admin);
  const [passwordInfo, setPasswordInfo] = useState({
    currentPassword: "",
    password: "",
    confirmPassword: "",
  });
  const dispatch = useDispatch<AppDispatch>();
  const [notification, setNotification] = useState<BasicNotificationProp>({
    show: false,
    message: "",
    type: "success",
  });

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const name = e.target.name;
    const value = e.target.value;
    setPasswordInfo({ ...passwordInfo, [name]: value });
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
      passwordInfo,
      showNotification,
      "settings"
    );
    if (hasErrors) return;

    const formData = new FormData();

    formData.append("currentPassword", passwordInfo.currentPassword);
    formData.append("newPassword", passwordInfo.password);
    formData.append("confirmPassword", passwordInfo.confirmPassword);

    // console.log(formData);

    dispatch(updatePassword(formData)).then((res) => {
      if (res.payload.success) {
        dispatch(setEditPassword(false));
        toast.success(res.payload.data.message);
      } else {
        showNotification(res.payload.message, "error");
      }
    });
  };

  return (
    <FormOverlay>
      <FormWrapper
        text="Change Password"
        styleClass="top-0 bottom-0 my-auto text-center max-w-[500px]"
      >
        <form onSubmit={handleSubmit}>
          <p className="text-center w-[70%] text-sm text-light-grey my-2 mx-auto">
            Enter your current password and the desired new password.
          </p>
          {notification.show && (
            <BasicNotification
              message={notification.message}
              type={notification.type}
            />
          )}
          <div className="flex flex-col gap-2 desktop:grid desktop:grid-cols-1 mb-2">
            <PasswordInput
              value={passwordInfo.currentPassword}
              placeholder="Your current password"
              name="currentPassword"
              handleChange={handleChange}
            />
          </div>
          <div className="flex flex-col gap-2 desktop:grid desktop:grid-cols-1 mb-2">
            <PasswordInput
              value={passwordInfo.password}
              placeholder="New password"
              name="password"
              handleChange={handleChange}
            />
            <p className="text-left text-sm text-light-grey my-2">
              Minimum of 6 characters. At least 1 capital letter, 1 number & 1
              special character.
            </p>
          </div>
          <div className="flex flex-col gap-2 desktop:grid desktop:grid-cols-1 mb-2">
            <PasswordInput
              value={passwordInfo.confirmPassword}
              placeholder="Confirm password"
              name="confirmPassword"
              handleChange={handleChange}
            />
            <p className="text-left text-sm text-light-grey my-2">
              Minimum of 6 characters. At least 1 capital letter, 1 number & 1
              special character.
            </p>
          </div>
          <article className="flex justify-end">
            <BasicButton
              text="Reset Password"
              type="submit"
              disabled={isLoading}
            />
          </article>
        </form>
        {isLoading && <OverlayLoading text="Updating Password..." />}
      </FormWrapper>
    </FormOverlay>
  );
};

export default ChangePasswordForm;
