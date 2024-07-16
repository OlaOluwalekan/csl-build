import AuthWrapper from "../components/auth/AuthWrapper";
import RegisterForm from "../components/auth/RegisterForm";

const Register = () => {
  return (
    <div>
      <AuthWrapper title="Register" text="Kindly fill in the information below">
        <RegisterForm />
      </AuthWrapper>
    </div>
  );
};

export default Register;
