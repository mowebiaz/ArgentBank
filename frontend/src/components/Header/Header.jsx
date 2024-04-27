import { NavLink } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCircleUser } from '@fortawesome/free-solid-svg-icons'
import { Logo } from '../Logo/Logo'
import './Header.css'

// à modifier en fonction du status
export function Header() {
  return (
    <header>
      <Logo />
      <nav>
        <NavLink
          to={'/login'}
          className="nav-item"
        >
          <FontAwesomeIcon icon={faCircleUser} />
          Sign In
        </NavLink>
      </nav>
    </header>
  )
}
