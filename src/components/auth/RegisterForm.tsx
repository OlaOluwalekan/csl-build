import { ChangeEvent, FormEvent, useState } from "react";
import BasicInput from "../ui/inputs/BasicInput";
import PasswordInput from "../ui/inputs/PasswordInput";
import BasicButton from "../ui/buttons/BasicButton";
import { Link } from "react-router-dom";

const RegisterForm = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
  });

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
  };

  return (
    <form onSubmit={handleSubmit}>
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
      <BasicButton type="submit" text="Register" />
      <p className="text-sm text-light-grey my-2">
        Already have an account? <Link to="/login">Login</Link>
      </p>
    </form>
  );
};

export default RegisterForm;
