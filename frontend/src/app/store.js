import storage from 'redux-persist/lib/storage' // local storage
import sessionStorage from 'redux-persist/lib/storage/session' // session storage
import { combineReducers, configureStore } from '@reduxjs/toolkit'
import { persistReducer, persistStore } from 'redux-persist'
import authReducer from '../features/authSlice'
import userReducer from '../features/userSlice'

const rootReducer = combineReducers({
  auth: authReducer,
  user: userReducer,
})

const persistConfig = {
  key: 'root',
  storage: sessionStorage
}

const persistedReducer = persistReducer(persistConfig, rootReducer)

export const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
})

export const persistor = persistStore(store)
