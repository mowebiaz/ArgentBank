import { NavLink } from 'react-router-dom'
import logo from '../../assets/logo/argentBankLogo.png'
import './Logo.scss'

export function Logo() {
  return (
    <NavLink
      to={'/'}
      className="logo"
    >
      <img
        className="logo__image"
        src={logo}
        alt="Argent Bank Logo"
      />
      <h1 className="sr-only">Argent Bank</h1>
    </NavLink>
  )
}
