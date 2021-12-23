import { FC } from 'react'
import { Link, useLocation } from 'react-router-dom'
import cn from 'classnames'

interface LayoutProps {
  menus: { name: string; to: string }[]
}

export const Layout: FC<LayoutProps> = ({
  menus,
  children,
}) => {
  const location = useLocation()
  return (
    <div className="mx-auto max-w-2xl p-4 flex shadow-lg mt-4">
      <nav className="w-36">
        <ul>
          {menus.map(menu => (
            <li
              key={menu.name}
              className={cn(location.pathname === menu.to && 'text-green-600')}
            >
              <Link to={menu.to}>{menu.name}</Link>
            </li>
          ))}
        </ul>
      </nav>
      <main>{children}</main>
    </div>
  )
}
