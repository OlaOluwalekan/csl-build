import { BsGear } from 'react-icons/bs'
import { HiOutlineUsers } from 'react-icons/hi2'
import { LuCopyPlus } from 'react-icons/lu'
import { RiHome5Line } from 'react-icons/ri'

export const navData = [
  {
    id: 1,
    icon: RiHome5Line,
    label: 'Dashboard',
    link: '/',
  },
  {
    id: 2,
    icon: LuCopyPlus,
    label: 'Requests',
    link: '/requests',
  },
  {
    id: 3,
    icon: HiOutlineUsers,
    label: 'Clients Profile',
    link: '/client-profile',
  },
  {
    id: 4,
    icon: BsGear,
    label: 'Settings',
    link: '/settings',
  },
]
