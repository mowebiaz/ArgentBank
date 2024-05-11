import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCircleUser } from '@fortawesome/free-solid-svg-icons'
import './Form.css'
import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { NavLink, useNavigate } from 'react-router-dom'
import { fetchUserProfile, userLogin } from '../../features/authSlice'
import { Input } from '../Input/Input'
import { Button } from '../Button/Button'

export function Form() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [rememberMe, setRememberMe] = useState(false)
  // à revoir
  const { isAuthenticated, loading, error } = useSelector(
    (state) => state.auth
  )
  const dispatch = useDispatch()
  const navigate = useNavigate()
  /* 
  useEffect(() => {
    if (isAuthenticated) {
      dispatch(fetchUserProfile())
      navigate('/profile')
    }
    /*     if (token) {
      navigate('/profile')
    } 
  }, [isAuthenticated, dispatch, navigate]) */

  useEffect(() => {
    const fetchAndNavigate = async () => {
      if (isAuthenticated) {
        try {
          await dispatch(fetchUserProfile()).unwrap()
          navigate('/profile')
        } catch (error) {
          console.error('Failed to fetch user profile:', error)
          // Gérer l'erreur, peut-être en affichant un message à l'utilisateur
        }
      }
    }

    fetchAndNavigate()
  }, [isAuthenticated, dispatch, navigate])

  const handleSubmit = async (e) => {
    e.preventDefault()
    try {
      dispatch(userLogin({ email, password, rememberMe }))
    } catch (error) {
      // à revoir
      console.log(error)
    }
  }
  // voir la ft form reset
  if (isAuthenticated) {
    return (
      <section className="sign-in-content">
        <p>You are logged in</p>
        <NavLink to={'/profile'}>My Profile</NavLink>
      </section>
    )
  }

  return (
    <section className="sign-in-content">
      <FontAwesomeIcon
        className="sign-in-icon"
        icon={faCircleUser}
      />
      <h1>Sign In</h1>
      <form onSubmit={handleSubmit}>
        {/*       {error && <Error>{error}</Error>}
         */}
        {error && <p>Incorrect login and/or password</p>}

        <Input
          className="input-wrapper"
          label="Email"
          inputType="text"
          content="Email"
          autoComplete="email"
          onChange={(e) => setEmail(e.target.value)}
        />
        <Input
          className="input-wrapper"
          label="Password"
          inputType="password"
          content="Password"
          autoComplete="current-password"
          onChange={(e) => setPassword(e.target.value)}
        />
        <Input
          className="input-remember"
          label="remember-me"
          inputType="checkbox"
          content="Remember me"
          labelFirst={false}
          onChange={(e) => setRememberMe(e.target.checked)}
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