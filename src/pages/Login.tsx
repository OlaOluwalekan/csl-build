import AuthWrapper from "../components/auth/AuthWrapper";
import LoginForm from "../components/auth/LoginForm";

const Login = () => {
  return (
    <div>
      <AuthWrapper title="Login" text="Kindly fill in the information below">
        <LoginForm />
      </AuthWrapper>
    </div>
  );
};

export default Login;
