import { Button } from '../Button/Button'
import { Input } from '../Input/Input'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCircleUser } from '@fortawesome/free-solid-svg-icons'
import './Form.css'
import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { userLogin } from '../../features/authSlice'

export function Form() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [rememberMe, setRememberMe] = useState(false)
  // à revoir
  const { token, isAuthenticated, loading, error } = useSelector(
    (state) => state.auth
  )
  const dispatch = useDispatch()

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
          onChange={(e) => setEmail(e.target.value)}
        />
        <Input
          className="input-wrapper"
          label="Password"
          inputType="password"
          content="Password"
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
