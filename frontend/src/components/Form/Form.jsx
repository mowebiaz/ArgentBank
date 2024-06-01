import { useContext, useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { NavLink, useNavigate } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCircleUser } from '@fortawesome/free-solid-svg-icons'
import { PersistContext } from '../../context/PersistContext'
import { userLogin } from '../../features/authSlice'
import { fetchUserProfile } from '../../features/userSlice'
import { Input } from '../Input/Input'
import { Button } from '../Button/Button'
import { ErrorMessage } from '../Notifications/Notifications'
import './Form.scss'

export function Form() {
  const [userInfo, setUserInfo] = useState({
    email: '',
    password: '',
    //rememberMe: false,
  })
  const [rememberMe, setRememberMe] = useState(false)

  const { setPersistence } = useContext(PersistContext)

  const {
    isAuthenticated,
    loading: authLoading,
    error: authError,
  } = useSelector((state) => state.auth)

  const {
    user,
    loading: userLoading,
    error: userError,
  } = useSelector((state) => state.user)

  const dispatch = useDispatch()
  const navigate = useNavigate()


  /*   useEffect(() => {
    if (isAuthenticated && !user) {
      dispatch(fetchUserProfile())
    }
  }, [dispatch, isAuthenticated, user])

  useEffect(() => {
    if (user) {
      navigate('/profile')
    }
  }, [user, navigate]) */

    /**
   * if authenticated user , fetches the user profile
   * and navigates to the profile page
   */
  useEffect(() => {
    const fetchAndNavigate = async () => {
      if (isAuthenticated) {
        try {
          await dispatch(fetchUserProfile()).unwrap() // unwrap est utilisé pour obtenir la réponse directement et permettre le catch
          navigate('/profile') // Naviguer seulement si le fetch est réussi
        } catch (error) {
          console.log('Failed to fetch user profile:', error) // Gérer l'erreur ici sans naviguer
        }
      }
    }
    fetchAndNavigate()
  }, [isAuthenticated, dispatch, navigate])

  const handleSubmit = (e) => {
    e.preventDefault()
    setPersistence(rememberMe)
    try {
      dispatch(userLogin(userInfo))
    } catch (error) {
      console.error('Failed to login user:', error)
    }
  }

  return (
    <section className="sign-in__content">
      <FontAwesomeIcon
        className="sign-in__icon"
        icon={faCircleUser}
      />
      <h1>Sign In</h1>
      <form onSubmit={handleSubmit}>
        {authError && (
          <ErrorMessage>Incorrect login and/or password</ErrorMessage>
        )}
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
          //checked={rememberMe}
          onChange={(e) => setRememberMe(e.target.checked)}
          //onChange={(e) => setUserInfo({ ...userInfo, rememberMe: e.target.checked })       }
        />
        <Button
          type="submit"
          className="sign-in-button"
          text="Sign In"
          disabled={authLoading}
        >
          {authLoading ? 'Loading...' : 'Sign In'}
        </Button>
      </form>
      {userLoading && <p>Loading user profile...</p>}
      {userError && <ErrorMessage>Failed to fetch user profile</ErrorMessage>}
    </section>
  )
}
