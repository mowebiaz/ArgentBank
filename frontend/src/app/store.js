import storage from 'redux-persist/lib/storage' // local storage
import sessionStorage from 'redux-persist/lib/storage/session' // session storage
import { combineReducers, configureStore } from '@reduxjs/toolkit'
import { persistReducer, persistStore } from 'redux-persist'
import authReducer from '../features/authSlice'
import userReducer from '../features/userSlice'

/* const rootReducer = combineReducers({
  auth: authReducer,
  user: userReducer,
})

const persistConfig = {
  key: 'root',
  storage,
}

const persistedReducer = persistReducer(persistConfig, rootReducer)

export const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
})

export const persistor = persistStore(store) */

const rootReducer = combineReducers({
  auth: authReducer,
  user: userReducer,
})

/* config en cas de stockage ds le local storage */
const localPersistConfig = {
  key: 'root',
  storage,
}

/* config en cas de stockage ds le session storage */
const sessionPersistConfig = {
  key: 'root',
  storage: sessionStorage,
}

const localPersistedReducer = persistReducer(localPersistConfig, rootReducer)
const sessionPersistedReducer = persistReducer(
  sessionPersistConfig,
  rootReducer
)

/* fonction qui permet de Creates a Redux store with the given persisted reducer */
const createStore = (persistedReducer) =>
  configureStore({
    reducer: persistedReducer,
    middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware({
        serializableCheck: false,
      }),
  })

/* function createStore(persistedReducer) {
  return configureStore({
    reducer: persistedReducer,
    middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware({
        serializableCheck: false,
      }),
  })
} */

/* creation des stores en fonction du stockage choisi*/
export const localStore = createStore(localPersistedReducer)
export const sessionStore = createStore(sessionPersistedReducer)

/*création des persistor en fonction des stores */
export const localPersistor = persistStore(localStore)
export const sessionPersistor = persistStore(sessionStore)
