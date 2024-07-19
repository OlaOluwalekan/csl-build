import { ChangeEvent, useState } from 'react'
import { BasicNotificationProp } from '../../types/notification.interface'
import BasicNotification from '../notification/BasicNotification'
import BasicInput from '../ui/inputs/BasicInput'
import BasicButton from '../ui/buttons/BasicButton'
import { Link } from 'react-router-dom'
import { checkFormData } from '../../utils/form-check'
import { useDispatch, useSelector } from 'react-redux'
import { AppDispatch, RootState } from '../../store'
import { sendPasswordResetEmail } from '../../features/authSlice'

const ForgetPasswordForm = () => {
  const [formData, setFormData] = useState({
    email: '',
  })
  const [notification, setNotification] = useState<BasicNotificationProp>({
    show: false,
    message: '',
    type: 'success',
  })
  const dispatch = useDispatch<AppDispatch>()
  const { isLoading } = useSelector((store: RootState) => store.auth)

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const showNotification = (message: string, type: 'success' | 'error') => {
    setNotification({ show: true, message, type })
    setTimeout(() => {
      setNotification({ show: false, message: '', type: 'success' })
    }, 3000)
  }

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const { hasErrors } = checkFormData(formData, showNotification, 'login')
    if (hasErrors) return
    dispatch(sendPasswordResetEmail(formData)).then((res) => {
      if (res.payload.success) {
        setFormData({
          email: '',
        })
        showNotification(res.payload.data.message, 'success')
      } else {
        showNotification(res.payload.message, 'error')
      }
    })
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
        type='email'
        value={formData.email}
        name='email'
        placeholder='Email'
        handleChange={handleChange}
      />
      <BasicButton
        type='submit'
        text={isLoading ? 'Loading...' : 'Send Link'}
        disabled={isLoading}
      />
      <Link className='text-sm text-light-grey my-2 block' to='/login'>
        Back to Login
      </Link>
      <Link className='text-sm text-light-grey my-2 block' to='/register'>
        Register admin account?
      </Link>
    </form>
  )
}

export default ForgetPasswordForm
