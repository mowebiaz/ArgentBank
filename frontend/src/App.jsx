import { useContext, useEffect } from 'react'
import { useDispatch, Provider } from 'react-redux'
import { PersistGate } from 'redux-persist/integration/react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { Home } from './pages/Home/Home'
import { Login } from './pages/Login'
import { Profile } from './pages/Profile'
import { ErrorPage } from './pages/ErrorPage'
import { Header } from './components/Header/Header'
import { Footer } from './components/Footer/Footer'
import { ProtectedRoute } from './components/ProtectedRoute'
import { PersistContext, PersistProvider } from './context/PersistContext'
import { logout } from './features/authSlice'
import './App.scss'

function App() {
  /*   const dispatch = useDispatch()

  // ou faire un reset store ou persistor purge ?
  useEffect(() => {
    const sessionToken = sessionStorage.getItem('token')
    const localToken = localStorage.getItem('token')

    if (!sessionToken && !localToken) {
      console.log('appel de logout')
      // persistor.purge()
      dispatch(logout())
    }
  }, [dispatch]) */

  const { store, persistor } = useContext(PersistContext)

  return (
    <Provider store={store}>
      <PersistGate
        loading={null}
        persistor={persistor}
      >
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
      </PersistGate>
    </Provider>
  )
}

export default App
