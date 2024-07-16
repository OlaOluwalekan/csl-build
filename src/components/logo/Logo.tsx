import { Link } from 'react-router-dom'

const Logo = () => {
  return (
    <Link to='/' className='flex items-center gap-2'>
      <img src='/images/csl-icon.svg' alt='Logo' className='w-[30px]' />
      <span className='text-xl font-extrabold font-lato'>CSL Hospitality</span>
    </Link>
  )
}

export default Logo
