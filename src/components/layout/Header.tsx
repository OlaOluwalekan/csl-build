import HeaderRow1 from './HeaderRow1'
import HeaderRowLast from './HeaderRowLast'

const Header = () => {
  return (
    <header className='shadow-md bg-base-white'>
      <div className='w-[95%] mx-auto py-2 flex justify-between items-center tablet:py-4'>
        <HeaderRow1 />

        <section className='hidden font-bold font-lato laptop:flex'>
          Admin Board
        </section>

        <HeaderRowLast />
      </div>
    </header>
  )
}

export default Header
