import { NavLink } from 'react-router-dom'

export function ErrorPage() {
  return <main className='main'>
    <h1>404</h1>
    <p>Oops, it seems you are lost</p>
    <NavLink to={'/'}>Return to home page</NavLink>
  </main>
}