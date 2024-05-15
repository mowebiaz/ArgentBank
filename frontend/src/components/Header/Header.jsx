import { NavLink, useNavigate } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faCircleUser,
  faRightFromBracket,
} from '@fortawesome/free-solid-svg-icons'
import { useDispatch, useSelector } from 'react-redux'
import { Logo } from '../Logo/Logo'
import './Header.css'
import { logout } from '../../features/authSlice'

export function Header() {
  const { user } = useSelector((state) => state.auth)

  const dispatch = useDispatch()
  const navigate = useNavigate()

  const handleLogout = (e) => {
    e.preventDefault()
    dispatch(logout())
    navigate('/')
  }

  return (
    <header>
      <Logo />
      {user ? (
        <nav>
          <NavLink
            to={'/profile'}
            className={'nav-item'}
          >
            <FontAwesomeIcon icon={faCircleUser} />
            {user.firstName}
          </NavLink>
          <button
            className={'sign-out-button'}
            onClick={handleLogout}
          >
            <FontAwesomeIcon icon={faRightFromBracket} />
            Sign Out
          </button>
        </nav>
      ) : (
        <nav>
          <NavLink
            to={'/login'}
            className="nav-item"
          >
            <FontAwesomeIcon icon={faCircleUser} />
            Sign In
          </NavLink>
        </nav>
      )}
    </header>
  )
}
