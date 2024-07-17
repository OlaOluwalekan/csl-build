import { ChangeEvent, FormEvent, useState } from "react";
import BasicInput from "../ui/inputs/BasicInput";
import PasswordInput from "../ui/inputs/PasswordInput";
import BasicButton from "../ui/buttons/BasicButton";
import { Link } from "react-router-dom";

const LoginForm = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log(formData);
  };

  return (
    <form onSubmit={handleSubmit}>
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
      {/* <div className="form-control"> */}
      <label className="label cursor-pointer justify-start gap-2">
        <input
          type="checkbox"
          defaultChecked
          className="checkbox checkbox-sm rounded accent-base-grey"
        />
        <span className="label-text text-base-grey">Remember me</span>
      </label>
      {/* </div> */}
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
