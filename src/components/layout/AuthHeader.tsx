import Logo from '../logo/Logo'

const AuthHeader = () => {
  return (
    <div className='bg-base-white'>
      <section>
        <div className='w-[90%] max-w-[1200px] m-auto py-2 flex items-center justify-center'>
          <Logo size='md' />
        </div>
      </section>
    </div>
  )
}

export default AuthHeader
