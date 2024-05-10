import { combineReducers, configureStore } from '@reduxjs/toolkit'
import authReducer from '../features/authSlice'
import sessionStorage from 'redux-persist/lib/storage/session'
// import thunk  from 'redux-thunk'
//import { default as thunk } from 'redux-thunk';
//import * as thunk from 'redux-thunk';

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
  // à revoir
  /*   middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }), */
  
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: ['persist/PERSIST'],
      },
    })
    // middleware: [thunk]
})

export const persistor = persistStore(store)
