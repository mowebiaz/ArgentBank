import { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { Home } from './pages/Home'
import { Login } from './pages/Login'
import { Profile } from './pages/Profile'
import { ErrorPage } from './pages/ErrorPage'
import { Header } from './components/Header/Header'
import { Footer } from './components/Footer/Footer'
import { ProtectedRoute } from './components/ProtectedRoute'
import { logout, userLogin } from './features/authSlice'
import './App.scss'
import { persistor, store } from './app/store'
import { fetchUserProfile } from './features/userSlice'

function App() {
  const dispatch = useDispatch()

  // ou faire un reset store ou persistor purge ?
  /*useEffect(() => {
    const sessionToken = sessionStorage.getItem('token')
    const localToken = localStorage.getItem('token')

    if (!sessionToken && !localToken) {
      // persistor.purge()
      dispatch(logout())
    }
  }, [dispatch]) */

  /*   useEffect(() => {
    const refreshProfile = async () => {
      const email = localStorage.getItem('email')
      const password = localStorage.getItem('password')

      if (!store.getState().auth.isAuthenticated && email && password) {
        try {
          await dispatch(
            userLogin({ email, password, rememberMe: true })
          ).unwrap()
          await dispatch(fetchUserProfile()).unwrap()
        } catch (error) {
          console.log('Failed to refresh user profile:', error)
        }
      }
    }
    refreshProfile()
  }, [dispatch]) */
 
  useEffect(() => {
    const rememberMe = localStorage.getItem('rememberMe')
    if (rememberMe && rememberMe === 'false') {
      dispatch(logout())
    } else {
      return
    }
  }, [dispatch]) 

  return (
    <>
      <Router>
        <Header />
        <Routes>
          <Route
            path="/"
            element={<Home />}
          />
          <Route
            path="/login"
            element={<Login />}
          />
          <Route element={<ProtectedRoute />}>
            <Route
              path="/profile"
              element={<Profile />}
            />
          </Route>

          <Route
            path="*"
            element={<ErrorPage />}
          />
        </Routes>
        <Footer />
      </Router>
    </>
  )
}

export default App
