import { createContext, useContext, useState } from 'react'
import {
  localPersistor,
  localStore,
  sessionPersistor,
  sessionStore,
} from '../app/store'

/* contexte React pour gérer la sélection du store et du persistor. */

export const PersistContext = createContext()

export const PersistProvider = ({ children }) => {
  const [persistState, setPersistState] = useState({
    store: sessionStore,
    persistor: sessionPersistor,
  })

  const setPersistence = async (rememberMe) =>  {
    if (rememberMe) {
      setPersistState({
        store: localStore,
        persistor: localPersistor,
      })
      sessionPersistor.purge()
    }  else {
      setPersistState({
        store: sessionStore,
        persistor: sessionPersistor,
      })
      localPersistor.purge()
    } 
  }

  return (
    <PersistContext.Provider value={{ ...persistState, setPersistence }}>
      {children}
    </PersistContext.Provider>
  )
}
