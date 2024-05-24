import { useDispatch, useSelector } from 'react-redux'
import { NavLink, useNavigate } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faCircleUser,
  faRightFromBracket,
} from '@fortawesome/free-solid-svg-icons'
import { Logo } from '../Logo/Logo'
import { logout } from '../../features/authSlice'
import './Header.scss'

export function Header() {
  const { user, isAuthenticated } = useSelector((state) => state.auth)

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
      <nav>
        {user && ( // Profile button
          <NavLink
            to={'/profile'}
            className={'nav-item'}
          >
            <FontAwesomeIcon icon={faCircleUser} />
            {user.userName}
          </NavLink>
        )}

        {isAuthenticated ? ( // Sign-out button or login button
          <button
            className={'sign-out-button'}
            onClick={handleLogout}
          >
            <FontAwesomeIcon icon={faRightFromBracket} />
            Sign Out
          </button>
        ) : (
          <NavLink
            to={'/login'}
            className="nav-item"
          >
            <FontAwesomeIcon icon={faCircleUser} />
            Sign In
          </NavLink>
        )}
      </nav>
    </header>
  )
}
