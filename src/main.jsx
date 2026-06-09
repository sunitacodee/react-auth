import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import { BrowserRouter } from 'react-router-dom'
import { AuthProvider } from './context/AuthContext.jsx'
import './css/index.css'
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
    <AuthProvider>
    {/* <AuthLayout> */}
    <App />
    {/* </AuthLayout> */}
    </AuthProvider>
    </BrowserRouter>
  </StrictMode>,
)
