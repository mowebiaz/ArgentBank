import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { Home } from './pages/Home/Home'
import { Login } from './pages/Login/Login'
import { Profile } from './pages/Profile/Profile'
import { ErrorPage } from './pages/ErrorPage'
import { Header } from './components/Header/Header'
import { Footer } from './components/Footer/Footer'
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
          <Route
            // faire une private route
            path="/profile"
            element={<Profile />}
          />
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
