import AuthWrapper from "../components/auth/AuthWrapper";
import ResetPasswordForm from "../components/auth/ResetPasswordForm";

const ResetPassword = () => {
  return (
    <div>
      <AuthWrapper title="New Password" text="Enter your desired new password.">
        <ResetPasswordForm />
      </AuthWrapper>
    </div>
  );
};

export default ResetPassword;
