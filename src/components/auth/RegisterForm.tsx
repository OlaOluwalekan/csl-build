import { ChangeEvent, FormEvent, useState } from "react";
import BasicInput from "../ui/inputs/BasicInput";
import PasswordInput from "../ui/inputs/PasswordInput";
import BasicButton from "../ui/buttons/BasicButton";
import { Link, useNavigate, useSearchParams } from "react-router-dom";
import BasicNotification from "../notification/BasicNotification";
import { BasicNotificationProp } from "../../types/notification.interface";
import { checkFormData } from "../../utils/form-check";
import { useDispatch, useSelector } from "react-redux";
import { createAdmin } from "../../features/authSlice";
import { AppDispatch, RootState } from "../../store";
import AuthWrapper from "./AuthWrapper";
import LinkBtn from "../ui/buttons/LinkBtn";

const RegisterForm = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
  });
  const [notification, setNotification] = useState<BasicNotificationProp>({
    show: false,
    message: "",
    type: "success",
  });
  const dispatch = useDispatch<AppDispatch>();
  const [searchParams] = useSearchParams();
  const registrationSuccess = searchParams.get("success");
  const navigate = useNavigate();
  const { isLoading } = useSelector((store: RootState) => store.auth);

  const showNotification = (message: string, type: "success" | "error") => {
    setNotification({ show: true, message, type });
    setTimeout(() => {
      setNotification({ show: false, message: "", type: "success" });
    }, 3000);
  };

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const { hasErrors } = checkFormData(formData, showNotification);
    if (hasErrors) return;
    dispatch(createAdmin(formData)).then((res) => {
      if (res.payload.success) {
        setFormData({
          firstName: "",
          lastName: "",
          email: "",
          password: "",
        });
        navigate(`/register?success=true`);
      } else {
        showNotification(res.payload.message, "error");
      }
      // console.log("DISPATCH: ", res);
    });
  };

  if (registrationSuccess) {
    return (
      <AuthWrapper title="Registration Successful" text="">
        <div className="flex flex-col justify-center items-center">
          <img src="/images/reg-success.png" alt="Registration Successful" />
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
      <BasicInput
        type="text"
        value={formData.firstName}
        name="firstName"
        placeholder="First Name"
        handleChange={handleChange}
      />
      <BasicInput
        type="text"
        value={formData.lastName}
        name="lastName"
        placeholder="Last Name"
        handleChange={handleChange}
      />
      <BasicInput
        type="email"
        value={formData.email}
        name="email"
        placeholder="Email"
        handleChange={handleChange}
      />
      <PasswordInput
        value={formData.password}
        name="password"
        placeholder="Password"
        handleChange={handleChange}
      />
      <p className="text-left text-sm text-light-grey my-2">
        Minimum of 6 characters. At least 1 capital letter, 1 number & 1 special
        character.
      </p>
      <BasicButton
        type="submit"
        text={isLoading ? "Loading..." : "Register"}
        disabled={isLoading}
      />
      <Link className="text-sm text-light-grey my-2" to="/login">
        Already have an account?
      </Link>
    </form>
  );
};

export default RegisterForm;
