import { combineReducers, configureStore } from '@reduxjs/toolkit'
import authReducer from '../features/authSlice'
import sessionStorage from 'redux-persist/lib/storage/session'
import { persistReducer, persistStore } from 'redux-persist'

const rootReducer = combineReducers({
  auth: authReducer,
})

const persistConfig = {
  key: 'root',
  // version: 1,
  storage: sessionStorage,
}

const persistedReducer = persistReducer(persistConfig, rootReducer)

export const store = configureStore({
  reducer: persistedReducer,
  //devTools: process.env.NODE_ENV !== 'production',

  /*   middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }), */
  
/*   middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: ['persist/PERSIST'],
      },
    }) */
    middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware({
        serializableCheck: false
      }),
})

export const persistor = persistStore(store)
