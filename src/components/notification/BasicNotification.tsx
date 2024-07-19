import clsx from 'clsx'

const BasicNotification = ({
  message,
  type,
}: {
  message: string
  type: 'error' | 'success'
}) => {
  return (
    <div
      className={clsx(
        'text-base-white py-1.5 px-2 rounded text-xs',
        type === 'error' ? 'bg-error/75' : 'bg-success'
      )}
    >
      <p>{message}</p>
    </div>
  )
}

export default BasicNotification
