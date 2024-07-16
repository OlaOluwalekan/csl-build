import { Outlet } from 'react-router-dom'
import HeroCarousel from '../components/layout/HeroCarousel'
import Header from '../components/layout/Header'

const GeneralLayout = () => {
  return (
    <div>
      <Header />
      <HeroCarousel />
      <Outlet />
    </div>
  )
}

export default GeneralLayout
