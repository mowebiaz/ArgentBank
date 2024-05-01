import { Button } from '../Button/Button'
import { Input } from '../Input/Input'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCircleUser } from '@fortawesome/free-solid-svg-icons'
import './Form.css'

export function Form() {
  return (
    <section className="sign-in-content">
      <FontAwesomeIcon
        className="sign-in-icon"
        icon={faCircleUser}
      />
      <h1>Sign In</h1>
      <form action="">
        <Input
          className="input-wrapper"
          label="Username"
          inputType="text"
          content="Username"
        />
        <Input
          className="input-wrapper"
          label="Password"
          inputType="password"
          content="Password"
        />
        <Input
          className="input-remember"
          label="remember-me"
          inputType="checkbox"
          content="Remember me"
          labelFirst={false}
        />
        <Button
          type="submit"
          className="sign-in-button"
          text="Sign In"
        />
      </form>
    </section>
  )
}
