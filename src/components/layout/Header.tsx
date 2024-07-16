import Logo from '../logo/Logo'

const Header = () => {
  return (
    <div>
      <section>
        <div className='w-[90%] max-w-[1200px] m-auto py-2 flex items-center justify-center'>
          <Logo />
        </div>
      </section>
    </div>
  )
}

export default Header
