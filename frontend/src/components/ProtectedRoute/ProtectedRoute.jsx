import { useSelector } from 'react-redux'
import { NavLink, Outlet } from 'react-router-dom'
import './ProtectedRoute.css'

export function ProtectedRoute() {
  const { isAuthenticated } = useSelector((state) => state.auth)

  if (isAuthenticated) {
    return <Outlet />
  }
  return (
    <main>
      <div>
        <h1>Unauthorized :(</h1>
        <span>
          <NavLink to="/login">Login</NavLink> to gain access
        </span>
      </div>
    </main>
  )
}
