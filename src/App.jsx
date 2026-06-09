import { useState } from 'react'
import './App.css'
import { Route, Routes } from 'react-router-dom'
import AuthLayout from './layouts/AuthLayout'
import AppRoutes from './routes/appRoutes'
import { AuthProvider } from './context/AuthContext'

function App() {

  return (

    <AuthProvider>
          <AppRoutes/>

    </AuthProvider>
  )
}

export default App
