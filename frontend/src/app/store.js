import storage from 'redux-persist/lib/storage'
//import sessionStorage from 'redux-persist/lib/storage/session'
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
  // version: 1,
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

export const persistor = persistStore(store)
