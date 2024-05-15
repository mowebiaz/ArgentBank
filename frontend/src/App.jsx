import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { Home } from './pages/Home/Home'
import { Login } from './pages/Login/Login'
import { Profile } from './pages/Profile/Profile'
import { ErrorPage } from './pages/ErrorPage'
import { Header } from './components/Header/Header'
import { Footer } from './components/Footer/Footer'
import { ProtectedRoute } from './components/ProtectedRoute/ProtectedRoute'
import './App.css'

function App() {
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
