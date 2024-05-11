import { NavLink, useNavigate } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faCircleUser,
  faRightFromBracket,
} from '@fortawesome/free-solid-svg-icons'
import { Logo } from '../Logo/Logo'
import './Header.css'
import { useDispatch, useSelector } from 'react-redux'
import { fetchUserProfile, logout } from '../../features/authSlice'
import { useEffect } from 'react'

export function Header() {
  const { user, token, isAuthenticated } = useSelector((state) => state.auth)

  const dispatch = useDispatch()
  const navigate = useNavigate()

  const handleLogout = () => {
    // e.preventDefault() // empêche la navigation
    dispatch(logout())
    navigate('/')
  }

/*   useEffect(() => {
    if (isAuthenticated) {
      dispatch(fetchUserProfile())
    }
  }) */

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
