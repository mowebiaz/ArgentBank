import React from 'react'
import ReactDOM from 'react-dom/client'
import { Provider } from 'react-redux'
import { PersistGate } from 'redux-persist/integration/react'
import { PersistProvider } from './context/PersistContext.jsx' // attention à l'ordre des imports
import App from './App.jsx'
import './index.scss'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    {/*     <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
      
 */}
    <PersistProvider>
      <App />
    </PersistProvider>
    {/*       </PersistGate>
    </Provider>
 */}
  </React.StrictMode>
)
