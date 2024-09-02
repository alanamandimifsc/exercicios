import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { AutenticatorProvider } from './contexts/autenticator.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <AutenticatorProvider>
      <App />
    </AutenticatorProvider>
  </StrictMode>,
)
