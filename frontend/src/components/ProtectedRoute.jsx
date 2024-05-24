import { useSelector } from 'react-redux'
import { NavLink, Outlet } from 'react-router-dom'
import { ErrorMessage } from './Notifications/Notifications'

export function ProtectedRoute() {
  const { user, isAuthenticated, loading, error } = useSelector(
    (state) => state.auth
  )

  if (isAuthenticated && user) {
    return <Outlet />
  }

  if (isAuthenticated && loading) {
    return (
      <main className="main">
        <div>Try to fetch user profile...</div>
      </main>
    )
  }

  if (isAuthenticated && error) {
    return (
      <main className="main">
        <ErrorMessage>Failed to fetch user profile</ErrorMessage>
      </main>
    )
  }

  if (!isAuthenticated) {
    return (
      <main className="main">
        <div>
          <h1>Unauthorized :(</h1>
          <span>
            <NavLink to="/login">Login</NavLink> to gain access
          </span>
        </div>
      </main>
    )
  }
}
