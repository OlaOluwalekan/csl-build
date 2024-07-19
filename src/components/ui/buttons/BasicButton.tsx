import clsx from 'clsx'
import { BasicBtnProps } from '../../../types/button.interface'

const BasicButton = ({ text, type, disabled = false }: BasicBtnProps) => {
  return (
    <button
      type={type}
      className={clsx(
        'bg-indigo-red w-full text-base-white py-3 rounded-full my-8',
        disabled
          ? 'cursor-not-allowed opacity-50'
          : 'cursor-pointer opacity-100'
      )}
      disabled={disabled}
    >
      {text}
    </button>
  )
}

export default BasicButton
