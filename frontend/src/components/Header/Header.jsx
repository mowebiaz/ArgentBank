import { NavLink } from 'react-router-dom'
import { Logo } from '../Logo/Logo'
import './Header.css'

export function Header() {
  return (
    <header>
      <Logo />
      <nav>
        <NavLink
          to={'/login'}
          className="nav-item"
        >
          Sign In
        </NavLink>
      </nav>
    </header>
  )
}
