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
import { logout } from './features/authSlice'
import './App.scss'

function App() {
  const dispatch = useDispatch()

  useEffect(() => {
    const rememberMe = localStorage.getItem('rememberMe') || sessionStorage.getItem('rememberMe')
    let storage = rememberMe === 'true' ? localStorage : sessionStorage
    const token = storage.getItem('token')

    if (!token) {
      dispatch(logout())
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
