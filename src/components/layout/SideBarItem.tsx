import clsx from 'clsx'
import { useRef } from 'react'
import { Link, useLocation } from 'react-router-dom'

const SideBarItem = ({ item }: { item: any }) => {
  const location = useLocation()
  const hoverRef = useRef<HTMLDivElement | null>(null)

  const handleMouseOver = () => {
    if (location.pathname !== item.link) {
      if (hoverRef.current) {
        hoverRef.current.style.left = '0'
        hoverRef.current.style.width = '100%'
      }
    }
  }

  const handleMouseLeave = () => {
    if (location.pathname !== item.link) {
      if (hoverRef.current) {
        hoverRef.current.style.left = 'unset'
        hoverRef.current.style.right = '0'
        hoverRef.current.style.width = '0'
      }
    }
  }

  return (
    <Link
      to={item.link}
      key={item.id}
      className={clsx(
        'flex gap-2 items-center py-3 px-6 rounded-lg relative overflow-hidden',
        location.pathname === item.link
          ? 'bg-brownish text-base-white'
          : 'bg-base-white text-base-black'
      )}
      onMouseEnter={handleMouseOver}
      onMouseLeave={handleMouseLeave}
    >
      {location.pathname !== item.link && (
        <article
          className={clsx(
            'absolute h-full w-0 top-0 left-0 transition-all duration-300 rounded-lg bg-[#ffc0cb77]'
          )}
          ref={hoverRef}
        ></article>
      )}
      <item.icon />
      <span>{item.label}</span>
    </Link>
  )
}

export default SideBarItem
