import { ChangeEvent, FormEvent, useState } from "react";
import BasicInput from "../ui/inputs/BasicInput";
import PasswordInput from "../ui/inputs/PasswordInput";
import BasicButton from "../ui/buttons/BasicButton";
import { Link, useNavigate } from "react-router-dom";
import { checkFormData } from "../../utils/form-check";
import { BasicNotificationProp } from "../../types/notification.interface";
import BasicNotification from "../notification/BasicNotification";
import { useDispatch } from "react-redux";
import { AppDispatch } from "../../store";
import { loginAdmin } from "../../features/authSlice";

const LoginForm = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const [notification, setNotification] = useState<BasicNotificationProp>({
    show: false,
    message: "",
    type: "success",
  });
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
    const { hasErrors } = checkFormData(formData, showNotification, "login");
    if (hasErrors) return;
    dispatch(loginAdmin(formData)).then((res) => {
      if (res.payload.success) {
        setFormData({
          email: "",
          password: "",
        });
        navigate("/");
      } else {
        showNotification(res.payload.message, "error");
      }
    });
  };

  return (
    <form onSubmit={handleSubmit}>
      {notification.show && (
        <BasicNotification
          message={notification.message}
          type={notification.type}
        />
      )}
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
      <label className="label cursor-pointer justify-start gap-2">
        <input
          type="checkbox"
          defaultChecked
          className="checkbox checkbox-sm rounded accent-base-grey"
        />
        <span className="label-text text-base-grey">Remember me</span>
      </label>
      <BasicButton type="submit" text="Login" />
      <Link className="text-sm text-light-grey my-2 block" to="/login">
        Forgot your password?
      </Link>
      <Link className="text-sm text-light-grey my-2 block" to="/register">
        Register admin account?
      </Link>
    </form>
  );
};

export default LoginForm;
