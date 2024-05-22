import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { NavLink, useNavigate } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCircleUser } from '@fortawesome/free-solid-svg-icons'
import { fetchUserProfile, userLogin } from '../../features/authSlice'
import { Input } from '../Input/Input'
import { Button } from '../Button/Button'
import { ErrorMessage } from '../Notifications/Notifications'
import './Form.scss'

export function Form() {
  const [userInfo, setUserInfo] = useState({
    email: '',
    password: '',
    rememberMe: false,
  })

  const { user, isAuthenticated, loading, error } = useSelector(
    (state) => state.auth
  )

  const dispatch = useDispatch()
  const navigate = useNavigate()

  useEffect(() => {
    const fetchAndNavigate = async () => {
      if (isAuthenticated) {
        try {
          await dispatch(fetchUserProfile()).unwrap()
          // dispatch(fetchUserProfile())
          navigate('/profile')
        } catch (error) {
          console.error('Failed to fetch user profile:', error)
        }
      }
    }

    fetchAndNavigate()
  }, [isAuthenticated, dispatch, navigate])

  const handleSubmit = async (e) => {
    e.preventDefault()
    try {
      dispatch(userLogin(userInfo))
    } catch (error) {
      // à revoir
      console.log(error)
    }
  }
  // ne fonctionne pas à cause du useEffect
  if (isAuthenticated) {
    return user ? (
      <section className="sign-in__content">
        <p>You are logged in</p>
        <NavLink to={'/profile'}>My Profile</NavLink>
      </section>
    ) : (
      <ErrorMessage>Failed to fetch user profile</ErrorMessage>
    )
  }

  return (
    <section className="sign-in__content">
      <FontAwesomeIcon
        className="sign-in__icon"
        icon={faCircleUser}
      />
      <h1>Sign In</h1>
      <form onSubmit={handleSubmit}>
        {error && <ErrorMessage>Incorrect login and/or password</ErrorMessage>}
        <Input
          className="input__wrapper"
          label="Email"
          inputType="text"
          content="Email"
          autoComplete="email"
          onChange={(e) => setUserInfo({ ...userInfo, email: e.target.value })}
        />
        <Input
          className="input__wrapper"
          label="Password"
          inputType="password"
          content="Password"
          autoComplete="current-password"
          onChange={(e) =>
            setUserInfo({ ...userInfo, password: e.target.value })
          }
        />
        <Input
          className="input__remember"
          label="remember-me"
          inputType="checkbox"
          content="Remember me"
          value={userInfo.rememberMe}
          labelFirst={false}
          onChange={(e) =>
            setUserInfo({ ...userInfo, rememberMe: e.target.checked })
          }
        />
        <Button
          type="submit"
          className="sign-in-button"
          text="Sign In"
          disabled={loading}
        >
          {loading ? 'Loading...' : 'Sign In'}
        </Button>
      </form>
    </section>
  )
}
