import AuthWrapper from '../components/auth/AuthWrapper'
import ForgetPasswordForm from '../components/auth/ForgetPasswordForm'

const ForgetPassword = () => {
  return (
    <div>
      <AuthWrapper
        title='Forgot Password'
        text='Enter your email address below, and we will send you a link.'
      >
        <ForgetPasswordForm />
      </AuthWrapper>
    </div>
  )
}

export default ForgetPassword
